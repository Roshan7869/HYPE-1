# Page 19 — Order Detail (order-detail.html)

## Purpose
Deep-dive into a single order — full timeline, item breakdown, shipping info, payment receipt, and available actions (cancel, return, track). Accessible from My Orders "View Details" or via email link.

## URL
`/order/ORD-123456`

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  NAVBAR (full — with user avatar)               │
├─────────────────────────────────────────────────┤
│  BREADCRUMB: Home / My Orders / ORD-123456      │
├─────────────────────────────────────────────────┤
│  PAGE BODY (bg: --cream)                         │
│  ┌─────────────────────────────────────────────┐│
│  │  ORDER HEADER CARD (white, 20px radius)      ││
│  │  Order #ORD-123456 · 9 Jun 2026              ││
│  │  ● Processing                                ││
│  │  [Cancel Order] [Track Package]              ││
│  ├─────────────────────────────────────────────┤│
│  │  TIMELINE (vertical, full width)              ││
│  │  ●───●───○───○───○                           ││
│  │  Placed  Confirmed  Shipped  Out  Delivered  ││
│  │  2:30PM  3:15PM                           ││
│  ├─────────────────────────────────────────────┤│
│  │  ITEMS (white card)                          ││
│  │  ┌────┐ Air Jordan 1 High Retro Chicago      ││
│  │  │img │ UK 9 · DS/Brand New · Qty: 2         ││
│  │  └────┘ ₹49,998                              ││
│  │  [Write Review] [Buy Again]                  ││
│  ├─────────────────────────────────────────────┤│
│  │  SHIPPING INFO (white card)                  ││
│  │  Roshan Khatri                               ││
│  │  123 MG Road, Mumbai, 400001                 ││
│  │  +91 9876543210                              ││
│  ├─────────────────────────────────────────────┤│
│  │  PAYMENT INFO (white card)                   ││
│  │  Cash on Delivery                            ││
│  │  Subtotal ₹68,497                            ││
│  │  Shipping ₹0                                 ││
│  │  GST ₹12,329                                 ││
│  │  TOTAL ₹80,826                               ││
│  ├─────────────────────────────────────────────┤│
│  │  NEED HELP?                                  ││
│  │  [Contact Support] [FAQ] [Return Policy]    ││
│  └─────────────────────────────────────────────┘│
├─────────────────────────────────────────────────┤
│  FOOTER                                          │
└─────────────────────────────────────────────────┘
```

## Section-by-Section Specs

### 1. Navbar + Breadcrumb
Same as My Orders. Breadcrumb: Home → My Orders → Order #ORD-123456 (order number as current page, non-clickable).

### 2. Order Header Card

| Element | Specs |
|---|---|
| Background | `#fff` |
| Border-radius | `20px` |
| Padding | `24px` |
| Layout | Flex row, `justify-content: space-between`, `align-items: center` |

#### Left: Order Info

| Element | Specs |
|---|---|
| Order number | "Order #ORD-123456" 20px bold ink |
| Date | "Placed on 9 June 2026 at 2:30 PM" 14px stone |
| Status badge | Same pill style as My Orders |
| Status + dot | Green dot 8px + "Processing" 14px bold, `margin-top: 8px` |

#### Right: Actions

| Element | Specs |
|---|---|
| Layout | Flex row, `gap: 12px` |
| Track button | `.btn-primary`, "Track Package", `height: 44px`, shown for Processing/Shipped |
| Cancel button | `.btn-secondary`, "Cancel Order", `height: 44px`, shown for Processing |
| Reorder button | `.btn-primary`, "Reorder", `height: 44px`, shown for Delivered/Cancelled |
| Invoice link | "Download Invoice" 14px bold ink + underline, `margin-top: 8px` if applicable |

### 3. Timeline Section

| Element | Specs |
|---|---|
| Background | `#fff` |
| Border-radius | `20px` |
| Padding | `32px 24px` |
| Margin-top | `20px` |

#### Timeline Design

| Element | Specs |
|---|---|
| Layout | Horizontal on desktop, vertical flex row of 5 steps |
| Connector line | `2px` horizontal, `background: #e0e0e0`, behind dots |
| Active line | `background: var(--ink)` from first dot to current step |
| Step | Flex column, `align-items: center`, `flex: 1` |
| Dot | `16px` circle, `border: 2px solid` |
| Completed dot | `background: var(--ink)`, `border-color: var(--ink)`, white check icon `10px` inside |
| Current dot | `background: #fff`, `border-color: var(--ink)`, `box-shadow: 0 0 0 4px rgba(26,24,21,0.1)` |
| Pending dot | `background: #fff`, `border-color: #e0e0e0` |
| Step label | `font-size: 13px`, `font-weight: 600`, `margin-top: 12px` |
| Step time | `font-size: 12px`, `color: var(--stone)`, `margin-top: 4px` |
| Steps | "Order Placed", "Confirmed", "Shipped", "Out for Delivery", "Delivered" |

### 4. Items Section

| Element | Specs |
|---|---|
| Background | `#fff` |
| Border-radius | `20px` |
| Padding | `24px` |
| Margin-top | `20px` |
| Title | "Items in this order" 18px bold, `margin-bottom: 20px` |

#### Item Row

