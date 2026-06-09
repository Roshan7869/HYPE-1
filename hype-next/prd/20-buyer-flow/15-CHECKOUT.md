# Page 15 — Checkout (checkout.html)

## Purpose
Combined shipping + payment checkout for Buy Now items and auction wins. Single-page checkout with 3 sections: shipping address, payment method, and order review. Designed for speed — Indian buyers expect COD option, UPI, and card payments.

## URL
`/checkout`

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  NAVBAR (minimal — logo + secure lock indicator) │
├─────────────────────────────────────────────────┤
│  CHECKOUT BODY (bg: --cream)                     │
│  ┌────────────────────────┬────────────────────┐│
│  │  SECURE CHECKOUT BADGE │  ORDER SUMMARY    ││
│  │  🔒 SSL Encrypted      │  (sticky sidebar)  ││
│  ├────────────────────────┤  ┌──────────────┐ ││
│  │  1. SHIPPING ADDRESS   │  │ Item 1  ₹XX  │ ││
│  │  ┌──────────────────┐  │  │ Item 2  ₹XX  │ ││
│  │  │ [+] Add New Address│  │  ├───────────┤ ││
│  │  │                    │  │  │ Subtotal  │ ││
│  │  │ ○ Roshan Khatri   │  │  │ Shipping  │ ││
│  │  │   123 MG Road      │  │  │ Taxes     │ ││
│  │  │   Mumbai, 400001   │  │  │ Total     │ ││
│  │  │   +91 9876543210   │  │  └───────────┘ ││
│  │  │   [Edit] [Default]│  │  │              ││
│  │  ├──────────────────┤  │  └──────────────┘ ││
│  │  │ ○ + Add another   │  │                   ││
│  │  └──────────────────┘  │                   ││
│  ├────────────────────────┤                   ││
│  │  2. PAYMENT METHOD     │                   ││
│  │  ┌──────────────────┐  │                   ││
│  │  │ ○ Cash on Delivery│  │                   ││
│  │  │   Pay ₹XX,XXX when│  │                   ││
│  │  │   your order arrives│  │                   ││
│  │  ├──────────────────┤  │                   ││
│  │  │ ○ UPI            │  │                   ││
│  │  │   [Google Pay]     │  │                   ││
│  │  │   [PhonePe] [Paytm]│  │                   ││
│  │  ├──────────────────┤  │                   ││
│  │  │ ○ Credit/Debit Card│  │                   ││
│  │  │   [Name][Number]   │  │                   ││
│  │  │   [MM/YY] [CVV]   │  │                   ││
│  │  │   [Save card]      │  │                   ││
│  │  └──────────────────┘  │                   ││
│  ├────────────────────────┤                   ││
│  │  3. ORDER REVIEW     │                   ││
│  │  Items listed with   │                   ││
│  │  edit links to cart   │                   ││
│  │  [Place Order]        │                   ││
│  │  "By placing..." text  │                   ││
│  └────────────────────────┴────────────────────┘│
├─────────────────────────────────────────────────┤
│  FOOTER (minimal — legal links only)           │
└─────────────────────────────────────────────────┘
```

## Section-by-Section Specs

### 1. Minimal Navbar

| Element | Specs |
|---|---|
| Background | `transparent` |
| Height | `80px` |
| Left | Logo only, links to `/` |
| Right | "Secure Checkout" text + Lucide `lock` icon `16px` |
| Right text | `font-size: 14px`, `font-weight: 600`, `color: var(--stone)` |
| No search, no nav links, no cart icon |

### 2. Secure Checkout Badge

| Element | Specs |
|---|---|
| Layout | Flex row, `align-items: center`, `gap: 8px` |
| Icon | Lucide `shield-check`, `20px`, `color: #22c55e` |
| Text | "SSL Encrypted · 100% Secure" |
| Text font | `font-size: 13px`, `color: var(--stone)` |
| Margin-bottom | `24px` |

### 3. Section Headers

Each of the 3 sections has a numbered header:

| Element | Specs |
|---|---|
| Number circle | `28px × 28px`, `border-radius: 50%`, `background: var(--ink)`, `color: #fff`, `font-size: 14px`, `font-weight: 700`, centered |
| Title | "Shipping Address", "Payment Method", "Order Review" |
| Title font | `font-size: 20px`, `font-weight: 700`, `color: var(--ink)` |
| Layout | Flex row, `gap: 12px`, `align-items: center` |
| Margin | `32px 0 20px 0` |
| Completed sections | Number circle changes to green check `✓` instead of number |

