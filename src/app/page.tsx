import Hero from "@/components/home/Hero";
import ServicesStrip from "@/components/home/ServicesStrip";
import FeaturedWork from "@/components/home/FeaturedWork";
import TestimonialsPreview from "@/components/home/TestimonialsPreview";
import FinalCTA from "@/components/home/FinalCTA";
import WaveformDivider from "@/components/shared/WaveformDivider";

export default function Home() {
  return (
    <>
      <Hero />
      <WaveformDivider className="opacity-30" />
      <ServicesStrip />
      <FeaturedWork />
      <TestimonialsPreview />
      <FinalCTA />
    </>
  );
}
