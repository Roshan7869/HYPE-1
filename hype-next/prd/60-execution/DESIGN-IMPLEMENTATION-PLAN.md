# HYPE — Design Implementation Plan

**Version:** 1.0 — June 9, 2026
**Stack:** Next.js 14 + Tailwind + framer-motion + lenis + recharts + SWR
**Source:** /home/roshan/Desktop/HYPE-1 (1)/hype-next/
**Master PRDs:** /home/roshan/Music/HYPE-1 (1)/prd/ (32 files)
**Canonical Plan:** /home/roshan/Desktop/HYPE-1 (1)/docs/HYPE-NEXTJS-IMPLEMENTATION-PLAN.md (21 phases)

---

## Table of Contents

1. [North Star & 3-Click Promise](#1-north-star--3-click-promise)
2. [Design System — Bone + Champagne](#2-design-system--bone--champagne)
3. [PRD-to-Code Mapping (32 pages)](#3-prd-to-code-mapping)
4. [Chrome Unification Plan](#4-chrome-unification-plan)
5. [API Route Spec (40 endpoints)](#5-api-route-spec)
6. [Build Order & Execution Phases](#6-build-order--execution-phases)
7. [Critical Audit Issues (37 items)](#7-critical-audit-issues)
8. [Checkout & Payment Flow](#8-checkout--payment-flow)
9. [Seller Dashboard Wizard](#9-seller-dashboard-wizard)
10. [Performance Budgets](#10-performance-budgets)

---

## 1. North Star & 3-Click Promise

### The vision
HYPE is India's first live auction marketplace for hype culture — sneakers, streetwear, collectibles. Every pixel whispers *curated*; every interaction feels *inevitable*.

### The 3–4 click buyer journey

```
CLICK 1  Home (/)                       — see live auctions on hero, tap card
CLICK 2  Auction Detail (/live-auctions/[slug])
                                        — tap "Place Bid" or "Buy It Now"
CLICK 3  Bid Panel (inline)  OR  Cart (/cart)
                                        — confirm amount, tap Place Bid
CLICK 4  Checkout (/checkout)           — address (saved) + UPI + Place Order
```

Total: **3 clicks** for bid, **4 clicks** for Buy It Now. No login wall for browsing.

### Brand positioning
| Tier | Brands | Lesson |
|------|--------|--------|
| Aspirational luxury | Hermès, Gucci, Bottega Veneta | Restraint. One accent colour. Whitespace as a feature. |
| Modern minimal | Apple, Aēsop, Muji | Functional. No decoration. Each element does one job. |
| Curated commerce | Christie's, Sotheby's, 1stDibs | Each item is a story. |
| Editorial tech | Stripe, Linear, Vercel | Calm interfaces. Confident typography. |
| Indian street culture | SneakerLaundry, VegNonVeg | Cultural fluency. Don't over-explain. |

### Success metrics (90-day)
- Visit-to-bid: 3–4 clicks (was ~8)
- Visit-to-checkout: < 4 min (was ~12 min)
- Mobile bounce: < 40% (was ~62%)
- LCP P75 mobile 4G: < 1.8s (was ~3.2s)
- Lighthouse mobile: 92+ (was ~62)

---

## 2. Design System — Bone + Champagne

### Colour palette (from tailwind.config.ts)

```
ink         #0c0b0a    — primary text
ink-soft    #16140f    — secondary text
cream       #f4eee4    — page background
cream-2     #faf6f0    — card background
cream-3     #efe7da    — subtle contrast
sand        #d8ccba    — borders, muted elements
sand-hero   #e7ddcd    — hero section bg
shop-bg     #f7e6d8    — shop page distinct bg
hype-gold   #c9a25e    — accent / ring / highlight

hype-green      #bdecc9  — success states
hype-red        #e8543b  — errors, outbid
hype-amber      #f6dca6  — warnings
hype-blue       #c9c9f6  — info
hype-pink       #f6c9d6  — featured
```

### Typography
- **Display:** Hanken Grotesk (var(--font-disp)) — headings, hero
- **Body:** Hanken Grotesk (var(--font-body)) — UI text
- **Poster:** Anton (var(--font-poster)) — price callouts, badges

### Spacing & grid
- Max width: 1500px (max-w-hype)
- Border radius: 16px (rounded-hype), 22px (rounded-hype-lg)
- Page gutter: px-4 md:px-8
- Section spacing: py-16 md:py-24

### Motion system
| Element | Animation | Trigger |
|---------|-----------|---------|
| Page transitions | fade + slide up (0.3s) | Route change |
| Auction cards | scale(1.02) + shadow | Hover |
| Bid panel | slide up from bottom | Click "Place Bid" |
| Outbid toast | slide in from right | WebSocket event |
| Live badge | pulseDot (1.4s) | Always on live items |
| Marquee | marquee (40s) | Market moves ticker |
| Skeleton shimmer | shimmer (2s) | Loading states |
| Scroll reveal | scroll-reveal | Intersection Observer |
| Glass card | backdrop-blur + border | Static + hover glow |

### Glassmorphism spec
```css
.glass-card {
  background: rgba(244, 238, 228, 0.6);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(12, 11, 10, 0.08);
  border-radius: 16px;
}
```

### Skeleton states
Every page has skeleton variants for empty/loading — placed in `/src/components/ui/skeleton.tsx`. Components should render `<Skeleton className="w-full h-[300px]" />` while data loads.

---

## 3. PRD-to-Code Mapping

### 3.1 Page route map (32 PRDs → 32 routes)

| # | PRD File | Route | Page Component | Status | Depends On |
|---|----------|-------|----------------|--------|------------|
| 00 | 00-MASTER-PRD.md | — | — | DONE | — |
| 01 | 01-HOMEPAGE.md | / | `page.tsx` | DONE | layout, nav-marketplace, footer, hero, stats-bar, market-grid, how-it-works, market-moves, stay-ahead |
| 02 | 02-SHOP.md | /shop | `shop/page.tsx` | DONE | layout, nav-marketplace, footer, shop-view |
| 03 | 03-LIVE-AUCTION-DETAIL.md | /live-auctions/[slug] | `live-auctions/[slug]/page.tsx` | PARTIAL | **Place Bid handler MISSING** |
| 04 | 04-SELL-WITH-US.md | /sell-with-us | `sell-with-us/page.tsx` | DONE | layout, nav-marketplace, footer, sell-sections |
| 05 | 05-DASHBOARD-CREATE-LISTING.md | /dashboard/listings/new | `dashboard/listings/new/page.tsx` | DONE | dashboard-layout, listing-stepper |
| 06 | 06-DASHBOARD-LISTING-DETAILS.md | /dashboard/listings/new/details | `dashboard/listings/new/details/page.tsx` | DONE | dashboard-layout, listing-stepper |
| 07 | 07-DASHBOARD-SELECT-SIZE.md | /dashboard/listings/new/size | `dashboard/listings/new/size/page.tsx` | DONE | dashboard-layout, listing-stepper |
| 08 | 08-DASHBOARD-ORDERS.md | /dashboard/orders | `dashboard/orders/page.tsx` | DONE | dashboard-layout, sidebar |
| 09 | 09-DASHBOARD-PAYOUTS.md | /dashboard/payouts | `dashboard/payouts/page.tsx` | DONE | dashboard-layout, sidebar |
| 10 | 10-AUTH-LOGIN.md | /login | `login/page.tsx` | DONE | layout, auth-shell |
| 11 | 11-AUTH-SIGNUP.md | /signup | `signup/page.tsx` | DONE | layout, auth-shell |
| 12 | 12-AUTH-FORGOT-PASSWORD.md | /forgot-password | `forgot-password/page.tsx` | DONE | layout, auth-shell |
| 13 | 13-AUTH-RESET-PASSWORD.md | /reset-password | `reset-password/page.tsx` | DONE | layout, auth-shell |
| 14 | 14-CART.md | /cart | `cart/page.tsx` | PARTIAL | **Wraps AuthShell (wrong chrome), hard-coded mock data** |
| 15 | 15-CHECKOUT.md | /checkout | `checkout/page.tsx` | PARTIAL | **Custom inline header, hard-coded items** |
| 16 | 16-ORDER-CONFIRMATION.md | /order/[id] | `order/[id]/page.tsx` | DONE | layout, nav-marketplace, footer |
| 17 | 17-MY-BIDS.md | /account/bids | `account/bids/page.tsx` | DONE | account-shell |
| 18 | 18-MY-ORDERS.md | /account/orders | `account/orders/page.tsx` | DONE | account-shell |
| 19 | 19-ORDER-DETAIL.md | /account/orders/[id] | `account/orders/[id]/page.tsx` | DONE | account-shell |
| 20 | 20-WISHLIST.md | /account/wishlist | `account/wishlist/page.tsx` | DONE | account-shell |
| 21 | 21-PROFILE.md | /account/profile | `account/profile/page.tsx` | DONE | account-shell |
| 22 | 22-DASHBOARD-ADD-PHOTOS.md | /dashboard/listings/new/photos | `dashboard/listings/new/photos/page.tsx` | DONE | dashboard-layout, listing-stepper |
| 23 | 23-DASHBOARD-PRICING.md | /dashboard/listings/new/pricing | `dashboard/listings/new/pricing/page.tsx` | DONE | dashboard-layout, listing-stepper |
| 24 | 24-DASHBOARD-MY-LISTINGS.md | /dashboard/listings | `dashboard/listings/page.tsx` | DONE | dashboard-layout, sidebar |
| 25 | 25-DASHBOARD-ANALYTICS.md | /dashboard/analytics | `dashboard/analytics/page.tsx` | DONE | dashboard-layout, sidebar, recharts |
| 26 | 26-DASHBOARD-SETTINGS.md | /dashboard/settings | `dashboard/settings/page.tsx` | DONE | dashboard-layout, sidebar |
| 27 | 27-TERMS.md | /terms | `terms/page.tsx` | DONE | layout, nav-marketplace, footer |
| 28 | 28-PRIVACY.md | /privacy | `privacy/page.tsx` | DONE | layout, nav-marketplace, footer |
| 29 | 29-FAQ.md | /faq | `faq/page.tsx` | DONE | layout, nav-marketplace, footer |
| 30 | 30-CONTACT.md | /contact | `contact/page.tsx` | DONE | layout, nav-marketplace, footer |
| 31 | 31-ABOUT.md | /about | `about/page.tsx` | DONE | layout, nav-marketplace, footer |
| 32 | 32-404.md | /not-found | `not-found.tsx` | DONE | layout |

### 3.2 Component inventory (34 existing components)

```
src/components/
├── account/
│   └── account-shell.tsx          — Account page wrapper
├── auction/
│   └── auction-detail.tsx         — Auction detail section
├── auth/
│   ├── otp-modal.tsx              — OTP verification modal
│   └── password-strength.tsx      — Password strength indicator
├── dashboard/
│   └── listing-stepper.tsx        — Listing wizard stepper
├── home/
│   ├── hero.tsx                   — Homepage hero section
│   ├── how-it-works.tsx           — How it works section
│   ├── market-grid.tsx            — Auction card grid
│   ├── market-moves.tsx           — Marquee ticker
│   ├── stats-bar.tsx              — Live stats bar
│   └── stay-ahead.tsx             — CTA section
├── layout/
│   ├── auth-shell.tsx             — Auth page wrapper
│   ├── breadcrumb.tsx             — Breadcrumb nav
│   ├── footer.tsx                 — Footer (duplicate — merge needed)
│   ├── nav-marketplace.tsx        — CANONICAL header (rich nav)
│   ├── sidebar.tsx                — Dashboard sidebar
│   └── site-header.tsx            — TO DELETE (superseded by nav-marketplace)
├── providers/
│   └── smooth-scroll-provider.tsx — Lenis smooth scroll
├── sell/
│   └── sell-sections.tsx          — Sell-with-us sections
├── shared/
│   ├── animated-counter.tsx       — Animated counter
│   ├── glass-card.tsx             — Glassmorphism card
│   ├── live-badge.tsx             — Live status badge
│   ├── parallax.tsx               — Parallax scroll
│   ├── scroll-reveal.tsx          — Scroll animation
│   ├── status-timeline.tsx        — Order status timeline
│   └── timer.tsx                  — Countdown timer
├── shop/
│   └── shop-view.tsx              — Shop grid/filters
└── ui/
    ├── badge.tsx                  — Badge component
    ├── button.tsx                 — CVA button system (6×4 variants)
    ├── card.tsx                   — Base card
    ├── input.tsx                  — Form input
    ├── label.tsx                  — Form label
    ├── separator.tsx              — Visual separator
    ├── skeleton.tsx               — Loading skeleton
    └── textarea.tsx               — Form textarea
```

### 3.3 Components needed (new)

| Component | Priority | Purpose |
|-----------|----------|---------|
| `shared/empty-state.tsx` | HIGH | Empty state for cart, bids, orders, wishlist |
| `shared/error-state.tsx` | HIGH | Error state with retry button |
| `shared/loading-state.tsx` | MEDIUM | Loading spinner / skeleton wrapper |
| `shared/toast.tsx` | HIGH | Toast notification system (outbid, bid won, error) |
| `auction/bid-panel.tsx` | HIGH | Inline bid dialog with amount input |
| `auction/authentication-card.tsx` | HIGH | HYPE authentication verification card |
| `auction/price-history.tsx` | MEDIUM | Price history chart via recharts |
| `checkout/address-form.tsx` | HIGH | Address input + saved addresses |
| `checkout/payment-form.tsx` | HIGH | UPI / card payment form |
| `checkout/order-summary.tsx` | HIGH | Order summary sidebar |
| `checkout/shipping-progress.tsx` | LOW | Step indicator for checkout |
| `ui/dialog.tsx` | HIGH | Modal dialog primitive |
| `ui/dropdown-menu.tsx` | MEDIUM | Dropdown menu primitive |
| `ui/tabs.tsx` | MEDIUM | Tab component for dashboard |
| `ui/table.tsx` | MEDIUM | Data table for orders/payouts |
| `ui/avatar.tsx` | LOW | User avatar with fallback |
| `ui/progress.tsx` | MEDIUM | Progress bar for listing wizard |
| `ui/select.tsx` | MEDIUM | Select dropdown |
| `ui/switch.tsx` | MEDIUM | Toggle switch |
| `ui/textarea.tsx` | LOW | (already exists in file structure) |
| `api/auth.ts` | HIGH | Auth API client (SWR hooks) |
| `api/auctions.ts` | HIGH | Auctions API client |
| `api/bids.ts` | HIGH | Bidding API client |
| `api/cart.ts` | HIGH | Cart API client |
| `api/checkout.ts` | HIGH | Checkout API client |
| `api/orders.ts` | HIGH | Orders API client |
| `api/seller.ts` | HIGH | Seller dashboard API client |
| `api/contact.ts` | MEDIUM | Contact form API client |

---

## 4. Chrome Unification Plan

### 4.1 Current state (DUPLICATE HEADERS & FOOTERS)

| Element | File | Status |
|---------|------|--------|
| Header A | `src/components/layout/site-header.tsx` | **TO DELETE** (basic, used by auth pages) |
| Header B | `src/components/layout/nav-marketplace.tsx` | **KEEP + RENAME** (rich, used by public pages) |
| Footer A | `src/components/layout/footer.tsx` (Footer) | **TO DELETE** (basic 4-col) |
| Footer B | `src/components/layout/footer.tsx` (FooterDetailed) | **KEEP + RENAME** (rich, used by home) |

### 4.2 Resolution

```
Step 1: Delete site-header.tsx
Step 2: Rename nav-marketplace.tsx → site-header.tsx (export defaults to SiteHeader)
Step 3: Delete Footer component from footer.tsx (keep only FooterDetailed)
Step 4: Rename FooterDetailed → Footer in footer.tsx
Step 5: Update all imports across 20+ page files
Step 6: Remove AuthShell from cart/page.tsx (cart is public, not auth-only)
Step 7: Replace custom inline header in checkout/page.tsx with SiteHeader
```

### 4.3 Updated layout hierarchy

```
RootLayout (src/app/layout.tsx)
  └── SmoothScrollProvider
      ├── Public pages → SiteHeader + Footer
      ├── Auth pages → SiteHeader + Footer (same, no auth-shell wrapper)
      ├── Dashboard pages → SiteHeader + Sidebar + Footer
      └── Account pages → SiteHeader + AccountShell + Footer
```

---

## 5. API Route Spec

40 endpoints across 9 resource groups — specified in `/home/roshan/Desktop/HYPE-1 (1)/hype-next/api-routes.md`.
**NONE implemented yet.** All frontend pages use mock-data.ts.

### Priority build order for API routes

| Priority | Group | Routes | Reason |
|----------|-------|--------|--------|
| P0 | Auth | POST /api/auth/register, login, google, me | Login wall needed for bidding |
| P0 | Auctions | GET /api/auctions, /api/auctions/:id | Core data for all pages |
| P1 | Bids | POST /api/bids, GET /api/bids/mine | Bid flow (audit issue #1) |
| P1 | Cart | GET /api/cart, POST/items, DELETE | Cart functionality |
| P2 | Checkout | POST /api/checkout, GET /api/checkout/summary | Checkout flow |
| P2 | Orders | GET /api/orders, /api/orders/:id | Order history |
| P3 | Contact | POST /api/contact | Contact form |
| P3 | Seller | All seller routes | Dashboard functionality |
| P4 | Payments | All payment routes | Payment integration |

### SWR hook pattern (api/*.ts)
```typescript
// src/api/auctions.ts
import useSWR from 'swr';
import { fetcher } from '@/lib/fetcher';

export function useAuctions(filter?: string) {
  return useSWR(`/api/auctions${filter ? `?${filter}` : ''}`, fetcher);
}

export function useAuction(id: string) {
  return useSWR(`/api/auctions/${id}`, fetcher);
}
```

---

## 6. Build Order & Execution Phases

Cross-referenced with `/home/roshan/Desktop/HYPE-1 (1)/docs/HYPE-NEXTJS-IMPLEMENTATION-PLAN.md` (21 phases).

### Phase 0 — Foundation (ref: plan phases 1-3)
- [ ] Unify chrome (delete site-header, rename nav-marketplace)
- [ ] Create missing UI primitives (dialog, toast, select, tabs)
- [ ] Create empty states, error states, loading states
- [ ] Create API client stubs with SWR
- **Files:** layout/*, ui/dialog.tsx, ui/toast.tsx, api/*.ts

### Phase 1 — Auction Detail + Bid Panel (ref: plan phase 4)
- [ ] Fix "Place Bid" handler in live-auctions/[slug]/page.tsx (audit issue #1)
- [ ] Create auction/bid-panel.tsx with inline bid dialog
- [ ] Create auction/authentication-card.tsx
- **Files:** live-auctions/[slug]/page.tsx, components/auction/bid-panel.tsx

### Phase 2 — Cart (ref: plan phases 5-6)
- [ ] Remove AuthShell wrapper from cart/page.tsx
- [ ] Connect cart to live auctions (remove mock data)
- [ ] Create empty state for empty cart
- **Files:** cart/page.tsx

### Phase 3 — Checkout (ref: plan phases 7-8)
- [ ] Replace custom inline header with SiteHeader
- [ ] Create address-form.tsx, payment-form.tsx, order-summary.tsx
- [ ] Connect to API (mock → live data)
- **Files:** checkout/page.tsx, components/checkout/*

### Phase 4 — Dashboard Pages (ref: plan phases 9-13)
- [ ] Verify all dashboard pages use dashboard-layout + sidebar
- [ ] Add data tables for orders/payouts
- [ ] Connect analytics to recharts with real data shape
- **Files:** dashboard/*

### Phase 5 — Auth (ref: plan phases 14-15)
- [ ] Verify auth-shell is used consistently
- [ ] Wire up API routes
- **Files:** login/*, signup/*, forgot-password/*, reset-password/*

### Phase 6 — Account Pages (ref: plan phases 16-18)
- [ ] Create empty states for bids, orders, wishlist
- [ ] Wire up API routes
- **Files:** account/*

### Phase 7 — Static Pages (ref: plan phases 19-20)
- [ ] Verify all static pages use SiteHeader + Footer
- [ ] Add FAQ accordion interaction
- **Files:** about/*, contact/*, faq/*, terms/*, privacy/*

### Phase 8 — Performance & Polish (ref: plan phase 21)
- [ ] Audit LCP, INP, CLS
- [ ] Add motion-reduce media queries
- [ ] Verify 3-click flow end-to-end
- [ ] Delete stale design refs (uploads duplicates, old prototypes)

---

## 7. Critical Audit Issues (37 items)

### P0 — BROKEN (blocks flow)

| # | Issue | File | Fix |
|---|-------|------|-----|
| 1 | "Place Bid" CTA has NO handler | `live-auctions/[slug]/page.tsx` | Wire to bid-panel.tsx |
| 2 | Cart wraps AuthShell (wrong chrome) | `cart/page.tsx` | Remove AuthShell, use SiteHeader |
| 3 | Checkout has custom inline header | `checkout/page.tsx` | Replace with SiteHeader |
| 4 | Cart uses hard-coded mock data | `cart/page.tsx` | Connect to live auctions |
| 5 | Checkout uses hard-coded ORDER_ITEMS | `checkout/page.tsx` | Connect to cart state |
| 6 | Duplicate header — site-header.tsx | `layout/site-header.tsx` | DELETE |
| 7 | Duplicate footer — Footer component | `layout/footer.tsx` (Footer) | DELETE, keep FooterDetailed |
| 8 | Desktop homepage has mouse flicker | `page.tsx` / globals.css | Add will-change hints, check lenis |

### P1 — DESIGN INCONSISTENCY (needs fix)

| # | Issue | File | Fix |
|---|-------|------|-----|
| 9 | Auction detail missing HYPE auth card | `live-auctions/[slug]/page.tsx` | Add authentication-card |
| 10 | No bid panel component | Missing | Create auction/bid-panel.tsx |
| 11 | No toast notification system | Missing | Create shared/toast.tsx |
| 12 | No empty states for any page | Multiple | Create shared/empty-state.tsx |
| 13 | No error states with retry | Multiple | Create shared/error-state.tsx |
| 14 | Cart shows "Continue" CTA when empty | `cart/page.tsx` | Add empty state |
| 15 | Dashboard listing stepper inconsistent | `dashboard/listing-stepper.tsx` | Audit all 5 wizard steps |
| 16 | Analytics page may not have real data | `dashboard/analytics/page.tsx` | Connect to recharts |
| 17 | Account pages missing empty states | `account/*/page.tsx` | Add empty-state |
| 18 | Reset-password uses placeholder text | `reset-password/page.tsx` | Complete copy |
| 19 | Login page content check needed | `login/page.tsx` | Verify OTP modal wired |
| 20 | Contact form not wired to API | `contact/page.tsx` | Add POST handler |

### P2 — DESIGN SYSTEM POLISH

| # | Issue | Fix |
|---|-------|-----|
| 21 | No dialog/overlay primitive | Create ui/dialog.tsx |
| 22 | No dropdown menu primitive | Create ui/dropdown-menu.tsx |
| 23 | No tabs component | Create ui/tabs.tsx |
| 24 | No select dropdown | Create ui/select.tsx |
| 25 | No progress bar | Create ui/progress.tsx |
| 26 | No toast system | Create shared/toast.tsx |
| 27 | No empty/error state components | Create shared/empty-state.tsx, error-state.tsx |
| 28 | Button system has 6×4 variants — audit usage | Verify all variants used |
| 29 | No motion-reduce/ prefers-reduced-motion queries | Add to globals.css |
| 30 | Skeleton shimmer uses fixed value — make prop | Update skeleton.tsx |
| 31 | Glass-card hard-codes cream — should accept `as` prop | Update glass-card.tsx |

### P3 — CLEANUP / HOUSEKEEPING

| # | Issue | Fix |
|---|-------|-----|
| 32 | stale HTML prototypes in project root | Archive or delete |
| 33 | duplicate design screenshots in uploads/ | Clean up (11 dupes) |
| 34 | no .gitignore for uploads/ | Add uploads/ to .gitignore |
| 35 | API routes spec exists but no /api/ folder | Scaffold /app/api/ |
| 36 | mock-data.ts grows stale vs PRD spec | Replace with SWR hooks |
| 37 | Two parallel PRD directories (Music/ vs hype-next/prd/) | Designate hype-next/prd/ as canonical |

---

## 8. Checkout & Payment Flow

### Current state (BROKEN)
- Cart wraps AuthShell — user can't see cart without logging in
- Checkout has custom inline header — doesn't match site chrome
- Both use hard-coded mock data
- No payment integration

### Target state
```
/cart (public, no login wall)
  → /checkout
    → Address (saved or new)
    → Payment (UPI / card)
    → Place Order
  → /order/[id] (confirmation)
```

### Payment methods
- UPI (primary — auto-detect UPI apps)
- Credit/Debit card (secondary)
- UPI intent flow via deep link

### Checkout components needed
- `address-form.tsx` — saved addresses + new address form
- `payment-form.tsx` — UPI/card with validation
- `order-summary.tsx` — item list + totals sidebar

---

## 9. Seller Dashboard Wizard

### Current state (5 separate pages)
```
/dashboard/listings/new/              — step 1
/dashboard/listings/new/size/         — step 2
/dashboard/listings/new/details/      — step 3
/dashboard/listings/new/photos/       — step 4 (PRD 22)
/dashboard/listings/new/pricing/      — step 5 (PRD 23)
```

### Target (single-page multi-step)
```
/dashboard/listings/new/  — single page, 5 sections, scroll or stepper
  Section 1: Basic info (title, category, brand)
  Section 2: Size
  Section 3: Details (condition, description)
  Section 4: Photos (drag-drop upload)
  Section 5: Pricing (reserve, BIN, start price)
  → Review & Submit
```

The `listing-stepper.tsx` component already exists. Need to consolidate the 5 page files into one page with sections.

---

## 10. Performance Budgets

| Metric | Target | Notes |
|--------|--------|-------|
| LCP | < 1.5s | Image CDN, next/image, no animation lib on critical path |
| INP | < 200ms | Code split, lazy load non-critical components |
| CLS | < 0.05 | Explicit dimensions on all images/cards |
| TBT | < 100ms | Route-level code split |
| JS bundle | < 150KB gzip | Dynamic import for recharts, lenis |
| Lighthouse mobile | 92+ | Target per PRD |

### Image strategy
- All product images via next/image with CDN (Cloudinary or Imgix)
- Blur placeholder for LQIP
- Widths: 400, 800, 1200px
- Format: webp with avif fallback

---

## Appendix: Quick Reference

### Where is everything

```
PRD (master):          /home/roshan/Music/HYPE-1 (1)/prd/         (32 files)
PRD (scaffold):        /home/roshan/Desktop/HYPE-1 (1)/hype-next/prd/  (7 phases)
Implementation plan:   /home/roshan/Desktop/HYPE-1 (1)/docs/HYPE-NEXTJS-IMPLEMENTATION-PLAN.md
Build audit:           /home/roshan/Desktop/HYPE-1 (1)/docs/HYPE-NEXTJS-BUILD-AUDIT.md
API spec:              /home/roshan/Desktop/HYPE-1 (1)/hype-next/api-routes.md
Next.js app:           /home/roshan/Desktop/HYPE-1 (1)/hype-next/src/
Design refs (HTML):    /home/roshan/Desktop/HYPE-1 (1)/              (8 files)
Design screenshots:    /home/roshan/Desktop/HYPE-1 (1)/uploads/      (16 PNGs)
```

### Key commands
```bash
cd /home/roshan/Desktop/HYPE-1 (1)/hype-next
npm run dev     # Start dev server
npm run build   # Production build
```
