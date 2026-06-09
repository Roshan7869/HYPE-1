# Page 22 — Dashboard: Add Photos (dashboard-add-photos.html)

## Purpose
Step in the seller listing flow — upload product photos with drag-and-drop, reorder, set cover, and preview. This is the critical trust page; photo quality directly impacts auction success.

## URL
`/dashboard/listings/new/photos` (step 2 of listing flow, after Create Listing)

## Layout Structure

```
┌─────────────────────────────────────────────────┐
│  NAVBAR (seller mode — "Dashboard" nav active)   │
├─────────────────────────────────────────────────┤
│  SIDEBAR + CONTENT (dashboard layout)            │
│  ┌────────┬────────────────────────────────────┐│
│  │ SIDE   │  STEP PROGRESS BAR                  ││
│  │        │  1.Details → 2.Photos → 3.Pricing    ││
│  │        ├────────────────────────────────────┤│
│  │        │  ADD PHOTOS                          ││
│  │        │  ┌────────────────────────────────┐ ││
│  │        │  │  DRAG & DROP ZONE               │ ││
│  │        │  │  📷 Drop images here or click  │ ││
│  │        │  │  Max 8 photos · JPG/PNG · 5MB  │ ││
│  │        │  └────────────────────────────────┘ ││
│  │        │                                      ││
│  │        │  PHOTO GRID (uploaded)               ││
│  │        │  ┌────┐ ┌────┐ ┌────┐ ┌────┐       ││
│  │        │  │ ★1 │ │ 2  │ │ 3  │ │ 4  │       ││
│  │        │  │COVER│ │    │ │    │ │  ✕  │       ││
│  │        │  └────┘ └────┘ └────┘ └────┘       ││
│  │        │                                      ││
│  │        │  PHOTO TIPS                          ││
│  │        │  ✓ Use natural lighting              ││
│  │        │  ✓ Show all angles                   ││
│  │        │  ✓ Include size tag/box              ││
│  │        │                                      ││
│  │        │  [← Back] [Continue to Pricing →]    ││
│  └────────┴────────────────────────────────────┘│
├─────────────────────────────────────────────────┤
│  FOOTER                                          │
└─────────────────────────────────────────────────┘
```

## Section-by-Section Specs

### 1. Step Progress Bar

| Element | Specs |
|---|---|
| Layout | Flex row, `margin-bottom: 32px` |
| Steps | 1. Details (check icon if complete), 2. Photos (active, ink dot), 3. Pricing |
| Completed | `color: #22c55e`, check icon |
| Active | `color: var(--ink)`, `font-weight: 700`, ink dot `8px` |
| Pending | `color: var(--stone)` |
| Connector | `2px` line, `height: 2px`, `flex: 1`, `background: #e0e0e0` |
| Completed connector | `background: #22c55e` |

### 2. Page Title

| Element | Specs |
|---|---|
| Title | "Add Photos" |
| Font | `font-size: 24px`, `font-weight: 700` |
| Subtitle | "Upload high-quality photos to attract buyers" |
| Subtitle font | `font-size: 15px`, `color: var(--stone)` |
| Margin-bottom | `24px` |

### 3. Drag & Drop Upload Zone

| Element | Specs |
|---|---|
| Layout | Full-width, centered content |
| Border | `2px dashed #e0e0e0` |
| Border-radius | `20px` |
| Padding | `48px 24px` |
| Background | `#faf9f7` default, `var(--cream)` on drag-over |
| Drag-over | `border-color: var(--ink)`, `background: rgba(26,24,21,0.03)` |
| Transition | `200ms ease` |
| Icon | Lucide `upload-cloud`, `48px`, `color: var(--stone)` |
| Primary text | "Drop images here or click to upload" |
| Primary font | `font-size: 16px`, `font-weight: 600`, `color: var(--ink)` |
| Secondary text | "Maximum 8 photos · JPG, PNG · Max 5MB each" |
| Secondary font | `font-size: 13px`, `color: var(--stone)` |
| Hidden input | `type="file"`, `accept="image/jpeg,image/png"`, `multiple` |
| Click action | Click anywhere in zone triggers file input |

### 4. Photo Grid

| Element | Specs |
|---|---|
| Layout | CSS Grid, `grid-template-columns: repeat(4, 1fr)`, `gap: 16px` |
| Margin | `24px 0` |

#### Photo Card

| Element | Specs |
|---|---|
| Aspect-ratio | `1/1` |
| Border-radius | `16px` |
| Overflow | Hidden |
| Position | Relative |
| Background | `var(--sand)` |
| Image | `object-fit: cover`, `width: 100%`, `height: 100%` |

#### Cover Badge (photo 1)

| Element | Specs |
|---|---|
| Position | Top-left, `8px 8px` |
| Background | `var(--ink)` |
| Color | `#fff` |
| Text | "★ COVER" |
| Font | `font-size: 11px`, `font-weight: 700`, `letter-spacing: 0.5px` |
| Padding | `4px 10px` |
| Border-radius | `6px` |

#### Set Cover Button (non-cover photos)

