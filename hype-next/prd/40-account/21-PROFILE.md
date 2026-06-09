# Page 21 — User Profile / Account Settings (profile.html)

## Purpose
Buyer and seller shared account management — edit profile info, change password, manage addresses, notification preferences, and account actions (delete, deactivate).

## URL
`/account/profile`

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  NAVBAR (full — with user avatar)               │
├─────────────────────────────────────────────────┤
│  BREADCRUMB: Home / Account / Profile            │
├─────────────────────────────────────────────────┤
│  PAGE BODY (bg: --cream)                         │
│  ┌──────────────────────┬──────────────────────┐│
│  │  "Account Settings"  │                      ││
│  │  (H2)                │                      ││
│  ├──────────────────────┤  CONTENT AREA (1fr)  ││
│  │  SIDEBAR (240px)     │  ┌────────────────┐ ││
│  │  · Profile           │  │ ACTIVE SECTION  │ ││
│  │  · Addresses         │  │                │ ││
│  │  · Password          │  │                │ ││
│  │  · Notifications     │  │                │ ││
│  │  · Payment Methods   │  │                │ ││
│  │  · Danger Zone       │  └────────────────┘ ││
│  └──────────────────────┴──────────────────────┘│
├─────────────────────────────────────────────────┤
│  FOOTER                                          │
└─────────────────────────────────────────────────┘
```

## Section-by-Section Specs

### 1. Navbar + Breadcrumb
Same as My Bids. Breadcrumb: Home → Account → Profile.

### 2. Page Title

| Element | Specs |
|---|---|
| Title | "Account Settings" |
| Font | `font-size: 32px`, `font-weight: 700` |
| Margin-bottom | `32px` |

### 3. Settings Sidebar

| Element | Specs |
|---|---|
| Width | `240px` |
| Position | Sticky, `top: 100px` |
| Background | Transparent |
| Layout | Flex column, `gap: 4px` |

#### Sidebar Item

| Element | Specs |
|---|---|
| Layout | Flex row, `align-items: center`, `gap: 12px` |
| Padding | `12px 16px` |
| Border-radius | `12px` |
| Icon | Lucide icon, `20px`, `color: var(--stone)` |
| Label | `font-size: 15px`, `font-weight: 500` |
| Inactive | `color: var(--stone)` |
| Hover | `background: #f5f3ef` |
| Active | `background: var(--ink)`, `color: #fff`, icon turns white |
| Active indicator | Left border `3px solid var(--ink)` or full bg fill |

#### Sidebar Items

| Item | Icon | ID |
|---|---|---|
| Profile Information | `user` | profile |
| Saved Addresses | `map-pin` | addresses |
| Change Password | `lock` | password |
| Notifications | `bell` | notifications |
| Payment Methods | `credit-card` | payments |
| Danger Zone | `alert-triangle` | danger |

### 4. Profile Section (Default Active)

| Element | Specs |
|---|---|
| Background | `#fff` |
| Border-radius | `20px` |
| Padding | `32px` |
| Title | "Profile Information" 20px bold, `margin-bottom: 24px` |

#### Avatar Upload

| Element | Specs |
|---|---|
| Layout | Centered, `margin-bottom: 24px` |
| Avatar | `100px × 100px`, `border-radius: 50%`, `background: var(--sand)` |
| Initials | If no photo: "RK" in `font-size: 36px`, `font-weight: 700`, `color: var(--ink)` |
| Overlay on hover | `background: rgba(0,0,0,0.5)`, camera icon centered |
| Upload input | Hidden file input, accepts jpg/png, max 2MB |
| Hint | "Click to upload new photo" 13px stone below |

#### Form Fields

| Field | Type | Notes |
|---|---|---|
| Full Name | text | Required |
| Email Address | email | Read-only if verified, show verified badge |
| Phone Number | tel | +91 prefix fixed, verified badge if done |
| Date of Birth | date | Optional |
| Gender | select | "Male", "Female", "Other", "Prefer not to say" |

All inputs: same 48px/12px radius style. Two-column grid on desktop, single column on mobile.

#### Save Button

| Element | Specs |
|---|---|
| Text | "Save Changes" |
| Class | `.btn-primary` |
| Height | `48px` |
| Width | Auto, `padding: 0 32px` |
| Alignment | Right-aligned |
| State: success | Button text changes to "Saved! ✓" for 2s, green flash |

### 5. Addresses Section

| Element | Specs |
|---|---|
| Title | "Saved Addresses" 20px bold |
| Add button | `.btn-secondary`, "+ Add New Address", `height: 40px`, `margin-bottom: 20px` |
| Address cards | Same style as Checkout saved addresses |
| Card actions | "Edit" + "Delete" links, 14px, right-aligned |
| Delete confirmation | "Are you sure?" modal |
| Max addresses | 10, show message if full |

### 6. Change Password Section

| Element | Specs |
|---|---|
| Title | "Change Password" 20px bold |
| Fields | Current Password, New Password, Confirm New Password |
| New password | Same strength indicator as Signup |
| Submit | "Update Password" primary button |
| Success | Green check + "Password updated successfully" banner |
| Logout others | Checkbox "Log out of all other devices" |

### 7. Notifications Section

