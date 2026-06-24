"use client";

import { motion } from "framer-motion";
import { TECH_STACK } from "@/lib/constants";
import { fadeInUp, staggerContainer } from "@/lib/animations";

interface TechEntry {
  readonly name: string;
  readonly color: string;
}

// Keep two copies so the marquee stays continuous without excessive repeats.
function TechItem({ tech }: { tech: TechEntry }) {
  return (
    <div
      data-cursor="pointer"
      className="glass-card flex items-center gap-3 px-7 py-4 mx-2.5 shrink-0 group cursor-default min-w-fit"
      style={{ transition: "all 300ms cubic-bezier(0.22,1,0.36,1)" }}
      onMouseEnter={(e) => {
        e.currentTarget.style.borderColor = `${tech.color}60`;
        e.currentTarget.style.boxShadow = `0 0 20px ${tech.color}25, 0 4px 20px rgba(0,0,0,0.3)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.borderColor = "";
        e.currentTarget.style.boxShadow = "";
      }}
    >
      <div
        className="w-2.5 h-2.5 rounded-full flex-shrink-0 transition-all duration-300 group-hover:scale-150"
        style={{ background: tech.color, boxShadow: `0 0 6px ${tech.color}60` }}
      />
      <span
        className="text-sm font-semibold whitespace-nowrap transition-colors duration-300"
        style={{ color: "var(--color-text-secondary)" }}
        onMouseEnter={(e) => (e.currentTarget.style.color = tech.color)}
        onMouseLeave={(e) => (e.currentTarget.style.color = "var(--color-text-secondary)")}
      >
        {tech.name}
      </span>
    </div>
  );
}

export default function TechStack() {
  const offsetStack = [
    ...TECH_STACK.slice(Math.floor(TECH_STACK.length / 2)),
    ...TECH_STACK.slice(0, Math.floor(TECH_STACK.length / 2)),
  ];
  const row1 = [...TECH_STACK, ...TECH_STACK];
  const row2 = [...offsetStack, ...offsetStack];

  return (
    <section
      className="section-padding relative overflow-hidden below-fold-section"
      id="tech-stack"
    >
      <div className="section-container">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="text-center mb-16"
        >
          <motion.div variants={fadeInUp} className="flex justify-center">
            <span className="section-label">Technology Stack</span>
          </motion.div>
          <motion.h2
            variants={fadeInUp}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5"
            style={{ fontFamily: "var(--font-outfit)", color: "var(--color-text-primary)" }}
          >
            Built With{" "}
            <span className="shiny-gradient-text">Modern Tools</span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-base md:text-lg max-w-2xl mx-auto"
            style={{ color: "var(--color-text-secondary)" }}
          >
            We use industry-leading technologies to build fast, scalable, and
            maintainable digital products.
          </motion.p>
        </motion.div>
      </div>

      {/* Dual marquee rows */}
      <div className="relative flex flex-col gap-5">
        {/* Edge fade masks */}
        <div
          className="absolute left-0 top-0 bottom-0 w-44 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, var(--color-bg-primary) 40%, transparent)" }}
        />
        <div
          className="absolute right-0 top-0 bottom-0 w-44 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, var(--color-bg-primary) 40%, transparent)" }}
        />

        {/* Row 1 — scrolls left */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee">
            {row1.map((tech, i) => (
              <TechItem key={`r1-${tech.name}-${i}`} tech={tech} />
            ))}
          </div>
        </div>

        {/* Row 2 — scrolls right (reverse) */}
        <div className="flex overflow-hidden">
          <div className="flex animate-marquee-reverse">
            {row2.map((tech, i) => (
              <TechItem key={`r2-${tech.name}-${i}`} tech={tech} />
            ))}
          </div>
        </div>

        {/* Row 3 — scrolls left, slightly different speed */}
        <div className="flex overflow-hidden">
          <div
            className="flex animate-marquee"
            style={{ animationDuration: "28s", animationDelay: "-5s" }}
          >
            {[...row1].reverse().map((tech, i) => (
              <TechItem key={`r3-${tech.name}-${i}`} tech={tech} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
