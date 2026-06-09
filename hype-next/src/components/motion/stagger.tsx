"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { Children, type ReactNode } from "react";
import { fadeUp, stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface StaggerProps extends HTMLMotionProps<"div"> {
  children: ReactNode;
  /** Delay between children in seconds. */
  delay?: number;
  /** Initial delay before the first child in seconds. */
  initialDelay?: number;
  /** Vertical travel in pixels for each item. */
  y?: number;
  className?: string;
}

/**
 * Container that staggers fade-up reveals of its <StaggerItem>
 * children. Works with any direct children.
 */
export function Stagger({
  children,
  delay = 0.06,
  initialDelay = 0.1,
  y = 16,
  className,
  ...rest
}: StaggerProps) {
  return (
    <motion.div
      className={cn(className)}
      variants={stagger(delay, initialDelay)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      custom={y}
      {...rest}
    >
      {Children.map(children, (child, i) => (
        <StaggerItem key={i} y={y}>
          {child}
        </StaggerItem>
      ))}
    </motion.div>
  );
}

interface StaggerItemProps {
  children: ReactNode;
  y?: number;
  className?: string;
}

export function StaggerItem({ children, y = 16, className }: StaggerItemProps) {
  const itemVariants = {
    ...fadeUp,
    hidden: { opacity: 0, y },
    show: { ...fadeUp.show, transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] } },
  };
  return (
    <motion.div className={cn(className)} variants={itemVariants}>
      {children}
    </motion.div>
  );
}
