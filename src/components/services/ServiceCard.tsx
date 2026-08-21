import { Check } from "lucide-react";
import type { Service } from "@/data/services";
import GlassCard from "@/components/shared/GlassCard";
import Reveal from "@/components/shared/Reveal";
import Button from "@/components/shared/Button";

export default function ServiceCard({ service, index }: { service: Service; index: number }) {
  return (
    <Reveal delay={(index % 3) * 0.08}>
      <GlassCard className="flex h-full flex-col" glowColor={index % 3 === 0 ? "electric" : index % 3 === 1 ? "emerald" : "amber"}>
        <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-white/5">
          <service.icon className="h-6 w-6 text-electric" />
        </div>
        <h3 className="mt-5 font-display text-xl font-semibold">{service.title}</h3>
        <p className="mt-1 text-sm font-medium text-emerald">{service.tagline}</p>
        <p className="mt-4 text-sm leading-relaxed text-muted">{service.description}</p>

        <ul className="mt-5 space-y-2">
          {service.deliverables.map((d) => (
            <li key={d} className="flex items-start gap-2 text-sm text-foreground/80">
              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald" />
              {d}
            </li>
          ))}
        </ul>

        <div className="mt-auto flex items-center justify-between border-t border-border pt-5 text-sm">
          <span className="font-mono text-muted">{service.startingPrice}</span>
          <Button href="/contact" variant="ghost" className="px-0 py-0">
            Inquire →
          </Button>
        </div>
      </GlassCard>
    </Reveal>
  );
}
