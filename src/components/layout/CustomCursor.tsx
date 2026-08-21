"use client";

import { useEffect, useRef, useState } from "react";

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(pointer: coarse)").matches) return;

    const pos = { x: 0, y: 0 };
    const ring = { x: 0, y: 0 };

    const onMove = (e: MouseEvent) => {
      pos.x = e.clientX;
      pos.y = e.clientY;
      setHidden(false);
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`;
      }
      const target = e.target as HTMLElement;
      setHovering(Boolean(target.closest("a, button, [data-cursor-hover]")));
    };

    let raf = 0;
    const animate = () => {
      ring.x += (pos.x - ring.x) * 0.18;
      ring.y += (pos.y - ring.y) * 0.18;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.x}px, ${ring.y}px) translate(-50%, -50%)`;
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
      className="pointer-events-none fixed inset-0 z-[250] hidden md:block"
      style={{ opacity: hidden ? 0 : 1, transition: "opacity 0.3s ease" }}
      aria-hidden="true"
    >
      {/* Playhead ring */}
      <div
        ref={ringRef}
        className="fixed left-0 top-0 flex items-center justify-center rounded-full border transition-[width,height,border-color] duration-200 ease-out"
        style={{
          width: hovering ? 56 : 34,
          height: hovering ? 56 : 34,
          borderColor: hovering ? "var(--electric)" : "rgba(255,255,255,0.35)",
        }}
      >
        <div
          className="h-[2px] w-full absolute"
          style={{ background: hovering ? "var(--electric)" : "rgba(255,255,255,0.25)" }}
        />
      </div>
      {/* Playhead tip (dot) */}
      <div
        ref={dotRef}
        className="fixed left-0 top-0 rounded-full transition-[background-color] duration-150"
        style={{
          width: 6,
          height: 6,
          background: hovering ? "var(--electric)" : "#fff",
          boxShadow: hovering ? "0 0 12px var(--electric)" : "0 0 6px rgba(255,255,255,0.6)",
        }}
      />
    </div>
  );
}
