# Page 07 — Dashboard: Select Size (create-listing-size.html)

## Purpose
Step 3 of the 6-step listing flow. Seller selects their shoe size from a grid of available US Women's sizes with current bid/ask prices for each.

## URL
`/dashboard/create-listing/size`

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  NAVBAR                                          │
├──────────────────┬──────────────────────────────┤
│  SIDEBAR         │  DASHBOARD MAIN               │
│  (create active) │                                │
│                  │  "List Your Next Drop"         │
│                  │  ← Back                         │
│                  │                                │
│                  │  STEPPER: ✓1 → ✓2 → 3 Size → │
│                  │    4 → 5 → 6                   │
│                  │                                │
│                  │  ┌──────────────────────────┐ │
│                  │  │  Step 3: Choose Your Size │ │
│                  │  │                            │ │
│                  │  │  Size (US Women's)         │ │
│                  │  │  ┌────────────────────┐   │ │
│                  │  │  │  SIZE TABS ROW      │   │ │
│                  │  │  │  US W | US M | UK   │   │ │
│                  │  │  └────────────────────┘   │ │
│                  │  │                            │ │
│                  │  │  SIZE GRID (5 columns)     │ │
│                  │  │  ┌───┐ ┌───┐ ┌───┐ ┌───┐  │ │
│                  │  │  │ 5 │ │5.5│ │ 6 │ │6.5│  │ │
│                  │  │  │₹12│ │₹12│ │₹12│ │₹14│  │ │
│                  │  │  │₹13│ │₹13│ │₹14│ │₹15│  │ │
│                  │  │  └───┘ └───┘ └───┘ └───┘  │ │
│                  │  │  ┌───┐ ┌───┐ ┌───┐ ┌───┐  │ │
│                  │  │  │ 7 │ │7.5│ │ 8 │ │8.5│  │ │
│                  │  │  └───┘ └───┘ └───┘ └───┘  │ │
│                  │  │  ... (5.5, 9, 9.5, 10,    │ │
│                  │  │        10.5, 11, 12 total)  │ │
│                  │  └────────────────────────────┘ │
│                  │                                │
│                  │  [Save as Draft]  [Next step →]│
│  FOOTER         │                                │
└──────────────────┴──────────────────────────────┘
```

## Section-by-Section Specs

### Dashboard Header & Stepper

Same as listing-details page but:
- Steps 1-2 show ✓ checkmarks (completed)
- Step 3 "Size" is current (ink circle "3")
- Steps 4-6 are future (muted)

### Size Selection Card

| Property | Value |
|---|---|
| Card | `bg: var(--cream)`, `border-radius: 22px`, `padding: 36px` |
| Step number | "3" in `34×34px` ink circle |
| Title | "Choose Your Size" — display font, `font-size: 24px`, `font-weight: 800` |
| Subtitle | "Select the size of your item to see current market prices." — `color: #7e776b`, `font-size: 15px` |

### Size Type Tabs

| Property | Value |
|---|---|
| Layout | Flex row, `gap: 14px`, `margin: 24px 0 22px` |
| Active tab | `bg: var(--ink)`, `color: white`, `border-radius: 999px`, `padding: 11px 24px`, `font-weight: 600`, `font-size: 14px`, `letter-spacing: 0.08em` |
| Inactive tab | `bg: var(--cream-2)`, `color: var(--ink)`, same dimensions |

**Tab options:** US Women's (active), US Men's, UK

### Size Grid

| Property | Value |
|---|---|
| Layout | `grid-template-columns: repeat(5, 1fr)`, `gap: 14px` |
| Total sizes | 17 size cards |

**Individual Size Card:**

| Element | Specs |
|---|---|
| Card | `bg: white`, `border: 1.5px solid var(--line-soft)`, `border-radius: 14px`, `padding: 20px 16px`, `cursor: pointer`, `text-align: center`, `transition: all 0.2s` |
| Hover | `border-color: var(--ink)`, slight scale |
| Size number | `font-family: var(--font-disp)`, `font-weight: 800`, `font-size: 22px`, `margin-bottom: 10px` |
| "ASK" label | `font-size: 11px`, `letter-spacing: 0.12em`, `color: #9c958a`, `text-transform: uppercase` |
| Ask price | `font-family: var(--font-disp)`, `font-weight: 800`, `font-size: 15px` |
| "BID" label | `font-size: 11px`, `letter-spacing: 0.12em`, `color: #9c958a`, `text-transform: uppercase`, `margin-top: 6px` |
| Bid price | `font-family: var(--font-disp)`, `font-weight: 800`, `font-size: 15px`, `color: var(--red)` (or default ink) |

**Selected state:** `border-color: var(--ink)`, `bg: var(--cream)`, inner highlight.

### Size Data (US Women's)

| Size | Ask | Bid |
|---|---|---|
| 5 | ₹12,800 | ₹13,500 |
| 5.5 | ₹12,800 | ₹13,500 |
| 6 | ₹12,800 | ₹14,100 |
| 6.5 | ₹14,200 | ₹15,500 |
| 7 | ₹14,900 | ₹16,200 |
| 7.5 | ₹14,900 | ₹16,200 |
| 8 | ₹15,200 | ₹17,100 |
| 8.5 | ₹15,200 | ₹17,100 |
| 9 | ₹15,600 | ₹17,500 |
| 9.5 | ₹15,600 | ₹17,500 |
| 10 | ₹16,800 | ₹18,500 |
| 10.5 | ₹16,800 | ₹18,500 |
| 11 | ₹17,800 | ₹19,500 |
| 11.5 | ₹17,800 | ₹19,500 |
| 12 | ₹18,200 | ₹20,100 |

### Action Buttons

Same pattern as listing-details:
- Left: "Save as Draft" — `.btn.btn--outline.btn--lg`
- Right: "Next step →" — `.btn.btn--dark.btn--lg`

---

## Responsive Behavior (< 1100px)

- Size grid → 3 columns
- Sidebar collapses
- Stepper may truncate labels

---

## Lovable Build Prompt

```
Build a Dashboard "Select Size" page (Step 3 of 6) for HYPE marketplace selling flow.

Layout: Dashboard (300px sidebar with "Create Listing" active + main content).

Main content:
1. Header: "List Your Next Drop" h1
2. Back link: "← Back"
3. Stepper: 6 steps. Steps 1-2 complete (green checkmarks). Step 3 "Size" is current (ink circle with "3"). Steps 4-6 future (muted). Circles 48px round, connecting lines between them.
4. Size card (cream bg, rounded 22px, 36px padding):
   - Step badge "3" (34px ink circle) + "Choose Your Size" title + "Select the size of your item to see current market prices." subtitle
   - Size type tabs: "US Women's" (active, dark pill), "US Men's", "UK" (cream pills)
   - 5-column grid of 14 size cards. Each card: white bg, rounded 14px, 1.5px border, centered text. Contains: size number (22px display font bold 800), "ASK" label (11px uppercase muted), ask price (15px display font bold), "BID" label (11px uppercase muted), bid price (15px display font bold). Sizes: 5, 5.5, 6, 6.5, 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12 with corresponding ask/bid prices in ₹.
5. Action row: "Save as Draft" outline button (left) + "Next step →" dark button (right)

Design system: ink #0c0b0a, cream #f5efe4, cream-2 #efe7da, line-soft #e8ddd0, red #e8543b, Hanken Grotesk, max-width 1500px. Cards have hover border change. Responsive: 3 columns below 1100px.
```