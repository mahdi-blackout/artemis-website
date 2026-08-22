"use client";

import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MouseGlow from "@/components/layout/MouseGlow";
import LoadingScreen from "@/components/layout/LoadingScreen";
import PageTransition from "@/components/layout/PageTransition";

export default function SiteChrome({ children }: { children: ReactNode }) {
  return (
    <>
      <LoadingScreen />
      <MouseGlow />
      <Navbar />
      <main id="main-content" className="relative z-10 min-h-screen">
        <PageTransition>{children}</PageTransition>
      </main>
      <Footer />
    </>
  );
}
