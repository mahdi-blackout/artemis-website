import { gear } from "@/data/gear";
import GearCard from "@/components/studio/GearCard";

export default function GearGrid() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
      {gear.map((item, i) => (
        <GearCard key={item.name} item={item} index={i} />
      ))}
    </div>
  );
}
