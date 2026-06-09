"use client";

import { motion } from "framer-motion";
import { useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

interface Tab {
  id: string;
  label: ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTab?: string;
  onChange?: (id: string) => void;
  className?: string;
  /** Visual style: pill (rounded background) or underline (line under text). */
  variant?: "pill" | "underline";
  children: (active: string) => ReactNode;
}

/**
 * Tab strip with a sliding indicator (Framer Motion `layoutId`).
 * Pass a render function as children that takes the active tab id.
 */
export function Tabs({
  tabs,
  defaultTab,
  onChange,
  className,
  variant = "pill",
  children,
}: TabsProps) {
  const [active, setActive] = useState(defaultTab ?? tabs[0]?.id);
  const handle = (id: string) => {
    setActive(id);
    onChange?.(id);
  };

  return (
    <div className={className}>
      <div
        role="tablist"
        className={cn(
          "flex flex-wrap items-center gap-1",
          variant === "pill" ? "rounded-full bg-cream-2 p-1 border border-line" : "border-b border-line",
        )}
      >
        {tabs.map((t) => {
          const selected = active === t.id;
          return (
            <button
              key={t.id}
              type="button"
              role="tab"
              aria-selected={selected}
              onClick={() => handle(t.id)}
              className={cn(
                "relative px-4 py-2 text-[13px] font-semibold transition-colors",
                selected ? "text-ink" : "text-muted hover:text-ink",
                variant === "underline" && "pb-3",
              )}
            >
              {selected && variant === "pill" && (
                <motion.span
                  layoutId="tab-pill"
                  className="absolute inset-0 rounded-full bg-white shadow-sm"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              {selected && variant === "underline" && (
                <motion.span
                  layoutId="tab-underline"
                  className="absolute left-0 right-0 -bottom-px h-[2px] bg-ink"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
              <span className="relative z-10">{t.label}</span>
            </button>
          );
        })}
      </div>
      <div className="mt-6">{children(active)}</div>
    </div>
  );
}
