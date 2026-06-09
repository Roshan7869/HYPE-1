"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";
import { dur, ease, fadeUp, reduceMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

type MotionLinkProps = HTMLMotionProps<"a"> & {
  reveal?: boolean;
};

/**
 * Link with optional fade-up reveal. No hover lift (use MotionCard for
 * that). Use for in-text CTAs and footer links.
 */
export const MotionLink = forwardRef<HTMLAnchorElement, MotionLinkProps>(
  function MotionLink({ className, children, reveal = false, ...rest }, ref) {
    return (
      <motion.a
        ref={ref}
        className={cn("transition-colors duration-200", className)}
        variants={reveal ? fadeUp : undefined}
        initial={reveal ? "hidden" : undefined}
        whileInView={reveal ? "show" : undefined}
        viewport={reveal ? { once: true, margin: "-40px" } : undefined}
        transition={reduceMotion({ duration: dur.base, ease: ease.out })}
        {...rest}
      >
        {children}
      </motion.a>
    );
  },
);
