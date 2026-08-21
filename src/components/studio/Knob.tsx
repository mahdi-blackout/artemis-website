"use client";

import { useState } from "react";

type Props = {
  label: string;
  defaultValue?: number;
  color?: "electric" | "emerald" | "amber";
};

const MIN_ANGLE = -135;
const MAX_ANGLE = 135;

export default function Knob({ label, defaultValue = 50, color = "electric" }: Props) {
  const [value, setValue] = useState(defaultValue);

  const onPointerDown = (e: React.PointerEvent) => {
    const startY = e.clientY;
    const startValue = value;

    const handleMove = (ev: PointerEvent) => {
      const delta = startY - ev.clientY;
      setValue(Math.min(100, Math.max(0, startValue + delta * 0.5)));
    };
    const handleUp = () => {
      window.removeEventListener("pointermove", handleMove);
      window.removeEventListener("pointerup", handleUp);
    };
    window.addEventListener("pointermove", handleMove);
    window.addEventListener("pointerup", handleUp);
  };

  const angle = MIN_ANGLE + (value / 100) * (MAX_ANGLE - MIN_ANGLE);

  return (
    <div className="flex flex-col items-center gap-3 select-none">
      <div
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
        className="relative flex h-20 w-20 cursor-ns-resize items-center justify-center rounded-full border border-border bg-gradient-to-b from-surface-2 to-surface shadow-[inset_0_2px_6px_rgba(0,0,0,0.5)]"
      >
        <div
          className="absolute inset-1.5 rounded-full border border-white/5"
          style={{ boxShadow: `0 0 20px -4px var(--${color})` }}
        />
        <div
          className="absolute h-8 w-[3px] rounded-full bg-white/70 origin-bottom"
          style={{
            top: "12%",
            transform: `rotate(${angle}deg)`,
            background: `var(--${color})`,
            boxShadow: `0 0 8px var(--${color})`,
          }}
        />
        <div className="absolute h-2 w-2 rounded-full bg-black/40" />
      </div>
      <div className="text-center">
        <div className="font-mono text-xs text-muted">{label}</div>
        <div className="font-mono text-[10px] text-foreground/50">{Math.round(value)}</div>
      </div>
    </div>
  );
}
