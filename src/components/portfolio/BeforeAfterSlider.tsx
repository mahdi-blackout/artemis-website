"use client";

import { useRef, useState, useCallback } from "react";
import Image from "next/image";
import { MoveHorizontal } from "lucide-react";

type Props = {
  before: string;
  after: string;
};

export default function BeforeAfterSlider({ before, after }: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(50);
  const dragging = useRef(false);

  const updateFromClientX = useCallback((clientX: number) => {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(100, Math.max(0, ratio)));
  }, []);

  return (
    <div
      ref={containerRef}
      className="group relative aspect-video w-full select-none overflow-hidden rounded-xl border border-border"
      onMouseDown={(e) => {
        dragging.current = true;
        updateFromClientX(e.clientX);
      }}
      onMouseMove={(e) => dragging.current && updateFromClientX(e.clientX)}
      onMouseUp={() => (dragging.current = false)}
      onMouseLeave={() => (dragging.current = false)}
      onTouchStart={(e) => updateFromClientX(e.touches[0].clientX)}
      onTouchMove={(e) => updateFromClientX(e.touches[0].clientX)}
    >
      <Image src={after} alt="After processing" fill className="pointer-events-none object-cover" sizes="600px" />
      <div
        className="pointer-events-none absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        <Image src={before} alt="Before processing" fill className="object-cover" sizes="600px" />
      </div>

      <div
        className="absolute inset-y-0 z-10 w-0.5 cursor-ew-resize bg-electric"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute left-1/2 top-1/2 flex h-9 w-9 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-electric text-white shadow-[0_0_20px_var(--electric)]">
          <MoveHorizontal className="h-4 w-4" />
        </div>
      </div>

      <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-black/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-muted backdrop-blur">
        Before
      </span>
      <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-black/60 px-2.5 py-1 font-mono text-[10px] uppercase tracking-widest text-emerald backdrop-blur">
        After
      </span>
    </div>
  );
}
