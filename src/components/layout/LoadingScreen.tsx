"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const VISIBLE_DURATION = 1900;

export default function LoadingScreen() {
  const [visible, setVisible] = useState(true);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.documentElement.style.overflow = "hidden";
    const flagTimer = setTimeout(() => setReduceMotion(reduced), 0);
    const timer = setTimeout(
      () => {
        setVisible(false);
        document.documentElement.style.overflow = "";
      },
      reduced ? 0 : VISIBLE_DURATION
    );
    return () => {
      clearTimeout(flagTimer);
      clearTimeout(timer);
    };
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center bg-background"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        >
          <div className="relative flex flex-col items-center">
            <motion.div
              className="absolute left-1/2 top-1/2 h-64 w-[28rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/30 blur-[80px]"
              initial={{ opacity: 0 }}
              animate={{ opacity: [0.4, 0.75, 0.4] }}
              transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
            />

            <motion.div
              className="relative h-20 w-72 sm:h-28 sm:w-[26rem]"
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <Image
                src="/images/brand/artemis-logo-dark-bg.png"
                alt="Artemis Production"
                fill
                priority
                sizes="416px"
                className="object-contain"
              />
            </motion.div>

            {!reduceMotion && (
              <motion.div
                className="mt-10 h-[2px] w-48 overflow-hidden rounded-full bg-white/10"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.35, duration: 0.4 }}
              >
                <motion.div
                  className="h-full rounded-full bg-electric"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  style={{ transformOrigin: "left", boxShadow: "0 0 8px var(--electric)" }}
                  transition={{ duration: VISIBLE_DURATION / 1000, ease: "linear" }}
                />
              </motion.div>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
