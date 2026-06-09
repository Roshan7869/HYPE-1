# Phase 30 — Seller Flow (Dashboard & Listings)

## Purpose
Seller onboarding, listing creation (5-step wizard → collapse to 1 page), order management, payouts, analytics.

## PRDs
| # | File | Route | Priority |
|---|------|-------|----------|
| 04 | 04-SELL-WITH-US.md | `/sell-with-us` | P0 |
| 05 | 05-DASHBOARD-CREATE-LISTING.md | `/dashboard/listings/new` | P0 |
| 06 | 06-DASHBOARD-LISTING-DETAILS.md | `/dashboard/listings/new/details` | P0 |
| 07 | 07-DASHBOARD-SELECT-SIZE.md | `/dashboard/listings/new/size` | P1 |
| 08 | 08-DASHBOARD-ORDERS.md | `/dashboard/orders` | P1 |
| 09 | 09-DASHBOARD-PAYOUTS.md | `/dashboard/payouts` | P1 |
| 22 | 22-DASHBOARD-ADD-PHOTOS.md | `/dashboard/listings/new/photos` | P1 |
| 23 | 23-DASHBOARD-PRICING.md | `/dashboard/listings/new/pricing` | P1 |
| 24 | 24-DASHBOARD-MY-LISTINGS.md | `/dashboard/listings` | P1 |
| 25 | 25-DASHBOARD-ANALYTICS.md | `/dashboard/analytics` | P2 |
| 26 | 26-DASHBOARD-SETTINGS.md | `/dashboard/settings` | P2 |

## Key Deliverables
- Sell-With-Us landing with glass benefit cards
- 5-step listing wizard → collapse to single-page form
- Drag-drop photo uploader with progress
- Commission/fee preview with animated counter
- Dashboard sidebar + layout shell
- Orders table with status timeline
- Payouts chart (recharts) + withdraw CTA
- Analytics dashboard with draw-on-enter charts

## Dependencies
- Phase 10 (Auth — seller must be authenticated)
- `/api/seller/*` endpoints (11+ routes)

## Audit Issues
- #19–#21 Sell page sections
- #22–#25 Listing wizard should be single page
- #26–#27 Details form
- #28–#31 Orders/Payouts need real data

## Build Plan Cross-Ref
- Phase 9–13 in `docs/HYPE-NEXTJS-IMPLEMENTATION-PLAN.md`