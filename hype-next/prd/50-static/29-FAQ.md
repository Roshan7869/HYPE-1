# Page 29 — FAQ (faq.html)

## Purpose
Self-service help center — categorized questions with expandable answers. Reduces support tickets and builds trust.

## URL
`/faq`

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  NAVBAR (full)                                    │
├─────────────────────────────────────────────────┤
│  HERO: "How can we help?" + Search bar            │
├─────────────────────────────────────────────────┤
│  CATEGORY TABS                                    │
│  [Buying] [Selling] [Payments] [Account] [Auth] │
├─────────────────────────────────────────────────┤
│  FAQ BODY (bg: --cream)                          │
│  ┌─────────────────────────────────────────────┐│
│  │  BUYING                                      ││
│  │  ▸ How does bidding work?                    ││
│  │  ▸ What happens if I'm outbid?               ││
│  │  ▸ Can I cancel a bid?                       ││
│  │  ▸ How do I pay for a won auction?            ││
│  │  ▸ What is the authenticity guarantee?        ││
│  │                                              ││
│  │  (Expand shows answer with callout box)      ││
│  └─────────────────────────────────────────────┘│
├─────────────────────────────────────────────────┤
│  STILL NEED HELP? CTA                            │
│  [Contact Support] [Email Us]                    │
├─────────────────────────────────────────────────┤
│  FOOTER                                          │
└─────────────────────────────────────────────────┘
```

## Section-by-Section Specs

### 1. Hero

| Element | Specs |
|---|---|
| Background | `var(--ink)` |
| Padding | `80px 48px 60px` |
| Title | "How can we help?" |
| Font | `font-size: 48px`, `font-weight: 700`, `color: #fff`, centered |
| Subtitle | "Find answers to common questions" |
| Subtitle font | `font-size: 16px`, `color: rgba(255,255,255,0.7)`, centered |

#### Search Bar

| Element | Specs |
|---|---|
| Width | `560px` max, centered |
| Height | `52px` |
| Border-radius | `26px` (pill shape) |
| Background | `rgba(255,255,255,0.1)` |
| Border | `1px solid rgba(255,255,255,0.2)` |
| Padding | `0 20px 0 52px` |
| Placeholder | "Search for answers..." |
| Placeholder color | `rgba(255,255,255,0.5)` |
| Icon | Lucide `search`, `20px`, `color: rgba(255,255,255,0.7)`, absolute left `16px` |
| Focus | `background: rgba(255,255,255,0.15)`, `border-color: rgba(255,255,255,0.4)` |
| Margin-top | `24px` |

### 2. Category Tabs

| Element | Specs |
|---|---|
| Layout | Flex row, `gap: 8px`, `justify-content: center`, `margin: 32px 0` |
| Tab style | `padding: 10px 24px`, `border-radius: 24px`, `font-size: 15px`, `font-weight: 600` |
| Inactive | `background: #fff`, `border: 1px solid #e0e0e0`, `color: var(--stone)` |
| Active | `background: var(--ink)`, `color: #fff`, `border-color: var(--ink)` |
| Hover | `border-color: var(--ink)` |
| Icon | Small icon left of label: Shopping Bag, Tag, Credit Card, User, Shield |
| Categories | "Buying", "Selling", "Payments", "Account", "Authenticity" |

### 3. FAQ Items

| Element | Specs |
|---|---|
| Max-width | `720px`, centered |
| Margin | `0 auto` |

#### Question Row

| Element | Specs |
|---|---|
| Background | `#fff` |
| Border | `1px solid #eae8e4` |
| Border-radius | `12px` |
| Padding | `20px 24px` |
| Margin-bottom | `12px` |
| Layout | Flex row, `justify-content: space-between`, `align-items: center` |
| Question text | `font-size: 16px`, `font-weight: 600`, `color: var(--ink)` |
| Icon | Lucide `chevron-down`, `20px`, `color: var(--stone)` |
| Hover | `background: #faf9f7` |
| Cursor | Pointer |
| Transition | `200ms ease` |

#### Expanded Question

| Element | Specs |
|---|---|
| Border | Same, but `border-color: var(--ink)` on top/left |
| Icon | Rotated 180° (`transform: rotate(180deg)`) |
| Active question | Slightly different: `background: var(--cream)` |

#### Answer Panel

| Element | Specs |
|---|---|
| Padding | `0 24px 20px` |
| Margin-top | `-12px` (overlaps question border) |
| Border | `1px solid #eae8e4`, `border-top: none` |
| Border-radius | `0 0 12px 12px` |
| Background | `#fff` |
| Animation | `max-height: 0` → `max-height: 500px`, `200ms ease` |

#### Answer Text

