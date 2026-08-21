import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Explore recording, mixing, mastering, live sound, and TV production audio projects by Artemis Production.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHero
        eyebrow="Portfolio"
        title="Work that's been heard on stages, screens, and stereos."
        description="A selection of recent projects across mixing, mastering, recording, live sound, and broadcast television."
      />
      <section className="mx-auto max-w-7xl px-6 pb-28 md:px-10">
        <PortfolioGrid />
      </section>
      <FinalCTA />
    </>
  );
}
