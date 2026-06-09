"use client";

import { motion, type HTMLMotionProps } from "framer-motion";
import { forwardRef } from "react";
import { buttonPress, dur, ease, fadeUp, reduceMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

type MotionButtonProps = HTMLMotionProps<"button"> & {
  /** Animates a "ripple" press by default. Set false to disable. */
  press?: boolean;
};

/**
 * Drop-in replacement for the static <button> that adds hover + tap
 * scale + focus ring transition. Keeps all native <button> behaviour.
 */
export const MotionButton = forwardRef<HTMLButtonElement, MotionButtonProps>(
  function MotionButton({ className, children, press = true, ...rest }, ref) {
    return (
      <motion.button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold text-sm tracking-[0.04em] transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hype-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
          className,
        )}
        variants={press ? buttonPress : undefined}
        initial="rest"
        whileHover={press ? "hover" : undefined}
        whileTap={press ? "tap" : undefined}
        transition={reduceMotion({ duration: dur.base, ease: ease.out })}
        {...rest}
      >
        {children}
      </motion.button>
    );
  },
);
