"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeUp } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface EmptyStateProps {
  icon?: ReactNode;
  title: string;
  description?: string;
  action?: ReactNode;
  className?: string;
}

/**
 * Friendly "nothing here yet" block. Use whenever a list/grid is
 * empty (bids, orders, wishlist, listings). Pulse the CTA so it
 * draws the eye.
 */
export function EmptyState({ icon, title, description, action, className }: EmptyStateProps) {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="show"
      className={cn(
        "flex flex-col items-center justify-center rounded-hype-lg border border-dashed border-line bg-cream-2 px-6 py-14 text-center",
        className,
      )}
    >
      {icon && (
        <motion.div
          className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-cream text-hype-gold"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
        >
          {icon}
        </motion.div>
      )}
      <h3 className="text-[18px] font-extrabold text-ink">{title}</h3>
      {description && <p className="mt-2 max-w-sm text-[14px] text-muted">{description}</p>}
      {action && <div className="mt-5">{action}</div>}
    </motion.div>
  );
}
