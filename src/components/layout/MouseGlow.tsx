"use client";

import { useEffect, useRef } from "react";

export default function MouseGlow() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;
    const pos = { x: 0, y: 0 };
    let raf = 0;
    const current = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
    };

    const animate = () => {
      current.x += (pos.x - current.x) * 0.08;
      current.y += (pos.y - current.y) * 0.08;
      if (glowRef.current) {
        glowRef.current.style.transform = `translate(${current.x}px, ${current.y}px) translate(-50%, -50%)`;
      }
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMove);
    raf = requestAnimationFrame(animate);
    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={glowRef}
      className="pointer-events-none fixed left-0 top-0 z-[1] hidden md:block"
      style={{
        width: 560,
        height: 560,
        background:
          "radial-gradient(circle, rgba(51,194,255,0.10) 0%, rgba(47,230,168,0.05) 40%, transparent 70%)",
        borderRadius: "50%",
      }}
      aria-hidden="true"
    />
  );
}
