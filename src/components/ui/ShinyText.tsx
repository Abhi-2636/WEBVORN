"use client";

import { ReactNode } from "react";

interface ShinyTextProps {
  children: ReactNode;
  className?: string;
  speed?: number; // seconds for one sweep
}

export default function ShinyText({
  children,
  className = "",
  speed = 3,
}: ShinyTextProps) {
  return (
    <span
      className={`shiny-text ${className}`}
      style={{ "--shine-speed": `${speed}s` } as React.CSSProperties}
    >
      {children}
    </span>
  );
}
