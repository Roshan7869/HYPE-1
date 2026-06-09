# Page 06 — Dashboard: Listing Details (create-listing-details.html)

## Purpose
Step 2 of the 6-step listing flow. Seller selects product variant details: size, colorway, year of release, and optional style/SKU. Uses a stepper UI pattern.

## URL
`/dashboard/create-listing/details`

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  NAVBAR                                          │
├──────────────────┬──────────────────────────────┤
│  SIDEBAR         │  DASHBOARD MAIN               │
│  (create active) │                                │
│                  │  "List Your Next Drop"         │
│                  │  "Start by searching..."        │
│                  │                                │
│                  │  ← Back                        │
│                  │                                │
│                  │  STEPPER:                       │
│                  │  ✓1 Product → 2 Details →      │
│                  │    3 Condition → 4 Photos →   │
│                  │    5 Pricing → 6 Review        │
│                  │                                │
│                  │  ┌────────────────────┬──────┐ │
│                  │  │ STEP 2 CARD        │WHY  │ │
│                  │  │                    │      │ │
│                  │  │ [2] Select Product │ i    │ │
│                  │  │     Details        │Why   │ │
│                  │  │                    │this  │ │
│                  │  │ ┌────────────────┐│step  │ │
│                  │  │ │ Size        →  ││      │ │
│                  │  │ └────────────────┘│Provi │ │
│                  │  │ ┌────────────────┐│ding  │ │
│                  │  │ │ Colorway   →  ││accur │ │
│                  │  │ └────────────────┘│ate   │ │
│                  │  │ ┌────────────────┐│detai │ │
│                  │  │ │ Year        →  ││ls    │ │
│                  │  │ └────────────────┘│helps │ │
│                  │  │ ┌────────────────┐│buyer │ │
│                  │  │ │ Style/SKU  →  ││s and │ │
│                  │  │ └────────────────┘│builds│ │
│                  │  │                    │trust │ │
│                  │  └────────────────────┴──────┘ │
│                  │                                │
│                  │  [Save as Draft]  [Next step →]│
│                  │                                │
│  FOOTER         │                                │
└──────────────────┴──────────────────────────────┘
```

## Section-by-Section Specs

### Dashboard Header
Same as create-listing: "List Your Next Drop" + subtitle.

### Back Link

| Element | Specs |
|---|---|
| Text | "← Back" with chevron-left SVG |
| Link | `href="create-listing.html"` |
| Style | `font-size: 16px`, `font-weight: 500`, inline-flex, `gap: 8px` |
| Margin | `26px 0 22px` |

### Stepper

| Property | Value |
|---|---|
| Layout | Flex row with line connectors |
| Margin | Bottom `34px` |

**Step states:**
- **Done (step 1):** Circle: ink bg, white text, checkmark SVG. Label: ink color, font-weight 600. Class: `.stp.active`
- **Current (step 2):** Circle: ink bg, white text, number "2". Label: ink color, font-weight 600. Class: `.stp.active`
- **Future (steps 3-6):** Circle: white bg, muted border, muted number. Label: muted color, font-weight 500.

**Steps:** Product ✓, Details (2), Condition (3), Photos (4), Pricing (5), Review (6)

**Circle:** `48×48px`, `border-radius: 50%`, display font, `font-size: 18px`, `font-weight: 800`
**Label:** Below circle, `font-size: 13px`
**Line:** `flex: 1`, `height: 1.5px`, `bg: var(--line)`, `margin-top: 24px`

### Detail Card (2-column grid: main + sidebar)

**Left column — Details form:**

| Element | Specs |
|---|---|
| Card | `bg: var(--cream)`, `border-radius: 22px`, `padding: 36px` |
| Grid | `grid-template-columns: 1fr 290px` |
| Step number | Circle `34×34px`, ink bg, white text, display font `font-size: 15px`, `font-weight: 800` |
| Title | "Select Product Details" — display font, `font-size: 24px`, `font-weight: 800` |
| Subtitle | "Choose the option that best matches your item." — `color: #7e776b`, `font-size: 15px` |

