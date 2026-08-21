import Link from "next/link";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  className?: string;
  icon?: ReactNode;
};

export default function Button({ href, children, variant = "primary", className, icon }: Props) {
  return (
    <Link
      href={href}
      data-cursor-hover
      className={cn(
        "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300",
        variant === "primary" &&
          "bg-electric text-white shadow-[0_0_30px_-8px_var(--electric)] hover:shadow-[0_0_40px_-4px_var(--electric)] hover:scale-[1.03]",
        variant === "secondary" &&
          "glass text-foreground hover:border-emerald/50 hover:text-emerald",
        variant === "ghost" && "text-foreground/80 hover:text-electric",
        className
      )}
    >
      {children}
      {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </Link>
  );
}
