# HYPE — Build Order & Execution Plan

**Phase:** 60-execution
**Cross-ref:** /home/roshan/Desktop/HYPE-1 (1)/hype-next/prd/60-execution/DESIGN-IMPLEMENTATION-PLAN.md
**Cross-ref:** /home/roshan/Desktop/HYPE-1 (1)/docs/HYPE-NEXTJS-IMPLEMENTATION-PLAN.md (21 phases)

---

## Priority Matrix

```
P0 — BLOCKING (can't demo without)
P1 — CRITICAL (core flows broken)
P2 — IMPORTANT (design consistency, polish)
P3 — NICE TO HAVE (cleanup, housekeeping)
```

---

## Phase 0: Foundation (P0 — 1 day)

**Goal:** Establish consistent chrome and missing primitives

### Tasks
1. Delete `site-header.tsx`, rename `nav-marketplace.tsx` → `site-header.tsx`
2. Delete basic `Footer` from `footer.tsx`, rename `FooterDetailed` → `Footer`
3. Update all imports across 20+ page files
4. Create: `ui/dialog.tsx`, `ui/toast.tsx`
5. Create: `shared/empty-state.tsx`, `shared/error-state.tsx`, `shared/loading-state.tsx`
6. Add `prefers-reduced-motion` to globals.css
7. Create `lib/fetcher.ts` (SWR fetcher utility)

## Phase 1: Auction Detail + Bid (P0 — 1 day)

**Goal:** Fix the broken bid flow

### Tasks
1. Wire "Place Bid" button → open BidPanel dialog
2. Create `auction/bid-panel.tsx` (bid amount input, confirm, auth check)
3. Create `auction/authentication-card.tsx` (HYPE verification badge)
4. Create `auction/price-history.tsx` (recharts for price history)

## Phase 2: Cart (P0 — 0.5 day)

**Goal:** Fix cart chrome and data

### Tasks
1. Remove AuthShell wrapper from `cart/page.tsx`
2. Replace with SiteHeader + Footer
3. Connect cart items to live auction data (remove mock)
4. Add empty state

## Phase 3: Checkout (P0 — 1 day)

**Goal:** Fix checkout chrome and build payment flow

### Tasks
1. Replace custom inline header with SiteHeader
2. Create `checkout/address-form.tsx`
3. Create `checkout/payment-form.tsx`
4. Create `checkout/order-summary.tsx`
5. Remove hard-coded ORDER_ITEMS

## Phase 4: API Scaffolding (P1 — 2 days)

**Goal:** Build backend to support frontend

### Tasks
1. Create `/app/api/auth/` routes (register, login, google, me)
2. Create `/app/api/auctions/` routes (list, detail, bids)
3. Create `/app/api/bids/` route (POST + GET mine)
4. Create `/app/api/cart/` routes
5. Create `/app/api/checkout/` routes
6. Create SWR client hooks under `src/api/`

## Phase 5: Dashboard Polish (P2 — 1 day)

**Goal:** Complete dashboard pages

### Tasks
1. Consolidate 5-step wizard into single page
2. Add data tables for orders/payouts
3. Wire analytics charts to real data shape
4. Create empty states for orders, listings, payouts

## Phase 6: Account Pages (P2 — 0.5 day)

**Goal:** Add empty states and polish

### Tasks
1. Add empty states for bids, orders, wishlist
2. Add order status filters
3. Wire profile save handler

## Phase 7: Static Pages (P3 — 0.5 day)

**Goal:** Add interactions

### Tasks
1. Add FAQ accordion interaction
2. Wire contact form POST handler
3. Verify all static pages use unified chrome

## Phase 8: Polish & Performance (P3 — 1 day)

**Goal:** Production readiness

### Tasks
1. Audit LCP, INP, CLS
2. Add motion-reduce media queries
3. Verify 3-click flow end-to-end
4. Code-split recharts, lenis
5. Clean up stale files (HTML prototypes, uploads dupes)
6. Add uploads/ to .gitignore

---

## Build Order Timeline

```
Day 1:   Phase 0 (Foundation) + Phase 1 (Bid)
Day 2:   Phase 2 (Cart) + Phase 3 (Checkout)
Day 3-4: Phase 4 (API scaffolding)
Day 5:   Phase 5 (Dashboard) + Phase 6 (Account)
Day 6:   Phase 7 (Static) + Phase 8 (Polish)

Total: ~6 days for P0-P3, ~3 days for P0-P1 urgent fix
```

---

## Current Status Summary

| Phase | Priority | Pages | Status | Key Blockers |
|-------|----------|-------|--------|-------------|
| Foundation | P0 | — | IN PROGRESS | Chrome unification, missing primitives |
| Buyer flow | P0 | 7 pages | BROKEN | Bid handler, cart chrome, checkout data |
| Seller flow | P1 | 10 pages | MOSTLY DONE | Wizard consolidation, API connectivity |
| Account | P2 | 5 pages | DONE | Missing empty states |
| Static | P3 | 6 pages | ALL DONE | FAQ accordion, contact POST |
| API | P0 | 40 endpoints | NOT STARTED | No /app/api/ directory yet |
