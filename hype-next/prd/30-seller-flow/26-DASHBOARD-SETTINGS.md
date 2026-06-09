# Page 26 — Dashboard: Settings (dashboard-settings.html)

## Purpose
Seller account and store settings — payout preferences, shipping policies, notification preferences, and store branding. Distinct from buyer Profile page; this focuses on seller-specific config.

## URL
`/dashboard/settings`

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  NAVBAR (seller mode)                             │
├─────────────────────────────────────────────────┤
│  SIDEBAR + CONTENT                               │
│  ┌────────┬────────────────────────────────────┐│
│  │ SIDE   │  SETTINGS SIDEBAR + SECTIONS       ││
│  │        │  ┌────────────────────────────────┐ ││
│  │        │  │ · Payouts · Notifications       │ ││
│  │        │  │ · Shipping · Store Branding     │ ││
│  │        │  ├────────────────────────────────┤ ││
│  │        │  │  ACTIVE SECTION                  │ ││
│  │        │  │                                  │ ││
│  │        │  └────────────────────────────────┘ ││
│  └────────┴────────────────────────────────────┘│
├─────────────────────────────────────────────────┤
│  FOOTER                                          │
└─────────────────────────────────────────────────┘
```

## Section-by-Section Specs

### 1. Settings Sidebar (Inner)

Same style as Profile page sidebar. Tabs:

| Tab | Icon | ID |
|---|---|---|
| Payouts | `banknote` | payouts |
| Notifications | `bell` | notifications |
| Shipping | `truck` | shipping |
| Store Branding | `palette` | branding |

### 2. Payouts Section (Default Active)

| Element | Specs |
|---|---|
| Title | "Payout Settings" 20px bold |
| Card | White, `border-radius: 16px`, `padding: 24px`, `margin-bottom: 20px` |

#### Bank Account

| Element | Specs |
|---|---|
| Title | "Bank Account" 16px bold |
| If linked | Bank icon + "HDFC Bank ****1234" + "Change" link |
| If not linked | "Add Bank Account" primary button |
| Fields (add form) | Account Holder Name, Account Number, IFSC Code, Bank Name |
| Verify button | "Verify Account" secondary, triggers penny drop |
| Status | "Verified ✓" green or "Pending verification" amber |

#### Payout Schedule

| Element | Specs |
|---|---|
| Title | "Payout Schedule" 16px bold |
| Options | Radio cards: "Weekly (every Monday)" and "Bi-weekly (1st and 15th)" |
| Card style | Same as checkout address radio cards |
| Minimum payout | "Minimum payout: ₹1,000" 13px stone below |
| Current balance | "Current balance: ₹XX,XXX" 15px bold |
| Withdraw button | "Withdraw Now" secondary, visible if balance > ₹500 |

#### UPI Settings

| Element | Specs |
|---|---|
| Title | "UPI ID (for instant payouts)" 16px bold |
| Input | UPI ID text input, 48px height |
| Verified badge | Green check if verified |
| Save | "Save UPI" primary, `height: 44px` |

### 3. Notifications Section

| Element | Specs |
|---|---|
| Title | "Notification Preferences" 20px bold |
| Subtitle | "Choose what you want to be notified about" 15px stone |

#### Toggle Groups

**Listing Updates**
| Toggle | Description | Default |
|---|---|---|
| New Bid | "Get notified when someone bids on your listing" | On |
| Bid Outbid | "When your bid is outbid" | On |
| Listing Sold | "When your item sells" | On |
| Listing Expired | "When your listing expires without selling" | On |

**Order Updates**
| Toggle | Description | Default |
|---|---|---|
| New Order | "When a buyer completes purchase" | On |
| Order Shipped | "When buyer marks as shipped" | On |
| Order Delivered | "When order is marked delivered" | On |
| Return Request | "When a buyer requests a return" | On |

**Marketing**
| Toggle | Description | Default |
|---|---|---|
| Promotions | "Deals, discounts, and seller tips" | Off |
| New Features | "Product updates and feature announcements" | On |

**Delivery Method** (separate card)
| Option | Description |
|---|---|
| Email | Toggle |
| SMS | Toggle |
| Push | Toggle |

Same toggle style as Profile page: 48×24px, ink on, #e0e0e0 off, 200ms transition.

### 4. Shipping Section

| Element | Specs |
|---|---|
| Title | "Shipping Preferences" 20px bold |

#### Shipping Time

| Element | Specs |
|---|---|
| Title | "Dispatch Time" 16px bold |
| Options | "Within 24 hours", "Within 2 days", "Within 3-5 days" |
| Style | Radio cards, same as checkout |
| Default | "Within 2 days" |

#### Return Policy

| Element | Specs |
|---|---|
| Title | "Return Policy" 16px bold |
| Options | "No returns", "7-day returns", "14-day returns" |
| Style | Radio cards |
| Default | "7-day returns" |
| Note | "Authenticity guaranteed regardless of return policy" 13px stone |

#### Shipping Locations

| Element | Specs |
|---|---|
| Title | "Ship To" 16px bold |
| Options | "All India" (default), "Select states" |
| If select states | Multi-select checkbox grid of Indian states |
| Style | Chip-based multi-select, same as listing size selection |

### 5. Store Branding Section

| Element | Specs |
|---|---|
| Title | "Store Branding" 20px bold |

#### Store Name

| Element | Specs |
|---|---|
| Label | "Store Name" 15px bold |
| Input | 48px height, 12px radius, max 50 chars |
| Hint | "This appears on your listings and profile" 13px stone |
| Counter | "23/50" 13px stone, right-aligned |

#### Store Logo

| Element | Specs |
|---|---|
| Layout | Centered |
| Current logo | `100px × 100px`, `border-radius: 50%`, centered |
| Upload | Click to upload, same style as Profile avatar |
| Background | Store initials if no logo, `background: var(--ink)`, `color: #fff` |

