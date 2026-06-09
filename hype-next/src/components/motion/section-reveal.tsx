"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { reduceMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

/**
 * Wraps a homepage (or any) section in a fade-up scroll reveal.
 * `delay` and `y` are tunable per-section.
 */
export function SectionReveal({
  children,
  className,
  delay = 0,
  y = 32,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
}) {
  return (
    <motion.div
      className={cn(className)}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={reduceMotion({ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay })}
    >
      {children}
    </motion.div>
  );
}
