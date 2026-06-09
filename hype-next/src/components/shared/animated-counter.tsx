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
  const [value, setValue] = useState(from);

  useEffect(() => {
    if (!inView) return;
    let raf: number;
    const start = performance.now();
    const animate = (now: number) => {
      const elapsed = (now - start) / 1000;
      const t = Math.min(1, elapsed / duration);
      // ease-out cubic
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
