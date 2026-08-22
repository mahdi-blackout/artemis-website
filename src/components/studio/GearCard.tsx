import type { GearItem } from "@/data/gear";
import GlassCard from "@/components/shared/GlassCard";
import Reveal from "@/components/shared/Reveal";

export default function GearCard({ item, index }: { item: GearItem; index: number }) {
  return (
    <Reveal delay={index * 0.08} className="h-full">
      <GlassCard glowColor={index % 2 === 0 ? "electric" : "emerald"} className="h-full">
        <span className="font-mono text-[10px] uppercase tracking-widest text-emerald">{item.category}</span>
        <h3 className="mt-2 font-display text-2xl font-semibold">{item.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{item.blurb}</p>
      </GlassCard>
    </Reveal>
  );
}
