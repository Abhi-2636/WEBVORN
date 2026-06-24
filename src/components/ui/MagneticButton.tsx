"use client";

import { useRef, ReactNode } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  strength?: number; // pull strength in px (default 10)
  as?: "div" | "span";
}

export default function MagneticButton({
  children,
  className = "",
  strength = 10,
  as: Tag = "div",
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);

  const x = useSpring(rawX, { stiffness: 200, damping: 18, mass: 0.6 });
  const y = useSpring(rawY, { stiffness: 200, damping: 18, mass: 0.6 });

  const onMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distX = e.clientX - centerX;
    const distY = e.clientY - centerY;
    rawX.set((distX / rect.width) * strength * 2);
    rawY.set((distY / rect.height) * strength * 2);
  };

  const onMouseLeave = () => {
    rawX.set(0);
    rawY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      onMouseMove={onMouseMove}
      onMouseLeave={onMouseLeave}
      style={{ x, y, display: "inline-flex" }}
    >
      {children}
    </motion.div>
  );
}
