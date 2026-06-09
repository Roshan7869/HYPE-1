# HYPE — Complete Site PRD & Lovable Build Guide

## Project Overview

**HYPE** is India's first live auction marketplace for verified resale of sneakers, streetwear, collectibles, and luxury goods. The brand identity is warm luxury — think cream, sand, ink-black, and gold — not the neon/tech look of typical marketplaces.

**Tagline:** "Bid. Win. Repeat."

**Company:** THE HYPE COMPANY (thehypcompany.in)

**Target Market:** India. All pricing in ₹ INR.

---

## Design System Reference

### Brand Colors

| Token | Hex | Usage |
|---|---|---|
| `--ink` | `#0c0b0a` | Primary text, buttons, dark surfaces |
| `--cream` | `#f5efe4` | Light cards, backgrounds |
| `--cream-2` | `#efe7da` | Secondary cards |
| `--cream-3` | `#e9e0d2` | Page backgrounds |
| `--sand` | `#ede4d5` | Section backgrounds |
| `--gold` | `#d8c4ac` | Accent, icons, borders |
| `--line` | `#d8ccba` | Borders |
| `--line-soft` | `#e8ddd0` | Subtle borders |
| `--green` | `#e8f5e2` | Success backgrounds |
| `--green-ink` | `#2d7a3a` | Success text/icons |
| `--red` | `#e8543b` | Timers, danger, cancelled badges |
| `--amber-bg` | `#fef3e2` | Warning/processing backgrounds |
| `--amber-ink` | `#b07a1a` | Warning text |
| `--muted` | `#9c958a` | Muted text |

### Typography

| Role | Font | Weight | Sizes |
|---|---|---|---|
| Display/Headlines | **Hanken Grotesk** | 800 (bold-heavy) | 90px hero, 46px h1, 34px h2, 30px section, 22px h3 |
| Body | **Hanken Grotesk** | 400/500/600 | 14-18px |
| Poster (rare) | **Anton** | 400 | Used for embossed "HYPE" watermark in sidebar |

### Layout Constants

| Token | Value |
|---|---|
| `--maxw` | `1500px` |
| Standard padding | `48px` horizontal |
| Card border-radius | `14-22px` |
| Button border-radius | `999px` (pill) |
| Default gap | `18-22px` |

### Button System

| Class | Style |
|---|---|
| `.btn--dark` | `bg: --ink, color: white` — Primary CTA |
| `.btn--light` | `bg: --cream, color: --ink` — Secondary CTA |
| `.btn--ghost` | `bg: transparent, color: --ink` — Login link |
| `.btn--outline` | `bg: transparent, border: --ink, color: --ink` — Tertiary |
| `.btn--lg` | Padding increase for large CTAs |

---

## Architecture Map (Full Site — 33 Pages)

### Public Pages
| # | Page | URL | Description |
|---|---|---|---|
| 00 | Master PRD | — | This file — overview, design system, data models |
| 01 | Homepage | `/` | Hero, live auctions, stats, categories, brands |
| 02 | Shop | `/shop` | Product catalog, filter sidebar, product grid, pagination |
| 03 | Live Auction Detail | `/live-auctions/[slug]` | Bid card, history chart, seller info, related |
| 04 | Sell With Us | `/sell-with-us` | Seller landing: process, features, badge tiers, CTA |

### Auth
| # | Page | URL | Description |
|---|---|---|---|
| 10 | Login | `/login` | Email/password + social login |
| 11 | Signup | `/signup` | Name, email, password, seller/buyer toggle |
| 12 | Forgot Password | `/forgot-password` | Email input + reset link sent |
| 13 | Reset Password | `/reset-password` | New password + confirm (from email link) |

### Checkout
| # | Page | URL | Description |
|---|---|---|---|
| 14 | Cart | `/cart` | Cart items, quantities, promo code, totals |
| 15 | Checkout | `/checkout` | Shipping, payment, order review (single-page) |
| 16 | Order Confirmation | `/order/[id]` | Thank you, order summary, tracking |

### Buyer Account
| # | Page | URL | Description |
|---|---|---|---|
| 17 | My Bids | `/account/bids` | Active/won/lost auction tabs |
| 18 | My Orders | `/account/orders` | All orders with filters |
| 19 | Order Detail | `/account/orders/[id]` | Single order: status timeline, items, address |
| 20 | Wishlist | `/account/wishlist` | Saved items grid with price alerts |
| 21 | Profile | `/account/profile` | Personal info, avatar, addresses, password, danger zone |

