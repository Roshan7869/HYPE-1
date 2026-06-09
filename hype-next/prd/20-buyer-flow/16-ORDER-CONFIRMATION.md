# Page 16 — Order Confirmation (order-confirmation.html)

## Purpose
Post-purchase confirmation page — celebrates the order, shows next steps, and builds trust. Handles both Buy Now orders and auction wins. No navbar distractions; clear CTA to continue shopping.

## URL
`/order-confirmation?order=ORD-123456`

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  MINIMAL HEADER (logo only)                      │
├─────────────────────────────────────────────────┤
│  CONFIRMATION BODY (bg: --cream)                 │
│  ┌─────────────────────────────────────────────┐│
│  │  ✓ Large green circle check (80px)          ││
│  │  "Order Confirmed!" (H2, 32px bold)         ││
│  │  "Your order #ORD-123456 has been placed."  ││
│  ├─────────────────────────────────────────────┤│
│  │  ORDER STATUS CARD (white, 20px radius)     ││
│  │  ┌─────────────────────────────────────────┐││
│  │  │ Order Number: ORD-123456                │││
│  │  │ Date: 9 Jun 2026                        │││
│  │  │ Status: Confirmed · Processing           │││
│  │  │                                         │││
│  │  │ ┌────┐ Air Jordan 1 High Retro Chicago   │││
│  │  │ │img │ UK 9 · DS/Brand New · Qty: 2      │││
│  │  │ └────┘ ₹49,998                          │││
│  │  │ ┌────┐ Yeezy 350 V2 Black                │││
│  │  │ │img │ UK 8 · DS/Brand New · Qty: 1      │││
│  │  │ └────┘ ₹18,499                          │││
│  │  │                                         │││
│  │  │ ───────────────────────────────────────  │││
│  │  │ Subtotal               ₹68,497           │││
│  │  │ Shipping               ₹0              │││
│  │  │ GST (18%)             ₹12,329           │││
│  │  │ ───────────────────────────────────────  │││
│  │  │ TOTAL                  ₹80,826           │││
│  │  │ Payment: Cash on Delivery               │││
│  │  │ Shipping to: Roshan Khatri              │││
│  │  │ 123 MG Road, Mumbai, 400001             │││
│  │  └─────────────────────────────────────────┘││
│  ├─────────────────────────────────────────────┤│
│  │  WHAT'S NEXT?                               ││
│  │  ┌────────┐ ┌────────┐ ┌────────┐          ││
│  │  │ 📦     │ │ 📧     │ │ 🏠     │          ││
│  │  │Order   │ │Email   │ │Track   │          ││
│  │  │Packing │ │Confirm │ │Order   │          ││
│  │  └────────┘ └────────┘ └────────┘          ││
│  ├─────────────────────────────────────────────┤│
│  │  [Continue Shopping]  [View My Orders]      ││
│  └─────────────────────────────────────────────┘│
├─────────────────────────────────────────────────┤
│  FOOTER (minimal)                                │
└─────────────────────────────────────────────────┘
```

## Section-by-Section Specs

### 1. Minimal Header

| Element | Specs |
|---|---|
| Background | `var(--cream)` |
| Height | `80px` |
| Content | Logo only, centered or left-aligned, links to `/` |
| No nav links, no search, no icons |

### 2. Success Hero

| Element | Specs |
|---|---|
| Icon container | `80px × 80px`, `border-radius: 50%`, `background: #22c55e`, centered |
| Icon | Lucide `check`, `40px`, `color: #fff`, centered in circle |
| Animation | Scale in from 0.5 → 1, `300ms`, `ease-out` |
| Title | "Order Confirmed!" |
| Title font | Hanken Grotesk, `font-size: 32px`, `font-weight: 700`, centered |
| Subtitle | "Your order #ORD-123456 has been placed successfully." |
| Subtitle font | `font-size: 16px`, `color: var(--stone)`, centered |
| Margin | `32px` between icon and title, `8px` between title and subtitle |

### 3. Order Status Card

| Element | Specs |
|---|---|
| Background | `#fff` |
| Border | `1px solid #eae8e4` |
| Border-radius | `20px` |
| Padding | `32px` |
| Max-width | `600px` |
| Margin | `32px auto` |

#### Order Meta

| Element | Specs |
|---|---|
| Layout | 3-column grid or flex row |
| Order Number | Label "Order Number" 13px stone, value "ORD-123456" 15px bold ink |
| Date | Label "Order Date" 13px stone, value "9 Jun 2026" 15px bold ink |
| Status | Label "Status" 13px stone, value "Confirmed · Processing" 15px bold ink |
| Status dot | `8px` circle, `background: #22c55e`, inline before status text |
| Divider below | `1px solid #eae8e4`, `margin: 20px 0` |

#### Item List

| Element | Specs |
|---|---|
| Layout | Same as checkout review items |
| Thumbnail | `64px × 64px`, `border-radius: 10px`, gradient |
| Name | `font-size: 15px`, `font-weight: 600` |
| Variant | `font-size: 13px`, `color: var(--stone)` |
| Qty | "Qty: X" 13px stone |
| Price | Right-aligned, `font-size: 15px`, `font-weight: 700` |
| Divider after items | `1px solid #eae8e4`, `margin: 20px 0` |

#### Price Breakdown

