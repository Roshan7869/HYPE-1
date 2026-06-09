# Page 02 — Shop (shop.html)

## Purpose
Browse and filter all product listings — both fixed-price and Buy Now. Primary shopping experience with a filter sidebar, product grid, and pagination.

## URL
`/shop`

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  NAVBAR                                          │
├─────────────────────────────────────────────────┤
│  BREADCRUMB: Home / Shop / Browse Listings       │
├─────────────────────────────────────────────────┤
│  SHOP BODY (bg: --shop-bg / #f8f5f0)             │
│  ┌─────────────────────────────────────────────┐ │
│  │ "Fixed price and Buy Now listings."  Sort  │ │
│  │ Grid | List toggle                         │ │
│  ├─────────────────────────────────────────────┤ │
│  │ [Chip: Nike ×] [Jordan ×] [UK 9 ×]        │ │
│  │ [DS/Brand New ×] [₹0-₹50K ×] Clear all    │ │
│  │                                128 results  │ │
│  ├──────────┬──────────────────────────────────┤ │
│  │ FILTERS  │  PRODUCT GRID (4-col)             │ │
│  │---------│  ┌──────┐ ┌──────┐ ┌──────┐      │ │
│  │Category  │  │ P1   │ │ P2   │ │ P3   │      │ │
│  │Brand     │  └──────┘ └──────┘ └──────┘      │ │
│  │Size (UK) │  ┌──────┐ ┌──────┐ ┌──────┐      │ │
│  │Condition │  │ P4   │ │ P5   │ │ P6   │      │ │
│  │Price     │  └──────┘ └──────┘ └──────┘      │ │
│  │Sort      │  ┌──────┐ ┌──────┐               │ │
│  │          │  │ P7   │ │ P8   │               │ │
│  │          │  └──────┘ └──────┘               │ │
│  │          │  Pagination: ‹ 1 2 3 … 9 ›      │ │
│  └──────────┴──────────────────────────────────┘ │
├─────────────────────────────────────────────────┤
│  FOOTER                                          │
└─────────────────────────────────────────────────┘
```

## Section-by-Section Specs

### 1. Breadcrumb

| Element | Specs |
|---|---|
| Background | `#fff` |
| Padding | `20px 48px` |
| Font | `font-size: 15px`, `font-weight: 600` |
| Separator | `/ ` with `opacity: 0.4` |
| Current | `color: #5c564c`, `font-weight: 500` |
| Path | Home → Shop → Browse Listings |

### 2. Top Bar

| Element | Specs |
|---|---|
| Left text | "Fixed price and Buy Now listings." — `font-size: 18px`, `color: #5c564c` |
| Sort dropdown | White bg, `border: 1px solid var(--line)`, `border-radius: 12px`, `padding: 13px 18px`, "Sort by: Newest" + chevron |
| View toggle | Two icon buttons (grid view active with dark bg, list view) — `48×48px`, `border-radius: 12px` |

### 3. Active Filter Chips

| Element | Specs |
|---|---|
| Chip | White bg, `border: 1px solid var(--line)`, `border-radius: 999px`, `padding: 10px 16px`, `font-size: 14px`, close × icon |
| "Clear all" | `color: var(--red)`, `font-weight: 700` |
| Count | Right-aligned, `color: #a39a8c`, `font-size: 15px` |

Default active chips: Nike, Jordan, UK 9, DS/Brand New, ₹0–₹50,000

### 4. Filter Sidebar (300px fixed width)

| Section | Fields |
|---|---|
| Category | Radio buttons: All Categories (active), Sneakers (1842), Apparel (632), Collectibles (156) |
| Brand | Search input + radio: Nike (972, active), Jordan (645), Adidas (214), New Balance (128), Other (671) |
| Size (UK) | Button grid 4 columns: All, 3-18+. Active: All, 9 |
| Condition | Checkboxes: All, DS/Brand New (1298, active), Like New (512, active), Very Good (389, active), Good (198, active), Fair (77, active) |
| Sort | Radio: Newest (active), Price Low→High (active — bug in original, all checked), Price High→Low, Most Watched |

**Filter card styling:** White bg, `border: 1px solid var(--line-soft)`, `border-radius: 18px`, `padding: 8px 24px 28px`

**Section headers:** `font-size: 13px`, `letter-spacing: 0.14em`, uppercase, `font-weight: 700`

### 5. Product Grid (remaining width, 4-column)

**Product Card specs:**

| Element | Specs |
|---|---|
| Card | `border-radius: 14px`, `overflow: hidden`, bg: `var(--ink)` (black), `box-shadow: 0 10px 24px -16px rgba(0,0,0,0.4)` |
| Image | `aspect-ratio: 1/1`, gradient background, centered white text placeholder |
| Verified pill | Top-left, inside image area |
| Heart button | Top-right, `30×30px` white circle with heart SVG |
| Watcher badge | Bottom-left, dark overlay pill with eye icon + "X watching" |
| Name | `font-weight: 600`, `font-size: 15px`, `line-height: 1.25`, `min-height: 38px`, white text |
| Condition | `font-size: 12px`, `color: #9c958a` (optional) |
| Price | `font-family: var(--font-disp)`, `font-weight: 800`, `font-size: 17px`, white text |
| Body padding | `16px 16px 20px` |

**Product Data (8 items):**

| # | Name | Price | Condition | Watch | Gradient |
|---|---|---|---|---|---|
| 1 | Air Jordan 1 Retro High OG 'Chicago' | ₹28,500 | — | 47 watching | `linear-gradient(150deg,#3a2f22,#0d0a07)` |
| 2 | Air Jordan 4 Retro 'White Cement' | ₹32,900 | — | 23 watching | `linear-gradient(150deg,#dcd3c4,#b3a78f)` |
| 3 | Air Jordan 11 Retro 'Bred' | ₹31,500 | — | — | `linear-gradient(150deg,#8a1f1f,#3a0808)` |
| 4 | New Balance 990v6 Grey | ₹24,999 | — | — | `linear-gradient(150deg,#c9c9cb,#7d7d80)` |
| 5 | YEEZY Foam RNR 'Sand' | ₹12,999 | — | — | `linear-gradient(150deg,#e7b94a,#b5851f)` |
| 6 | Air Jordan 1 Retro High OG 'UNC Toe' | ₹27,900 | — | — | `linear-gradient(150deg,#5a7fb0,#26405f)` |
| 7 | Fear of God Essentials Hoodie Black | ₹8,499 | — | — | `linear-gradient(150deg,#3b3b3d,#0e0e0f)` |
| 8 | Bearbrick 100% & 400% Set | ₹14,999 | DS/Brand New | 12 watching | `linear-gradient(150deg,#caa46a,#7d5a2c)` |

### 6. Pagination

| Element | Specs |
|---|---|
| Layout | Centered flex row, `gap: 12px`, `margin-top: 46px` |
| Button | `min-width: 48px`, `height: 48px`, `border-radius: 12px`, `border: 1px solid var(--line)`, `font-weight: 600` |
| Active | `bg: var(--ink)`, `color: white` |
| Pages | ‹ 1 2 3 … 9 › |

---

## Responsive Behavior (< 1100px)

- Filter sidebar collapses to hidden (show filter icon toggle button)
- Product grid → 2 columns
- Pagination remains centered

---

## Lovable Build Prompt

```
Build a Shop/Browse Listings page for HYPE marketplace following the established design system (ink #0c0b0a, cream #f5efe4, Hanken Grotesk font, max-width 1500px).

Page structure top to bottom:
1. Navbar (standard HYPE navbar)
2. Breadcrumb: Home / Shop / Browse Listings
3. Top bar: subtitle "Fixed price and Buy Now listings." + sort dropdown + grid/list toggle icons
4. Active filter chips row: Nike ×, Jordan ×, UK 9 ×, DS/Brand New ×, ₹0–₹50,000 ×, "Clear all", "128 results" right-aligned
5. Two-column layout: 300px filter sidebar + product grid

Filter sidebar (white card, rounded corners 18px):
- Category: radio buttons (All Categories, Sneakers 1842, Apparel 632, Collectibles 156)
- Brand: search input + radio (Nike 972 active, Jordan 645, Adidas 214, New Balance 128, Other 671)
- Size UK: 4-column button grid (All, 3-18+), All and 9 active
- Condition: checkboxes (all checked: DS/Brand New, Like New, Very Good, Good, Fair)
- Sort: radio buttons (Newest, Price Low-High, Price High-Low, Most Watched)

Product grid: 4 columns, 8 product cards with dark backgrounds:
Each card: gradient image placeholder (1:1 aspect ratio) with HYPE Verified pill top-left, heart icon top-right, watcher count bottom-left. Below image: product name (white, 15px bold), condition (muted, optional), price (display font 17px bold ₹).

Pagination: ‹ 1 2 3 … 9 › centered below grid.

Responsive: below 1100px, sidebar collapses (toggle button), grid goes to 2 columns.
```