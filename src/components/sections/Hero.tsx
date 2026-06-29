"use client";

import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  MonitorSmartphone,
  Play,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import Counter from "@/components/Counter";
import { STATS } from "@/lib/constants";
import { cardReveal, fadeInUp, sectionIntro, tapScale } from "@/lib/animations";
import MagneticButton from "@/components/ui/MagneticButton";

const heroHeadlineWords = "Launch polished web, app, and AI products that convert.".split(" ");

const pipeline = [
  { label: "UX clarity", value: 94, color: "#34d399" },
  { label: "Performance", value: 98, color: "#22d3ee" },
  { label: "Launch readiness", value: 91, color: "#fbbf24" },
] as const;

const heroHighlights = [
  { icon: <ShieldCheck size={16} />, label: "NDA-ready delivery" },
  { icon: <Zap size={16} />, label: "7-day launch sprints" },
  { icon: <MonitorSmartphone size={16} />, label: "Web, app, AI, brand" },
] as const;

const statIcons = [
  <TrendingUp size={18} key="projects" />,
  <CheckCircle2 size={18} key="satisfaction" />,
  <Zap size={18} key="delivery" />,
  <Activity size={18} key="team" />,
] as const;

function CommandCenterVisual() {
  const reducedMotion = useReducedMotion();
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const smoothX = useSpring(pointerX, { stiffness: 90, damping: 22 });
  const smoothY = useSpring(pointerY, { stiffness: 90, damping: 22 });
  const rotateY = useTransform(smoothX, [-0.5, 0.5], [-7, 7]);
  const rotateX = useTransform(smoothY, [-0.5, 0.5], [6, -6]);

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (reducedMotion) return;
    const rect = event.currentTarget.getBoundingClientRect();
    pointerX.set((event.clientX - rect.left) / rect.width - 0.5);
    pointerY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const onPointerLeave = () => {
    pointerX.set(0);
    pointerY.set(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.28 }}
      className="pointer-events-auto relative mx-auto w-full max-w-[760px]"
      onPointerMove={onPointerMove}
      onPointerLeave={onPointerLeave}
      style={{ perspective: 1200 }}
    >
      <motion.div
        className="screen-frame"
        style={{
          rotateX: reducedMotion ? 0 : rotateX,
          rotateY: reducedMotion ? 0 : rotateY,
          transformStyle: "preserve-3d",
        }}
      >
        <div className="screen-topbar relative z-10">
          <span className="screen-dot" style={{ "--dot-color": "#fb7185" } as React.CSSProperties} />
          <span className="screen-dot" style={{ "--dot-color": "#fbbf24" } as React.CSSProperties} />
          <span className="screen-dot" style={{ "--dot-color": "#34d399" } as React.CSSProperties} />
          <span className="ml-3 text-xs font-medium" style={{ color: "var(--color-text-muted)" }}>
            ssliving.os / rooms
          </span>
        </div>

        <div className="relative z-10 grid gap-4 p-4 sm:p-6 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="space-y-4">
            <div className="section-panel p-4">
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold uppercase" style={{ color: "var(--color-text-muted)" }}>
                    Conversion lift
                  </p>
                  <p className="text-3xl font-bold" style={{ color: "var(--color-text-primary)", fontFamily: "var(--font-outfit)" }}>
                    +42.8%
                  </p>
                </div>
                <span className="metric-pill">
                  <Activity size={14} /> live
                </span>
              </div>

              <div className="flex h-32 items-end gap-2">
                {[38, 55, 44, 72, 61, 86, 74, 92, 81, 96].map((height, index) => (
                  <motion.div
                    key={height + index}
                    initial={{ height: "18%" }}
                    animate={{ height: `${height}%` }}
                    transition={{ duration: 0.8, delay: 0.45 + index * 0.05, ease: [0.22, 1, 0.36, 1] }}
                    className="flex-1 rounded-t"
                    style={{
                      background: index > 6
                        ? "linear-gradient(180deg, #fbbf24, #34d399)"
                        : "linear-gradient(180deg, #22d3ee, rgba(34, 211, 238, 0.18))",
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="grid grid-cols-3 gap-3">
              {["Brand", "Build", "Scale"].map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.75 + index * 0.08 }}
                  className="section-panel p-3 text-center"
                >
                  <div
                    className="mx-auto mb-2 h-1.5 w-10 rounded-full"
                    style={{ background: index === 0 ? "#34d399" : index === 1 ? "#22d3ee" : "#fbbf24" }}
                  />
                  <p className="text-xs font-semibold" style={{ color: "var(--color-text-secondary)" }}>
                    {item}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            <div className="section-panel p-4">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold" style={{ color: "var(--color-text-primary)" }}>
                  Product sprint
                </p>
                <span className="text-xs" style={{ color: "var(--color-accent-emerald)" }}>
                  on track
                </span>
              </div>
              <div className="space-y-4">
                {pipeline.map((item, index) => (
                  <div key={item.label}>
                    <div className="mb-2 flex justify-between text-xs">
                      <span style={{ color: "var(--color-text-secondary)" }}>{item.label}</span>
                      <span style={{ color: "var(--color-text-primary)" }}>{item.value}%</span>
                    </div>
                    <div className="h-2 overflow-hidden rounded-full" style={{ background: "rgba(255,255,255,0.07)" }}>
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${item.value}%` }}
                        transition={{ duration: 1, delay: 0.55 + index * 0.12, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full"
                        style={{ background: item.color }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="section-panel p-4">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-sm font-semibold" style={{ color: "var(--color-text-primary)" }}>
                  Delivery system
                </p>
                <Sparkles size={16} style={{ color: "var(--color-accent-amber)" }} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["24h", "prototype"],
                  ["3x", "lead flow"],
                  ["98", "score"],
                  ["0", "handoff gaps"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded p-3"
                    style={{ background: "rgba(255,255,255,0.045)", border: "1px solid rgba(255,255,255,0.08)" }}
                  >
                    <p className="text-xl font-bold" style={{ color: "var(--color-text-primary)", fontFamily: "var(--font-outfit)" }}>
                      {value}
                    </p>
                    <p className="text-[11px]" style={{ color: "var(--color-text-muted)" }}>
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// Floating orb decorations for hero background
function FloatOrbs() {
  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      <motion.div
        animate={{ y: [0, -18, 0], x: [0, 8, 0], rotate: [0, 5, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute"
        style={{
          top: "18%", right: "8%",
          width: 180, height: 180,
          borderRadius: "40% 60% 55% 45%",
          background: "radial-gradient(circle, rgba(52,211,153,0.10) 0%, transparent 70%)",
          filter: "blur(30px)",
        }}
      />
      <motion.div
        animate={{ y: [0, 14, 0], x: [0, -10, 0], rotate: [0, -7, 0] }}
        transition={{ duration: 11, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        className="absolute"
        style={{
          bottom: "22%", left: "5%",
          width: 220, height: 220,
          borderRadius: "55% 45% 40% 60%",
          background: "radial-gradient(circle, rgba(251,191,36,0.08) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />
      <motion.div
        animate={{ y: [0, -12, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute"
        style={{
          top: "50%", right: "28%",
          width: 130, height: 130,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(34,211,238,0.08) 0%, transparent 70%)",
          filter: "blur(24px)",
        }}
      />
    </div>
  );
}

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });

  // Parallax: headline shifts up as user scrolls
  const headlineY = useTransform(scrollYProgress, [0, 1], [0, -60]);
  const headlineOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      ref={heroRef}
      className="relative flex min-h-[92svh] items-center overflow-hidden pt-28"
      id="hero"
    >
      {/* Backgrounds */}
      <div className="absolute inset-0" style={{ background: "var(--gradient-mesh)" }} />
      <div className="absolute inset-0 bg-grid opacity-70" />
      <div className="ambient-beam" />
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(90deg, var(--color-bg-primary) 0%, rgba(7,10,13,0.86) 42%, rgba(7,10,13,0.42) 100%)",
        }}
      />

      {/* Floating ambient orbs */}
      <FloatOrbs />

      <div className="section-container relative z-10 w-full pb-16">
        <div className="relative">
          {/* Left: text content with parallax */}
          <motion.div
            style={{ y: headlineY, opacity: headlineOpacity }}
            className="parallax-layer"
          >
            <motion.div
              variants={sectionIntro}
              initial="hidden"
              animate="visible"
              className="relative z-10 max-w-3xl"
            >
              {/* Badge */}
              <motion.div variants={fadeInUp} className="mb-7">
                <div className="badge badge-purple">
                  <Sparkles size={13} />
                  <span>Digital product studio for ambitious teams</span>
                </div>
              </motion.div>

              {/* Headline with shiny gradient text */}
              <motion.h1
                variants={fadeInUp}
                className="hero-title mb-7"
                style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}
              >
                {heroHeadlineWords.map((word, index) => (
                  <motion.span
                    key={`${word}-${index}`}
                    initial={{ opacity: 0, y: 24 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.07, duration: 0.4 }}
                    className={word === "convert." ? "shiny-gradient-text" : undefined}
                    style={{ display: "inline-block", marginRight: "0.3em" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="mb-8 max-w-2xl text-base leading-relaxed sm:text-lg md:text-xl"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Shree Shyam Living offers premium student accommodation near LPU with
                fully furnished rooms, high-speed Wi-Fi, meals, laundry, 24/7
                security, and modern amenities.
              </motion.p>

              {/* Highlight pills */}
              <motion.div variants={fadeInUp} className="mb-9 flex flex-wrap items-center gap-3">
                {heroHighlights.map((item) => (
                  <span key={item.label} className="metric-pill">
                    {item.icon}
                    {item.label}
                  </span>
                ))}
              </motion.div>

              {/* CTA buttons with magnetic effect */}
              <motion.div variants={fadeInUp} className="mb-12 flex flex-col gap-4 sm:flex-row sm:items-center">
                <MagneticButton strength={12}>
                  <motion.a
                    whileHover={{ y: -3 }}
                    whileTap={tapScale}
                    href="/contact"
                    className="btn-primary text-base"
                    id="hero-cta-start"
                    data-cursor="pointer"
                  >
                    <span className="flex items-center gap-2">
                      Start Your Project <ArrowRight size={18} />
                    </span>
                  </motion.a>
                </MagneticButton>

                <MagneticButton strength={12}>
                  <motion.a
                    whileHover={{ y: -3 }}
                    whileTap={tapScale}
                    href="#portfolio"
                    className="btn-secondary text-base"
                    id="hero-cta-portfolio"
                    data-cursor="pointer"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      <Play size={16} /> View Work
                    </span>
                  </motion.a>
                </MagneticButton>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            style={{ y: visualY }}
            className="relative z-10 mt-10 xl:pointer-events-none xl:absolute xl:-right-[12vw] xl:top-8 xl:z-0 xl:mt-0 xl:w-[62vw] xl:max-w-[780px]"
          >
            <div className="xl:pointer-events-auto">
              <CommandCenterVisual />
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            variants={sectionIntro}
            initial="hidden"
            animate="visible"
            className="relative z-10 mt-12 grid grid-cols-2 gap-3 md:grid-cols-4 xl:max-w-3xl"
          >
            {STATS.map((stat, index) => (
              <motion.div
                key={stat.label}
                variants={cardReveal}
                whileHover={{ y: -6, scale: 1.015 }}
                className="glass-card shine-effect p-4 sm:p-5"
              >
                <div
                  className="mb-4 flex h-9 w-9 items-center justify-center rounded"
                  style={{
                    background: index % 2 === 0 ? "rgba(52, 211, 153, 0.12)" : "rgba(251, 191, 36, 0.12)",
                    color: index % 2 === 0 ? "var(--color-accent-emerald)" : "var(--color-accent-amber)",
                  }}
                >
                  {statIcons[index]}
                </div>
                <div
                  className="mb-1 text-2xl font-bold sm:text-3xl"
                  style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}
                >
                  <Counter target={stat.value} suffix={stat.suffix} />
                </div>
                <div className="stat-label font-medium" style={{ color: "var(--color-text-secondary)" }}>
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="animate-bounce-y flex flex-col items-center gap-1.5">
          <div
            className="h-10 w-6 rounded-full p-1"
            style={{ border: "1px solid rgba(255,255,255,0.18)" }}
          >
            <div
              className="mx-auto h-2 w-1 rounded-full"
              style={{ background: "var(--color-accent-emerald)" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