| Element | Specs |
|---|---|
| Layout | Flex row, `justify-content: space-between` per row |
| Subtotal | Label 15px stone, value 15px bold ink |
| Shipping | Label 15px stone, value 15px bold ink (or "Free" in green) |
| Taxes | Label 15px stone, value 15px bold ink |
| Total | Label 18px bold ink, value 22px bold ink |
| Total margin | `margin-top: 12px`, `padding-top: 12px`, `border-top: 2px solid var(--ink)` |

#### Payment & Shipping Info

| Element | Specs |
|---|---|
| Divider | `1px solid #eae8e4`, `margin: 20px 0` |
| Payment | Label "Payment Method" 13px stone, value "Cash on Delivery" 15px bold |
| Shipping | Label "Shipping to" 13px stone, address 15px bold |
| Address | `line-height: 1.5`, `color: var(--stone)` |

### 4. What's Next Section

| Element | Specs |
|---|---|
| Title | "What's Next?" |
| Title font | `font-size: 20px`, `font-weight: 700`, centered |
| Layout | 3-column grid, `gap: 16px`, `margin-top: 20px` |

#### Step Cards

| Element | Specs |
|---|---|
| Card | White, `16px` radius, `24px` padding, `border: 1px solid #eae8e4` |
| Icon | `32px`, `color: var(--ink)`, centered |
| Icon 1 | Lucide `package`, step "Order Packing" |
| Icon 2 | Lucide `mail`, step "Email Confirmation" |
| Icon 3 | Lucide `map-pin`, step "Track Order" |
| Step title | `font-size: 15px`, `font-weight: 600`, centered, `margin-top: 12px` |
| Step desc | `font-size: 13px`, `color: var(--stone)`, centered |
| Step 1 desc | "We're preparing your items for shipment" |
| Step 2 desc | "A confirmation email has been sent to you" |
| Step 3 desc | "Track your package once it ships" |

### 5. CTA Buttons

| Element | Specs |
|---|---|
| Layout | Flex row, `gap: 16px`, centered, `margin-top: 32px` |
| Continue Shopping | `.btn-secondary`, "Continue Shopping", `height: 48px`, `padding: 0 32px` |
| View Orders | `.btn-primary`, "View My Orders", `height: 48px`, `padding: 0 32px` |
| View Orders href | `/my-orders` |

### 6. Auction Win Variant

If this is an auction win (not Buy Now), modify:

| Element | Specs |
|---|---|
| Title | "Auction Won! 🎉" |
| Subtitle | "You won the Air Jordan 1 High Retro Chicago for ₹24,999" |
| Status | "Awaiting Payment · Complete within 24 hours" |
| Status color | `color: #f59e0b` (amber warning) |
| Countdown | "23:59:59 remaining" in `font-size: 18px`, `font-weight: 700`, `color: #dc2626` |
| CTA | "Complete Payment" primary button instead of "View My Orders" |

## Data Model

```javascript
const orderConfirmation = {
  order: {
    id: "ORD-123456",
    date: "2026-06-09",
    status: "confirmed",  // "confirmed" | "processing" | "shipped" | "delivered"
    items: [
      { id: "prod_001", name: "Air Jordan 1 High Retro Chicago", size: "UK 9", condition: "DS/Brand New", qty: 2, price: 24999, image: "..." },
      { id: "prod_002", name: "Yeezy 350 V2 Black", size: "UK 8", condition: "DS/Brand New", qty: 1, price: 18499, image: "..." }
    ],
    subtotal: 68497,
    shipping: 0,
    tax: 12329,
    total: 80826,
    paymentMethod: "cod",
    shippingAddress: {
      name: "Roshan Khatri",
      line1: "123 MG Road",
      city: "Mumbai",
      pin: "400001"
    },
    isAuctionWin: false,  // true for auction wins
    auctionDeadline: null  // ISO date if auction win
  }
};
```

## Responsive

| Breakpoint | Behavior |
|---|---|
| > 600px | Card centered, 600px max-width, 3 step cards in row |
| ≤ 600px | Full-width card, no radius, 24px padding |
| ≤ 600px | Step cards stack vertically |
| ≤ 600px | CTA buttons stack vertically, full-width |
| ≤ 600px | Order meta stacks vertically |

## Lovable Prompt

> Build the HYPE order confirmation page. Minimal header with logo only. Centered content. Large green circle (80px) with white check icon 40px, scale-in animation. Title "Order Confirmed!" 32px bold centered. Subtitle with order number 16px stone. White order status card (600px max, 20px radius, 32px padding): order meta row — Order Number, Date, Status with green dot. Divider. Item list: 64px gradient thumbnails, name 15px bold, variant 13px stone, qty, price right-aligned. Divider. Price breakdown: subtotal/shipping/tax rows, then total with top border 2px ink, total value 22px bold. Payment method + shipping address below. "What's Next?" section: 3 white cards (16px radius, 24px padding) with icons — package "Order Packing", mail "Email Confirmation", map-pin "Track Order" — each with title 15px bold and description 13px stone. Two CTA buttons: "Continue Shopping" secondary + "View My Orders" primary. Auction win variant: amber status "Awaiting Payment · Complete within 24 hours", red countdown "23:59:59", "Complete Payment" button. Mobile: full-width card, vertical steps, stacked CTAs. Colors: --ink, --stone, --cream.
