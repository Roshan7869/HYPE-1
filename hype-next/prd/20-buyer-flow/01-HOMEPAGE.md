# Page 01 — Homepage (index.html)

## Purpose
Main landing page. Introduces HYPE as a live auction marketplace, showcases active auctions, builds trust with stats, and funnels users into browsing or selling.

## URL
`/`

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  NAVBAR: Logo | HOME SHOP LIVE-AUCTIONS ...     │
├─────────────────────────────────────────────────┤
│  HERO SECTION                                    │
│  ┌──────────────────┬────────────────────────┐  │
│  │  h1: BID. WIN.   │  Large gradient card    │  │
│  │      REPEAT.     │  with LIVE pill +       │  │
│  │                  │  "Air Jordan 1 Chicago"  │  │
│  │  subtitle text   │                          │  │
│  │                  │                          │  │
│  │  [Start Bidding] │                          │  │
│  │  [Sell With Us]  │                          │  │
│  └──────────────────┴────────────────────────┘  │
├─────────────────────────────────────────────────┤
│  LIVE AUCTIONS — Section                         │
│  "Live Auctions" h2 + "View All →" link         │
│  ┌──────┐ ┌──────┐ ┌──────┐ (3-col grid)       │
│  │ Card │ │ Card │ │ Card │                      │
│  │  1   │ │  2   │ │  3   │                      │
│  └──────┘ └──────┘ └──────┘                      │
│  ┌──────┐ ┌──────┐ ┌──────┐                     │
│  │  4   │ │  5   │ │  6   │                     │
│  └──────┘ └──────┘ └──────┘                     │
├─────────────────────────────────────────────────┤
│  STATS BAR — 4 stats in a row                    │
│  ┌────────┬────────┬────────┬────────┐          │
│  │ 2,500+ │  ₹48K  │ 1,200+ │  98%   │          │
│  │ Items  │ Avg    │ Sellers│ Trust  │          │
│  └────────┴────────┴────────┴────────┘          │
├─────────────────────────────────────────────────┤
│  CATEGORIES — "Browse by Category"               │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐ (4-col grid)      │
│  │Snkr│ │Appl│ │Coll│ │Luxry│                    │
│  └────┘ └────┘ └────┘ └────┘                     │
│  ┌────┐ ┌────┐ ┌────┐ ┌────┐                    │
│  │Wtch│ │Bgs │ │Acce│ │LmtEd│                    │
│  └────┘ └────┘ └────┘ └────┘                     │
├─────────────────────────────────────────────────┤
│  FEATURED BRANDS — Logo row (6-8 brand logos)     │
│  "Trusted by the best"                            │
├─────────────────────────────────────────────────┤
│  FOOTER (injected via JS)                         │
└─────────────────────────────────────────────────┘
```

## Section-by-Section Specs

### 1. Navbar

**Structure:** Full-width, `max-width: var(--maxw)`, horizontally centered.

| Element | Specs |
|---|---|
| Logo | "HYPE." in Hanken Grotesk 800, `font-size: 28px`, `letter-spacing: -0.04em` |
| Nav links | HOME, SHOP, LIVE AUCTIONS, SELL WITH US, ABOUT, CONTACT — `font-size: 13px`, `font-weight: 600`, `letter-spacing: 0.1em`, uppercase |
| Login button | `.btn.btn--ghost` — transparent bg, ink text |
| Sign Up button | `.btn.btn--light` — cream bg, ink text |
| Padding | `24px 48px` |
| Border bottom | `1px solid var(--line-soft)` |

**Active state:** Current page link gets `color: var(--ink)` + underline, others are `color: var(--muted)`.

### 2. Hero Section

| Property | Value |
|---|---|
| Layout | 2-column grid: `1fr 1.05fr` |
| Left column | Headline + CTA |
| Right column | Large gradient card |
| Padding | `80px 48px` |
| Background | `var(--cream-3)` |

**Left column:**

| Element | Specs |
|---|---|
| h1 | "BID. WIN. REPEAT." — Hanken Grotesk 800, `font-size: clamp(48px, 6vw, 88px)`, `line-height: 0.92`, `letter-spacing: -0.04em` |
| Subtitle | `font-size: 17px`, `color: #4f4a40`, `max-width: 430px`, `line-height: 1.5`, margin-top `22px` |
| CTA row | Two buttons with `gap: 14px` |
| "Start Bidding" | `.btn.btn--dark.btn--lg` |
| "Sell With Us" | `.btn.btn--outline.btn--lg` |

