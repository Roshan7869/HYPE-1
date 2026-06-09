# Page 23 — Dashboard: Pricing & Review (dashboard-pricing.html)

## Purpose
Final step of the seller listing flow — set pricing, auction duration, and review all details before publishing. This is where the seller commits, so the UI must be clear, trustworthy, and show exactly what buyers will see.

## URL
`/dashboard/listings/new/pricing`

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  NAVBAR (seller mode)                             │
├─────────────────────────────────────────────────┤
│  SIDEBAR + CONTENT                               │
│  ┌────────┬────────────────────────────────────┐│
│  │ SIDE   │  STEP PROGRESS BAR                  ││
│  │        │  1.Details ✓ → 2.Photos ✓ → 3.Pricing│
│  │        ├────────────────────────────────────┤│
│  │        │  PRICING SECTION                    ││
│  │        │  ┌────────────────────────────────┐ ││
│  │        │  │  Listing Type                   │ ││
│  │        │  │  ○ Fixed Price  ● Auction       │ ││
│  │        │  ├────────────────────────────────┤ ││
│  │        │  │  Starting Bid  ₹[______]        │ ││
│  │        │  │  Reserve Price ₹[______] (opt)   │ ││
│  │        │  │  Buy Now Price ₹[______] (opt)   │ ││
│  │        │  ├────────────────────────────────┤ ││
│  │        │  │  Auction Duration               │ ││
│  │        │  │  [3d] [5d] [7d] [10d]           │ ││
│  │        │  ├────────────────────────────────┤ ││
│  │        │  │  FEE BREAKDOWN                  │ ││
│  │        │  │  Platform fee: 5%               │ ││
│  │        │  │  Payment processing: 2%         │ ││
│  │        │  │  You keep: ₹XX,XXX              │ ││
│  │        │  └────────────────────────────────┘ ││
│  │        │                                      ││
│  │        │  REVIEW & PUBLISH                    ││
│  │        │  ┌────┐ Name, photos, size, cond    ││
│  │        │  │img │ Starting bid ₹XX,XXX        ││
│  │        │  └────┘ Duration: 7 days             ││
│  │        │                                      ││
│  │        │  ☑ I agree to Terms & Authenticity  ││
│  │        │                                      ││
│  │        │  [← Back] [Publish Listing]          ││
│  └────────┴────────────────────────────────────┘│
├─────────────────────────────────────────────────┤
│  FOOTER                                          │
└─────────────────────────────────────────────────┘
```

## Section-by-Section Specs

### 1. Step Progress Bar
Same as Add Photos page, but steps 1.Details and 2.Photos show green check marks, step 3.Pricing is active.

### 2. Pricing Section

| Element | Specs |
|---|---|
| Background | `#fff` |
| Border-radius | `20px` |
| Padding | `32px` |
| Margin-bottom | `24px` |

#### Listing Type

| Element | Specs |
|---|---|
| Title | "How do you want to sell?" 20px bold |
| Layout | 2 radio cards side by side, `gap: 16px` |
| Card | `border: 2px solid #e0e0e0`, `border-radius: 16px`, `padding: 24px`, `flex: 1` |
| Card selected | `border-color: var(--ink)`, `box-shadow: 0 0 0 3px rgba(26,24,21,0.08)` |
| Icon | Fixed: Lucide `tag`, 24px. Auction: Lucide `gavel`, 24px |
| Title | "Fixed Price" / "Auction" 16px bold |
| Description | "Set a price and sell immediately" / "Let buyers bid and get the best price" 14px stone |

#### Price Inputs (Auction Mode)

| Element | Specs |
|---|---|
| Layout | Vertical stack, `gap: 16px` |
| Margin-top | `24px` |

##### Starting Bid

