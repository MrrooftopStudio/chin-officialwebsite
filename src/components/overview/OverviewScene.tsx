"use client";

/* eslint-disable react-hooks/immutability --
 * This is a react-three-fiber scene. Mutating three.js engine objects in place
 * (camera.position, texture.colorSpace, mesh transforms inside useFrame) is the
 * documented, intended R3F pattern — they are mutable GPU-backed objects, not
 * React state, so the immutability rule does not apply here. */

import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame, useLoader, useThree } from "@react-three/fiber";
import { Html, Line } from "@react-three/drei";
import * as THREE from "three";
import type { OverviewArtist, Vec3 } from "@/types/foam";

const PLANE_HEIGHT = 3.4; // base world height of a photo; width derives from aspect
const HOVER_SCALE = 1.08;

// Camera framing
const REST_Z = 28; // resting distance — closer than before so artwork fills more of the screen
const INTRO_START_Z = 2; // opening close-up: a central artwork nearly fills the screen
const INTRO_DUR = 2.8; // seconds — the zoom-out reveal
const HOME = { x: 0, y: 1 }; // the centred home view — y≈the artwork cluster's centre so it sits mid-screen
const ZOOM_MIN = 10; // closest the wheel can dolly the camera in
const ZOOM_MAX = 55; // farthest the wheel can dolly out
const WHEEL_K = 0.018; // wheel delta → world units of dolly

// Idle motion — the field rotates continuously in ONE direction around the Y axis,
// pivoting about the cluster's own centre so it spins in place.
const ROT_SPEED = 0.08; // radians / second → one full turn ≈ 79s
const DRAG_ROT = 0.006; // radians of rotation per pixel of drag
const MAX_TILT = 0.6; // clamp for the up/down (X-axis) drag tilt, radians

/** Shared spin state. `angle` (Y) grows forever and also takes horizontal drag; `tilt`
 *  (X) takes vertical drag. `weight` (0..1) fades the whole rotation out under a filter
 *  (fading the influence avoids un-winding the angle). */
interface Spin {
  angle: number;
  tilt: number;
  weight: number;
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}
function easeInOutCubic(t: number) {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
}

/** A single artist photo plane. Loads its texture, sizes by aspect ratio, and
 *  animates toward its scatter position (default) or category position (filtered). */
function ArtistPlane({
  artist,
  activeFilter,
  centroid,
  spin,
  onSelect,
}: {
  artist: OverviewArtist;
  activeFilter: string | null;
  centroid: { x: number; y: number; z: number };
  spin: React.MutableRefObject<Spin>;
  onSelect: (a: OverviewArtist) => void;
}) {
  const tex = useLoader(THREE.TextureLoader, artist.image);
  tex.colorSpace = THREE.SRGBColorSpace;
  const aspect = (tex.image?.width || 1) / (tex.image?.height || 1);
  const w = PLANE_HEIGHT * aspect;
  const h = PLANE_HEIGHT;

  const group = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  // target placement for this frame (scatter position, or category cluster when filtered)
  const target = useMemo(() => {
    if (!activeFilter) return { pos: artist.position, visible: true };
    const f = artist.filters.find((x) => x.name.toLowerCase() === activeFilter.toLowerCase());
    return { pos: f ? f.position : artist.position, visible: !!f };
  }, [artist, activeFilter]);

  // the settled position (scatter or category cluster), before the spin is applied
  const base = useRef(new THREE.Vector3(artist.position.x, artist.position.y, artist.position.z));

  useFrame((_, dt) => {
    const g = group.current;
    if (!g) return;
    const k = 1 - Math.pow(0.0015, dt); // smooth critically-ish damped lerp
    base.current.x = lerp(base.current.x, target.pos.x, k);
    base.current.y = lerp(base.current.y, target.pos.y, k);
    base.current.z = lerp(base.current.z, target.pos.z, k);

    // orbit the base position around the cluster centroid: first around Y (auto-spin +
    // horizontal drag), then around X (vertical-drag tilt).
    const { angle, tilt, weight } = spin.current;
    const vx = base.current.x - centroid.x;
    const vy = base.current.y - centroid.y;
    const vz = base.current.z - centroid.z;
    // Y rotation (in the x–z plane)
    const cy = Math.cos(angle);
    const sy = Math.sin(angle);
    const x1 = vx * cy + vz * sy;
    const z1 = -vx * sy + vz * cy;
    // X rotation / tilt (in the y–z plane)
    const cx = Math.cos(tilt);
    const sx = Math.sin(tilt);
    const y2 = vy * cx - z1 * sx;
    const z2 = vy * sx + z1 * cx;
    const rx = centroid.x + x1;
    const ry = centroid.y + y2;
    const rz = centroid.z + z2;
    // …blended by `weight` (faded out under an active filter). The plane itself keeps
    // its identity orientation, so it always stays flat-on to the viewer.
    g.position.set(
      lerp(base.current.x, rx, weight),
      lerp(base.current.y, ry, weight),
      lerp(base.current.z, rz, weight),
    );

    const s = (target.visible ? 1 : 0.001) * (hovered ? HOVER_SCALE : 1);
    g.scale.x = lerp(g.scale.x, s, k);
    g.scale.y = lerp(g.scale.y, s, k);
    g.scale.z = 1;
  });

  return (
    <group
      ref={group}
      position={[artist.position.x, artist.position.y, artist.position.z]}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
        document.body.style.cursor = "pointer";
      }}
      onPointerOut={() => {
        setHovered(false);
        document.body.style.cursor = "";
      }}
      onClick={(e) => {
        e.stopPropagation();
        onSelect(artist);
      }}
    >
      {/* highlight frame — appears on hover in the artist's accent color */}
      <mesh position={[0, 0, -0.02]} scale={hovered ? 1 : 0.0001}>
        <planeGeometry args={[w + 0.22, h + 0.22]} />
        <meshBasicMaterial color={artist.frameHighlightColor} toneMapped={false} />
      </mesh>
      <mesh>
        <planeGeometry args={[w, h]} />
        <meshBasicMaterial map={tex} toneMapped={false} transparent />
      </mesh>
      {hovered && (
        <Html position={[0, -h / 2 - 0.25, 0]} center distanceFactor={14} zIndexRange={[40, 0]}>
          <div className="pointer-events-none whitespace-nowrap text-center font-sans text-[11px] leading-tight text-current">
            <span className="font-medium">{artist.name}</span>
            <span className="mx-1 opacity-50">·</span>
            <span className="italic opacity-80">{artist.exhibitionName}</span>
          </div>
        </Html>
      )}
    </group>
  );
}

