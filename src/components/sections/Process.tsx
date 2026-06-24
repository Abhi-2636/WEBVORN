"use client";

import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  Code,
  HeartHandshake,
  Palette,
  Rocket,
  Search,
  TestTube,
} from "lucide-react";
import { PROCESS_STEPS } from "@/lib/constants";
import {
  cardReveal,
  fadeInUp,
  sectionIntro,
  viewportOnce,
} from "@/lib/animations";

const icons = [
  <Search size={22} key="1" />,
  <Palette size={22} key="2" />,
  <Code size={22} key="3" />,
  <TestTube size={22} key="4" />,
  <Rocket size={22} key="5" />,
  <HeartHandshake size={22} key="6" />,
] as const;

const nodeGradients = [
  "linear-gradient(135deg, #34d399, #22d3ee)",
  "linear-gradient(135deg, #22d3ee, #60a5fa)",
  "linear-gradient(135deg, #fbbf24, #34d399)",
  "linear-gradient(135deg, #fb7185, #fbbf24)",
  "linear-gradient(135deg, #c4b5fd, #22d3ee)",
  "linear-gradient(135deg, #34d399, #fbbf24)",
] as const;

const stepMeta = ["Map", "Design", "Engineer", "Validate", "Launch", "Grow"] as const;

export default function Process() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 55%"],
  });
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      className="section-padding relative overflow-hidden below-fold-section"
      style={{ background: "var(--color-bg-secondary)" }}
      id="process"
    >
      <div className="ambient-beam opacity-50" />

      <div className="section-container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={sectionIntro}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <motion.div variants={fadeInUp} className="flex justify-center">
            <span className="section-label">Our Process</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="mb-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            style={{
              fontFamily: "var(--font-outfit)",
              color: "var(--color-text-primary)",
            }}
          >
            A calm, visible path from{" "}
            <span className="gradient-text">first idea to shipped product.</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Every sprint is structured around decisions, demos, and measurable
            launch readiness.
          </motion.p>
        </motion.div>

        <div ref={timelineRef} className="relative mx-auto max-w-5xl">
          <div
            className="absolute bottom-0 left-6 top-0 w-px md:left-1/2"
            style={{ background: "rgba(255,255,255,0.1)" }}
          />
          <motion.div
            className="absolute bottom-0 left-6 top-0 w-px origin-top md:left-1/2"
            style={{
              scaleY,
              background:
                "linear-gradient(180deg, #34d399, #22d3ee 46%, #fbbf24)",
            }}
          />

          <motion.div
            variants={sectionIntro}
            initial="hidden"
            whileInView="visible"
            viewport={viewportOnce}
            className="space-y-8 md:space-y-10"
          >
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                variants={cardReveal}
                className={`relative grid gap-6 pl-16 md:grid-cols-2 md:pl-0 ${
                  index % 2 === 0 ? "" : "md:[&>*:first-child]:col-start-2"
                }`}
                id={`process-step-${index}`}
              >
                <motion.article
                  whileHover={{ y: -6, scale: 1.01 }}
                  className="glass-card p-6"
                >
                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span
                      className="text-sm font-semibold"
                      style={{ color: "var(--color-accent-emerald)" }}
                    >
                      {stepMeta[index]}
                    </span>
                    <span
                      className="rounded-full px-3 py-1 text-xs font-semibold"
                      style={{
                        background: "rgba(255,255,255,0.045)",
                        border: "1px solid var(--color-border)",
                        color: "var(--color-text-secondary)",
                      }}
                    >
                      Step {step.number}
                    </span>
                  </div>
                  <h3
                    className="mb-3 text-xl font-bold"
                    style={{
                      fontFamily: "var(--font-outfit)",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {step.description}
                  </p>
                </motion.article>

                <div
                  className="absolute left-0 top-0 z-10 flex h-12 w-12 items-center justify-center rounded md:left-1/2 md:-translate-x-1/2"
                  style={{
                    background: nodeGradients[index],
                    boxShadow: "0 16px 42px rgba(0,0,0,0.28)",
                    color: "#07100d",
                  }}
                >
                  {icons[index]}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
