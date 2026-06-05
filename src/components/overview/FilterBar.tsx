"use client";

import { cn } from "@/lib/utils";
import type { Category } from "@/types/foam";

/** Bottom-right pill bar: one pill per category plus the `i` info toggle. */
export function FilterBar({
  categories,
  active,
  dark,
  onToggle,
  onInfo,
}: {
  categories: Category[];
  active: string | null;
  dark: boolean;
  onToggle: (name: string) => void;
  onInfo: () => void;
}) {
  return (
    <div className="pointer-events-auto fixed bottom-5 right-5 z-20 flex flex-wrap items-center justify-end gap-2">
      {categories.map((c) => {
        const isActive = active?.toLowerCase() === c.name.toLowerCase();
        return (
          <button
            key={c.name}
            onClick={() => onToggle(c.name)}
            className={cn(
              "rounded-full border px-4 py-2 font-sans text-[13px] leading-none transition-colors",
              isActive
                ? "border-foam-red text-current"
                : dark
                  ? "border-white/40 text-white hover:border-white"
                  : "border-black/30 text-black hover:border-black",
            )}
          >
            {c.name.toLowerCase()}
          </button>
        );
      })}
      <button
        onClick={onInfo}
        aria-label="About this exhibition"
        className={cn(
          "flex h-9 w-9 items-center justify-center rounded-full border font-serif text-[15px] italic leading-none transition-colors",
          dark ? "border-white/40 text-white hover:border-white" : "border-black/30 text-black hover:border-black",
        )}
      >
        i
      </button>
    </div>
  );
}
