import { Star } from "lucide-react";

export default function RatingStars({ rating = 5 }: { rating?: number }) {
  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="h-4 w-4"
          strokeWidth={1.5}
          fill={i < rating ? "var(--amber)" : "none"}
          stroke={i < rating ? "var(--amber)" : "var(--muted)"}
        />
      ))}
    </div>
  );
}
