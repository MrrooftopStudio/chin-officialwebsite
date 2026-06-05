# Foam Talent 2024 — Behavior Bible

Two bespoke immersive experiences. Stack: Next.js (pages router on the original),
Storyblok CMS, **Three.js (WebGL2)** for the overview, custom horizontal scroller +
Web Audio for the artist exhibition. Type: **Monument Grotesk** (sans, 400 + italic),
**Kormelink** (serif, 400 + italic — editorial prose / italic titles),
**Monument Grotesk Mono**, **PurpleHaze** (display — the foam wordmark).
Accent red **#E30613** (rgb 227,6,19). Base UI font-size 10px.

## Page A — `/talent-2024` (Overview, 3D scatter network)

Single full-viewport `<canvas>` (no DOM images). 20 artist photos float as textured
planes in a 3D space; camera looks down −z. DOM chrome overlays the canvas.

- **Default state:** WHITE background. All 20 images scattered at their `position{x,y,z}`
  (x −35..40, y −1.5..19.5, z −17..+10). foam wordmark top-left (black). Filter pills +
  `i` button bottom-right.
- **Navigation:** drag to pan the camera across the field; subtle depth parallax
  (nearer/larger planes move more). Idle = static.
- **Hover image:** the frame highlights (border in the artist's `frameHighlightColor`),
  cursor pointer; name/exhibition label appears. Click → `/talent-2024/artist/<slug>`.
- **Filter active (click a pill):** background flips to BLACK; only that category's
  artists remain, repositioned to that category's `filter.position`; **red (#E30613)
  network lines** connect nodes (`filter.connections`); pill gains red border; an `×`
  close button appears top-center. Clicking `×` or the pill again returns to default.
- **`i` info panel:** BLACK full overlay. Left: foam wordmark (vertical) + thumbnail +
  "about Foam Talent Digital". Center: welcome prose (Kormelink, italic h1 lead) =
  `descriptionHtml`. Right: "SELECTED ARTISTS" + list of all 20 names.
- **Pills (8, in order):** illustration, landscape, plants, collage, archival,
  collaborative, portrait, digital manipulation. 10px Monument Grotesk, padding 6/12,
  stadium border; active = red border, on black.

## Page B — `/talent-2024/artist/cristobal-ascencio` (OnlineExhibition)

BLACK background. A **horizontal flex track** (~10,840px wide) translated by wheel/drag
(overflow hidden, eased). 17 sections laid left→right.

- **Intro (start):** fixed title card — bg `#1E1E1E`, text `#F9DCA1` — artistName
  "Cristóbal Ascencio" + italic exhibitionName "Las flores mueren dos veces".
- **Sections** (data-driven from `cristobal.ts`):
  - `OnlineExhibitionImage` — positioned image (`top`/`left` %, `height` vh-ish %,
    `sectionWidth` px), `credits` (italic lead word, e.g. *MARGARITO*), optional
    `caption` ("← Bromelia / Read about this species") with `captionPosition`, optional
    `modalHtml` (species essay) opened by clicking the caption. `disableZoom` hides zoom.
  - `OnlineExhibitionInlineVideo` — full-height autoplay/loop/muted `<video>` (plants:
    Bromelia, Monstera, Tagetes; plus the digital-garden render). Streamed from CDN.
  - `OnlineExhibitionProse` — empty spacer panels (rhythm/gaps).
- **Player bar (fixed bottom):** white Monument Grotesk 10px, padding 0 80px. Play▶/Pause
  toggle for the soundscape mp3 (03:24), timecode (mm:ss), label "Las flores mueren dos
  veces", `i` info button. No native control chrome.
- **Back button (fixed top-left):** bordered box + long left arrow → returns to `/talent-2024`.
- **`i` panel:** description prose (Kormelink) + copyright.
- **End:** "next exhibition" link → Cansu Yıldıran (`/artist/cansu-yildiran`, bg #130506).

## Responsive
Both are desktop-first immersive pieces (built around a 1440×900 stage). On mobile the
original keeps the same model with touch drag/swipe; pills wrap. We target desktop 1:1
and keep touch drag + wrapped chrome on small screens.
