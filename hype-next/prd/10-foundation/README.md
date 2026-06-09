# Phase 10 — Foundation (Auth & Design System)

## Purpose
Authentication gates + shared design tokens that every other phase depends on.

## PRDs
| # | File | Route | Priority |
|---|------|-------|----------|
| 10 | 10-AUTH-LOGIN.md | `/login` | P0 — blocks all protected routes |
| 11 | 11-AUTH-SIGNUP.md | `/signup` | P0 |
| 12 | 12-AUTH-FORGOT-PASSWORD.md | `/forgot-password` | P1 |
| 13 | 13-AUTH-RESET-PASSWORD.md | `/reset-password` | P1 |

## Key Deliverables
- Design tokens in `tailwind.config.ts` + `globals.css` (bone, champagne, ink, smoke)
- Font loading (`fonts.ts`) — Geist Sans + Newsreader
- Glassmorphism primitives (`glass-card.tsx`)
- Skeleton primitives (`skeleton.tsx`)
- Auth shell layout (`auth-shell.tsx`)
- Google OAuth integration
- OTP modal component

## Dependencies
- None (this IS the foundation)

## Audit Issues
- #32 Login form needs error shake animation
- #33 Signup needs password-strength integration

## Build Plan Cross-Ref
- Phase 1–3 in `docs/HYPE-NEXTJS-IMPLEMENTATION-PLAN.md`