# Page 17 — My Bids (my-bids.html)

## Purpose
Buyer dashboard page tracking all active, won, and lost auctions. Central hub for auction participation — shows bid status, time remaining, and quick actions to pay for won auctions.

## URL
`/my-bids`

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  NAVBAR (full — with user avatar dropdown)       │
├─────────────────────────────────────────────────┤
│  BREADCRUMB: Home / Account / My Bids            │
├─────────────────────────────────────────────────┤
│  PAGE BODY (bg: --cream)                         │
│  ┌─────────────────────────────────────────────┐│
│  │  "My Bids" (H2) + Tab switcher               ││
│  ├─────────────────────────────────────────────┤│
│  │  [Active] [Won] [Lost] [All]                ││
│  ├─────────────────────────────────────────────┤│
│  │  BID CARD LIST                               ││
│  │  ┌─────────────────────────────────────────┐││
│  │  │ ┌────┐ Air Jordan 1 High Retro Chicago   │││
│  │  │ │img │ UK 9 · DS/Brand New               │││
│  │  │ └────┘                                 │││
│  │  │ Your bid: ₹24,500    Current: ₹24,999   │││
│  │  │ 🔴 Outbid — 2h 14m remaining            │││
│  │  │ [Increase Bid]                          │││
│  │  └─────────────────────────────────────────┘││
│  │  ┌─────────────────────────────────────────┐││
│  │  │ ┌────┐ Yeezy 350 V2 Black                │││
│  │  │ │img │ UK 8 · DS/Brand New               │││
│  │  │ └────┘                                 │││
│  │  │ Your bid: ₹18,000    Current: ₹18,000   │││
│  │  │ 🟢 Winning — 45m remaining              │││
│  │  │ [View Auction]                          │││
│  │  └─────────────────────────────────────────┘││
│  ├─────────────────────────────────────────────┤│
│  │  (WON TAB)                                  ││
│  │  ┌─────────────────────────────────────────┐││
│  │  │ ┌────┐ Nike Dunk Low Panda               │││
│  │  │ │img │ UK 10 · DS/Brand New              │││
│  │  │ └────┘                                 │││
│  │  │ Winning bid: ₹9,999 · Won 2 hours ago   │││
│  │  │ ⏰ Payment due in 22:00:00              │││
│  │  │ [Complete Payment] [Decline]            │││
│  │  └─────────────────────────────────────────┘││
│  └─────────────────────────────────────────────┘│
├─────────────────────────────────────────────────┤
│  FOOTER                                          │
└─────────────────────────────────────────────────┘
```

## Section-by-Section Specs

### 1. Navbar

Full navbar as per design system. User avatar shows in top-right when logged in — `36px` circle with initials or profile image. Dropdown on hover: "My Account", "My Bids", "My Orders", "Wishlist", "Logout".

### 2. Breadcrumb

| Element | Specs |
|---|---|
| Path | Home → Account → My Bids |
| Current | "My Bids" |

### 3. Page Title

| Element | Specs |
|---|---|
| Title | "My Bids" |
| Font | `font-size: 32px`, `font-weight: 700` |
| Color | `var(--ink)` |
| Margin | `0 0 24px 0` |

### 4. Tab Switcher

| Element | Specs |
|---|---|
| Layout | Flex row, `gap: 8px`, `border-bottom: 2px solid #eae8e4` |
| Tab style | `padding: 12px 20px`, `font-size: 15px`, `font-weight: 600` |
| Inactive | `color: var(--stone)` |
| Active | `color: var(--ink)`, `border-bottom: 2px solid var(--ink)`, `margin-bottom: -2px` |
| Tabs | "Active", "Won", "Lost", "All" |
| Badge | Count bubble on each tab, `background: var(--ink)`, `color: #fff`, `font-size: 12px`, `padding: 2px 8px`, `border-radius: 10px` |
| Example | "Active · 3" |

### 5. Bid Card

| Element | Specs |
|---|---|
| Background | `#fff` |
| Border | `1px solid #eae8e4` |
| Border-radius | `16px` |
| Padding | `20px` |
| Margin-bottom | `16px` |
| Layout | Flex row, `gap: 16px` |

#### Card Left: Image

| Element | Specs |
|---|---|
| Size | `80px × 80px` |
| Border-radius | `12px` |
| Background | Product gradient (same as shop) |

#### Card Center: Info

| Element | Specs |
|---|---|
| Name | `font-size: 16px`, `font-weight: 600`, `color: var(--ink)` |
| Variant | `font-size: 14px`, `color: var(--stone)`, `margin-top: 4px` |
| Bid row | `margin-top: 12px`, flex row, `gap: 16px` |
| Your bid label | "Your bid:" 13px stone |
| Your bid value | `font-size: 16px`, `font-weight: 700` |
| Current bid label | "Current:" 13px stone |
| Current bid value | `font-size: 16px`, `font-weight: 700` |

#### Status Row

