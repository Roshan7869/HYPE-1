# Page 08 — Dashboard: Orders & Shipments (orders.html)

## Purpose
Seller dashboard for tracking order lifecycle: active orders, pending pickups, authentication progress, completed and cancelled orders. With a shipment insights sidebar.

## URL
`/dashboard/orders`

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  NAVBAR                                          │
├──────────────────┬──────────────────────────────┤
│  SIDEBAR         │  DASHBOARD MAIN               │
│  (orders active) │                                │
│                  │  "Orders & Shipments"          │
│                  │  "Track pickups, authentication │
│                  │   progress and completed orders"│
│                  │                                │
│                  │  5 STAT CARDS                  │
│                  │  ┌─────┬─────┬─────┬─────┬──┐ │
│                  │  │Act-  │Pend- │Auth- │Comp-│Ca│ │
│                  │  │ive   │Pickup│enti- │let- │nc│ │
│                  │  │02    │04    │cation│ed   │el│ │
│                  │  │      │      │08    │126  │02│ │
│                  │  └─────┴─────┴─────┴─────┴──┘ │
│                  │                                │
│                  │  TABS: Pending | Auth | Done |  │
│                  │         Cancelled | Sort ▾     │
│                  │                                │
│                  │  ┌──────────────────┬─────────┐ │
│                  │  │ ORDER CARDS      │INSIGHTS │ │
│                  │  │                  │SIDEBAR  │ │
│                  │  │ ┌──────────────┐ │Next     │ │
│                  │  │ │ Pickup in 3h │ │Payout   │ │
│                  │  │ └──────────────┘ │₹42,800  │ │
│                  │  │ ┌──────────────┐ │Avg Auth │ │
│                  │  │ │ Pickup 11h   │ │1.8 days │ │
│                  │  │ └──────────────┘ │         │ │
│                  │  │                  │Fastest  │ │
│                  │  │                  │Sold Item│ │
│                  │  │                  │         │ │
│                  │  │                  │Pending  │ │
│                  │  │                  │Deadlines│ │
│                  │  │                  │Help     │ │
│                  │  └──────────────────┴─────────┘ │
│  FOOTER         │                                │
└──────────────────┴──────────────────────────────┘
```

## Section-by-Section Specs

### Dashboard Header

| Element | Specs |
|---|---|
| h1 | "Orders & Shipments" — display font, `font-size: 34-46px`, `font-weight: 800` |
| p | "Track pickups, authentication progress and completed orders." — `color: #7e776b`, `font-size: 15px` |

### 5 Stat Cards

| Property | Value |
|---|---|
| Layout | `grid-template-columns: repeat(5, 1fr)`, `gap: 16px` |
| Card | `bg: #000`, `color: white`, `border-radius: 16px`, `padding: 22px` |

**Card elements:**

| Element | Specs |
|---|---|
| Top label | Flex row with icon SVG (20×20) + text, `font-size: 14px`, `font-weight: 600`, `color: #e7e2da` |
| Number | Display font, `font-weight: 800`, `font-size: 46px`, `line-height: 1`, `margin: 14px 0 8px` |
| Subtitle | `font-size: 12px`, `color: #8c867b` |

**5 Cards:**

| # | Label | Number | Subtitle | Icon |
|---|---|---|---|---|
| 1 | Active Orders | 02 | Orders cancelled / refunded | Package/box |
| 2 | Pending Pickup | 04 | Awaiting courier pickup | Truck |
| 3 | In Authentication | 08 | Being verified by HYPE | Shield |
| 4 | Completed | 126 | Successfully delivered | Check circle |
| 5 | Cancelled | 02 | Orders cancelled / refunded | X circle |

### Order Tabs

| Property | Value |
|---|---|
| Layout | Flex row, `gap: 12px`, `margin-bottom: 22px` |
| Active tab | `bg: var(--ink)`, `color: white`, `border-radius: 999px`, `padding: 13px 26px`, `font-weight: 600`, `font-size: 15px` |
| Inactive tab | `bg: transparent`, `color: #5c564c`, same dimensions |
| Sort dropdown | Right-aligned, `bg: var(--cream-2)`, `border: 1px solid var(--line)`, `border-radius: 12px`, `padding: 13px 18px`, `font-size: 14px` |

**Tabs:** Pending Pickup (active), In Authentication, Completed, Cancelled

### Order Layout (2-column: cards + insights)

| Property | Value |
|---|---|
| Grid | `grid-template-columns: 1fr 380px`, `gap: 26px`, `align-items: start` |

**Order Cards:**

