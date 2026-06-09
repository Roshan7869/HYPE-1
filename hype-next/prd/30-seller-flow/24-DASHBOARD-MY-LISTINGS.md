# Page 24 — Dashboard: My Listings (dashboard-my-listings.html)

## Purpose
Seller's inventory view — all active, draft, paused, and sold listings in one place. Quick actions for edit, pause, delete, and relist. The seller's daily dashboard for managing their store.

## URL
`/dashboard/listings`

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  NAVBAR (seller mode)                             │
├─────────────────────────────────────────────────┤
│  SIDEBAR + CONTENT                               │
│  ┌────────┬────────────────────────────────────┐│
│  │ SIDE   │  "My Listings" + [Create Listing]   ││
│  │        ├────────────────────────────────────┤│
│  │        │  [Active] [Drafts] [Paused] [Sold]  ││
│  │        ├────────────────────────────────────┤│
│  │        │  ┌────────────────────────────────┐││
│  │        │  │ ┌────┐ Air Jordan 1 Retro Chicago│││
│  │        │  │ │img │ UK 9 · DS/Brand New      │││
│  │        │  │ └────┘ Starting: ₹24,999        │││
│  │        │  │ 🟢 Active · 12 bids · 3d left   │││
│  │        │  │ [Edit] [Pause] [Delete]           │││
│  │        │  └────────────────────────────────┘││
│  │        │  ┌────────────────────────────────┐││
│  │        │  │ ┌────┐ Yeezy 350 V2 (Draft)     │││
│  │        │  │ │img │ UK 8 · DS/Brand New      │││
│  │        │  │ └────┘ Incomplete · Step 2 of 3 │││
│  │        │  │ [Continue] [Delete]              │││
│  │        │  └────────────────────────────────┘││
│  └────────┴────────────────────────────────────┘│
├─────────────────────────────────────────────────┤
│  FOOTER                                          │
└─────────────────────────────────────────────────┘
```

## Section-by-Section Specs

### 1. Page Header

| Element | Specs |
|---|---|
| Title | "My Listings" |
| Font | `font-size: 32px`, `font-weight: 700` |
| CTA | `.btn-primary`, "+ Create Listing", `height: 44px` |
| Layout | Flex row, `justify-content: space-between`, `align-items: center` |
| CTA href | `/dashboard/listings/new` |

### 2. Stats Bar (Above Tabs)

| Element | Specs |
|---|---|
| Layout | Flex row, `gap: 24px`, `margin-bottom: 24px` |
| Card | White, `border-radius: 12px`, `padding: 16px 24px`, `flex: 1` |
| Border | `1px solid #eae8e4` |

#### Stat Items

| Stat | Style |
|---|---|
| Active Listings | Value: number, `font-size: 24px`, `font-weight: 700`, `color: #22c55e` |
| Drafts | Value: number, `font-size: 24px`, `font-weight: 700`, `color: var(--stone)` |
| Total Views | Value: number, `font-size: 24px`, `font-weight: 700` |
| Revenue | Value: "₹XX,XXX", `font-size: 24px`, `font-weight: 700`, `color: var(--ink)` |
| Label | `font-size: 13px`, `color: var(--stone)`, below value |

### 3. Status Tabs

| Element | Specs |
|---|---|
| Same style as My Bids tabs |
| Tabs | "Active" (green dot), "Drafts", "Paused" (amber dot), "Sold" (gray dot) |
| Count | Inline badge on each tab |
| Active tab | Ink bg, white text |

### 4. Listing Card — Active

| Element | Specs |
|---|---|
| Background | `#fff` |
| Border | `1px solid #eae8e4` |
| Border-radius | `16px` |
| Padding | `20px` |
| Margin-bottom | `16px` |
| Layout | Flex row, `gap: 16px` |

#### Card Image

| Element | Specs |
|---|---|
| Size | `100px × 100px` |
| Border-radius | `12px` |
| Background | Product gradient or actual photo |
| Hover | Slight zoom `transform: scale(1.02)`, `200ms` |

#### Card Info

| Element | Specs |
|---|---|
| Name | `font-size: 16px`, `font-weight: 600`, line-clamp 1 |
| Variant | `font-size: 14px`, `color: var(--stone)`, "UK 9 · DS/Brand New" |
| Price | "Starting: ₹24,999" or "Price: ₹18,499" 15px bold |
| Status row | Flex row, `gap: 8px`, `margin-top: 8px` |
| Status dot | `8px` circle |
| Active dot | Green `#22c55e` |
| Bids count | "12 bids" 14px stone (auction) |
| Time left | "3d left" or "Ends in 2h 14m" 14px, red if < 1 hour |
| Views | "245 views" 13px stone |

