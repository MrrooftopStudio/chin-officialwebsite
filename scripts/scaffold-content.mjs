// One-time scaffolder: seeds the hand-editable content layer in src/content/
// from the captured Storyblok pageProps. It is SAFE to re-run — it will NOT
// overwrite files that already exist unless you pass --force.
//
//   node scripts/scaffold-content.mjs           # create missing files only
//   node scripts/scaffold-content.mjs --force   # re-seed from the raw capture (destroys edits)
//
// After scaffolding, src/content/ is YOURS to edit by hand. The app reads from
// it directly, so any change there changes the rendered pages.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from "node:fs";
import { join, basename } from "node:path";

const ROOT = process.cwd();
const RESEARCH = join(ROOT, "docs/research/foam.org");
const CONTENT = join(ROOT, "src/content");
const FORCE = process.argv.includes("--force");
mkdirSync(join(CONTENT, "artists"), { recursive: true });

const overview = JSON.parse(JSON.parse(readFileSync(join(RESEARCH, "overview-pageprops.json"), "utf8")));
const artist = JSON.parse(JSON.parse(readFileSync(join(RESEARCH, "artist-cristobal-pageprops.json"), "utf8")));

const cleanUrl = (u) => (u || "").split("?")[0].replace(/\/m\/.*$/, "");
const localImage = (u) => (cleanUrl(u) ? `/images/foam/${basename(cleanUrl(u))}` : "");
const localAudio = (u) => (cleanUrl(u) ? `/audio/foam/${basename(cleanUrl(u))}` : "");
const videoUrl = (u) => cleanUrl(u); // exhibition videos stream from the CDN (disk-constrained)

