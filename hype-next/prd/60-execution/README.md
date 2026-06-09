# Phase 60 — Execution (Build, API, QA, Deploy)

## Purpose
API layer, data wiring, performance optimization, QA gates, and deployment.

## No separate PRDs — this phase operates from:
- `docs/PRD-IMPLEMENTATION-MAP.md` — full 32-PRD routing table
- `docs/HYPE-NEXTJS-IMPLEMENTATION-PLAN.md` — 21-phase build plan
- `docs/HYPE-NEXTJS-BUILD-AUDIT.md` — 37 audit issues
- `api-routes.md` — 40+ endpoint specifications

## Key Deliverables
- All `/api/*` routes (40+ endpoints)
- WebSocket server for live auctions
- Replace all `mock-data.ts` usage with real API calls
- SWR/React Query data hooks
- Performance budget enforcement (LCP < 1.8s, Lighthouse 92+)
- Error boundaries per route segment
- Loading skeletons on every data-dependent page
- SEO meta + Open Graph tags
- Vercel/cPanel deployment pipeline

## Build Order (from PRD-IMPLEMENTATION-MAP.md)
1. Foundation — tokens, fonts, primitives
2. Chrome — header/footer unification
3. Auth — login, signup, forgot, reset
4. Buyer Flow — home → shop → auction → cart → checkout → confirm
5. Seller Flow — sell → dashboard → listing → orders → payouts
6. Account — bids, orders, wishlist, profile
7. Static — about, contact, faq, terms, privacy, 404
8. API Layer — all 40+ endpoints
9. Polish — remove mocks, wire live data, perf budget

## Performance Budgets
| Metric | Target |
|--------|--------|
| LCP (P75, 4G) | < 1.8s |
| INP | < 200ms |
| CLS | < 0.05 |
| Lighthouse Mobile | 92+ |
| JS per page | < 80 KB |