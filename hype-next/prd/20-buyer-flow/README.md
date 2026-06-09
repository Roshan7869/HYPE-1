# Phase 20 — Buyer Flow (Browse → Bid → Buy → Checkout)

## Purpose
The core 3–4 click buyer journey: Home → Auction Card → Bid/Buy → Checkout.

## PRDs
| # | File | Route | Priority |
|---|------|-------|----------|
| 01 | 01-HOMEPAGE.md | `/` | P0 |
| 02 | 02-SHOP.md | `/shop` | P0 |
| 03 | 03-LIVE-AUCTION-DETAIL.md | `/live-auctions/[slug]` | P0 |
| 14 | 14-CART.md | `/cart` | P0 |
| 15 | 15-CHECKOUT.md | `/checkout` | P0 |
| 16 | 16-ORDER-CONFIRMATION.md | `/order/[id]` | P1 |

## Key Deliverables
- Hero with parallax + scroll-reveal
- Market Grid with glass-card hover
- Market Moves marquee ticker
- Bid Panel with live WS connection
- Timer with number-flip animation
- Cart connected to `/api/cart` (remove hard-coded mocks)
- Checkout with shared header (remove inline custom header)
- 3-click flow: Home → Card action → Checkout

## Dependencies
- Phase 10 (Auth for gated bid/checkout)
- `/api/auctions`, `/api/bids`, `/api/cart`, `/api/checkout`
- WebSocket server for live bid updates

## Audit Issues
- #1–#8 Homepage components needing motion polish
- #9–#12 Shop filter/sort not connected
- #13 **Bid CTA has NO handler** (critical blocker)
- #14–#18 Auction detail needs real data
- #34 Cart wraps AuthShell (should only gate actions, not browsing)
- #35 Cart hard-coded mock data
- #36 Checkout custom inline header (should use NavMarketplace)
- #37 Checkout hard-coded items

## Build Plan Cross-Ref
- Phase 4–8 in `docs/HYPE-NEXTJS-IMPLEMENTATION-PLAN.md`