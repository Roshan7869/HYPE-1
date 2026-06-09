# Page 09 — Dashboard: Payouts & Earnings (payouts.html)

## Purpose
Seller dashboard for tracking payouts. Shows pending payout amount with breakdown, commission structure, and full payout history table.

## URL
`/dashboard/payouts`

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  NAVBAR                                          │
├──────────────────┬──────────────────────────────┤
│  SIDEBAR         │  DASHBOARD MAIN               │
│  (payouts active)│                                │
│                  │  "Payouts & Earnings"          │
│                  │  "Track your pending payouts & │
│                  │   view your payout history."    │
│                  │                                │
│                  │  ┌──────────────┬─────────────┐ │
│                  │  │ PENDING      │ COMMISSION   │ │
│                  │  │ PAYOUT CARD  │ STRUCTURE    │ │
│                  │  │ ₹48,720.00   │              │ │
│                  │  │ 3 orders     │ <₹50K: 7-8% │ │
│                  │  │ awaiting      │ >₹50K: 10%  │ │
│                  │  │ [Wallet icon │              │ │
│                  │  │  background] │              │ │
│                  │  └──────────────┴─────────────┘ │
│                  │                                │
│                  │  PAYOUT HISTORY                │
│                  │  ┌───────────────────────────┐ │
│                  │  │ [Export CSV]               │ │
│                  │  │                             │ │
│                  │  │ Date | Order# | Item |     │ │
│                  │  │ Sale | Comm | Payout | St  │ │
│                  │  │────────────────────────────│ │
│                  │  │ 18 May | #HY23891 | J1... │ │
│                  │  │ 17 May | #HY23874 | Yeezy │ │
│                  │  │ 15 May | #HY23791 | ChrH │ │
│                  │  │ 14 May | #HY23725 | LV   │ │
│                  │  │ 12 May | #HY23680 | Essn │ │
│                  │  └───────────────────────────┘ │
│  FOOTER         │                                │
└──────────────────┴──────────────────────────────┘
```

## Section-by-Section Specs

### Dashboard Header

| Element | Specs |
|---|---|
| h1 | "Payouts & Earnings" — display font, `font-size: 34-46px`, `font-weight: 800` |
| p | "Track your pending payouts & view your payout history." — `color: #7e776b`, `font-size: 15px` |

### Top Row (2-column grid: pending + commission)

| Property | Value |
|---|---|
| Layout | `grid-template-columns: 1fr 1.25fr`, `gap: 22px` |

#### Pending Payout Card

| Property | Value |
|---|---|
| Background | `radial-gradient(120% 140% at 80% 20%, #3a2c14, #0c0b0a 60%)` — warm dark gradient |
| Text color | White |
| Border radius | `20px` |
| Padding | `30px` |
| Position | `relative`, `overflow: hidden` |

**Elements:**

| Element | Specs |
|---|---|
| Label | "Pending Payout" + info icon — `font-size: 14px`, `color: #cdc7bd` |
| Amount | "₹48,720.00" — display font, `font-weight: 800`, `font-size: 52px`, `letter-spacing: -0.01em`, `margin: 8px 0 18px` |
| Pill | Clock icon + "3 orders awaiting payout" — `bg: rgba(255,255,255,0.08)`, `border: 1px solid rgba(255,255,255,0.14)`, `border-radius: 999px`, `padding: 11px 20px`, `font-weight: 600`, `font-size: 14px` |
| Clock icon in pill | `22px` circle, `bg: var(--amber-bg)`, `color: #000` |
| Note | Info icon + "Payouts are processed after authentication & delivery" — `font-size: 13px`, `color: #9c958a`, `margin-top: 16px`, `max-width: 300px` |
| Wallet icon | Absolute positioned, `right: 18px`, `top: 20px`, large wallet SVG (90×90px), `color: var(--gold)` |
| Wallet bg | Radial gradient container, `170px × 150px`, `border-radius: 14px` |

#### Commission Structure Card

| Property | Value |
|---|---|
| Background | `var(--cream-2)` |
| Border | `1px solid var(--line-soft)` |
| Border radius | `20px` |
| Padding | `28px 30px` |

**Elements:**

| Element | Specs |
|---|---|
| Title (h3) | "Commission Structure" + info icon — `font-size: 16px`, `font-weight: 700`, `flex`, `gap: 7px` |
| Header row | "Sale Price" left, "Commission" right — `font-size: 13px`, `color: #8c867b`, `padding-bottom: 12px`, `border-bottom: 1px solid var(--line-soft)` |

**Commission Rows:**

| # | Icon | Sale Range | Rate |
|---|---|---|---|
| 1 | Trend-up SVG (ink circle) | Under ₹50,000 | 7 – 8% |
| 2 | Trend-up+arrow SVG (ink circle) | Above ₹50,000 | 10% |

Row styling: `padding: 18px 0`, `border-bottom: 1px solid var(--line-soft)`, icon left (34×34 ink circle), label center, percentage right (display font `font-size: 18px`, `font-weight: 800`).

Note: "Final payout shown after authentication & platform fees." — `font-size: 13px`, `color: #8c867b`, `margin-top: 16px`

### Payout History Table

| Property | Value |
|---|---|
| Background | `var(--cream-2)` |
| Border | `1px solid var(--line-soft)` |
| Border radius | `20px` |
| Padding | `26px 30px 8px` |

