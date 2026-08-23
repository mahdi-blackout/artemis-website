import Hero from "@/components/home/Hero";
import ServicesStrip from "@/components/home/ServicesStrip";
import FeaturedWork from "@/components/home/FeaturedWork";
import TelevisionBroadcast from "@/components/home/TelevisionBroadcast";
import FinalCTA from "@/components/home/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedWork />
      <ServicesStrip />
      <TelevisionBroadcast />
      <FinalCTA />
    </>
  );
}
