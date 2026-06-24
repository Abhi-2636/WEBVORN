"use client";

import { motion } from "framer-motion";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function TermsPage() {
  const sections = [
    {
      title: "1. Acceptance of Terms",
      content:
        "By accessing or using the Webvorn website, you agree to comply with and be bound by these Terms of Service. If you do not agree to these terms, please do not use our website.",
    },
    {
      title: "2. Services Offered",
      content:
        "Webvorn provides custom web development, UI/UX design, mobile app development, branding, and AI integration services. All service agreements are subject to separate formal contract terms.",
    },
    {
      title: "3. Intellectual Property",
      content:
        "All content, design components, branding, graphics, and code featured on this website are the intellectual property of Webvorn or its licensors. Unauthorized copying, modification, or distribution is prohibited.",
    },
    {
      title: "4. User Conduct",
      content:
        "Users agree to use our website for lawful purposes only. You must not attempt to breach security, distribute malicious code, or engage in any behavior that disrupts the website's operations or usability.",
    },
    {
      title: "5. Limitation of Liability",
      content:
        "Webvorn provides this website on an 'as-is' and 'as-available' basis. We make no representations or warranties of any kind and are not liable for any direct or indirect damages arising from your use of this website.",
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
                Terms of <span className="gradient-text">Service</span>
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
