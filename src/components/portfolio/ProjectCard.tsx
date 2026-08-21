import Image from "next/image";
import { Wrench } from "lucide-react";
import type { PortfolioProject } from "@/data/portfolio";
import Reveal from "@/components/shared/Reveal";
import AudioPlayer from "@/components/portfolio/AudioPlayer";
import BeforeAfterSlider from "@/components/portfolio/BeforeAfterSlider";

export default function ProjectCard({ project, index }: { project: PortfolioProject; index: number }) {
  return (
    <Reveal delay={(index % 4) * 0.06} className="h-full">
      <article className="glass flex h-full flex-col overflow-hidden rounded-2xl transition-all duration-500 hover:border-electric/30">
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
        </div>

        <div className="flex flex-1 flex-col gap-4 p-6">
          <div>
            <h3 className="font-display text-xl font-semibold">{project.title}</h3>
            <p className="mt-0.5 text-sm text-muted">{project.client}</p>
          </div>

          <p className="text-sm leading-relaxed text-foreground/80">{project.description}</p>

          <div>
            <div className="mb-2 flex items-center gap-1.5 text-xs font-medium uppercase tracking-widest text-muted">
              <Wrench className="h-3.5 w-3.5" /> Equipment Used
            </div>
            <div className="flex flex-wrap gap-2">
              {project.equipment.map((eq) => (
                <span
                  key={eq}
                  className="rounded-full border border-border px-3 py-1 text-xs text-foreground/70"
                >
                  {eq}
                </span>
              ))}
            </div>
          </div>

          {project.audioSrc && <AudioPlayer src={project.audioSrc} title={`${project.title} — Preview`} />}

          {project.hasBeforeAfter && (
            <div>
              <div className="mb-2 text-xs font-medium uppercase tracking-widest text-muted">
                Before / After
              </div>
              <BeforeAfterSlider
                before="/images/portfolio/before-waveform.svg"
                after="/images/portfolio/after-waveform.svg"
              />
            </div>
          )}
        </div>
      </article>
    </Reveal>
  );
}