function rtToHtml(doc) {
  if (!doc || !doc.content) return "";
  const inline = (nodes = []) =>
    nodes
      .map((n) => {
        if (n.type === "text") {
          let t = (n.text || "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
          for (const m of n.marks || []) {
            if (m.type === "italic") t = `<em>${t}</em>`;
            if (m.type === "bold") t = `<strong>${t}</strong>`;
            if (m.type === "link" && m.attrs?.href) t = `<a href="${m.attrs.href}">${t}</a>`;
          }
          return t;
        }
        if (n.type === "hard_break") return "<br/>";
        return "";
      })
      .join("");
  return doc.content
    .map((b) => {
      if (b.type === "heading") return `<h${b.attrs?.level || 2}>${inline(b.content)}</h${b.attrs?.level || 2}>`;
      if (b.type === "paragraph") return `<p>${inline(b.content)}</p>`;
      return "";
    })
    .filter((s) => s && s !== "<p></p>")
    .join("\n");
}
const rtToText = (doc) =>
  (doc?.content || [])
    .flatMap((b) => (b.content || []).map((n) => (n.type === "hard_break" ? "\n" : n.text || "")))
    .join("")
    .trim();
const isItalic = (doc) =>
  (doc?.content || []).some((b) => (b.content || []).some((n) => (n.marks || []).some((m) => m.type === "italic")));

// Pretty-print an HTML string as a template literal: one block tag per line.
function htmlBlock(html) {
  const lines = html.replace(/></g, ">\n<").split("\n");
  const esc = lines.map((l) => l.replace(/\\/g, "\\\\").replace(/`/g, "\\`").replace(/\$\{/g, "\\${"));
  return "`\n" + esc.map((l) => "  " + l).join("\n") + "\n`";
}

function write(rel, contents) {
  const path = join(CONTENT, rel);
  if (existsSync(path) && !FORCE) {
    console.log(`skip (exists)  src/content/${rel}`);
    return;
  }
  writeFileSync(path, contents);
  console.log(`${FORCE ? "force " : "wrote "} src/content/${rel}`);
}

// ---------------- OVERVIEW (homepage) ----------------
const oc = overview.story.content;
const categoryOrder = ["Illustration", "Landscape", "Plants", "Collage", "Archival", "Collaborative", "Portrait", "Digital Manipulation"];
const catMap = {};
overview.adaptedOverviewArtists.forEach((a) =>
  (a.filters[0] || []).forEach((f) => {
    if (!catMap[f.name]) catMap[f.name] = { name: f.name, x: +f.x, y: +f.y, z: +f.z };
  })
);
const categories = categoryOrder.filter((c) => catMap[c]).map((c) => catMap[c]);

const artists = overview.adaptedOverviewArtists.map((a) => ({
  id: a.id,
  slug: a.slug.replace(/^talent-2024\/artist\//, ""),
  name: a.name,
  exhibitionName: a.exhibitionName,
  image: localImage(a.asset.filename),
  alt: a.asset.alt || "",
  title: a.asset.title || "",
  copyright: a.asset.copyright || "",
  position: { x: +a.position.x, y: +a.position.y, z: +a.position.z },
  frameBackgroundColor: a.frameBackgroundColor || "#ffffff",
  frameHighlightColor: a.frameHighlightColor || "#e30613",
  filters: (a.filters[0] || []).map((f) => ({
    name: f.name,
    position: { x: +f.position.x, y: +f.position.y, z: +f.position.z },
    connections: (f.connections || []).map((c) => ({ x: +c.x, y: +c.y, z: +c.z })),
  })),
}));

write(
  "overview.ts",
  `// ════════════════════════════════════════════════════════════════════════
// HOMEPAGE CONTENT — edit freely. Changes here change the / and /talent-2024 pages.
// (Seeded once from the live site by scripts/scaffold-content.mjs; now hand-owned.)
// ════════════════════════════════════════════════════════════════════════
import type { OverviewArtist, Category } from "@/types/foam";

/** Small tagline (currently unused in the UI, kept for completeness). */
export const introText = ${JSON.stringify(oc.introText)};

/** Heading above the artist list in the "i" info panel. */
export const asideTitle = ${JSON.stringify(oc.asideTitle)};

/** Footer/credit line in the info panel. */
export const copyright = ${JSON.stringify(oc.copyright)};

/** Caption under the thumbnail in the info panel. */
export const aboutLabel = ${JSON.stringify("about Foam Talent Digital")};

/** The welcome essay shown in the "i" info panel. Plain HTML — edit the text,
 *  keep the <h1>/<p>/<em> tags. */
export const descriptionHtml = ${htmlBlock(rtToHtml(oc.description))};

/** The 8 filter clusters. name = pill label; x/y/z = the 3D anchor the camera
 *  flies to when that filter is active. */
export const categories: Category[] = ${JSON.stringify(categories, null, 2)};

/** The 20 artists floating in the 3D scatter. Edit name/exhibitionName/image to
 *  change what shows on the homepage. position = default scatter spot; filters =
 *  where each artist moves (+ red connection lines) per active category. */
export const artists: OverviewArtist[] = ${JSON.stringify(artists, null, 2)};
`
);

// ---------------- ARTIST EXHIBITION (Cristóbal) ----------------
const ac = artist.story.content;
const intro = ac.intro?.[0];
const sections = ac.sections.map((s) => {
  const base = { uid: s._uid, component: s.component, backgroundColor: s.background_color?.color || "#000000" };
  if (s.component === "OnlineExhibitionImage")
    return {
      ...base,
      image: localImage(s.image.filename),
      alt: s.image.alt || "",
      top: s.top === "" || s.top == null ? null : +s.top,
      left: s.left === "" || s.left == null ? null : +s.left,
      height: s.height ? +s.height : null,
      sectionWidth: s.sectionWidth ? +s.sectionWidth : null,
      marginLeft: s.marginLeft ? +s.marginLeft : 0,
      marginRight: s.marginRight ? +s.marginRight : 0,
      freeImage: !!s.freeImage,
      disableZoom: !!s.disableZoom,
      captionPosition: s.captionPosition || "",
      caption: rtToText(s.caption),
      credits: rtToText(s.credits),
      creditsItalicLead: isItalic(s.credits),
      modalHtml: s.captionModalText?.html || "",
    };
  if (s.component === "OnlineExhibitionInlineVideo")
    return { ...base, video: videoUrl(s.videoMp4.filename), alt: s.videoMp4.alt || "", title: s.videoMp4.title || "", height: s.height ? +s.height : 100 };
  return base;
});

const exhibition = {
  slug: artist.story.slug,
  artistName: intro?.artistName || artist.story.name,
  exhibitionName: ac.exhibitionName,
  label: ac.label,
  descriptionHtml: rtToHtml(ac.description),
  copyright: ac.copyright,
  audio: { src: localAudio(ac.audio.filename), title: ac.audio.title, copyright: ac.audio.copyright },
  intro: {
    artistName: intro?.artistName,
    exhibitionName: intro?.exhibitionName,
    textColor: intro?.textColor?.color || "#F9DCA1",
    backgroundColor: intro?.background_color?.color || "#1E1E1E",
  },
  nextExhibition: {
    name: artist.nextExhibition.name,
    slug: artist.nextExhibition.slug.replace(/^talent-2024\/artist\//, ""),
    backgroundColor: artist.nextExhibition.backgroundColor,
  },
  sections,
};

// emit with descriptionHtml as a readable template literal, the rest as JSON
const exhibitionJson = JSON.stringify(exhibition, null, 2).replace(
  JSON.stringify(exhibition.descriptionHtml),
  htmlBlock(exhibition.descriptionHtml)
);
write(
  "artists/cristobal-ascencio.ts",
  `// ════════════════════════════════════════════════════════════════════════
// ARTIST EXHIBITION — Cristóbal Ascencio. Edit freely; changes show on
// /talent-2024/artist/cristobal-ascencio.
//   • intro       — the opening title card (artist name + colors)
//   • audio       — the soundscape track (play button)
//   • sections[]  — the horizontal panels, in order:
//       OnlineExhibitionImage  (image + credits + optional species modal)
//       OnlineExhibitionInlineVideo (full-screen looping video, streamed)
//       OnlineExhibitionProse  (empty spacer panel)
//   • descriptionHtml — the "i" panel essay (plain HTML)
// To add another artist: copy artists/_template.ts, fill it in, and register it
// in artists/index.ts.
// ════════════════════════════════════════════════════════════════════════
import type { Exhibition } from "@/types/foam";

export const cristobalAscencio: Exhibition = ${exhibitionJson};
`
);

console.log("\nDone. Edit files in src/content/ to change the pages.");
