"use client";

import { useMemo, useState } from "react";
import type { CSSProperties } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, ExternalLink, FileText } from "lucide-react";
import { PORTFOLIO } from "@/lib/constants";
import {
  fadeInUp,
  sectionIntro,
  tapScale,
  viewportOnce,
} from "@/lib/animations";

const featuredMetrics = [
  ["42%", "avg. conversion lift"],
  ["98", "performance score"],
  ["6w", "max sprint window"],
] as const;

export default function Portfolio() {
  const categories = useMemo(
    () => ["All", ...Array.from(new Set(PORTFOLIO.map((item) => item.category)))],
    []
  );
  const [selected, setSelected] = useState("All");

  const visibleProjects = useMemo(
    () =>
      selected === "All"
        ? PORTFOLIO
        : PORTFOLIO.filter((project) => project.category === selected),
    [selected]
  );

  return (
    <section
      className="section-padding relative overflow-hidden below-fold-section"
      id="portfolio"
      style={{ background: "var(--color-bg-secondary)" }}
    >
      <div className="ambient-beam opacity-60" />
      <div className="absolute inset-0 bg-dots opacity-50" />

      <div className="section-container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={sectionIntro}
          className="mb-12 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end"
        >
          <div>
            <motion.span variants={fadeInUp} className="section-label">
              Our Work
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="max-w-3xl text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
              style={{
                fontFamily: "var(--font-outfit)",
                color: "var(--color-text-primary)",
              }}
            >
              A sharper showcase for{" "}
              <span className="gradient-text">web, mobile, and AI outcomes.</span>
            </motion.h2>
          </div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-wrap gap-2 lg:justify-end"
            role="tablist"
            aria-label="Filter portfolio projects"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                whileTap={tapScale}
                onClick={() => setSelected(category)}
                className="relative rounded-full border px-4 py-2 text-sm font-semibold"
                style={{
                  borderColor:
                    selected === category
                      ? "rgba(52, 211, 153, 0.38)"
                      : "var(--color-border)",
                  color:
                    selected === category
                      ? "var(--color-text-primary)"
                      : "var(--color-text-secondary)",
                  background:
                    selected === category
                      ? "rgba(52, 211, 153, 0.12)"
                      : "rgba(255,255,255,0.035)",
                }}
                role="tab"
                aria-selected={selected === category}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        <motion.div
          variants={sectionIntro}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="mb-6 grid grid-cols-1 gap-3 md:grid-cols-3"
        >
          {featuredMetrics.map(([value, label]) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.5 }}
              className="section-panel flex items-center justify-between gap-4 p-4"
            >
              <span
                className="text-2xl font-bold"
                style={{
                  color: "var(--color-text-primary)",
                  fontFamily: "var(--font-outfit)",
                }}
              >
                {value}
              </span>
              <span
                className="text-sm"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        <motion.div layout className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {visibleProjects.map((project, index) => (
              <motion.article
                layout
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                exit={{ opacity: 0, scale: 0.96, y: 16 }}
                whileHover={{ y: -6, scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`portfolio-card glass-card group overflow-hidden ${
                  index === 0 && selected === "All" ? "md:col-span-2" : ""
                }`}
                style={{ "--portfolio-accent": project.accentColor } as CSSProperties}
                id={`portfolio-card-${index}`}
              >
                <div
                  className="image-sheen relative aspect-[4/3] overflow-hidden"
                  style={{
                    background: `linear-gradient(135deg, ${project.accentColor}35, rgba(7, 10, 13, 0.94))`,
                  }}
                >
                  <div className="absolute inset-0 bg-dots opacity-50" />
                  <div
                    className="absolute inset-0"
                    style={{
                      background:
                        "linear-gradient(180deg, rgba(7,10,13,0.08), rgba(7,10,13,0.82))",
                    }}
                  />
                  <div className="absolute left-4 top-4 badge badge-purple">
                    {project.category}
                  </div>
                  {project.featured && (
                    <div
                      className="tag absolute right-4 top-4 rounded-full px-3 py-1"
                      style={{
                        background: `${project.accentColor}24`,
                        border: `1px solid ${project.accentColor}55`,
                        color: "var(--color-text-primary)",
                      }}
                    >
                      Featured
                    </div>
                  )}
                  <div className="relative z-10 flex h-full flex-col items-start gap-4 p-5">
                    <div
                      className="flex h-16 w-16 items-center justify-center rounded"
                      style={{
                        background: `${project.accentColor}22`,
                        border: `1px solid ${project.accentColor}55`,
                        boxShadow: `0 22px 46px ${project.accentColor}18`,
                      }}
                    >
                      <span className="text-3xl" aria-hidden="true">
                        {project.icon}
                      </span>
                    </div>
                    <span className="tag inline-flex rounded-full px-3 py-1" style={{ background: "rgba(255,255,255,0.08)" }}>
                      {project.tag}
                    </span>
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                    {project.tech.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="tech-badge rounded-full px-2.5 py-1 font-semibold"
                        style={{
                          background: "rgba(7,10,13,0.62)",
                          border: "1px solid rgba(255,255,255,0.12)",
                          color: "rgba(255,255,255,0.82)",
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-6">
                  <div className="mb-3 flex items-start justify-between gap-4">
                    <h3
                      className="text-xl font-semibold leading-tight"
                      style={{
                        color: "var(--color-text-primary)",
                        fontFamily: "var(--font-outfit)",
                      }}
                    >
                      {project.title}
                    </h3>
                    <ArrowRight
                      size={18}
                      className="-translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100"
                      style={{ color: "var(--color-accent-emerald)" }}
                    />
                  </div>

                  <p
                    className="mb-3 text-sm leading-relaxed"
                    style={{ color: "var(--color-text-secondary)" }}
                  >
                    {project.description}
                  </p>
                  {project.highlight && (
                    <p
                      className="mb-5 text-sm font-medium"
                      style={{ color: project.accentColor }}
                    >
                      {project.highlight}
                    </p>
                  )}
                  {!project.highlight && <div className="mb-5" />}

                  <div className="flex flex-wrap gap-3">
                    <motion.a
                      whileHover={{ y: -2 }}
                      whileTap={tapScale}
                      href={`/case-study/${project.id}`}
                      className="btn-primary !px-4 !py-2.5 text-sm"
                    >
                      <span className="flex items-center gap-1.5">
                        <FileText size={14} /> Case Study
                      </span>
                    </motion.a>
                    <motion.a
                      whileHover={{ y: -2 }}
                      whileTap={tapScale}
                      href={project.liveUrl ?? "/contact"}
                      target={project.liveUrl ? "_blank" : undefined}
                      rel={project.liveUrl ? "noopener noreferrer" : undefined}
                      className="btn-secondary !px-4 !py-2.5 text-sm"
                    >
                      <span className="relative z-10 flex items-center gap-1.5">
                        <ExternalLink size={14} /> {project.liveUrl ? "Live Site" : "Build Similar"}
                      </span>
                    </motion.a>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
