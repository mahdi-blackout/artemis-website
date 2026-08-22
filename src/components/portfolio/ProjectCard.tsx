import Image from "next/image";
import { ExternalLink } from "lucide-react";
import type { PortfolioProject } from "@/data/portfolio";
import Reveal from "@/components/shared/Reveal";

export default function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  return (
    <Reveal delay={(index % 4) * 0.06} className="h-full">
      <article className="glass flex h-full flex-col overflow-hidden rounded-2xl backdrop-blur-[20px] backdrop-saturate-[1.4] transition-all duration-500 hover:border-electric/30">
        <div className="relative aspect-[16/10] w-full overflow-hidden">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
          <span className="absolute left-4 top-4 rounded-full bg-black/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-electric backdrop-blur">
            {project.category}
          </span>
          {project.year && (
            <span className="absolute right-4 top-4 rounded-full bg-black/60 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-muted backdrop-blur">
              {project.year}
            </span>
          )}
        </div>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <div>
            <h3 className="font-display text-xl font-semibold">{project.title}</h3>
            <p className="mt-0.5 text-sm text-muted">{project.client}</p>
          </div>

          <p className="text-sm leading-relaxed text-foreground/80">{project.description}</p>

          <div className="mt-auto flex flex-wrap gap-2">
            {project.role.map((r) => (
              <span
                key={r}
                className="rounded-full border border-border px-3 py-1 text-xs text-foreground/70"
              >
                {r}
              </span>
            ))}
          </div>

          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-3 border-t border-border pt-4">
              {project.links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  data-cursor-hover
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-electric transition-colors hover:text-foreground"
                >
                  {link.label} <ExternalLink className="h-3.5 w-3.5" />
                </a>
              ))}
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}
