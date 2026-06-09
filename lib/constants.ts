// Animation configuration for HYPE marketplace
// Luxury cinematic feel with smooth, deliberate transitions

export const ANIMATION_CONFIG = {
  // Spring physics for organic motion
  spring: {
    default: { stiffness: 100, damping: 10 },
    stiff: { stiffness: 200, damping: 20 },
    smooth: { stiffness: 50, damping: 15 },
    bouncy: { stiffness: 150, damping: 5 },
  },

  // Duration values (in seconds)
  duration: {
    fast: 0.2,
    base: 0.4,
    slow: 0.6,
    verySlow: 1,
  },

  // Easing curves
  ease: {
    linear: [0.25, 0.46, 0.45, 0.94],
    easeIn: [0.42, 0, 1, 1],
    easeOut: [0, 0, 0.58, 1],
    easeInOut: [0.42, 0, 0.58, 1],
    cubicBezier: [0.25, 0.1, 0.25, 1],
  },

  // Parallax speeds (multiplier on scroll)
  parallax: {
    slow: 0.3,
    medium: 0.5,
    fast: 0.7,
  },

  // Stagger configurations for list items
  stagger: {
    small: 0.05,
    medium: 0.1,
    large: 0.15,
  },

  // Viewport detection for scroll animations
  viewport: {
    once: true,
    amount: 0.25,
  },
};

// Utility to format numbers as currency (Indian Rupees)
export const formatCurrency = (value: number): string => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    minimumFractionDigits: 0,
  }).format(value);
};

// Delay generator for staggered animations
export const getStaggerDelay = (index: number, staggerValue: number) => ({
  delay: index * staggerValue,
});

// Auction status colors
export const STATUS_COLORS = {
  live: '#10b981', // emerald
  upcoming: '#f59e0b', // amber
  ended: '#6b7280', // gray
};

// Timer warning thresholds (in milliseconds)
export const TIMER_THRESHOLDS = {
  danger: 3600000, // 1 hour - red
  warning: 86400000, // 24 hours - yellow
  safe: Infinity, // green
};
