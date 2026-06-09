"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, type ReactNode } from "react";
import { modalBackdrop, modalContent } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
  className?: string;
  /** Disable click-outside close (e.g. for confirmation modals). */
  persistent?: boolean;
  /** Accessible label for the modal panel. */
  ariaLabel?: string;
}

/**
 * Centered modal with backdrop fade + content scale-in.
 * - Closes on Escape
 * - Closes on backdrop click (unless persistent)
 * - Locks body scroll while open
 */
export function Modal({ open, onClose, children, className, persistent, ariaLabel }: ModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !persistent) onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [open, onClose, persistent]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center px-4"
          variants={modalBackdrop}
          initial="hidden"
          animate="show"
          exit="exit"
          onClick={persistent ? undefined : onClose}
          role="presentation"
        >
          <div className="absolute inset-0 bg-ink/60 backdrop-blur-sm" />
          <motion.div
            role="dialog"
            aria-modal="true"
            aria-label={ariaLabel}
            className={cn(
              "relative z-10 w-full max-w-md rounded-2xl bg-white p-6 shadow-2xl",
              className,
            )}
            variants={modalContent}
            initial="hidden"
            animate="show"
            exit="exit"
            onClick={(e) => e.stopPropagation()}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
