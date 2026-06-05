"use client";

import { CloseIcon } from "@/components/icons";

/** Modal opened from an image caption ("Read about this species") — renders the
 *  Storyblok HTML essay (Bromelia / Monstera / Tagetes) on a dark sheet. */
export function SpeciesModal({ html, onClose }: { html: string | null; onClose: () => void }) {
  if (!html) return null;
  return (
    <div className="fixed inset-0 z-40 flex items-center justify-center bg-black/85 px-6" onClick={onClose}>
      <div
        className="no-scrollbar relative max-h-[78vh] w-full max-w-[560px] overflow-y-auto bg-[#0c0c0c] p-8 text-white"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} aria-label="Close" className="absolute right-4 top-4 text-white/70 hover:text-white">
          <CloseIcon className="h-3.5 w-3.5" />
        </button>
        <div className="foam-prose [&_p]:text-[13px] [&_p]:leading-relaxed" dangerouslySetInnerHTML={{ __html: html }} />
      </div>
    </div>
  );
}
