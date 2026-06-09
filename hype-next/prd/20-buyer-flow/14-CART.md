# Page 14 — Cart / Bag (cart.html)

## Purpose
Shopping cart for Buy Now items. Auction items do not go to cart — they trigger immediate checkout on win. Cart shows item thumbnails, pricing, quantity controls, and a persistent order summary sidebar.

## URL
`/cart`

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  NAVBAR (full — with cart icon showing count)   │
├─────────────────────────────────────────────────┤
│  BREADCRUMB: Home / Cart                         │
├─────────────────────────────────────────────────┤
│  CART BODY (bg: --cream)                         │
│  ┌────────────────────────┬────────────────────┐│
│  │  "Your Bag" (H2)       │  ORDER SUMMARY    ││
│  │  3 items               │  ┌──────────────┐ ││
│  ├────────────────────────┤  │ Subtotal  ₹XX│ ││
│  │ ┌────┐ Jordan 1 High   │  │ Shipping  ₹XX│ ││
│  │ │img │ Retro Chicago    │  │ Taxes     ₹XX│ ││
│  │ └────┘ UK 9 · Qty [2]  │  │──────────────│ ││
│  │        ₹24,999    🗑   │  │ Total     ₹XX│ ││
│  ├────────────────────────┤  │ [Checkout]   │ ││
│  │ ┌────┐ Yeezy 350       │  │              │ ││
│  │ │img │ V2 Black        │  │              │ ││
│  │ └────┘ UK 8 · Qty [1]  │  └──────────────┘ ││
│  │        ₹18,499    🗑   │                   ││
│  ├────────────────────────┤  │                   ││
│  │ ┌────┐ Nike Dunk Low   │  │                   ││
│  │ │img │ Panda           │  │                   ││
│  │ └────┘ UK 10 · Qty [1] │  │                   ││
│  │        ₹9,999     🗑   │  │                   ││
│  ├────────────────────────┤  │                   ││
│  │ [Continue Shopping]    │  │                   ││
│  └────────────────────────┴────────────────────┘│
├─────────────────────────────────────────────────┤
│  FOOTER                                          │
└─────────────────────────────────────────────────┘
```

## Section-by-Section Specs

### 1. Breadcrumb

| Element | Specs |
|---|---|
| Background | `#fff` |
| Padding | `20px 48px` |
| Path | Home → Cart |
| Current | "Cart" in `color: #5c564c`, `font-weight: 500` |

### 2. Page Title

| Element | Specs |
|---|---|
| Text | "Your Bag" |
| Font | Hanken Grotesk, `font-size: 32px`, `font-weight: 700` |
| Color | `var(--ink)` |
| Item count | `font-size: 15px`, `color: var(--stone)`, `margin-top: 4px` |
| Example | "3 items" |

### 3. Cart Item Row

| Element | Specs |
|---|---|
| Layout | Flex row, `gap: 20px`, `padding: 24px 0`, `border-bottom: 1px solid #eae8e4` |
| Image | `80px × 80px`, `border-radius: 12px`, `background: linear-gradient(...)` (same product gradient pattern as shop) |
| Info block | `flex: 1` |
| Name | `font-size: 16px`, `font-weight: 600`, `color: var(--ink)` |
| Variant | `font-size: 14px`, `color: var(--stone)`, `margin-top: 4px` |
| Variant format | "UK 9 · DS/Brand New" or "Size · Condition" |
| Price | `font-size: 16px`, `font-weight: 700`, `color: var(--ink)`, `margin-top: 8px` |
| Right column | Flex column, `align-items: flex-end`, `justify-content: space-between` |

### 4. Quantity Selector

| Element | Specs |
|---|---|
| Layout | Flex row, `border: 1px solid #e0e0e0`, `border-radius: 8px`, `height: 36px` |
| Minus button | `width: 36px`, centered, Lucide `minus`, `16px` |
| Number | `width: 40px`, `text-align: center`, `font-size: 15px`, `font-weight: 600`, no spinner arrows |
| Plus button | `width: 36px`, centered, Lucide `plus`, `16px` |
| Disabled | Minus disabled at qty 1 |
| Hover | `background: #f5f3ef` on buttons |

### 5. Remove Button

| Element | Specs |
|---|---|
| Icon | Lucide `trash-2`, `18px`, `color: var(--stone)` |
| Hover | `color: #dc2626` |
| Action | Remove item immediately with slide-out animation (`transform: translateX(-20px)`, `opacity: 0`, `200ms`) |

### 6. Empty Cart State

