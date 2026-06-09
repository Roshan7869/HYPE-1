'use client';

import { useCounterAnimation } from '@/hooks/use-counter-animation';

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  start?: number;
  decimals?: number;
  prefix?: string;
  suffix?: string;
}

export function AnimatedCounter({
  end,
  duration = 2,
  start = 0,
  decimals = 0,
  prefix = '',
  suffix = '',
}: AnimatedCounterProps) {
  const { formatted } = useCounterAnimation({
    end,
    duration,
    start,
    decimals,
    prefix,
    suffix,
  });

  return <>{formatted}</>;
}
