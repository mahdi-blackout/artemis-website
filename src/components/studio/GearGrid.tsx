"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { gear, gearCategories, type GearCategory } from "@/data/gear";
import GearCard from "@/components/studio/GearCard";
import { cn } from "@/lib/utils";

type Filter = GearCategory | "All";

export default function GearGrid() {
  const [filter, setFilter] = useState<Filter>("All");
  const filtered = filter === "All" ? gear : gear.filter((g) => g.category === filter);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {(["All", ...gearCategories] as Filter[]).map((cat) => {
          const active = cat === filter;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              data-cursor-hover
              className={cn(
                "relative rounded-full border px-4 py-2 text-sm font-medium transition-colors duration-300",
                active ? "border-emerald/50 text-emerald" : "border-border text-muted hover:text-foreground"
              )}
            >
              {active && (
                <motion.span
                  layoutId="gear-filter-active"
                  className="absolute inset-0 -z-10 rounded-full bg-emerald/10"
                />
              )}
              {cat}
            </button>
          );
        })}
      </div>

      <motion.div layout className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {filtered.map((item, i) => (
          <motion.div key={item.name} layout>
            <GearCard item={item} index={i} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
