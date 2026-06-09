import type { Transition, Variants } from "framer-motion";

/* ───────────────────────────────────────────────────────────────────────────
 * HYPE Motion Tokens
 *
 * Single source of truth for every animation in the app. All primitives
 * import from here so durations, easings and variants stay consistent
 * across the 33 pages.
 * ─────────────────────────────────────────────────────────────────────────── */

/** Cubic-bezier easings. HYPE prefers slow, organic out-curves. */
export const ease = {
  /** Material-style overshoot for hero and page entry. */
  out: [0.16, 1, 0.3, 1] as const,
  /** Symmetric for state swaps (tabs, accordions). */
  inOut: [0.65, 0, 0.35, 1] as const,
  /** Sharp entry for tap and focus. */
  in: [0.4, 0, 1, 1] as const,
} satisfies Record<string, readonly [number, number, number, number]>;

/** Spring presets. Use for interactive surfaces (cards, toasts). */
export const spring = {
  /** Default interactive spring — used for hover, accordion, toast. */
  default: { type: "spring", stiffness: 320, damping: 28 } satisfies Transition,
  /** Bouncier — success / "place bid" / confetti release. */
  bounce: { type: "spring", stiffness: 400, damping: 18 } satisfies Transition,
  /** Slower, heavier — page transitions and chart path draws. */
  heavy: { type: "spring", stiffness: 200, damping: 26 } satisfies Transition,
} as const;

/** Duration tokens in seconds. */
export const dur = {
  fast: 0.15,
  base: 0.3,
  slow: 0.6,
  slower: 1.2,
} as const;

/* ───────────────────────────────────────────────────────────────────────────
 * Reusable variant sets
 * ─────────────────────────────────────────────────────────────────────────── */

/** Section-level reveal: fade up by 24px over 0.6s. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: dur.slow, ease: ease.out },
  },
};

/** Slight slide-up used for hero text only (smaller distance). */
export const fadeUpSmall: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: dur.base, ease: ease.out },
  },
};

/** Page-level fade only. Used for route transitions to avoid CLS. */
export const fadeOnly: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: dur.base, ease: ease.out },
  },
};

/** Stagger container — children fade-up in sequence. */
export const stagger = (delay = 0.06, initial = 0.1): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: delay, delayChildren: initial },
  },
});

/** Card hover states — lift, scale, shadow. */
export const cardHover: Variants = {
  rest: {
    y: 0,
    scale: 1,
    boxShadow: "0 1px 2px rgba(20,20,20,0.04)",
    transition: spring.default,
  },
  hover: {
    y: -6,
    scale: 1.015,
    boxShadow: "0 18px 40px -10px rgba(20,20,20,0.18)",
    transition: spring.default,
  },
  tap: {
    scale: 0.98,
    transition: { duration: dur.fast },
  },
};

/** Button tap feedback (1.02 hover, 0.97 tap). */
export const buttonPress = {
  rest: { scale: 1 },
  hover: { scale: 1.02, transition: { duration: dur.fast } },
  tap: { scale: 0.97, transition: { duration: dur.fast } },
} satisfies Variants;

/** Slide-in from right — used for toasts and slide-out panels. */
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 40 },
  show: { opacity: 1, x: 0, transition: spring.default },
  exit: { opacity: 0, x: 40, transition: { duration: dur.base, ease: ease.in } },
};

/** Modal — backdrop fade, content scale-up. */
export const modalBackdrop: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: dur.base } },
  exit: { opacity: 0, transition: { duration: dur.fast } },
};

export const modalContent: Variants = {
  hidden: { opacity: 0, scale: 0.95, y: 16 },
  show: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: spring.default,
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    y: 8,
    transition: { duration: dur.fast, ease: ease.in },
  },
};

/** Accordion expand/collapse. */
export const accordion: Variants = {
  collapsed: { height: 0, opacity: 0, transition: { duration: dur.base, ease: ease.inOut } },
  expanded: { height: "auto", opacity: 1, transition: { duration: dur.base, ease: ease.inOut } },
};

/* ───────────────────────────────────────────────────────────────────────────
 * Reduced motion guard
 * ─────────────────────────────────────────────────────────────────────────── */

/**
 * Returns transition that shortens to 0 if the user prefers reduced motion.
 * Use everywhere: `transition={reduceMotion(transition)}`.
 */
export function reduceMotion<T>(transition: T): T | { duration: 0 } {
  if (typeof window === "undefined") return transition;
  const mq = window.matchMedia?.("(prefers-reduced-motion: reduce)");
  return mq?.matches ? { duration: 0 } : transition;
}