### Seller Dashboard
| # | Page | URL | Description |
|---|---|---|---|
| 05 | Create Listing | `/dashboard/listings/new` | Product search + trending grid |
| 06 | Listing Details | `/dashboard/listings/new/details` | 6-step stepper, detail selection |
| 07 | Select Size | `/dashboard/listings/new/size` | Size grid with bid/ask prices |
| 08 | Dashboard Orders | `/dashboard/orders` | Order stat cards, tabs, insights |
| 09 | Dashboard Payouts | `/dashboard/payouts` | Pending payout, commission, history table |
| 22 | Add Photos | `/dashboard/listings/new/photos` | Photo upload, reorder, cover, tips |
| 23 | Pricing & Review | `/dashboard/listings/new/pricing` | Auction/fixed pricing, fees, review, publish |
| 24 | My Listings | `/dashboard/listings` | All listings: active, drafts, paused, sold |
| 25 | Analytics | `/dashboard/analytics` | Views, bids, revenue charts, top listings |
| 26 | Settings | `/dashboard/settings` | Payouts, notifications, shipping, branding |

### Trust & Utility
| # | Page | URL | Description |
|---|---|---|---|
| 27 | Terms of Service | `/terms` | TOC with sticky sidebar navigation |
| 28 | Privacy Policy | `/privacy` | DPDP-compliant privacy with rights callouts |
| 29 | FAQ | `/faq` | Categorized Q&A with search |
| 30 | Contact Us | `/contact` | Contact form + info cards |
| 31 | About Us | `/about` | Brand story, auth process, values, team |
| 32 | 404 Not Found | Any unmatched | Friendly error with search + nav |

### Shared Components

1. **Navbar** — Logo "HYPE.", 6 nav links, Login/Sign Up CTA buttons
2. **Sidebar** — Dashboard-only. Seller name, rating, nav links, embossed "HYPE" watermark
3. **Footer** — Brand, 6 quick links, social (@hypeindiahq), app download placeholder
4. **Breadcrumb** — Path: Home > Section > Current
5. **Live Pill** — Green dot + "LIVE" badge, used on auction cards
6. **Verified Pill** — Checkmark + "HYPE Verified", used on product/seller cards
7. **Badge Variants** — `.badge--amber` (High Demand), `.badge--pink` (Selling Fast), `.badge--blue` (Trending)

---

## State & Data Models

### Product Card

```typescript
interface Product {
  name: string        // "Air Jordan 1 Retro High OG 'Chicago'"
  price: string       // "₹28,500"
  condition?: string  // "DS / Brand New"
  watch?: string      // "47 watching"
  gradient: string    // Background gradient for placeholder
  verified?: boolean  // Show HYPE Verified pill
  live?: boolean      // Show LIVE pill + countdown
}
```

### Auction

```typescript
interface Auction extends Product {
  currentBid: number     // 28800
  nextMinBid: number     // +500 increment
  watchers: number       // 1425
  activeBidders: number  // 450
  endsAt: string         // ISO timestamp or countdown
  condition: string      // "DS"
  size: string           // "UK 9 / US 10"
  brand: string          // "Nike"
  marketPrice: number    // 31500
  avgSalePrice: number   // 28250
  hypeIndex: string      // "High"
  sellerId: string
}
```

### Seller

```typescript
interface Seller {
  name: string           // "SneakerNation"
  initials: string       // "SN"
  verified: boolean
  rating: number         // 4.8
  soldPct: number        // 98
  feedbackPct: number    // 98
  pairings: number       // 17
  badges: string[]       // ["Identity Authenticity", "Certified Settlements", ...]
}
```

### Payout Row

```typescript
interface PayoutRow {
  date: string        // "18 May, 2026"
  orderNo: string     // "#HY23891"
  item: string        // "Jordan 1 Retro High OG"
  sub: string         // "Mocha"
  salePrice: string   // "₹28,500.00"
  commission: string  // "−₹2,280.00"
  commissionPct: string // "(8%)"
  payout: string       // "₹26,220.00"
  status: "paid" | "processing"
  gradient: string
}
```

---

## Responsive Breakpoints

| Breakpoint | Behavior |
|---|---|
| > 1200px | Full layout, all grids active |
| 1000–1200px | Dashboard sidebar collapses, grids reduce columns |
| < 1000px | Single column, all grids become 1-2 cols, hero stacks vertically |

**Critical:** Every page with a grid MUST have responsive overrides. The reference layouts use `@media (max-width: 1100px)` consistently.

