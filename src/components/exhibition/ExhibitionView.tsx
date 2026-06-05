"use client";

import Image from "next/image";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ArrowLeftIcon, PlusIcon } from "@/components/icons";
import { PlayerBar } from "@/components/exhibition/PlayerBar";
import { SpeciesModal } from "@/components/exhibition/SpeciesModal";
import { cn } from "@/lib/utils";
import type {
  Exhibition,
  ExhibitionImageSection,
  ExhibitionVideoSection,
} from "@/types/foam";

/** Image height: the CMS `height` is a % of a ~tall stage; ~1.4× → vh reads right. */
const imgHeightVh = (h: number | null) => Math.min(78, (h ?? 35) * 1.4);

function Credits({ text, italicLead }: { text: string; italicLead: boolean }) {
  if (!text) return null;
  if (italicLead && text.includes(",")) {
    const i = text.indexOf(",");
    return (
      <p className="mt-2 font-mono text-[10px] uppercase tracking-wide text-white/60">
        <em className="not-italic font-serif italic normal-case">{text.slice(0, i)}</em>
        {text.slice(i)}
      </p>
    );
  }
  return <p className="mt-2 font-mono text-[10px] uppercase tracking-wide text-white/60">{text}</p>;
}

function ImageBlock({ s, onModal }: { s: ExhibitionImageSection; onModal: (html: string) => void }) {
  const width = s.sectionWidth && s.sectionWidth > 40 ? s.sectionWidth : 460;
  const hasCaption = !!s.caption;
  const captionLeft = s.captionPosition === "left-middle";
  return (
    <div
      className="relative flex h-full shrink-0 flex-col justify-center"
      style={{
        width,
        marginLeft: s.marginLeft || undefined,
        marginRight: s.marginRight || undefined,
        transform: s.top != null ? `translateY(${(s.top - 20) * 0.6}vh)` : undefined,
      }}
    >
      <div className={cn("flex items-center gap-4", captionLeft ? "flex-row" : "flex-col items-start")}>
        {hasCaption && captionLeft && (
          <button
            onClick={() => s.modalHtml && onModal(s.modalHtml)}
            className="max-w-[120px] text-left font-sans text-[11px] leading-snug text-white/80 hover:text-white"
          >
            {s.caption.split("\n").map((line, i) => (
              <span key={i} className={cn("block", i > 0 && "mt-1 underline")}>
                {line}
              </span>
            ))}
          </button>
        )}
        <div className="group relative" style={{ height: `${imgHeightVh(s.height)}vh` }}>
          <Image
            src={s.image}
            alt={s.alt}
            width={2000}
            height={2000}
            className="h-full w-auto object-contain"
            sizes="60vw"
          />
          {!s.disableZoom && (
            <span className="pointer-events-none absolute right-2 top-2 text-white/0 transition-colors group-hover:text-white/80">
              <PlusIcon className="h-3.5 w-3.5" />
            </span>
          )}
        </div>
      </div>
      {!captionLeft && <Credits text={s.credits} italicLead={s.creditsItalicLead} />}
    </div>
  );
}

function VideoBlock({ s }: { s: ExhibitionVideoSection }) {
  return (
    <div className="flex h-full shrink-0 items-center justify-center px-2" style={{ width: "85vw", maxWidth: 1400 }}>
      <video
        src={s.video}
        autoPlay
        loop
        muted
        playsInline
        preload="metadata"
        className="max-h-[88vh] w-auto max-w-full object-contain"
        aria-label={s.alt}
      />
    </div>
  );
}

