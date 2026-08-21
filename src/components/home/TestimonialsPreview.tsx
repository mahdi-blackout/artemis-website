import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/shared/SectionHeading";
import TestimonialSlider from "@/components/testimonials/TestimonialSlider";
import Reveal from "@/components/shared/Reveal";

export default function TestimonialsPreview() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 py-28 md:px-10">
      <SectionHeading eyebrow="Client Word" title="Trusted by artists, bands, and production teams." align="center" className="mx-auto" />
      <div className="mt-14">
        <TestimonialSlider />
      </div>
      <Reveal className="mt-10 text-center">
        <Link
          href="/testimonials"
          data-cursor-hover
          className="inline-flex items-center gap-1 text-sm font-medium text-muted transition-colors hover:text-electric"
        >
          Read all testimonials <ArrowUpRight className="h-4 w-4" />
        </Link>
      </Reveal>
    </section>
  );
}
