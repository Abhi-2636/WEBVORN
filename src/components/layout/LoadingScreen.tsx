"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { gsap } from "gsap";

const BURST_COLORS = ["#34d399", "#22d3ee", "#fbbf24", "#fb7185", "#9b7cff"];
const BURST_COUNT = 12;
const BURST_PARTICLES = Array.from({ length: BURST_COUNT }, (_, i) => {
  const angle = (i / BURST_COUNT) * 360;
  const dist = 50 + Math.random() * 50;
  const rad = (angle * Math.PI) / 180;

  return {
    id: i,
    px: `${Math.cos(rad) * dist}px`,
    py: `${Math.sin(rad) * dist}px`,
    color: BURST_COLORS[i % BURST_COLORS.length],
    width: `${4 + Math.random() * 5}px`,
    height: `${4 + Math.random() * 5}px`,
    delay: `${Math.random() * 0.1}s`,
  };
});

function BurstParticles({ active }: { active: boolean }) {
  if (!active) return null;
  return (
    <>
      {BURST_PARTICLES.map((particle) => {
        return (
          <span
            key={particle.id}
            className="burst-particle"
            style={
              {
                "--px": particle.px,
                "--py": particle.py,
                background: particle.color,
                width: particle.width,
                height: particle.height,
                animationDelay: particle.delay,
              } as React.CSSProperties
            }
          />
        );
      })}
    </>
  );
}

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);
  const [burst, setBurst] = useState(false);
  const [progress, setProgress] = useState(0);

  const logoRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLSpanElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const percentRef = useRef<HTMLSpanElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.sessionStorage.getItem("ssliving-loaded") === "true") {
      const skipTimer = window.setTimeout(() => setLoading(false), 0);
      return () => window.clearTimeout(skipTimer);
    }

    const fallbackTimer = window.setTimeout(() => {
      window.sessionStorage.setItem("ssliving-loaded", "true");
      setLoading(false);
    }, 2500);

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReduced) {
      const reducedTimer = window.setTimeout(() => {
        window.sessionStorage.setItem("ssliving-loaded", "true");
        setLoading(false);
      }, 400);
      return () => {
        window.clearTimeout(fallbackTimer);
        window.clearTimeout(reducedTimer);
      };
    }

    // GSAP timeline
    const tl = gsap.timeline({
      onComplete: () => {
        window.clearTimeout(fallbackTimer);
        setBurst(true);
        window.sessionStorage.setItem("ssliving-loaded", "true");
        window.setTimeout(() => setLoading(false), 500);
      },
    });

    // 1. Logo entrance
    if (logoRef.current) {
      tl.from(logoRef.current, { scale: 0.4, opacity: 0, duration: 0.6, ease: "back.out(1.7)" });
    }
    // 2. Text slide up
    if (textRef.current) {
      tl.from(textRef.current, { y: 20, opacity: 0, duration: 0.45, ease: "power3.out" }, "-=0.25");
    }
    // 3. Bar reveal
    if (barRef.current) {
      tl.from(barRef.current, { scaleX: 0, transformOrigin: "left", duration: 0.3, ease: "power2.out" }, "-=0.1");
    }

    // 4. Animate progress counter separately via RAF
    const start = performance.now();
    const duration = 800;
    let raf = 0;

    const animateProgress = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      const val = Math.floor(eased * 100);
      setProgress(val);
      if (percentRef.current) percentRef.current.textContent = `${val}%`;
      if (p < 1) {
        raf = requestAnimationFrame(animateProgress);
      }
    };

    // Slight delay to match GSAP timeline timing
    const progressTimer = window.setTimeout(() => {
      raf = requestAnimationFrame(animateProgress);
    }, 400);

    return () => {
      window.clearTimeout(fallbackTimer);
      window.clearTimeout(progressTimer);
      tl.kill();
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          ref={containerRef}
          id="loading-screen-container"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 0.98, filter: "blur(6px)" }}
          transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-[200] flex flex-col items-center justify-center"
          style={{ background: "var(--color-bg-primary)" }}
        >
          {/* Background grid */}
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="ambient-beam opacity-50" />

          {/* Radial glow behind logo */}
          <div
            className="absolute"
            style={{
              width: 320,
              height: 320,
              borderRadius: "50%",
              background: "radial-gradient(circle, rgba(52,211,153,0.12) 0%, transparent 70%)",
              filter: "blur(40px)",
            }}
          />

          {/* Content */}
          <div className="relative flex flex-col items-center gap-6">
            {/* Logo */}
            <div ref={logoRef} className="relative">
              <BurstParticles active={burst} />
              <motion.div
                animate={
                  !burst
                    ? {
                        boxShadow: [
                          "0 0 20px rgba(52,211,153,0.2), 0 0 60px rgba(52,211,153,0.08)",
                          "0 0 35px rgba(52,211,153,0.35), 0 0 90px rgba(52,211,153,0.15)",
                          "0 0 20px rgba(52,211,153,0.2), 0 0 60px rgba(52,211,153,0.08)",
                        ],
                      }
                    : { boxShadow: "0 0 60px rgba(52,211,153,0.6)" }
                }
                transition={{ duration: 2, repeat: burst ? 0 : Infinity, ease: "easeInOut" }}
                className="w-20 h-20 rounded-xl flex items-center justify-center"
                style={{ background: "var(--gradient-primary)" }}
              >
                <span
                  className="font-bold text-4xl text-[#07100d]"
                  style={{ fontFamily: "var(--font-outfit)" }}
                >
                  S
                </span>
              </motion.div>
            </div>

            {/* Brand name */}
            <span
              ref={textRef}
              className="text-3xl font-bold"
              style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}
            >
              Shree Shyam Living
            </span>

            {/* Progress bar */}
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-52 h-[3px] rounded-full overflow-hidden"
                style={{ background: "rgba(255,255,255,0.07)" }}
              >
                <div
                  ref={barRef}
                  className="h-full rounded-full"
                  style={{
                    width: `${progress}%`,
                    background: "var(--gradient-primary)",
                    transition: "width 0.08s ease-out",
                    boxShadow: "0 0 8px rgba(52,211,153,0.5)",
                  }}
                />
              </div>
              <span
                ref={percentRef}
                className="text-xs font-medium tabular-nums"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                0%
              </span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
