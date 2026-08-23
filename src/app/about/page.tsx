import type { Metadata } from "next";
import Image from "next/image";
import { Guitar, Waves, Tv, Newspaper, Disc3, Briefcase } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import GlassCard from "@/components/shared/GlassCard";
import FinalCTA from "@/components/home/FinalCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About",
  description:
    "Mustakim Al Mahdi is a Bangladesh-based Audio Engineer and Music Producer — from Infidel in 2017 to Yamaha Music Bangladesh, television, broadcast, and The Cage Season 2.",
  path: "about",
});

const milestones = [
  {
    icon: Guitar,
    title: "Infidel",
    period: "2017",
    body: "Began developing mixing and production skills through his own band — a Bangladesh-based Groove Metal / Metalcore project, with releases including End of Disgrace and Swallow This.",
  },
  {
    icon: Waves,
    title: "Yamaha Music Bangladesh",
    period: "2022–2025",
    body: "50+ episodes of Feature Friday and 20+ additional music and media projects — a major commercial production chapter.",
  },
  {
    icon: Tv,
    title: "What a Show — Channel i",
    period: "2023–Present",
    body: "Audio production and engineering for Channel i's entertainment program, from Season 5 onward.",
  },
  {
    icon: Newspaper,
    title: "Broadcast & News",
    period: "2025–2026",
    body: "Voice of Ummah (Deepto TV) and Netra News's election coverage — extending into broadcast entertainment and field news production.",
  },
  {
    icon: Disc3,
    title: "The Cage — Season 2",
    period: "2026",
    body: "The largest production to date — multi-city recording and audio production for 18 participating bands and the show's final rounds.",
  },
  {
    icon: Briefcase,
    title: "Commercial & Branded",
    period: "2026",
    body: "bKash Presents Skip the Line and the Free Fire 9th Anniversary — commercial and branded entertainment production.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="Musician turned audio engineer."
        description="From the studio to television and large-scale productions — engineering audio that serves the performance."
      />

      <section className="mx-auto max-w-7xl px-6 pb-28 md:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-32">
            <div className="glass glow-border relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl">
              <Image
                src="/images/about/mustakim-portrait.png"
                alt="Mustakim Al Mahdi playing guitar, Artemis Production"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal>
              <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
                Biography
              </span>
              <h2 className="mt-3 font-display text-2xl font-semibold tracking-[-0.01em] sm:text-3xl">
                Mustakim Al Mahdi — Artemis Production
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
                <p>
                  I&apos;m Mustakim Al Mahdi, the audio engineer and music producer behind Artemis
                  Production — based in Bangladesh, working across music production, recording,
                  mixing, mastering, television, broadcast, and large-scale entertainment
                  productions.
                </p>
                <p>
                  I began in 2017 by mixing my own band, Infidel, which grew into the starting
                  point of my engineering career. From 2022 to 2025, I worked with Yamaha Music
                  Bangladesh, producing more than 50 episodes of Feature Friday and contributing
                  to more than 20 additional projects.
                </p>
                <p>
                  Since 2023, I&apos;ve worked on Channel i&apos;s What a Show from Season 5
                  onward, alongside productions for Deepto TV, Netra News, bKash, Free Fire, and
                  other entertainment projects. In 2026, I worked on The Cage Season 2 — my
                  largest project to date, involving multi-city recording and audio production
                  for 18 participating bands and the show&apos;s final rounds.
                </p>
                <p>
                  Alongside broadcast and commercial work, I continue to produce, engineer, mix,
                  and master music for artists and bands including Oni Hasan, A.K. Rahul, Torture
                  Goregrinder, Timescape, Cremain, Fallen Ash, and Infidel.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass rounded-2xl p-6">
                <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-muted">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber" />
                  Approach
                </span>
                <p className="mt-3 text-lg leading-relaxed text-foreground/90">
                  I started by mixing my own band, which means I understand performance from both
                  sides of the console. That perspective carries into every session — combining
                  the instincts of a musician with the technical discipline of an engineer, with
                  particular focus on rock, metal, and performance-driven productions.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28 md:px-10">
        <SectionHeading
          eyebrow="Career Timeline"
          title="From Infidel to television, broadcast, and large-scale productions."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {milestones.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.06}>
              <GlassCard glowColor={i % 3 === 0 ? "electric" : i % 3 === 1 ? "emerald" : "amber"} className="h-full">
                <m.icon className="h-6 w-6 text-electric" />
                <h3 className="mt-4 font-display text-lg font-semibold">{m.title}</h3>
                <p className="mt-1 text-xs font-mono uppercase tracking-widest text-muted">
                  {m.period}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{m.body}</p>
              </GlassCard>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
