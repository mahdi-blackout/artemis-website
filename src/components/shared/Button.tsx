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
        "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold tracking-wide transition-all duration-300 ease-out",
        variant === "primary" &&
          "bg-electric text-white hover:brightness-110 active:brightness-95",
        variant === "secondary" &&
          "glass text-foreground backdrop-blur-[20px] backdrop-saturate-[1.4] hover:border-foreground/25",
        variant === "ghost" && "text-foreground/80 hover:text-foreground",
        className
      )}
    >
      {children}
      {icon && <span className="transition-transform duration-300 group-hover:translate-x-1">{icon}</span>}
    </Link>
  );
}
