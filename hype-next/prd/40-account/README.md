# Phase 40 — Account (Buyer Personal Area)

## Purpose
Buyer's personal dashboard — bids, orders, wishlist, profile management.

## PRDs
| # | File | Route | Priority |
|---|------|-------|----------|
| 17 | 17-MY-BIDS.md | `/account/bids` | P1 |
| 18 | 18-MY-ORDERS.md | `/account/orders` | P1 |
| 19 | 19-ORDER-DETAIL.md | `/account/orders/[id]` | P1 |
| 20 | 20-WISHLIST.md | `/account/wishlist` | P2 |
| 21 | 21-PROFILE.md | `/account/profile` | P2 |

## Key Deliverables
- Bid cards with live status (outbid pulse, won celebration)
- Order list + detail with status timeline
- Wishlist grid with glass-card
- Profile edit form with avatar upload
- AccountShell layout wrapper

## Dependencies
- Phase 10 (Auth gate)
- Phase 20 (order data flows from checkout)
- `/api/bids/mine`, `/api/orders`, `/api/wishlist`, `/api/auth/me`

## Audit Issues
- No specific audit items — mostly unimplemented, needs greenfield build

## Build Plan Cross-Ref
- Phase 14–16 in `docs/HYPE-NEXTJS-IMPLEMENTATION-PLAN.md`