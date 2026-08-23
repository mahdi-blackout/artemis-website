import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle } from "lucide-react";
import { navLinks } from "@/data/nav";
import ObfuscatedLink from "@/components/shared/ObfuscatedLink";
import { EMAIL_ENCODED, WHATSAPP_ENCODED, formatWhatsApp } from "@/lib/contact";

export default function Footer() {
  return (
    <footer className="relative mt-32 border-t border-border bg-surface/60">
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
            Mustakim Al Mahdi — Audio Engineer &amp; Music Producer based in Bangladesh, working
            across music production, recording, mixing, mastering, television, broadcast, and
            large-scale entertainment productions.
          </p>
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
              <Mail className="h-4 w-4 text-emerald" />
              <ObfuscatedLink
                encoded={EMAIL_ENCODED}
                hrefPrefix="mailto:"
                className="transition-colors hover:text-electric"
              >
                {(raw) => raw}
              </ObfuscatedLink>
            </li>
            <li className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4 text-emerald" />
              <ObfuscatedLink
                encoded={WHATSAPP_ENCODED}
                hrefPrefix="https://wa.me/"
                className="transition-colors hover:text-electric"
              >
                {formatWhatsApp}
              </ObfuscatedLink>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border px-6 py-6 text-center text-xs text-muted md:px-10">
        © {new Date().getFullYear()} Artemis Production. All rights reserved.
      </div>
    </footer>
  );
}
