import Image from "next/image";
import type { GearItem } from "@/data/gear";
import Reveal from "@/components/shared/Reveal";

export default function GearCard({ item, index }: { item: GearItem; index: number }) {
  return (
    <Reveal delay={(index % 4) * 0.06} className="h-full">
      <div className="glass group flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-500 hover:-translate-y-1 hover:border-electric/30">
        <div className="relative aspect-square w-full overflow-hidden bg-surface-2">
          <Image
            src={item.image}
            alt={item.name}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
        </div>
        <div className="flex flex-1 flex-col gap-3 p-5">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-emerald">
              {item.category}
            </span>
            <h3 className="mt-1 font-display text-base font-semibold leading-snug">{item.name}</h3>
          </div>
          <p className="text-sm text-muted">{item.blurb}</p>
          <ul className="mt-auto space-y-1 border-t border-border pt-3">
            {item.specs.map((s) => (
              <li key={s} className="flex items-center gap-2 text-xs text-foreground/70">
                <span className="h-1 w-1 shrink-0 rounded-full bg-electric" />
                {s}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </Reveal>
  );
}