### 4. Shipping Address Section

#### Add New Address Card

| Element | Specs |
|---|---|
| Layout | Full-width card with dashed border |
| Border | `2px dashed #e0e0e0` |
| Border-radius | `16px` |
| Padding | `24px` |
| Content | Centered icon + text |
| Icon | Lucide `plus`, `24px`, `color: var(--stone)` |
| Text | "Add New Address" |
| Text font | `font-size: 15px`, `font-weight: 600`, `color: var(--stone)` |
| Hover | `border-color: var(--ink)`, icon + text turn `var(--ink)` |
| Click | Opens address form modal |

#### Saved Address Card

| Element | Specs |
|---|---|
| Layout | Full-width card, `border: 1px solid #eae8e4`, `border-radius: 16px`, `padding: 20px` |
| Selection | Radio circle left side, `20px`, selected = filled `var(--ink)` with white dot |
| Name | `font-size: 16px`, `font-weight: 700`, `color: var(--ink)` |
| Address | `font-size: 14px`, `color: var(--stone)`, `line-height: 1.5`, `margin-top: 4px` |
| Phone | `font-size: 14px`, `color: var(--stone)`, `margin-top: 4px` |
| Default badge | "Default" pill, `background: var(--ink)`, `color: #fff`, `font-size: 11px`, `padding: 2px 8px`, `border-radius: 4px` |
| Edit link | "Edit", `font-size: 14px`, `font-weight: 600`, `color: var(--ink)`, right-aligned |
| Selected state | `border-color: var(--ink)`, `box-shadow: 0 0 0 3px rgba(26,24,21,0.08)` |

#### Address Form Modal (Add/Edit)

| Element | Specs |
|---|---|
| Overlay | `rgba(0,0,0,0.5)`, fixed |
| Modal | `max-width: 480px`, white, `24px` radius, `40px` padding |
| Title | "Add New Address" or "Edit Address" |
| Fields | Full Name, Phone, Address Line 1, Address Line 2, City, State dropdown, PIN Code |
| All inputs | Same 48px/12px radius style |
| State dropdown | Native select with custom arrow |
| Buttons | "Cancel" (secondary) + "Save Address" (primary) |

### 5. Payment Method Section

#### Payment Option Cards

Each payment method is a selectable card:

| Element | Specs |
|---|---|
| Layout | Full-width card, `border: 1px solid #eae8e4`, `border-radius: 16px`, `padding: 20px` |
| Selection | Radio circle, same style as address |
| Selected | `border-color: var(--ink)`, focus ring |

#### Cash on Delivery

| Element | Specs |
|---|---|
| Icon | Lucide `banknote`, `24px`, `color: var(--ink)` |
| Title | "Cash on Delivery" |
| Title font | `font-size: 16px`, `font-weight: 600` |
| Subtitle | "Pay ₹XX,XXX when your order arrives" |
| Subtitle font | `font-size: 14px`, `color: var(--stone)` |
| COD fee | If applicable: "+ ₹50 COD fee" in `color: #f59e0b`, `font-size: 13px` |

#### UPI

| Element | Specs |
|---|---|
| Icon | Lucide `qr-code`, `24px`, `color: var(--ink)` |
| Title | "UPI" |
| Apps row | When selected, show app icons: Google Pay, PhonePe, Paytm, BHIM |
| App buttons | `64px × 64px`, `border-radius: 12px`, `border: 1px solid #e0e0e0`, app logo centered |
| Selected app | `border-color: var(--ink)` |
| QR note | "Scan QR code on your payment app" — `font-size: 14px`, `color: var(--stone)` |

#### Credit/Debit Card

| Element | Specs |
|---|---|
| Icon | Lucide `credit-card`, `24px`, `color: var(--ink)` |
| Title | "Credit / Debit Card" |
| Card form (when selected) | |
| Card number | Input with card type icon (Visa/Mastercard) on right, `16px` |
| Name | "Name on card" |
| Expiry + CVV | 2-column grid, `gap: 12px` |
| Save checkbox | "Save card for future payments" |
| All inputs | Same 48px/12px style |

### 6. Order Review Section

