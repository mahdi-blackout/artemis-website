export type GearCategory =
  | "Audio Interfaces"
  | "Microphones"
  | "Monitors"
  | "Headphones"
  | "Outboard Gear"
  | "Instruments"
  | "Software";

export type GearItem = {
  name: string;
  category: GearCategory;
  image: string;
  specs: string[];
  blurb: string;
};

export const gear: GearItem[] = [
  {
    name: "Universal Audio Apollo x8",
    category: "Audio Interfaces",
    image: "/images/gear/interface-1.svg",
    specs: ["18 in / 24 out", "Thunderbolt 3", "4x Unison preamps", "Real-time UAD DSP"],
    blurb: "Studio-standard conversion with hardware-accelerated analog modeling.",
  },
  {
    name: "RME Fireface UFX III",
    category: "Audio Interfaces",
    image: "/images/gear/interface-2.svg",
    specs: ["94 dB dynamic range", "USB / Dante / MADI", "Ultra-low latency", "TotalMix FX routing"],
    blurb: "Rock-solid routing and conversion for tracking and live rigs alike.",
  },
  {
    name: "Neumann U87 Ai",
    category: "Microphones",
    image: "/images/gear/mic-1.svg",
    specs: ["Large-diaphragm condenser", "3 polar patterns", "-127 dB self-noise", "Studio vocal standard"],
    blurb: "The industry reference for lead vocals and voice-over work.",
  },
  {
    name: "Shure SM7B",
    category: "Microphones",
    image: "/images/gear/mic-2.svg",
    specs: ["Dynamic cardioid", "Internal shock mount", "Broadcast / podcast standard", "Flat, wide-range response"],
    blurb: "Warm, forgiving character for vocals, podcasting, and broadcast.",
  },
  {
    name: "Sony C800G",
    category: "Microphones",
    image: "/images/gear/mic-3.svg",
    specs: ["Tube condenser", "Cryogenically cooled capsule", "9 polar patterns", "Signature pop-vocal tone"],
    blurb: "The go-to for modern pop and R&B vocal production.",
  },
  {
    name: "Focal Trio11 Be",
    category: "Monitors",
    image: "/images/gear/monitor-1.svg",
    specs: ["3-way active", "Beryllium tweeter", "Switchable near/mid-field", "Full-range reference"],
    blurb: "Reference-grade monitoring trusted in top mastering suites.",
  },
  {
    name: "Yamaha NS-10M",
    category: "Monitors",
    image: "/images/gear/monitor-2.svg",
    specs: ["Passive near-field", "Legendary mix reference", "Unforgiving midrange", "Studio classic since 1978"],
    blurb: "The mix-translation gold standard for four decades running.",
  },
  {
    name: "Audeze LCD-X",
    category: "Headphones",
    image: "/images/gear/headphones-1.svg",
    specs: ["Planar magnetic", "Open-back", "Reference-flat tuning", "20Hz–20kHz"],
    blurb: "Precise, fatigue-free monitoring for long mix sessions.",
  },
  {
    name: "Sony MDR-7506",
    category: "Headphones",
    image: "/images/gear/headphones-2.svg",
    specs: ["Closed-back dynamic", "Industry tracking standard", "Folding design", "Detailed high-end"],
    blurb: "The on-set and tracking-room workhorse, everywhere, always.",
  },
  {
    name: "Neve 1073 Preamp / EQ",
    category: "Outboard Gear",
    image: "/images/gear/outboard-1.svg",
    specs: ["Class-A discrete preamp", "3-band inductor EQ", "Transformer-balanced", "Studio legend since 1970"],
    blurb: "Signature warmth and harmonic richness on every input.",
  },
  {
    name: "Universal Audio 1176LN",
    category: "Outboard Gear",
    image: "/images/gear/outboard-2.svg",
    specs: ["FET limiting amplifier", "All-buttons-in mode", "Sub-millisecond attack", "Vocal / drum standard"],
    blurb: "Fast, characterful compression for vocals, drums, and bass.",
  },
  {
    name: "Manley Massive Passive",
    category: "Outboard Gear",
    image: "/images/gear/outboard-3.svg",
    specs: ["Passive tube EQ", "Stereo mastering-grade", "Musical, transparent curves", "Dual-band per channel"],
    blurb: "Mastering-grade tonal shaping with unmistakable analog glue.",
  },
  {
    name: "Fender American Professional II Stratocaster",
    category: "Instruments",
    image: "/images/gear/instrument-1.svg",
    specs: ["V-Mod II single-coils", "Alder body", "Modern C neck", "Reference guitar tone"],
    blurb: "The go-to reference instrument for tracking sessions.",
  },
  {
    name: "Yamaha C7 Grand Piano",
    category: "Instruments",
    image: "/images/gear/instrument-2.svg",
    specs: ["7'6\" grand", "Concert-grade voicing", "In-house tracking room", "Miked in stereo pair"],
    blurb: "A rich, balanced grand piano for tracking and scoring sessions.",
  },
  {
    name: "Avid Pro Tools Ultimate",
    category: "Software",
    image: "/images/gear/software-1.svg",
    specs: ["HDX-accelerated", "Dolby Atmos mixing", "Industry-standard DAW", "Broadcast delivery tools"],
    blurb: "The backbone DAW for every session, from tracking to delivery.",
  },
  {
    name: "iZotope RX 11 Advanced",
    category: "Software",
    image: "/images/gear/software-2.svg",
    specs: ["Spectral repair", "Dialogue isolation", "De-noise / de-hum / de-click", "Broadcast restoration suite"],
    blurb: "Surgical audio repair for restoration and dialogue cleanup.",
  },
];

export const gearCategories: GearCategory[] = [
  "Audio Interfaces",
  "Microphones",
  "Monitors",
  "Headphones",
  "Outboard Gear",
  "Instruments",
  "Software",
];
