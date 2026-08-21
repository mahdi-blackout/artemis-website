import { ArrowRight } from "lucide-react";
import Button from "@/components/shared/Button";
import Reveal from "@/components/shared/Reveal";
import WaveformDivider from "@/components/shared/WaveformDivider";

export default function FinalCTA() {
  return (
    <section className="relative mx-auto max-w-5xl px-6 py-28 text-center md:px-10">
      <div className="glass glow-border relative overflow-hidden rounded-[2rem] px-8 py-16 md:px-16">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(51,194,255,0.12),_transparent_60%)]" />
        <Reveal className="relative z-10">
          <span className="font-mono text-xs uppercase tracking-[0.3em] text-amber">Ready when you are</span>
          <h2 className="mx-auto mt-4 max-w-2xl font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            Let&apos;s make your next release sound like it belongs on the big stage.
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-muted">
            Whether it&apos;s a single, a full album, a live show, or a broadcast episode —
            let&apos;s talk about what you&apos;re making.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button href="/contact" icon={<ArrowRight className="h-4 w-4" />}>
              Start a Project
            </Button>
            <Button href="/portfolio" variant="ghost">
              Browse Portfolio
            </Button>
          </div>
        </Reveal>
      </div>
      <WaveformDivider className="mt-12" />
    </section>
  );
}
