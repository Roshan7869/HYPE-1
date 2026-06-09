"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

interface CountUpProps {
  to: number;
  from?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  format?: (n: number) => string;
  className?: string;
  /** Start animating only once the element scrolls into view. */
  triggerOnView?: boolean;
}

/**
 * Smooth count-up. Renders the final value on SSR / first paint to
 * avoid hydration mismatch, then animates from `from` to `to` once
 * the element is in view (or immediately when triggerOnView is false).
 *
 * Uses requestAnimationFrame with a cubic ease-out so it stays
 * compatible with framer-motion 11's typed animate() surface.
 */
export function CountUp({
  to,
  from = 0,
  duration = 1.4,
  prefix = "",
  suffix = "",
  format,
  className,
  triggerOnView = true,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [value, setValue] = useState(to);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (triggerOnView && !inView) return;
    if (hasAnimated.current) return;
    hasAnimated.current = true;
    if (typeof window !== "undefined" && window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) {
      setValue(to);
      return;
    }
    let raf = 0;
    const start = performance.now();
    setValue(from);
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / 1000 / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(from + (to - from) * eased);
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, from, to, duration, triggerOnView]);

  const display = format ? format(value) : Math.round(value).toLocaleString("en-IN");

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
