"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function PrivacyPage() {
  const sections = [
    {
      title: "1. Information We Collect",
      content:
        "We collect information that you voluntarily provide to us when you fill out contact forms, apply for careers, or communicate with us directly. This may include your name, email address, company name, phone number, and accommodation requirements.",
    },
    {
      title: "2. How We Use Your Information",
      content:
        "We use the collected information to respond to your inquiries, deliver our premium student housing and accommodation services, process booking applications, and send newsletter updates if you opt-in. We do not sell or lease your personal information to third parties.",
    },
    {
      title: "3. Cookies and Tracking",
      content:
        "Our website utilizes cookies and similar tracking technologies to analyze site traffic, understand user behavior, and optimize user experience. You can choose to accept or decline cookies through your browser settings.",
    },
    {
      title: "4. Security",
      content:
        "We implement industry-standard administrative, technical, and physical security measures to safeguard your personal data from unauthorized access, alteration, or disclosure. However, no internet transmission is 100% secure.",
    },
    {
      title: "5. Updates to This Policy",
      content:
        "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date. We encourage you to review this page periodically.",
    },
  ];

  return (
    <>
      <Navbar />
      <main className="pt-24">
        <section className="section-padding">
          <div className="section-container max-w-3xl mx-auto">
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="mb-12 text-center"
            >
              <motion.span
                variants={fadeInUp}
                className="text-sm font-semibold uppercase tracking-widest mb-4 block"
                style={{ color: "var(--color-accent-purple)" }}
              >
                Legal
              </motion.span>
              <motion.h1
                variants={fadeInUp}
                className="text-4xl sm:text-5xl font-bold mb-4"
                style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}
              >
                Privacy <span className="gradient-text">Policy</span>
              </motion.h1>
              <motion.p
                variants={fadeInUp}
                className="text-xs"
                style={{ color: "var(--color-text-muted)" }}
              >
                Last Updated: June 24, 2026
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="space-y-8"
            >
              {sections.map((sec) => (
                <motion.div
                  key={sec.title}
                  variants={fadeInUp}
                  className="glass-card p-6 md:p-8"
                >
                  <h2
                    className="text-xl font-semibold mb-4"
                    style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}
                  >
                    {sec.title}
                  </h2>
                  <p className="text-sm leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
                    {sec.content}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
