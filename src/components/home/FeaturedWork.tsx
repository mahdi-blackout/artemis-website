import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { portfolioProjects } from "@/data/portfolio";
import SectionHeading from "@/components/shared/SectionHeading";
import Reveal from "@/components/shared/Reveal";
import Button from "@/components/shared/Button";

export default function FeaturedWork() {
  const featured = [portfolioProjects[0], portfolioProjects[2], portfolioProjects[8]];

  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28 md:px-10">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <SectionHeading
          eyebrow="Selected Work"
          title="Recent projects across mixing, mastering, and broadcast."
        />
        <Reveal delay={0.1}>
          <Button href="/portfolio" variant="secondary" icon={<ArrowUpRight className="h-4 w-4" />}>
            View Full Portfolio
          </Button>
        </Reveal>
      </div>

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        {featured.map((project, i) => (
          <Reveal key={project.slug} delay={i * 0.1}>
            <Link
              href="/portfolio"
              data-cursor-hover
              className="group block overflow-hidden rounded-2xl border border-border bg-surface transition-all duration-500 hover:-translate-y-1 hover:border-electric/30"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={project.cover}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
                <span className="absolute left-4 top-4 rounded-full bg-black/50 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-electric backdrop-blur">
                  {project.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-semibold">{project.title}</h3>
                <p className="mt-1 text-sm text-muted">{project.client}</p>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
