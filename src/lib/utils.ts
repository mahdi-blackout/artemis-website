import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/** Deterministic pseudo-random values in [0, 1) — safe for SSR/client hydration parity. */
export function seededSequence(count: number, seed = 1): number[] {
  let s = seed;
  return Array.from({ length: count }, () => {
    s = (s * 9301 + 49297) % 233280;
    return s / 233280;
  });
}

/** Prefixes a root-relative asset path with the deployment basePath (next/image and next/link do this automatically; raw <audio>/<video> src must use this instead). */
export function withBasePath(path: string) {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
