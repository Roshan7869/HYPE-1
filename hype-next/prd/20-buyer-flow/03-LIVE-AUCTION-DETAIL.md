# Page 03 — Live Auction Detail (live-auctions.html)

## Purpose
Full detail page for a single live auction. Shows real-time bidding interface, product details, bid history chart, seller credentials, and price insights. This is the most complex page in the site.

## URL
`/live-auctions/[slug]`

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  NAVBAR (active: LIVE AUCTIONS)                  │
├─────────────────────────────────────────────────┤
│  BREADCRUMB: Home / Live Auctions / Sneakers /   │
│  Nike Air Jordan 1 Retro High OG                 │
├─────────────────────────────────────────────────┤
│  AUCTION HERO (3-column: img | details | bid)    │
│  ┌──────────┬──────────────────┬──────────────┐ │
│  │ Product  │ Title + meta     │ BID CARD     │ │
│  │ Image    │ LIVE pill        │ Current bid  │ │
│  │ (1:1.06) │ Brand + verified │ ₹28,800      │ │
│  │ with     │ Condition/Size   │ ± stepper     │ │
│  │ LIVE     │ Watchers/bidders │ Min next bid │ │
│  │ pill     │ Next min +₹500   │ PLACE BID    │ │
│  │          │ Countdown clock  │ Quick bids    │ │
│  │          │                  │ BUY NOW      │ │
│  │          │                  │ Watching avatars│ │
│  └──────────┴──────────────────┴──────────────┘ │
├─────────────────────────────────────────────────┤
│  DETAIL BLOCK (3-column grid)                    │
│  ┌──────────┬──────────────────┬──────────────┐ │
│  │ DETAILS  │ BID HISTORY     │ SELLER INFO  │ │
│  │          │                  │              │ │
│  │ Market   │ Line chart       │ Avatar SN    │ │
│  │ ₹39,500  │ (SVG area chart) │ Verified     │ │
│  │ Avg Sale │                  │ 98% sold     │ │
│  │ ₹28,250  │ Bid table        │ 98% feedback │ │
│  │ Hype:    │ Bidder | Time    │ VIEW PROFILE │ │
│  │ High     │ ₹39,500 | 2m     │              │ │
│  │          │                  │ Badges +     │ │
│  │ Mini     │ View All Bids   │ Shipping      │ │
│  │ cards    │                  │ info         │ │
│  └──────────┴──────────────────┴──────────────┘ │
│  ┌─────────────────────────────────────────────┐ │
│  │ PRICE INSIGHTS (spans full width)           │ │
│  │ Market | Hype Index | Avg Sale Price        │ │
│  │ Progress bar                                │ │
│  └─────────────────────────────────────────────┘ │
├─────────────────────────────────────────────────┤
│  YOU MAY ALSO LIKE (4-col related grid)          │
├─────────────────────────────────────────────────┤
│  FOOTER                                          │
└─────────────────────────────────────────────────┘
```

## Section-by-Section Specs

### 1. Breadcrumb

Path: Home → Live Auctions → Sneakers → Nike Air Jordan 1 Retro High OG
- Current item: `font-weight: 600`, `color: var(--ink)`

### 2. Auction Hero (3-column grid)

**Column 1 — Product Image:**

| Property | Value |
|---|---|
| Aspect ratio | `1 / 1.06` |
| Border radius | `18px` |
| Background | `linear-gradient(135deg, #1b2a55 0%, #2f6bd6 30%, #a9c6ff 55%, #d98bd0 80%, #7a3f8f 100%)` |
| LIVE pill | Absolute top-left, white text on green pill |
| Product placeholder text | Centered, white semi-transparent, display font |

**Column 2 — Product Info:**

| Element | Specs |
|---|---|
| LIVE pill | Green pill with pulsing dot, inline |
| h1 | "Air Jordan 1 Retro High OG 'Chicago'" — display font, `font-size: 46px`, `line-height: 0.98`, `letter-spacing: -0.02em` |
| Brand row | "Nike" + verified checkmark pill — `font-weight: 600`, `gap: 12px` |
| Specs line | "Condition: DS | Size: UK 9 / US 10" — `font-size: 14px`, borders top/bottom |
| Watchers | Eye icon + "1425 Watching" + "450 Active bidders" — `font-size: 14px`, `color: #5c564c` |
| Increment | "+ ₹500 Next minimum bid" — green ink color, `font-weight: 700`, subtitle in muted |
| Countdown | Label "Ends In" + massive clock "00 : 14 : 21" — display font, `font-size: 52px`, `color: var(--red)` |

**Column 3 — Bid Card:**

| Element | Specs |
|---|---|
| Card | `bg: var(--cream)`, `border-radius: 22px`, `padding: 30px` |
| Section title | "Place Your Bid" — `font-size: 16px`, `font-weight: 600` |
| Current bid | `₹28,800` — display font, `font-size: 48px`, `font-weight: 800` |
| Stepper | `−` / `+` buttons, `50×50px`, `border-radius: 12px`, white bg |
| Min next | "Minimum next: Rs. 228,800" — **BUG: should be ₹29,300** |
| PLACE BID | White bg, ink border, `border-radius: 999px`, `padding: 18px` |
| Quick bids | 3 buttons: +300, +500, +1000, pill shape |
| BUY NOW | Full width, `bg: var(--ink)`, white text, `border-radius: 999px`, `padding: 19px` |
| Watching avatars | Row of colored circle avatars (A through G) + "+16" text |

### 3. Detail Block (3-column grid)

**Left — Details:**

| Element | Specs |
|---|---|
| Section title | "Details" + info icon |
| Market | Label "Market", ~~₹39,500~~ strikethrough, **₹31,500** display font |
| Avg Sale Price | Label, ₹28,250, subtitle "Relative bids to sales" |
| Hype Index | "High" in green ink, `font-weight: 700` |
| Mini cards | 2 side-by-side dark cards: "Grant Dodge ₹28,500" and "FSID Ries ₹32,000" — `bg: var(--ink)`, white text |

**Center — Bid History:**

| Element | Specs |
|---|---|
| Section title | "Bid History" |
| Chart | White card, `border-radius: 14px`, SVG area chart with gradient fill |
| Peak label | "₹23,500" — dark pill, absolute top-right |
| X-axis labels | "10:00 AM", "10:00 PM", "02:00 PM", "Now" |
| Bid table | 4 rows: Bidder ID | time ago | ₹ amount |
| View All | Bold underline link |

**Right — Seller Info:**

| Element | Specs |
|---|---|
| Section title | "Seller Info" |
| Avatar | "SN" in dark circle, `46×46px` |
| Name | "SneakerNation" + verified checkmark |
| Subtitle | "2/1 ★ 126 waitlisted" |
| Stats row | 98% Item Sold, 98% Positive Feedback, 17 Pairings — display font for numbers |
| VIEW PROFILE | Full width dark button, arrow icon |
| Seller Badges | Checkmark list: Identity Authenticity, Stocks 3Shipper, Onipaid Lots, Certified Settlements, Buyer Price Shipping |
| Shipping | Checkmark list: Ships to India, 3-8 delivery, Onipaid Lots, Vr-verified, Buyer Price Shipping |

### 4. Price Insights (full-width under 3-column)

| Element | Specs |
|---|---|
| Card | `bg: white`, `border: 1px solid var(--line-soft)`, `border-radius: 16px`, `padding: 22px` |
| Title | "Price Insights" + info icon |
| Row | 3 metrics: Market (₹31,500, Low: ₹19,550), Hype Index (01, ▲₹233,600), Avg Sale Price (₹28,250, last 30 sales) |
| Progress bar | `height: 4px`, gradient `linear-gradient(90deg, var(--ink) 60%, #d8ccba 60%)` |
| Labels | "19,350" — "28,550" — "2,3,460" (**NOTE: typo in original, should be "23,460"**) |

### 5. You May Also Like

| Element | Specs |
|---|---|
| Title | Centered, "You May Also Like" — display font, `font-size: 48px` |
| Grid | 4 columns, `gap: 20px` |
| Section margin | `64px 0 36px` |

**Related item card:**

| Element | Specs |
|---|---|
| Image | `aspect-ratio: 1/0.92`, gradient bg, LIVE pill, product name centered |
| Name | Display font, `font-size: 16px`, uppercase, `letter-spacing: 0.02em` |
| Price | Display font, `font-weight: 800`, `font-size: 24px` |
| Meta | Clock icon + time + eye icon + watcher count |
| Place Bid | Full width dark pill button |

**4 Related Items:**

| # | Name | Price | Time | Gradient |
|---|---|---|---|---|
| 1 | Nike Dunk Low Panda | ₹12,500 | 02:14 | `linear-gradient(150deg,#3a2546,#160a1e)` |
| 2 | Noircore Hoodie | ₹10,500 | 02:14 | `linear-gradient(150deg,#4a4036,#1b1611)` |
| 3 | Obsidian Frames | ₹7,500 | 02:14 | `linear-gradient(150deg,#caa46a,#5a4324)` |
| 4 | Obsidian Frames | ₹7,500 | 02:14 | `linear-gradient(150deg,#e6c7a8,#b58a63)` |

---

## Responsive Behavior (< 1100px)

- Hero grid → single column (image → info → bid card stacked)
- Detail 3-column → single column
- Related grid → 2 columns
- Bid card becomes full-width

---

## Lovable Build Prompt

```
Build a Live Auction Detail page for HYPE marketplace. This is the most complex page — a real-time bidding interface for a single sneaker auction.

Design system: ink #0c0b0a, cream #f5efe4, sand #ede4d5, red #e8543b, green-ink #2d7a3a, Hanken Grotesk font, max-width 1500px, cards 22px radius, pills 999px radius.

Page structure:
1. Navbar (active: LIVE AUCTIONS)
2. Breadcrumb: Home / Live Auctions / Sneakers / Nike Air Jordan 1 Retro High OG

3. AUCTION HERO — 3-column grid (1fr 1.05fr 1fr):
   - LEFT: Product image card (1:1.06 aspect ratio, purple-blue-pink gradient background, LIVE pill top-left)
   - CENTER: LIVE pill, giant headline "Air Jordan 1 Retro High OG 'Chicago'" (46px display font), brand "Nike" with verified checkmark pill, condition "DS" and size "UK 9 / US 10" with borders, watcher count row, "+ ₹500 Next minimum bid" in green, countdown timer "00 : 14 : 21" in massive red display font
   - RIGHT: Bid card (cream bg, rounded 22px). "Place Your Bid" title, current bid ₹28,800 in 48px display font, −/+ stepper buttons, minimum next bid text, PLACE BID button (white bg, ink border), quick bid row (+300, +500, +1000), BUY NOW button (full width, ink bg, white), row of 7 colored avatar circles + "+16"

4. DETAIL BLOCK — 3-column grid:
   - LEFT: "Details" section. Market price (strikethrough ₹39,500 then ₹31,500 big), Avg Sale Price ₹28,250, Hype Index "High" in green. Two mini dark cards side by side.
   - CENTER: "Bid History". SVG area chart with red line + gradient fill. Peak label pill "₹23,500". X-axis labels. Bid table (4 rows of bidder/time/amount). "View All Bids" link.
   - RIGHT: "Seller Info". Avatar "SN", "SneakerNation" with verified checkmark, "2/1 ★ 126 waitlisted". Stats: 98% Sold, 98% Feedback, 17 Pairings. VIEW PROFILE dark button. Badge checklist (5 items with green checkmarks). Shipping checklist (4 items).

5. PRICE INSIGHTS — full width card under detail block. White bg, bordered. 3 metrics in a row: Market ₹31,500, Hype Index 01, Avg Sale ₹28,250. Progress bar below.

6. YOU MAY ALSO LIKE — centered heading, 4-column grid. Each card: gradient image with LIVE pill + name overlay, product name (uppercase), price, time + watcher count, "Place Bid" button.

7. Footer

Responsive: below 1100px all grids collapse to single column.
```