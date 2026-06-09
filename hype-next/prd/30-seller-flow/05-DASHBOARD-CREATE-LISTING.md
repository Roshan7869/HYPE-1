# Page 05 — Dashboard: Create Listing (create-listing.html)

## Purpose
Step 1 of the seller listing flow. Seller searches for a product or selects from trending items. Dashboard page with sidebar.

## URL
`/dashboard/create-listing`

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  NAVBAR                                          │
├─────────────────────────────────────────────────┤
│  ┌──────────┬──────────────────────────────────┐ │
│  │ SIDEBAR  │  DASHBOARD MAIN                   │ │
│  │          │  ┌──────────────────────────────┐ │ │
│  │ Overview │  │ h1: "List Your Next Drop"    │ │ │
│  │ My List..│  │ p: "Start by searching..."   │ │ │
│  │ Create ★ │  └──────────────────────────────┘ │ │
│  │ Orders   │                                    │ │
│  │ Payouts  │  ┌──────────────────────────────┐ │ │
│  │ Analytic │  │ SEARCH CARD                  │ │ │
│  │ Settings │  │ [🔍 Search input] [Search]   │ │ │
│  │          │  │ Popular: Jordan 1, Apple,    │ │ │
│  │ ─────── │  │   Rolex, NB 9060, Corteiz,   │ │ │
│  │ HYPE     │  │   Travis Scott                │ │ │
│  │ India ★  │  └──────────────────────────────┘ │ │
│  │ Store    │                                    │ │
│  │ 4.8 ★★★  │  Trending Right Now ↑             │ │
│  │ Verified │  Most listed sneakers this week    │ │
│  │          │                                    │ │
│  │          │  ┌──────┐ ┌──────┐ ┌──────┐       │ │
│  │          │  │ Card │ │ Card │ │ Card │       │ │
│  │          │  │  1   │ │  2   │ │  3   │       │ │
│  │          │  └──────┘ └──────┘ └──────┘       │ │
│  │          │  ┌──────┐ ┌──────┐ ┌──────┐       │ │
│  │          │  │  4   │ │  5   │ │  6   │       │ │
│  │          │  └──────┘ └──────┘ └──────┘       │ │
│  │          │  (5 unique × 3 repeat = 15 total) │ │
│  └──────────┴──────────────────────────────────┘ │
│  FOOTER                                          │
└─────────────────────────────────────────────────┘
```

## Section-by-Section Specs

### Dashboard Layout

| Property | Value |
|---|---|
| Layout | `grid-template-columns: 300px 1fr` (sidebar + main) |
| Background | Body: `var(--sand)` or light page bg |
| Sidebar active | `data-active="create"` |

### Dashboard Header

| Element | Specs |
|---|---|
| h1 | "List Your Next Drop" — display font, `font-size: 34-46px`, `font-weight: 800` |
| p | "Start by searching the product you want to sell." — `font-size: 15px`, `color: #7e776b` |

### Search Card

| Property | Value |
|---|---|
| Background | `var(--cream)` |
| Border radius | `20px` |
| Padding | `26px` |
| Margin top | `6px` |

**Search Row:**

| Element | Specs |
|---|---|
| Input | Flex: 1, white bg, `border-radius: 12px`, `padding: 18px 22px`, search icon left, placeholder "Search sneakers, brands, SKU or collections", `font-size: 15px`, `color: #9c958a` |
| Button | `.go` — ink bg, white text, `border-radius: 12px`, `padding: 0 40px`, `font-weight: 600`, `font-size: 15px` |

**Popular Searches:**

| Element | Specs |
|---|---|
| Label | "Popular searches:" — `font-size: 14px`, `color: #5c564c` |
| Chips | White bg, `border: 1px solid var(--line)`, `border-radius: 999px`, `padding: 9px 18px`, `font-size: 14px`, `font-weight: 500` |
| Items | Jordan 1, Apple, Rolex, New Balance 9060, Corteiz, Travis Scott |
| Wrap | `flex-wrap: wrap`, `gap: 12px`, `margin-top: 18px` |

### Trending Section

| Element | Specs |
|---|---|
| Title | "Trending Right Now" with trend-up arrow icon — display font, `font-size: 26px`, `font-weight: 800` |
| Subtitle | "Most listed sneakers this week" — `font-size: 15px`, `color: #7e776b` |
| Grid | `grid-template-columns: repeat(5, 1fr)`, `gap: 18px` |

