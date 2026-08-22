"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";
import { PlayCircle, ArrowRight } from "lucide-react";
import Button from "@/components/shared/Button";
import PartnerLogos from "@/components/home/PartnerLogos";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const yBg = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section ref={ref} className="relative flex min-h-[100svh] items-center overflow-hidden pt-24">
      <motion.div style={{ y: yBg }} className="absolute -top-20 -bottom-20 left-0 right-0">
        <Image
          src="/images/hero/mustakim-live-wide.png"
          alt="Mustakim Al Mahdi performing live"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[55%_35%] brightness-[1.35] contrast-[1.05]"
        />
      </motion.div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background via-background/55 to-background/5" />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-background/15" />

      <motion.div
        style={{ y: y1, opacity }}
        className="relative z-10 mx-auto w-full max-w-7xl px-6 md:px-10"
      >
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl"
        >
          From the studio to large-scale productions —{" "}
          <span className="text-gradient">engineering audio that serves the performance</span>
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <Button href="/portfolio" icon={<ArrowRight className="h-4 w-4" />}>
            View Portfolio
          </Button>
          <Button href="/contact" variant="secondary" icon={<PlayCircle className="h-4 w-4" />}>
            Hire Me
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.7 }}
          className="mt-16 max-w-2xl border-t border-border pt-8"
        >
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            Worked With
          </span>
          <div className="mt-5">
            <PartnerLogos />
          </div>
        </motion.div>
      </motion.div>

      <div className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-float-slow">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-border p-1.5">
          <span className="h-1.5 w-1 rounded-full bg-electric" />
        </div>
      </div>
    </section>
  );
}