| Element | Specs |
|---|---|
| Position | Top-left, `8px 8px` |
| Background | `rgba(255,255,255,0.9)` |
| Text | "Set as Cover" |
| Font | `font-size: 11px`, `font-weight: 600` |
| Padding | `4px 10px` |
| Border-radius | `6px` |
| Hover | `background: #fff`, `box-shadow: 0 2px 8px rgba(0,0,0,0.1)` |
| Opacity | `0` by default, `1` on card hover |

#### Photo Number

| Element | Specs |
|---|---|
| Position | Top-right, `8px 8px` |
| Background | `rgba(0,0,0,0.5)` |
| Color | `#fff` |
| Text | "2", "3", etc. |
| Font | `font-size: 12px`, `font-weight: 700` |
| `width/height` | `24px × 24px` |
| Border-radius | `50%` |
| Text-align | Center, line-height `24px` |

#### Delete Button

| Element | Specs |
|---|---|
| Position | Bottom-right, `8px` |
| Icon | Lucide `x`, `16px` |
| Background | `rgba(0,0,0,0.5)` |
| Color | `#fff` |
| `width/height` | `28px × 28px` |
| Border-radius | `50%` |
| Hover | `background: #dc2626` |
| Opacity | `0` by default, `1` on card hover |

#### Drag Handle (for reorder)

| Element | Specs |
|---|---|
| Position | Bottom-left, `8px` |
| Icon | Lucide `grip-vertical`, `16px` |
| Color | `rgba(255,255,255,0.8)` |
| Cursor | `grab` |
| Opacity | `0` by default, `1` on card hover |

### 5. Upload Progress

| Element | Specs |
|---|---|
| Layout | Below each photo card during upload |
| Progress bar | `height: 4px`, `background: #e0e0e0`, `border-radius: 2px` |
| Progress fill | `background: var(--ink)`, `transition: width 200ms` |
| Text | "Uploading... 67%" `font-size: 12px`, `color: var(--stone)`, centered below |
| Failed state | Red border, "Upload failed" text, "Retry" link |

### 6. Photo Tips Section

| Element | Specs |
|---|---|
| Layout | White card, `border-radius: 16px`, `padding: 24px`, `margin-top: 24px` |
| Background | `#fff` |
| Border | `1px solid #eae8e4` |
| Title | "Photo Tips" 16px bold |
| Tips list | `margin-top: 12px` |
| Tip | Check icon `16px` green + text 14px, `padding: 6px 0` |
| Tips | |
| | ✓ Use natural lighting — avoid flash reflections |
| | ✓ Show all angles — front, back, sole, inside tag |
| | ✓ Include size tag or box for authentication |
| | ✓ Use a clean, plain background |
| | ✓ No watermarks, overlays, or screenshots |
| | ✓ First photo becomes the cover image |

### 7. Navigation Buttons

| Element | Specs |
|---|---|
| Layout | Flex row, `justify-content: space-between`, `margin-top: 32px` |
| Back | `.btn-secondary`, "← Back", links to Create Listing |
| Continue | `.btn-primary`, "Continue to Pricing →", links to Pricing page |
| Disabled | If 0 photos uploaded, Continue is disabled with `opacity: 0.5` |

## Data Model

```javascript
const photoUpload = {
  listingId: "list_001",
  photos: [
    { id: "photo_001", url: "...", isCover: true, order: 1 },
    { id: "photo_002", url: "...", isCover: false, order: 2 },
    { id: "photo_003", url: "...", isCover: false, order: 3 }
  ],
  maxPhotos: 8,
  maxFileSize: 5,  // MB
  acceptedFormats: ["image/jpeg", "image/png"],
  uploading: []     // [{ id, progress, status }]
};
```

## Responsive

| Breakpoint | Behavior |
|---|---|
| > 900px | 4-column grid + sidebar visible |
| ≤ 900px | 3-column grid, sidebar collapses to hamburger |
| ≤ 600px | 2-column grid |
| ≤ 400px | 1-column grid, delete/handle always visible |

## Lovable Prompt

> Build the HYPE dashboard Add Photos page (step 2 of seller listing). Dashboard layout with sidebar. Step progress bar: 1.Details ✓, 2.Photos (active, ink dot), 3.Pricing — with green completed connectors. Title "Add Photos" 24px bold, subtitle 15px stone. Drag & drop zone: 2px dashed border, 20px radius, 48px padding, cloud icon 48px stone, "Drop images here or click to upload" 16px bold, "Maximum 8 photos · JPG, PNG · Max 5MB" 13px stone, #faf9f7 bg. On drag-over: border ink, bg slight tint. 4-column photo grid: 1:1 aspect, 16px radius, cover photo shows "★ COVER" badge ink bg white text 11px. Non-cover shows "Set as Cover" on hover. Photo number circle top-right (24px, black 50% bg, white bold). Delete X button bottom-right on hover (28px circle, black 50% bg, turns red). Drag handle bottom-left for reorder (grip-vertical, grab cursor). Upload progress: 4px bar with ink fill. Failed state: red border, "Retry" link. Photo tips card: white 16px radius, "Photo Tips" 16px bold, green check icons with tips about natural lighting, all angles, size tags, plain background, no watermarks. Navigation: "← Back" secondary + "Continue to Pricing →" primary (disabled if 0 photos). Mobile: 2/1 column grid, always-visible delete. Colors: --ink, --stone, --cream.