import type { Metadata } from "next";
import { Inter, Space_Grotesk, JetBrains_Mono } from "next/font/google";
import SiteChrome from "@/components/layout/SiteChrome";
import "./globals.css";

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
  title: {
    default: "Artemis Production | Audio Engineer & Music Producer",
    template: "%s | Artemis Production",
  },
  description:
    "Artemis Production is a professional audio engineering studio offering recording, mixing, mastering, live sound, podcast production, TV production audio, and audio restoration.",
  keywords: [
    "audio engineer",
    "music producer",
    "mixing engineer",
    "mastering engineer",
    "recording studio",
    "live sound engineer",
    "TV production audio",
  ],
  openGraph: {
    title: "Artemis Production | Audio Engineer & Music Producer",
    description:
      "Turning great performances into world-class productions. Recording, mixing, mastering, live sound, and broadcast audio.",
    type: "website",
    siteName: "Artemis Production",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} h-full`}
    >
      <body className="grain min-h-full bg-background font-sans text-foreground antialiased">
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
