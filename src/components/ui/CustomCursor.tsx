"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export default function CustomCursor() {
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  const mouseX = useMotionValue(-100);
  const mouseY = useMotionValue(-100);

  const springConfig = { stiffness: 300, damping: 28, mass: 0.5 };
  const springXOuter = useSpring(mouseX, { stiffness: 120, damping: 24, mass: 0.8 });
  const springYOuter = useSpring(mouseY, { stiffness: 120, damping: 24, mass: 0.8 });
  const springXInner = useSpring(mouseX, springConfig);
  const springYInner = useSpring(mouseY, springConfig);

  useEffect(() => {
    // Detect touch device — hide cursor on touch
    const isTouchDev = window.matchMedia("(hover: none)").matches;
    setIsTouch(isTouchDev);
    if (isTouchDev) return;

    // Enable cursor:none CSS only after JS has loaded
    document.body.classList.add("cursor-ready");

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onDown = () => setClicked(true);
    const onUp = () => setClicked(false);

    const onHoverStart = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isInteractive =
        target.closest("a, button, [role='button'], [data-cursor='pointer'], input, select, textarea, label") !== null;
      setHovered(isInteractive);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onHoverStart);

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onHoverStart);
    };
  }, [mouseX, mouseY]);

  if (isTouch) return null;

  return (
    <>
      {/* Outer ring */}
      <motion.div
        className="cursor-outer"
        style={{
          x: springXOuter,
          y: springYOuter,
          opacity: visible ? 1 : 0,
          scale: hovered ? 1.8 : clicked ? 0.7 : 1,
          backgroundColor: hovered ? "rgba(52, 211, 153, 0.12)" : "rgba(52, 211, 153, 0)",
          borderColor: hovered ? "rgba(52, 211, 153, 1)" : "rgba(52, 211, 153, 0.7)",
        }}
        transition={{ 
          scale: { duration: 0.2 },
          backgroundColor: { duration: 0.2 },
          borderColor: { duration: 0.2 }
        }}
      />
      {/* Inner dot */}
      <motion.div
        className="cursor-inner"
        style={{
          x: springXInner,
          y: springYInner,
          opacity: visible ? 1 : 0,
          scale: clicked ? 0.5 : hovered ? 0 : 1,
        }}
        transition={{ scale: { duration: 0.15 } }}
      />
    </>
  );
}