| Element | Specs |
|---|---|
| Title | "Notification Preferences" 20px bold |
| Layout | List of toggle switches |

#### Toggle Switch

| Element | Specs |
|---|---|
| Layout | Flex row, `justify-content: space-between`, `align-items: center`, `padding: 16px 0`, `border-bottom: 1px solid #eae8e4` |
| Label | `font-size: 15px`, `font-weight: 600` |
| Description | `font-size: 13px`, `color: var(--stone)` |
| Switch | `48px × 24px`, `border-radius: 12px` |
| Off | `background: #e0e0e0` |
| On | `background: var(--ink)` |
| Knob | `20px` circle, white, translates 24px when on |
| Transition | `200ms ease` |

#### Notification Options

| Option | Description | Default |
|---|---|---|
| Order Updates | "Get notified when your order status changes" | On |
| Auction Alerts | "Outbid alerts and auction win notifications" | On |
| Promotions | "Deals, discounts, and exclusive offers" | Off |
| Seller Updates | "Listing sold, payout received, etc." | On |
| Email Notifications | "Receive updates via email" | On |
| SMS Notifications | "Receive updates via SMS" | Off |
| Push Notifications | "Browser push notifications" | Off |

### 8. Payment Methods Section

| Element | Specs |
|---|---|
| Title | "Saved Payment Methods" 20px bold |
| Add card | "+ Add Card" secondary button |
| Card list | Saved cards with masked numbers |
| Card display | Card brand icon + "**** 4242" + expiry |
| Default badge | "Default" pill |
| Actions | "Set Default", "Remove" links |
| UPI section | Saved UPI IDs: "roshan@upi" etc. |
| No methods | "No saved payment methods" + "Add Card" CTA |

### 9. Danger Zone Section

| Element | Specs |
|---|---|
| Title | "Danger Zone" 20px bold, `color: #dc2626` |
| Background | `#fef2f2` tinted card, `border: 1px solid #fecaca` |
| Warning icon | `alert-triangle` 24px red |

#### Actions

| Action | Specs |
|---|---|
| Deactivate Account | Secondary button, "Deactivate Account" — shows confirmation modal |
| Delete Account | Red button, "Delete Account Permanently" — shows heavy confirmation |
| Deactivate modal | "This will hide your listings and pause your account. You can reactivate anytime." |
| Delete modal | "This will permanently delete all your data. This action cannot be undone." + type "DELETE" to confirm |

## Data Model

```javascript
const profile = {
  user: {
    name: "Roshan Khatri",
    email: "roshan@example.com",
    emailVerified: true,
    phone: "9876543210",
    phoneVerified: true,
    avatar: null,  // URL or null
    dob: "1990-01-01",
    gender: "male"
  },
  addresses: [
    { id: "addr_001", name: "Roshan Khatri", line1: "123 MG Road", city: "Mumbai", state: "Maharashtra", pin: "400001", phone: "9876543210", isDefault: true }
  ],
  notifications: {
    orderUpdates: true,
    auctionAlerts: true,
    promotions: false,
    sellerUpdates: true,
    email: true,
    sms: false,
    push: false
  },
  paymentMethods: {
    cards: [
      { id: "card_001", brand: "visa", last4: "4242", expiry: "12/27", isDefault: true }
    ],
    upiIds: ["roshan@upi"]
  }
};
```

## Responsive

| Breakpoint | Behavior |
|---|---|
| > 900px | 2-column: sidebar 240px sticky left + content 1fr right |
| ≤ 900px | Sidebar becomes horizontal scroll tabs above content |
| ≤ 600px | Profile form single column |
| ≤ 600px | Address cards full-width |
| ≤ 600px | Notification toggles stack with switch below label |

## Lovable Prompt

> Build the HYPE Account Settings page. Full navbar with avatar. Breadcrumb: Home / Account / Profile. Title "Account Settings" 32px bold. Left sidebar (240px sticky, top: 100px): vertical menu with icons — Profile (user), Addresses (map-pin), Password (lock), Notifications (bell), Payment Methods (credit-card), Danger Zone (alert-triangle). Active item has ink bg with white text and icon, others stone color with hover bg #f5f3ef, 12px radius, 12px 16px padding. Profile section (default): avatar upload area 100px circle with initials or photo, camera overlay on hover, "Click to upload" 13px stone. Form fields in 2-column grid: Full Name, Email (read-only with verified badge), Phone (+91 prefix, verified badge), Date of Birth, Gender select. All inputs 48px/12px radius. "Save Changes" primary button right-aligned, 48px. Success state: "Saved! ✓" flash. Addresses: "+ Add New Address" secondary button, address cards with edit/delete links, delete confirmation modal. Password: Current/New/Confirm fields + strength indicator + "Log out of all other devices" checkbox. Notifications: list of toggle switches (48px × 24px track, 20px knob, 200ms transition) — Order Updates, Auction Alerts, Promotions, Seller Updates, Email, SMS, Push. Payment Methods: saved cards with brand icons, masked numbers, default badge, set default/remove links; UPI IDs; add card button. Danger Zone: red-tinted card, "Deactivate Account" and "Delete Account Permanently" with confirmation modals. Mobile: horizontal scroll tabs instead of sidebar, single column forms. Colors: --ink, --stone, --cream.
