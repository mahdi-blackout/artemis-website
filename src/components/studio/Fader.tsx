"use client";

import { useCallback, useRef, useState } from "react";

type Props = {
  label: string;
  defaultValue?: number;
  color?: "electric" | "emerald" | "amber";
};

export default function Fader({ label, defaultValue = 70, color = "emerald" }: Props) {
  const [value, setValue] = useState(defaultValue);
  const trackRef = useRef<HTMLDivElement>(null);

  const updateFromClientY = useCallback((clientY: number) => {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const ratio = 1 - (clientY - rect.top) / rect.height;
    setValue(Math.min(100, Math.max(0, ratio * 100)));
  }, []);

  const onPointerDown = (e: React.PointerEvent) => {
    updateFromClientY(e.clientY);
    const move = (ev: PointerEvent) => updateFromClientY(ev.clientY);
    const up = () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
  };

  return (
    <div className="flex flex-col items-center gap-3 select-none">
      <div
        ref={trackRef}
        onPointerDown={onPointerDown}
        data-cursor-hover
        role="slider"
        aria-label={label}
        aria-valuenow={Math.round(value)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowUp") setValue((v) => Math.min(100, v + 2));
          if (e.key === "ArrowDown") setValue((v) => Math.max(0, v - 2));
        }}
        className="relative h-40 w-10 cursor-ns-resize rounded-full border border-border bg-surface-2 shadow-[inset_0_2px_6px_rgba(0,0,0,0.5)]"
      >
        <div
          className="absolute inset-x-1 bottom-1 rounded-full opacity-30"
          style={{ top: "4px", background: `linear-gradient(180deg, transparent, var(--${color}))` }}
        />
        <div
          className="absolute left-1/2 h-3 w-14 -translate-x-1/2 rounded-md border border-white/10 bg-gradient-to-b from-zinc-300 to-zinc-500 shadow-lg"
          style={{ bottom: `calc(${value}% - 6px)` }}
        >
          <div className="absolute inset-x-0 top-1/2 h-[2px] -translate-y-1/2 bg-black/40" />
        </div>
      </div>
      <div className="text-center">
        <div className="font-mono text-xs text-muted">{label}</div>
        <div className="font-mono text-[10px] text-foreground/50">{Math.round(value)}</div>
      </div>
    </div>
  );
}
