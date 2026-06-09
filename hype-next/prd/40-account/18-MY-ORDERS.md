# Page 18 — My Orders (my-orders.html)

## Purpose
Buyer order history — view all past purchases with status tracking, reorder capability, and quick access to order details. Complements the seller-side Orders page.

## URL
`/my-orders`

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  NAVBAR (full — with user avatar)               │
├─────────────────────────────────────────────────┤
│  BREADCRUMB: Home / Account / My Orders          │
├─────────────────────────────────────────────────┤
│  PAGE BODY (bg: --cream)                         │
│  ┌─────────────────────────────────────────────┐│
│  │  "My Orders" (H2) + Search bar               ││
│  ├─────────────────────────────────────────────┤│
│  │  [All] [Processing] [Shipped] [Delivered]    ││
│  │  [Cancelled] [Returns]                       ││
│  ├─────────────────────────────────────────────┤│
│  │  ORDER CARD LIST                             ││
│  │  ┌─────────────────────────────────────────┐││
│  │  │ Order #ORD-123456 · 9 Jun 2026          │││
│  │  │ ┌────┐ Air Jordan 1 + 1 more item       │││
│  │  │ │img │ Total: ₹80,826                      │││
│  │  │ └────┘                                 │││
│  │  │ ● Processing  [Track] [Details]         │││
│  │  └─────────────────────────────────────────┘││
│  │  ┌─────────────────────────────────────────┐││
│  │  │ Order #ORD-123455 · 5 Jun 2026          │││
│  │  │ ┌────┐ Yeezy 350 V2 Black               │││
│  │  │ │img │ Total: ₹18,499                      │││
│  │  │ └────┘                                 │││
│  │  │ ✓ Delivered  [Reorder] [Details]        │││
│  │  └─────────────────────────────────────────┘││
│  └─────────────────────────────────────────────┘│
├─────────────────────────────────────────────────┤
│  FOOTER                                          │
└─────────────────────────────────────────────────┘
```

## Section-by-Section Specs

### 1. Navbar + Breadcrumb
Same as My Bids page. Breadcrumb: Home → Account → My Orders.

### 2. Page Title + Search

| Element | Specs |
|---|---|
| Title | "My Orders" |
| Font | `font-size: 32px`, `font-weight: 700` |
| Search | Right-aligned or below title |
| Search input | `height: 44px`, `border-radius: 12px`, `border: 1px solid #e0e0e0`, `padding: 0 16px 0 40px` |
| Search icon | Lucide `search`, `18px`, `color: var(--stone)`, absolute left `12px` |
| Placeholder | "Search by order number or product name" |
| Width | `320px` or full-width on mobile |

### 3. Status Filter Tabs

| Element | Specs |
|---|---|
| Layout | Flex row wrap, `gap: 8px`, `margin: 24px 0` |
| Tab style | `padding: 8px 16px`, `border-radius: 20px`, `font-size: 14px`, `font-weight: 600` |
| Inactive | `background: #fff`, `border: 1px solid #e0e0e0`, `color: var(--stone)` |
| Active | `background: var(--ink)`, `color: #fff`, `border-color: var(--ink)` |
| Tabs | "All", "Processing", "Shipped", "Delivered", "Cancelled", "Returns" |
| Count | Badge inline, same style as My Bids |

### 4. Order Card

| Element | Specs |
|---|---|
| Background | `#fff` |
| Border | `1px solid #eae8e4` |
| Border-radius | `16px` |
| Padding | `20px` |
| Margin-bottom | `16px` |

#### Card Header

| Element | Specs |
|---|---|
| Layout | Flex row, `justify-content: space-between` |
| Left | Order number + date |
| Order number | "Order #ORD-123456" 15px bold ink |
| Date | "· 9 Jun 2026" 14px stone, inline |
| Right | Status badge |

#### Status Badge Styles

| Status | Badge Style |
|---|---|
| Processing | `background: #fef3c7`, `color: #92400e`, "Processing" |
| Shipped | `background: #dbeafe`, `color: #1e40af`, "Shipped" |
| Delivered | `background: #dcfce7`, `color: #166534`, "Delivered" |
| Cancelled | `background: #fee2e2`, `color: #991b1b`, "Cancelled" |
| Return | `background: #f3f4f6`, `color: #374151`, "Return Requested" |
| Badge padding | `4px 12px`, `border-radius: 20px`, `font-size: 13px`, `font-weight: 600` |

#### Card Body

