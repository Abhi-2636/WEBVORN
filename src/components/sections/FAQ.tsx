"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Minus, Plus } from "lucide-react";
import { FAQS } from "@/lib/constants";
import {
  cardReveal,
  fadeInUp,
  sectionIntro,
  tapScale,
  viewportOnce,
} from "@/lib/animations";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section
      className="section-padding relative overflow-hidden below-fold-section"
      style={{ background: "var(--color-bg-secondary)" }}
      id="faq"
    >
      <div className="absolute inset-0 bg-dots opacity-35" />

      <div className="section-container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={sectionIntro}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <motion.div variants={fadeInUp} className="flex justify-center">
            <span className="section-label">FAQ</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="mb-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            style={{
              fontFamily: "var(--font-outfit)",
              color: "var(--color-text-primary)",
            }}
          >
            Questions answered before{" "}
            <span className="gradient-text">we start building.</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Clear scope, communication, support, and AI delivery expectations.
          </motion.p>
        </motion.div>

        <motion.div
          variants={sectionIntro}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mx-auto max-w-3xl space-y-3"
        >
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <motion.div
                key={faq.question}
                variants={cardReveal}
                className="overflow-hidden rounded"
                style={{
                  background: isOpen
                    ? "rgba(52,211,153,0.08)"
                    : "var(--glass-bg)",
                  border: isOpen
                    ? "1px solid rgba(52,211,153,0.28)"
                    : "1px solid var(--glass-border)",
                  backdropFilter: "blur(18px)",
                  boxShadow: isOpen ? "var(--shadow-card)" : "none",
                }}
                id={`faq-item-${index}`}
              >
                <motion.button
                  whileTap={tapScale}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full cursor-pointer items-center justify-between border-none bg-transparent p-5 text-left sm:p-6"
                  style={{ color: "var(--color-text-primary)" }}
                  aria-expanded={isOpen}
                  id={`faq-button-${index}`}
                >
                  <span className="pr-4 text-base font-semibold">
                    {faq.question}
                  </span>
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded transition-all duration-300"
                    style={{
                      background: isOpen
                        ? "var(--gradient-primary)"
                        : "rgba(255,255,255,0.05)",
                      color: isOpen ? "#07100d" : "var(--color-text-secondary)",
                      boxShadow: isOpen
                        ? "0 0 18px rgba(52,211,153,0.18)"
                        : "none",
                    }}
                  >
                    {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                  </span>
                </motion.button>

                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        duration: 0.3,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <div
                        className="px-5 pb-5 text-sm leading-relaxed sm:px-6 sm:pb-6"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
