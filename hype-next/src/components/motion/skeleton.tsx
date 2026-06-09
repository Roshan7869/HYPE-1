"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SkeletonProps {
  className?: string;
  /** Rounded radius. */
  rounded?: "sm" | "md" | "lg" | "full";
}

/**
 * Loading placeholder with a left-to-right shimmer. Use for any data
 * the page is waiting on. Combine with skeleton-text lines for
 * content-shaped loading states.
 */
export function Skeleton({ className, rounded = "md" }: SkeletonProps) {
  const radius = {
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-hype-lg",
    full: "rounded-full",
  }[rounded];

  return (
    <motion.div
      className={cn("relative overflow-hidden bg-cream-3", radius, className)}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-white/60 to-transparent"
        animate={{ x: ["-100%", "100%"] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      />
    </motion.div>
  );
}
