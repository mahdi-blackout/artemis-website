import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import PortfolioGrid from "@/components/portfolio/PortfolioGrid";
import FinalCTA from "@/components/home/FinalCTA";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Portfolio",
  description:
    "Music production, television, broadcast, commercial, and branded audio projects by Mustakim Al Mahdi / Artemis Production — including The Cage Season 2, Yamaha Music Bangladesh, and Channel i's What a Show.",
  path: "portfolio",
});

export default function PortfolioPage() {
  return (
    <>
      <PageHero
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