| Element | Specs |
|---|---|
| Icon | Lucide `shopping-bag`, `64px`, `color: var(--stone)`, centered |
| Title | "Your bag is empty" |
| Title font | `font-size: 22px`, `font-weight: 700`, centered |
| Message | "Looks like you haven't added anything to your bag yet." |
| Message font | `font-size: 15px`, `color: var(--stone)`, centered |
| CTA | `.btn-primary`, "Continue Shopping", centered, `margin-top: 24px` |
| CTA href | `/shop` |

### 7. Continue Shopping Link

| Element | Specs |
|---|---|
| Layout | Below cart items, `margin-top: 24px` |
| Icon | Lucide `arrow-left`, `16px`, inline |
| Text | "Continue Shopping" |
| Style | `font-size: 15px`, `font-weight: 600`, `color: var(--ink)` |
| Link | `/shop` |

### 8. Order Summary Card (Sticky Sidebar)

| Element | Specs |
|---|---|
| Position | Sticky, `top: 100px` |
| Background | `#fff` |
| Border | `1px solid #eae8e4` |
| Border-radius | `20px` |
| Padding | `32px` |
| Width | `360px` |

#### Summary Rows

| Row | Label | Value Style |
|---|---|---|
| Subtotal | "Subtotal" | `font-size: 15px`, `color: var(--stone)` |
| Subtotal value | Right-aligned | `font-size: 15px`, `font-weight: 600`, `color: var(--ink)` |
| Shipping | "Shipping" | Same label style |
| Shipping value | "Calculated at checkout" or "₹0" if free | `font-size: 15px`, `color: var(--stone)` |
| Taxes | "Taxes (GST)" | Same label style |
| Taxes value | "Calculated at checkout" | `font-size: 15px`, `color: var(--stone)` |
| Divider | `1px solid #eae8e4`, `margin: 16px 0` |
| Total label | "Total" | `font-size: 18px`, `font-weight: 700`, `color: var(--ink)` |
| Total value | Right-aligned | `font-size: 22px`, `font-weight: 700`, `color: var(--ink)` |
| Total note | "including GST" | `font-size: 13px`, `color: var(--stone)`, below total |

#### Checkout Button

| Element | Specs |
|---|---|
| Text | "Proceed to Checkout" |
| Class | `.btn-primary` |
| Width | `100%` |
| Height | `52px` |
| Margin-top | `24px` |
| Icon | Lucide `lock`, `18px`, left of text (security signal) |
| Link | `/checkout` |

### 9. You May Also Like (Below Cart)

| Element | Specs |
|---|---|
| Layout | Full width, `margin-top: 48px` |
| Title | "You May Also Like" |
| Title font | `font-size: 22px`, `font-weight: 700` |
| Grid | 4-column product card grid (same as shop.html) |
| Items | 4 products, horizontal scroll on mobile |
| Cards | Same `.product-card` component from design system |

## Data Model

```javascript
const cart = {
  items: [
    {
      id: "prod_001",
      name: "Air Jordan 1 High Retro Chicago",
      image: "linear-gradient(...)",
      size: "UK 9",
      condition: "DS/Brand New",
      price: 24999,
      quantity: 2,
      maxQuantity: 5
    },
    // ... more items
  ],
  subtotal: 0,    // computed: sum(price × qty)
  shipping: 0,    // 0 or calculated
  taxes: 0,       // 18% GST computed
  total: 0        // computed
};
```

## Responsive

| Breakpoint | Behavior |
|---|---|
| > 900px | 2-column: items left (1fr) + sticky summary right (360px) |
| ≤ 900px | Single column, summary card moves below items |
| ≤ 600px | Item rows stack: image top, info below, quantity + remove on same row |
| ≤ 600px | Quantity selector: `28px` buttons instead of `36px` |
| ≤ 600px | "You May Also Like" becomes horizontal scroll carousel |

## Lovable Prompt

> Build the HYPE cart page. Full navbar with cart icon showing count badge. Breadcrumb: Home / Cart. Page title "Your Bag" 32px bold. Cart items as rows: 80px gradient image (12px radius), product name 16px bold, variant "UK 9 · DS/Brand New" 14px stone, price 16px bold. Right side: quantity selector (minus/number/plus in bordered flex row, 36px height, 8px radius) and trash-2 remove icon (18px stone, hover red). Remove animates out with slide-left + fade. Empty state: shopping-bag icon 64px stone, "Your bag is empty" 22px bold, message, "Continue Shopping" primary button. Below items: "← Continue Shopping" link. Sticky order summary card (360px wide, white, 20px radius, 32px padding, top: 100px): Subtotal, Shipping, Taxes rows with values right-aligned; divider; Total "₹XX,XXX" 22px bold; "including GST" 13px stone. "Proceed to Checkout" primary button 52px with lock icon. Below: "You May Also Like" section with 4-col product grid. Mobile: single column, summary below items, horizontal carousel for recommendations. Colors: --ink, --stone, --cream.
