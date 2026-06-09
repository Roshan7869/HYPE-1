"use client";

import { motion } from "framer-motion";
import { forwardRef, useState, type InputHTMLAttributes } from "react";
import { dur, ease, reduceMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

type NativeInputProps = InputHTMLAttributes<HTMLInputElement>;
type MotionInputProps = NativeInputProps & {
  invalid?: boolean;
};

/**
 * Input with animated focus halo. The wrapper is the motion element
 * (it owns the box-shadow animation); the inner <input> stays a
 * native element so all keyboard / form behaviour is preserved.
 */
export const MotionInput = forwardRef<HTMLInputElement, MotionInputProps>(
  function MotionInput({ className, invalid, onFocus, onBlur, ...rest }, ref) {
    const [focused, setFocused] = useState(false);
    return (
      <motion.div
        className="relative w-full"
        animate={{
          boxShadow: focused
            ? invalid
              ? "0 0 0 4px rgba(239,68,68,0.18)"
              : "0 0 0 4px rgba(176,138,40,0.18)"
            : "0 0 0 0px rgba(0,0,0,0)",
        }}
        transition={reduceMotion({ duration: dur.fast, ease: ease.out })}
        style={{ borderRadius: 6 }}
      >
        <input
          ref={ref}
          onFocus={(e) => {
            setFocused(true);
            onFocus?.(e);
          }}
          onBlur={(e) => {
            setFocused(false);
            onBlur?.(e);
          }}
          className={cn(
            "flex h-11 w-full rounded-md border border-line bg-cream-2 px-4 py-2 text-sm text-ink placeholder:text-muted focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50",
            invalid && "border-red-400",
            className,
          )}
          {...rest}
        />
      </motion.div>
    );
  },
);
