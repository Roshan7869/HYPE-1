"use client";

import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import type { ReactNode } from "react";
import { fadeOnly, dur, reduceMotion } from "@/lib/motion";

/**
 * Wraps page children with a fade transition on route change.
 * Use once in the root layout. Children are the routed page.
 */
export function PageTransition({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={pathname}
        variants={fadeOnly}
        initial="hidden"
        animate="show"
        exit="hidden"
        transition={reduceMotion({ duration: dur.fast })}
        className="min-h-[60vh]"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
}
