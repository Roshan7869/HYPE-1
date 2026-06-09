# Page 30 — Contact Us (contact.html)

## Purpose
Support contact form + direct contact methods. The last resort before support tickets — makes it easy to reach a human.

## URL
`/contact`

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  NAVBAR (full)                                    │
├─────────────────────────────────────────────────┤
│  BREADCRUMB: Home / Contact Us                   │
├─────────────────────────────────────────────────┤
│  PAGE BODY (bg: --cream)                         │
│  ┌──────────────────┬────────────────────────────┐│
│  │  CONTACT INFO    │  CONTACT FORM               ││
│  │                  │                              ││
│  │  📧 Email       │  Name                        ││
│  │  support@hyPE...│  [___________________]       ││
│  │                  │                              ││
│  │  📱 Phone       │  Email                       ││
│  │  +91 22 1234... │  [___________________]       ││
│  │                  │                              ││
│  │  📍 Address     │  Subject                     ││
│  │  Mumbai, India  │  [Select ▼]                  ││
│  │                  │                              ││
│  │  💬 Social      │  Message                     ││
│  │  @hyPE on IG   │  [___________________]       ││
│  │                  │  [___________________]       ││
│  │                  │  [___________________]       ││
│  │                  │                              ││
│  │  ⏰ Hours       │  ☑ I'm not a robot            ││
│  │  Mon–Sat 10–7  │  [Send Message]              ││
│  └──────────────────┴────────────────────────────┘│
├─────────────────────────────────────────────────┤
│  FOOTER                                          │
└─────────────────────────────────────────────────┘
```

## Section-by-Section Specs

### 1. Breadcrumb

Path: Home → Contact Us. Same style as other pages.

### 2. Page Title

| Element | Specs |
|---|---|
| Title | "Contact Us" |
| Font | `font-size: 32px`, `font-weight: 700` |
| Subtitle | "We'd love to hear from you" |
| Subtitle font | `font-size: 16px`, `color: var(--stone)`, `margin-bottom: 32px` |

### 3. Two-Column Layout

| Element | Specs |
|---|---|
| Layout | CSS Grid, `grid-template-columns: 320px 1fr`, `gap: 48px` |
| Max-width | `960px`, centered |
| Left column | Contact info cards |
| Right column | Contact form |

### 4. Contact Info Column

#### Info Card

| Element | Specs |
|---|---|
| Background | `var(--ink)` |
| Border-radius | `20px` |
| Padding | `32px` |
| Color | `#fff` |
| Margin-bottom | Cards stack with `20px` gap below |

#### Card Content

| Element | Specs |
|---|---|
| Icon | Lucide icon, `24px`, `color: rgba(255,255,255,0.7)` |
| Label | `font-size: 13px`, `text-transform: uppercase`, `letter-spacing: 1px`, `color: rgba(255,255,255,0.6)`, `margin-bottom: 4px` |
| Value | `font-size: 16px`, `font-weight: 600`, `color: #fff` |
| Link | `color: rgba(255,255,255,0.9)`, underline on hover |
| Description | `font-size: 14px`, `color: rgba(255,255,255,0.7)`, `margin-top: 4px` |
| Spacing | `24px` between info items |

#### Info Items

| Item | Icon | Label | Value |
|---|---|---|---|
| Email | `mail` | EMAIL | support@hyPE.com |
| Phone | `phone` | PHONE | +91 22 1234 5678 |
| Address | `map-pin` | ADDRESS | HYPE Pvt. Ltd., 123 MG Road, Fort, Mumbai, Maharashtra 400001, India |
| Social | `instagram` | SOCIAL | @hype_sneakers on Instagram |
| Hours | `clock` | HOURS | Mon–Sat: 10 AM – 7 PM IST |
| Response | `zap` | RESPONSE TIME | Within 24 hours |

### 5. Contact Form

| Element | Specs |
|---|---|
| Background | `#fff` |
| Border-radius | `20px` |
| Padding | `32px` |
| Border | `1px solid #eae8e4` |

#### Form Fields

| Field | Type | Placeholder | Required |
|---|---|---|---|
| Name | text | "Your full name" | Yes |
| Email | email | "you@example.com" | Yes |
| Subject | select | "Select a topic" | Yes |
| Message | textarea | "How can we help?" | Yes |

#### Subject Options

| Value | Label |
|---|---|
| order | Order Issue |
| auction | Auction Question |
| payment | Payment Problem |
| selling | Selling Question |
| auth | Authenticity Concern |
| account | Account Issue |
| other | Other |

#### Input Styling

