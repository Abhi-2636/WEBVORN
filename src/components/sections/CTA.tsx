"use client";

import { motion } from "framer-motion";
import { ArrowRight, Eye, FileCheck, MessageCircle, Shield } from "lucide-react";
import {
  cardReveal,
  fadeInUp,
  sectionIntro,
  tapScale,
  viewportOnce,
} from "@/lib/animations";
import { CONTACT_INFO } from "@/lib/constants";

const trustBadges = [
  { icon: <Shield size={16} />, text: "Free consultation" },
  { icon: <Eye size={16} />, text: "Transparent scope" },
  { icon: <FileCheck size={16} />, text: "NDA available" },
] as const;

export default function CTA() {
  return (
    <section className="section-padding relative overflow-hidden" id="cta">
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(52,211,153,0.12), rgba(34,211,238,0.06) 44%, rgba(251,191,36,0.08))",
        }}
      />
      <div className="absolute inset-0 bg-grid opacity-50" />
      <div className="ambient-beam opacity-80" />

      <div className="section-container relative z-10">
        <motion.div
          variants={sectionIntro}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="screen-frame mx-auto max-w-5xl p-6 sm:p-8 lg:p-10"
        >
          <div className="grid gap-8 lg:grid-cols-[1fr_0.72fr] lg:items-center">
            <div>
              <motion.span variants={fadeInUp} className="section-label">
                Start The Build
              </motion.span>
              <motion.h2
                variants={fadeInUp}
                className="mb-6 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
                style={{
                  fontFamily: "var(--font-outfit)",
                  color: "var(--color-text-primary)",
                }}
              >
                Bring the idea. We&apos;ll turn it into a{" "}
                <span className="gradient-text">premium digital product.</span>
              </motion.h2>
              <motion.p
                variants={fadeInUp}
                className="mb-8 max-w-2xl text-base leading-relaxed md:text-lg"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Share your goal, timeline, and rough budget. You&apos;ll get a
                practical build path, not a generic sales deck.
              </motion.p>

              <motion.div
                variants={fadeInUp}
                className="flex flex-col gap-4 sm:flex-row sm:items-center"
              >
                <motion.a
                  whileHover={{ y: -3 }}
                  whileTap={tapScale}
                  href={`https://wa.me/${CONTACT_INFO.whatsappRaw}?text=Hi%20Webvorn!%20I'm%20interested%20in%20your%20services.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary text-base"
                  id="cta-consultation"
                >
                  <span className="flex items-center gap-2">
                    <MessageCircle size={20} />
                    Book a Free Consultation
                  </span>
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  whileTap={tapScale}
                  href="/contact"
                  className="btn-secondary text-base"
                  id="cta-quote"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get a Quote <ArrowRight size={18} />
                  </span>
                </motion.a>
              </motion.div>
            </div>

            <motion.div variants={cardReveal} className="grid gap-3">
              {trustBadges.map((badge, index) => (
                <motion.div
                  key={badge.text}
                  whileHover={{ x: 4 }}
                  className="section-panel flex items-center gap-3 p-4"
                >
                  <div
                    className="flex h-9 w-9 items-center justify-center rounded"
                    style={{
                      background:
                        index === 1
                          ? "rgba(251, 191, 36, 0.13)"
                          : "rgba(52, 211, 153, 0.13)",
                      color:
                        index === 1
                          ? "var(--color-accent-amber)"
                          : "var(--color-accent-emerald)",
                    }}
                  >
                    {badge.icon}
                  </div>
                  <span
                    className="text-sm font-semibold"
                    style={{ color: "var(--color-text-primary)" }}
                  >
                    {badge.text}
                  </span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
