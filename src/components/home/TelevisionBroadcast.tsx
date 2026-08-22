import { ExternalLink, Tv } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";

const credits = [
  {
    title: "The Cage — Season 2",
    org: "2026 · Largest production to date",
    body: "Multi-city production audio for competition and final rounds involving 18 participating bands.",
  },
  {
    title: "What a Show",
    org: "Channel i · 2023–Present",
    body: "Audio production and engineering from Season 5 onward.",
    links: [
      { label: "Eid Special, Season 5", href: "https://www.youtube.com/watch?v=qzpFkp9xlVY" },
      { label: "Tawsif Mahbub & Sarika Sabah", href: "https://www.youtube.com/watch?v=7gAmaloMlo0" },
    ],
  },
  {
    title: "Voice of Ummah",
    org: "Deepto TV · 2025",
    body: "Audio production and engineering for a television entertainment program.",
  },
  {
    title: "Election Coverage",
    org: "Netra News · 2026",
    body: "Broadcast audio production for national news and field coverage.",
  },
];

export default function TelevisionBroadcast() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28 md:px-10">
      <SectionHeading
        eyebrow="Television & Broadcast"
        title="Audio work beyond the studio."
        description="From entertainment programming to national news coverage."
      />
      <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2">
        {credits.map((c, i) => (
          <Reveal key={c.title} delay={i * 0.08}>
            <div className="glass flex h-full flex-col gap-3 rounded-2xl p-6 backdrop-blur-[20px] backdrop-saturate-[1.4]">
              <Tv className="h-5 w-5 text-electric" />
              <h3 className="font-display text-lg font-semibold">{c.title}</h3>
              <p className="text-xs font-mono uppercase tracking-widest text-muted">{c.org}</p>
              <p className="flex-1 text-sm leading-relaxed text-foreground/80">{c.body}</p>
              {c.links && (
                <div className="flex flex-wrap gap-3 border-t border-border pt-3">
                  {c.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor-hover
                      className="inline-flex items-center gap-1.5 text-xs font-medium text-electric transition-colors hover:text-foreground"
                    >
                      {link.label} <ExternalLink className="h-3 w-3" />
                    </a>
                  ))}
                </div>
              )}
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
