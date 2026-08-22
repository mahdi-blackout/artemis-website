import type { LucideIcon } from "lucide-react";
import {
  Mic2,
  Waves,
  Music2,
  Sliders,
  Disc3,
  Tv,
  MapPin,
  Briefcase,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
};

export const services: Service[] = [
  {
    slug: "recording",
    title: "Recording",
    icon: Mic2,
    tagline: "Capturing performances, in the studio or on location.",
    description:
      "Recording and location capture for musicians, bands, television productions, and entertainment projects.",
  },
  {
    slug: "audio-engineering",
    title: "Audio Engineering",
    icon: Waves,
    tagline: "The technical backbone of every session.",
    description:
      "Technical and creative engineering focused on reliable recordings and production-ready audio.",
  },
  {
    slug: "music-production",
    title: "Music Production",
    icon: Music2,
    tagline: "Shaping a performance into a finished record.",
    description: "Helping artists shape performances and recordings into cohesive productions.",
  },
  {
    slug: "mixing",
    title: "Mixing",
    icon: Sliders,
    tagline: "Particular experience in rock, metal, and performance-driven music.",
    description: "Mixing with particular experience in rock, metal, and performance-driven music.",
  },
  {
    slug: "mastering",
    title: "Mastering",
    icon: Disc3,
    tagline: "The final polish before release.",
    description: "Final-stage audio processing for release-ready music.",
  },
  {
    slug: "television-broadcast-audio",
    title: "Television & Broadcast Audio",
    icon: Tv,
    tagline: "From entertainment programming to field news production.",
    description:
      "Audio production and engineering for television, broadcast, news, entertainment, and field productions.",
  },
  {
    slug: "location-multi-city-recording",
    title: "Live Multitrack Recording",
    icon: MapPin,
    tagline: "Consistent audio, wherever the production goes.",
    description:
      "Experience working across multiple locations and managing the challenges of recording outside a conventional studio.",
  },
  {
    slug: "commercial-branded-audio",
    title: "Commercial & Branded Audio",
    icon: Briefcase,
    tagline: "Audio for brands, gaming, and entertainment properties.",
    description: "Audio production for commercial, branded, corporate, gaming, and entertainment projects.",
  },
];