---

## Lovable Build Strategy

### Step 1: Initialize & Design System
1. Create new Lovable project
2. Set up Tailwind config with brand colors, fonts, and spacing tokens
3. Create shared components: Navbar, Footer, Sidebar, LivePill, VerifiedPill, Badge

### Step 2: Pages in Order (dependencies)
1. **Homepage** — establishes hero, card, stats, category patterns
2. **Shop** — builds on card pattern, adds filter sidebar
3. **Live Auction Detail** — most complex page, builds on product data
4. **Sell With Us** — marketing landing page, standalone
5. **Dashboard: Create Listing** — introduces sidebar layout
6. **Dashboard: Listing Details** — stepper pattern
7. **Dashboard: Select Size** — size grid pattern
8. **Dashboard: Orders** — dashboard + stat cards + insights
9. **Dashboard: Payouts** — dashboard + table + commission

### Step 3: Wire Interactivity
- Tab switching (orders, shop filters, size tabs)
- Filter chip toggles
- Sort dropdowns
- Stepper validation
- Countdown timer on auction page
- Mobile hamburger menu

---

## Files in This PRD Set (33 Pages)

| File | Contents |
|---|---|
| `00-MASTER-PRD.md` | This file — overview, design system, architecture, data models, full page index |
| `01-HOMEPAGE.md` | Homepage hero, auctions, stats, categories, brands |
| `02-SHOP.md` | Product catalog, filter sidebar, product grid, pagination |
| `03-LIVE-AUCTION-DETAIL.md` | Single auction: bid card, history chart, seller info, related |
| `04-SELL-WITH-US.md` | Seller landing: process, features, badge tiers, CTA |
| `05-DASHBOARD-CREATE-LISTING.md` | Dashboard: product search, trending grid |
| `06-DASHBOARD-LISTING-DETAILS.md` | Dashboard: 6-step stepper, detail selection |
| `07-DASHBOARD-SELECT-SIZE.md` | Dashboard: size grid with bid/ask prices |
| `08-DASHBOARD-ORDERS.md` | Dashboard: order stat cards, tabs, insights sidebar |
| `09-DASHBOARD-PAYOUTS.md` | Dashboard: pending payout, commission, history table |
| `10-AUTH-LOGIN.md` | Email/password + social login, remember me, forgot password |
| `11-AUTH-SIGNUP.md` | Name, email, password, role toggle (buyer/seller), terms checkbox |
| `12-AUTH-FORGOT-PASSWORD.md` | Email input, send reset link, success confirmation |
| `13-AUTH-RESET-PASSWORD.md` | New password + confirm, password strength meter |
| `14-CART.md` | Cart items, quantities, promo code, order summary, continue/checkout |
| `15-CHECKOUT.md` | Single-page: shipping address, payment method, order review |
| `16-ORDER-CONFIRMATION.md` | Thank you, order summary, tracking timeline, related items |
| `17-MY-BIDS.md` | Active/won/lost bids tabs, bid cards with status badges |
| `18-MY-ORDERS.md` | All orders with filters, status badges, order cards |
| `19-ORDER-DETAIL.md` | Status timeline, order items, shipping address, price breakdown |
| `20-WISHLIST.md` | Saved items grid, price drop alerts, quick actions |
| `21-PROFILE.md` | Personal info, avatar, addresses, password, danger zone |
| `22-DASHBOARD-ADD-PHOTOS.md` | Photo upload (drag-drop), reorder, set cover, tips |
| `23-DASHBOARD-PRICING.md` | Auction/fixed pricing, reserve, buy now, fee breakdown, review, publish |
| `24-DASHBOARD-MY-LISTINGS.md` | All listings: active, drafts, paused, sold — with quick actions |
| `25-DASHBOARD-ANALYTICS.md` | Stats cards, revenue chart, top listings table, bid activity, funnel |
| `26-DASHBOARD-SETTINGS.md` | Payout preferences, notifications, shipping, store branding |
| `27-TERMS.md` | Terms of service with sticky TOC sidebar, 11 sections |
| `28-PRIVACY.md` | Privacy policy with DPDP rights callouts, 11 sections |
| `29-FAQ.md` | Categorized Q&A (Buying/Selling/Payments/Account/Auth), search |
| `30-CONTACT.md` | Contact form + info cards (email, phone, address, hours) |
| `31-ABOUT.md` | Brand story, stats, auth process, values, team, CTA |
| `32-404.md` | 404 error page with search, popular links, animations |