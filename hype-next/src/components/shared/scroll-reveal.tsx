"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import type { ReactNode } from "react";

interface ScrollRevealProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  delay?: number;
  y?: number;
  once?: boolean;
  duration?: number;
}

/**
 * Wraps children in a Framer Motion fade/translate-up animation
 * triggered when scrolled into view.
 */
export function ScrollReveal({
  children,
  delay = 0,
  y = 24,
  once = true,
  duration = 0.6,
  ...rest
}: ScrollRevealProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
