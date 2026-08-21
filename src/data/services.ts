import type { LucideIcon } from "lucide-react";
import {
  Mic2,
  Sliders,
  Disc3,
  Speaker,
  Podcast,
  Tv,
  Wand2,
} from "lucide-react";

export type Service = {
  slug: string;
  title: string;
  icon: LucideIcon;
  tagline: string;
  description: string;
  deliverables: string[];
  startingPrice: string;
};

export const services: Service[] = [
  {
    slug: "recording",
    title: "Recording",
    icon: Mic2,
    tagline: "Tracking sessions built around performance.",
    description:
      "Full-band or single-instrument tracking in an acoustically treated room, with signal chains chosen to capture the character of the performance, not just the notes.",
    deliverables: [
      "Multitrack session files (Pro Tools / WAV stems)",
      "Comped and edited takes",
      "Rough mix bounce for reference",
      "Backed-up session archive",
    ],
    startingPrice: "From $120 / session",
  },
  {
    slug: "mixing",
    title: "Mixing",
    icon: Sliders,
    tagline: "Clarity, depth, and impact for every element.",
    description:
      "Detailed mix passes that balance emotion and technical precision — built to translate across studio monitors, earbuds, and club systems alike.",
    deliverables: [
      "2 full revision rounds",
      "Stereo mix, instrumental, and TV mix",
      "Stem bounce (drums / bass / music / vocals)",
      "Reference-matched loudness targets",
    ],
    startingPrice: "From $250 / track",
  },
  {
    slug: "mastering",
    title: "Mastering",
    icon: Disc3,
    tagline: "The final polish before release.",
    description:
      "Translation-focused mastering for streaming, vinyl, and broadcast — tonal balance, dynamics, and loudness tuned for the platform your audience actually hears it on.",
    deliverables: [
      "Streaming master (LUFS-optimized)",
      "Instrumental / TV master",
      "DDP / WAV delivery",
      "1 revision round included",
    ],
    startingPrice: "From $80 / track",
  },
  {
    slug: "live-sound",
    title: "Live Sound",
    icon: Speaker,
    tagline: "FOH and monitor engineering that holds up under pressure.",
    description:
      "Front-of-house mixing, monitor world, and system tuning for venues, festivals, and touring rigs — engineered for consistency show after show.",
    deliverables: [
      "FOH mix engineering",
      "Monitor / IEM mixing",
      "System tuning & measurement",
      "Show file documentation",
    ],
    startingPrice: "From $300 / show",
  },
  {
    slug: "podcast-production",
    title: "Podcast Production",
    icon: Podcast,
    tagline: "Broadcast-ready dialogue, every episode.",
    description:
      "Recording, editing, cleanup, and mixing for podcasts and interview series — consistent voice tone and loudness across every episode in the feed.",
    deliverables: [
      "Noise reduction & dialogue cleanup",
      "Leveled, EQ'd, compressed voice mix",
      "Intro / outro / bed integration",
      "Platform-ready loudness (Spotify / Apple)",
    ],
    startingPrice: "From $60 / episode",
  },
  {
    slug: "tv-production-audio",
    title: "TV Production Audio",
    icon: Tv,
    tagline: "Broadcast-standard audio for screen productions.",
    description:
      "On-set sound recording and post mixing for television — dialogue, ADR, and full re-recording mixes delivered to broadcast loudness specifications.",
    deliverables: [
      "Production sound recording",
      "Dialogue edit & ADR",
      "5.1 / stereo re-recording mix",
      "Broadcast loudness compliance (R128 / A85)",
    ],
    startingPrice: "From $400 / episode",
  },
  {
    slug: "audio-restoration",
    title: "Audio Restoration",
    icon: Wand2,
    tagline: "Rescue and repair for damaged recordings.",
    description:
      "Removal of hum, hiss, clicks, and distortion from archival tapes, live recordings, or damaged files — restoring clarity without losing the original character.",
    deliverables: [
      "Noise & hum removal",
      "Click / crackle / dropout repair",
      "Dialogue & tape restoration",
      "Before / after comparison file",
    ],
    startingPrice: "From $50 / track",
  },
];
