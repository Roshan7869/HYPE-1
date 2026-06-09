# Phase 50 — Static Pages (Legal, Info, Error)

## Purpose
Legal pages, informational pages, and error states. No auth or dynamic data required (except FAQ which may be API-backed).

## PRDs
| # | File | Route | Priority |
|---|------|-------|----------|
| 27 | 27-TERMS.md | `/terms` | P2 |
| 28 | 28-PRIVACY.md | `/privacy` | P2 |
| 29 | 29-FAQ.md | `/faq` | P2 |
| 30 | 30-CONTACT.md | `/contact` | P2 |
| 31 | 31-ABOUT.md | `/about` | P2 |
| 32 | 32-404.md | not-found | P2 |

## Key Deliverables
- Legal pages with scroll-spy TOC
- FAQ with spring accordion + search
- Contact form with glass card + map embed
- About page with parallax hero + team grid + timeline
- 404 page with floating illustration + search suggestions

## Dependencies
- `/api/contact` POST (for contact form)
- `/api/faq` (optional, can be static)
- No auth required

## Audit Issues
- No specific audit items — low priority, but easy wins for completeness

## Build Plan Cross-Ref
- Phase 17–18 in `docs/HYPE-NEXTJS-IMPLEMENTATION-PLAN.md`