#### Store Description

| Element | Specs |
|---|---|
| Label | "About Your Store" 15px bold |
| Textarea | `height: 120px`, `border-radius: 12px`, same input styling |
| Hint | "Tell buyers about your store" 13px stone |
| Counter | "156/500" 13px stone, right-aligned |

#### Social Links

| Element | Specs |
|---|---|
| Label | "Social Links" 15px bold |
| Instagram | Input with @ prefix, 48px height |
| Twitter | Input with @ prefix |

#### Save Button

| Element | Specs |
|---|---|
| Text | "Save Changes" |
| Class | `.btn-primary` |
| Height | `48px` |
| Alignment | Right-aligned |
| Success state | "Saved! ✓" for 2s |

## Data Model

```javascript
const sellerSettings = {
  payouts: {
    bankAccount: { holderName: "Roshan Khatri", accountNumber: "****1234", ifsc: "HDFC0001234", bank: "HDFC Bank", verified: true },
    schedule: "weekly",
    minPayout: 1000,
    currentBalance: 15400,
    upiId: "roshan@upi",
    upiVerified: true
  },
  notifications: {
    listingUpdates: { newBid: true, bidOutbid: true, listingSold: true, listingExpired: true },
    orderUpdates: { newOrder: true, orderShipped: true, orderDelivered: true, returnRequest: true },
    marketing: { promotions: false, newFeatures: true },
    delivery: { email: true, sms: false, push: true }
  },
  shipping: {
    dispatchTime: "2days",
    returnPolicy: "7day",
    shippingLocations: "allIndia"
  },
  branding: {
    storeName: "RK Sneakers",
    logo: null,
    description: "Premium authentic sneakers. Every pair verified.",
    instagram: "@rksneakers",
    twitter: "@rksneakers"
  }
};
```

## Responsive

| Breakpoint | Behavior |
|---|---|
| > 900px | Inner sidebar (240px) + content (1fr) |
| ≤ 900px | Sidebar converts to horizontal tabs |
| ≤ 600px | Single column forms, radio cards stack vertically |

## Lovable Prompt

> Build the HYPE dashboard Settings page. Dashboard outer sidebar + inner settings sidebar (240px) with tabs: Payouts (banknote), Notifications (bell), Shipping (truck), Store Branding (palette). Active tab ink bg white text. Payouts: Bank Account card showing HDFC Bank ****1234 with "Change" link, or "Add Bank Account" button. Account/IFSC/Bank name form, "Verify Account" button. Payout Schedule radio cards: Weekly Monday / Bi-weekly 1st+15th. Current balance bold, "Withdraw Now" secondary if >₹500. UPI ID input with verified badge. Notifications: 3 toggle groups — Listing Updates (New Bid, Outbid, Sold, Expired), Order Updates (New Order, Shipped, Delivered, Return), Marketing (Promotions off, New Features on). Delivery method card with Email/SMS/Push toggles. 48×24px toggle switches (ink on, gray off, 200ms). Shipping: Dispatch Time radio cards (24h/2d/3-5d), Return Policy radio (No/7d/14d), Ship To (All India or state chips). Store Branding: Store Name input 50 char, Store Logo upload 100px circle, About Store textarea 500 char, Instagram/Twitter inputs. "Save Changes" primary right-aligned 48px. Mobile: horizontal tabs, stacked radio cards, single column. Colors: --ink, --stone, --cream.