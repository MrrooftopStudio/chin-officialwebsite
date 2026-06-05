# Page Topology & Assembly Blueprint

## Routes
- `/` → redirect/render the overview (we render overview at `/` and also at `/talent-2024`).
- `/talent-2024` → `OverviewScene` (R3F canvas) + chrome overlays.
- `/talent-2024/artist/[slug]` → `ExhibitionView` (horizontal scroller). Data for
  `cristobal-ascencio` is complete; other slugs render a graceful "coming soon" using
  overview metadata (only Cristóbal was in scope).

## Overview composition (z-order, all over a fixed full-screen canvas)
1. `<OverviewScene>` — R3F `<Canvas>`, perspective camera, 20 `<ArtistPlane>`, drag-pan
   controls, `<ConnectionLines>` (filter active). z:0
2. `FoamLogo` top-left. z:10
3. `FilterBar` (8 pills + `i`) bottom-right. z:20
4. `CloseButton` top-center (filter active). z:20
5. `InfoPanel` full overlay (toggled by `i`). z:30
State owned by the page: `activeFilter: string | null`, `infoOpen: boolean`.

## Artist composition
1. `ExhibitionTrack` — horizontal flex; children: `IntroCard`, then mapped sections
   (`ImageSection` / `VideoSection` / `ProseSpacer`), then `NextExhibition`.
2. `PlayerBar` fixed bottom (audio + label + `i`).
3. `BackButton` fixed top-left.
4. `SpeciesModal` (opened from image captions).
5. `InfoPanel` (description) toggled by player `i`.
Drag/wheel → eased translateX. State: `scrollX`, `playing`, `currentTime`, `modal`, `infoOpen`.

## Build order (sequential, single workspace — disk-constrained, no worktrees)
Foundation ✓ → Overview shared components → OverviewScene → Overview page →
Artist sections → PlayerBar/BackButton/Modal → Artist page → Assembly → Visual QA.
