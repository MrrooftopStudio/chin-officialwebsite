// ════════════════════════════════════════════════════════════════════════
// ARTIST REGISTRY — maps a URL slug to its full exhibition data.
// To publish a new artist's exhibition page:
//   1. copy `_template.ts` to `<slug>.ts` and fill it in
//   2. import it below and add it to `exhibitions`
// Slugs that are NOT in this map fall back to a "coming soon" placeholder.
// ════════════════════════════════════════════════════════════════════════
import type { Exhibition } from "@/types/foam";
import { cristobalAscencio } from "./cristobal-ascencio";

export const exhibitions: Record<string, Exhibition> = {
  "cristobal-ascencio": cristobalAscencio,
};

export function getExhibition(slug: string): Exhibition | undefined {
  return exhibitions[slug];
}
