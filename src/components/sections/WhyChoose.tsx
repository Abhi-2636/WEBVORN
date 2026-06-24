"use client";

import { motion } from "framer-motion";
import {
  BarChart3,
  Check,
  Diamond,
  Handshake,
  IndianRupee,
  Rocket,
  ShieldCheck,
  Zap,
} from "lucide-react";
import { WHY_CHOOSE } from "@/lib/constants";
import {
  cardReveal,
  fadeInUp,
  sectionIntro,
  viewportOnce,
} from "@/lib/animations";

const iconMap: Record<string, React.ReactNode> = {
  Rocket: <Rocket size={24} />,
  Diamond: <Diamond size={24} />,
  IndianRupee: <IndianRupee size={24} />,
  Handshake: <Handshake size={24} />,
  Zap: <Zap size={24} />,
  BarChart3: <BarChart3 size={24} />,
};

const accents = ["#34d399", "#22d3ee", "#fbbf24", "#fb7185", "#c4b5fd", "#60a5fa"] as const;

const operatingSystem = [
  "Clear sprint roadmap",
  "Design reviewed before build",
  "Weekly demos and handoff notes",
  "Launch, analytics, and support",
] as const;

export default function WhyChoose() {
  return (
    <section
      className="section-padding relative overflow-hidden below-fold-section"
      style={{ background: "var(--color-bg-secondary)" }}
      id="why-choose"
    >
      <div className="absolute inset-0 bg-grid opacity-35" />

      <div className="section-container relative z-10">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            variants={sectionIntro}
            className="lg:sticky lg:top-28"
          >
            <motion.span variants={fadeInUp} className="section-label">
              Why Choose Us
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="mb-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
              style={{
                fontFamily: "var(--font-outfit)",
                color: "var(--color-text-primary)",
              }}
            >
              A delivery system built for{" "}
              <span className="gradient-text">speed without rough edges.</span>
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mb-7 text-base leading-relaxed md:text-lg"
              style={{ color: "var(--color-text-secondary)" }}
            >
              You get senior-level product thinking, clean implementation, and
              launch support without the slow agency loop.
            </motion.p>

            <motion.div variants={cardReveal} className="section-panel p-5">
              <div className="mb-5 flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded"
                  style={{
                    background: "rgba(52, 211, 153, 0.13)",
                    color: "var(--color-accent-emerald)",
                  }}
                >
                  <ShieldCheck size={20} />
                </div>
                <div>
                  <p
                    className="font-semibold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    Launch governance included
                  </p>
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    Every project gets a visible path to release.
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                {operatingSystem.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span
                      className="flex h-5 w-5 shrink-0 items-center justify-center rounded"
                      style={{
                        background: "rgba(52, 211, 153, 0.12)",
                        color: "var(--color-accent-emerald)",
                      }}
                    >
                      <Check size={12} />
                    </span>
                    <span
                      className="text-sm"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            variants={sectionIntro}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="grid grid-cols-1 gap-4 sm:grid-cols-2"
          >
            {WHY_CHOOSE.map((item, index) => (
              <motion.article
                key={item.title}
                variants={cardReveal}
                whileHover={{ y: -7, scale: 1.01 }}
                className="glass-card gradient-border p-6"
                id={`why-card-${index}`}
              >
                <div
                  className="icon-container mb-5"
                  style={{
                    background: `linear-gradient(135deg, ${accents[index]}, rgba(255,255,255,0.16))`,
                    color: "#07100d",
                  }}
                >
                  {iconMap[item.icon]}
                </div>
                <h3
                  className="mb-2 text-lg font-semibold"
                  style={{
                    color: "var(--color-text-primary)",
                    fontFamily: "var(--font-outfit)",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {item.description}
                </p>
              </motion.article>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
