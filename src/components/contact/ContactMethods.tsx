"use client";

import { Mail, MessageCircle } from "lucide-react";
import ObfuscatedLink from "@/components/shared/ObfuscatedLink";
import { EMAIL_ENCODED, WHATSAPP_ENCODED, formatWhatsApp } from "@/lib/contact";

const contactMethods = [
  {
    icon: Mail,
    label: "Email",
    encoded: EMAIL_ENCODED,
    hrefPrefix: "mailto:",
    format: (raw: string) => raw,
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    encoded: WHATSAPP_ENCODED,
    hrefPrefix: "https://wa.me/",
    format: formatWhatsApp,
  },
];

export default function ContactMethods() {
  return (
    <div className="space-y-3">
      {contactMethods.map((c) => (
        <ObfuscatedLink
          key={c.label}
          encoded={c.encoded}
          hrefPrefix={c.hrefPrefix}
          className="glass flex items-center gap-4 rounded-xl p-4 backdrop-blur-[20px] backdrop-saturate-[1.4] transition-colors hover:border-electric/40"
        >
          {(raw) => (
            <>
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-electric/10 text-electric">
                <c.icon className="h-4 w-4" />
              </span>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted">{c.label}</div>
                <div className="text-sm font-medium">{c.format(raw)}</div>
              </div>
            </>
          )}
        </ObfuscatedLink>
      ))}
    </div>
  );
}