| Element | Specs |
|---|---|
| Height | `48px` (inputs), `120px` (textarea) |
| Border-radius | `12px` |
| Border | `1px solid #e0e0e0` |
| Padding | `0 16px` |
| Font | `font-size: 15px` |
| Focus | `border-color: var(--ink)`, `box-shadow: 0 0 0 3px rgba(26,24,21,0.08)` |
| Label | `font-size: 14px`, `font-weight: 600`, `margin-bottom: 8px` |
| Error | `border-color: #dc2626`, error message below `font-size: 13px`, `color: #dc2626` |

#### Field Layout

| Element | Specs |
|---|---|
| Name + Email | 2-column grid on desktop, single column on mobile |
| Subject | Full width |
| Message | Full width textarea, `height: 160px`, `resize: vertical` |

#### File Attachment (Optional)

| Element | Specs |
|---|---|
| Label | "Attach screenshot (optional)" |
| Button | `.btn-secondary`, "+ Add File", `height: 44px` |
| Accept | `image/png, image/jpeg, image/webp`, max 5MB |
| Preview | Thumbnail + "Remove" link |
| Max files | 3 |

#### Submit Button

| Element | Specs |
|---|---|
| Text | "Send Message" |
| Class | `.btn-primary` |
| Width | `100%` |
| Height | `52px` |
| Font | `font-size: 17px`, `font-weight: 700` |
| Icon | Lucide `send`, `18px`, left of text |
| Margin-top | `24px` |
| State: loading | "Sending..." with spinner |
| State: success | "Message Sent! ✓" green, 3s then reset |

#### Success State

| Element | Specs |
|---|---|
| Icon | `check-circle`, `64px`, `color: #22c55e`, centered |
| Title | "Message Sent!" |
| Font | `font-size: 22px`, `font-weight: 700`, centered |
| Message | "We'll get back to you within 24 hours." |
| Message font | `font-size: 15px`, `color: var(--stone)`, centered |
| Reference | "Your reference number: #HYP-123456" 14px stone |

### 6. FAQ Suggestion (Below Form)

| Element | Specs |
|---|---|
| Title | "Looking for quick answers?" |
| Layout | 3 cards in row, `gap: 16px`, `margin-top: 32px` |
| Card | White, `16px` radius, `20px` padding, `border: 1px solid #eae8e4` |
| Card icon | Lucide icon, `24px`, `color: var(--ink)` |
| Card title | `font-size: 15px`, `font-weight: 600` |
| Card desc | `font-size: 13px`, `color: var(--stone)`, `margin-top: 4px` |
| Cards | |
| | 🏷️ Returns: "How do returns work?" → `/faq#buying-6` |
| | 💳 Payments: "When do I get paid?" → `/faq#selling-5` |
| | 🛡️ Authenticity: "How are items verified?" → `/faq#authenticity-1` |
| Hover | `border-color: var(--ink)`, `background: var(--cream)` |

## Data Model

```javascript
const contact = {
  form: {
    name: "",
    email: "",
    subject: "",  // "order" | "auction" | "payment" | "selling" | "auth" | "account" | "other"
    message: "",
    attachments: []  // [{ file, preview }]
  },
  isSending: false,
  isSent: false,
  referenceNumber: null
};
```

## Responsive

| Breakpoint | Behavior |
|---|---|
| > 900px | 2-column: info 320px + form 1fr |
| ≤ 900px | Single column, info card becomes horizontal row of icon+value pairs |
| ≤ 600px | Form full width, name/email stack vertically, info cards stack |

## Lovable Prompt

> Build the HYPE Contact Us page. Breadcrumb: Home / Contact Us. Title "Contact Us" 32px bold, subtitle 16px stone. Two-column layout (960px max): Left 320px ink-background contact card (20px radius, 32px padding, white text): Email (mail icon, support@hyPE.com), Phone (+91 22 1234 5678), Address (Mumbai), Social (@hype_sneakers), Hours (Mon-Sat 10-7), Response time (24h). Labels uppercase 13px white/60, values 16px bold white, icons 24px white/70. Right: white form card (20px radius, 32px padding) — Name + Email 2-column grid, Subject dropdown (Order/Auction/Payment/Selling/Auth/Account/Other), Message textarea 160px, optional file attachment (3 images max, 5MB), "Send Message" primary button 52px with send icon. Success state: green check-circle 64px, "Message Sent!" 22px bold, "We'll get back to you within 24 hours" stone, reference number. Below: "Looking for quick answers?" 3 cards (16px radius) — Returns, Payments, Authenticity FAQ links with icons. Mobile: single column, form full width, info as horizontal pills. Colors: --ink, --stone, --cream.