#### Card Actions

| Element | Specs |
|---|---|
| Layout | Flex row, `gap: 8px`, `margin-top: 12px` |
| Edit | `.btn-secondary`, "Edit", `height: 32px`, `padding: 0 16px` |
| Pause | `.btn-secondary`, "Pause", `height: 32px` |
| Delete | Text link, "Delete", `font-size: 14px`, `color: #dc2626` |
| Delete confirm | Shows modal "Are you sure you want to delete this listing?" |

### 5. Listing Card — Draft

| Element | Specs |
|---|---|
| Status badge | "Draft" pill, `background: #f3f4f6`, `color: #374151` |
| Progress | "Incomplete · Step 2 of 3" 14px stone |
| CTA | `.btn-primary`, "Continue", `height: 36px`, links to correct step |

### 6. Listing Card — Paused

| Element | Specs |
|---|---|
| Status badge | "Paused" pill, `background: #fef3c7`, `color: #92400e` |
| Actions | "Resume" primary, "Delete" red link |

### 7. Listing Card — Sold

| Element | Specs |
|---|---|
| Status badge | "Sold" pill, `background: #dcfce7`, `color: #166534` |
| Sold price | "Sold for ₹XX,XXX" 15px bold green |
| Sold date | "Sold on 5 Jun 2026" 14px stone |
| Actions | "View Order" secondary, "Relist" primary |

### 8. Sort + Filter Bar

| Element | Specs |
|---|---|
| Layout | Flex row, `justify-content: space-between`, `margin-bottom: 20px` |
| Sort | "Sort by: Newest first" dropdown, `font-size: 14px` |
| Filter | Product category dropdown (Sneakers, Apparel, Accessories) |
| Style | Both use native select with custom styling, `height: 40px`, `border-radius: 8px` |

### 9. Empty States

| Tab | Icon | Message | CTA |
|---|---|---|---|
| Active | `tag` | "No active listings" | "Create Listing" |
| Drafts | `file-edit` | "No drafts" | "Create Listing" |
| Paused | `pause-circle` | "No paused listings" | — |
| Sold | `check-circle` | "No sold listings yet" | — |

## Data Model

```javascript
const myListings = {
  activeTab: "active",
  stats: {
    active: 3,
    drafts: 1,
    paused: 0,
    sold: 8,
    totalViews: 12450,
    revenue: 245000
  },
  listings: [
    {
      id: "list_001",
      product: { name: "Air Jordan 1 High Retro Chicago", image: "...", size: "UK 9", condition: "DS/Brand New" },
      type: "auction",
      startingBid: 24999,
      currentBid: 24999,
      bidCount: 12,
      views: 245,
      endTime: "2026-06-12T18:00:00Z",
      status: "active"  // "active" | "draft" | "paused" | "sold"
    }
  ],
  sort: "newest",
  filter: "all"
};
```

## Responsive

| Breakpoint | Behavior |
|---|---|
| > 900px | Sidebar + content, listing cards as flex rows |
| ≤ 900px | No sidebar, horizontal tabs scroll, cards stack |
| ≤ 600px | Full-width cards, image 80px, stat cards 2×2 grid |
| ≤ 600px | Actions stack vertically |

## Lovable Prompt

> Build the HYPE dashboard My Listings page. Dashboard layout with sidebar. Title "My Listings" 32px bold + "Create Listing" primary button 44px right-aligned. Stats bar: 4 cards (white 12px radius 16px padding) — Active Listings green 24px bold, Drafts stone, Total Views, Revenue ink. Status tabs: Active (green dot), Drafts, Paused (amber), Sold — with count badges, active tab ink bg. Listing cards (white 16px radius 20px padding): 100px image 12px radius + info (name 16px bold, variant 14px stone, price 15px bold) + status row (8px dot + "12 bids" + "3d left" + "245 views"). Actions: Edit secondary 32px, Pause secondary, Delete red link. Draft cards: "Draft" gray pill, "Incomplete · Step 2 of 3" stone, "Continue" primary. Paused: "Paused" amber pill, "Resume" primary. Sold: "Sold" green pill, "Sold for ₹XX" green bold, "View Order" + "Relist" buttons. Sort/filter bar above cards. Empty states per tab with icons. Mobile: stacked cards, 2×2 stats grid, scrollable tabs. Colors: --ink, --stone, --cream.