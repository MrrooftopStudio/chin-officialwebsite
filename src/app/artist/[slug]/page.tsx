import Link from "next/link";
import { notFound } from "next/navigation";
import { ExhibitionView } from "@/components/exhibition/ExhibitionView";
import { getExhibition } from "@/content/artists";
import { artists } from "@/content/overview";

export function generateStaticParams() {
  return artists.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const artist = artists.find((a) => a.slug === slug);
  const name = artist?.name ?? "Artist";
  return {
    title: `${name} – Foam Talent 2024-2025 – Digital Exhibition | Foam: all about photography`,
    description: artist?.exhibitionName
      ? `${artist.exhibitionName} — ${name} in the Foam Talent 2024-2025 digital exhibition.`
      : undefined,
  };
}

export default async function ArtistPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const exhibition = getExhibition(slug);

  if (exhibition) return <ExhibitionView exhibition={exhibition} />;

  // Graceful placeholder for the other 19 talents (data not cloned).
  const artist = artists.find((a) => a.slug === slug);
  if (!artist) notFound();

  return (
    <main className="flex h-screen w-screen flex-col items-center justify-center gap-5 bg-black px-6 text-center text-white">
      <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-white/60">{artist.name}</p>
      <h1 className="max-w-[18ch] font-serif text-[clamp(1.75rem,5vw,4rem)] italic leading-tight">{artist.exhibitionName}</h1>
      <p className="max-w-[40ch] text-[13px] text-white/50">
        This talent&apos;s full online exhibition is part of the live Foam Talent 2024-2025 experience.
      </p>
      <Link href="/" className="mt-2 border border-white/40 px-4 py-2 text-[11px] uppercase tracking-wide hover:border-white">
        ← back to overview
      </Link>
    </main>
  );
}
