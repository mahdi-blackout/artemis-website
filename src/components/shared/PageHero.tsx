import Reveal from "@/components/shared/Reveal";

type Props = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function PageHero({ eyebrow, title, description }: Props) {
  return (
    <section className="relative overflow-hidden pb-20 pt-40 md:pb-28 md:pt-48">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_rgba(51,194,255,0.10),_transparent_55%)]" />
      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center md:px-10">
        <Reveal>
          <span className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-muted">
            <span className="h-1.5 w-1.5 rounded-full bg-electric" />
            {eyebrow}
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {description && (
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
              {description}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
