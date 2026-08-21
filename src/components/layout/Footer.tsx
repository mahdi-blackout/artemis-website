import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MessageCircle, Camera, Video, Music2 } from "lucide-react";
import { navLinks } from "@/data/nav";
import WaveformDivider from "@/components/shared/WaveformDivider";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-surface/60">
      <WaveformDivider className="absolute -top-5 left-0" />
      <div className="mx-auto grid max-w-7xl gap-12 px-6 py-16 md:grid-cols-4 md:px-10">
        <div className="md:col-span-2">
          <Link href="/" className="relative block h-11 w-[220px]">
            <Image
              src="/images/brand/artemis-logo-dark-bg.png"
              alt="Artemis Production"
              fill
              sizes="220px"
              className="object-contain object-left"
            />
          </Link>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-muted">
            Recording, mixing, mastering, live sound, and broadcast audio — engineered
            for artists and productions that refuse to sound ordinary.
          </p>
          <div className="mt-6 flex gap-3">
            {[Camera, Video, Music2].map((Icon, i) => (
              <a
                key={i}
                href="#"
                data-cursor-hover
                aria-label="Social link"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted transition-colors hover:border-electric/50 hover:text-electric"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-muted">
            Navigate
          </h3>
          <ul className="mt-4 space-y-2">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="text-sm text-muted transition-colors hover:text-electric">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sm font-semibold uppercase tracking-widest text-muted">
            Get in touch
          </h3>
          <ul className="mt-4 space-y-3 text-sm text-muted">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-emerald" /> hello@artemisproduction.com
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-emerald" /> +1 (555) 019-2044
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-emerald" /> WhatsApp available
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-6 py-6 text-center text-xs text-muted md:px-10">
        © {new Date().getFullYear()} Artemis Production. All rights reserved. Site design & build placeholder content.
      </div>
    </footer>
  );
}
