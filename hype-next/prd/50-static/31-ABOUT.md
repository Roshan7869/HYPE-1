# Page 31 — About Us (about.html)

## Purpose
Brand story page — builds trust and emotional connection. Shows HYPE's mission, team, authentication process, and journey. Key for first-time visitors deciding if HYPE is legit.

## URL
`/about`

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  NAVBAR (full)                                    │
├─────────────────────────────────────────────────┤
│  HERO: "Authenticity You Can Trust"              │
│  + mission statement                             │
├─────────────────────────────────────────────────┤
│  STATS BAR                                       │
│  [50K+] [₹5Cr+] [100K+] [0.01%]               │
│  Items Sold  Volume   Users    Fake Rate         │
├─────────────────────────────────────────────────┤
│  OUR STORY                                       │
│  Founded in Mumbai, born from frustration...     │
├─────────────────────────────────────────────────┤
│  AUTHENTICATION PROCESS                           │
│  [Inspect] → [Verify] → [Seal] → [Ship]        │
├─────────────────────────────────────────────────┤
│  VALUES (3 cards)                                │
│  [Authenticity] [Transparency] [Community]       │
├─────────────────────────────────────────────────┤
│  TEAM (grid of faces)                            │
├─────────────────────────────────────────────────┤
│  CTA: "Join the Community"                       │
├─────────────────────────────────────────────────┤
│  FOOTER                                          │
└─────────────────────────────────────────────────┘
```

## Section-by-Section Specs

### 1. Hero

| Element | Specs |
|---|---|
| Background | `var(--ink)` |
| Padding | `120px 48px` |
| Text-align | Center |
| Title | "Authenticity You Can Trust" |
| Font | `font-size: 56px`, `font-weight: 700`, `color: #fff`, `max-width: 720px`, `margin: 0 auto` |
| Subtitle | "HYPE is India's first authenticated sneaker & streetwear marketplace. Every item verified by experts. Zero fakes guaranteed." |
| Font | `font-size: 18px`, `line-height: 1.6`, `color: rgba(255,255,255,0.7)`, `max-width: 600px`, `margin: 16px auto 0` |

### 2. Stats Bar

| Element | Specs |
|---|---|
| Layout | 4-column grid, `gap: 0` |
| Background | `#fff` |
| Padding | `48px 0` |
| Border-top | `1px solid #eae8e4` |
| Border-bottom | `1px solid #eae8e4` |

#### Stat Item

| Element | Specs |
|---|---|
| Text-align | Center |
| Value | `font-size: 36px`, `font-weight: 700`, `color: var(--ink)` |
| Label | `font-size: 14px`, `color: var(--stone)`, `margin-top: 4px`, `text-transform: uppercase`, `letter-spacing: 1px` |
| Border-right | `1px solid #eae8e4` (except last) |
| Stats | 50K+ Items Sold | ₹5Cr+ GMV | 100K+ Users | 0.01% Fake Rate |

### 3. Our Story

| Element | Specs |
|---|---|
| Layout | 2-column, `max-width: 960px`, centered |
| Left | Text content |
| Right | Image or illustration |
| Padding | `80px 0` |

#### Left: Text

| Element | Specs |
|---|---|
| Title | "Our Story" |
| Font | `font-size: 36px`, `font-weight: 700` |
| Paragraph 1 | "HYPE was born from frustration. In 2024, sneaker culture in India was drowning in fakes. Buyers couldn't trust what they were getting. Sellers with authentic kicks had no way to prove it. We decided to fix that." |
| Font | `font-size: 16px`, `line-height: 1.8`, `color: var(--stone)`, `margin-top: 16px` |
| Paragraph 2 | "Today, every item on HYPE goes through a multi-point authentication process before it reaches you. We're not just a marketplace — we're a guarantee." |
| CTA | `.btn-primary`, "Learn About Authentication →", `margin-top: 24px` |

#### Right: Visual

| Element | Specs |
|---|---|
| Content | Abstract illustration or authentic HYPE sticker/seal |
| Background | `var(--cream)` |
| Border-radius | `24px` |
| Aspect-ratio | `4/3` |
| Overflow | Hidden |

### 4. Authentication Process

| Element | Specs |
|---|---|
| Background | `#fff` |
| Padding | `80px 0` |
| Title | "How We Authenticate" |
| Font | `font-size: 32px`, `font-weight: 700`, centered |
| Subtitle | "Every item goes through our 4-step verification" |
| Subtitle font | `font-size: 16px`, `color: var(--stone)`, centered |

#### Steps

| Element | Specs |
|---|---|
| Layout | 4-column grid, `gap: 24px` |
| Max-width | `960px`, centered |
| Step | Centered |
| Icon container | `80px × 80px`, `border-radius: 50%`, `background: var(--cream)`, centered |
| Icon | Lucide icon, `32px`, `color: var(--ink)` |
| Connector | Arrow `→` between steps, `color: var(--stone)`, `24px` |
| Step title | `font-size: 18px`, `font-weight: 700`, `margin-top: 16px`, centered |
| Step desc | `font-size: 14px`, `color: var(--stone)`, `margin-top: 8px`, centered, `max-width: 200px` |

