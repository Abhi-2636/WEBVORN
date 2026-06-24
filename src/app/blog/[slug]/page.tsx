"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Clock, Calendar, Share2, MessageSquare, ArrowRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BLOG_POSTS } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { formatDate } from "@/lib/utils";

// Full content data for our blog posts
const BLOG_POSTS_CONTENT = {
  "why-startups-need-premium-website": {
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
          In the digital age, your website is your brand&apos;s digital storefront. It&apos;s the first place potential clients, investors, and partners go to verify your credibility. A basic, low-budget template might get you online, but it won&apos;t build the trust needed to win premium customers.
        </p>

        <div className="glass-card p-6 my-8 border-l-4 border-l-purple-500">
          <p className="italic text-base" style={{ color: "var(--color-text-primary)" }}>
            &quot;Design is not just what it looks like and feels like. Design is how it works.&quot; — Steve Jobs
          </p>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}>
          1. The Psychology of Premium Design
        </h3>
        <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
          Users form an opinion about your website in <strong>50 milliseconds</strong>. Within that blink of an eye, they judge your credibility, professionalism, and capabilities. A premium website with smooth animations, custom layout grids, and premium typography signals that your business is high-end, reliable, and detailed-oriented.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}>
          2. Conversion-Focused UX
        </h3>
        <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
          A premium website is more than just beautiful imagery. It utilizes visual weight, whitespace, and micro-interactions to guide visitors seamlessly down the funnel. By removing friction from the navigation and providing clear Call-to-Actions (CTAs), a professional website can increase your conversion rates by <strong>200% to 400%</strong>.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}>
          3. Speed & SEO Optimization
        </h3>
        <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
          In 2026, page load speed is a critical ranking factor. Modern premium sites are built with frameworks like Next.js and Tailwind, offering server-side rendering (SSR), optimized asset delivery, and clean code that search engines love. A fraction of a second delay can cost you thousands in lost conversions.
        </p>
      </>
    ),
  },
  "ai-integration-web-applications": {
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
          Artificial Intelligence is shifting from a futuristic trend to a core business requirement. Integrating AI into your web application can automate processes, offer real-time customer insights, and provide hyper-personalized user experiences.
        </p>

        <div className="glass-card p-6 my-8 border-l-4 border-l-blue-500">
          <p className="italic text-base" style={{ color: "var(--color-text-primary)" }}>
            The startups that will lead the next decade are those integrating intelligence directly into the client user interface.
          </p>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}>
          1. Automated Customer Support
        </h3>
        <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
          Traditional chatbots are frustrating and limited. Modern LLM-based assistants (like Gemini API integrations) understand context, read user documents, and resolve complex issues in real-time, providing immediate 24/7 assistance that feels completely human.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}>
          2. Dynamic Personalization
        </h3>
        <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
          By analyzing user interaction sequences in real-time, your application can change layout components, recommend products, and suggest dashboard features tailored specifically to that user. This creates an extremely engaging, sticky digital product.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}>
          3. AI-Driven Analytics
        </h3>
        <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
          Give your users the power to query their data using natural language. Integrating natural-language-to-SQL logic lets users write sentences like &quot;Show me my highest performing sales regions this month&quot; and instantly receive rendered charts.
        </p>
      </>
    ),
  },
  "react-vs-nextjs-comparison": {
    content: (
      <>
        <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
          Choosing the right framework is one of the most critical technology decisions you will make. While React is the library that powers everything, Next.js is a production-ready framework built on top of it. Let&apos;s break down which one fits your project.
        </p>

        <div className="glass-card p-6 my-8 border-l-4 border-l-cyan-500">
          <p className="italic text-base" style={{ color: "var(--color-text-primary)" }}>
            Understanding rendering paths (SSR vs CSR) is key to delivering both developer velocity and customer satisfaction.
          </p>
        </div>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}>
          1. React (Client-Side Rendering)
        </h3>
        <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
          React is excellent for dashboard interfaces, internal admin tools, and single-page apps (SPAs) where SEO is not a consideration. Since it loads all JavaScript in the browser, once loaded, page transitions are instant, making it feel like a local application.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}>
          2. Next.js (Server-Side & Hybrid Rendering)
        </h3>
        <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
          Next.js renders HTML on the server. This makes pages load instantly, ensures search engine crawlers can index every word, and provides built-in image optimization, edge routing, and directory-based routing. It is the gold standard for marketing, e-commerce, and SaaS landing pages.
        </p>

        <h3 className="text-2xl font-bold mt-8 mb-4" style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}>
          3. Summary: How to Choose
        </h3>
        <p className="text-base leading-relaxed mb-6" style={{ color: "var(--color-text-secondary)" }}>
          If you are building a public website where organic search traffic and initial load times determine your revenue, use <strong>Next.js</strong>. If you are building a password-protected software app behind a login gate, a raw <strong>React</strong> template may serve you well.
        </p>
      </>
    ),
  },
} as const;

export default function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  const postContent = BLOG_POSTS_CONTENT[slug as keyof typeof BLOG_POSTS_CONTENT];

  if (!post || !postContent) {
    return (
      <>
        <Navbar />
        <main className="pt-32 pb-20 section-container text-center">
          <h1
            className="text-4xl font-bold mb-4"
            style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}
          >
            Article Not Found
          </h1>
          <a href="/blog" className="btn-primary mt-6">
            <span>← Back to Blog</span>
          </a>
        </main>
        <Footer />
      </>
    );
  }

  // Find other posts for recommendations
  const otherPosts = BLOG_POSTS.filter((p) => p.slug !== slug).slice(0, 2);

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
                {postContent.content}
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
