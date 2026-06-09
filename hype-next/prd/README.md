# HYPE — UI/UX Product Requirements Document
## Edition: v1.0 · June 2026 · Confidential

This is the canonical design and engineering specification for the HYPE marketplace (Next.js 14 + Tailwind + framer-motion). It covers the buyer journey (visit → bid/buy → checkout → payment), the seller journey (list → wizard → review → go-live), the account experience, and the static content pages. Every page, every component, every interaction is specified.

If you are a designer, read sections `00-overview` and `10-foundation` first, then the page in your track (buyer / seller / account / static). If you are an engineer, read the same path then jump to the file-level TODO in the relevant page PRD. If you are a product owner, read `00-overview` and the Buyer/Seller flow specs; the static and account pages are lower priority.

## North-star goal

> Reduce the buyer visit-to-payment journey to 3–4 clicks while elevating the visual language to Gucci / Hermès / Apple / Aēsop / Christie's tier. The product should feel like stepping into a private auction house, not into a default Tailwind starter.

## Table of contents

```
prd/
├── 00-overview/         Vision, design system, anti-patterns, hiring brief
├── 10-foundation/       Tokens, components, animation primitives, the chrome
├── 20-buyer-flow/       Home, Shop, Live Auctions, Auction Detail, Cart, Checkout, Order
├── 30-seller-flow/      Sell-With-Us, Dashboard, Listing Wizard, Orders, Payouts, Analytics
├── 40-account/          Bids, Orders, Wishlist, Profile
├── 50-static/           About, Contact, FAQ, Terms, Privacy, 404
└── 60-execution/        Build order, QA gates, perf budgets, rollout plan
```

## How to read this

Every page PRD has the same structure:

1. **Purpose** — one sentence on why the page exists
2. **URL & metadata** — route, title, description
3. **Wireframe** — ASCII layout, mobile-first
4. **Component inventory** — list of components needed, with `src/` paths
5. **Interactions** — hover, focus, click, error, success states
6. **Data shape** — what props/data the page consumes
7. **Edge cases** — empty, loading, error, no-data
8. **Accessibility** — keyboard, screen reader, motion-reduce
9. **Performance budget** — JS weight, LCP target
10. **Acceptance criteria** — checklist, testable

## Hiring

We are hiring for this build. See `00-overview/HIRING.md` for the three open roles.

## Status legend

- `TODO` — not started
- `IN PROGRESS` — under construction
- `DONE` — shipped and verified
- `BLOCKED` — waiting on dependency

| Section | Status |
|---|---|
| Foundation (tokens + chrome) | TODO |
| Buyer flow (7 pages) | TODO |
| Seller flow (8 pages) | TODO |
| Account (4 pages) | TODO |
| Static (5 pages) | TODO |
