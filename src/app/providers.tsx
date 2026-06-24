"use client";

import { useEffect, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Lenis from "lenis";
import { usePathname } from "next/navigation";
import CustomCursor from "@/components/ui/CustomCursor";
import FloatingParticles from "@/components/ui/FloatingParticles";
import MouseGradient from "@/components/ui/MouseGradient";
import ScrollProgressBar from "@/components/ui/ScrollProgressBar";
import LoadingScreen from "@/components/layout/LoadingScreen";

export default function Providers({ children }: { children: ReactNode }) {
  const pathname = usePathname();

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
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.25 }}
          style={{ position: "relative", zIndex: 2 }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </>
  );
}
