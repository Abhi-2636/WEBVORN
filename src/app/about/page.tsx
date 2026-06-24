"use client";

import { motion } from "framer-motion";
import { Users, Target, Heart, Award, Shield } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { fadeInUp, staggerContainer, tapScale } from "@/lib/animations";
import { STATS } from "@/lib/constants";

export default function AboutPage() {
  const values = [
    {
      icon: <Target size={24} />,
      title: "Results-Driven",
      description: "We focus on real business growth, conversion rates, and ROI rather than just aesthetic design.",
    },
    {
      icon: <Shield size={24} />,
      title: "Trust & Transparency",
      description: "No hidden costs, no outsourced communication. Clear contracts, clear milestones, daily updates.",
    },
    {
      icon: <Heart size={24} />,
      title: "Customer-Centric",
      description: "We operate as an extension of your team, dedicated to solving your unique challenges and goals.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Hero Section */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="ambient-beam opacity-40 top-[-10%] left-[-10%]" />
          
          <div className="section-container relative">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <motion.span
                variants={fadeInUp}
                className="text-sm font-semibold uppercase tracking-widest mb-4 block"
                style={{ color: "var(--color-accent-purple)" }}
              >
                About Webvorn
              </motion.span>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
                style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}
              >
                Building Premium <span className="gradient-text">Digital Experiences</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg leading-relaxed"
                style={{ color: "var(--color-text-secondary)" }}
              >
                Webvorn is a next-generation digital agency based in India. We design, build, and scale world-class web applications, mobile apps, and custom AI integrations that drive growth and wow users.
              </motion.p>
            </motion.div>

            {/* Stats Panel */}
            <motion.div
              variants={fadeInUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="glass-card p-8 md:p-12 max-w-5xl mx-auto mb-20"
            >
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-[rgba(255,255,255,0.07)]">
                {STATS.map((stat, i) => (
                  <div key={stat.label} className={`text-center ${i > 1 ? 'pt-8 md:pt-0' : ''} ${i === 1 ? 'pt-8 sm:pt-0' : ''}`}>
                    <div
                      className="text-4xl md:text-5xl font-bold gradient-text mb-2"
                      style={{ fontFamily: "var(--font-outfit)" }}
                    >
                      {stat.value}{stat.suffix}
                    </div>
                    <div className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission and Vision Section */}
        <section className="section-padding border-t border-[rgba(255,255,255,0.05)]">
          <div className="section-container max-w-5xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card p-8"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: "rgba(16, 185, 129, 0.15)",
                    color: "var(--color-accent-emerald)",
                  }}
                >
                  <Award size={24} />
                </div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}
                >
                  Our Mission
                </h2>
                <p className="leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  To bridge the gap between complex engineering and beautiful design. We empower startups and modern enterprises globally by delivering production-ready, lightning-fast digital solutions with zero compromise on craftsmanship.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="glass-card p-8"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                  style={{
                    background: "rgba(139, 92, 246, 0.15)",
                    color: "var(--color-accent-purple)",
                  }}
                >
                  <Users size={24} />
                </div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}
                >
                  Our Vision
                </h2>
                <p className="leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                  To become the standard for modern web engineering and design agencies. We envision a digital landscape where clean design meets robust technology, enabling businesses to scale seamlessly and delight their audiences.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding border-t border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.01)]">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}
              >
                Our Core Values
              </h2>
              <p style={{ color: "var(--color-text-secondary)" }}>
                The principles that guide our work, our collaboration, and our results.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {values.map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card p-8 text-center flex flex-col items-center"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mb-6"
                    style={{
                      background: "rgba(139, 92, 246, 0.12)",
                      color: "var(--color-accent-purple)",
                      boxShadow: "0 0 15px rgba(139, 92, 246, 0.15)",
                    }}
                  >
                    {val.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-3" style={{ color: "var(--color-text-primary)" }}>
                    {val.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    {val.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Page Block */}
        <section className="section-padding border-t border-[rgba(255,255,255,0.05)]">
          <div className="section-container max-w-4xl">
            <div className="glass-card p-12 text-center relative overflow-hidden">
              <div className="ambient-beam opacity-30 bottom-[-20%] right-[-10%]" />
              <h2
                className="text-3xl font-bold mb-4"
                style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}
              >
                Let&apos;s Build Something Incredible Together
              </h2>
              <p className="max-w-xl mx-auto mb-8" style={{ color: "var(--color-text-secondary)" }}>
                Whether you need a custom SaaS platform, an e-commerce hub, or a fully automated AI assistant, we have the expertise to make it happen.
              </p>
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <motion.a
                  whileHover={{ y: -3 }}
                  whileTap={tapScale}
                  href="/contact"
                  className="btn-primary"
                >
                  <span>Start Your Project</span>
                </motion.a>
                <motion.a
                  whileHover={{ y: -3 }}
                  whileTap={tapScale}
                  href="/#portfolio"
                  className="btn-secondary"
                >
                  <span>View Our Work</span>
                </motion.a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