/** Red network lines connecting the active category's nodes. */
function ConnectionLines({ artists, activeFilter }: { artists: OverviewArtist[]; activeFilter: string }) {
  const segments = useMemo(() => {
    const segs: [number, number, number][][] = [];
    artists.forEach((a) => {
      const f = a.filters.find((x) => x.name.toLowerCase() === activeFilter.toLowerCase());
      if (!f) return;
      const from: [number, number, number] = [f.position.x, f.position.y, f.position.z];
      (f.connections || []).forEach((c: Vec3) => {
        segs.push([from, [c.x, c.y, c.z]]);
      });
    });
    return segs;
  }, [artists, activeFilter]);

  return (
    <group>
      {segments.map((pts, i) => (
        <Line key={i} points={pts} color="#e30613" lineWidth={1} transparent opacity={0.85} />
      ))}
    </group>
  );
}

/** Camera pan driven by pointer drag, with smooth damping and depth parallax (free
 *  via perspective). The whole field is panned by moving the camera in x/y. */
/** Mounts only once all textures have resolved (it lives inside <Suspense>), so it
 *  is the signal that the scene is ready and the intro zoom may begin. */
function ReadySignal({ onReady }: { onReady: () => void }) {
  useEffect(() => {
    onReady();
  }, [onReady]);
  return null;
}

function PanRig({
  dragRef,
  focus,
  beginRef,
  zoomRef,
}: {
  dragRef: React.MutableRefObject<{ x: number; y: number }>;
  focus: { x: number; y: number } | null;
  beginRef: React.MutableRefObject<boolean>;
  zoomRef: React.MutableRefObject<number>;
}) {
  const { camera } = useThree();
  const introT0 = useRef<number | null>(null);
  const prevFocus = useRef(false);
  useFrame((state, dt) => {
    const t = state.clock.elapsedTime;
    const k = 1 - Math.pow(0.002, dt);

    // hold the close-up until textures are ready, then zoom OUT to the resting distance
    if (!beginRef.current) {
      camera.position.z = INTRO_START_Z;
      camera.lookAt(camera.position.x, camera.position.y, 0);
      return;
    }
    if (introT0.current === null) introT0.current = t;
    const p = Math.min((t - introT0.current) / INTRO_DUR, 1);
    // during the intro, run the zoom-out; afterwards, follow the wheel-controlled zoom
    if (p < 1) camera.position.z = lerp(INTRO_START_Z, REST_Z, easeInOutCubic(p));
    else camera.position.z = lerp(camera.position.z, zoomRef.current, k);

    // closing a filter → recentre the camera on the field (HOME), not the cluster anchor
    if (prevFocus.current && !focus) {
      dragRef.current.x = HOME.x;
      dragRef.current.y = HOME.y;
    }
    prevFocus.current = !!focus;

    // a filter eases the camera to that cluster's anchor; otherwise it follows drag.
    // Note: focus does NOT overwrite dragRef, so the home view is preserved.
    const tx = focus ? focus.x : dragRef.current.x;
    const ty = focus ? focus.y : dragRef.current.y;
    camera.position.x = lerp(camera.position.x, tx, k);
    camera.position.y = lerp(camera.position.y, ty, k);
    camera.lookAt(camera.position.x, camera.position.y, 0);
  });
  return null;
}

