"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { ChevronDown } from "lucide-react";
import { accordion, dur, ease, reduceMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

interface AccordionItem {
  id: string;
  question: string;
  answer: ReactNode;
}

interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: string;
  className?: string;
}

/**
 * Single-open accordion. The first item opens by default unless
 * `defaultOpen` is provided. Chevron rotates with the open state.
 */
export function Accordion({ items, defaultOpen, className }: AccordionProps) {
  const [open, setOpen] = useState<string | null>(defaultOpen ?? items[0]?.id ?? null);

  return (
    <div className={cn("divide-y divide-line", className)}>
      {items.map((item) => {
        const isOpen = open === item.id;
        return (
          <div key={item.id}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-4 py-5 text-left font-semibold text-ink hover:text-hype-gold"
            >
              <span className="text-[16px] md:text-[17px]">{item.question}</span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={reduceMotion({ duration: dur.base, ease: ease.out })}
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line"
              >
                <ChevronDown className="h-4 w-4" />
              </motion.span>
            </button>
            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  variants={accordion}
                  initial="collapsed"
                  animate="expanded"
                  exit="collapsed"
                  className="overflow-hidden"
                >
                  <div className="pb-5 pr-10 text-[15px] leading-relaxed text-muted">{item.answer}</div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
