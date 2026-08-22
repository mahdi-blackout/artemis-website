export type GearItem = {
  name: string;
  category: string;
  blurb: string;
};

export const gear: GearItem[] = [
  {
    name: "REAPER",
    category: "DAW",
    blurb: "Primary digital audio workstation for editing, mixing, and mastering.",
  },
  {
    name: "Midas M32",
    category: "Digital Console",
    blurb: "Digital console used for live, location, and broadcast production.",
  },
];

export const recordingWork = [
  "Multitrack Recording",
  "Studio Recording",
  "Location Recording",
  "Television Recording",
  "Multi-City Recording",
];

export const postProductionWork = ["Editing", "Mixing", "Mastering", "Music Production"];
