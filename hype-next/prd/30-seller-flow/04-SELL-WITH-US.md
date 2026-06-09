# Page 04 — Sell With Us (sell-with-us.html)

## Purpose
Marketing landing page converting visitors into sellers. Explains the selling process, highlights platform benefits, shows seller badge tiers, and ends with a CTA to create a listing.

## URL
`/sell-with-us`

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  NAVBAR (active: SELL WITH US)                   │
├─────────────────────────────────────────────────┤
│  HERO SECTION                                    │
│  ┌──────────────────┬────────────────────────┐  │
│  │  h1: SELL WITH  │  Image placeholder       │  │
│  │      US.         │  (dark gradient bg)      │  │
│  │                  │                          │  │
│  │  subtitle text   │                          │  │
│  │                  │                          │  │
│  │  [Start Selling]│                          │  │
│  └──────────────────┴────────────────────────┘  │
├─────────────────────────────────────────────────┤
│  HOW IT WORKS — 4 Step Process                    │
│  ┌──────┐ ┌──────┐ ┌──────┐ ┌──────┐          │
│  │  1   │ │  2   │ │  3   │ │  4   │          │
│  │List  │ │Auth  │ │Bid/  │ │Get   │          │
│  │Item  │ │Check │ │Sold  │ │Paid  │          │
│  └──────┘ └──────┘ └──────┘ └──────┘          │
├─────────────────────────────────────────────────┤
│  WHY CHOOSE HYPE? — 6 Feature Cards (2×3)       │
│  ┌──────────┐ ┌──────────┐                     │
│  │ Feature  │ │ Feature  │  (dark bg cards)      │
│  │ Card 1  │ │ Card 2  │                       │
│  └──────────┘ └──────────┘                     │
│  ┌──────────┐ ┌──────────┐                     │
│  │   ...    │ │   ...    │  (6 total)          │
│  └──────────┘ └──────────┘                     │
├─────────────────────────────────────────────────┤
│  SELLER BADGE TIERS — 4 Cards (2×2)              │
│  ┌──────────┐ ┌──────────┐                     │
│  │ Bronze   │ │ Silver   │                     │
│  └──────────┘ └──────────┘                     │
│  ┌──────────┐ ┌──────────┐                     │
│  │ Gold     │ │ Platinum │                     │
│  └──────────┘ └──────────┘                     │
├─────────────────────────────────────────────────┤
│  CTA SECTION                                      │
│  "READY TO SELL?"                                 │
│  [Create Your Listing →]                          │
│  Note: "Applications reviewed within 48 hours"    │
├─────────────────────────────────────────────────┤
│  FOOTER                                          │
└─────────────────────────────────────────────────┘
```

## Section-by-Section Specs

### 1. Navbar
Standard HYPE navbar. Active link: "SELL WITH US".

### 2. Hero Section

| Property | Value |
|---|---|
| Background | `var(--sand)` or cream |
| Layout | 2-column grid: `1fr 1fr` |
| Padding | `80px 48px` |

**Left column:**

| Element | Specs |
|---|---|
| h1 | "SELL WITH US." — display font, `font-size: clamp(48px, 5vw, 86px)`, `font-weight: 800`, `letter-spacing: -0.04em` |
| Subtitle | 2-3 lines about trusted marketplace, `font-size: 17px`, `color: #4f4a40`, `line-height: 1.6`, `max-width: 460px` |
| CTA | "Start Selling" — `.btn.btn--dark.btn--lg` with arrow icon |

**Right column:**

| Property | Value |
|---|---|
| Aspect ratio | `1 / 1.06` |
| Border radius | `22px` |
| Background | Dark gradient |
| Content | Placeholder text, centered, white semi-transparent |

### 3. How It Works — 4-Step Process

| Property | Value |
|---|---|
| Section title | "How It Works" — display font, centered |
| Layout | `grid-template-columns: repeat(4, 1fr)`, `gap: 28px` |
| Padding | `64px 48px` |

**Each step card:**

| Element | Specs |
|---|---|
| Ghost number | `font-family: var(--font-disp)`, `font-size: 72px`, `font-weight: 800`, `color: rgba(12,11,10,0.06)`, absolute positioned |
| Icon | 36×36 SVG, centered in circle or standalone |
| Title | `font-weight: 700`, `font-size: 18px` |
| Description | `font-size: 14px`, `color: #7e776b`, `margin-top: 6px` |

**Steps:**

| # | Title | Description |
|---|---|---|
| 1 | List Your Item | Submit your sneakers, streetwear or collectible with photos and condition details |
| 2 | HYPE Authentication | Our experts verify every item for authenticity and condition |
| 3 | Bid or Buy | Your listing goes live for bidding or instant purchase |
| 4 | Get Paid | Receive your earnings securely after buyer confirmation |

### 4. Why Choose HYPE? — Features (2×3 grid)

