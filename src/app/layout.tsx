import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import SiteChrome from "@/components/layout/SiteChrome";
import { SITE_URL, absoluteUrl, absoluteAssetUrl, DEFAULT_OG_IMAGE } from "@/lib/seo";
import "./globals.css";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mustakim Al Mahdi",
  jobTitle: "Audio Engineer & Music Producer",
  url: absoluteUrl(),
  image: absoluteAssetUrl("images/hero/mustakim-live-wide.png"),
  nationality: "Bangladeshi",
  address: { "@type": "PostalAddress", addressCountry: "BD" },
  worksFor: { "@type": "Organization", name: "Artemis Production", url: absoluteUrl() },
  knowsAbout: [
    "Audio Engineering",
    "Music Production",
    "Recording",
    "Mixing",
    "Mastering",
    "Television Audio",
    "Broadcast Audio",
    "Live Multitrack Recording",
  ],
};

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Mustakim Al Mahdi | Audio Engineer & Music Producer",
    template: "%s | Artemis Production",
  },
  description:
    "Mustakim Al Mahdi is a Bangladesh-based Audio Engineer and Music Producer working across music production, recording, mixing, mastering, television, broadcast, and large-scale entertainment productions. Studio: Artemis Production.",
  keywords: [
    "audio engineer Bangladesh",
    "music producer Bangladesh",
    "mixing engineer",
    "mastering engineer",
    "television audio production",
    "broadcast audio",
    "Artemis Production",
    "Mustakim Al Mahdi",
  ],
  alternates: { canonical: absoluteUrl() },
  openGraph: {
    title: "Mustakim Al Mahdi | Audio Engineer & Music Producer",
    description:
      "From the studio to large-scale productions — engineering audio that serves the performance. Music production, recording, mixing, mastering, television, and broadcast audio.",
    type: "website",
    siteName: "Artemis Production",
    url: absoluteUrl(),
    locale: "en_US",
    images: [DEFAULT_OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mustakim Al Mahdi | Audio Engineer & Music Producer",
    description:
      "From the studio to large-scale productions — engineering audio that serves the performance.",
    images: [DEFAULT_OG_IMAGE.url],
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="min-h-full bg-background font-sans text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[999] focus:rounded-md focus:bg-electric focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to content
        </a>
        <SiteChrome>{children}</SiteChrome>
      </body>
    </html>
  );
}
