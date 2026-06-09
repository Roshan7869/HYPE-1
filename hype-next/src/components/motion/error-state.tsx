"use client";

import { motion } from "framer-motion";
import { AlertTriangle } from "lucide-react";
import type { ReactNode } from "react";
import { fadeUp, ease, reduceMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface ErrorStateProps {
  title?: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

/**
 * Error/404 fallback. Title + description + optional action.
 * The icon does a short horizontal shake to draw attention.
 */
export function ErrorState({
  title = "Something went wrong",
  description = "Please try again, or come back later.",
  action,
  className,
}: ErrorStateProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className={cn(
        "flex flex-col items-center justify-center rounded-hype-lg border border-red-200 bg-red-50/40 px-6 py-14 text-center",
        className,
      )}
    >
      <motion.div
        className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-red-100 text-red-600"
        animate={{ x: [0, -6, 6, -4, 4, 0] }}
        transition={reduceMotion({ duration: 0.6, ease: ease.inOut })}
      >
        <AlertTriangle className="h-7 w-7" />
      </motion.div>
      <h3 className="text-[18px] font-extrabold text-ink">{title}</h3>
      <p className="mt-2 max-w-sm text-[14px] text-muted">{description}</p>
      {action && <div className="mt-5">{action}</div>}
    </motion.div>
  );
}
