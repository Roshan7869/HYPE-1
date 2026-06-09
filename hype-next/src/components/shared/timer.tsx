"use client";

import { useEffect, useState } from "react";
import { splitTimer } from "@/lib/utils";

interface TimerProps {
  /** Total seconds to count down from. If undefined, runs forever from initial. */
  initialSeconds: number;
  className?: string;
  variant?: "hero" | "card" | "inline";
}

/**
 * Live countdown timer. Decrements every second.
 * Renders formatted HH:MM:SS or MM:SS depending on duration.
 */
export function Timer({ initialSeconds, className = "", variant = "card" }: TimerProps) {
  const [seconds, setSeconds] = useState(initialSeconds);

  useEffect(() => {
    setSeconds(initialSeconds);
  }, [initialSeconds]);

  useEffect(() => {
    if (seconds <= 0) return;
    const id = setInterval(() => {
      setSeconds((s) => Math.max(0, s - 1));
    }, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [seconds === 0]);

  const { hours, minutes, seconds: secs } = splitTimer(seconds);
  const showHours = seconds >= 3600;

  if (variant === "hero") {
    return (
      <span className={`flex items-start gap-[14px] font-disp font-extrabold ${className}`}>
        <span className="text-[40px] tracking-[-0.01em]">{showHours ? hours : minutes}</span>
        <span className="text-[36px]">:</span>
        <span className="text-[40px] tracking-[-0.01em]">{showHours ? minutes : secs}</span>
        <span className="text-[36px]">:</span>
        <span className="text-[40px] tracking-[-0.01em]">{showHours ? secs : ""}</span>
      </span>
    );
  }

  if (variant === "inline") {
    return (
      <span className={className}>
        {showHours ? `${hours}:${minutes}:${secs}` : `${minutes}:${secs}`}
      </span>
    );
  }

  // card
  return (
    <span className={className}>
      {showHours ? `${hours}:${minutes}:${secs}` : `${minutes}:${secs}`}
    </span>
  );
}
