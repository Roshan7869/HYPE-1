"use client";

import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnimatedCounterProps {
  to: number;
  from?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  format?: (n: number) => string;
  className?: string;
}

/**
 * Count-up number animation triggered when scrolled into view.
 * Uses requestAnimationFrame for smooth easing.
 * Renders the final value on SSR / first paint to avoid layout shift,
 * then animates from `from` to `to` once the element is in view.
 */
export function AnimatedCounter({
  to,
  from = 0,
  duration = 1.6,
  prefix = "",
  suffix = "",
  format,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  // SSR + first paint: show final value (no animation) so users never see "0".
  const [value, setValue] = useState(to);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!inView || hasAnimated.current) return;
    hasAnimated.current = true;
    let raf: number;
    const start = performance.now();
    setValue(from);
    const animate = (now: number) => {
      const elapsed = (now - start) / 1000;
      const t = Math.min(1, elapsed / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(from + (to - from) * eased);
      if (t < 1) raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(raf);
  }, [inView, from, to, duration]);

  const display = format ? format(value) : Math.round(value).toLocaleString("en-IN");

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display}
      {suffix}
    </span>
  );
}
