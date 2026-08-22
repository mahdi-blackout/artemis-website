export type Artist = {
  slug: string;
  name: string;
  role: string[];
  bio: string;
  featured?: boolean;
  link?: { label: string; href: string };
};

export const artists: Artist[] = [
  {
    slug: "oni-hasan",
    name: "Oni Hasan",
    role: ["Producer", "Audio Engineer", "Mixing Engineer", "Mastering Engineer"],
    bio: "A renowned guitarist with brand associations including Kiesel and Seymour Duncan. Working with technically demanding musicians requires more than clean recordings — it requires understanding the instrument, the performance, and the artist's sonic identity.",
    featured: true,
  },
  {
    slug: "ak-rahul",
    name: "A.K. Rahul",
    role: ["Songwriting"],
    bio: 'Collaborated on music production. The publicly indexed track "Fried Chicken" credits A.K. Rahul and Raiyan Dio Sarwar as songwriters, alongside Mustakim Al Mahdi.',
    link: { label: "View on Shazam", href: "https://www.shazam.com/song/1756184723/fried-chicken" },
  },
  {
    slug: "torture-goregrinder",
    name: "Torture Goregrinder",
    role: ["Mastering", "Mixing"],
    bio: 'Mastering engineer on the 2025 release "In the Slam / On the Gang," with mixing involvement documented on The Metal Archives.',
    link: {
      label: "View on Shazam",
      href: "https://www.shazam.com/song/1804238089/in-the-slam-on-the-gang",
    },
  },
  {
    slug: "timescape",
    name: "Timescape",
    role: ["Production", "Engineering", "Mixing / Mastering"],
    bio: "Ongoing production and engineering work — individual releases and credits will be added as they're finalized.",
  },
  {
    slug: "cremain",
    name: "Cremain",
    role: ["Production", "Engineering", "Mixing / Mastering"],
    bio: "Ongoing production and engineering work — individual releases and credits will be added as they're finalized.",
  },
  {
    slug: "fallen-ash",
    name: "Fallen Ash",
    role: ["Production", "Engineering", "Mixing / Mastering"],
    bio: "Ongoing production and engineering work — individual releases and credits will be added as they're finalized.",
  },
  {
    slug: "infidel",
    name: "Infidel",
    role: [
      "Musician",
      "Songwriter",
      "Producer",
      "Audio Engineer",
      "Mixing Engineer",
      "Mastering Engineer",
    ],
    bio: "A Bangladesh-based Groove Metal / Metalcore band featuring Mustakim as guitarist — the project where his mixing and production career began in 2017.",
    link: { label: "Listen on Bandcamp", href: "https://infideltheband.bandcamp.com/track/swallow-this" },
  },
];
