"use client";

import { useCallback, useEffect, useState } from "react";
import { motion, useMotionValue, useTransform, useAnimation, type PanInfo } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "@/lib/constants";
import {
  cardReveal,
  fadeInUp,
  sectionIntro,
  tapScale,
  viewportOnce,
} from "@/lib/animations";

const avatarGradients = [
  "linear-gradient(135deg, #34d399, #22d3ee)",
  "linear-gradient(135deg, #fbbf24, #fb7185)",
  "linear-gradient(135deg, #22d3ee, #60a5fa)",
  "linear-gradient(135deg, #c4b5fd, #34d399)",
] as const;

interface CardProps {
  card: typeof TESTIMONIALS[number] & { id: number; gradient: string };
  indexFromTop: number;
  onSwipe: () => void;
}

function ShuffleCard({ card, indexFromTop, onSwipe }: CardProps) {
  const isTop = indexFromTop === 0;
  const dragX = useMotionValue(0);

  // Rotation and opacity transformations driven by drag distance
  const rotate = useTransform(dragX, [-200, 200], [-15, 15]);
  const opacity = useTransform(
    dragX,
    [-200, -150, 0, 150, 200],
    [0.5, 0.8, 1, 0.8, 0.5]
  );

  const controls = useAnimation();

  // Reset local properties and animate to new stack position when rank changes
  useEffect(() => {
    dragX.set(0);
    const scale = 1 - indexFromTop * 0.05;
    const yOffset = indexFromTop * 16;
    const initialOpacity = indexFromTop >= 3 ? 0 : 1 - indexFromTop * 0.35;
    const zIndex = 30 - indexFromTop;

    controls.start({
      x: 0,
      y: yOffset,
      scale,
      opacity: initialOpacity,
      rotate: 0,
      zIndex,
      transition: { duration: 0.4, ease: [0.25, 1, 0.5, 1] },
    });
  }, [indexFromTop, controls, dragX]);

  const handleDragEnd = async (_event: MouseEvent | TouchEvent | PointerEvent, info: PanInfo) => {
    if (!isTop) return;
    const swipeThreshold = 120;

    if (info.offset.x > swipeThreshold) {
      // Fly out right
      await controls.start({
        x: 400,
        opacity: 0,
        rotate: 20,
        transition: { duration: 0.2 },
      });
      onSwipe();
    } else if (info.offset.x < -swipeThreshold) {
      // Fly out left
      await controls.start({
        x: -400,
        opacity: 0,
        rotate: -20,
        transition: { duration: 0.2 },
      });
      onSwipe();
    } else {
      // Snap back
      controls.start({
        x: 0,
        rotate: 0,
        transition: { type: "spring", stiffness: 300, damping: 20 },
      });
    }
  };

  return (
    <motion.div
      drag={isTop ? "x" : false}
      dragConstraints={{ left: 0, right: 0 }}
      dragElastic={0.65}
      onDragEnd={handleDragEnd}
      animate={controls}
      style={{
        x: isTop ? dragX : 0,
        rotate: isTop ? rotate : 0,
        opacity: isTop ? opacity : undefined,
        cursor: isTop ? "grab" : "default",
        touchAction: "none",
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
      layoutId={`testimonial-card-${card.id}`}
      className={`glass-card p-6 sm:p-8 flex flex-col justify-between select-none ${
        isTop ? "shadow-2xl border-purple-500/20 active:cursor-grabbing" : "border-white/5"
      }`}
    >
      <div>
        <div className="mb-5 flex items-center gap-1">
          {[...Array(card.rating)].map((_, idx) => (
            <Star
              key={idx}
              size={18}
              fill="#fbbf24"
              style={{ color: "var(--color-accent-amber)" }}
            />
          ))}
        </div>

        <p
          className="mb-8 text-lg leading-relaxed md:text-xl text-white/95"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          &ldquo;{card.content}&rdquo;
        </p>
      </div>

      <div className="flex items-center gap-4 border-t border-white/10 pt-4 mt-auto">
        <div
          className="flex h-12 w-12 items-center justify-center rounded-full text-lg font-bold shrink-0"
          style={{
            background: card.gradient,
            color: "#07100d",
          }}
        >
          {card.name.charAt(0)}
        </div>
        <div>
          <div
            className="font-semibold text-base"
            style={{ color: "var(--color-text-primary)" }}
          >
            {card.name}
          </div>
          <div
            className="text-sm"
            style={{ color: "var(--color-text-secondary)" }}
          >
            {card.role}, {card.company}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Testimonials() {
  const [cards, setCards] = useState(() =>
    TESTIMONIALS.map((t, idx) => ({
      ...t,
      id: idx,
      gradient: avatarGradients[idx % avatarGradients.length],
    }))
  );

  const shuffleToBottom = useCallback(() => {
    setCards((prev) => {
      const copy = [...prev];
      const top = copy.pop(); // Remove top card (last item in stack)
      if (top) copy.unshift(top); // Put it at the bottom (first item)
      return copy;
    });
  }, []);

  const shuffleToTop = useCallback(() => {
    setCards((prev) => {
      const copy = [...prev];
      const bottom = copy.shift(); // Remove bottom card (first item)
      if (bottom) copy.push(bottom); // Put it at the top (last item)
      return copy;
    });
  }, []);

  const bringToTop = useCallback((targetId: number) => {
    setCards((prev) => {
      const targetIndex = prev.findIndex((c) => c.id === targetId);
      if (targetIndex === -1 || targetIndex === prev.length - 1) return prev;
      const copy = [...prev];
      const [target] = copy.splice(targetIndex, 1);
      copy.push(target);
      return copy;
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(shuffleToBottom, 7500);
    return () => clearInterval(timer);
  }, [shuffleToBottom]);

  // The active card is the one on top (last item in the array)
  const activeCard = cards[cards.length - 1];
  const activeIndex = activeCard ? activeCard.id : 0;

  return (
    <section
      className="section-padding relative overflow-hidden below-fold-section"
      style={{ background: "var(--color-bg-secondary)" }}
      id="testimonials"
    >
      <div className="ambient-beam opacity-50" />

      <div className="section-container relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          variants={sectionIntro}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <motion.div variants={fadeInUp} className="flex justify-center">
            <span className="section-label">Testimonials</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="mb-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl"
            style={{
              fontFamily: "var(--font-outfit)",
              color: "var(--color-text-primary)",
            }}
          >
            Clients remember the{" "}
            <span className="gradient-text">clarity and craft.</span>
          </motion.h2>
        </motion.div>

        <motion.div
          variants={cardReveal}
          initial="hidden"
          whileInView="visible"
          viewport={viewportOnce}
          className="screen-frame mx-auto max-w-5xl p-5 sm:p-8"
        >
          <div className="grid gap-8 lg:grid-cols-[0.76fr_1fr] lg:items-center">
            {/* Stats Panel */}
            <div className="section-panel p-5">
              <div className="mb-5 flex items-center justify-between">
                <span
                  className="text-sm font-semibold"
                  style={{ color: "var(--color-text-secondary)" }}
                >
                  Client confidence
                </span>
                <Quote size={28} style={{ color: "var(--color-accent-emerald)" }} />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {[
                  ["4.9/5", "avg. rating"],
                  ["3x", "lead lift"],
                  ["6w", "full build"],
                  ["98%", "satisfaction"],
                ].map(([value, label]) => (
                  <div
                    key={label}
                    className="rounded p-4"
                    style={{
                      background: "rgba(255,255,255,0.045)",
                      border: "1px solid rgba(255,255,255,0.08)",
                    }}
                  >
                    <p
                      className="text-2xl font-bold"
                      style={{
                        color: "var(--color-text-primary)",
                        fontFamily: "var(--font-outfit)",
                      }}
                    >
                      {value}
                    </p>
                    <p className="text-xs" style={{ color: "var(--color-text-muted)" }}>
                      {label}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Stacked Card Deck Column */}
            <div className="flex flex-col">
              <div className="relative h-[380px] sm:h-[320px] md:h-[280px] w-full" aria-live="polite" aria-atomic="true">
                {cards.map((card, index) => {
                  const indexFromTop = cards.length - 1 - index;
                  return (
                    <ShuffleCard
                      key={card.id}
                      card={card}
                      indexFromTop={indexFromTop}
                      onSwipe={shuffleToBottom}
                    />
                  );
                })}
              </div>

              {/* Navigation Controls */}
              <div className="mt-8 flex items-center justify-between gap-4">
                {/* Dots indicator based on active card id */}
                <div className="flex gap-2">
                  {TESTIMONIALS.map((item, index) => (
                    <button
                      key={item.name}
                      onClick={() => bringToTop(index)}
                      className="h-2.5 rounded-full border-none transition-all duration-300 cursor-pointer"
                      style={{
                        width: index === activeIndex ? "2rem" : "0.65rem",
                        background:
                          index === activeIndex
                            ? "var(--gradient-primary)"
                            : "rgba(255,255,255,0.14)",
                      }}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                {/* Arrow navigation buttons */}
                <div className="flex gap-2">
                  <motion.button
                    whileTap={tapScale}
                    onClick={shuffleToTop}
                    className="flex h-10 w-10 items-center justify-center rounded border cursor-pointer"
                    style={{
                      background: "rgba(255,255,255,0.045)",
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-secondary)",
                    }}
                    aria-label="Previous testimonial"
                    id="testimonial-prev"
                  >
                    <ChevronLeft size={20} />
                  </motion.button>
                  <motion.button
                    whileTap={tapScale}
                    onClick={shuffleToBottom}
                    className="flex h-10 w-10 items-center justify-center rounded border cursor-pointer"
                    style={{
                      background: "rgba(255,255,255,0.045)",
                      borderColor: "var(--color-border)",
                      color: "var(--color-text-secondary)",
                    }}
                    aria-label="Next testimonial"
                    id="testimonial-next"
                  >
                    <ChevronRight size={20} />
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
