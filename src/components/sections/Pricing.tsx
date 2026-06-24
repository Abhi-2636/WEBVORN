"use client";

import { motion } from "framer-motion";
import { ArrowRight, Check, Sparkles } from "lucide-react";
import { PRICING_PLANS } from "@/lib/constants";
import {
  cardReveal,
  fadeInUp,
  sectionIntro,
  tapScale,
  viewportOnce,
} from "@/lib/animations";

const planAccents = ["#22d3ee", "#34d399", "#fbbf24"] as const;

export default function Pricing() {
  return (
    <section className="section-padding relative overflow-hidden below-fold-section" id="pricing">
      <div className="ambient-beam opacity-60" />

      <div className="section-container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={sectionIntro}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <motion.div variants={fadeInUp} className="flex justify-center">
            <span className="section-label">Pricing</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="mb-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            style={{
              fontFamily: "var(--font-outfit)",
              color: "var(--color-text-primary)",
            }}
          >
            Transparent scopes with{" "}
            <span className="gradient-text">room to customize.</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            India-focused pricing for premium delivery. Each quote is refined
            after a discovery call so you only pay for the build you need.
          </motion.p>
        </motion.div>

        <motion.div
          variants={sectionIntro}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto grid max-w-6xl grid-cols-1 gap-5 md:grid-cols-3"
        >
          {PRICING_PLANS.map((plan, index) => {
            const accent = planAccents[index];

            return (
              <motion.article
                key={plan.name}
                variants={cardReveal}
                whileHover={{ y: -8, scale: plan.highlighted ? 1.025 : 1.015 }}
                className="relative flex flex-col overflow-hidden rounded"
                style={{
                  background: plan.highlighted
                    ? "linear-gradient(180deg, rgba(52,211,153,0.13), rgba(255,255,255,0.055) 38%, rgba(255,255,255,0.035))"
                    : "var(--glass-bg)",
                  border: plan.highlighted
                    ? "1px solid rgba(52,211,153,0.42)"
                    : "1px solid var(--glass-border)",
                  boxShadow: plan.highlighted
                    ? "0 28px 90px rgba(52, 211, 153, 0.12), var(--shadow-card)"
                    : "var(--shadow-card)",
                  backdropFilter: "blur(20px)",
                  padding: "1.5rem",
                }}
                id={`pricing-card-${index}`}
              >
                <div
                  className="absolute inset-x-0 top-0 h-1"
                  style={{ background: accent }}
                />

                {plan.highlighted && (
                  <div className="badge badge-purple mb-5 self-start">
                    <Sparkles size={12} />
                    Most Popular
                  </div>
                )}

                <div className="mb-7">
                  <h3
                    className="mb-2 text-2xl font-bold"
                    style={{
                      fontFamily: "var(--font-outfit)",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    {plan.name}
                  </h3>
                  <p
                    className="text-sm"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {plan.description}
                  </p>
                </div>

                <div className="mb-7 rounded p-4" style={{ background: "rgba(255,255,255,0.045)" }}>
                  <span
                    className="text-4xl font-bold"
                    style={{
                      fontFamily: "var(--font-outfit)",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    ₹{plan.price}
                  </span>
                  <span
                    className="ml-1.5 text-sm"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    onwards
                  </span>
                </div>

                <ul className="mb-8 flex-1 list-none space-y-3.5 p-0">
                  {plan.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      <span
                        className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded"
                        style={{
                          background: `${accent}1f`,
                          color: accent,
                        }}
                      >
                        <Check size={12} />
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>

                <motion.a
                  whileHover={{ y: -2 }}
                  whileTap={tapScale}
                  href="/contact"
                  className={plan.highlighted ? "btn-primary w-full" : "btn-secondary w-full"}
                  id={`pricing-cta-${plan.name.toLowerCase()}`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    Get Custom Quote <ArrowRight size={16} />
                  </span>
                </motion.a>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
