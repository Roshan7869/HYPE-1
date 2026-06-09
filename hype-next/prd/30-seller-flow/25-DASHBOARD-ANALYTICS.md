# Page 25 — Dashboard: Analytics (dashboard-analytics.html)

## Purpose
Seller performance hub — views, bids, conversion rates, revenue trends, and listing-level performance. Helps sellers understand what's working and optimize their strategy.

## URL
`/dashboard/analytics`

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  NAVBAR (seller mode)                             │
├─────────────────────────────────────────────────┤
│  SIDEBAR + CONTENT                               │
│  ┌────────┬────────────────────────────────────┐│
│  │ SIDE   │  "Analytics" + Date range selector   ││
│  │        ├────────────────────────────────────┤│
│  │        │  TOP STATS (4 cards)                 ││
│  │        │  [Views] [Bids] [Conv%] [Revenue]   ││
│  │        ├────────────────────────────────────┤│
│  │        │  REVENUE CHART                       ││
│  │        │  ┌────────────────────────────────┐ ││
│  │        │  │  📈 Line chart (7d/30d/90d)    │ ││
│  │        │  └────────────────────────────────┘ ││
│  │        ├────────────────────────────────────┤│
│  │        │  TOP LISTINGS TABLE                  ││
│  │        │  ┌────────────────────────────────┐ ││
│  │        │  │ Name │ Views │ Bids │ Conv │ ₹ │ ││
│  │        │  └────────────────────────────────┘ ││
│  │        ├────────────────────────────────────┤│
│  │        │  BID ACTIVITY                        ││
│  │        │  ┌────────────────────────────────┐ ││
│  │        │  │  📊 Bar chart by day            │ ││
│  │        │  └────────────────────────────────┘ ││
│  └────────┴────────────────────────────────────┘│
├─────────────────────────────────────────────────┤
│  FOOTER                                          │
└─────────────────────────────────────────────────┘
```

## Section-by-Section Specs

### 1. Page Header

| Element | Specs |
|---|---|
| Title | "Analytics" |
| Font | `font-size: 32px`, `font-weight: 700` |
| Date range | Right-aligned dropdown |
| Options | "Last 7 days", "Last 30 days", "Last 90 days", "Custom range" |
| Dropdown style | `height: 40px`, `border-radius: 8px`, `border: 1px solid #e0e0e0` |
| Default | "Last 30 days" |

### 2. Top Stats Cards

| Element | Specs |
|---|---|
| Layout | 4-column grid, `gap: 16px` |
| Card | White, `border-radius: 16px`, `padding: 24px`, `border: 1px solid #eae8e4` |

#### Stat Card

| Element | Specs |
|---|---|
| Icon | Lucide icon, `24px`, `color: var(--stone)` |
| Views icon | `eye` |
| Bids icon | `gavel` |
| Conversion icon | `target` |
| Revenue icon | `indian-rupee` |
| Value | `font-size: 28px`, `font-weight: 700`, `color: var(--ink)` |
| Label | `font-size: 13px`, `color: var(--stone)`, `margin-top: 4px` |
| Change | "+12.5% ↑" or "−3.2% ↓" |
| Positive change | `color: #22c55e` |
| Negative change | `color: #dc2626` |
| Change font | `font-size: 13px`, `font-weight: 600`, below value |

### 3. Revenue Chart

| Element | Specs |
|---|---|
| Background | `#fff` |
| Border-radius | `20px` |
| Padding | `24px` |
| Border | `1px solid #eae8e4` |
| Title | "Revenue Over Time" 18px bold |
| Period tabs | "7D", "30D", "90D" — small pill buttons, ink active |
| Chart | Line chart, `height: 250px` |
| Chart style | Smooth line, `stroke: var(--ink)`, `fill: linear-gradient(transparent to rgba(26,24,21,0.05))` |
| Y axis | ₹ amounts |
| X axis | Dates |
| Tooltip | On hover: date + revenue amount, white bg with shadow |
| Grid lines | Horizontal only, `stroke: #eae8e4`, `dashed` |
| No data | "No revenue data yet" centered message |

### 4. Top Listings Table

| Element | Specs |
|---|---|
| Background | `#fff` |
| Border-radius | `20px` |
| Padding | `24px` |
| Border | `1px solid #eae8e4` |
| Title | "Top Listings" 18px bold, `margin-bottom: 16px` |
| Margin-top | `24px` |

#### Table

| Column | Width | Alignment |
|---|---|---|
| Listing | flex: 1 | left |
| Views | 80px | right |
| Bids | 80px | right |
| Conv. Rate | 100px | right |
| Revenue | 120px | right |

#### Table Header

