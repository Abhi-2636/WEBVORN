"use client";

import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Brain,
  CheckCircle2,
  Clapperboard,
  Code,
  Gem,
  Palette,
  Smartphone,
  TrendingUp,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import {
  cardReveal,
  fadeInUp,
  sectionIntro,
  tapScale,
  viewportOnce,
} from "@/lib/animations";

const iconMap: Record<string, React.ReactNode> = {
  Code: <Code size={24} />,
  Palette: <Palette size={24} />,
  Smartphone: <Smartphone size={24} />,
  Brain: <Brain size={24} />,
  Gem: <Gem size={24} />,
  TrendingUp: <TrendingUp size={24} />,
  Clapperboard: <Clapperboard size={24} />,
};

const serviceMeta = [
  { accent: "#34d399", outcome: "Revenue-ready", timeline: "2-6 weeks" },
  { accent: "#22d3ee", outcome: "Sharper UX", timeline: "5-12 days" },
  { accent: "#fbbf24", outcome: "Native feel", timeline: "3-8 weeks" },
  { accent: "#fb7185", outcome: "AI workflows", timeline: "1-4 weeks" },
  { accent: "#c4b5fd", outcome: "Brand system", timeline: "4-10 days" },
  { accent: "#60a5fa", outcome: "Search growth", timeline: "ongoing" },
  { accent: "#f97316", outcome: "Motion assets", timeline: "1-3 weeks" },
] as const;

const proofPoints = [
  "Strategy before pixels",
  "Figma to production handoff",
  "Performance and SEO built in",
] as const;

export default function Services() {
  return (
    <section className="section-padding relative overflow-hidden below-fold-section" id="services">
      <div className="ambient-beam opacity-70" />

      <div className="section-container relative z-10">
        <div className="mb-14 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={sectionIntro}
          >
            <motion.span variants={fadeInUp} className="section-label">
              Our Services
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="max-w-2xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
              style={{
                fontFamily: "var(--font-outfit)",
                color: "var(--color-text-primary)",
              }}
            >
              End-to-end digital builds with{" "}
              <span className="gradient-text">product-grade polish.</span>
            </motion.h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={sectionIntro}
            className="lg:pl-10"
          >
            <motion.p
              variants={fadeInUp}
              className="mb-5 text-base leading-relaxed md:text-lg"
              style={{ color: "var(--color-text-secondary)" }}
            >
              Choose a single service or combine strategy, design, engineering,
              AI, motion, and growth into one launch plan.
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-3">
              {proofPoints.map((point) => (
                <span key={point} className="metric-pill">
                  <CheckCircle2 size={14} />
                  {point}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </div>

        <motion.div
          variants={sectionIntro}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {SERVICES.map((service, index) => {
            const meta = serviceMeta[index];

            return (
              <motion.article
                key={service.title}
                variants={cardReveal}
                whileHover={{ y: -8, scale: 1.01 }}
                whileTap={tapScale}
                className={`glass-card gradient-border group flex min-h-[260px] flex-col p-6 ${
                  index === 0 ? "lg:col-span-2" : ""
                }`}
                id={`service-card-${index}`}
              >
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div
                    className="icon-container"
                    style={{
                      background: `linear-gradient(135deg, ${meta.accent}, rgba(255,255,255,0.16))`,
                      color: "#07100d",
                    }}
                  >
                    {iconMap[service.icon]}
                  </div>
                  <span
                    className="rounded-full px-3 py-1 text-xs font-semibold"
                    style={{
                      background: `${meta.accent}18`,
                      border: `1px solid ${meta.accent}34`,
                      color: meta.accent,
                    }}
                  >
                    {meta.timeline}
                  </span>
                </div>

                <h3
                  className="mb-3 flex items-center gap-2 text-xl font-semibold"
                  style={{
                    color: "var(--color-text-primary)",
                    fontFamily: "var(--font-outfit)",
                  }}
                >
                  {service.title}
                  <ArrowUpRight
                    size={17}
                    className="translate-y-1 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                    style={{ color: meta.accent }}
                  />
                </h3>

                <p
                  className="mb-6 text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {service.description}
                </p>

                <div className="mt-auto flex items-center justify-between gap-4 border-t pt-4" style={{ borderColor: "var(--color-border)" }}>
                  <span
                    className="text-xs font-semibold uppercase"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Outcome
                  </span>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {meta.outcome}
                  </span>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