| Element | Specs |
|---|---|
| Items | Mini cart summary — product name, variant, qty, price |
| Item layout | Flex row, `gap: 12px`, `padding: 16px 0`, `border-bottom: 1px solid #eae8e4` |
| Thumbnail | `48px × 48px`, `border-radius: 8px`, gradient |
| Name | `font-size: 15px`, `font-weight: 600` |
| Variant | `font-size: 13px`, `color: var(--stone)` |
| Qty | `font-size: 13px`, `color: var(--stone)` |
| Price | Right-aligned, `font-size: 15px`, `font-weight: 700` |
| Edit link | "Edit cart" → `/cart`, `font-size: 14px`, `color: var(--ink)`, `font-weight: 600` |

### 7. Place Order Button

| Element | Specs |
|---|---|
| Text | "Place Order · ₹XX,XXX" |
| Class | `.btn-primary` |
| Width | `100%` |
| Height | `56px` |
| Font | `font-size: 17px`, `font-weight: 700` |
| Margin-top | `24px` |
| Icon | Lucide `lock`, `18px`, left |
| State: loading | "Processing..." with spinner |
| State: disabled | Until address selected + payment selected |

### 8. Terms Text

| Element | Specs |
|---|---|
| Text | "By placing this order, you agree to our Terms of Service and Privacy Policy." |
| Font | `font-size: 13px`, `color: var(--stone)`, centered |
| Margin-top | `12px` |
| Links | "Terms of Service" → `/terms`, "Privacy Policy" → `/privacy` |

### 9. Order Summary Sidebar (Sticky)

| Element | Specs |
|---|---|
| Same card style as Cart summary | white, `20px` radius, `32px` padding, `360px` wide |
| Sticky | `top: 100px` |
| Items list | Product name + price for each item |
| Divider | `1px solid #eae8e4` |
| Subtotal, Shipping, Taxes rows | Same as cart |
| Total | `font-size: 24px`, `font-weight: 700` |
| Savings | If applicable: "You saved ₹X,XXX" in `color: #22c55e` |

## Data Model

```javascript
const checkout = {
  addresses: [
    {
      id: "addr_001",
      name: "Roshan Khatri",
      line1: "123 MG Road",
      line2: "Near Central Mall",
      city: "Mumbai",
      state: "Maharashtra",
      pin: "400001",
      phone: "9876543210",
      isDefault: true
    }
  ],
  selectedAddressId: "addr_001",
  paymentMethod: "cod",  // "cod" | "upi" | "card"
  selectedUpiApp: null,  // "gpay" | "phonepe" | "paytm"
  savedCards: [],
  selectedCardId: null,
  orderItems: [],  // from cart
  isProcessing: false
};
```

## Responsive

| Breakpoint | Behavior |
|---|---|
| > 900px | 2-column: checkout form left (1fr) + sticky summary right (360px) |
| ≤ 900px | Single column, summary card collapses into an accordion at top |
| ≤ 600px | Address cards full width, payment app icons 48px instead of 64px |
| ≤ 600px | Card form: expiry + CVV stack vertically |
| ≤ 600px | Place Order button fixed at bottom of viewport |

## Lovable Prompt

> Build the HYPE checkout page. Minimal navbar: logo + "Secure Checkout" with lock icon. Secure badge: shield-check icon 20px green + "SSL Encrypted · 100% Secure" 13px stone. Three numbered sections (1, 2, 3 circles 28px ink bg white text): Shipping Address, Payment Method, Order Review. Completed sections show green check instead of number. Shipping: "Add New Address" card with dashed border, plus icon, "Add New Address" text, hover turns ink. Saved address cards: radio selection, name bold, address 14px stone, phone, default pill (ink bg white text 11px), edit link. Address form modal: 480px white card, 24px radius, fields for name/phone/address/city/state/PIN, cancel + save buttons. Payment: three selectable cards — Cash on Delivery (banknote icon, "Pay ₹XX,XXX when your order arrives"), UPI (qr-code icon, app icons 64px GPay/PhonePe/Paytm), Credit Card (credit-card icon, card number/name/expiry/CVV inputs). Order Review: mini item list with 48px thumbnails, name/variant/qty/price, "Edit cart" link. "Place Order · ₹XX,XXX" primary button 56px with lock icon, disabled until valid. Below: terms text 13px with links. Sticky summary sidebar (360px, white, 20px radius, 32px padding): item list + subtotal/shipping/taxes/total 24px bold. Mobile: single column, summary accordion, fixed bottom place order button. Colors: --ink, --stone, --cream.
