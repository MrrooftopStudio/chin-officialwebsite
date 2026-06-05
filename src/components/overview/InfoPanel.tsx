"use client";

import Image from "next/image";
import { FoamLogo, CloseIcon } from "@/components/icons";
import type { OverviewArtist } from "@/types/foam";

/** Full black overlay: foam wordmark + thumbnail (left), welcome prose (center),
 *  the list of selected artists (right). Toggled by the `i` button. */
export function InfoPanel({
  open,
  onClose,
  descriptionHtml,
  aboutLabel,
  asideTitle,
  copyright,
  artists,
}: {
  open: boolean;
  onClose: () => void;
  descriptionHtml: string;
  aboutLabel: string;
  asideTitle: string;
  copyright: string;
  artists: OverviewArtist[];
}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-30 bg-black text-white">
      <button
        onClick={onClose}
        aria-label="Close"
        className="absolute right-5 top-5 z-10 flex h-7 w-7 items-center justify-center text-white/80 hover:text-white"
      >
        <CloseIcon className="h-3.5 w-3.5" />
      </button>

      <div className="grid h-full grid-cols-[160px_1fr] gap-6 p-6 md:grid-cols-[220px_1fr_240px] md:gap-10 md:p-10">
        {/* left: vertical wordmark + about thumbnail */}
        <div className="flex flex-col justify-between">
          <FoamLogo className="h-9 w-auto" />
          <div className="hidden flex-col gap-2 md:flex">
            <div className="relative aspect-square w-28 overflow-hidden">
              <Image src={artists[0]?.image} alt="" fill className="object-cover grayscale" sizes="112px" />
            </div>
            <span className="font-mono text-[10px] uppercase tracking-wide text-white/60">{aboutLabel}</span>
          </div>
        </div>

        {/* center: welcome prose */}
        <div className="no-scrollbar max-w-[640px] overflow-y-auto pr-2">
          <div className="foam-prose" dangerouslySetInnerHTML={{ __html: descriptionHtml }} />
          <p className="mt-8 font-mono text-[10px] uppercase tracking-wide text-white/40">{copyright}</p>
        </div>

        {/* right: selected artists list */}
        <div className="no-scrollbar hidden overflow-y-auto md:block">
          <h2 className="mb-3 font-mono text-[10px] uppercase tracking-[0.15em] text-white/60">{asideTitle}</h2>
          <ul className="space-y-1">
            {artists.map((a) => (
              <li key={a.id}>
                <a href={`/artist/${a.slug}`} className="text-[13px] text-white/85 transition-colors hover:text-white">
                  {a.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
