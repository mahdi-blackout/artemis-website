"use client";

import { useEffect, useState } from "react";

const SEGMENTS = 12;

function useLevel(speed: number, offset: number) {
  const [level, setLevel] = useState(0.5);
  useEffect(() => {
    let raf = 0;
    const start = performance.now() + offset * 1000;
    const tick = (t: number) => {
      const time = (t - start) / 1000;
      const v =
        0.5 +
        0.35 * Math.sin(time * speed) +
        0.15 * Math.sin(time * speed * 2.7 + offset);
      setLevel(Math.max(0.05, Math.min(1, v)));
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [speed, offset]);
  return level;
}

function Meter({ label, speed, offset }: { label: string; speed: number; offset: number }) {
  const level = useLevel(speed, offset);
  const active = Math.round(level * SEGMENTS);

  return (
    <div className="glass flex flex-col items-center gap-2 rounded-xl px-3 py-4">
      <div className="flex flex-col-reverse gap-[3px]">
        {Array.from({ length: SEGMENTS }).map((_, i) => {
          const on = i < active;
          const color = i > 9 ? "var(--amber)" : i > 6 ? "var(--emerald)" : "var(--electric)";
          return (
            <span
              key={i}
              className="h-1.5 w-6 rounded-sm transition-colors duration-100"
              style={{
                background: on ? color : "rgba(255,255,255,0.08)",
                boxShadow: on ? `0 0 6px ${color}` : "none",
              }}
            />
          );
        })}
      </div>
      <span className="font-mono text-[10px] tracking-widest text-muted">{label}</span>
    </div>
  );
}

export default function VUMeters({ className }: { className?: string }) {
  return (
    <div className={className} aria-hidden="true">
      <div className="flex gap-4">
        <Meter label="L" speed={2.1} offset={0.2} />
        <Meter label="R" speed={2.4} offset={1.1} />
      </div>
    </div>
  );
}