| Property | Value |
|---|---|
| Section title | "Why Choose HYPE?" |
| Layout | 2-column grid, `gap: 22px` |
| Card | `bg: var(--ink)` (black), `border-radius: 18px`, `padding: 36px`, `color: white` |

**6 Feature Cards:**

| # | Title | Icon | Description |
|---|---|---|---|
| 1 | Verified Authenticity | Shield icon | Every item goes through our multi-point authentication process |
| 2 | Real-Time Bidding | Clock/pulse icon | Dynamic auction format ensures fair market pricing |
| 3 | Secure Transactions | Lock icon | End-to-end encrypted payments with buyer/seller protection |
| 4 | Expert Curation | Star icon | Our team of specialists ensures only the best listings |
| 5 | Fast Payouts | Wallet icon | Get paid within 24-48 hours after authentication |
| 6 | 24/7 Support | Chat icon | Our team is always here to help with any issues |

### 5. Seller Badge Tiers (2×2 grid)

| Property | Value |
|---|---|
| Section title | "Seller Badge Tiers" |
| Layout | 2-column grid, `gap: 22px` |
| Card | `border-radius: 20px`, `padding: 30px 36px`, black text on colored bg |

**4 Tier Cards:**

| Tier | Gradient Background | Badge Label | Req. Sales | Commission | Swoosh |
|---|---|---|---|---|---|
| Bronze | `linear-gradient(135deg, #d4b896, #c4a67a)` | Bronze Seller | 10+ sales | 10% | Watermark "✓" large |
| Silver | `linear-gradient(135deg, #e8e8e8, #b0b0b0)` | Silver Seller | 50+ sales | 8% | Watermark "✓" large |
| Gold | `linear-gradient(135deg, #ffd54f, #c9a01a)` | Gold Seller | 200+ sales | 7% | Watermark "✓" large |
| Platinum | `linear-gradient(135deg, #1a1a2e, #16213e, #0f3460)` | Platinum Seller | 500+ sales | 5% | Watermark "✓" large, white text |

Each card:
- Tier icon (shield/badge shape)
- Tier name in display font, `font-size: 26px`
- Requirements line in muted color
- Commission rate bolded
- Large semi-transparent Nike-style swoosh watermark

### 6. CTA Section

| Property | Value |
|---|---|
| Background | `var(--ink)` (black), `color: white` |
| Alignment | Center |
| Padding | `80px 48px` |
| Border radius | `22px` |

**Content:**

| Element | Specs |
|---|---|
| h2 | "READY TO SELL?" — display font, `font-size: 48px`, `letter-spacing: -0.02em` |
| Subtitle | Subtext about starting, `color: rgba(255,255,255,0.6)`, `max-width: 480px`, centered |
| Button | "Create Your Listing →" — `bg: white`, `color: var(--ink)`, `border-radius: 999px`, `padding: 18px 40px`, `font-weight: 700` |
| Note | "Applications are reviewed within 48 hours" — `font-size: 14px`, `color: rgba(255,255,255,0.4)`, `margin-top: 18px` |

---

## Responsive Behavior (< 1100px)

- Hero → single column, image below text
- 4-step process → 2×2 then single column
- Features → single column
- Badge tiers → single column

---

## Lovable Build Prompt

```
Build a "Sell With Us" landing page for HYPE marketplace following the design system (ink #0c0b0a, cream #f5efe4, sand #ede4d5, Hanken Grotesk font, max-width 1500px).

Sections top to bottom:
1. Navbar (SELL WITH US active)
2. Hero: 2-column. Left: "SELL WITH US." massive headline (clamp 48-86px display font 800), subtitle about trusted marketplace, "Start Selling" dark button with arrow. Right: dark gradient product card placeholder (1:1.06 ratio, rounded 22px)
3. "How It Works": 4-step process in a row. Each step has a large ghost number (72px, 6% opacity), icon, title (bold 18px), description (14px muted). Steps: 1-List Your Item, 2-HYPE Authentication, 3-Bid or Buy, 4-Get Paid
4. "Why Choose HYPE?": 2-column grid, 6 dark (ink black bg, white text) feature cards with rounded 18px. Each has icon, title bold, description. Features: Verified Authenticity, Real-Time Bidding, Secure Transactions, Expert Curation, Fast Payouts, 24/7 Support
5. "Seller Badge Tiers": 2-column grid, 4 tier cards. Each has colored gradient background, large semi-transparent swoosh/checkmark watermark. Bronze (beige gradient, 10+ sales, 10%), Silver (grey gradient, 50+ sales, 8%), Gold (gold gradient, 200+ sales, 7%), Platinum (dark blue gradient, 500+ sales, 5%)
6. CTA section: Full-width black rounded card. "READY TO SELL?" white display font, "Create Your Listing →" white button (dark text), "Applications are reviewed within 48 hours" muted note
7. Footer
```