| Element | Specs |
|---|---|
| Card | `bg: var(--cream-2)`, `border: 1px solid var(--line-soft)`, `border-radius: 18px`, `padding: 26px 28px`, `margin-bottom: 20px` |
| Title (h3) | "Pickup Scheduled" — display font, `font-size: 22px`, `font-weight: 800` |
| Due | `color: var(--red)`, `font-weight: 600`, `font-size: 15px`, `margin: 8px 0 4px` |
| Description | `color: #7e776b`, `font-size: 15px`, `margin-bottom: 18px` |
| Track button | `bg: var(--ink)`, `color: white`, `border-radius: 10px`, `padding: 13px 24px`, `font-weight: 600`, `font-size: 14px` |

**2 Order Cards:**

| # | Title | Due | Description |
|---|---|---|---|
| 1 | Pickup Scheduled | Pickup in 3 hrs | Courier partner will collect and verify packaging |
| 2 | Pickup Scheduled | Pickup in 11 hrs | Courier partner will collect and verify packaging |

### Insights Sidebar

| Property | Value |
|---|---|
| Card | `bg: var(--cream-2)`, `border: 1px solid var(--line-soft)`, `border-radius: 18px`, `padding: 26px` |
| Title (h3) | "Shipment Insights" — display font, `font-size: 20px`, `font-weight: 800`, `margin-bottom: 20px` |

**Insight Blocks:**

| # | Title | Value | Subtitle | Type |
|---|---|---|---|---|
| 1 | Next Payout (Est.) | ₹42,800 | Expected on 24 May, 2026 | Value + info icon |
| 2 | Avg Authentication Time | 1.8 days | −0.3 days vs last 30 days *(green)* | Value + info icon |
| 3 | Fastest Sold Item | Jordan 4 Retro Military Black | Sold in 28 mins | Image + text |
| 4 | Pending Deadlines | 2 Pickups in < 12 hrs | — | Value + button |

**Insight block styling:**
- `border-top: 1px solid var(--line-soft)`, `padding: 16px 0`
- First block: no border-top
- Value: display font, `font-weight: 800`, `font-size: 30px`
- Small value variant: `font-size: 26px`
- Green subtitle: `color: var(--green-ink)`, `font-weight: 600`

**Help Block:**

| Element | Specs |
|---|---|
| Title | "Need Help?" — `font-weight: 700`, `font-size: 15px` |
| Text | `font-size: 14px`, `color: #7e776b` |
| Link | "Go to Help Center →" — `font-weight: 700`, arrow icon, inline-flex |

---

## Responsive Behavior (< 1100px)

- Stat cards → 2 columns
- Order layout → single column (insights stack below)
- Tabs wrap or scroll horizontally

---

## Lovable Build Prompt

```
Build a Dashboard "Orders & Shipments" page for HYPE marketplace — seller tracks order lifecycle.

Layout: Dashboard (300px sidebar with "Orders & Shipments" active + main content).

Main content:
1. Header: "Orders & Shipments" h1, "Track pickups, authentication progress and completed orders." subtitle
2. 5 Stat cards in a row (gap 16px). Each card: black bg, white text, rounded 16px, 22px padding. Top: icon (SVG 20px) + label (14px bold, cream color). Middle: large number (46px display font 800). Bottom: subtitle (12px muted). Cards: Active Orders 02, Pending Pickup 04, In Authentication 08, Completed 126, Cancelled 02
3. Tabs row: "Pending Pickup" (active, dark pill), "In Authentication", "Completed", "Cancelled" (muted cream pills) + "Sort by: Newest ▾" dropdown right-aligned
4. Two-column layout (1fr 380px):
   - Left: 2 order cards stacked. Each card: cream-2 bg, rounded 18px, 26px padding, 1px soft border. Title "Pickup Scheduled" (22px display font bold), red due time ("Pickup in 3 hrs"), description, "Track Pickup" dark button (rounded 10px)
   - Right: Shipment Insights sidebar (cream-2 bg, rounded 18px, 26px padding). Sections: Next Payout ₹42,800 (Expected on 24 May 2026), Avg Auth Time 1.8 days (green "−0.3 vs last 30"), Fastest Sold Item "Jordan 4 Retro Military Black — Sold in 28 mins" with dark gradient thumbnail, Pending Deadlines "2 Pickups in < 12 hrs" with "View Deadlines" dark button, "Need Help?" section with Help Center link

Design system: ink #0c0b0a, cream #f5efe4, cream-2 #efe7da, line-soft #e8ddd0, red #e8543b, green-ink #2d7a3a, Hanken Grotesk, max-width 1500px. Responsive: 2-col stats below 1100px, single column layout.
```