| Element | Specs |
|---|---|
| Layout | Flex row, `gap: 16px`, `padding: 16px 0`, `border-bottom: 1px solid #eae8e4` |
| Image | `100px × 100px`, `border-radius: 12px`, gradient |
| Info | `flex: 1` |
| Name | `font-size: 16px`, `font-weight: 600` |
| Variant | `font-size: 14px`, `color: var(--stone)` |
| Qty | "Qty: X" 14px stone |
| Price | `font-size: 18px`, `font-weight: 700`, `margin-top: 8px` |
| Actions | Flex row, `gap: 12px`, `margin-top: 12px` |
| Review button | `.btn-secondary`, "Write a Review", `height: 36px`, shown for Delivered |
| Buy Again | `.btn-secondary`, "Buy Again", `height: 36px` |
| Return button | `.btn-secondary`, "Request Return", `height: 36px`, shown for Delivered, within return window |

### 5. Shipping Information Card

| Element | Specs |
|---|---|
| Background | `#fff` |
| Border-radius | `20px` |
| Padding | `24px` |
| Margin-top | `20px` |
| Title | "Shipping Information" 18px bold, `margin-bottom: 16px` |
| Name | `font-size: 16px`, `font-weight: 700` |
| Address | `font-size: 15px`, `color: var(--stone)`, `line-height: 1.6` |
| Phone | `font-size: 15px`, `color: var(--stone)`, `margin-top: 4px` |
| Edit link | "Edit Address" 14px bold ink, right-aligned, shown if Processing |

### 6. Payment Information Card

| Element | Specs |
|---|---|
| Background | `#fff` |
| Border-radius | `20px` |
| Padding | `24px` |
| Margin-top | `20px` |
| Title | "Payment Information" 18px bold |
| Method | "Cash on Delivery" or "UPI · Google Pay" or "Card · ****4242", 15px |
| Icon | Payment method icon, `24px` |

#### Price Breakdown

| Element | Specs |
|---|---|
| Layout | `margin-top: 16px`, `padding-top: 16px`, `border-top: 1px solid #eae8e4` |
| Rows | Same as Order Confirmation |
| Subtotal, Shipping, Taxes | Label left 15px stone, value right 15px bold |
| Divider | `1px solid #eae8e4`, `margin: 12px 0` |
| Total | "Total" 18px bold, value 22px bold |
| Total paid | "Paid on 9 June 2026" 13px stone below total |

### 7. Need Help Section

| Element | Specs |
|---|---|
| Layout | Centered, `margin: 32px 0` |
| Title | "Need Help?" 18px bold |
| Links row | Flex row, `gap: 16px`, `justify-content: center`, `margin-top: 16px` |
| Contact link | `.btn-secondary`, "Contact Support", `height: 40px` |
| FAQ link | `.btn-secondary`, "FAQ", `height: 40px` |
| Policy link | `.btn-secondary`, "Return Policy", `height: 40px` |

## Data Model

```javascript
const orderDetail = {
  order: {
    id: "ORD-123456",
    date: "2026-06-09T14:30:00Z",
    status: "processing",
    items: [
      { id: "prod_001", name: "Air Jordan 1 High Retro Chicago", image: "...", size: "UK 9", condition: "DS/Brand New", qty: 2, price: 24999 },
      { id: "prod_002", name: "Yeezy 350 V2 Black", image: "...", size: "UK 8", condition: "DS/Brand New", qty: 1, price: 18499 }
    ],
    shippingAddress: { name: "Roshan Khatri", line1: "123 MG Road", city: "Mumbai", state: "Maharashtra", pin: "400001", phone: "9876543210" },
    paymentMethod: "cod",
    subtotal: 68497,
    shipping: 0,
    tax: 12329,
    total: 80826,
    timeline: [
      { step: "placed", label: "Order Placed", time: "2:30 PM", completed: true },
      { step: "confirmed", label: "Confirmed", time: "3:15 PM", completed: true },
      { step: "shipped", label: "Shipped", time: null, completed: false },
      { step: "out_for_delivery", label: "Out for Delivery", time: null, completed: false },
      { step: "delivered", label: "Delivered", time: null, completed: false }
    ],
    canCancel: true,
    canReturn: false,
    returnDeadline: null
  }
};
```

## Responsive

| Breakpoint | Behavior |
|---|---|
| > 900px | 2-column: main content left (1fr) + empty or help sidebar right (300px) |
| ≤ 900px | Single column, timeline horizontal with overflow scroll |
| ≤ 600px | Item rows stack: image top, info below |
| ≤ 600px | Header actions stack vertically |
| ≤ 600px | Timeline vertical instead of horizontal |

## Lovable Prompt

> Build the HYPE order detail page. Full navbar with avatar. Breadcrumb: Home / My Orders / Order #ORD-123456. Order header card (white, 20px radius, 24px padding): left side order number 20px bold, date 14px stone, status badge (colored pill); right side action buttons — "Track Package" primary, "Cancel Order" secondary for processing, "Reorder" for delivered, "Download Invoice" link. Timeline section (white card, 32px padding): horizontal 5-step progress bar — Order Placed, Confirmed, Shipped, Out for Delivery, Delivered. Dots: 16px circle, completed = filled ink with white check, current = white with ink border + ring, pending = white with gray border. Connector line 2px, ink up to current step. Step labels 13px bold below, times 12px stone. Items card: "Items in this order" 18px bold. Item rows: 100px gradient image, name 16px bold, variant 14px stone, qty, price 18px bold. Actions per item: "Write a Review" / "Buy Again" / "Request Return" secondary buttons 36px. Shipping card: name bold, address 15px stone line-height 1.6, phone, "Edit Address" link. Payment card: method with icon, price breakdown (subtotal/shipping/tax rows), total 22px bold, "Paid on" date. "Need Help?" section with Contact Support, FAQ, Return Policy secondary buttons. Mobile: stacked items, vertical timeline, stacked header actions. Colors: --ink, --stone, --cream.
