import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import ArtistCard from "@/components/artists/ArtistCard";
import Reveal from "@/components/shared/Reveal";
import FinalCTA from "@/components/home/FinalCTA";
import { artists } from "@/data/artists";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Artists",
  description:
    "Artists and bands Mustakim Al Mahdi has worked with as producer, engineer, mixing engineer, and mastering engineer, including Oni Hasan, Torture Goregrinder, and Infidel.",
  path: "artists",
});

export default function ArtistsPage() {
  const featured = artists.find((a) => a.featured);
  const rest = artists.filter((a) => !a.featured);

  return (
    <>
      <PageHero
        title="Musicians and bands behind the credits."
        description="Depending on the project, the work includes production, recording, engineering, editing, mixing, and mastering."
      />

      {featured && (
        <section className="mx-auto max-w-7xl px-6 pb-16 md:px-10">
          <SectionHeading eyebrow="Featured Artist" title={featured.name} />
          <Reveal delay={0.1} className="mt-8">
            <div className="glass glow-border rounded-3xl p-8 md:p-10">
              <div className="flex flex-wrap gap-2">
                {featured.role.map((r) => (
                  <span key={r} className="rounded-full border border-border px-3 py-1 text-xs text-foreground/70">
                    {r}
                  </span>
                ))}
              </div>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-foreground/85 md:text-lg">
                {featured.bio}
              </p>
            </div>
          </Reveal>
        </section>
      )}

      <section className="mx-auto max-w-7xl px-6 pb-28 md:px-10">
        <SectionHeading eyebrow="Also Credited" title="Artists & bands worked with." />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((artist, i) => (
            <ArtistCard key={artist.slug} artist={artist} index={i} />
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
