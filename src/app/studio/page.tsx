import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import GearGrid from "@/components/studio/GearGrid";
import ConsolePanel from "@/components/studio/ConsolePanel";
import FinalCTA from "@/components/home/FinalCTA";

export const metadata: Metadata = {
  title: "Studio",
  description:
    "A look inside the Artemis Production studio — microphones, monitors, outboard gear, instruments, and software used on every session.",
};

export default function StudioPage() {
  return (
    <>
      <PageHero
        eyebrow="The Studio"
        title="Gear chosen for character, not just specs."
        description="Every piece in the room earns its place — selected for how it sounds, not just how it measures."
      />
      <section className="mx-auto max-w-7xl px-6 pb-28 md:px-10">
        <GearGrid />
      </section>
      <ConsolePanel />
      <FinalCTA />
    </>
  );
}
