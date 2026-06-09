# HYPE-1 — NEXUS Live Tracker

> **Live:** https://hype-next.vercel.app · **Branch:** `main` · **Last updated:** 2026-06-09
> Mirror of `hype-next/PLAN.md` — kept current after each ship.

---

## Summary

| Phase | PRDs | Done | In Progress | Pending | Status |
|---|---|---|---|---|---|
| **00 — Overview** | 1 | 1 | 0 | 0 | ✅ |
| **10 — Foundation (Auth)** | 4 | 4 | 0 | 0 | ✅ |
| **20 — Buyer flow** | 6 | 6 | 0 | 0 | ✅ |
| **30 — Seller flow** | 11 | 10 | 1 | 0 | 🔄 |
| **40 — Account** | 5 | 5 | 0 | 0 | ✅ |
| **50 — Static** | 6 | 6 | 0 | 0 | ✅ |
| **60 — Execution** | 3 | 3 | 0 | 0 | ✅ |
| **TOTAL** | **44** | **43** | **1** | **0** | **97.7%** |

**Legend:** ✅ Done · 🔄 In progress · ⏳ Pending · ❌ Blocked

---

## 00 — Overview (1/1)

| ID | Title | URL | Status | Verified | Notes |
|---|---|---|---|---|---|
| 00-MASTER-PRD | Master PRD + design system | — | ✅ | `prd/00-overview/00-MASTER-PRD.md` | 33-page architecture map, tokens, data models. Reference only. |

## 10 — Foundation / Auth (4/4)

| ID | Title | URL | Status | Verified | Notes |
|---|---|---|---|---|---|
| 10-AUTH-LOGIN | Login | `/login` | ✅ | 200 · WebFetch ok | Email/password + Google button + Remember me + forgot link. Form is wired, onSubmit shows error after mock delay (no backend). |
| 11-AUTH-SIGNUP | Signup | `/signup` | ✅ | 200 | Name/email/password + role toggle (buyer/seller) + terms. Form fully interactive. |
| 12-AUTH-FORGOT-PASSWORD | Forgot Password | `/forgot-password` | ✅ | 200 | Email input + success state. |
| 13-AUTH-RESET-PASSWORD | Reset Password | `/reset-password` | ✅ | 200 | New password + confirm + strength meter. |

## 20 — Buyer flow (6/6)

| ID | Title | URL | Status | Verified | Notes |
|---|---|---|---|---|---|
| 01-HOMEPAGE | Homepage | `/` | ✅ | 200 · stats real (1.2K users, ₹2.4 CR+) | Hero + live grid + stats bar + market moves + categories + brands. AnimatedCounter fixed (no SSR zeros). |
| 02-SHOP | Shop | `/shop` | ✅ | 200 | Catalog + filter sidebar + grid. Uses `<SiteHeader />`. |
| 03-LIVE-AUCTION-DETAIL | Live Auction Detail | `/live-auctions/[slug]` | ✅ | 200 (12 slugs) | Bid card, price insights, seller, related. Uses SiteHeader. **Bid button is present but bidding flow is mock (no API).** |
| 14-CART | Cart | `/cart` | ✅ | 200 | Items, qty controls, promo, totals. **Mock data only — no persistent cart state.** |
| 15-CHECKOUT | Checkout | `/checkout` | ✅ | 200 | Single-page: shipping + payment + review. **No payment integration — submit is mock.** |
| 16-ORDER-CONFIRMATION | Order Confirmation | `/order/[id]` | ✅ | 200 | Thank you, summary, timeline. **Mock order data.** |

## 30 — Seller flow (10/11)

| ID | Title | URL | Status | Verified | Notes |
|---|---|---|---|---|---|
| 04-SELL-WITH-US | Sell With Us | `/sell-with-us` | ✅ | 200 | Hero + steps + features + tiers + CTA. |
| 05-DASHBOARD-CREATE-LISTING | Create Listing (search) | `/dashboard/listings/new` | ✅ | 200 | Product search + trending grid. |
| 06-DASHBOARD-LISTING-DETAILS | Listing Details | `/dashboard/listings/new/details` | ✅ | 200 | 6-step stepper, brand/model select. |
| 07-DASHBOARD-SELECT-SIZE | Select Size | `/dashboard/listings/new/size` | ✅ | 200 | Size grid with bid/ask prices. |
| 22-DASHBOARD-ADD-PHOTOS | Add Photos | `/dashboard/listings/new/photos` | ✅ | 200 | Photo upload UI (drag/drop), reorder, cover. **Upload is visual-only.** |
| 23-DASHBOARD-PRICING | Pricing & Review | `/dashboard/listings/new/pricing` | ✅ | 200 | Auction/fixed toggle, fees, publish. |
| 24-DASHBOARD-MY-LISTINGS | My Listings | `/dashboard/listings` | ✅ | 200 | Active/Drafts/Paused/Sold tabs. |
| 08-DASHBOARD-ORDERS | Dashboard Orders | `/dashboard/orders` | ✅ | 200 | Stat cards + tabs + insights. |
| 09-DASHBOARD-PAYOUTS | Dashboard Payouts | `/dashboard/payouts` | ✅ | 200 | Pending + commission + history (recharts). **All View-all link → /dashboard/payouts.** |
| 25-DASHBOARD-ANALYTICS | Analytics | `/dashboard/analytics` | ✅ | 200 | Stats + revenue chart (recharts) + top listings. |
| 26-DASHBOARD-SETTINGS | Settings | `/dashboard/settings` | 🔄 | 200 | Payouts/notifications/shipping/branding tabs. **Payouts section has empty placeholder — API not yet wired.** |

