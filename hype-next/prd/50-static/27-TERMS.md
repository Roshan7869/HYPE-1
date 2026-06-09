# Page 27 — Terms of Service (terms.html)

## Purpose
Legal page covering user agreements, platform policies, and binding terms. Must look professional and not intimidating — scannable, searchable, with a sidebar TOC.

## URL
`/terms`

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  NAVBAR (full)                                    │
├─────────────────────────────────────────────────┤
│  HERO: "Terms of Service" + Last Updated date    │
├─────────────────────────────────────────────────┤
│  PAGE BODY (bg: --cream)                         │
│  ┌──────────┬────────────────────────────────────┐│
│  │ TABLE OF │  CONTENT AREA                       ││
│  │ CONTENTS │  1. Acceptance of Terms              ││
│  │ (sticky) │  2. Account Registration             ││
│  │          │  3. Buying & Auction Rules            ││
│  │ 1. Accept│  4. Selling & Listing Policies        ││
│  │ 2. Account│ 5. Payments & Payouts               ││
│  │ 3. Buying│  6. Prohibited Items                 ││
│  │ 4. Selling│ 7. Authenticity Guarantee           ││
│  │ 5. Payment│ 8. Intellectual Property             ││
│  │ 6. Prohib │  9. Disclaimers & Limitations         ││
│  │ 7. Authen │  10. Changes to Terms                ││
│  │ 8. IP     │  11. Governing Law                   ││
│  │ 9. Discla │                                      ││
│  │ 10. Change│                                      ││
│  │ 11. Govern│                                      ││
│  └──────────┴────────────────────────────────────┘│
├─────────────────────────────────────────────────┤
│  FOOTER                                          │
└─────────────────────────────────────────────────┘
```

## Section-by-Section Specs

### 1. Hero

| Element | Specs |
|---|---|
| Background | `var(--ink)` |
| Padding | `80px 48px` |
| Title | "Terms of Service" |
| Font | Hanken Grotesk, `font-size: 48px`, `font-weight: 700`, `color: #fff` |
| Subtitle | "Last Updated: June 9, 2026" |
| Subtitle font | `font-size: 16px`, `color: rgba(255,255,255,0.7)` |
| Centered | `text-align: center` |

### 2. Table of Contents (Left Sidebar)

| Element | Specs |
|---|---|
| Width | `240px` |
| Position | Sticky, `top: 100px` |
| Background | `#fff` |
| Border-radius | `16px` |
| Padding | `24px` |
| Margin | `0 32px 0 0` |
| Title | "On This Page" |
| Title font | `font-size: 14px`, `font-weight: 700`, `text-transform: uppercase`, `letter-spacing: 1px`, `color: var(--stone)` |
| Links | `font-size: 14px`, `color: var(--stone)`, `padding: 8px 0`, `border-bottom: 1px solid #f0eeea` |
| Active link | `color: var(--ink)`, `font-weight: 600` |
| Hover | `color: var(--ink)`, `background: var(--cream)`, `padding-left: 8px`, `transition: 200ms` |
| Scroll spy | Active section highlighted based on scroll position |

### 3. Content Area

| Element | Specs |
|---|---|
| Max-width | `720px` |
| Padding | `48px 0` |

#### Section Heading (H2)

| Element | Specs |
|---|---|
| Font | `font-size: 24px`, `font-weight: 700`, `color: var(--ink)` |
| Margin-top | `48px` |
| Padding-top | `24px` |
| Border-top | `1px solid #eae8e4` (except first section) |
| Scroll margin | `scroll-margin-top: 80px` (for TOC anchor) |

#### Body Text

| Element | Specs |
|---|---|
| Font | `font-size: 16px`, `line-height: 1.8`, `color: var(--ink)` |
| Paragraph margin | `16px 0` |

#### Sub-heading (H3)

| Element | Specs |
|---|---|
| Font | `font-size: 18px`, `font-weight: 600`, `margin-top: 24px` |

#### Lists

| Element | Specs |
|---|---|
| Bulleted | `padding-left: 24px`, `margin: 12px 0` |
| Item spacing | `8px 0` |
| Bullet | `disc`, `color: var(--ink)` |
| Numbered | `padding-left: 24px`, `margin: 12px 0` |

#### Callout Box

| Element | Specs |
|---|---|
| Background | `var(--cream)` |
| Border-left | `4px solid var(--ink)` |
| Padding | `16px 20px` |
| Border-radius | `0 12px 12px 0` |
| Margin | `20px 0` |
| Font | `font-size: 15px`, `line-height: 1.6` |
| Use for | Important warnings, key rule summaries |

### 4. Content Sections

The actual legal content for each section should follow Indian legal standards for marketplace platforms. Key sections:

1. **Acceptance of Terms** — By using HYPE you agree to these terms
2. **Account Registration** — Age 18+, accurate info, account security
3. **Buying & Auction Rules** — Bidding is binding, auction mechanics, payment deadlines
4. **Selling & Listing Policies** — Authenticity required, accurate descriptions, prohibited items
5. **Payments & Payouts** — Cashfree processing, payout schedule, refund policy
6. **Prohibited Items** — Counterfeits, weapons, illegal substances, stolen goods
7. **Authenticity Guarantee** — HYPE verification process, buyer protection
8. **Intellectual Property** — Brand rights, listing photos, Trademark policy
9. **Disclaimers & Limitations** — As-is, no warranty, liability caps per Indian IT Act
10. **Changes to Terms** — 30-day notice, email notification
11. **Governing Law** — Laws of India, Mumbai jurisdiction

### 5. Contact Box (Bottom)

| Element | Specs |
|---|---|
| Background | `#fff` |
| Border-radius | `16px` |
| Padding | `24px` |
| Margin | `32px 0` |
| Title | "Questions?" 18px bold |
| Text | "Contact us at legal@hyPE.com or write to:" 15px stone |
| Address | HYPE Pvt. Ltd., Registered Office, Mumbai, Maharashtra, India |
| Links | "Contact Us" → `/contact`, "Privacy Policy" → `/privacy` |

## Responsive

| Breakpoint | Behavior |
|---|---|
| > 900px | TOC sidebar sticky + content |
| ≤ 900px | TOC collapses to accordion at top |
| ≤ 600px | No sidebar, hero title 32px, body 15px |
| ≤ 400px | Full-width, no side margins |

## Lovable Prompt

> Build the HYPE Terms of Service page. Full navbar. Hero section: ink background, 80px padding, "Terms of Service" 48px bold white, "Last Updated: June 9, 2026" 16px white/70. Body: cream bg, 2-column layout. Left: sticky 240px TOC sidebar (white 16px radius 24px padding, "On This Page" 14px uppercase stone, links 14px stone with hover ink + padding shift, scroll spy active ink bold). Right: 720px max content, H2 24px bold 48px margin-top, H3 18px semibold, body 16px line-height 1.8, lists with 24px padding, callout boxes with cream bg + 4px ink left border + 0 12px 12px 0 radius. Section headings with scroll-margin-top for anchor. 11 sections covering Acceptance, Account, Buying/Auction, Selling, Payments, Prohibited, Authenticity, IP, Disclaimers, Changes, Governing Law. Bottom contact card (white 16px radius): "Questions?" 18px bold, legal@hyPE.com, address, links to Contact and Privacy. Mobile: TOC accordion, smaller hero 32px. Colors: --ink, --stone, --cream.