| Element | Specs |
|---|---|
| Label | "Starting Bid" 15px bold |
| Required | Asterisk * |
| Input | Same 48px/12px style with ₹ prefix |
| Prefix | "₹" `16px`, `font-weight: 700`, left padding `32px` |
| Hint | "The lowest bid you'll accept" 13px stone below |
| Minimum | ₹500 |
| Validation | Red "Minimum ₹500" if below |

##### Reserve Price

| Element | Specs |
|---|---|
| Label | "Reserve Price (optional)" 15px bold |
| Input | Same ₹ prefix style |
| Hint | "Your item won't sell unless bidding reaches this price" 13px stone |
| Info icon | Lucide `info`, 16px, tooltip on hover explaining reserve |

##### Buy Now Price

| Element | Specs |
|---|---|
| Label | "Buy Now Price (optional)" 15px bold |
| Hint | "Let buyers skip bidding and buy immediately" 13px stone |
| Must be | Greater than starting bid |
| Validation | "Must be higher than starting bid" red if not |

#### Price Inputs (Fixed Price Mode)

| Element | Specs |
|---|---|
| Label | "Asking Price" 15px bold, required |
| Input | ₹ prefix, same style |
| Hint | "Your fixed sale price" |

### 3. Auction Duration

| Element | Specs |
|---|---|
| Title | "Auction Duration" 15px bold, `margin-top: 24px` |
| Layout | Flex row, `gap: 12px` |
| Option cards | `border: 2px solid #e0e0e0`, `border-radius: 12px`, `padding: 12px 24px` |
| Selected | `border-color: var(--ink)`, background `var(--cream)` |
| Text | "3 days", "5 days", "7 days", "10 days" |
| Text font | `font-size: 15px`, `font-weight: 600` |
| Default | 7 days selected |
| Shown only | Auction mode |

### 4. Fee Breakdown

| Element | Specs |
|---|---|
| Layout | White card, `1px solid #eae8e4`, `border-radius: 12px`, `padding: 20px`, `margin-top: 24px` |
| Title | "Fee Breakdown" 15px bold |
| Icon | Lucide `calculator`, `18px`, inline |
| Rows | Flex row, `justify-content: space-between` per row |
| Platform fee | "Platform fee" 14px stone, "5%" right 14px |
| Payment | "Payment processing" 14px stone, "2%" right 14px |
| Line items | "On ₹XX,XXX sale price" 13px stone, below percentages |
| Divider | `1px solid #eae8e4`, `margin: 12px 0` |
| You keep | "You keep" 16px bold left, "₹XX,XXX" 16px bold right, green `#22c55e` |

### 5. Review & Publish Section

| Element | Specs |
|---|---|
| Title | "Review Your Listing" 20px bold |
| Margin-top | `32px` |

#### Review Card

| Element | Specs |
|---|---|
| Background | `#fff` |
| Border | `1px solid #eae8e4` |
| Border-radius | `20px` |
| Padding | `24px` |

#### Review: Product Preview

| Element | Specs |
|---|---|
| Layout | Flex row, `gap: 16px` |
| Image | `80px × 80px`, `border-radius: 12px`, first uploaded photo |
| Info | `flex: 1` |
| Name | `font-size: 16px`, `font-weight: 600` |
| Details | "UK 9 · DS/Brand New · 3 photos" 14px stone |
| Price | "Starting bid: ₹XX,XXX" 16px bold, green if reserve not met |
| Duration | "Duration: 7 days" 14px stone |

#### Review: Edit Links

| Element | Specs |
|---|---|
| Layout | Flex row, `gap: 12px`, `margin-top: 12px` |
| Links | "Edit Details" → step 1, "Edit Photos" → step 2 |
| Style | 14px, `font-weight: 600`, `color: var(--ink)`, underline |

### 6. Agreement Checkbox

