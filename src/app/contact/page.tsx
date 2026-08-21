import type { Metadata } from "next";
import { Mail, Phone, MessageCircle, Camera, Video, Music2 } from "lucide-react";
import PageHero from "@/components/shared/PageHero";
import ContactForm from "@/components/contact/ContactForm";
import StudioMap from "@/components/contact/StudioMap";
import Reveal from "@/components/shared/Reveal";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Artemis Production to discuss recording, mixing, mastering, live sound, or TV production audio projects.",
};

const contactMethods = [
  { icon: Mail, label: "Email", value: "hello@artemisproduction.com", href: "mailto:hello@artemisproduction.com" },
  { icon: Phone, label: "Phone", value: "+1 (555) 019-2044", href: "tel:+15550192044" },
  { icon: MessageCircle, label: "WhatsApp", value: "Message on WhatsApp", href: "https://wa.me/15550192044" },
];

const socials = [
  { icon: Camera, label: "Instagram" },
  { icon: Video, label: "YouTube" },
  { icon: Music2, label: "Spotify" },
];

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's talk about your project."
        description="Whether you have a release date locked in or you're just exploring options — reach out and let's figure out the right approach."
      />

      <section className="mx-auto max-w-7xl px-6 pb-28 md:px-10">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_1.2fr]">
          <div className="space-y-8">
            <Reveal>
              <div className="space-y-3">
                {contactMethods.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    data-cursor-hover
                    className="glass flex items-center gap-4 rounded-xl p-4 transition-colors hover:border-electric/40"
                  >
                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-electric/10 text-electric">
                      <c.icon className="h-4 w-4" />
                    </span>
                    <div>
                      <div className="text-xs uppercase tracking-widest text-muted">{c.label}</div>
                      <div className="text-sm font-medium">{c.value}</div>
                    </div>
                  </a>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <div>
                <div className="mb-3 text-xs font-medium uppercase tracking-widest text-muted">
                  Follow Along
                </div>
                <div className="flex gap-3">
                  {socials.map((s) => (
                    <a
                      key={s.label}
                      href="#"
                      data-cursor-hover
                      aria-label={s.label}
                      className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-emerald/50 hover:text-emerald"
                    >
                      <s.icon className="h-4 w-4" />
                    </a>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
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