#### Step Details

| Step | Icon | Title | Description |
|---|---|---|---|
| 1 | `search` | Inspect | Our experts examine every detail — stitching, materials, tags, packaging |
| 2 | `check-circle` | Verify | Cross-referenced against brand databases and known fake patterns |
| 3 | `award` | Seal | Authentic items receive the HYPE Seal of Authenticity with unique ID |
| 4 | `truck` | Ship | Carefully packaged and shipped to you with the authentication card |

### 5. Values

| Element | Specs |
|---|---|
| Layout | 3-column grid, `gap: 24px`, `max-width: 960px`, centered |
| Card | White, `20px` radius, `32px` padding, `border: 1px solid #eae8e4` |
| Padding | `80px 0` |
| Background | `var(--cream)` |
| Title | "What We Stand For" |
| Title font | `font-size: 32px`, `font-weight: 700`, centered, `margin-bottom: 40px` |

#### Value Cards

| Value | Icon | Title | Description |
|---|---|---|---|
| Authenticity | `shield` | Authenticity First | Every item verified. Zero tolerance for fakes. If it's not real, it's not on HYPE. |
| Transparency | `eye` | Full Transparency | Clear fees, honest descriptions, real photos. What you see is what you get. |
| Community | `users` | Community Driven | Built by sneakerheads, for sneakerheads. Your trust is our foundation. |

| Element | Specs |
|---|---|
| Icon | `40px`, `color: var(--ink)`, centered |
| Title | `font-size: 20px`, `font-weight: 700`, `margin-top: 16px` |
| Description | `font-size: 15px`, `color: var(--stone)`, `line-height: 1.6`, `margin-top: 8px` |
| Hover | `border-color: var(--ink)`, `box-shadow: 0 4px 16px rgba(0,0,0,0.08)` |

### 6. Team

| Element | Specs |
|---|---|
| Padding | `80px 0` |
| Background | `#fff` |
| Title | "The Team" |
| Font | `font-size: 32px`, `font-weight: 700`, centered |

#### Team Grid

| Element | Specs |
|---|---|
| Layout | 4-column grid, `gap: 24px`, `max-width: 960px`, centered |
| Margin-top | `32px` |

#### Team Member

| Element | Specs |
|---|---|
| Photo | `160px × 160px`, `border-radius: 50%`, centered |
| Background | `var(--sand)` with initials |
| Name | `font-size: 16px`, `font-weight: 700`, `margin-top: 16px`, centered |
| Role | `font-size: 14px`, `color: var(--stone)`, centered |
| Social | Twitter + LinkedIn icons, 20px, `color: var(--stone)`, centered, `margin-top: 8px` |
| Hover | Photo slight scale, `transform: scale(1.05)`, `200ms` |

### 7. CTA Section

| Element | Specs |
|---|---|
| Background | `var(--ink)` |
| Padding | `80px 0` |
| Text-align | Center |
| Title | "Ready to Join the Community?" |
| Font | `font-size: 36px`, `font-weight: 700`, `color: #fff` |
| Subtitle | "Sign up today and discover authenticated sneakers & streetwear." |
| Subtitle font | `font-size: 16px`, `color: rgba(255,255,255,0.7)`, `margin-top: 12px` |
| CTA | `.btn-primary` (white bg, ink text), "Get Started", `height: 52px`, `margin-top: 32px` |

## Responsive

| Breakpoint | Behavior |
|---|---|
| > 900px | Full 2-column story, 4-step auth, 4-col team |
| 600–900px | Stats 2×2 grid, story single column, auth 2×2, team 2×2 |
| ≤ 600px | Hero title 36px, stats 2×2, story stacks, auth 1-col, team 2-col |

## Lovable Prompt

> Build the HYPE About Us page. Hero: ink background, 120px padding, "Authenticity You Can Trust" 56px bold white max 720px, subtitle 18px white/70. Stats bar: 4-column white bg, 48px padding, values 36px bold ink, labels 14px uppercase stone — 50K+ Items Sold, ₹5Cr+ GMV, 100K+ Users, 0.01% Fake Rate. Our Story: 2-column 960px max, left text "Our Story" 36px bold + 2 paragraphs 16px line-height 1.8 stone + "Learn About Authentication" primary CTA, right illustration area (cream bg, 24px radius, 4/3 aspect). Authentication Process: white bg, "How We Authenticate" 32px centered, "4-step verification" subtitle, 4-column grid — Inspect (search icon 32px ink, 80px cream circle), Verify (check-circle), Seal (award), Ship (truck), each 18px bold title + 14px stone description max 200px. Values section: cream bg, "What We Stand For" 32px centered, 3 value cards (white 20px radius 32px padding, ink border on hover + shadow) — Authenticity (shield), Transparency (eye), Community (users), 40px icons, 20px titles, 15px descriptions. Team: white bg, "The Team" 32px centered, 4-col grid, 160px circle photos with initials, 16px bold names, 14px roles, social icons. CTA: ink bg, "Ready to Join the Community?" 36px white, "Get Started" primary button white bg. Mobile: 2×2 stats, single column story, 2×2 auth, 2-col team. Colors: --ink, --stone, --cream.