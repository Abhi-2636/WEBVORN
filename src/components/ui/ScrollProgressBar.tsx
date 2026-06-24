"use client";

import { motion, useScroll } from "framer-motion";

export default function ScrollProgressBar() {
  const { scrollYProgress } = useScroll();

  return (
    <motion.div
      aria-hidden="true"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        height: "3px",
        scaleX: scrollYProgress,
        transformOrigin: "left center",
        background:
          "linear-gradient(90deg, #34d399, #22d3ee, #fbbf24)",
        zIndex: 100,
        boxShadow: "0 0 10px rgba(52, 211, 153, 0.6)",
      }}
    />
  );
}
