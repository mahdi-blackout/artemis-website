export type PortfolioCategory =
  | "Mixing"
  | "Mastering"
  | "Recording"
  | "Live Sound"
  | "TV";

export type PortfolioProject = {
  slug: string;
  title: string;
  client: string;
  category: PortfolioCategory;
  cover: string;
  description: string;
  equipment: string[];
  audioSrc?: string;
  hasBeforeAfter: boolean;
};

export const portfolioCategories: PortfolioCategory[] = [
  "Mixing",
  "Mastering",
  "Recording",
  "Live Sound",
  "TV",
];

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "midnight-echo-ep",
    title: "Midnight Echo — EP",
    client: "Hollow Static",
    category: "Mixing",
    cover: "/images/portfolio/mixing-1.svg",
    description:
      "Full mix for a five-track alt-rock EP, balancing dense guitar layers against a tight rhythm section for a live, room-driven sound.",
    equipment: ["SSL Native Bundle", "Neve 1073 EQ", "1176 Compressor", "Pro Tools Ultimate"],
    audioSrc: "/audio/placeholder-mix.mp3",
    hasBeforeAfter: true,
  },
  {
    slug: "iron-veil-single",
    title: "Iron Veil — Single",
    client: "Iron Veil",
    category: "Mixing",
    cover: "/images/portfolio/mixing-2.svg",
    description:
      "Aggressive metal mix with scooped, high-gain guitars and a punishing low end, built to hold up on festival PA systems.",
    equipment: ["Kemper Profiler", "API 2500", "FabFilter Pro-Q3", "Slate Digital VMR"],
    audioSrc: "/audio/placeholder-mix.mp3",
    hasBeforeAfter: true,
  },
  {
    slug: "restless-hearts-lp",
    title: "Restless Hearts — LP",
    client: "Restless Hearts",
    category: "Mastering",
    cover: "/images/portfolio/mastering-1.svg",
    description:
      "Full-length album master prepared for both vinyl cutting and streaming, with careful attention to sequencing and level consistency.",
    equipment: ["Manley Massive Passive", "Weiss DS1-MK3", "Shadow Hills Mastering Compressor"],
    audioSrc: "/audio/placeholder-mix.mp3",
    hasBeforeAfter: true,
  },
  {
    slug: "solstice-single-master",
    title: "Solstice — Single Master",
    client: "Nova Solstice",
    category: "Mastering",
    cover: "/images/portfolio/mastering-2.svg",
    description:
      "Streaming-optimized master for a synth-pop single, tuned to translate cleanly across club systems and mobile playback alike.",
    equipment: ["Dangerous BAX EQ", "Elysia Alpha Compressor", "RME ADI-2 Pro"],
    audioSrc: "/audio/placeholder-mix.mp3",
    hasBeforeAfter: true,
  },
  {
    slug: "session-tracking-fullband",
    title: "Full Band Tracking Session",
    client: "The Departures",
    category: "Recording",
    cover: "/images/portfolio/recording-1.svg",
    description:
      "Live-room tracking for a four-piece rock band, capturing drums, bass, and guitar simultaneously for a cohesive, human performance.",
    equipment: ["Neumann U87", "SM7B", "API 512c Preamps", "Pro Tools HDX"],
    hasBeforeAfter: false,
  },
  {
    slug: "vocal-session-rnb",
    title: "R&B Vocal Session",
    client: "Simone Rae",
    category: "Recording",
    cover: "/images/portfolio/recording-2.svg",
    description:
      "Intimate vocal tracking session focused on performance comfort and mic technique to capture a warm, present lead vocal.",
    equipment: ["Sony C800G", "Neve 1073", "Distressor", "Apollo x8"],
    hasBeforeAfter: false,
  },
  {
    slug: "festival-foh-2025",
    title: "Riverbend Festival — FOH",
    client: "Riverbend Music Festival",
    category: "Live Sound",
    cover: "/images/portfolio/live-1.svg",
    description:
      "Front-of-house mixing across a three-day festival main stage, managing rapid changeovers between six touring acts.",
    equipment: ["DiGiCo SD12", "d&b audiotechnik J-Series", "Shure Axient Digital"],
    hasBeforeAfter: false,
  },
  {
    slug: "arena-monitor-world",
    title: "Arena Tour — Monitor World",
    client: "Crimson Tide (Tour)",
    category: "Live Sound",
    cover: "/images/portfolio/live-2.svg",
    description:
      "IEM and wedge monitor mixing for a 20-date arena tour, maintaining a consistent in-ear mix across every venue.",
    equipment: ["Avid S6L", "Shure PSM1000", "Sennheiser IEMs"],
    hasBeforeAfter: false,
  },
  {
    slug: "drama-series-mix",
    title: "\"Ashfall\" — Episode Re-Recording Mix",
    client: "Northlight Studios",
    category: "TV",
    cover: "/images/portfolio/tv-1.svg",
    description:
      "5.1 re-recording mix for a broadcast drama series, balancing dialogue, ADR, foley, and score to network delivery specs.",
    equipment: ["Avid S6", "Dolby Atmos Renderer", "iZotope RX 11"],
    audioSrc: "/audio/placeholder-mix.mp3",
    hasBeforeAfter: true,
  },
  {
    slug: "documentary-audio-post",
    title: "Deep Current — Documentary Audio Post",
    client: "Tidewater Films",
    category: "TV",
    cover: "/images/portfolio/tv-2.svg",
    description:
      "Full audio post for a feature documentary — dialogue edit, restoration of archival field recordings, and final broadcast mix.",
    equipment: ["iZotope RX 11", "Pro Tools Ultimate", "Dolby LM100 Loudness Meter"],
    hasBeforeAfter: true,
  },
];
