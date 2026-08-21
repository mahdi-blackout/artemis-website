"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type Props = {
  value: number;
  suffix?: string;
  label: string;
};

export default function StatCounter({ value, suffix = "", label }: Props) {
  const numberRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = numberRef.current;
    if (!el) return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.textContent = `${value}${suffix}`;
      return;
    }

    const counter = { current: 0 };
    const tween = gsap.to(counter, {
      current: value,
      duration: 1.8,
      ease: "power2.out",
      delay: 0.9,
      onUpdate: () => {
        el.textContent = `${Math.round(counter.current)}${suffix}`;
      },
    });

    return () => {
      tween.kill();
    };
  }, [value, suffix]);

  return (
    <div>
      <div ref={numberRef} className="font-display text-2xl font-semibold text-foreground sm:text-3xl">
        0{suffix}
      </div>
      <div className="mt-1 text-xs text-muted">{label}</div>
    </div>
  );
}
