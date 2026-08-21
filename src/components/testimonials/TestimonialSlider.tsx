"use client";

import { useEffect, useState, useCallback } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { testimonials } from "@/data/testimonials";
import RatingStars from "@/components/shared/RatingStars";

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const t = testimonials[index];

  return (
    <div className="relative mx-auto max-w-3xl">
      <div className="glass glow-border relative overflow-hidden rounded-3xl p-8 md:p-12">
        <Quote className="absolute right-8 top-8 h-16 w-16 text-electric/10" />
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={index}
            custom={direction}
            initial={{ opacity: 0, x: direction * 40 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction * -40 }}
            transition={{ duration: 0.45, ease: "easeInOut" }}
            className="relative z-10"
          >
            <RatingStars rating={t.rating} />
            <p className="mt-6 text-lg leading-relaxed text-foreground/90 md:text-xl">
              &ldquo;{t.quote}&rdquo;
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="relative h-12 w-12 overflow-hidden rounded-full border border-border bg-surface-2">
                <Image src={t.photo} alt={t.name} fill className="object-cover" sizes="48px" />
              </div>
              <div>
                <div className="font-display font-semibold">{t.name}</div>
                <div className="text-sm text-muted">{t.role}</div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-6 flex items-center justify-center gap-4">
        <button
          onClick={prev}
          data-cursor-hover
          aria-label="Previous testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-electric/50 hover:text-electric"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => {
                setDirection(i > index ? 1 : -1);
                setIndex(i);
              }}
              aria-label={`Go to testimonial ${i + 1}`}
              className="h-1.5 rounded-full transition-all duration-300"
              style={{
                width: i === index ? 24 : 8,
                background: i === index ? "var(--electric)" : "var(--border)",
              }}
            />
          ))}
        </div>
        <button
          onClick={next}
          data-cursor-hover
          aria-label="Next testimonial"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-electric/50 hover:text-electric"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
}
