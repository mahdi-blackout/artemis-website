import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/services";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";

export default function ServicesStrip() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28 md:px-10">
      <SectionHeading
        eyebrow="What I Do"
        title="Full-service audio, from first take to final delivery."
        description="Every service is built around one goal: making the work sound exactly as powerful as it felt in the room."
      />

      <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
        {services.map((service, i) => (
          <Reveal key={service.slug} delay={i * 0.05}>
            <Link
              href="/services"
              data-cursor-hover
              className="group flex h-full flex-col justify-between bg-surface p-6 transition-colors duration-300 hover:bg-surface-2"
            >
              <div>
                <service.icon className="h-6 w-6 text-electric transition-transform duration-300 group-hover:scale-110" />
                <h3 className="mt-4 font-display text-lg font-semibold">{service.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{service.tagline}</p>
              </div>
              <div className="mt-6 flex items-center gap-1 text-xs font-medium text-muted transition-colors group-hover:text-electric">
                Learn more <ArrowUpRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