**4 Option Rows:**

Each option row:
| Element | Specs |
|---|---|
| Row | White bg, `border: 1px solid var(--line-soft)`, `border-radius: 14px`, `padding: 20px 22px`, `margin-bottom: 14px`, `cursor: pointer` |
| Hover | `border-color: var(--ink)` |
| Icon | Left: `30px` wide flex area with 24×24 SVG |
| Title | Bold `font-size: 16px`, `font-weight: 700` |
| Subtitle | `font-size: 14px`, `color: #8c867b` |
| Optional tag | `font-weight: 500`, `color: #9c958a`, after title in `<span class="opt">` |
| Chevron | Right-aligned arrow icon, `color: #b8afa0` |

**Options:**

| # | Title | Subtitle | Optional | Icon |
|---|---|---|---|---|
| 1 | Size | Select the size of your item | No | Box/package icon |
| 2 | Colorway | Select the color or colorway | No | Palette icon |
| 3 | Year of Release | Select the year of release | No | Calendar icon |
| 4 | Style / SKU | Select the style or SKU if available | Yes | Cube/box icon |

**Right column — "Why this step" info card:**

| Element | Specs |
|---|---|
| Card | `bg: #e9e1d4`, `border: 1px solid var(--line-soft)`, `border-radius: 16px`, `padding: 22px`, `align-self: start` |
| Icon | "i" info circle, ink bg, white text, `24×24px` |
| Title | "Why this step" — `font-weight: 700`, `font-size: 15px` |
| Text | "Providing accurate details helps buyers find your listing and builds trust." — `color: #6f6a60`, `font-size: 14px`, `line-height: 1.5` |

### Action Buttons

| Element | Specs |
|---|---|
| Layout | Flex, `justify-content: space-between`, `margin: 30px 0 10px` |
| Left | "Save as Draft" — `.btn.btn--outline.btn--lg`, links to create-listing.html |
| Right | "Next step →" — `.btn.btn--dark.btn--lg`, links to create-listing-size.html |

---

## Responsive Behavior (< 1100px)

- Detail card grid → single column (why card stacks below)
- Sidebar collapses
- Stepper text may truncate

---

## Lovable Build Prompt

```
Build a Dashboard "Listing Details" page (Step 2 of 6) for HYPE marketplace selling flow.

Layout: Dashboard layout (300px sidebar + main). Sidebar shows "Create Listing" as active nav item.

Main content:
1. Header: "List Your Next Drop" h1, "Start by searching the product you want to sell." subtitle
2. Back link: "← Back" arrow, linking to create-listing page
3. Stepper: 6 steps in a horizontal row with connecting lines. Step 1 (Product) has green checkmark in filled circle. Step 2 (Details) is current (filled ink circle with "2"). Steps 3-6 (Condition, Photos, Pricing, Review) are future (unfilled circles, muted labels). Each step: number circle (48px round, display font bold 18px) + label text below.

4. Detail card: Cream bg, rounded 22px, 2-column grid (main 1fr + 290px sidebar).
   - Left: Step number badge "2" (34px ink circle) + "Select Product Details" title + "Choose the option that best matches your item." subtitle. Below: 4 clickable option rows (white bg, rounded 14px, border, 20px padding) each with: icon (24px SVG), bold title, description subtitle, right chevron arrow. Options: Size, Colorway, Year of Release, Style/SKU (optional).
   - Right: Info card (warm beige bg, 16px rounded). "i" icon + "Why this step" header + "Providing accurate details helps buyers find your listing and builds trust." text.

5. Action row: "Save as Draft" outline button (left) + "Next step →" dark button (right)

Design system: ink #0c0b0a, cream #f5efe4, Hanken Grotesk, max-width 1500px. Responsive: detail card goes single column below 1100px, sidebar collapses.
```