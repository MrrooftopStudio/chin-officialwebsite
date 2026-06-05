// Downloads all assets for the Foam Talent 2024 clone:
// - Storyblok images/videos/audio referenced in the captured pageProps JSON
// - Monument Grotesk woff2 fonts self-hosted by foam.org
// - favicons
// Run: node scripts/download-assets.mjs
import { readFileSync, mkdirSync, existsSync, writeFileSync } from "node:fs";
import { join, basename } from "node:path";

const ROOT = process.cwd();
const RESEARCH = join(ROOT, "docs/research/foam.org");
const PUB = join(ROOT, "public");

const dirs = {
  images: join(PUB, "images/foam"),
  videos: join(PUB, "videos/foam"),
  audio: join(PUB, "audio/foam"),
  fonts: join(PUB, "fonts"),
  seo: join(PUB, "seo"),
};
Object.values(dirs).forEach((d) => mkdirSync(d, { recursive: true }));

// 1. Collect storyblok asset URLs from the two pageProps dumps
const json = [
  readFileSync(join(RESEARCH, "overview-pageprops.json"), "utf8"),
  readFileSync(join(RESEARCH, "artist-cristobal-pageprops.json"), "utf8"),
].join("\n");

// match a.storyblok.com / a2.storyblok.com asset URLs (full original, strip /m/... transform)
const re = /https:\/\/a\d?\.storyblok\.com\/f\/[^\s"'\\]+?\.(?:jpg|jpeg|png|webp|gif|mp4|webm|mov|mp3|wav|m4a)/gi;
const sbUrls = [...new Set((json.match(re) || []).map((u) => u.replace(/\/m\/.*$/, "")))];

// 2. Fonts + favicons (explicit)
const fonts = [
  "https://www.foam.org/_next/static/media/404e56df4fd31eb7-s.p.woff2",
  "https://www.foam.org/_next/static/media/6ccbba1ade86daf3-s.p.woff2",
  "https://www.foam.org/_next/static/media/ecbda7e8a982a27f-s.p.woff2",
  "https://www.foam.org/_next/static/media/4045db3afed45553-s.p.woff2",
  "https://www.foam.org/fonts/MonumentGrotesk-Semi-Mono.woff2",
];
const favicons = [
  "https://www.foam.org/favicon.ico",
  "https://www.foam.org/icons/favicon-32x32.png",
  "https://www.foam.org/icons/favicon-16x16.png",
  "https://www.foam.org/icons/apple-touch-icon.png",
  "https://www.foam.org/icons/safari-pinned-tab.svg",
];

function destFor(url) {
  const ext = url.split("?")[0].split(".").pop().toLowerCase();
  if (["mp4", "webm", "mov"].includes(ext)) return join(dirs.videos, basename(url.split("?")[0]));
  if (["mp3", "wav", "m4a"].includes(ext)) return join(dirs.audio, basename(url.split("?")[0]));
  return join(dirs.images, basename(url.split("?")[0]));
}

const jobs = [
  ...sbUrls.map((u) => ({ url: u, dest: destFor(u) })),
  ...fonts.map((u) => ({ url: u, dest: join(dirs.fonts, basename(u.split("?")[0])) })),
  ...favicons.map((u) => ({ url: u, dest: join(dirs.seo, basename(u.split("?")[0])) })),
];

async function download({ url, dest }) {
  if (existsSync(dest)) return { url, dest, skipped: true };
  const res = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0 (clone-bot)" } });
  if (!res.ok) throw new Error(`${res.status} ${url}`);
  const buf = Buffer.from(await res.arrayBuffer());
  writeFileSync(dest, buf);
  return { url, dest, bytes: buf.length };
}

// batched parallel (4 at a time)
const BATCH = 4;
const results = [];
for (let i = 0; i < jobs.length; i += BATCH) {
  const batch = jobs.slice(i, i + BATCH);
  const settled = await Promise.allSettled(batch.map(download));
  settled.forEach((s, j) => {
    if (s.status === "fulfilled") {
      const r = s.value;
      console.log(`${r.skipped ? "skip" : "ok  "} ${basename(r.dest)}${r.bytes ? ` (${(r.bytes / 1024).toFixed(0)}kb)` : ""}`);
      results.push(r);
    } else {
      console.error(`FAIL ${batch[j].url}: ${s.reason.message}`);
    }
  });
}
console.log(`\nDone. ${results.length}/${jobs.length} files. Storyblok assets: ${sbUrls.length}`);
