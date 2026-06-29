"use client";

import { motion } from "framer-motion";
import { Briefcase, MapPin, Clock, ArrowRight, Zap, Coffee, Heart, Globe } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function CareersPage() {
  const jobs = [
    {
      title: "Senior Full Stack Developer",
      department: "Engineering",
      location: "Remote (India)",
      type: "Full-Time",
      experience: "3+ Years",
      tags: ["React", "Next.js", "Node.js", "TypeScript"],
    },
    {
      title: "UI/UX & Motion Designer",
      department: "Design",
      location: "Remote (India)",
      type: "Full-Time",
      experience: "2+ Years",
      tags: ["Figma", "Framer Motion", "GSAP", "Branding"],
    },
    {
      title: "AI Integration Engineer",
      department: "Engineering / AI Research",
      location: "Remote (India)",
      type: "Full-Time",
      experience: "2+ Years",
      tags: ["Python", "LLMs", "LangChain", "OpenAI API"],
    },
  ];

  const perks = [
    {
      icon: <Globe size={24} />,
      title: "100% Remote Work",
      description: "Work from anywhere in India with flexible working hours that fit your schedule.",
    },
    {
      icon: <Coffee size={24} />,
      title: "Learning Budget",
      description: "Monthly allowance for books, courses, tutorials, and attending tech conferences.",
    },
    {
      icon: <Heart size={24} />,
      title: "Health & Wellness",
      description: "Comprehensive medical insurance cover for you and your immediate family.",
    },
    {
      icon: <Zap size={24} />,
      title: "Top-Tier Gear",
      description: "MacBook Pro, high-res external monitor, and ergonomic home-office accessories.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24">
        {/* Careers Hero */}
        <section className="section-padding relative overflow-hidden">
          <div className="absolute inset-0 bg-grid opacity-30" />
          <div className="ambient-beam opacity-40 top-[-10%] right-[-10%]" />
          
          <div className="section-container relative text-center max-w-3xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
            >
              <motion.span
                variants={fadeInUp}
                className="text-sm font-semibold uppercase tracking-widest mb-4 block"
                style={{ color: "var(--color-accent-purple)" }}
              >
                Join Webvorn
              </motion.span>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6"
                style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}
              >
                Build the Future of the <span className="gradient-text">Modern Web</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-lg leading-relaxed mb-8"
                style={{ color: "var(--color-text-secondary)" }}
              >
                We are a fully remote team of designers, engineers, and creatives building high-end websites, apps, and artificial intelligence solutions. If you love clean code, smooth animations, and high performance, we want to hear from you.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Perks Section */}
        <section className="section-padding border-t border-[rgba(255,255,255,0.05)] bg-[rgba(255,255,255,0.01)]">
          <div className="section-container">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}
              >
                Why Work With Us?
              </h2>
              <p style={{ color: "var(--color-text-secondary)" }}>
                We believe in autonomous ownership, craft work, and healthy work-life integration.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
              {perks.map((perk, i) => (
                <motion.div
                  key={perk.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card p-6"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{
                      background: "rgba(139, 92, 246, 0.12)",
                      color: "var(--color-accent-purple)",
                    }}
                  >
                    {perk.icon}
                  </div>
                  <h3 className="text-lg font-bold mb-2" style={{ color: "var(--color-text-primary)" }}>
                    {perk.title}
                  </h3>
                  <p className="text-xs leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    {perk.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="section-padding border-t border-[rgba(255,255,255,0.05)]">
          <div className="section-container max-w-4xl">
            <div className="text-center mb-16">
              <h2
                className="text-3xl md:text-4xl font-bold mb-4"
                style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}
              >
                Open Positions
              </h2>
              <p style={{ color: "var(--color-text-secondary)" }}>
                Explore open positions and kickstart your career with Webvorn.
              </p>
            </div>

            <div className="space-y-6">
              {jobs.map((job, i) => (
                <motion.div
                  key={job.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="glass-card gradient-border p-6 md:p-8 flex flex-col md:flex-row md:items-center justify-between gap-6 group hover:translate-y-[-2px] transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2 group-hover:text-[var(--color-accent-purple)] transition-colors duration-200" style={{ color: "var(--color-text-primary)" }}>
                        {job.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs" style={{ color: "var(--color-text-secondary)" }}>
                        <span className="flex items-center gap-1">
                          <Briefcase size={14} /> {job.department}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPin size={14} /> {job.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={14} /> {job.type}
                        </span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {job.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2.5 py-1 rounded-md text-[10px] font-medium"
                          style={{
                            background: "rgba(255, 255, 255, 0.04)",
                            border: "1px solid rgba(255,255,255,0.06)",
                            color: "rgba(255,255,255,0.5)",
                          }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <a
                      href={`mailto:careers@webvorn.com?subject=Application%20for%20${encodeURIComponent(job.title)}`}
                      className="btn-secondary w-full md:w-auto text-sm group-hover:bg-[rgba(139,92,246,0.15)] group-hover:text-[var(--color-accent-purple)] group-hover:border-[var(--color-accent-purple)] transition-all duration-300"
                    >
                      <span className="flex items-center justify-center gap-1">
                        Apply Now <ArrowRight size={14} />
                      </span>
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* General App */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mt-12 text-center p-8 glass-card border border-dashed border-[rgba(255,255,255,0.1)]"
            >
              <h3 className="text-lg font-semibold mb-2" style={{ color: "var(--color-text-primary)" }}>
                Don&apos;t see your role?
              </h3>
              <p className="text-sm mb-4" style={{ color: "var(--color-text-secondary)" }}>
                We are always looking for passionate builders. Send your resume and portfolio to careers@webvorn.com.
              </p>
              <a
                href="mailto:careers@webvorn.com?subject=General%20Application"
                className="text-sm font-semibold inline-flex items-center gap-1 hover:gap-2 transition-all duration-200"
                style={{ color: "var(--color-accent-purple)" }}
              >
                Send General Application <ArrowRight size={14} />
              </a>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