function Loader() {
  return (
    <Html center>
      <div className="font-mono text-[10px] tracking-wide text-current opacity-50">loading…</div>
    </Html>
  );
}

/** Advances the shared spin: the angle grows forever in one direction; the weight
 *  eases to 0 when a filter is active (so the constellation un-spins to its anchors)
 *  and back to 1 otherwise. */
function FieldSpin({ spin, enabled }: { spin: React.MutableRefObject<Spin>; enabled: boolean }) {
  useFrame((_, dt) => {
    spin.current.angle += ROT_SPEED * dt;
    spin.current.weight = lerp(spin.current.weight, enabled ? 1 : 0, 1 - Math.pow(0.02, dt));
  });
  return null;
}

export function OverviewScene({
  artists,
  activeFilter,
  focus,
  onSelect,
}: {
  artists: OverviewArtist[];
  activeFilter: string | null;
  focus: { x: number; y: number } | null;
  onSelect: (a: OverviewArtist) => void;
}) {
  // drag target for the camera; clamped to the field extent
  const drag = useRef({ x: HOME.x, y: HOME.y });
  // becomes true once textures finish loading — gates the intro zoom
  const begin = useRef(false);
  // wheel-controlled camera distance (z); starts at the resting distance
  const zoom = useRef(REST_Z);
  // shared turntable spin (angle grows forever; tilt + weight from drag/filter)
  const spin = useRef<Spin>({ angle: 0, tilt: 0, weight: 1 });
  // the cluster centre we pivot the rotation about, so the field spins in place
  const centroid = useMemo(() => {
    const n = artists.length || 1;
    const sum = artists.reduce(
      (a, art) => ({ x: a.x + art.position.x, y: a.y + art.position.y, z: a.z + art.position.z }),
      { x: 0, y: 0, z: 0 },
    );
    return { x: sum.x / n, y: sum.y / n, z: sum.z / n };
  }, [artists]);
  const pointer = useRef<{ down: boolean; lastX: number; lastY: number; moved: boolean }>({
    down: false,
    lastX: 0,
    lastY: 0,
    moved: false,
  });

  const onPointerDown = (e: React.PointerEvent) => {
    pointer.current = { down: true, lastX: e.clientX, lastY: e.clientY, moved: false };
    (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!pointer.current.down) return;
    const dx = e.clientX - pointer.current.lastX;
    const dy = e.clientY - pointer.current.lastY;
    if (Math.abs(dx) + Math.abs(dy) > 3) pointer.current.moved = true;
    pointer.current.lastX = e.clientX;
    pointer.current.lastY = e.clientY;
    // drag ROTATES the field by the drag direction: horizontal → Y spin, vertical → X tilt
    spin.current.angle += dx * DRAG_ROT;
    spin.current.tilt = THREE.MathUtils.clamp(spin.current.tilt + dy * DRAG_ROT, -MAX_TILT, MAX_TILT);
  };
  const onPointerUp = () => {
    pointer.current.down = false;
  };
  const onWheel = (e: React.WheelEvent) => {
    // wheel dollies the camera along z (zoom in / out)
    zoom.current = THREE.MathUtils.clamp(zoom.current + e.deltaY * WHEEL_K, ZOOM_MIN, ZOOM_MAX);
  };

  return (
    <Canvas
      className="!absolute inset-0 touch-none"
      gl={{ alpha: true, antialias: true }}
      camera={{ position: [0, HOME.y, INTRO_START_Z], fov: 40, near: 0.1, far: 200 }}
      dpr={[1, 2]}
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={onPointerUp}
      onPointerLeave={onPointerUp}
      onWheel={onWheel}
    >
      <PanRig dragRef={drag} focus={focus} beginRef={begin} zoomRef={zoom} />
      <FieldSpin spin={spin} enabled={!activeFilter} />
      <Suspense fallback={<Loader />}>
        {artists.map((a) => (
          <ArtistPlane
            key={a.id}
            artist={a}
            activeFilter={activeFilter}
            centroid={centroid}
            spin={spin}
            onSelect={(art) => !pointer.current.moved && onSelect(art)}
          />
        ))}
        <ReadySignal onReady={() => (begin.current = true)} />
      </Suspense>
      {activeFilter && <ConnectionLines artists={artists} activeFilter={activeFilter} />}
    </Canvas>
  );
}
