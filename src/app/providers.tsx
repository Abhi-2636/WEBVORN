"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";
import CustomCursor from "@/components/ui/CustomCursor";
import FloatingParticles from "@/components/ui/FloatingParticles";
import MouseGradient from "@/components/ui/MouseGradient";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import LoadingScreen from "@/components/layout/LoadingScreen";

export default function Providers({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Lenis smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      smoothWheel: true,
      touchMultiplier: 2,
    });

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
    };
  }, []);

  return (
    <>
      <LoadingScreen />
      {/* Global ambient effects */}
      <FloatingParticles />
      <MouseGradient />
      <CustomCursor />
      <ScrollProgressBar />

      {/* Page content */}
      <div style={{ position: "relative", zIndex: 2 }}>{children}</div>
    </>
  );
}
