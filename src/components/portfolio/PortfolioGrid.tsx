"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { portfolioCategories, portfolioProjects, type PortfolioCategory } from "@/data/portfolio";
import ProjectCard from "@/components/portfolio/ProjectCard";
import { cn } from "@/lib/utils";

type Filter = PortfolioCategory | "All";

export default function PortfolioGrid() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered =
    filter === "All" ? portfolioProjects : portfolioProjects.filter((p) => p.category === filter);

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-3">
        {(["All", ...portfolioCategories] as Filter[]).map((cat) => {
          const active = cat === filter;
          return (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              data-cursor-hover
              className={cn(
                "relative rounded-full border px-5 py-2 text-sm font-medium transition-colors duration-300",
                active
                  ? "border-electric/50 text-electric"
                  : "border-border text-muted hover:text-foreground"
              )}
            >
              {active && (
                <motion.span
                  layoutId="portfolio-filter-active"
                  className="absolute inset-0 -z-10 rounded-full bg-electric/10"
                />
              )}
              {cat}
            </button>
          );
        })}
      </div>

      <motion.div
        layout
        className="mt-12 grid grid-cols-1 gap-6 lg:grid-cols-2"
      >
        {filtered.map((project, i) => (
          <motion.div key={project.slug} layout>
            <ProjectCard project={project} index={i} />
          </motion.div>
        ))}
      </motion.div>

      {filtered.length === 0 && (
        <p className="mt-16 text-center text-muted">No projects in this category yet.</p>
      )}
    </div>
  );
}
