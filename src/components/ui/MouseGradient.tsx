"use client";

import { useEffect } from "react";

export default function MouseGradient() {
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const xPct = (e.clientX / window.innerWidth) * 100;
      const yPct = (e.clientY / window.innerHeight) * 100;
      document.documentElement.style.setProperty("--mouse-x", `${xPct}%`);
      document.documentElement.style.setProperty("--mouse-y", `${yPct}%`);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);

  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
        background:
          "radial-gradient(800px circle at var(--mouse-x, 50%) var(--mouse-y, 50%), rgba(52, 211, 153, 0.055), transparent 50%)",
        transition: "background 0.1s ease",
      }}
    />
  );
}
