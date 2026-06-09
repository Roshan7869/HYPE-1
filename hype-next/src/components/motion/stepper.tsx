"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Check } from "lucide-react";
import { dur, ease, reduceMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

export interface Step {
  id: string;
  label: string;
}

interface StepperProps {
  steps: Step[];
  current: number; // 0-indexed
  className?: string;
}

/**
 * Horizontal stepper with a sliding fill bar. Completed steps get a
 * checkmark; the active step pulses subtly.
 */
export function Stepper({ steps, current, className }: StepperProps) {
  return (
    <ol className={cn("flex w-full items-center gap-2", className)}>
      {steps.map((s, i) => {
        const done = i < current;
        const active = i === current;
        return (
          <li key={s.id} className="flex flex-1 items-center gap-2">
            <motion.span
              className={cn(
                "flex h-8 w-8 shrink-0 items-center justify-center rounded-full border text-[12px] font-bold transition-colors",
                done && "border-emerald-600 bg-emerald-600 text-white",
                active && "border-ink bg-ink text-white",
                !done && !active && "border-line bg-white text-muted",
              )}
              animate={active ? { scale: [1, 1.08, 1] } : { scale: 1 }}
              transition={active ? { duration: 1.6, repeat: Infinity, ease: ease.inOut } : { duration: 0 }}
            >
              {done ? <Check className="h-4 w-4" /> : i + 1}
            </motion.span>
            <span
              className={cn(
                "hidden text-[12px] font-semibold sm:block",
                active ? "text-ink" : "text-muted",
              )}
            >
              {s.label}
            </span>
            {i < steps.length - 1 && (
              <span className="relative ml-2 h-px flex-1 overflow-hidden bg-line">
                <motion.span
                  className="absolute inset-y-0 left-0 bg-emerald-600"
                  initial={{ width: "0%" }}
                  animate={{ width: done ? "100%" : "0%" }}
                  transition={reduceMotion({ duration: dur.slow, ease: ease.out })}
                />
              </span>
            )}
          </li>
        );
      })}
    </ol>
  );
}