| Element | Specs |
|---|---|
| Layout | `margin-top: 24px` |
| Checkbox | Custom `20px × 20px`, `border-radius: 4px`, `border: 2px solid #e0e0e0` |
| Checked | `background: var(--ink)`, white check, `border-color: var(--ink)` |
| Label | "I confirm this item is 100% authentic and I agree to the Terms of Service and Seller Agreement." |
| Label font | `font-size: 14px`, `color: var(--stone)` |
| Links | "Terms of Service" → `/terms`, "Seller Agreement" → `/seller-agreement` |

### 7. Navigation Buttons

| Element | Specs |
|---|---|
| Layout | Flex row, `justify-content: space-between`, `margin-top: 32px` |
| Back | `.btn-secondary`, "← Back", links to Photos |
| Publish | `.btn-primary`, "Publish Listing", `height: 52px`, `padding: 0 40px` |
| Disabled | If agreement not checked OR price invalid |
| Loading | "Publishing..." with spinner |

#### Publish Success Modal

| Element | Specs |
|---|---|
| Overlay | `rgba(0,0,0,0.5)` |
| Modal | `max-width: 480px`, white, `24px` radius, centered |
| Icon | `check-circle`, `64px`, `color: #22c55e` |
| Title | "Listing Published!" 24px bold, centered |
| Message | "Your item is now live and visible to buyers." 15px stone, centered |
| CTA 1 | `.btn-primary`, "View Listing", full-width |
| CTA 2 | `.btn-secondary`, "Back to Dashboard", full-width |
| CTA margin | `margin-top: 16px` |

## Data Model

```javascript
const pricing = {
  listingId: "list_001",
  listingType: "auction",  // "auction" | "fixed"
  startingBid: null,
  reservePrice: null,
  buyNowPrice: null,
  fixedPrice: null,
  duration: "7d",  // "3d" | "5d" | "7d" | "10d"
  fees: {
    platformPercent: 5,
    paymentPercent: 2,
    estimatedYouKeep: 0
  },
  product: {
    name: "Air Jordan 1 High Retro Chicago",
    size: "UK 9",
    condition: "DS/Brand New",
    photoCount: 3,
    coverPhoto: "..."
  },
  agreedToTerms: false,
  isPublishing: false
};
```

## Responsive

| Breakpoint | Behavior |
|---|---|
| > 900px | Full layout with sidebar |
| ≤ 900px | No sidebar, step progress horizontal scroll |
| ≤ 600px | Listing type cards stack vertically |
| ≤ 600px | Duration options wrap to 2×2 grid |
| ≤ 600px | Review card stacks: image top, info below |

## Lovable Prompt

> Build the HYPE dashboard Pricing page (step 3 of seller listing). Dashboard layout with sidebar. Step progress: 1.Details ✓ green, 2.Photos ✓ green, 3.Pricing active. Pricing card (white, 20px radius, 32px padding): "How do you want to sell?" 20px bold. Two selectable cards side by side — Fixed Price (tag icon, "Set a price and sell immediately") and Auction (gavel icon, "Let buyers bid and get the best price"). Auction fields: "Starting Bid" required input with ₹ prefix, "Reserve Price (optional)" with info tooltip, "Buy Now Price (optional)" with hint. Fixed Price: "Asking Price" with ₹ prefix. All inputs 48px/12px radius. Auction Duration: pill options 3d/5d/7d/10d (7d default), 2px border, ink selected with cream bg. Fee Breakdown card: Platform fee 5%, Payment processing 2%, "You keep ₹XX,XXX" in green bold. Review section: 80px product image + name/details/price/duration. Edit links to step 1 & 2. Agreement checkbox: custom 20px box, "I confirm this item is 100% authentic and I agree to Terms of Service and Seller Agreement" 14px stone. "← Back" secondary + "Publish Listing" primary 52px (disabled until agreed). Success modal: green check circle 64px, "Listing Published!" 24px bold, "View Listing" primary + "Back to Dashboard" secondary. Mobile: stacked type cards, 2×2 duration grid, stacked review. Colors: --ink, --stone, --cream.