| Element | Specs |
|---|---|
| Font | `font-size: 15px`, `line-height: 1.7`, `color: var(--stone)` |
| Margin-top | `0` |
| Links | `color: var(--ink)`, `font-weight: 600`, underline on hover |

#### Answer Callout

| Element | Specs |
|---|---|
| For important warnings | Same callout style as Terms: cream bg, ink left border |
| For tips | Green variant: `#f0fdf4` bg, `#22c55e` left border |

### 4. FAQ Content per Category

#### Buying

- How does bidding work? — Bids are binding, highest bidder wins, 24h to pay
- What happens if I'm outbid? — Instant notification, can increase bid
- Can I cancel a bid? — No, bids are binding (with rare exceptions)
- How do I pay for a won auction? — 24h window, COD/UPI/card
- What is the authenticity guarantee? — Verified by experts, full refund if fake
- How do returns work? — 7-day return window for non-auction, auction sales final
- Can I buy without bidding? — Yes, "Buy Now" option on select listings

#### Selling

- How do I list an item? — 3-step process: Details, Photos, Pricing
- What are the selling fees? — 5% platform + 2% payment processing
- How long do auctions run? — 3, 5, 7, or 10 days
- What is a reserve price? — Minimum price you'll accept, hidden from buyers
- How do I get paid? — Payouts within 48h of confirmed delivery
- Can I pause a listing? — Yes, from My Listings dashboard

#### Payments

- What payment methods do you accept? — UPI, Cards, COD
- Is my payment secure? — Cashfree-processed, PCI-DSS compliant
- When do I get paid? — Within 48h of delivery confirmation
- What about refunds? — Buyer-initiated, processed within 5-7 business days
- Are there any hidden fees? — No, all fees shown at checkout

#### Account

- How do I change my password? — Account Settings > Password
- Can I delete my account? — Yes, Account Settings > Danger Zone
- How do I update my address? — Account Settings > Addresses
- I can't log in — Reset password or contact support

#### Authenticity

- How do you verify authenticity? — Expert team inspects every item
- What if I receive a fake? — Full refund + seller penalty
- Are photos verified? — Yes, photo guidelines enforced
- What brands do you authenticate? — All sneakers and streetwear

### 5. Still Need Help Section

| Element | Specs |
|---|---|
| Layout | Centered, `margin: 48px 0` |
| Background | `#fff` |
| Border-radius | `20px` |
| Padding | `48px` |
| Text-align | Center |
| Title | "Still need help?" |
| Font | `font-size: 24px`, `font-weight: 700` |
| Message | "Our support team is here to assist you" |
| Message font | `font-size: 16px`, `color: var(--stone)` |
| Buttons | Flex row, `gap: 16px`, `justify-content: center`, `margin-top: 24px` |
| Contact | `.btn-primary`, "Contact Support", `height: 48px` |
| Email | `.btn-secondary`, "Email Us", `height: 48px` |

## Data Model

```javascript
const faq = {
  activeCategory: "buying",
  searchQuery: "",
  categories: [
    { id: "buying", label: "Buying", icon: "shopping-bag", faqs: [...] },
    { id: "selling", label: "Selling", icon: "tag", faqs: [...] },
    { id: "payments", label: "Payments", icon: "credit-card", faqs: [...] },
    { id: "account", label: "Account", icon: "user", faqs: [...] },
    { id: "authenticity", label: "Authenticity", icon: "shield-check", faqs: [...] }
  ]
};
```

## Responsive

| Breakpoint | Behavior |
|---|---|
| > 600px | Full layout, search centered 560px |
| ≤ 600px | Hero title 32px, search full-width, category tabs horizontal scroll |
| ≤ 600px | FAQ items full-width, no side margin |

## Lovable Prompt

> Build the HYPE FAQ page. Hero: ink background, 80px padding, "How can we help?" 48px white, subtitle 16px white/70. Search bar: 52px height, 26px pill radius, semi-transparent white bg, search icon left, "Search for answers..." white/50 placeholder, 560px max centered. Category tabs: Buying (shopping-bag), Selling (tag), Payments (credit-card), Account (user), Authenticity (shield-check) — pill buttons 10px 24px radius, active ink bg, inactive white/border. FAQ items: white cards 12px radius 20px 24px padding, question 16px bold, chevron-down 20px stone, hover cream bg. Expanded: ink border on question, rotated chevron, answer panel cream bg with 0 12px 12px radius. Answer text 15px line-height 1.7 stone. Callout boxes for warnings (cream + ink border) and tips (green tint + green border). 5 categories with realistic Q&A content. "Still need help?" section: white card 20px radius 48px padding centered, 24px bold title, stone message, "Contact Support" primary + "Email Us" secondary buttons. Mobile: 32px hero title, full-width search, scroll tabs. Colors: --ink, --stone, --cream.