"use client";

import { motion } from "framer-motion";
import { ArrowRight, Clock } from "lucide-react";
import { BLOG_POSTS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { formatDate } from "@/lib/utils";

export default function BlogContent() {
  return (
    <section className="section-padding">
      <div className="section-container">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="text-center mb-16"
        >
          <motion.span
            variants={fadeInUp}
            className="text-sm font-semibold uppercase tracking-widest mb-4 block"
            style={{ color: "var(--color-accent-purple)" }}
          >
            Our Blog
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4"
            style={{
              fontFamily: "var(--font-outfit)",
              color: "var(--color-text-primary)",
            }}
          >
            Insights &{" "}
            <span className="gradient-text">Resources</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            Deep dives into web development, design, AI, and digital growth
            strategies.
          </motion.p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {BLOG_POSTS.map((post, index) => (
            <motion.a
              key={post.slug}
              href={`/blog/${post.slug}`}
              variants={fadeInUp}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="glass-card gradient-border p-7 group no-underline flex flex-col"
              id={`blog-page-card-${index}`}
            >
              {/* Decorative gradient bar */}
              <div
                className="h-1 w-16 rounded-full mb-6"
                style={{ background: "var(--gradient-primary)" }}
              />

              <div className="flex items-center gap-3 mb-4">
                <span
                  className="px-3 py-1 rounded-full text-xs font-medium"
                  style={{
                    background: "rgba(139, 92, 246, 0.15)",
                    color: "var(--color-accent-purple)",
                  }}
                >
                  {post.category}
                </span>
                <div
                  className="flex items-center gap-1 text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  <Clock size={12} />
                  {post.readTime}
                </div>
              </div>

              <h2
                className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors duration-200"
                style={{
                  fontFamily: "var(--font-outfit)",
                  color: "var(--color-text-primary)",
                }}
              >
                {post.title}
              </h2>

              <p
                className="text-sm leading-relaxed mb-6 flex-1"
                style={{ color: "var(--color-text-secondary)" }}
              >
                {post.excerpt}
              </p>

              <div className="flex items-center justify-between">
                <span
                  className="text-xs"
                  style={{ color: "var(--color-text-muted)" }}
                >
                  {formatDate(post.date)}
                </span>
                <span
                  className="flex items-center gap-1 text-sm font-medium group-hover:gap-2 transition-all duration-200"
                  style={{ color: "var(--color-accent-purple)" }}
                >
                  Read Article <ArrowRight size={14} />
                </span>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
