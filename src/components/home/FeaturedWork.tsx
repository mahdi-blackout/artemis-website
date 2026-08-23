import Reveal from "@/components/shared/Reveal";

const videos = ["aZ6Sm_Qm9-g", "HqK_EmoqCOM", "o4b6EeB6RLc"];

export default function FeaturedWork() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28 md:px-10">
      <Reveal>
        <span className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
          Selected Work
        </span>
      </Reveal>

      <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-3">
        {videos.map((id, i) => (
          <Reveal key={id} delay={i * 0.1}>
            <div className="aspect-video w-full overflow-hidden rounded-2xl border border-border">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${id}`}
                title={`Selected work video ${i + 1}`}
                className="h-full w-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