## 40 — Buyer Account (5/5)

| ID | Title | URL | Status | Verified | Notes |
|---|---|---|---|---|---|
| 17-MY-BIDS | My Bids | `/account/bids` | ✅ | 200 | Active/Won/Lost tabs. |
| 18-MY-ORDERS | My Orders | `/account/orders` | ✅ | 200 | All orders with status filters. |
| 19-ORDER-DETAIL | Order Detail | `/account/orders/[id]` | ✅ | 200 | Status timeline + items + address. |
| 20-WISHLIST | Wishlist | `/account/wishlist` | ✅ | 200 | Saved items grid + price alerts. |
| 21-PROFILE | Profile | `/account/profile` | ✅ | 200 | Personal info + addresses + danger zone. |

## 50 — Static (6/6)

| ID | Title | URL | Status | Verified | Notes |
|---|---|---|---|---|---|
| 27-TERMS | Terms of Service | `/terms` | ✅ | 200 | 11 sections + sticky TOC. |
| 28-PRIVACY | Privacy Policy | `/privacy` | ✅ | 200 | DPDP Act callout. |
| 29-FAQ | FAQ | `/faq` | ✅ | 200 | 5 categories, search, accordion. |
| 30-CONTACT | Contact Us | `/contact` | ✅ | 200 | Form + info cards. **Form submit is mock with fake reference #.** |
| 31-ABOUT | About HYPE | `/about` | ✅ | 200 | Story + stats + 4-step auth + values + team. |
| 32-404 | 404 Not Found | `*` | ✅ | Default Next.js not-found | Friendly error. |

## 60 — Execution (3/3)

| ID | Title | Status | Verified | Notes |
|---|---|---|---|---|
| BUILD-ORDER | Build Order & Execution Plan | ✅ | `prd/60-execution/BUILD-ORDER.md` | 9-phase plan P0–P3. |
| DESIGN-IMPLEMENTATION-PLAN | Design Implementation Plan | ✅ | `prd/60-execution/DESIGN-IMPLEMENTATION-PLAN.md` | Visual design specs. |
| **NEXUS-TRACKER (this file)** | Live tracker | ✅ | `hype-next/NEXUS-TRACKER.md` | This document. Maintained post-ship. |

---

## Cross-cutting work (shipped)

| Item | Status | Notes |
|---|---|---|
| Shared `<SiteHeader />` component | ✅ | Replaces 8 inline headers. Active state via `usePathname`. |
| Mobile drawer pattern | ✅ | Hamburger toggles nav + search. |
| **Mobile account consolidation** | ✅ | Account icon → `<MobileAccountMenu />` dropdown (Sign in/Register). 2 mobile buttons instead of 3. |
| **Mobile footer redesign** | ✅ | Brand row + 2-col link grid + compact bottom bar on `<md`. Desktop 6-col grid unchanged. |
| AnimatedCounter SSR fix | ✅ | Initial value = `to` (not 0). Guard ref prevents re-animation. |
| NAV_LINKS / FOOTER_LINKS | ✅ | All routes real, no `#` anchors. |
| Footer Account column added | ✅ | My Orders / My Bids / Wishlist / Profile. |
| 36-route smoke test | ✅ | All 200 (307 on `/dashboard` is intentional redirect). |
| `tsc --noEmit` | ✅ | Clean. |
| `next build` | ✅ | 36 routes, 0 errors. |

---

## Open follow-ups (explicit user-deferred)

| Item | Why deferred | Unblock when |
|---|---|---|
| Real auth state | "we need only frontend" | User adds backend |
| Persistent cart (vs mock) | No backend | User adds backend |
| Payment integration (Razorpay/Cashfree) | No backend | User adds backend |
| Real product images | Out of scope | Design system upgrade |
| Bid handler (real WebSocket) | No backend | User adds backend |
| Dashboard Settings → Payouts (real data) | No backend | User adds backend |
| Account menu "logged-in" state | No real auth | User adds backend |

---

## How to update this tracker

After any commit that lands a new PRD or changes status:
1. Edit the relevant row in this file (Status column + Notes).
2. Recompute the **Summary** counts at the top.
3. Commit with the code change: `git add NEXUS-TRACKER.md && git commit -m "tracker: update status for PRD-XX"`
