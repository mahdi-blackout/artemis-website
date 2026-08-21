import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import TestimonialSlider from "@/components/testimonials/TestimonialSlider";
import RatingStars from "@/components/shared/RatingStars";
import Reveal from "@/components/shared/Reveal";
import FinalCTA from "@/components/home/FinalCTA";
import { testimonials } from "@/data/testimonials";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Testimonials",
  description: "Hear what artists, bands, and production teams say about working with Artemis Production.",
};

export default function TestimonialsPage() {
  return (
    <>
      <PageHero
        eyebrow="Testimonials"
        title="What clients say after the mix is done."
        description="Real feedback from artists, bands, and production teams Artemis Production has worked alongside."
      />

      <section className="mx-auto max-w-7xl px-6 pb-20 md:px-10">
        <TestimonialSlider />
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-28 md:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={(i % 3) * 0.08}>
              <div className="glass flex h-full flex-col rounded-2xl p-6">
                <RatingStars rating={t.rating} />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-foreground/85">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 flex items-center gap-3 border-t border-border pt-4">
                  <div className="relative h-10 w-10 overflow-hidden rounded-full border border-border bg-surface-2">
                    <Image src={t.photo} alt={t.name} fill className="object-cover" sizes="40px" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t.name}</div>
                    <div className="text-xs text-muted">{t.role}</div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <FinalCTA />
    </>
  );
}
