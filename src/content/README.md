# Editing the exhibition content

Everything the two pages display comes from the files in this folder. **Edit a
file here, save, and the page updates** (the dev server hot-reloads; a deploy
rebuilds). You do not need to touch any component code.

```
src/content/
  overview.ts                  ← the homepage ( / and /talent-2024 )
  artists/
    index.ts                   ← registry: which slugs have a real exhibition
    cristobal-ascencio.ts      ← one artist's exhibition
    _template.ts               ← copy this to add a new artist
```

## 1. Change the homepage — `overview.ts`

| You want to change… | Edit… |
| --- | --- |
| The welcome text in the `i` panel | `descriptionHtml` |
| The "selected artists" heading / credit line | `asideTitle`, `copyright` |
| An artist's name, work title, or photo | the matching entry in `artists[]` (`name`, `exhibitionName`, `image`) |
| Where a photo floats in 3D | that entry's `position: { x, y, z }` |
| The filter pills / where a cluster sits | `categories[]` (and each artist's `filters[]`) |

Images live in `public/images/foam/`. To use a new photo, drop the file there
and set `image: "/images/foam/your-file.jpg"`.

## 2. Change an artist page — `artists/<slug>.ts`

Open `artists/cristobal-ascencio.ts`. Edit:

- `intro` — the opening title card (name + colors).
- `audio` — the soundscape the play button controls.
- `descriptionHtml` — the essay in the `i` panel.
- `sections[]` — the horizontal panels in order. Three kinds:
  - `OnlineExhibitionImage` — a photo (`image`, `credits`, optional `caption` +
    `modalHtml` species pop-up, `sectionWidth`, `height`).
  - `OnlineExhibitionInlineVideo` — a full-screen looping `video` (URL streams
    from the CDN).
  - `OnlineExhibitionProse` — an empty spacer panel for breathing room.

Reorder, add, or delete entries in `sections[]` to restructure the walkthrough.

## 3. Add a brand-new artist exhibition

1. Copy `artists/_template.ts` → `artists/<slug>.ts` and fill it in.
2. Register it in `artists/index.ts` (import + add to `exhibitions`).
3. Make sure that `<slug>` also exists in `overview.ts` `artists[]` so it shows
   on the homepage. Slugs without a registered exhibition show a placeholder.

## Re-seeding from the original site (rarely needed)

`scripts/scaffold-content.mjs` generated these files once from the captured
Storyblok data in `docs/research/foam.org/`. It will **not** overwrite your edits
on a normal run. Only `node scripts/scaffold-content.mjs --force` re-seeds and
discards local changes.
