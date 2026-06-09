'use client';

import { useEffect, useState, useRef } from 'react';

interface CounterOptions {
  end: number;
  duration?: number;
  start?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export function useCounterAnimation(options: CounterOptions) {
  const {
    end,
    duration = 2,
    start = 0,
    decimals = 0,
    prefix = '',
    suffix = '',
  } = options;

  const [count, setCount] = useState(start);
  const countRef = useRef(start);

  useEffect(() => {
    const startTime = Date.now();
    const startValue = start;
    const endValue = end;
    const change = endValue - startValue;
    const startTimestamp = performance.now();

    const animate = (timestamp: number) => {
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / (duration * 1000), 1);

      // Easing function for smooth animation
      const easeOutQuad = 1 - (1 - progress) * (1 - progress);
      const currentValue = startValue + change * easeOutQuad;

      countRef.current = currentValue;
      setCount(parseFloat(currentValue.toFixed(decimals)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    const animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, [end, duration, start, decimals]);

  return {
    count,
    formatted: `${prefix}${count.toLocaleString()}${suffix}`,
  };
}
