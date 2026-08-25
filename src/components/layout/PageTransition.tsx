"use client";

import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

export default function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    // popLayout pulls the exiting page out of the layout flow (position:
    // absolute) instead of blocking on it, so the incoming page can mount
    // and start painting immediately in parallel with the old page's fade-
    // out — with mode="wait" the browser had to finish unmounting the old
    // page before it could even start the (often much heavier) mount of the
    // new one, and that synchronous mount work landing mid-animation is what
    // read as dropped frames/choppiness.
    <AnimatePresence mode="popLayout" initial={false}>
      <motion.div
        key={pathname}
        className="w-full"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.2, ease: "easeOut" }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
