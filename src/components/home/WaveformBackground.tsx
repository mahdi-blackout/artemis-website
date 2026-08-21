"use client";

import { useEffect, useRef } from "react";

export default function WaveformBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = 0;
    let height = 0;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const resize = () => {
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    window.addEventListener("resize", resize);

    let raf = 0;
    const colors = ["#7800ff", "#2fe6a8", "#f5a94e"];

    const draw = (t: number) => {
      ctx.clearRect(0, 0, width, height);
      const time = t / 1000;

      colors.forEach((color, layer) => {
        ctx.beginPath();
        const amp = height * (0.06 + layer * 0.03);
        const freq = 0.006 + layer * 0.002;
        const speed = 0.6 + layer * 0.25;
        const yBase = height * 0.5 + layer * 14 - 14;

        for (let x = 0; x <= width; x += 4) {
          const y =
            yBase +
            Math.sin(x * freq + time * speed) * amp +
            Math.sin(x * freq * 2.3 - time * speed * 1.4) * amp * 0.4;
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
        ctx.strokeStyle = color;
        ctx.globalAlpha = 0.16 - layer * 0.03;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      });

      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-70"
      aria-hidden="true"
    />
  );
}
