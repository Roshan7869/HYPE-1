"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";
import { cardHover, dur, ease, fadeUp, reduceMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

type MotionCardProps = HTMLMotionProps<"div"> & {
  hover?: boolean;
  reveal?: boolean;
};

/**
 * HYPE card primitive with built-in hover lift, tap scale, and
 * optional scroll-triggered fade-up reveal.
 */
export const MotionCard = forwardRef<HTMLDivElement, MotionCardProps>(
  function MotionCard({ className, children, hover = true, reveal = false, ...rest }, ref) {
    return (
      <motion.div
        ref={ref}
        className={cn(
          "rounded-hype-lg border border-line-soft bg-cream-2 text-ink shadow-sm",
          className,
        )}
        variants={reveal ? fadeUp : undefined}
        initial={reveal ? "hidden" : "rest"}
        whileInView={reveal ? "show" : undefined}
        viewport={reveal ? { once: true, margin: "-60px" } : undefined}
        whileHover={hover ? "hover" : undefined}
        whileTap={hover ? "tap" : undefined}
        animate={hover && !reveal ? "rest" : undefined}
        {...(hover && !reveal ? cardHover : {})}
        transition={reduceMotion({ duration: dur.base, ease: ease.out })}
        {...rest}
      >
        {children}
      </motion.div>
    );
  },
);
