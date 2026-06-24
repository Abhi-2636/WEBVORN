"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import type { PORTFOLIO } from "@/lib/constants";

interface CaseStudyContentProps {
  project: typeof PORTFOLIO[number];
}

export default function CaseStudyContent({ project }: CaseStudyContentProps) {
  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="section-padding">
          <div className="section-container max-w-4xl">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {/* Back link */}
              <motion.a
                variants={fadeInUp}
                href="/#portfolio"
                className="inline-flex items-center gap-2 text-sm mb-8 no-underline transition-colors duration-200"
                style={{ color: "var(--color-text-secondary)" }}
              >
                <ArrowLeft size={16} /> Back to Portfolio
              </motion.a>

              {/* Category */}
              <motion.div variants={fadeInUp}>
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(139, 92, 246, 0.15)",
                    color: "var(--color-accent-purple)",
                  }}
                >
                  {project.category}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold mt-4 mb-6"
                style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}
              >
                {project.title}
              </motion.h1>

              <motion.p
                variants={fadeInUp}
                className="text-lg mb-8 leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {project.description}
              </motion.p>

              {/* Project visual */}
              <motion.div
                variants={fadeInUp}
                className="relative mb-12 h-64 overflow-hidden rounded sm:h-80 md:h-96"
                style={{
                  border: "1px solid var(--glass-border)",
                  background: `linear-gradient(135deg, ${project.accentColor}35, rgba(7, 10, 13, 0.94))`,
                }}
              >
                <div className="absolute inset-0 bg-grid opacity-40" />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(180deg, rgba(7,10,13,0.04), rgba(7,10,13,0.78))",
                  }}
                />
                <div className="relative z-10 flex h-full flex-col justify-between p-6 sm:p-8">
                  <div
                    className="flex h-20 w-20 items-center justify-center rounded"
                    style={{
                      background: `${project.accentColor}22`,
                      border: `1px solid ${project.accentColor}55`,
                      boxShadow: `0 24px 60px ${project.accentColor}22`,
                    }}
                  >
                    <span className="text-4xl" aria-hidden="true">
                      {project.icon}
                    </span>
                  </div>
                  <div>
                    <span className="tag mb-4 inline-flex rounded-full px-3 py-1" style={{ background: "rgba(255,255,255,0.08)" }}>
                      {project.tag}
                    </span>
                    {project.highlight && (
                      <p className="max-w-xl text-sm font-medium" style={{ color: project.accentColor }}>
                        {project.highlight}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>

              {/* Tech Stack */}
              <motion.div variants={fadeInUp} className="mb-12">
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}
                >
                  Technology Stack
                </h2>
                <div className="flex flex-wrap gap-3">
                  {project.tech.map((tag) => (
                    <span
                      key={tag}
                      className="tech-badge glass-card px-4 py-2 font-medium"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Case Study Content */}
              <motion.div variants={fadeInUp} className="space-y-10">
                <div>
                  <h2
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}
                  >
                    The Challenge
                  </h2>
                  <p className="leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    The client needed a modern, scalable digital solution that
                    could handle their growing business needs while providing an
                    exceptional user experience. Their existing solution was
                    outdated and couldn&apos;t keep up with user expectations.
                  </p>
                </div>

                <div>
                  <h2
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}
                  >
                    Our Solution
                  </h2>
                  <p className="leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    We designed and developed a comprehensive platform using
                    modern technologies. The solution included a responsive
                    frontend, robust backend architecture, and seamless
                    third-party integrations to create a best-in-class digital
                    experience.
                  </p>
                </div>

                <div>
                  <h2
                    className="text-2xl font-bold mb-4"
                    style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}
                  >
                    Results
                  </h2>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                      { value: "3x", label: "User Growth" },
                      { value: "40%", label: "Faster Load Time" },
                      { value: "98%", label: "Client Satisfaction" },
                      { value: "2wk", label: "Delivery Time" },
                    ].map((r) => (
                      <div key={r.label} className="glass-card p-4 text-center">
                        <div
                          className="text-2xl font-bold gradient-text mb-1"
                          style={{ fontFamily: "var(--font-outfit)" }}
                        >
                          {r.value}
                        </div>
                        <div
                          className="text-xs"
                          style={{ color: "var(--color-text-secondary)" }}
                        >
                          {r.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>

              {/* CTA */}
              <motion.div
                variants={fadeInUp}
                className="mt-16 glass-card p-8 text-center"
              >
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}
                >
                  Want a Similar Project?
                </h3>
                <p className="text-sm mb-6" style={{ color: "var(--color-text-secondary)" }}>
                  Let&apos;s build something amazing for your business.
                </p>
                <a
                  href={project.liveUrl ?? "/contact"}
                  target={project.liveUrl ? "_blank" : undefined}
                  rel={project.liveUrl ? "noopener noreferrer" : undefined}
                  className="btn-primary"
                >
                  <span className="flex items-center gap-2">
                    {project.liveUrl ? "View Live Project" : "Start Your Project"} <ExternalLink size={16} />
                  </span>
                </a>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
