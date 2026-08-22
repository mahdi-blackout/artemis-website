"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { navLinks } from "@/data/nav";
import { cn } from "@/lib/utils";

const sideLinks = navLinks.filter((link) => link.href !== "/");

// next.config.ts sets trailingSlash: true (needed for the GitHub Pages
// static export), so usePathname() returns e.g. "/about/" while nav hrefs
// are defined without the trailing slash — normalize both before comparing.
function stripTrailingSlash(path: string) {
  return path !== "/" && path.endsWith("/") ? path.slice(0, -1) : path;
}

function NavLinkItem({ href, label, active }: { href: string; label: string; active: boolean }) {
  return (
    <li>
      <Link
        href={href}
        data-cursor-hover
        className={cn(
          "relative block rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-colors duration-150",
          active ? "text-foreground" : "text-muted hover:bg-white/5 hover:text-foreground"
        )}
      >
        {active && (
          <motion.span
            layoutId="nav-active-pill"
            className="absolute inset-0 -z-10 rounded-full bg-white/10 ring-1 ring-white/10"
            transition={{ type: "spring", stiffness: 500, damping: 35 }}
          />
        )}
        {label}
      </Link>
    </li>
  );
}

export default function Navbar() {
  const pathname = stripTrailingSlash(usePathname());
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prevPathname, setPrevPathname] = useState(pathname);

  if (pathname !== prevPathname) {
    setPrevPathname(pathname);
    setOpen(false);
  }

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed top-0 z-50 w-full">
      <AnimatePresence>
        {open && (
          <motion.button
            aria-label="Close menu"
            onClick={() => setOpen(false)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-0 bg-black/60 backdrop-blur-md md:hidden"
          />
        )}
      </AnimatePresence>

      <div
        className={cn(
          "relative navbar-glass backdrop-saturate-[1.6]",
          scrolled ? "navbar-glass--scrolled backdrop-blur-xl backdrop-saturate-[1.9]" : "backdrop-blur-lg"
        )}
      >
        <div className="relative z-10">
          <div className="mx-auto grid max-w-7xl grid-cols-[1fr_auto_1fr] items-center gap-4 px-6 pb-4 pt-4 md:px-10 md:pb-2">
            <div />

            <motion.div
              initial={{ opacity: 0, scale: 0.85 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="relative col-start-2 mx-auto"
            >
              <motion.div
                className="pointer-events-none absolute left-1/2 top-1/2 h-24 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-electric/40 blur-[50px]"
                animate={{ opacity: [0.3, 0.55, 0.3] }}
                transition={{ duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
              />
              <Link
                href="/"
                data-cursor-hover
                className="group relative block h-12 w-[195px] shrink-0 transition-transform duration-300 hover:scale-[1.03] sm:h-20 sm:w-[325px]"
              >
                <Image
                  src="/images/brand/artemis-logo-dark-bg.png"
                  alt="Artemis Production"
                  fill
                  priority
                  sizes="325px"
                  className="object-contain"
                />
              </Link>
            </motion.div>

            <div className="flex items-center justify-end gap-2">
              <Link
                href="/contact"
                data-cursor-hover
                className="hidden rounded-full border border-electric/40 bg-electric/10 px-5 py-2 text-sm font-semibold text-electric transition-all hover:bg-electric hover:text-white md:inline-flex"
              >
                Hire Me
              </Link>

              <button
                aria-label="Toggle menu"
                onClick={() => setOpen((v) => !v)}
                className="rounded-full border border-border p-2 text-foreground md:hidden"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <nav className="hidden justify-center pb-4 pt-2 md:flex">
            <ul className="flex items-center gap-1">
              {sideLinks.map((link) => (
                <NavLinkItem key={link.href} href={link.href} label={link.label} active={pathname === link.href} />
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="navbar-glass navbar-glass--scrolled relative z-10 mx-4 mt-2 overflow-hidden rounded-3xl backdrop-blur-xl backdrop-saturate-[1.9] md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 pb-6 pt-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "block rounded-lg px-3 py-3 text-base font-medium transition-colors duration-150",
                      pathname === link.href
                        ? "bg-white/10 text-foreground"
                        : "text-muted hover:bg-white/5 hover:text-foreground"
                    )}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/contact"
                  className="mt-2 block rounded-full bg-electric px-4 py-3 text-center text-sm font-semibold text-white"
                >
                  Hire Me
                </Link>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