| Element | Specs |
|---|---|
| Layout | Flex row, `align-items: center`, `gap: 8px`, `margin-top: 8px` |
| Status dot | `8px` circle |
| Winning dot | `#22c55e` (green) |
| Outbid dot | `#dc2626` (red) |
| Leading dot | `#3b82f6` (blue) — you're highest but reserve not met |
| Status text | `font-size: 14px`, `font-weight: 600` |
| Winning text | "Winning" in green |
| Outbid text | "Outbid" in red |
| Leading text | "Leading — reserve not met" in blue |
| Time remaining | `font-size: 14px`, `color: var(--stone)` |
| Time format | "45m remaining" or "2h 14m remaining" |
| Time urgency | Under 10 min: text turns red, font-weight 700 |

#### Card Right: Action

| Element | Specs |
|---|---|
| Layout | Flex column, `align-items: flex-end`, `justify-content: center`, `gap: 8px` |
| Outbid action | `.btn-primary`, "Increase Bid", `height: 40px`, `padding: 0 20px` |
| Winning action | `.btn-secondary`, "View Auction", `height: 40px` |
| Lost state | "Auction ended" text 14px stone, no button |

### 6. Won Tab Variant

Bid cards in Won tab have different actions:

| Element | Specs |
|---|---|
| Status dot | `#22c55e` |
| Status text | "Won" in green |
| Win time | "Won 2 hours ago" 14px stone |
| Winning bid | "Winning bid: ₹9,999" 15px bold |
| Payment countdown | `font-size: 16px`, `font-weight: 700`, `color: #dc2626` |
| Countdown format | "Payment due in 22:00:00" |
| Payment button | `.btn-primary`, "Complete Payment", full-width of card right area |
| Decline link | "Decline" 14px, `color: var(--stone)`, underline on hover |
| Decline action | Shows confirmation modal |

### 7. Lost Tab Variant

| Element | Specs |
|---|---|
| Status dot | `#9ca3af` (gray) |
| Status text | "Lost" in gray |
| Final price | "Sold for ₹XX,XXX" 15px bold |
| Action | "View Similar" `.btn-secondary` button, links to shop with same product search |

### 8. Empty States

| Tab | Message |
|---|---|
| Active | "No active bids" + "Browse auctions" CTA |
| Won | "No won auctions yet" + "Browse auctions" CTA |
| Lost | "No lost auctions" |
| All | "You haven't placed any bids yet" + "Browse auctions" CTA |

Empty state style: centered, `shopping-bag` icon `48px` stone, title `18px` bold, message `15px` stone, `.btn-primary` CTA.

### 9. Pagination

If > 10 bids per tab, show pagination at bottom:

| Element | Specs |
|---|---|
| Layout | Centered, `margin-top: 32px` |
| Style | Same as Shop pagination |
| Page size | 10 bids per page |

## Data Model

```javascript
const myBids = {
  activeTab: "active",  // "active" | "won" | "lost" | "all"
  bids: [
    {
      id: "bid_001",
      product: {
        id: "prod_001",
        name: "Air Jordan 1 High Retro Chicago",
        image: "...",
        size: "UK 9",
        condition: "DS/Brand New"
      },
      yourBid: 24500,
      currentBid: 24999,
      status: "outbid",      // "winning" | "outbid" | "leading" | "won" | "lost"
      timeRemaining: 8040,   // seconds
      endTime: "2026-06-09T18:00:00Z",
      paymentDeadline: null  // set if won
    }
  ],
  counts: { active: 3, won: 1, lost: 5, all: 9 }
};
```

## Responsive

| Breakpoint | Behavior |
|---|---|
| > 600px | Bid cards as flex row (image + info + action side by side) |
| ≤ 600px | Bid cards stack: image top, info below, action full-width below |
| ≤ 600px | Tab text shrinks to 13px, padding 8px 12px |
| ≤ 600px | Won tab payment button full-width |

## Lovable Prompt

> Build the HYPE My Bids page. Full navbar with user avatar dropdown (My Account, My Bids, My Orders, Wishlist, Logout). Breadcrumb: Home / Account / My Bids. Title "My Bids" 32px bold. Tab switcher: Active/Won/Lost/All tabs with count badges (ink bg white text 12px). Active tab has bottom border 2px ink. Bid cards: white bg, 16px radius, 20px padding, flex row. Left: 80px gradient image 12px radius. Center: product name 16px bold, variant 14px stone, bid row with "Your bid: ₹XX" and "Current: ₹XX" labels + values. Status row: colored dot (8px, green/red/blue) + status text (Winning/Outbid/Leading) bold + time remaining. Right: action button — "Increase Bid" primary 40px for outbid, "View Auction" secondary 40px for winning. Won tab variant: green Won status, "Won X hours ago", "Winning bid: ₹XX", red countdown "Payment due in HH:MM:SS", "Complete Payment" primary button + "Decline" link. Lost tab: gray dot, "Sold for ₹XX", "View Similar" secondary button. Empty states: centered shopping-bag icon, message, "Browse auctions" CTA. Pagination if >10 items. Mobile: stacked cards, full-width actions, smaller tabs. Colors: --ink, --stone, --cream.