export function ExhibitionView({ exhibition }: { exhibition: Exhibition }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const target = useRef(0);
  const current = useRef(0);
  const max = useRef(0);
  const drag = useRef<{ down: boolean; x: number }>({ down: false, x: 0 });

  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [modalHtml, setModalHtml] = useState<string | null>(null);
  const [infoOpen, setInfoOpen] = useState(false);

  // eased horizontal scroll loop
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const t = trackRef.current;
      if (t) {
        max.current = Math.max(0, t.scrollWidth - window.innerWidth);
        target.current = Math.min(Math.max(target.current, 0), max.current);
        current.current += (target.current - current.current) * 0.09;
        t.style.transform = `translate3d(${-current.current}px,0,0)`;
      }
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, []);

  // wheel → horizontal
  useEffect(() => {
    const onWheel = (e: WheelEvent) => {
      if (modalHtml || infoOpen) return;
      e.preventDefault();
      target.current += Math.abs(e.deltaY) > Math.abs(e.deltaX) ? e.deltaY : e.deltaX;
    };
    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [modalHtml, infoOpen]);

  const onPointerDown = (e: React.PointerEvent) => {
    drag.current = { down: true, x: e.clientX };
    (e.currentTarget as HTMLElement).setPointerCapture?.(e.pointerId);
  };
  const onPointerMove = (e: React.PointerEvent) => {
    if (!drag.current.down) return;
    target.current -= e.clientX - drag.current.x;
    drag.current.x = e.clientX;
  };
  const onPointerUp = () => {
    drag.current.down = false;
  };

  const toggleAudio = useCallback(() => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
    } else {
      a.pause();
      setPlaying(false);
    }
  }, []);

  return (
    <main className="relative h-screen w-screen overflow-hidden bg-black text-white">
      <audio
        ref={audioRef}
        src={exhibition.audio.src}
        preload="metadata"
        onLoadedMetadata={(e) => setDuration(e.currentTarget.duration)}
        onTimeUpdate={(e) => setTime(e.currentTarget.currentTime)}
        onEnded={() => setPlaying(false)}
      />

      {/* horizontal track */}
      <div
        className="absolute inset-0 cursor-grab touch-none select-none active:cursor-grabbing"
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        <div ref={trackRef} className="flex h-full w-max items-center will-change-transform">
          {/* intro card */}
          <section
            className="flex h-full w-screen shrink-0 flex-col items-center justify-center"
            style={{ backgroundColor: exhibition.intro.backgroundColor, color: exhibition.intro.textColor }}
          >
            <p className="mb-4 font-mono text-[11px] uppercase tracking-[0.2em]">{exhibition.intro.artistName}</p>
            <h1 className="max-w-[16ch] text-center font-serif text-[clamp(2rem,6vw,5rem)] italic leading-[1.05]">
              {exhibition.intro.exhibitionName}
            </h1>
          </section>

          {/* sections */}
          {exhibition.sections.map((s) => {
            if (s.component === "OnlineExhibitionImage")
              return <ImageBlock key={s.uid} s={s} onModal={setModalHtml} />;
            if (s.component === "OnlineExhibitionInlineVideo") return <VideoBlock key={s.uid} s={s} />;
            return <div key={s.uid} className="h-full w-[12vw] shrink-0" aria-hidden />;
          })}

          {/* next exhibition */}
          <section
            className="flex h-full w-screen shrink-0 flex-col items-center justify-center gap-4"
            style={{ backgroundColor: exhibition.nextExhibition.backgroundColor }}
          >
            <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">next exhibition</span>
            <Link
              href={`/talent-2024/artist/${exhibition.nextExhibition.slug}`}
              className="font-serif text-[clamp(1.5rem,4vw,3.5rem)] italic text-white transition-opacity hover:opacity-70"
            >
              {exhibition.nextExhibition.name}
            </Link>
          </section>
        </div>
      </div>

      {/* back button */}
      <Link
        href="/talent-2024"
        aria-label="Back to overview"
        className="absolute left-5 top-5 z-30 flex items-center border border-white/40 px-3 py-2 text-white/90 transition-colors hover:border-white"
      >
        <ArrowLeftIcon className="h-3 w-14" />
      </Link>

      <PlayerBar
        playing={playing}
        time={time}
        duration={duration}
        label={exhibition.label}
        onToggle={toggleAudio}
        onInfo={() => setInfoOpen(true)}
      />

      <SpeciesModal html={modalHtml} onClose={() => setModalHtml(null)} />

      {/* description / info overlay */}
      {infoOpen && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/90 px-6" onClick={() => setInfoOpen(false)}>
          <div className="no-scrollbar max-h-[80vh] max-w-[640px] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="foam-prose text-white" dangerouslySetInnerHTML={{ __html: exhibition.descriptionHtml }} />
            <p className="mt-8 font-mono text-[10px] uppercase tracking-wide text-white/40">{exhibition.copyright}</p>
          </div>
        </div>
      )}
    </main>
  );
}
