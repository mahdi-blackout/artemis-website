import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  className?: string;
  glowColor?: "electric" | "emerald" | "amber";
};

export default function GlassCard({ children, className, glowColor = "electric" }: Props) {
  return (
    <div
      className={cn(
        "glass group relative overflow-hidden rounded-2xl p-6 backdrop-blur-[20px] backdrop-saturate-[1.4] transition-all duration-500 ease-out",
        "hover:-translate-y-1 hover:border-foreground/15 hover:shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)]",
        className
      )}
    >
      <div
        className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-[0.08]"
        style={{ background: `var(--${glowColor})` }}
      />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
