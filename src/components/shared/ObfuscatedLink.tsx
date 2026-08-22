"use client";

import { useEffect, useState } from "react";
import type { ReactNode } from "react";

type ObfuscatedLinkProps = {
  /**
   * Base64 of the real address/number (e.g. btoa("name@example.com")).
   * Static export prerenders every page to plain HTML, so a literal email or
   * phone number in the source would sit in that HTML for any scraper to
   * regex out. Keeping only the base64 form in the markup and decoding it
   * client-side after mount means the page never contains an @-sign or
   * phone-number-shaped string for that class of scraper to find.
   */
  encoded: string;
  hrefPrefix: string;
  className?: string;
  placeholder?: ReactNode;
  children: (raw: string) => ReactNode;
};

export default function ObfuscatedLink({
  encoded,
  hrefPrefix,
  className,
  placeholder,
  children,
}: ObfuscatedLinkProps) {
  const [raw, setRaw] = useState<string | null>(null);

  useEffect(() => {
    // Deferred rather than called synchronously in the effect body: this
    // still only ever runs client-side, after mount — never during the
    // static-export prerender — which is what actually keeps the decoded
    // value out of the shipped HTML.
    const id = setTimeout(() => setRaw(atob(encoded)), 0);
    return () => clearTimeout(id);
  }, [encoded]);

  if (!raw) {
    return (
      <span className={className} aria-hidden="true">
        {placeholder ?? "•••"}
      </span>
    );
  }

  const external = hrefPrefix.startsWith("http");

  return (
    <a
      href={`${hrefPrefix}${raw}`}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={className}
    >
      {children(raw)}
    </a>
  );
}
