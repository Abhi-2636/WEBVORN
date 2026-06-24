"use client";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { motion } from "framer-motion";
import { ArrowLeft, Home } from "lucide-react";
import { fadeInUp, tapScale } from "@/lib/animations";

export default function NotFound() {
  return (
    <>
      <Navbar />
      <main className="min-h-[80vh] flex items-center justify-center relative overflow-hidden pt-24">
        {/* Background effects */}
        <div className="absolute inset-0 bg-grid opacity-30" />
        <div className="ambient-beam opacity-40 top-[20%] left-[20%]" />

        <div className="section-container relative text-center max-w-lg mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="glass-card p-12 relative overflow-hidden"
          >
            {/* Massive 404 text */}
            <h1
              className="text-8xl md:text-9xl font-extrabold gradient-text mb-4 tracking-tighter"
              style={{ fontFamily: "var(--font-outfit)" }}
            >
              404
            </h1>

            <h2
              className="text-2xl md:text-3xl font-bold mb-4"
              style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}
            >
              Lost in Space?
            </h2>

            <p className="text-sm mb-8 leading-relaxed" style={{ color: "var(--color-text-secondary)" }}>
              The page you are looking for does not exist, has been moved, or was never here in the first place. Let&apos;s guide you back.
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={tapScale}
                href="/"
                className="btn-primary flex items-center justify-center gap-2"
                id="back-home-button"
              >
                <Home size={16} /> <span>Go Home</span>
              </motion.a>
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={tapScale}
                onClick={() => window.history.back()}
                className="btn-secondary flex items-center justify-center gap-2"
                id="back-prev-button"
              >
                <ArrowLeft size={16} /> <span>Go Back</span>
              </motion.button>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