**Trending Card specs:**

| Element | Specs |
|---|---|
| Card | `bg: var(--cream-2)`, `border-radius: 14px`, `padding: 14px`, `border: 1px solid var(--line-soft)` |
| Image | `aspect-ratio: 1/0.82`, `border-radius: 10px`, gradient bg, product name centered in white text |
| Name | `font-weight: 600`, `font-size: 15px`, `margin-top: 12px` |
| Subtitle | `font-size: 13px`, `color: #8c867b`, `margin-top: 2px` |
| Avg price | Display font, `font-weight: 800`, `font-size: 15px`, `margin-top: 8px` |
| Avg label | `font-weight: 500`, `font-size: 12px`, `color: #8c867b` (inline after price) |
| Badge | `margin-top: 12px`, pill shape |

**Trending Data (5 items, repeated 3× = 15 cards):**

| # | Name | Subtitle | Avg Price | Badge | Gradient |
|---|---|---|---|---|---|
| 1 | Jordan 1 Retro High | Mocha | ₹24,500 | High Demand (amber) | `linear-gradient(150deg,#3a2546,#160a1e)` |
| 2 | Nike Dunk Low | Panda | ₹15,800 | High Demand (amber) | `linear-gradient(150deg,#2e2540,#120a1c)` |
| 3 | Yeezy 350 V2 | Beluga | ₹18,900 | Selling Fast (pink) | `linear-gradient(150deg,#352843,#150b1e)` |
| 4 | New Balance 9060 | Grey | ₹22,100 | High Demand (amber) | `linear-gradient(150deg,#2b2540,#100a1a)` |
| 5 | Adidas Samba OG | Green | ₹12,900 | Trending (blue) | `linear-gradient(150deg,#33274a,#130a20)` |

**Badge CSS classes:**
- `.badge--amber`: `bg: var(--amber-bg)`, `color: var(--amber-ink)` — "High Demand"
- `.badge--pink`: `bg: #f5e2ec`, `color: #8a2d5a` — "Selling Fast"
- `.badge--blue`: `bg: #e2eef5`, `color: #2d5a8a` — "Trending"

---

## Responsive Behavior (< 1100px)

- Trending grid → 2 columns
- Sidebar collapses (toggle)
- Search row → stacked (input + button)

---

## Lovable Build Prompt

```
Build a Dashboard "Create Listing" page (Step 1) for HYPE marketplace — seller searches for a product to list.

Layout: Dashboard layout with sidebar (300px) and main content area. Sidebar is injected via shared component showing: seller profile (HYPE India Store, 4.8 rating, verified badge), nav links (Overview, My Listings, Create Listing [active], Orders, Payouts, Analytics, Settings), embossed "HYPE" watermark.

Main content:
1. Header: "List Your Next Drop" h1 (display font 800), "Start by searching the product you want to sell." subtitle (muted)
2. Search card (cream bg, rounded 20px): Search input row (white bg, search icon, "Search sneakers, brands, SKU or collections" placeholder, dark "Search" button). Below: "Popular searches:" label + pill chips (Jordan 1, Apple, Rolex, New Balance 9060, Corteiz, Travis Scott)
3. Trending section: "Trending Right Now" heading with chart arrow icon + "Most listed sneakers this week" subtitle. 5-column grid of trending cards. Each card: gradient image placeholder (1:0.82 ratio, product name centered), product name (15px bold), subtitle, avg price in ₹ with "avg." label, demand badge (amber/pink/blue pill). 5 unique products repeated 3 times = 15 cards total.

Products: Jordan 1 Retro High Mocha ₹24,500 (High Demand), Nike Dunk Low Panda ₹15,800 (High Demand), Yeezy 350 V2 Beluga ₹18,900 (Selling Fast), New Balance 9060 Grey ₹22,100 (High Demand), Adidas Samba OG Green ₹12,900 (Trending).

Sidebar active state: "Create Listing" highlighted.
Footer below.

Design system: ink #0c0b0a, cream #f5efe4, cream-2 #efe7da, Hanken Grotesk, max-width 1500px. Responsive: grid goes 2-col below 1100px.
```