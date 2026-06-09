# Page 20 — Wishlist (wishlist.html)

## Purpose
Saved items for future purchase — hearted products from Shop or auction detail. Simple grid with quick-add to cart, move-to-cart, and remove actions.

## URL
`/wishlist`

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  NAVBAR (full — with user avatar)               │
├─────────────────────────────────────────────────┤
│  BREADCRUMB: Home / Account / Wishlist          │
├─────────────────────────────────────────────────┤
│  PAGE BODY (bg: --cream)                         │
│  ┌─────────────────────────────────────────────┐│
│  │  "My Wishlist" (H2) · 12 items               ││
│  ├─────────────────────────────────────────────┤│
│  │  PRODUCT GRID (4-col) — same as shop         ││
│  │  Each card has heart icon (filled red)       ││
│  │  + "Move to Bag" button on hover             ││
│  │  + "Remove" X icon top-right                 ││
│  └─────────────────────────────────────────────┘│
├─────────────────────────────────────────────────┤
│  FOOTER                                          │
└─────────────────────────────────────────────────┘
```

## Section-by-Section Specs

### 1. Navbar + Breadcrumb
Same as My Bids. Breadcrumb: Home → Account → Wishlist.

### 2. Page Title

| Element | Specs |
|---|---|
| Title | "My Wishlist" |
| Font | `font-size: 32px`, `font-weight: 700` |
| Item count | "12 items" 15px stone, inline or below |

### 3. Product Grid

Uses same `.product-card` component as Shop page, with modifications:

| Element | Specs |
|---|---|
| Grid | 4-column, `gap: 20px` |
| Cards | Same white bg, `16px` radius, hidden overflow |
| Image area | Same gradient background, `aspect-ratio: 1/1` |

#### Wishlist-Specific Card Additions

| Element | Specs |
|---|---|
| Heart icon | Lucide `heart`, `20px`, `fill: #dc2626`, `color: #dc2626`, positioned top-right of image |
| Remove button | Lucide `x`, `20px`, `color: #fff`, `background: rgba(0,0,0,0.5)`, `border-radius: 50%`, `padding: 4px`, top-left of image |
| Remove hover | `background: rgba(0,0,0,0.7)` |
| Hover overlay | On card hover, semi-transparent overlay on image with CTA button |
| Overlay | `position: absolute`, `inset: 0`, `background: rgba(255,255,255,0.9)` |
| Move button | `.btn-primary`, "Move to Bag", centered on overlay, `height: 44px`, `padding: 0 24px` |
| If auction item | Button text: "Place Bid" → links to auction detail |

#### Card Info (same as Shop)

| Element | Specs |
|---|---|
| Brand | `font-size: 12px`, `font-weight: 700`, uppercase, `color: var(--stone)` |
| Name | `font-size: 15px`, `font-weight: 600` |
| Condition | `font-size: 13px`, `color: var(--stone)` |
| Price | `font-size: 16px`, `font-weight: 700`, `margin-top: 4px` |
| Lowest ask | Same as shop |

### 4. Empty State

| Element | Specs |
|---|---|
| Icon | Lucide `heart`, `64px`, `color: var(--stone)`, centered |
| Title | "Your wishlist is empty" |
| Title font | `font-size: 22px`, `font-weight: 700`, centered |
| Message | "Save items you love by clicking the heart icon while browsing." |
| Message font | `font-size: 15px`, `color: var(--stone)`, centered |
| CTA | `.btn-primary`, "Browse Products", links to `/shop` |

### 5. Recently Viewed (Below Wishlist)

If user has viewed items (stored in localStorage):

| Element | Specs |
|---|---|
| Title | "Recently Viewed" 20px bold |
| Layout | 4-column grid, same product cards |
| Cards | No heart overlay, no remove button — just standard shop cards |

## Data Model

```javascript
const wishlist = {
  items: [
    {
      id: "prod_001",
      name: "Air Jordan 1 High Retro Chicago",
      brand: "Jordan",
      image: "linear-gradient(...)",
      condition: "DS/Brand New",
      price: 24999,
      lowestAsk: 23500,
      isAuction: false
    }
  ],
  recentlyViewed: [
    // same shape, max 8 items
  ]
};
```

## Responsive

| Breakpoint | Behavior |
|---|---|
| > 1000px | 4-column grid |
| 600–1000px | 3-column grid |
| 400–600px | 2-column grid |
| ≤ 400px | 1-column grid |
| ≤ 600px | Hover overlay always visible (no hover on touch) |
| ≤ 600px | Remove button always visible |

## Lovable Prompt

> Build the HYPE wishlist page. Full navbar with avatar. Breadcrumb: Home / Account / Wishlist. Title "My Wishlist" 32px bold + item count 15px stone. 4-column product grid using same product-card component as shop: gradient image 1:1 aspect ratio, brand 12px uppercase bold stone, name 15px bold, condition 13px stone, price 16px bold. Wishlist additions: filled red heart icon 20px top-right of image. Remove button: X icon 20px white on semi-transparent black circle, top-left. On card hover: white overlay (opacity 0.9) with "Move to Bag" primary button centered, 44px height (or "Place Bid" for auction items). Empty state: heart icon 64px stone, "Your wishlist is empty", "Browse Products" CTA. "Recently Viewed" section below with standard shop cards (no heart/remove). Mobile: 3/2/1 column responsive, hover overlay always visible on touch, remove always visible. Colors: --ink, --stone, --cream.