**Header row:**

| Element | Specs |
|---|---|
| Title (h3) | "Payout History" — `font-size: 18px`, `font-weight: 700` |
| Export button | Dark bg, white text, `border-radius: 10px`, `padding: 11px 18px`, download SVG icon, `font-weight: 600`, `font-size: 14px` |

**Table:**

| Column | Specs |
|---|---|
| Date | Normal text, `font-size: 14px` |
| Order # | Normal text |
| Item | Product thumbnail (38×38 gradient) + name (bold) + subtitle (muted, 13px) |
| Sale Price | Normal text |
| Commission | Red/negative color, amount + percentage below in muted |
| Payout | Bold, `font-weight: 600` |
| Status | Pill badge — `.st--paid` (green bg + green-ink text) or `.st--proc` (amber bg + amber-ink text) |

**Table styling:**
- `width: 100%`, `border-collapse: collapse`
- `th`: `text-align: left`, `font-size: 13px`, `color: #8c867b`, `font-weight: 500`, `padding: 16px 12px`, `border-bottom: 1px solid var(--line-soft)`
- `td`: `padding: 18px 12px`, `border-bottom: 1px solid var(--line-soft)`, `font-size: 14px`
- Last row: no border-bottom

**Payout Data (5 rows):**

| Date | Order | Item | Sub | Sale | Commission | Payout | Status | Gradient |
|---|---|---|---|---|---|---|---|---|
| 18 May 2026 | #HY23891 | Jordan 1 Retro High OG | Mocha | ₹28,500 | −₹2,280 (8%) | ₹26,220 | Paid | `linear-gradient(150deg,#3a2f22,#0d0a07)` |
| 17 May 2026 | #HY23874 | Yeezy Foam RNNR | Sand | ₹12,999 | −₹1,040 (8%) | ₹11,959 | Processing | `linear-gradient(150deg,#e7b94a,#b5851f)` |
| 15 May 2026 | #HY23791 | Chrome Hearts | Logo Tee | ₹58,000 | −₹5,800 (10%) | ₹52,200 | Paid | `linear-gradient(150deg,#5a7fb0,#26405f)` |
| 14 May 2026 | #HY23725 | Louis Vuitton | Keepall 50 | ₹65,000 | −₹6,500 (10%) | ₹58,500 | Paid | `linear-gradient(150deg,#8a6a3a,#4a3318)` |
| 12 May 2026 | #HY23680 | Essentials Hoodie | Jet Black | ₹9,850 | −₹788 (8%) | ₹9,062 | Paid | `linear-gradient(150deg,#caa46a,#7d5a2c)` |

**Footer note:** Info icon + "Payouts are processed once authentication is completed and the item is delivered to the buyer." — `font-size: 13px`, `color: #8c867b`, `padding: 18px 12px`

---

## Responsive Behavior (< 1100px)

- Top row → single column (pending card stacks above commission)
- Table → horizontal scroll (`overflow-x: auto`), `min-width: 760px`

---

## Lovable Build Prompt

```
Build a Dashboard "Payouts & Earnings" page for HYPE marketplace — seller tracks payouts and commission.

Layout: Dashboard (300px sidebar with "Payouts & Earnings" active + main content).

Main content:
1. Header: "Payouts & Earnings" h1, "Track your pending payouts & view your payout history." subtitle

2. Top row (2-column grid: 1fr 1.25fr, gap 22px):
   - LEFT: Pending Payout card. Dark warm gradient background (radial-gradient at 80% 20%, #3a2c14 to #0c0b0a), white text, rounded 20px. Large wallet SVG icon (gold color) positioned top-right. Content: "Pending Payout" label with info icon, ₹48,720.00 in massive 52px display font, pill badge with clock icon "3 orders awaiting payout", small note "Payouts are processed after authentication & delivery" with info icon
   - RIGHT: Commission Structure card (cream-2 bg, soft border, rounded 20px). "Commission Structure" title with info icon. Header row "Sale Price | Commission". Two rows: "Under ₹50,000 → 7–8%" with trend-up icon in ink circle, "Above ₹50,000 → 10%" with trend-up+arrow icon in ink circle. Footer note about final payout after fees.

3. Payout History section (cream-2 bg, soft border, rounded 20px):
   - Header: "Payout History" + "Export CSV" dark button with download icon
   - Table with columns: Date, Order #, Item, Sale Price, Commission, Payout, Status
   - 5 rows of data with gradient product thumbnails, item name + subtitle, commission in red/negative with percentage, payout bold, status as green "Paid" or amber "Processing" pills
   - Rows: Jordan 1 Mocha ₹28500/₹26220 Paid, Yeezy Foam Sand ₹12999/₹11959 Processing, Chrome Hearts Logo Tee ₹58000/₹52200 Paid, Louis Vuitton Keepall 50 ₹65000/₹58500 Paid, Essentials Hoodie Jet Black ₹9850/₹9062 Paid
   - Footer note about payout processing

Design system: ink #0c0b0a, cream #f5efe4, cream-2 #efe7da, line-soft #e8ddd0, red #e8543b, green #e8f5e2, green-ink #2d7a3a, amber-bg #fef3e2, amber-ink #b07a1a, gold #d8c4ac, Hanken Grotesk, max-width 1500px. Responsive: single column below 1100px, table scrolls horizontally.
```