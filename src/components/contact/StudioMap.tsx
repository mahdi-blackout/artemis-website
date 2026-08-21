import { MapPin } from "lucide-react";

export default function StudioMap() {
  return (
    <div className="glass relative aspect-[4/3] w-full overflow-hidden rounded-2xl sm:aspect-video">
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
          <span className="absolute h-full w-full animate-ping rounded-full bg-electric/30" />
          <span className="relative flex h-10 w-10 items-center justify-center rounded-full bg-electric text-white shadow-[0_0_30px_var(--electric)]">
            <MapPin className="h-5 w-5" />
          </span>
        </div>
        <p className="mt-4 font-mono text-xs uppercase tracking-widest text-muted">
          Studio Location — Placeholder Map
        </p>
        <p className="mt-1 text-sm text-foreground/70">123 Waveform Ave, Los Angeles, CA</p>
      </div>
    </div>
  );
}
