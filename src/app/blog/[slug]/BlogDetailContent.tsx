"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Share2, MessageSquare, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { formatDate } from "@/lib/utils";
import type { BLOG_POSTS } from "@/lib/constants";

interface BlogDetailContentProps {
  post: typeof BLOG_POSTS[number];
  content: React.ReactNode;
  otherPosts: typeof BLOG_POSTS[number][];
}

export default function BlogDetailContent({ post, content, otherPosts }: BlogDetailContentProps) {
  return (
    <>
      <Navbar />
      <main className="pt-24 relative overflow-hidden">
        {/* Background Gradients */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "var(--gradient-mesh)", opacity: 0.7 }}
        />
        <div
          className="absolute top-0 left-0 right-0 h-[500px] pointer-events-none"
          style={{ background: "var(--gradient-bg-radial)", opacity: 0.8 }}
        />

        <section className="section-padding relative z-10">
          <div className="section-container max-w-4xl">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              {/* Back Link */}
              <motion.a
                variants={fadeInUp}
                href="/blog"
                className="inline-flex items-center gap-2 text-sm mb-8 no-underline transition-colors duration-200"
                style={{ color: "var(--color-text-secondary)" }}
              >
                <ArrowLeft size={16} /> Back to Blog
              </motion.a>

              {/* Category & Date */}
              <motion.div variants={fadeInUp} className="flex items-center gap-4 mb-5">
                <span
                  className="px-3 py-1 rounded-full text-xs font-semibold"
                  style={{
                    background: "rgba(139, 92, 246, 0.15)",
                    color: "var(--color-accent-purple)",
                  }}
                >
                  {post.category}
                </span>
                <span
                  className="text-xs flex items-center gap-1.5"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <Calendar size={13} /> {formatDate(post.date)}
                </span>
                <span
                  className="text-xs flex items-center gap-1.5"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  <Clock size={13} /> {post.readTime}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h1
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-6"
                style={{
                  fontFamily: "var(--font-outfit)",
                  color: "var(--color-text-primary)",
                }}
              >
                {post.title}
              </motion.h1>

              {/* Excerpt Summary */}
              <motion.p
                variants={fadeInUp}
                className="text-lg md:text-xl font-medium leading-relaxed mb-10 pb-8"
                style={{
                  color: "var(--color-text-secondary)",
                  borderBottom: "1px solid var(--glass-border)",
                }}
              >
                {post.excerpt}
              </motion.p>

              {/* Article Content */}
              <motion.article
                variants={fadeInUp}
                className="prose prose-invert max-w-none text-base"
              >
                {content}
              </motion.article>

              {/* Social sharing row */}
              <motion.div
                variants={fadeInUp}
                className="flex items-center justify-between mt-12 pt-8"
                style={{ borderTop: "1px solid var(--glass-border)" }}
              >
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center"
                    style={{
                      background: "var(--glass-bg)",
                      border: "1px solid var(--glass-border)",
                      color: "var(--color-text-primary)",
                    }}
                  >
                    🚀
                  </div>
                  <div>
                    <div className="text-xs font-semibold" style={{ color: "var(--color-text-primary)" }}>
                      Written by Webvorn Team
                    </div>
                    <div className="text-[10px]" style={{ color: "var(--color-text-secondary)" }}>
                      Digital Product Agency
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    className="w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-200"
                    style={{
                      background: "var(--glass-bg)",
                      border: "1px solid var(--glass-border)",
                      color: "var(--color-text-secondary)",
                    }}
                    title="Share Article"
                    onClick={() => {
                      if (navigator.share) {
                        navigator.share({
                          title: post.title,
                          text: post.excerpt,
                          url: window.location.href,
                        });
                      } else {
                        navigator.clipboard.writeText(window.location.href);
                        alert("Link copied to clipboard!");
                      }
                    }}
                  >
                    <Share2 size={16} />
                  </button>
                </div>
              </motion.div>

              {/* Related Posts */}
              <motion.div variants={fadeInUp} className="mt-20">
                <h3
                  className="text-2xl font-bold mb-6"
                  style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}
                >
                  More from the Blog
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {otherPosts.map((relatedPost) => (
                    <a
                      key={relatedPost.slug}
                      href={`/blog/${relatedPost.slug}`}
                      className="glass-card gradient-border p-6 group no-underline flex flex-col justify-between"
                    >
                      <div>
                        <span
                          className="text-[10px] font-semibold uppercase tracking-wider mb-2 block"
                          style={{ color: "var(--color-accent-purple)" }}
                        >
                          {relatedPost.category}
                        </span>
                        <h4
                          className="font-bold mb-2 group-hover:text-purple-400 transition-colors duration-200"
                          style={{
                            fontFamily: "var(--font-outfit)",
                            color: "var(--color-text-primary)",
                          }}
                        >
                          {relatedPost.title}
                        </h4>
                      </div>
                      <span
                        className="text-xs font-semibold flex items-center gap-1 mt-4 group-hover:gap-2 transition-all duration-200"
                        style={{ color: "var(--color-accent-purple)" }}
                      >
                        Read Post <ArrowRight size={12} />
                      </span>
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Final CTA */}
              <motion.div
                variants={fadeInUp}
                className="mt-16 glass-card gradient-border p-8 text-center relative overflow-hidden"
              >
                <div
                  className="absolute inset-0 pointer-events-none opacity-20"
                  style={{
                    backgroundImage: "radial-gradient(circle at 50% 50%, var(--color-accent-purple), transparent 60%)",
                  }}
                />
                <h3
                  className="text-2xl font-bold mb-3"
                  style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}
                >
                  Ready to Grow Your Business?
                </h3>
                <p className="text-sm mb-6 max-w-md mx-auto" style={{ color: "var(--color-text-secondary)" }}>
                  We turn high-end ideas into premium, growth-focused digital products. Let&apos;s build something spectacular.
                </p>
                <a href="/contact" className="btn-primary">
                  <span className="flex items-center gap-2">
                    Let&apos;s Collaborate <MessageSquare size={16} />
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
