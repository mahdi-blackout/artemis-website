import { MapPin, ExternalLink } from "lucide-react";

const MAPS_URL = "https://maps.app.goo.gl/4JnAXGRZsq1MqasR7";

export default function StudioMap() {
  return (
    <a
      href={MAPS_URL}
      target="_blank"
      rel="noopener noreferrer"
      data-cursor-hover
      className="glass group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl backdrop-blur-[20px] backdrop-saturate-[1.4] transition-colors hover:border-electric/40 sm:aspect-video"
    >
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 400 300"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="#7800ff" strokeWidth="0.5" opacity="0.4" />
          </pattern>
        </defs>
        <rect width="400" height="300" fill="url(#grid)" />
        <path d="M0 220 Q 100 180 200 210 T 400 190" stroke="#2fe6a8" strokeWidth="2" fill="none" opacity="0.5" />
        <path d="M0 80 Q 150 120 250 70 T 400 90" stroke="#f5a94e" strokeWidth="1.5" fill="none" opacity="0.4" />
      </svg>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="relative flex h-14 w-14 items-center justify-center">
          <span className="absolute h-full w-full animate-ping rounded-full bg-electric/20" />
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-electric text-white">
            <MapPin className="h-5 w-5" />
          </span>
        </div>
        <p className="mt-4 font-mono text-xs uppercase tracking-widest text-muted">
          Based in Bangladesh
        </p>
        <p className="mt-1 flex items-center gap-1.5 text-sm text-foreground/70 transition-colors group-hover:text-electric">
          View on Google Maps <ExternalLink className="h-3.5 w-3.5" />
        </p>
      </div>
    </a>
  );
}
