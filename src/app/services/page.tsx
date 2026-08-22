import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ServiceCard from "@/components/services/ServiceCard";
import FinalCTA from "@/components/home/FinalCTA";
import { services } from "@/data/services";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Services",
  description:
    "Recording, audio engineering, music production, mixing, mastering, television and broadcast audio, live multitrack recording, and commercial and branded audio — services from Artemis Production.",
  path: "services",
});

export default function ServicesPage() {
  return (
    <>
      <PageHero
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