| Element | Specs |
|---|---|
| Background | `var(--cream)` |
| Padding | `12px 16px` |
| Font | `font-size: 13px`, `font-weight: 700`, `text-transform: uppercase`, `color: var(--stone)` |
| Border-radius | Top corners only: `8px 8px 0 0` |

#### Table Row

| Element | Specs |
|---|---|
| Padding | `16px` |
| Border-bottom | `1px solid #eae8e4` |
| Hover | `background: #faf9f7` |
| Last row | No border-bottom, border-radius bottom: `0 0 8px 8px` |

#### Listing Cell

| Element | Specs |
|---|---|
| Layout | Flex row, `gap: 12px` |
| Image | `40px × 40px`, `border-radius: 8px` |
| Name | `font-size: 14px`, `font-weight: 600`, line-clamp 1 |
| Condition | `font-size: 13px`, `color: var(--stone)` |

#### Values

| Element | Specs |
|---|---|
| Views | `font-size: 14px`, `color: var(--stone)` |
| Bids | `font-size: 14px`, `font-weight: 600` |
| Conv. Rate | `font-size: 14px`, `color: #22c55e` if > 5%, else `var(--stone)` |
| Revenue | `font-size: 14px`, `font-weight: 700` |

### 5. Bid Activity Chart

| Element | Specs |
|---|---|
| Same card style as revenue chart |
| Title | "Bid Activity" 18px bold |
| Chart | Bar chart, `height: 200px` |
| Bars | `background: var(--ink)`, `border-radius: 4px 4px 0 0` |
| Hover | Tooltip with exact count |
| X axis | Day labels |
| Y axis | Bid count |
| Period | Same date range selector |

### 6. Conversion Funnel

| Element | Specs |
|---|---|
| Layout | Below bid activity, `margin-top: 24px` |
| Card | White, 20px radius, 24px padding |
| Title | "Conversion Funnel" 18px bold |
| Funnel bars | Horizontal, decreasing width |
| Views | 100% width, `background: #dbeafe`, `color: #1e40af` |
| Bids | ~30% width, `background: #fef3c7`, `color: #92400e` |
| Sales | ~10% width, `background: #dcfce7`, `color: #166534` |
| Labels | "Views → Bids → Sales" with percentages |

## Data Model

```javascript
const analytics = {
  period: "30d",
  stats: {
    views: { value: 3420, change: 12.5 },
    bids: { value: 89, change: -3.2 },
    conversion: { value: 2.6, change: 0.3 },
    revenue: { value: 245000, change: 18.7 }
  },
  revenueChart: {
    labels: ["May 10", "May 17", "May 24", "May 31", "Jun 7"],
    data: [32000, 45000, 38000, 52000, 78000]
  },
  topListings: [
    { name: "Air Jordan 1 Retro Chicago", image: "...", condition: "DS/Brand New", views: 1245, bids: 18, conversion: 1.4, revenue: 24999 },
    { name: "Yeezy 350 V2 Black", image: "...", condition: "DS/Brand New", views: 890, bids: 12, conversion: 1.3, revenue: 18499 }
  ],
  bidActivity: {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    data: [5, 8, 12, 7, 15, 18, 9]
  },
  funnel: { views: 3420, bids: 89, sales: 23 }
};
```

## Responsive

| Breakpoint | Behavior |
|---|---|
| > 1200px | 4 stat cards in row, full chart width |
| 900–1200px | 4 stat cards in 2×2 grid |
| ≤ 900px | No sidebar, single column |
| ≤ 600px | 2×2 stat cards, chart full width, table scrolls horizontally |
| ≤ 400px | Stat cards stack vertically |

## Lovable Prompt

> Build the HYPE dashboard Analytics page. Dashboard sidebar layout. Title "Analytics" 32px bold + date range dropdown (Last 7/30/90 days, Custom). 4 stat cards (white 16px radius 24px padding): Views (eye icon 24px stone) with value 28px bold ink + "% change" 13px bold green/red, Bids (gavel icon), Conversion Rate (target icon), Revenue (rupee icon). Revenue chart card (white 20px radius 24px padding): "Revenue Over Time" 18px bold, period pill tabs 7D/30D/90D, line chart 250px height with smooth ink line and gradient fill, horizontal grid lines dashed #eae8e4, hover tooltip with date + amount. Top Listings table card: product image 40px 8px radius + name 14px bold + condition 13px stone, columns Views/Bids/Conv Rate/Revenue with right alignment. Conv Rate green if >5%. Bid Activity card: bar chart with ink bars 4px top radius, day labels. Conversion Funnel: 3 horizontal bars (Views 100% blue, Bids ~30% amber, Sales ~10% green) with labels and percentages. Mobile: 2×2 stat grid, scrollable table, full-width charts. Colors: --ink, --stone, --cream.