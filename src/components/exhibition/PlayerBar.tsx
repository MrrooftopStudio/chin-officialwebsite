"use client";

import { PlayIcon, PauseIcon } from "@/components/icons";

function fmt(t: number) {
  if (!isFinite(t)) return "00:00";
  const m = Math.floor(t / 60);
  const s = Math.floor(t % 60);
  return `${String(m).padStart(2, "0")}:${String(s).padStart(2, "0")}`;
}

/** Fixed bottom soundscape player: play/pause, timecode, exhibition label, info. */
export function PlayerBar({
  playing,
  time,
  duration,
  label,
  onToggle,
  onInfo,
}: {
  playing: boolean;
  time: number;
  duration: number;
  label: string;
  onToggle: () => void;
  onInfo: () => void;
}) {
  return (
    <nav className="fixed inset-x-0 bottom-0 z-30 flex items-center justify-center gap-10 px-20 py-5 font-sans text-[10px] text-white">
      <div className="flex items-center gap-3">
        <button onClick={onToggle} aria-label={playing ? "Pause" : "Play"} className="flex h-6 w-4 items-center justify-center text-white">
          {playing ? <PauseIcon className="h-5 w-auto" /> : <PlayIcon className="h-5 w-auto" />}
        </button>
        <span className="font-mono tabular-nums tracking-wide text-white/90">
          {fmt(time)}
          {duration ? ` / ${fmt(duration)}` : ""}
        </span>
        <span className="h-px w-6 bg-white/40" />
        <span className="italic">{label}</span>
      </div>
      <button
        onClick={onInfo}
        aria-label="About this exhibition"
        className="flex h-[22px] w-[22px] items-center justify-center rounded-full border border-white/40 font-serif text-[11px] italic leading-none text-white/90 transition-colors hover:border-white"
      >
        i
      </button>
    </nav>
  );
}
