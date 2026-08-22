import { ExternalLink } from "lucide-react";
import type { Artist } from "@/data/artists";
import Reveal from "@/components/shared/Reveal";

function initials(name: string) {
  return name
    .replace(/[^\w\s]/g, "")
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();
}

export default function ArtistCard({ artist, index }: { artist: Artist; index: number }) {
  return (
    <Reveal delay={(index % 4) * 0.06} className="h-full">
      <article className="glass flex h-full flex-col gap-4 rounded-2xl p-6 backdrop-blur-[20px] backdrop-saturate-[1.4] transition-all duration-500 hover:border-electric/30">
        <div className="flex items-center gap-4">
          <div
            className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
            style={{ background: "linear-gradient(135deg, var(--electric), var(--emerald))" }}
          >
            {initials(artist.name)}
          </div>
          <h3 className="font-display text-lg font-semibold">{artist.name}</h3>
        </div>

        <div className="flex flex-wrap gap-2">
          {artist.role.map((r) => (
            <span key={r} className="rounded-full border border-border px-3 py-1 text-xs text-foreground/70">
              {r}
            </span>
          ))}
        </div>

        <p className="flex-1 text-sm leading-relaxed text-muted">{artist.bio}</p>

        {artist.link && (
          <a
            href={artist.link.href}
            target="_blank"
            rel="noopener noreferrer"
            data-cursor-hover
            className="inline-flex items-center gap-1.5 border-t border-border pt-4 text-sm font-medium text-electric transition-colors hover:text-foreground"
          >
            {artist.link.label} <ExternalLink className="h-3.5 w-3.5" />
          </a>
        )}
      </article>
    </Reveal>
  );
}
