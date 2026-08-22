export type PortfolioCategory =
  | "Music Production"
  | "Mastering"
  | "Television"
  | "Broadcast"
  | "Commercial"
  | "Branded Content";

export type ProjectLink = {
  label: string;
  href: string;
};

export type PortfolioProject = {
  slug: string;
  title: string;
  client: string;
  year?: string;
  category: PortfolioCategory;
  cover: string;
  description: string;
  role: string[];
  links?: ProjectLink[];
};

export const portfolioCategories: PortfolioCategory[] = [
  "Music Production",
  "Mastering",
  "Television",
  "Broadcast",
  "Commercial",
  "Branded Content",
];

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "the-cage-season-2",
    title: "The Cage — Season 2",
    client: "The Cage",
    year: "2026",
    category: "Television",
    cover: "/images/portfolio/tv-1.svg",
    description:
      "Mustakim's largest production to date — a multi-city production involving 18 participating bands, with full audio production for the show's competition and final rounds.",
    role: [
      "Location Recording",
      "Audio Engineering",
      "Multi-Band Production",
      "Technical Coordination",
      "Final-Round Audio Production",
    ],
  },
  {
    slug: "yamaha-music-bangladesh",
    title: "Yamaha Music Bangladesh",
    client: "Yamaha Music Bangladesh",
    year: "2022–2025",
    category: "Commercial",
    cover: "/images/portfolio/recording-1.svg",
    description:
      "A multi-year commercial partnership producing more than 50 episodes of Feature Friday and contributing to more than 20 additional music and media projects — 70+ episodes and projects in total.",
    role: ["Audio Engineer", "Producer", "Audio Production"],
  },
  {
    slug: "what-a-show-channel-i",
    title: "What a Show",
    client: "Channel i",
    year: "2023–Present",
    category: "Television",
    cover: "/images/portfolio/tv-2.svg",
    description:
      "Ongoing audio production and engineering for Channel i's entertainment program, contributing from Season 5 onward.",
    role: ["Audio Production", "Audio Engineering"],
    links: [
      { label: "Watch: Eid Special, Season 5", href: "https://www.youtube.com/watch?v=qzpFkp9xlVY" },
      {
        label: "Watch: Tawsif Mahbub & Sarika Sabah",
        href: "https://www.youtube.com/watch?v=7gAmaloMlo0",
      },
    ],
  },
  {
    slug: "oni-hasan",
    title: "Oni Hasan — Artist Production",
    client: "Oni Hasan",
    category: "Music Production",
    cover: "/images/portfolio/mixing-1.svg",
    description:
      "Ongoing collaboration with guitarist Oni Hasan — known for brand associations including Kiesel and Seymour Duncan. Working with technically demanding musicians requires more than clean recordings; it requires understanding the instrument, the performance, and the artist's sonic identity.",
    role: ["Producer", "Audio Engineer", "Mixing Engineer", "Mastering Engineer"],
  },
  {
    slug: "infidel-swallow-this",
    title: "Infidel — Swallow This",
    client: "Infidel",
    year: "2018",
    category: "Music Production",
    cover: "/images/portfolio/mixing-2.svg",
    description:
      "An early production milestone where Mustakim's musical background and engineering work came together — songwriting, production, mixing, and mastering, produced at Sonic Station Productions. Guitars re-amped by Keith Merrow.",
    role: ["Songwriting", "Production", "Mixing", "Mastering"],
    links: [{ label: "Listen on Bandcamp", href: "https://infideltheband.bandcamp.com/track/swallow-this" }],
  },
  {
    slug: "infidel-end-of-disgrace",
    title: "Infidel — End of Disgrace",
    client: "Infidel",
    year: "2017",
    category: "Music Production",
    cover: "/images/portfolio/recording-2.svg",
    description:
      "An early Infidel release from the year Mustakim began developing his mixing and production skills through his own band.",
    role: ["Musician", "Songwriter", "Producer", "Audio Engineer"],
  },
  {
    slug: "netra-news-election-coverage",
    title: "Election Coverage",
    client: "Netra News",
    year: "2026",
    category: "Broadcast",
    cover: "/images/portfolio/live-1.svg",
    description:
      "Broadcast audio production for Netra News's election coverage — news and field production audio outside a conventional studio or entertainment environment.",
    role: ["Audio Production", "Broadcast Audio", "Audio Engineering"],
  },
  {
    slug: "voice-of-ummah",
    title: "Voice of Ummah",
    client: "Deepto TV",
    year: "2025",
    category: "Television",
    cover: "/images/portfolio/live-2.svg",
    description: "Audio production and engineering for Voice of Ummah, a television entertainment program on Deepto TV.",
    role: ["Audio Production", "Audio Engineering"],
  },
  {
    slug: "bkash-skip-the-line",
    title: "bKash Presents Skip the Line",
    client: "bKash",
    year: "2026",
    category: "Commercial",
    cover: "/images/portfolio/mastering-2.svg",
    description: "Commercial and branded entertainment production for bKash Presents Skip the Line.",
    role: ["Audio Production", "Audio Engineering"],
  },
  {
    slug: "free-fire-9th-anniversary",
    title: "Free Fire 9th Anniversary",
    client: "Free Fire",
    year: "2026",
    category: "Branded Content",
    cover: "/images/portfolio/mastering-1.svg",
    description: "Branded gaming and entertainment production for the Free Fire 9th Anniversary.",
    role: ["Audio Production"],
  },
  {
    slug: "torture-goregrinder",
    title: "In the Slam / On the Gang",
    client: "Torture Goregrinder",
    year: "2025",
    category: "Mastering",
    cover: "/images/portfolio/recording-2.svg",
    description:
      "Mastering engineer credit on Torture Goregrinder's release, publicly documented via music metadata — The Metal Archives also lists mixing involvement.",
    role: ["Mastering", "Mixing"],
    links: [
      { label: "View on Shazam", href: "https://www.shazam.com/song/1804238089/in-the-slam-on-the-gang" },
    ],
  },
  {
    slug: "ak-rahul-fried-chicken",
    title: "Fried Chicken",
    client: "A.K. Rahul",
    category: "Music Production",
    cover: "/images/portfolio/mixing-1.svg",
    description:
      "A publicly indexed track credited to A.K. Rahul and Raiyan Dio Sarwar as songwriters, with Mustakim Al Mahdi also credited as a songwriter.",
    role: ["Songwriting"],
    links: [{ label: "View on Shazam", href: "https://www.shazam.com/song/1756184723/fried-chicken" }],
  },
];
