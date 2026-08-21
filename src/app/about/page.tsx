import type { Metadata } from "next";
import Image from "next/image";
import { Disc3, Tv, Guitar, Waves } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import GlassCard from "@/components/shared/GlassCard";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Meet the audio engineer behind Artemis Production — biography, experience across music and television, and a philosophy built on sound quality.",
};

const milestones = [
  {
    icon: Waves,
    title: "Audio Engineering",
    period: "9+ years",
    body: "Trained on analog consoles before moving into modern ITB workflows — recording, editing, mixing, and mastering for independent and major-affiliated artists across genres.",
  },
  {
    icon: Tv,
    title: "Television Production Audio",
    period: "4 seasons, 3 networks",
    body: "Production sound, ADR, and broadcast re-recording mixes for scripted drama and documentary series, delivered to network loudness and format specifications.",
  },
  {
    icon: Guitar,
    title: "Rock & Metal Production",
    period: "40+ releases",
    body: "A specialist ear for high-gain guitar tones, aggressive low end, and dynamic drum production — without sacrificing clarity or translation.",
  },
  {
    icon: Disc3,
    title: "Mastering & Delivery",
    period: "Streaming to vinyl",
    body: "Format-aware mastering that respects the destination — whether that's a playlist algorithm, a cutting lathe, or a broadcast compliance meter.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="The engineer behind the board."
        description="Nine years of chasing the sound that makes a track undeniable."
      />

      <section className="mx-auto max-w-7xl px-6 pb-28 md:px-10">
        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-32">
            <div className="glass glow-border relative mx-auto aspect-[4/5] w-full max-w-sm overflow-hidden rounded-3xl">
              <Image
                src="/images/about/portrait.svg"
                alt="Portrait of the Artemis Production audio engineer"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover"
                priority
              />
            </div>
          </Reveal>

          <div className="space-y-8">
            <Reveal>
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-emerald">Biography</span>
              <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl">
                Built in the room, refined behind the glass.
              </h2>
              <div className="mt-5 space-y-4 text-base leading-relaxed text-muted">
                <p>
                  I&apos;m the engineer and producer behind Artemis Production — a studio built
                  around one belief: a recording should feel exactly as powerful played back as it
                  did the moment it happened in the room.
                </p>
                <p>
                  Over the past nine years I&apos;ve worked across genres and formats, from
                  tracking full bands live to the floor, to mixing arena-ready metal records, to
                  delivering broadcast-compliant re-recording mixes for network television. What
                  ties it together is the same obsessive attention to detail, whether the audience
                  is a festival crowd or a living room television.
                </p>
                <p>
                  I&apos;ve spent time on both sides of the console — as a touring live engineer
                  and as a studio-based mixer/masterer — which means I understand not just how a
                  mix should sound in a treated room, but how it needs to hold up everywhere else.
                </p>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="glass rounded-2xl p-6">
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-amber">
                  Philosophy
                </span>
                <p className="mt-3 text-lg leading-relaxed text-foreground/90">
                  &ldquo;Sound quality isn&apos;t about chasing perfect numbers on a meter — it&apos;s
                  about protecting the emotion of the performance through every stage of the
                  process. If a decision doesn&apos;t serve the song, it doesn&apos;t belong in the
                  mix.&rdquo;
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28 md:px-10">
        <SectionHeading
          eyebrow="Track Record"
          title="Experience across music, television, and live production."
        />
        <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
          {milestones.map((m, i) => (
            <Reveal key={m.title} delay={i * 0.08}>
              <GlassCard glowColor={i % 2 === 0 ? "electric" : "emerald"} className="h-full">
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