**Right column (product showcase card):**

| Property | Value |
|---|---|
| Aspect ratio | `1 / 1.05` |
| Border radius | `22px` |
| Background | `linear-gradient(135deg, #1b2a55 0%, #2f6bd6 30%, #a9c6ff 55%, #d98bd0 80%, #7a3f8f 100%)` |
| LIVE pill | Top-left, green pill with dot animation |
| Product name | Center-centered, white text, `font-family: var(--font-disp)`, `font-weight: 700` |

### 3. Live Auctions Section

| Property | Value |
|---|---|
| Section title | "Live Auctions" — `h2`, Hanken Grotesk 800, `font-size: 48px` |
| View All link | "View All →" aligned right, `font-weight: 700` |
| Grid | 3 columns, `gap: 22px` |
| Section padding | `64px 0` |

**Auction Card specs:**

| Element | Specs |
|---|---|
| Card | `border-radius: 18px`, `overflow: hidden`, `box-shadow: 0 10px 30px -16px rgba(0,0,0,.3)` |
| Image area | `aspect-ratio: 1/0.85`, gradient background, LIVE pill (top-left), eye icon + watchers count (bottom-left) |
| Product name | `font-family: var(--font-disp)`, `font-weight: 800`, `font-size: 17px`, `letter-spacing: 0.02em`, uppercase |
| Price | `font-family: var(--font-disp)`, `font-weight: 800`, `font-size: 18px`, margin-top `8px` |
| Condition | `font-size: 12px`, `color: #9c958a` |
| Time remaining | Red clock icon + "02:14" — `font-weight: 600`, `color: var(--red)` |
| Place Bid button | Full width, `background: var(--ink)`, `color: white`, `border-radius: 999px`, `padding: 14px` |

**Data (6 auction items):**

| # | Name | Price | Gradient |
|---|---|---|---|
| 1 | Nike Dunk Low Panda | ₹12,500 | `linear-gradient(150deg, #3a2546, #160a1e)` |
| 2 | Yeezy 350 V2 Beluga | ₹18,900 | `linear-gradient(150deg, #6b7a3a, #2a3010)` |
| 3 | Supreme Box Logo Hoodie | ₹24,500 | `linear-gradient(150deg, #c24a3a, #4a1410)` |
| 4 | AJ4 University Blue | ₹27,800 | `linear-gradient(150deg, #5a7fb0, #26405f)` |
| 5 | Off-White AJ1 Chicago | ₹38,500 | `linear-gradient(150deg, #e8543b, #c23528, #fff 50%, #e8543b 80%)` |
| 6 | Adidas Gazelle Bold Pink | ₹10,500 | `linear-gradient(150deg, #d98bd0, #7a3f8f)` |

### 4. Stats Bar

| Property | Value |
|---|---|
| Layout | 4-column grid |
| Background | `var(--ink)` (black) |
| Text color | White |
| Padding | `60px 48px` |
| Border radius | `22px` |

| Stat | Value | Label |
|---|---|---|
| 2,500+ | Items Listed | Description text below |
| ₹48,000 | Avg. Sale Price | Description text below |
| 1,200+ | Verified Sellers | Description text below |
| 98% | Buyer Trust | Description text below |

**Number style:** `font-family: var(--font-disp)`, `font-weight: 800`, `font-size: 46px`, `letter-spacing: -0.02em`

### 5. Categories Section

| Property | Value |
|---|---|
| Title | "Browse by Category" |
| Grid | 4 columns, `gap: 22px` |
| Card | `border-radius: 14px`, `aspect-ratio: 1/0.85`, gradient backgrounds |

**8 Categories:**

| Category | Icon SVG | Gradient colors |
|---|---|---|
| Sneakers | Shoe icon | Dark purple gradient |
| Apparel | Hanger icon | Dark charcoal gradient |
| Collectibles | Box icon | Dark brown gradient |
| Luxury | Diamond icon | Dark gold gradient |
| Watches | Clock icon | Dark teal gradient |
| Bags | Bag icon | Dark olive gradient |
| Accessories | Glasses icon | Dark navy gradient |
| Limited Drops | Fire icon | Dark red gradient |

