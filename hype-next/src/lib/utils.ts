import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/** Merge Tailwind class names with conflict resolution. */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/** Format a number as Indian Rupees (₹1,23,456). */
export function formatINR(amount: number): string {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(amount);
}

/** Format a number with thousands separator, no currency. */
export function formatNumber(n: number): string {
  return new Intl.NumberFormat("en-IN").format(n);
}

/** Compact number formatter (1.2K, 2.4M, 1.2 CR). */
export function formatCompact(n: number, currency = false): string {
  const formatter = new Intl.NumberFormat("en-IN", {
    notation: "compact",
    maximumFractionDigits: 1,
  });
  if (n >= 10_000_000) {
    // Indian numbering: 1 Crore = 10M
    return `${formatter.format(n / 10_000_000)} CR${currency ? "+" : ""}`;
  }
  return formatter.format(n);
}

/** Format mm:ss countdown display. */
export function formatTime(totalSeconds: number): string {
  if (totalSeconds < 0) totalSeconds = 0;
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  if (h > 0) {
    return `${pad(h)}:${pad(m)}:${pad(s)}`;
  }
  return `${pad(m)}:${pad(s)}`;
}

function pad(n: number): string {
  return n.toString().padStart(2, "0");
}

/** Format an HH:MM:SS timer split into parts. */
export function splitTimer(totalSeconds: number): {
  hours: string;
  minutes: string;
  seconds: string;
} {
  if (totalSeconds < 0) totalSeconds = 0;
  const h = Math.floor(totalSeconds / 3600);
  const m = Math.floor((totalSeconds % 3600) / 60);
  const s = totalSeconds % 60;
  return {
    hours: pad(Math.min(h, 99)),
    minutes: pad(m),
    seconds: pad(s),
  };
}

/** Clamp a number between min and max. */
export function clamp(n: number, min: number, max: number): number {
  return Math.max(min, Math.min(max, n));
}
