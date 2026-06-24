"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";
import {
  cardReveal,
  fadeInUp,
  sectionIntro,
  tapScale,
  viewportOnce,
} from "@/lib/animations";
import { formatDate } from "@/lib/utils";

const cardAccents = ["#34d399", "#fbbf24", "#22d3ee"] as const;

export default function Blog() {
  return (
    <section className="section-padding relative overflow-hidden below-fold-section" id="blog">
      <div className="ambient-beam opacity-45" />

      <div className="section-container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={sectionIntro}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <motion.div variants={fadeInUp} className="flex justify-center">
            <span className="section-label">Blog</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="mb-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            style={{
              fontFamily: "var(--font-outfit)",
              color: "var(--color-text-primary)",
            }}
          >
            Practical insights for{" "}
            <span className="gradient-text">better digital decisions.</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Design, development, AI, and growth notes written for founders and
            operators.
          </motion.p>
        </motion.div>

        <motion.div
          variants={sectionIntro}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="grid grid-cols-1 gap-5 md:grid-cols-3"
        >
          {BLOG_POSTS.map((post, index) => {
            const accent = cardAccents[index];

            return (
              <motion.a
                key={post.slug}
                href={`/blog/${post.slug}`}
                variants={cardReveal}
                whileHover={{ y: -7, scale: 1.01 }}
                whileTap={tapScale}
                className="glass-card gradient-border group flex min-h-[300px] flex-col p-6 no-underline"
                id={`blog-card-${index}`}
              >
                <div
                  className="mb-6 h-1 w-16 rounded-full"
                  style={{ background: accent }}
                />

                <div className="mb-5 flex items-center justify-between gap-3">
                  <span className="badge badge-purple">{post.category}</span>
                  <span
                    className="flex items-center gap-1 text-xs"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    <Clock size={12} />
                    {post.readTime}
                  </span>
                </div>

                <h3
                  className="mb-3 text-xl font-semibold leading-tight"
                  style={{
                    fontFamily: "var(--font-outfit)",
                    color: "var(--color-text-primary)",
                  }}
                >
                  {post.title}
                </h3>

                <p
                  className="mb-6 flex-1 text-sm leading-relaxed"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  {post.excerpt}
                </p>

                <div className="flex items-center justify-between gap-4 border-t pt-4" style={{ borderColor: "var(--color-border)" }}>
                  <span
                    className="text-xs"
                    style={{ color: "var(--color-text-muted)" }}
                  >
                    {formatDate(post.date)}
                  </span>
                  <span
                    className="flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 group-hover:gap-2.5"
                    style={{ color: accent }}
                  >
                    Read More <ArrowRight size={14} />
                  </span>
                </div>
              </motion.a>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
