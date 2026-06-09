# HYPE — Next.js 14 Luxury Cinematic Implementation Plan

> Gucci-level parallax · Framer Motion · Glassmorphism · Lenis scrollytelling · Shadcn UI · Skeletal Loading · Responsive

---

## Table of Contents

1. [Project Overview](#1-project-overview)
2. [Tech Stack & Dependencies](#2-tech-stack--dependencies)
3. [Architecture & Directory Structure](#3-architecture--directory-structure)
4. [Phase 0 — Scaffolding](#4-phase-0--scaffolding)
5. [Phase 1 — Design System & Tokens](#5-phase-1--design-system--tokens)
6. [Phase 2 — Lenis Smooth Scroll Provider](#6-phase-2--lenis-smooth-scroll-provider)
7. [Phase 3 — Layout Shell (Nav + Footer)](#7-phase-3--layout-shell-nav--footer)
8. [Phase 4 — Hero Section (Parallax + Framer Motion)](#8-phase-4--hero-section-parallax--framer-motion)
9. [Phase 5 — Stats Bar (Counter Animation)](#9-phase-5--stats-bar-counter-animation)
10. [Phase 6 — Market Cards Grid (Glassmorphism + Skeleton)](#10-phase-6--market-cards-grid-glassmorphism--skeleton)
11. [Phase 7 — How It Works (Scrollytelling)](#11-phase-7--how-it-works-scrollytelling)
12. [Phase 8 — Market Moves Ticker](#12-phase-8--market-moves-ticker)
13. [Phase 9 — Stay Ahead CTA](#13-phase-9--stay-ahead-cta)
14. [Phase 10 — Shop Page](#14-phase-10--shop-page)
15. [Phase 11 — Live Auctions Page](#15-phase-11--live-auctions-page)
16. [Phase 12 — Sell With Us Page](#16-phase-12--sell-with-us-page)
17. [Phase 13 — Dashboard Pages](#17-phase-13--dashboard-pages)
18. [Phase 14 — Listing Detail Page](#18-phase-14--listing-detail-page)
19. [Performance Budget & Metrics](#performance-budget--metrics)
20. [Reference Projects](#reference-projects)
21. [Checkpoint & QA Protocol](#checkpoint--qa-protocol)

---

## 1. Project Overview

**Goal**: Rebuild the existing HYPE auction marketplace (currently HTML/CSS/JS) as a Next.js 14 App Router project with:

- Cinematic smooth scrolling via Lenis
- Gucci/Dior-level parallax product showcases
- Framer Motion spring physics for all transitions
- Glassmorphism cards & overlays
- Shadcn UI component system
- Skeletal loading states (no layout shift)
- 60fps on mobile (≤3s LCP, ≤100ms INP)

**NOT included**: 3D effects (no Three.js/R3F/Spline). Simple 2D parallax + motion only.

**Current state**: 8 HTML pages with shared `styles.css` + `sidebar.js` + `footer.js`.

**Design tokens preserved from existing**:
- `--ink: #0c0b0a`, `--cream: #f4eee4`, `--sand: #d8ccba`, `--gold: #c9a25e`
- `--font-disp: 'Hanken Grotesk'`, `--font-poster: 'Anton'`
- Radius: 16px / 22px, Max-width: 1500px

---

## 2. Tech Stack & Dependencies

### Core

| Package | Version | Purpose |
|---|---|---|
| `next` | 14.2+ | App Router, RSC, Image optimization |
| `react` | 18.3+ | Concurrent features |
| `typescript` | 5.5+ | Type safety |
| `tailwindcss` | 3.4+ | Utility-first styling |
| `framer-motion` | 11.3+ | Spring animations, layout animations, gestures |
| `lenis` | 1.1+ | Smooth scroll (replaces CSS `scroll-behavior`) |
| `@studio-freight/lenis` | — | DEPRECATED — use plain `lenis` package |

### UI

| Package | Version | Purpose |
|---|---|---|
| `shadcn-ui` | latest | Button, Card, Sheet, Dialog, Skeleton, etc. |
| `@radix-ui/react-*` | latest | Headless primitives (shadcn deps) |
| `lucide-react` | latest | Icon system (replaces inline SVGs) |
| `clsx` | latest | Conditional classnames |
| `tailwind-merge` | latest | Class conflict resolution |
| `class-variance-authority` | latest | Variant-driven components |

### Animation Helpers

| Package | Version | Purpose |
|---|---|---|
| `framer-motion` | 11.3+ | Already listed — parallax, scroll-linked, gestures |
| `@react-spring/parallax` | — | SKIP — Framer Motion handles this natively |
| `motion` | — | SKIP — framer-motion is the canonical package |

### Data / Loading

| Package | Version | Purpose |
|---|---|---|
| `swr` | 2.2+ | Data fetching with suspense + skeleton support |
| `@tanstack/react-query` | 5.x | Alternative — pick ONE, not both |

### Dev Tools

| Package | Version | Purpose |
|---|---|---|
| `eslint` | 8+ | Lint |
| `prettier` | 3+ | Format |
| `prettier-plugin-tailwindcss` | latest | Sort TW classes |

---

## 3. Architecture & Directory Structure

```
hype-next/
├── public/
│   ├── fonts/
│   │   ├── HankenGrotesk-Variable.woff2
│   │   └── Anton-Regular.woff2
│   ├── images/
│   │   ├── hero/
│   │   ├── products/
│   │   └── icons/
│   └── mock/                    # JSON mock data for auctions
│
├── src/
│   ├── app/
│   │   ├── layout.tsx            # Root: fonts, Lenis provider, metadata
│   │   ├── page.tsx              # Home page
│   │   ├── globals.css           # Tailwind base + custom tokens
│   │   ├── shop/
│   │   │   └── page.tsx
│   │   ├── live-auctions/
│   │   │   └── page.tsx
│   │   ├── sell-with-us/
│   │   │   └── page.tsx
│   │   ├── dashboard/
│   │   │   ├── layout.tsx        # Sidebar layout
│   │   │   ├── page.tsx          # Orders
│   │   │   ├── payouts/
│   │   │   │   └── page.tsx
│   │   │   └── listings/
│   │   │       ├── page.tsx     # Create listing
│   │   │       └── [id]/
│   │   │           └── page.tsx  # Listing detail
│   │   └── not-found.tsx
│   │
│   ├── components/
│   │   ├── ui/                   # Shadcn components (auto-generated)
│   │   │   ├── button.tsx
│   │   │   ├── card.tsx
│   │   │   ├── skeleton.tsx
│   │   │   ├── sheet.tsx
│   │   │   ├── dialog.tsx
│   │   │   ├── badge.tsx
│   │   │   └── ...
│   │   ├── layout/
│   │   │   ├── nav-marketplace.tsx
│   │   │   ├── nav-dashboard.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── sidebar.tsx
│   │   │   └── breadcrumb.tsx
│   │   ├── home/
│   │   │   ├── hero.tsx
│   │   │   ├── hero-product-card.tsx
│   │   │   ├── stats-bar.tsx
│   │   │   ├── market-grid.tsx
│   │   │   ├── market-card.tsx
│   │   │   ├── filter-bar.tsx
│   │   │   ├── how-it-works.tsx
│   │   │   ├── step-item.tsx
│   │   │   ├── market-moves.tsx
│   │   │   └── stay-ahead.tsx
│   │   ├── shared/
│   │   │   ├── timer.tsx
│   │   │   ├── animated-counter.tsx
│   │   │   ├── parallax-image.tsx
│   │   │   ├── glass-card.tsx
│   │   │   ├── scroll-reveal.tsx
│   │   │   └── live-badge.tsx
│   │   └── providers/
│   │       ├── lenis-provider.tsx
│   │       └── motion-provider.tsx
│   │
│   ├── hooks/
│   │   ├── use-lenis.ts
│   │   ├── use-parallax.ts
│   │   ├── use-scroll-progress.ts
│   │   ├── use-counter-animation.ts
│   │   ├── use-media-query.ts
│   │   └── use-intersection.ts
│   │
│   ├── lib/
│   │   ├── utils.ts              # cn() helper, formatCurrency, etc.
│   │   ├── fonts.ts              # Next.js font declarations
│   │   ├── constants.ts          # Breakpoints, animation config
│   │   └── mock-data.ts          # Auction/product mock data
│   │
│   └── types/
│       ├── auction.ts
│       ├── product.ts
│       └── dashboard.ts
│
├── tailwind.config.ts
├── components.json               # Shadcn config
├── next.config.mjs
├── tsconfig.json
├── .eslintrc.json
├── .prettierrc
└── package.json
```

---

## 4. Phase 0 — Scaffolding

**Time estimate**: 20 min  
**Dependencies**: Node 22, npm 10

### Steps

```bash
# 1. Create Next.js project (App Router, TS, Tailwind, ESLint)
npx create-next-app@latest hype-next \
  --typescript --tailwind --eslint --app --src-dir \
  --import-alias "@/*" --use-npm

cd hype-next

# 2. Install core dependencies
npm install framer-motion lenis lucide-react clsx tailwind-merge class-variance-authority

# 3. Install SWR for data fetching
npm install swr

# 4. Initialize Shadcn UI
npx shadcn-ui@latest init
# Choose: TypeScript yes, Style default, Base color neutral, CSS variables yes

# 5. Add Shadcn components we need
npx shadcn-ui@latest add button card skeleton sheet dialog badge separator

# 6. Install dev dependencies
npm install -D prettier prettier-plugin-tailwindcss

# 7. Verify
npm run dev  # Should boot on http://localhost:3000
```

### Verification

- `npm run build` completes with 0 errors
- `npm run dev` serves blank page at localhost:3000
- Shadcn `Button` renders in a test page

### Pitfalls

- **DO NOT** install `@studio-freight/lenis` — that package is renamed to just `lenis`
- **DO NOT** install both `swr` and `@tanstack/react-query` — pick SWR for simplicity
- Shadcn `init` asks "CSS variables" — say YES or glassmorphism tokens won't work with the theme system
- Next.js 14 App Router: ALL pages are Server Components by default. Client components need `"use client"` directive

---

## 5. Phase 1 — Design System & Tokens

**Time estimate**: 1 hour  
**Metric target**: 0 CLS on token load, <5ms first paint token resolution

### 5.1 Tailwind Config — Extend with HYPE tokens

```ts
// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#0c0b0a",
          soft: "#16140f",
        },
        cream: {
          DEFAULT: "#f4eee4",
          2: "#faf6f0",
          3: "#efe7da",
        },
        sand: {
          DEFAULT: "#d8ccba",
          hero: "#e7ddcd",
        },
        "shop-bg": "#f7e6d8",
        line: "rgba(12,11,10,0.14)",
        "line-soft": "rgba(12,11,10,0.08)",
        muted: {
          DEFAULT: "#7e776b",
          2: "#a39a8c",
        },
        hype: {
          green: "#bdecc9",
          "green-ink": "#1f7a3f",
          red: "#e8543b",
          "amber-bg": "#f6dca6",
          "amber-ink": "#9a6b16",
          "blue-bg": "#c9c9f6",
          "blue-ink": "#3b3bb0",
          "pink-bg": "#f6c9d6",
          "pink-ink": "#b03b5e",
          gold: "#c9a25e",
        },
      },
      fontFamily: {
        display: ["var(--font-hanken)", "sans-serif"],
        poster: ["var(--font-anton)", "sans-serif"],
      },
      borderRadius: {
        hype: "16px",
        "hype-lg": "22px",
      },
      maxWidth: {
        hype: "1500px",
      },
      animation: {
        "fade-up": "fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) forwards",
        "fade-in": "fadeIn 0.4s ease forwards",
        shimmer: "shimmer 2s linear infinite",
        "slide-in-right": "slideInRight 0.5s cubic-bezier(0.16,1,0.3,1) forwards",
        ticker: "ticker 30s linear infinite",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        ticker: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
```

### 5.2 Global CSS — Tailwind Base + Glassmorphism Utilities

```css
/* src/app/globals.css */
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  html {
    -webkit-font-smoothing: antialiased;
    text-rendering: optimizeLegibility;
    /* REMOVE scroll-behavior:smooth — Lenis handles this */
  }

  body {
    @apply font-display text-ink bg-sand leading-normal;
  }
}

@layer components {
  /* Glass card — the core glassmorphism primitive */
  .glass {
    @apply relative overflow-hidden rounded-hype border border-white/10;
    background: rgba(255, 255, 255, 0.06);
    backdrop-filter: blur(16px) saturate(180%);
    -webkit-backdrop-filter: blur(16px) saturate(180%);
  }

  .glass-light {
    @apply relative overflow-hidden rounded-hype border border-cream-3/30;
    background: rgba(244, 238, 228, 0.65);
    backdrop-filter: blur(20px) saturate(200%);
    -webkit-backdrop-filter: blur(20px) saturate(200%);
  }

  .glass-dark {
    @apply relative overflow-hidden rounded-hype border border-white/8;
    background: rgba(12, 11, 10, 0.7);
    backdrop-filter: blur(24px) saturate(160%);
    -webkit-backdrop-filter: blur(24px) saturate(160%);
  }

  /* Glass shine overlay (the luxury reflection) */
  .glass-shine::before {
    content: "";
    @apply absolute inset-0 pointer-events-none;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.15) 0%,
      transparent 40%,
      transparent 60%,
      rgba(255, 255, 255, 0.05) 100%
    );
  }

  /* Noise texture overlay (adds tactile quality) */
  .noise-overlay::after {
    content: "";
    @apply absolute inset-0 pointer-events-none opacity-[0.03];
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
    background-size: 128px 128px;
  }
}

@layer utilities {
  /* Skeletal shimmer gradient */
  .skeleton-shimmer {
    background: linear-gradient(
      90deg,
      rgba(0, 0, 0, 0.04) 25%,
      rgba(0, 0, 0, 0.08) 50%,
      rgba(0, 0, 0, 0.04) 75%
    );
    background-size: 200% 100%;
    @apply animate-shimmer;
  }

  /* Scroll-driven parallax offset */
  .parallax-slow {
    will-change: transform;
    transform: translateZ(0);
  }
}
```

### 5.3 Font Setup — Next.js Font Optimization

```ts
// src/lib/fonts.ts
import { Hanken_Grotesk, Anton } from "next/font/google";

export const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const anton = Anton({
  subsets: ["latin"],
  variable: "--font-anton",
  weight: "400",
  display: "swap",
});
```

### 5.4 Animation Configuration

```ts
// src/lib/constants.ts

export const ANIMATION = {
  // Spring physics — Gucci/Dior feel: fast start, gentle settle
  spring: {
    stiff: 300,       // stiffness
    damp: 30,          // damping
    mass: 0.8,         // mass
  },
  // Duration-based (for exit/enter patterns)
  duration: {
    fast: 0.2,        // micro-interactions (hover, press)
    normal: 0.4,      // card reveals, list items
    slow: 0.6,        // hero, page transitions
    cinematic: 0.8,   // scroll-triggered reveals
  },
  // Easing curves
  ease: {
    out: [0.16, 1, 0.3, 1],      // cubic-bezier — "emerge" feel
    in: [0.7, 0, 0.84, 0],       // accelerate into
   InOut: [0.65, 0, 0.35, 1],    // smooth in-out
  },
  // Parallax speed multipliers
  parallax: {
    slow: 0.15,      // background elements
    medium: 0.3,     // product images
    fast: 0.5,       // foreground / text
  },
  // Stagger between list items
  stagger: {
    cards: 0.08,     // auction cards
    steps: 0.15,     // "How it works" steps
    stats: 0.1,      // stat counters
  },
} as const;

export const BREAKPOINTS = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1200,
  "2xl": 1536,
} as const;
```

### Verification

- All HYPE colors render correctly: create test page with color swatches
- Font variables load (check Network tab for `.woff2` requests)
- `glass-light` class produces visible blur + translucency on test div
- Tailwind IntelliSense picks up custom tokens in VS Code

---

## 6. Phase 2 — Lenis Smooth Scroll Provider

**Time estimate**: 30 min  
**Metric target**: 0 jank frames during scroll, scroll FPS ≥ 55fps on Chrome DevTools

### 6.1 Lenis Provider

```tsx
// src/components/providers/lenis-provider.tsx
"use client";

import { useEffect, useRef } from "react";
import Lenis from "lenis";
import { animate } from "framer-motion";

export function LenisProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,              // Seconds to complete scroll
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Expo decay
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,         // Faster touch scroll
      infinite: false,
    });

    lenisRef.current = lenis;

    // Integrate with Framer Motion's animate for scroll-linked animations
    lenis.on("scroll", (e: { velocity: number }) => {
      // Expose velocity for parallax calculations
      (window as any).__lenisVelocity = e.velocity;
    });

    // RAF loop
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
```

### 6.2 Hook: useLenis

```tsx
// src/hooks/use-lenis.ts
"use client";

import { useCallback, useEffect } from "react";
import Lenis from "lenis";

let lenisInstance: Lenis | null = null;

export function useLenis() {
  useEffect(() => {
    // Access the global Lenis instance
    const checkLenis = () => {
      lenisInstance = (window as any).__lenis as Lenis | null;
    };
    checkLenis();
  }, []);

  const scrollTo = useCallback((target: string | number, options?: any) => {
    lenisInstance?.scrollTo(target, options);
  }, []);

  const stop = useCallback(() => lenisInstance?.stop(), []);
  const start = useCallback(() => lenisInstance?.start(), []);

  return { scrollTo, stop, start };
}
```

### 6.3 Hook: useScrollProgress

```tsx
// src/hooks/use-scroll-progress.ts
"use client";

import { useScroll, useTransform, MotionValue } from "framer-motion";
import { useRef } from "react";

interface ScrollProgressOptions {
  offset?: [string, string]; // e.g. ["start end", "end start"]
}

export function useScrollProgress(
  options: ScrollProgressOptions = {}
): {
  ref: React.RefObject<HTMLDivElement>;
  scrollYProgress: MotionValue<number>;
} {
  const ref = useRef<HTMLDivElement>(null!);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: options.offset || ["start end", "end start"],
  });

  return { ref, scrollYProgress };
}
```

### 6.4 Hook: useParallax

```tsx
// src/hooks/use-parallax.ts
"use client";

import { useTransform, MotionValue } from "framer-motion";

export function useParallax(
  scrollYProgress: MotionValue<number>,
  distance: number = 100
): MotionValue<number> {
  return useTransform(scrollYProgress, [0, 1], [-distance, distance]);
}
```

### Pitfalls

- **Lenis + Framer Motion `useScroll`**: They coexist fine. Lenis controls the actual scroll position; Framer Motion reads `window.scrollY` for its calculations. No conflict.
- **iOS Safari**: Set `touchMultiplier: 2` and test on real device. iOS momentum scroll can fight Lenis.
- **`scroll-behavior: smooth` in CSS**: REMOVE it from `globals.css` or `<html>`. Lenis replaces native smooth scroll. Conflicts cause double-scrolling.
- **Modal/Sheet open**: Call `lenis.stop()` when a Shadcn Sheet/Dialog opens, `lenis.start()` on close. Prevents background scroll.

---

## 7. Phase 3 — Layout Shell (Nav + Footer)

**Time estimate**: 1.5 hours  
**Metric target**: Nav renders <100ms, 0 layout shift on load

### 7.1 Root Layout

```tsx
// src/app/layout.tsx
import type { Metadata } from "next";
import { hanken, anton } from "@/lib/fonts";
import { LenisProvider } from "@/components/providers/lenis-provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "HYPE — Bid. Win. Repeat.",
  description: "India's first live auction marketplace for hype culture.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${hanken.variable} ${anton.variable}`}
      suppressHydrationWarning
    >
      <body className="font-display text-ink bg-sand antialiased">
        <LenisProvider>
          {children}
        </LenisProvider>
      </body>
    </html>
  );
}
```

### 7.2 Marketplace Nav — Animated

Key features:
- Sticky with `backdrop-filter: blur` on scroll (glassmorphism nav)
- Shadcn `Sheet` for mobile menu
- Framer Motion `AnimatePresence` for mobile menu enter/exit
- Smooth underline on active link (layoutId animation)

```tsx
// src/components/layout/nav-marketplace.tsx
"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { Search, Menu, X, ArrowRight } from "lucide-react";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const links = [
  { href: "/", label: "AUCTIONS" },
  { href: "/live-auctions", label: "LIVE" },
  { href: "#", label: "UPCOMING" },
  { href: "#", label: "SOLD" },
  { href: "#", label: "CATEGORIES" },
];

export function NavMarketplace() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 80], [0, 1]);

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (v) => setScrolled(v > 40));
    return () => unsubscribe();
  }, [scrollY]);

  return (
    <motion.header
      className={cn(
        "sticky top-0 z-50 transition-colors duration-300",
        scrolled
          ? "bg-ink/80 backdrop-blur-xl border-b border-white/5"
          : "bg-ink"
      )}
    >
      <div className="max-w-hype mx-auto flex items-center h-22 px-12 gap-8">
        {/* Logo */}
        <Link href="/" className="text-white font-display font-extrabold text-3xl tracking-tight">
          HYPE.
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-8 ml-4">
          {links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="relative text-sm font-semibold tracking-widest uppercase text-cream-3/80 hover:text-white transition-colors py-1"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Search */}
        <div className="hidden lg:flex flex-1 max-w-[430px] mx-auto items-center gap-2.5 bg-white/10 rounded-full px-5 py-3 text-sm text-muted">
          <Search className="w-4 h-4 opacity-60" />
          <span className="text-muted">Search auctions, items...</span>
        </div>

        {/* Actions */}
        <div className="hidden lg:flex items-center gap-5">
          <span className="text-xs font-semibold tracking-wider uppercase text-cream-3">
            SIGN IN
          </span>
          <Button className="bg-cream text-ink font-bold text-xs tracking-wider uppercase rounded-lg px-6 py-3 hover:bg-white transition-colors">
            REGISTER
          </Button>
        </div>

        {/* Mobile burger */}
        <div className="lg:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="w-6 h-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="bg-ink border-white/10 w-80">
              {/* Mobile nav links with stagger animation */}
              <nav className="flex flex-col gap-6 mt-12">
                {links.map((link, i) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08, ...ANIMATION.spring }}
                  >
                    <Link href={link.href} className="text-2xl font-display font-extrabold uppercase text-white">
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </motion.header>
  );
}
```

### 7.3 Footer

Direct port of existing footer structure with Framer Motion scroll-reveal:

```tsx
// src/components/layout/footer.tsx
"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const footerCols = [
  { title: "Auction", links: ["Live Auctions", "Upcoming", "Sold", "Categories"] },
  { title: "Company", links: ["About", "Careers", "Press", "Blog"] },
  { title: "Support", links: ["Help Center", "Authenticity", "Shipping", "Returns"] },
  { title: "Legal", links: ["Terms", "Privacy", "Cookies", "Compliance"] },
];

export function Footer() {
  return (
    <footer className="bg-ink text-muted">
      <ScrollReveal>
        <div className="max-w-hype mx-auto px-12 pt-20 pb-10 grid grid-cols-2 md:grid-cols-5 gap-12">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1.5">
            <div className="text-cream font-display font-extrabold text-4xl mb-4">HYPE.</div>
            <p className="text-sm tracking-wide text-muted uppercase leading-relaxed max-w-xs">
              The market decides.
            </p>
          </div>

          {/* Link columns */}
          {footerCols.map((col, i) => (
            <div key={col.title}>
              <h4 className="text-cream font-display font-extrabold text-xl mb-6 tracking-tight">
                {col.title}
              </h4>
              <ul className="flex flex-col gap-4">
                {col.links.map((link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-sm tracking-wider uppercase text-muted hover:text-white transition-colors"
                    >
                      {link}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Bottom bar */}
      <div className="max-w-hype mx-auto px-12 py-8 flex justify-between items-end border-t border-white/5">
        <div className="text-muted font-display font-extrabold text-base tracking-wider">
          HYPE.
          <small className="block font-medium text-[10px] tracking-widest text-muted/60 mt-1">
            © 2024 HYPE. All rights reserved.
          </small>
        </div>
        <div className="text-[10px] tracking-widest uppercase text-muted/60">
          TERMS · PRIVACY · COOKIES
        </div>
      </div>
    </footer>
  );
}
```

### Verification

- Nav sticks on scroll with blur transition at 40px scroll threshold
- Mobile Sheet opens/closes with spring animation, no background scroll
- Footer links all have hover states
- CLS = 0 (font variables loaded in `<html>` class)

---

## 8. Phase 4 — Hero Section (Parallax + Framer Motion)

**Time estimate**: 3 hours  
**Metric target**: LCP < 2.5s, 0 CLS, parallax FPS ≥ 55

This is the most complex section. The hero has three columns:
1. **Left**: "Bid. Win. Repeat." headline with stagger reveal
2. **Center**: Sneaker product visual with parallax depth
3. **Right**: Live auction card with glass effect + animated counter

### 8.1 ScrollReveal — Reusable Reveal on Scroll

```tsx
// src/components/shared/scroll-reveal.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ANIMATION } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, margin: "-80px" });

  const directionMap = {
    up: { y: 40 },
    down: { y: -40 },
    left: { x: 40 },
    right: { x: -40 },
  };

  return (
    <motion.div
      ref={ref}
      className={cn(className)}
      initial={{ opacity: 0, ...directionMap[direction] }}
      animate={isInView ? { opacity: 1, x: 0, y: 0 } : {}}
      transition={{
        duration: ANIMATION.duration.cinematic,
        delay,
        ease: ANIMATION.ease.out,
      }}
    >
      {children}
    </motion.div>
  );
}
```

### 8.2 Hero Section

```tsx
// src/components/home/hero.tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight, Bookmark } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { GlassCard } from "@/components/shared/glass-card";
import { Timer } from "@/components/shared/timer";
import { ANIMATION } from "@/lib/constants";

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  // Parallax layers — different speeds for depth illusion
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const productY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "8%"]);
  const cardY = useTransform(scrollYProgress, [0, 1], ["0%", "5%"]);

  // Hero exit opacity as user scrolls past
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <motion.section
      ref={sectionRef}
      className="relative bg-sand-hero overflow-hidden"
      style={{ opacity: heroOpacity }}
    >
      <div className="max-w-hype mx-auto px-12 pt-16 pb-10 grid grid-cols-1 lg:grid-cols-[1.15fr_0.95fr_0.9fr] gap-6 items-center">

        {/* LEFT — Headline */}
        <motion.div style={{ y: textY }}>
          <ScrollReveal>
            <h1 className="font-display font-extrabold text-[clamp(64px,7.4vw,116px)] leading-[0.84] tracking-[-0.045em] uppercase">
              {"Bid.".split("").map((char, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.04, ...ANIMATION.spring }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
              <br />
              {"Win.".split("").map((char, i) => (
                <motion.span
                  key={i + 5}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 + i * 0.04, ...ANIMATION.spring }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
              <br />
              {"Repeat.".split("").map((char, i) => (
                <motion.span
                  key={i + 10}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 + i * 0.04, ...ANIMATION.spring }}
                  className="inline-block"
                >
                  {char}
                </motion.span>
              ))}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <p className="text-lg text-ink/60 mt-6 max-w-[340px] leading-relaxed">
              India&apos;s first live auction marketplace for hype culture.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.5}>
            <div className="flex gap-3.5 mt-8 flex-wrap">
              <Button className="bg-ink text-white rounded-full px-7 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-black transition-colors">
                BROWSE AUCTIONS <ArrowUpRight className="w-4 h-4 ml-1" />
              </Button>
              <Button variant="outline" className="rounded-full px-7 py-4 text-sm font-semibold tracking-wider uppercase border-ink hover:bg-ink hover:text-white transition-colors">
                SELL WITH US
              </Button>
            </div>
          </ScrollReveal>
        </motion.div>

        {/* CENTER — Product Visual (Parallax) */}
        <motion.div
          className="relative h-[520px] flex items-end justify-center"
          style={{ y: productY }}
        >
          {/* Rock base */}
          <div className="absolute bottom-0 left-1/2 -translate-x-[46%] w-[62%] h-40 bg-gradient-to-br from-sand to-[#6f5b41] rounded-[48%_42%_30%_36%/60%_60%_40%_40%] shadow-[0_30px_40px_-18px_rgba(60,45,25,0.45)]" />

          {/* Shoe placeholder */}
          <motion.div
            className="absolute top-[6%] left-1/2 -translate-x-1/2 -rotate-[14deg] w-[78%] h-[62%] rounded-[30%_38%_42%_30%] bg-[radial-gradient(60%_60%_at_50%_40%,#cdb89a,#7c6a52_70%,#4a3d2c)] shadow-[0_40px_60px_-20px_rgba(60,45,25,0.5)] flex items-center justify-center"
            whileHover={{ scale: 1.03, rotate: -10 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
          >
            <span className="font-display font-extrabold text-sm tracking-widest text-cream/90 text-center">
              AIR JORDAN 1<br />MOCHA
            </span>
          </motion.div>
        </motion.div>

        {/* RIGHT — Live Auction Card (Glass) */}
        <motion.div style={{ y: cardY }}>
          <ScrollReveal delay={0.4} direction="right">
            <GlassCard variant="light" className="p-6">
              <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.14em] uppercase text-ink/60">
                <span className="w-2 h-2 rounded-full bg-hype-red animate-pulse" />
                Live Auction
              </div>

              <h2 className="font-display font-extrabold text-[34px] leading-[0.98] tracking-tight uppercase mt-3.5">
                Air Jordan 1<br />
                <span className="text-[28px]">Retro High OG &lsquo;Mocha&rsquo;</span>
              </h2>

              <div className="text-[11px] tracking-[0.16em] uppercase text-muted font-semibold mt-5">
                Current Bid
              </div>

              <div className="flex items-start gap-2 mt-1">
                <motion.b
                  className="font-display font-extrabold text-[50px] tracking-tight leading-none"
                  key={18500} // Change key on bid update to trigger animation
                  initial={{ scale: 1.1, color: "#c9a25e" }}
                  animate={{ scale: 1, color: "#0c0b0a" }}
                  transition={{ ...ANIMATION.spring }}
                >
                  ₹18,500
                </motion.b>
                <ArrowUpRight className="w-5 h-5 mt-2" />
              </div>

              <div className="text-hype-gold font-semibold text-sm mt-0.5">
                + ₹300
              </div>

              <div className="mt-5">
                <div className="text-[11px] tracking-[0.16em] uppercase text-muted font-semibold">
                  Ends In
                </div>
                <Timer hours={2} minutes={14} seconds={33} />
              </div>

              <div className="flex gap-3 mt-6">
                <Button className="bg-ink text-white rounded-full px-7 py-4 text-sm font-semibold tracking-wider uppercase hover:bg-black">
                  PLACE BID <ArrowUpRight className="w-4 h-4 ml-1" />
                </Button>
                <button className="w-[52px] h-[52px] rounded-[13px] border-[1.5px] border-ink flex items-center justify-center hover:bg-ink hover:text-white transition-colors">
                  <Bookmark className="w-5 h-5" />
                </button>
              </div>
            </GlassCard>
          </ScrollReveal>
        </motion.div>
      </div>
    </motion.section>
  );
}
```

### 8.3 GlassCard — Reusable Glassmorphism Primitive

```tsx
// src/components/shared/glass-card.tsx
"use client";

import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  variant?: "light" | "dark" | "neutral";
  shine?: boolean;
  noise?: boolean;
  className?: string;
}

export function GlassCard({
  children,
  variant = "light",
  shine = true,
  noise = false,
  className,
}: GlassCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-hype",
        variant === "light" && "glass-light",
        variant === "dark" && "glass-dark",
        variant === "neutral" && "glass",
        shine && "glass-shine",
        noise && "noise-overlay",
        className
      )}
    >
      {children}
    </div>
  );
}
```

### 8.4 Timer Component

```tsx
// src/components/shared/timer.tsx
"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

interface TimerProps {
  hours: number;
  minutes: number;
  seconds: number;
}

export function Timer({ hours: initH, minutes: initM, seconds: initS }: TimerProps) {
  const [total, setTotal] = useState(initH * 3600 + initM * 60 + initS);

  useEffect(() => {
    const id = setInterval(() => setTotal((t) => Math.max(0, t - 1)), 1000);
    return () => clearInterval(id);
  }, []);

  const h = Math.floor(total / 3600);
  const m = Math.floor((total % 3600) / 60);
  const s = total % 60;

  const pad = (n: number) => String(n).padStart(2, "0");

  return (
    <div className="flex items-start gap-3.5 mt-1.5 font-display font-extrabold">
      <div className="flex items-center gap-3.5">
        <motion.span
          key={h}
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-[40px] tracking-tight"
        >
          {pad(h)}
        </motion.span>
        <span className="text-[36px]">:</span>
        <motion.span
          key={m}
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-[40px] tracking-tight"
        >
          {pad(m)}
        </motion.span>
        <span className="text-[36px]">:</span>
        <motion.span
          key={s}
          initial={{ y: -8, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-[40px] tracking-tight"
        >
          {pad(s)}
        </motion.span>
      </div>
      <div className="flex gap-9 text-[11px] tracking-[0.16em] text-muted font-semibold mt-[6px]">
        <span>HR</span>
        <span>MIN</span>
        <span>SEC</span>
      </div>
    </div>
  );
}
```

---

## 9. Phase 5 — Stats Bar (Counter Animation)

**Time estimate**: 45 min  
**Metric target**: Counter animation starts on intersection, 0 CLS

### Animated Counter Hook

```tsx
// src/hooks/use-counter-animation.ts
"use client";

import { useEffect, useState } from "react";

export function useCounterAnimation(
  target: number,
  duration: number = 2000,
  isActive: boolean = false
): number {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isActive) return;

    let start = 0;
    const increment = target / (duration / 16);
    const step = () => {
      start += increment;
      if (start >= target) {
        setCount(target);
        return;
      }
      setCount(Math.floor(start));
      requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [isActive, target, duration]);

  return count;
}
```

### Stats Bar Component

```tsx
// src/components/home/stats-bar.tsx
"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Activity, Users, Database, TrendingUp } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { useCounterAnimation } from "@/hooks/use-counter-animation";
import { ANIMATION } from "@/lib/constants";

const stats = [
  { icon: Activity, value: 12, suffix: "", label: "Live Auctions" },
  { icon: Users, value: 1200, suffix: "K", format: "1.2K", label: "Users Watching" },
  { icon: Database, value: 24000000, suffix: "CR+", format: "₹2.4 CR+", label: "Total Volume" },
];

export function StatsBar() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="bg-sand-hero border-t border-line">
      <div className="max-w-hype mx-auto px-12 py-8 flex items-center flex-wrap gap-6">
        {stats.map((stat, i) => (
          <ScrollReveal key={stat.label} delay={i * ANIMATION.stagger.stats}>
            <div className="flex items-center gap-4 px-12 border-r border-line first:pl-0 first:border-l-0">
              <stat.icon className="w-8 h-8 opacity-80" strokeWidth={2} />
              <div>
                <b className="font-display font-extrabold text-3xl block leading-none">
                  {stat.format || (
                    <CounterAnimation target={stat.value} isActive={isInView} />
                  )}
                  {stat.suffix}
                </b>
                <span className="text-xs tracking-[0.13em] uppercase text-muted font-semibold">
                  {stat.label}
                </span>
              </div>
            </div>
          </ScrollReveal>
        ))}

        {/* Market Pulse */}
        <Link
          href="#"
          className="ml-auto flex items-center gap-3 font-display font-extrabold text-lg tracking-wider uppercase"
        >
          <TrendingUp className="w-5 h-5" strokeWidth={2} />
          Market Pulse
          <ArrowRight className="w-5 h-5" strokeWidth={2} />
        </Link>
      </div>
    </section>
  );
}
```

---

## 10. Phase 6 — Market Cards Grid (Glassmorphism + Skeleton)

**Time estimate**: 2.5 hours  
**Metric target**: Card hover < 16ms paint, skeleton→content 0 CLS, 60fps hover

### 10.1 Auction Card with Glass + Hover

```tsx
// src/components/home/market-card.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Clock, Heart } from "lucide-react";
import { GlassCard } from "@/components/shared/glass-card";
import { Skeleton } from "@/components/ui/skeleton";
import { ANIMATION } from "@/lib/constants";
import { cn } from "@/lib/utils";

interface MarketCardProps {
  name: string;
  currentBid: number;
  endTime: string;
  bids: number;
  isLive?: boolean;
  image?: string;
  isLoading?: boolean;
}

export function MarketCard({
  name,
  currentBid,
  endTime,
  bids,
  isLive = false,
  image,
  isLoading = false,
}: MarketCardProps) {
  const [isSaved, setIsSaved] = useState(false);

  if (isLoading) {
    return <MarketCardSkeleton />;
  }

  return (
    <motion.div
      whileHover={{ y: -6 }}
      transition={{ type: "spring", stiffness: 400, damping: 30 }}
    >
      <GlassCard variant="dark" shine noise className="group cursor-pointer">
        {/* Image area */}
        <div className="relative bg-cream rounded-xl aspect-[1/0.92] flex items-center justify-center overflow-hidden">
          {image ? (
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
          ) : (
            <span className="font-display font-bold text-xs text-sand/60 text-center tracking-wider px-2">
              {name}
            </span>
          )}

          {isLive && (
            <span className="absolute top-2.5 right-2.5 bg-cream text-ink text-[10px] font-bold tracking-[0.1em] px-2 py-1 rounded-md">
              LIVE
            </span>
          )}

          {/* Hover save button */}
          <motion.button
            className="absolute top-2.5 left-2.5 opacity-0 group-hover:opacity-100 transition-opacity"
            onClick={() => setIsSaved(!isSaved)}
            whileTap={{ scale: 0.85 }}
          >
            <Heart
              className={cn(
                "w-5 h-5 drop-shadow-md",
                isSaved ? "fill-hype-red text-hype-red" : "text-white"
              )}
            />
          </motion.button>
        </div>

        {/* Info */}
        <div className="p-0 pt-3.5">
          <h3 className="font-semibold text-sm">{name}</h3>
          <div className="flex items-center justify-between font-display font-extrabold mt-2">
            <span className="text-lg">₹{currentBid.toLocaleString()}</span>
            <span className="text-base text-hype-gold flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {endTime}
            </span>
          </div>
          <div className="flex justify-between text-[11px] text-muted/50 pt-2.5 mt-2.5 border-t border-white/10 tracking-wider">
            <span>{bids} bids</span>
            <span>Ending soon</span>
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
```

### 10.2 Skeleton Card — Zero Layout Shift

```tsx
// src/components/home/market-card.tsx (continued)

export function MarketCardSkeleton() {
  return (
    <div className="rounded-hype overflow-hidden">
      {/* Image skeleton */}
      <Skeleton className="aspect-[1/0.92] rounded-xl bg-white/5" />

      {/* Text skeleton */}
      <div className="pt-3.5 space-y-3">
        <Skeleton className="h-4 w-3/4 bg-white/5" />
        <div className="flex justify-between">
          <Skeleton className="h-6 w-24 bg-white/5" />
          <Skeleton className="h-5 w-16 bg-white/5" />
        </div>
        <Skeleton className="h-px w-full bg-white/5" />
      </div>
    </div>
  );
}
```

### 10.3 Market Grid with Suspense

```tsx
// src/components/home/market-grid.tsx
"use client";

import { Suspense } from "react";
import { motion } from "framer-motion";
import { MarketCard, MarketCardSkeleton } from "./market-card";
import { FilterBar } from "./filter-bar";
import { ANIMATION } from "@/lib/constants";

// Mock data — replace with SWR fetch
const auctions = [
  { id: 1, name: "Nike Dunk Low Panda", currentBid: 14200, endTime: "02:14:33", bids: 18, isLive: true },
  { id: 2, name: "Off-White AJ1 Chicago", currentBid: 83200, endTime: "01:45:12", bids: 42, isLive: true },
  // ... etc
];

export function MarketGrid() {
  return (
    <section className="bg-ink text-white py-8">
      <FilterBar />

      <motion.div
        className="max-w-hype mx-auto px-12 pt-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4.5"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: {},
          visible: { transition: { staggerChildren: ANIMATION.stagger.cards } },
        }}
      >
        <Suspense
          fallback={Array.from({ length: 6 }).map((_, i) => (
            <MarketCardSkeleton key={i} />
          ))}
        >
          {auctions.map((auction) => (
            <motion.div
              key={auction.id}
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
              transition={{ ...ANIMATION.spring }}
            >
              <MarketCard {...auction} />
            </motion.div>
          ))}
        </Suspense>
      </motion.div>
    </section>
  );
}
```

---

## 11. Phase 7 — How It Works (Scrollytelling)

**Time estimate**: 1.5 hours  
**Metric target**: Step reveals on scroll, FPS ≥ 55 during scroll

Each step reveals as user scrolls into view, with connector arrows drawing in.

```tsx
// src/components/home/how-it-works.tsx
"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ScrollReveal } from "@/components/shared/scroll-reveal";
import { ANIMATION } from "@/lib/constants";

const steps = [
  {
    num: "01",
    title: "List",
    desc: "List your authentic item in minutes.",
    icon: "clipboard", // Use lucide icon
  },
  {
    num: "02",
    title: "Bid",
    desc: "Real-time bidding decides the price.",
    icon: "gavel",
    big: true,
  },
  {
    num: "03",
    title: "Own",
    desc: "Highest bid wins. We authenticate & deliver.",
    icon: "package",
  },
];

export function HowItWorks() {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Arrow draw progress
  const arrowProgress1 = useTransform(scrollYProgress, [0.2, 0.4], [0, 1]);
  const arrowProgress2 = useTransform(scrollYProgress, [0.35, 0.55], [0, 1]);

  return (
    <section ref={sectionRef} className="bg-cream py-16 md:py-20">
      <ScrollReveal>
        <h2 className="font-display font-extrabold text-[34px] max-w-hype mx-auto px-12 tracking-tight">
          HOW IT WORKS
        </h2>
      </ScrollReveal>

      <div className="max-w-hype mx-auto px-12 mt-11 flex items-center gap-2 flex-wrap">
        {steps.map((step, i) => (
          <ScrollReveal key={step.num} delay={i * ANIMATION.stagger.steps}>
            <div className="flex items-center gap-5.5">
              {/* Circle icon */}
              <div
                className={`flex items-center justify-center rounded-full border-[1.5px] border-ink/40 ${
                  step.big ? "w-[104px] h-[104px]" : "w-[78px] h-[78px]"
                }`}
              >
                {/* Lucide icon here */}
                <span className="text-2xl font-display font-extrabold">{step.num[0]}</span>
              </div>

              <div>
                <div className="font-display font-extrabold text-3xl leading-none">{step.num}</div>
                <div className="text-[13px] tracking-[0.16em] uppercase font-bold mt-0.5">
                  {step.title}
                </div>
                <p className="text-sm text-muted max-w-[160px] mt-1.5 leading-snug">
                  {step.desc}
                </p>
              </div>
            </div>

            {/* Arrow between steps */}
            {i < steps.length - 1 && (
              <div className="flex-1 flex justify-center text-muted/40 px-2">
                <svg width="60" height="20" viewBox="0 0 60 20" className="w-full max-w-[80px]">
                  <motion.path
                    d="M0 10h54M48 4l8 6-8 6"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: ANIMATION.ease.out }}
                  />
                </svg>
              </div>
            )}
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
```

---

## 12. Phase 8 — Market Moves Ticker

**Time estimate**: 45 min

Infinite horizontal scroll ticker using CSS animation + Framer Motion for entry.

```tsx
// src/components/home/market-moves.tsx
"use client";

import { Zap, ArrowRight } from "lucide-react";
import Link from "next/link";

const items = [
  "Nike Dunk Low sold for ₹19,200",
  "Yeezy 350 Beluga highest bid ₹25,500",
  "Supreme Tee sold for ₹8,500",
  "Off-White Air Jordan 1 new bid ₹83,200",
];

export function MarketMoves() {
  return (
    <section className="bg-cream border-t border-line py-5.5">
      <div className="max-w-hype mx-auto px-12 flex items-center gap-5 text-sm">
        <span className="flex items-center gap-2.5 font-display font-extrabold text-sm tracking-wider uppercase flex-none">
          <Zap className="w-4 h-4 text-hype-gold fill-hype-gold" />
          MARKET MOVES
        </span>

        {/* Ticker — duplicated for seamless loop */}
        <div className="flex-1 overflow-hidden">
          <div className="flex items-center gap-4.5 text-ink/50 whitespace-nowrap animate-ticker">
            {[...items, ...items].map((item, i) => (
              <span key={i}>
                {item}
                <span className="opacity-40 mx-2">•</span>
              </span>
            ))}
          </div>
        </div>

        <Link
          href="#"
          className="flex-none font-display font-extrabold text-[13px] tracking-wider uppercase flex items-center gap-2.5 pl-6 border-l border-line"
        >
          VIEW MARKET
          <ArrowRight className="w-5 h-3.5" strokeWidth={1.8} />
        </Link>
      </div>
    </section>
  );
}
```

---

## 13. Phase 9 — Stay Ahead CTA

**Time estimate**: 30 min

Dark section with email input. Glassmorphism input field.

```tsx
// src/components/home/stay-ahead.tsx
"use client";

import { ArrowRight } from "lucide-react";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function StayAhead() {
  return (
    <section className="bg-ink text-white py-16">
      <ScrollReveal>
        <div className="max-w-hype mx-auto px-12 flex items-center justify-between gap-10 flex-wrap">
          <div>
            <h2 className="font-display font-extrabold text-4xl tracking-tight">
              STAY AHEAD OF THE DROP.
            </h2>
            <p className="text-muted text-base mt-2">
              Get updates on exclusive drops and live auctions.
            </p>
          </div>

          <form className="flex w-[560px] max-w-full" onSubmit={(e) => e.preventDefault()}>
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-transparent border border-white/30 border-r-0 text-white px-5.5 py-4.5 text-base focus:outline-none focus:border-white/60 transition-colors placeholder:text-muted font-display"
            />
            <button
              type="submit"
              className="bg-cream text-ink w-16 flex items-center justify-center hover:bg-white transition-colors"
            >
              <ArrowRight className="w-5.5 h-4.5" strokeWidth={1.8} />
            </button>
          </form>
        </div>
      </ScrollReveal>
    </section>
  );
}
```

---

## 14. Phase 10 — Shop Page

**Time estimate**: 2 hours

Port `shop.html` with:
- Shadcn `Select` for filters (Category, Size, Sort)
- Product cards with glass hover effect
- `Skeleton` grid for loading state
- Parallax category headers

Structure:

```
/shop/page.tsx
  - NavMarketplace
  - Breadcrumb (Home > Shop)
  - Category parallax headers
  - Product grid (6-col desktop, 3-col tablet, 2-col mobile)
  - Footer
```

### Key Patterns

- **Filter selection**: Shadcn `Select` + URL search params (Next.js `searchParams`)
- **Product card**: Reuse `GlassCard` with `whileHover={{ scale: 1.03 }}`
- **Load more**: Button at bottom, not infinite scroll (preserves scroll position better with Lenis)
- **Skeleton**: Same `aspect-ratio` as product cards, `Skeleton` component from Shadcn

---

## 15. Phase 11 — Live Auctions Page

**Time estimate**: 2 hours

Port `live-auctions.html`:
- Real-time bid counter animation
- "LIVE" badge with pulse
- Countdown timer per card
- WebSocket-ready structure (mock for now, SWR for data)

Structure:

```
/live-auctions/page.tsx
  - NavMarketplace
  - Hero strip (smaller than home hero)
  - Filter bar (Status: Live, Category, Price)
  - Auction cards grid
  - Footer
```

---

## 16. Phase 12 — Sell With Us Page

**Time estimate**: 1.5 hours

Port `sell-with-us.html`:
- Multi-step form with Shadcn components
- Step indicator with Framer Motion `layoutId` for active step
- Image upload drag-and-drop zone
- Glassmorphism info cards for seller benefits

---

## 17. Phase 13 — Dashboard Pages

**Time estimate**: 3 hours

Port `orders.html`, `payouts.html`, `create-listing.html`, `create-listing-details.html`, `create-listing-size.html`:

### Dashboard Layout

```tsx
// src/app/dashboard/layout.tsx
import { Sidebar } from "@/components/layout/sidebar";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-sand">
      <Sidebar />
      <main className="flex-1 p-8 max-w-[calc(1500px-300px)]">
        {children}
      </main>
    </div>
  );
}
```

### Sidebar

Port `sidebar.js` to React component with:
- Framer Motion `AnimatePresence` for active link indicator
- Glassmorphism gradient emboss (the existing `.side__emboss` effect)
- Responsive: Shadcn `Sheet` on mobile

### Data Tables
- Shadcn `Table` component
- Sortable columns with `Button` header
- Status badges (`badge--green`, `badge--amber`, etc.)
- Pagination with Framer Motion page transitions

---

## 18. Phase 14 — Listing Detail Page

**Time estimate**: 2 hours

Port `create-listing-details.html`:

- Product image carousel (Framer Motion `AnimatePresence` for slide transitions)
- Glassmorphism bid card sidebar
- Sticky bid panel on scroll (Framer Motion `layout` animation)
- Breadcrumb navigation
- Similar items grid at bottom

### Image Carousel Pattern

```tsx
// Reusable carousel with Framer Motion
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ImageCarousel({ images }: { images: string[] }) {
  const [current, setCurrent] = useState(0);

  return (
    <div className="relative aspect-square overflow-hidden rounded-hype bg-cream">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt="Product"
          className="w-full h-full object-cover"
          initial={{ opacity: 0, scale: 1.05 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
        />
      </AnimatePresence>

      {/* Dots */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current ? "bg-ink" : "bg-ink/30"
            }`}
          />
        ))}
      </div>
    </div>
  );
}
```

---

## 19. Performance Budget & Metrics

### Core Web Vitals Targets

| Metric | Target | Measurement |
|---|---|---|
| **LCP** (Largest Contentful Paint) | ≤ 2.5s | Hero image + headline font paint |
| **INP** (Interaction to Next Paint) | ≤ 100ms | Button click → visual response |
| **CLS** (Cumulative Layout Shift) | ≤ 0.05 | Font swap, image load, skeleton→content |
| **TTFB** | ≤ 800ms | First byte (Vercel edge) |
| **FCP** | ≤ 1.2s | First content paint |

### Animation Performance

| Metric | Target | Tool |
|---|---|---|
| Scroll FPS | ≥ 55fps | Chrome DevTools Performance |
| Hover paint time | ≤ 16ms (1 frame) | Chrome DevTools Rendering |
| Lenis scroll jank | 0 dropped frames | `PerformanceObserver` |
| Motion reduce | All animations respect `prefers-reduced-motion` | CSS `@media` |
| Bundle — framer-motion | ≤ 45KB gzipped | `next build` analyzer |
| Bundle — total JS | ≤ 200KB gzipped first load | `next build` analyzer |

### Responsive Breakpoints

| Breakpoint | Grid Columns | Card Size | Nav |
|---|---|---|---|
| ≥ 1536px (2xl) | 6 columns | Full | Desktop |
| 1024–1535px (lg-xl) | 3–4 columns | Compact | Desktop |
| 768–1023px (md) | 3 columns | Compact | Desktop + Sheet |
| 640–767px (sm) | 2 columns | Small | Sheet only |
| < 640px (xs) | 2 columns | Stacked | Sheet only |

### Accessibility

| Requirement | Implementation |
|---|---|
| Focus visible | Tailwind `ring` on all interactive elements |
| Reduced motion | `useReducedMotion()` hook, skip transforms |
| Screen reader | `aria-label` on icon buttons, `aria-live` on bid counters |
| Color contrast | Ink on cream passes WCAG AA (ratio ≥ 4.5:1) |
| Keyboard nav | All interactive elements Tab-reachable |

---

## 20. Reference Projects

Study these for pattern extraction (NOT copy):

| Project | What to Study | URL |
|---|---|---|
| **Gucci.com** | Hero parallax, product hover scaling, cursor effect | gucci.com |
| **Dior.com** | Scrollytelling sections, full-bleed imagery | dior.com |
| **Aesop.com** | Minimal typography animation, Lenis scroll feel | aesop.com |
| **Linear.app** | Glassmorphism cards, spring physics | linear.app |
| **Vercel.com** | Dark mode glass, smooth page transitions | vercel.com |
| **Stripe.com** | Gradient mesh backgrounds, counter animations | stripe.com |
| **Apple.com** | Parallax product showcases, scroll-linked video | apple.com |
| **Lenis demos** | Scroll configuration, iOS testing | github.com/darkroomengineering/lenis |
| **Framer Motion docs** | `useScroll`, `useTransform`, `layoutId` | framer.com/motion |
| **Shadcn UI** | Component patterns, theming, `cn()` | ui.shadcn.com |
| **Aceternity UI** | Glassmorphism card patterns, animated tooltips | ui.aceternity.com |

### Key Patterns Extracted

1. **Gucci parallax**: Products scale 1.0→1.05 on hover with `transition: transform 0.4s cubic-bezier(0.16,1,0.3,1)`. Parallax offset = 15% of scroll distance.
2. **Dior scrollytelling**: Text fades in at scroll milestone, stays pinned for 200vh, then unpins. Use `position: sticky` + scroll progress.
3. **Aesop Lenis**: `duration: 1.2`, `easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t))`. No `scroll-behavior: smooth` in CSS.
4. **Linear glass**: `backdrop-filter: blur(16px) saturate(180%)`, `border: 1px solid rgba(255,255,255,0.1)`, subtle gradient shine overlay.
5. **Stripe counter**: Easing function for number roll: `easeOutExpo` for fast start, slow finish.
6. **Apple product parallax**: `transform: translateY(calc(var(--scroll-progress) * -15%))` on product image, counter movement on text.

---

## 21. Checkpoint & QA Protocol

### After Each Phase

1. **`npm run build`** — Zero TypeScript errors
2. **`npm run dev`** — Visual check in Chrome
3. **Mobile check** — Chrome DevTools responsive mode (375px, 768px, 1440px)
4. **Performance check** — DevTools Performance tab, record scroll, check for jank
5. **Keyboard check** — Tab through all interactive elements
6. **Reduced motion** — Toggle `prefers-reduced-motion` in DevTools, verify animations stop

### After All Phases Complete

1. **Lighthouse** — Score ≥ 90 for Performance, Accessibility, Best Practices
2. **`next build` analyzer** — Verify JS bundle ≤ 200KB gzipped first load
3. **Real device testing** — iPhone Safari, Android Chrome, Desktop Firefox
4. **Lenis scroll test** — Navigate between pages, verify smooth scroll persists
5. **CLS test** — Load page on slow 3G throttle in DevTools, measure CLS
6. **Dark mode** — Future: verify glassmorphism works in both themes

### Git Checkpoints

```bash
# After scaffolding
git add . && git commit -m "feat: Next.js 14 scaffold with Tailwind + Shadcn"

# After design system
git commit -m "feat: design system tokens, glassmorphism utilities, font setup"

# After Lenis
git commit -m "feat: Lenis smooth scroll provider + hooks"

# After layout
git commit -m "feat: nav + footer layout shell with glassmorphism nav"

# After hero
git commit -m "feat: hero section with parallax + Framer Motion"

# ... etc for each phase
```

---

## Execution Order Summary

| # | Phase | Time | Depends On |
|---|---|---|---|
| 0 | Scaffold Next.js project | 20 min | — |
| 1 | Design system + tokens | 1 hr | Phase 0 |
| 2 | Lenis provider + hooks | 30 min | Phase 0 |
| 3 | Layout (Nav + Footer) | 1.5 hr | Phase 1, 2 |
| 4 | Hero section | 3 hr | Phase 1, 2, 3 |
| 5 | Stats bar | 45 min | Phase 1 |
| 6 | Market cards + glassmorphism + skeleton | 2.5 hr | Phase 1, 3 |
| 7 | How it works (scrollytelling) | 1.5 hr | Phase 2 |
| 8 | Market moves ticker | 45 min | Phase 1 |
| 9 | Stay ahead CTA | 30 min | Phase 1, 3 |
| 10 | Shop page | 2 hr | Phase 6 |
| 11 | Live auctions page | 2 hr | Phase 6 |
| 12 | Sell with us page | 1.5 hr | Phase 1, 3 |
| 13 | Dashboard pages | 3 hr | Phase 1, 3 |
| 14 | Listing detail page | 2 hr | Phase 6, 13 |
| — | **Total** | **~23 hr** | — |

---

## Quick-Start Command Sequence

```bash
# Phase 0
npx create-next-app@latest hype-next --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --use-npm
cd hype-next
npm install framer-motion lenis lucide-react clsx tailwind-merge class-variance-authority swr
npx shadcn-ui@latest init
npx shadcn-ui@latest add button card skeleton sheet dialog badge separator
npm install -D prettier prettier-plugin-tailwindcss

# Phase 1: Create files → tailwind.config.ts, globals.css, fonts.ts, constants.ts
# Phase 2: Create → lenis-provider.tsx, use-lenis.ts, use-scroll-progress.ts, use-parallax.ts
# Phase 3: Create → nav-marketplace.tsx, footer.tsx, update layout.tsx
# Phase 4: Create → hero.tsx, glass-card.tsx, timer.tsx, scroll-reveal.tsx
# Phase 5: Create → stats-bar.tsx, animated-counter.tsx, use-counter-animation.ts
# Phase 6: Create → market-card.tsx, market-grid.tsx, filter-bar.tsx
# Phase 7: Create → how-it-works.tsx
# Phase 8: Create → market-moves.tsx
# Phase 9: Create → stay-ahead.tsx

# Verify
npm run build
npm run dev
```

---

*This plan maps every existing HYPE HTML page to a Next.js component tree with exact Framer Motion patterns, glassmorphism tokens, Lenis scroll config, Shadcn UI components, and performance budgets. Execute phase by phase, commit after each, and verify metrics at every checkpoint.*