Each card: gradient background, centered white icon (36×36 SVG), white category name below, `font-family: var(--font-disp)`, `font-weight: 800`, `font-size: 18px`.

### 6. Featured Brands

| Property | Value |
|---|---|
| Title | "Trusted by the Best" |
| Layout | Logo row (horizontal flex, `gap: 48px`, centered) |
| Brands | Nike, Jordan, Adidas, New Balance, Supreme, Off-White (shown as text/placeholders) |

### 7. Footer

Injected via `footer.js`. See shared components spec.

---

## Responsive Behavior (< 1100px)

- Hero grid → single column, image stacks below text
- Auction grid → 2 columns, then 1 column on mobile
- Stats grid → 2 columns
- Category grid → 2 columns
- Nav links collapse to hamburger menu
- Padding reduces to `24px`

---

## Lovable Build Prompt

```
Build a homepage for HYPE — India's first live auction marketplace for sneakers, streetwear, and luxury goods. Brand tagline: "Bid. Win. Repeat."

Design system:
- Primary colors: ink black #0c0b0a, cream #f5efe4, sand #ede4d5, gold #d8c4ac
- Accent colors: green #2d7a3a on #e8f5e2, red #e8543b, amber ink #b07a1a on #fef3e2
- Font: Hanken Grotesk (weights 400, 500, 600, 700, 800) for everything. Anton for one watermark.
- Border-radius: 14-22px for cards, 999px for pills/buttons
- Max width: 1500px

Sections in order:
1. Navbar: Logo "HYPE." left, nav links center (HOME, SHOP, LIVE AUCTIONS, SELL WITH US, ABOUT, CONTACT), Login/Sign Up buttons right
2. Hero: 2-column. Left: "BID. WIN. REPEAT." massive headline (clamp 48-88px), subtitle about trusted marketplace, two CTA buttons (Start Bidding dark, Sell With Us outline). Right: tall gradient card with LIVE pill and "Air Jordan 1 Chicago" text
3. Live Auctions: "Live Auctions" + "View All →" header, then 3-column grid of 6 auction cards. Each card has gradient image placeholder with LIVE pill and watcher count, product name (uppercase bold), price in ₹, condition, red countdown timer, and "Place Bid" dark button
4. Stats Bar: Full-width black rounded card with 4 stats in a row (2,500+ Items Listed, ₹48,000 Avg Sale, 1,200+ Sellers, 98% Trust). Display font, large numbers
5. Categories: "Browse by Category" header, 4-column grid of 8 category cards with gradient backgrounds and white icon+text
6. Featured Brands: "Trusted by the Best" with brand name row
7. Footer: Brand column, Quick Links, Social @hypeindiahq, App Download placeholder

All auction cards use gradient backgrounds for product images (no real photos yet). Prices in ₹ INR.
```

## Data for Mock

```json
{
  "auctions": [
    {"name": "Nike Dunk Low Panda", "price": "₹12,500", "watchers": 342, "timeLeft": "02:14", "gradient": "linear-gradient(150deg,#3a2546,#160a1e)"},
    {"name": "Yeezy 350 V2 Beluga", "price": "₹18,900", "watchers": 218, "timeLeft": "05:32", "gradient": "linear-gradient(150deg,#6b7a3a,#2a3010)"},
    {"name": "Supreme Box Logo Hoodie", "price": "₹24,500", "watchers": 567, "timeLeft": "01:08", "gradient": "linear-gradient(150deg,#c24a3a,#4a1410)"},
    {"name": "AJ4 University Blue", "price": "₹27,800", "watchers": 189, "timeLeft": "08:45", "gradient": "linear-gradient(150deg,#5a7fb0,#26405f)"},
    {"name": "Off-White AJ1 Chicago", "price": "₹38,500", "watchers": 916, "timeLeft": "00:34", "gradient": "linear-gradient(150deg,#e8543b,#c23528,#fff 50%,#e8543b 80%)"},
    {"name": "Adidas Gazelle Bold Pink", "price": "₹10,500", "watchers": 97, "timeLeft": "12:02", "gradient": "linear-gradient(150deg,#d98bd0,#7a3f8f)"}
  ]
}
```