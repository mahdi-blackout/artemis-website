import type { Metadata } from "next";
import PageHero from "@/components/shared/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import ContactMethods from "@/components/contact/ContactMethods";
import StudioMap from "@/components/contact/StudioMap";
import Reveal from "@/components/shared/Reveal";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Get in touch with Mustakim Al Mahdi / Artemis Production to discuss recording, mixing, mastering, television, broadcast, or commercial audio projects.",
  path: "contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Let's talk about your project."
        description="Whether it's music production, a television or broadcast project, or a commercial production — reach out and let's figure out the right approach."
      />

      <section className="mx-auto max-w-7xl px-6 pb-28 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-8">
            <Reveal>
              <ContactMethods />
            </Reveal>

            <Reveal delay={0.1}>
              <StudioMap />
            </Reveal>
          </div>

          <Reveal delay={0.05}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
