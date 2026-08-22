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
        <p className="mt-4 flex-1 text-sm leading-relaxed text-muted">{service.description}</p>

        <div className="mt-6 border-t border-border pt-5 text-sm">
          <Button href="/contact" variant="ghost" className="px-0 py-0">
            Inquire →
          </Button>
        </div>
      </GlassCard>
    </Reveal>
  );
}
