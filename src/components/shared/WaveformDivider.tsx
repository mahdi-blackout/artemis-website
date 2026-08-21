"use client";

import { cn } from "@/lib/utils";

const BAR_HEIGHTS = [
  8, 14, 22, 12, 30, 18, 10, 26, 34, 16, 20, 12, 28, 22, 8, 18, 32, 14, 24, 10,
  20, 30, 12, 16, 26, 8, 22, 34, 14, 18, 10, 28, 20, 12, 24, 16, 8, 30, 22, 14,
];

type Props = {
  className?: string;
  color?: "electric" | "emerald" | "amber" | "mixed";
};

export default function WaveformDivider({ className, color = "mixed" }: Props) {
  return (
    <div
      className={cn("flex h-10 w-full items-center justify-center gap-[3px] overflow-hidden opacity-60", className)}
      aria-hidden="true"
    >
      {BAR_HEIGHTS.map((h, i) => {
        const c =
          color === "mixed"
            ? i % 3 === 0
              ? "var(--electric)"
              : i % 3 === 1
              ? "var(--emerald)"
              : "var(--amber)"
            : `var(--${color})`;
        return (
          <span
            key={i}
            className="w-[3px] rounded-full animate-pulse-glow"
            style={{
              height: h,
              background: c,
              animationDelay: `${i * 0.06}s`,
              animationDuration: `${2 + (i % 5) * 0.3}s`,
            }}
          />
        );
      })}
    </div>
  );
}
