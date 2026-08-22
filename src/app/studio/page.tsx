import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import GearGrid from "@/components/studio/GearGrid";
import ConsolePanel from "@/components/studio/ConsolePanel";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import FinalCTA from "@/components/home/FinalCTA";
import { recordingWork, postProductionWork } from "@/data/gear";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Studio",
  description:
    "Artemis Production is Mustakim Al Mahdi's audio production studio — recording, music production, audio engineering, mixing, mastering, and audio editing, with a focus on rock, metal, and heavy music.",
  path: "studio",
});

export default function StudioPage() {
  return (
    <>
      <PageHero
        title="The home of independent studio and music-production work."
        description="Core services: recording, music production, audio engineering, mixing, mastering, and audio editing — with a genre focus on rock, metal, and heavy music."
      />

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <SectionHeading eyebrow="Technical Profile" title="Known workflow and tools." />
        <div className="mt-10">
          <GearGrid />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2">
          <Reveal>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-muted">
                Recording
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {recordingWork.map((w) => (
                  <span key={w} className="rounded-full border border-border px-3 py-1 text-xs text-foreground/70">
                    {w}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-muted">
                Post Production
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {postProductionWork.map((w) => (
                  <span key={w} className="rounded-full border border-border px-3 py-1 text-xs text-foreground/70">
                    {w}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <ConsolePanel />
      <FinalCTA />
    </>
  );
}
