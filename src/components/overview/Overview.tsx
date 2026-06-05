"use client";

import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { CloseIcon } from "@/components/icons";
import { FilterBar } from "@/components/overview/FilterBar";
import { InfoPanel } from "@/components/overview/InfoPanel";
import { artists, categories, descriptionHtml, aboutLabel, asideTitle, copyright } from "@/content/overview";
import { cn } from "@/lib/utils";
import type { OverviewArtist } from "@/types/foam";

// The R3F canvas is client-only (WebGL); skip SSR to avoid hydration of the scene.
const OverviewScene = dynamic(() => import("@/components/overview/OverviewScene").then((m) => m.OverviewScene), {
  ssr: false,
});

export function Overview() {
  const router = useRouter();
  const [activeFilter, setActiveFilter] = useState<string | null>(null);
  const [infoOpen, setInfoOpen] = useState(false);
  const dark = activeFilter !== null;

  const toggleFilter = (name: string) =>
    setActiveFilter((cur) => (cur?.toLowerCase() === name.toLowerCase() ? null : name));

  const select = (a: OverviewArtist) => router.push(`/artist/${a.slug}`);

  const focusCat = activeFilter ? categories.find((c) => c.name.toLowerCase() === activeFilter.toLowerCase()) : null;
  const focus = focusCat ? { x: focusCat.x, y: focusCat.y } : null;

  return (
    <main
      className={cn(
        "relative h-screen w-screen overflow-hidden transition-colors duration-500",
        dark ? "bg-black text-white" : "bg-white text-black",
      )}
    >
      <OverviewScene artists={artists} activeFilter={activeFilter} focus={focus} onSelect={select} />

      {/* ROOFFILM wordmark, top-left — rotated 90° counter-clockwise (vertical) */}
      <a href="/" aria-label="ROOFFILM" className="pointer-events-auto absolute left-4 top-5 z-10">
        <div className="relative h-[150px] w-[38px]">
          <img
            src="/images/logo.gif"
            alt="ROOFFILM"
            className="absolute left-1/2 top-1/2 w-[150px] max-w-none -translate-x-1/2 -translate-y-1/2 -rotate-90"
          />
        </div>
      </a>

      {/* close filter, top-center */}
      {activeFilter && (
        <button
          onClick={() => setActiveFilter(null)}
          aria-label="Clear filter"
          className="pointer-events-auto absolute left-1/2 top-4 z-20 flex h-8 w-8 -translate-x-1/2 items-center justify-center border border-white/40 text-white/90 transition-colors hover:border-white"
        >
          <CloseIcon className="h-3.5 w-3.5" />
        </button>
      )}

      <FilterBar categories={categories} active={activeFilter} dark={dark} onToggle={toggleFilter} onInfo={() => setInfoOpen(true)} />

      <InfoPanel
        open={infoOpen}
        onClose={() => setInfoOpen(false)}
        descriptionHtml={descriptionHtml}
        aboutLabel={aboutLabel}
        asideTitle={asideTitle}
        copyright={copyright}
        artists={artists}
      />
    </main>
  );
}
