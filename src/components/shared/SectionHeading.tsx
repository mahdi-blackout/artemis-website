import { cn } from "@/lib/utils";
import Reveal from "@/components/shared/Reveal";

type Props = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  className?: string;
};

export default function SectionHeading({ eyebrow, title, description, align = "left", className }: Props) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center", className)}>
      {eyebrow && (
        <span className="mb-3 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-emerald">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald shadow-[0_0_8px_var(--emerald)]" />
          {eyebrow}
        </span>
      )}
      <h2 className="font-display text-3xl font-semibold leading-tight tracking-tight sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {description && <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">{description}</p>}
    </Reveal>
  );
}
