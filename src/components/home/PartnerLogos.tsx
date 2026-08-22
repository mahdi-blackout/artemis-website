import Image from "next/image";

const partners = [
  { name: "Yamaha Music Bangladesh", src: "/images/partners/yamaha.png" },
  { name: "Channel i", src: "/images/partners/channel-i.webp" },
  { name: "Live2Web", src: "/images/partners/live2web.png" },
  { name: "Bangladesh Army", src: "/images/partners/bangladesh-army.png" },
];

export default function PartnerLogos() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      {partners.map((p) => (
        <div
          key={p.name}
          className="flex h-14 w-32 shrink-0 items-center justify-center rounded-xl bg-white p-3"
        >
          <div className="relative h-full w-full">
            <Image src={p.src} alt={p.name} fill sizes="128px" className="object-contain" />
          </div>
        </div>
      ))}
    </div>
  );
}