| Element | Specs |
|---|---|
| Layout | Flex row, `gap: 16px`, `margin-top: 16px` |
| Image | `80px × 80px`, `border-radius: 12px`, gradient |
| If multiple items | Show first item image + "+ X more" overlay |
| Overlay | `position: absolute`, bottom-right, `background: rgba(0,0,0,0.7)`, `color: #fff`, `font-size: 12px`, `padding: 2px 8px`, `border-radius: 4px` |
| Info | `flex: 1` |
| Product name | `font-size: 15px`, `font-weight: 600` |
| "+ X more items" | `font-size: 14px`, `color: var(--stone)` if multi-item |
| Total | "Total: ₹XX,XXX" 16px bold, right-aligned |

#### Card Footer / Actions

| Element | Specs |
|---|---|
| Layout | Flex row, `gap: 12px`, `margin-top: 16px`, `justify-content: flex-end` |
| Track button | `.btn-secondary`, "Track Order", `height: 36px`, shown for Processing/Shipped |
| Details button | `.btn-secondary`, "View Details", `height: 36px` |
| Reorder button | `.btn-primary`, "Reorder", `height: 36px`, shown for Delivered |
| Cancel link | "Cancel Order" 14px, `color: #dc2626`, shown for Processing only |
| Return link | "Request Return" 14px, shown for Delivered only |

### 5. Order Timeline (Expanded)

When "Track Order" clicked, expand card to show timeline:

| Element | Specs |
|---|---|
| Layout | `padding-top: 20px`, `border-top: 1px solid #eae8e4`, `margin-top: 16px` |
| Timeline | Vertical line with dots |
| Dot | `12px` circle, `border: 2px solid` |
| Completed dot | Filled `var(--ink)` |
| Current dot | `border-color: var(--ink)`, `background: #fff`, pulsing ring animation |
| Pending dot | `border-color: #e0e0e0`, `background: #fff` |
| Line | `2px` vertical, `background: #e0e0e0` between dots |
| Completed line | `background: var(--ink)` |
| Step label | `font-size: 14px`, `font-weight: 600` |
| Step time | `font-size: 13px`, `color: var(--stone)` |
| Steps | "Order Placed", "Confirmed", "Shipped", "Out for Delivery", "Delivered" |

### 6. Empty State

| Element | Specs |
|---|---|
| Icon | Lucide `package-x`, `64px`, `color: var(--stone)`, centered |
| Title | "No orders yet" |
| Message | "You haven't placed any orders. Start shopping!" |
| CTA | `.btn-primary`, "Browse Products", links to `/shop` |

### 7. Pagination
Same as My Bids — 10 orders per page.

## Data Model

```javascript
const myOrders = {
  filter: "all",  // "all" | "processing" | "shipped" | "delivered" | "cancelled" | "returns"
  searchQuery: "",
  orders: [
    {
      id: "ORD-123456",
      date: "2026-06-09",
      status: "processing",
      total: 80826,
      itemCount: 2,
      thumbnail: "...",
      timeline: [
        { step: "placed", label: "Order Placed", time: "9 Jun, 2:30 PM", completed: true },
        { step: "confirmed", label: "Confirmed", time: "9 Jun, 3:15 PM", completed: true },
        { step: "shipped", label: "Shipped", time: null, completed: false }
      ]
    }
  ],
  counts: { all: 12, processing: 2, shipped: 1, delivered: 8, cancelled: 1, returns: 0 }
};
```

## Responsive

| Breakpoint | Behavior |
|---|---|
| > 600px | Cards as flex row, actions right-aligned |
| ≤ 600px | Cards stack vertically, actions full-width |
| ≤ 600px | Filter tabs scroll horizontally |
| ≤ 600px | Search full-width |

## Lovable Prompt

> Build the HYPE My Orders page. Full navbar with user avatar. Breadcrumb: Home / Account / My Orders. Title "My Orders" 32px bold + search bar (44px height, 12px radius, search icon left, "Search by order number or product name"). Status filter tabs: All/Processing/Shipped/Delivered/Cancelled/Returns — pill buttons, inactive white with border, active ink bg white text, count badges. Order cards: white, 16px radius, 20px padding. Header: order number bold + date stone + status badge (colored pill: amber Processing, blue Shipped, green Delivered, red Cancelled, gray Return). Body: 80px gradient image (with "+X more" overlay if multi-item), product name or "+X more items", total right-aligned bold. Footer actions: "Track Order" secondary for processing/shipped, "View Details" secondary, "Reorder" primary for delivered, "Cancel Order" red link for processing. Track expands timeline: vertical line with dots, completed = filled ink, current = pulsing ring, pending = gray. Steps: Order Placed, Confirmed, Shipped, Out for Delivery, Delivered with times. Empty: package-x icon 64px, "No orders yet", "Browse Products" CTA. Mobile: stacked cards, horizontal filter scroll, full-width search. Colors: --ink, --stone, --cream.
