import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ServiceCard from "@/components/services/ServiceCard";
import FinalCTA from "@/components/home/FinalCTA";
import { services } from "@/data/services";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Recording, mixing, mastering, live sound, podcast production, TV production audio, and audio restoration services from Artemis Production.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Every stage of the signal chain, covered."
        description="From the first take to the final broadcast delivery — pick a single service or a full production pipeline."
      />
      <section className="mx-auto max-w-7xl px-6 pb-28 md:px-10">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} />
          ))}
        </div>
      </section>
      <FinalCTA />
    </>
  );
}
