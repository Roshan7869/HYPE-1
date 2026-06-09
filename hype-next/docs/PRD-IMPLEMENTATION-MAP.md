# HYPE — PRD Implementation Map

> Maps all 32 PRDs to Next.js routes, components, motion/skeleton/glassmorphism specs, dependencies, and blockers.
> Cross-references the 21-phase build plan in `docs/HYPE-NEXTJS-IMPLEMENTATION-PLAN.md`.
> Audit issues from `docs/HYPE-NEXTJS-BUILD-AUDIT.md` linked inline.

**Stack:** Next.js 14 (app router) · TypeScript · Tailwind · framer-motion · lucide-react · CVA
**Palette:** bone `#F5F0EB` · champagne `#C4A882` · ink `#1A1A1A` · smoke `#6B6B6B`
**North-star:** 3–4 click buyer flow (Home → Card → Bid/Buy → Checkout)

---

## Phase Map

| Phase | PRD Folder | PRDs | Status |
|-------|-----------|------|--------|
| 00 | `prd/00-overview/` | 00-MASTER | Vision, design system, hiring |
| 10 | `prd/10-foundation/` | 10,11,12,13 | Auth (login, signup, forgot, reset) |
| 20 | `prd/20-buyer-flow/` | 01,02,03,14,15,16 | Home, Shop, Auction, Cart, Checkout, Order Conf |
| 30 | `prd/30-seller-flow/` | 04–09,22–26 | Sell, Dashboard (11 pages) |
| 40 | `prd/40-account/` | 17,18,19,20,21 | Bids, Orders, Order Detail, Wishlist, Profile |
| 50 | `prd/50-static/` | 27–32 | Terms, Privacy, FAQ, Contact, About, 404 |
| 60 | `prd/60-execution/` | (this doc) | Build order, QA gates, perf budgets |

---

## Master Implementation Map

| # | PRD | Route | Target File | Components to Build | Motion Spec | Skeleton Spec | Glassmorphism Spec | Dependencies | Blockers | Audit Issues |
|---|-----|-------|-------------|---------------------|------------|--------------|-------------------|-------------|----------|-------------|
| 00 | MASTER | — | — | Design tokens, `globals.css`, `fonts.ts` | — | — | — | tailwind.config.ts | — | — |
| 01 | HOMEPAGE | `/` | `src/app/page.tsx` | Hero, StatsBar, MarketGrid, MarketMoves, HowItWorks, StayAhead | Hero: parallax scroll-reveal fade-in. StatsBar: animated-counter stagger. MarketGrid: card-hover scale(1.02)+shadow. MarketMoves: marquee 20s linear infinite | Hero: skeleton 600ms. StatsBar: skeleton pulse. Grid: card skeleton 4-col | Hero overlay: `backdrop-blur-md bg-bone/80`. MarketGrid cards: glass-card | `/api/stats`, `/api/market-moves` | No live data endpoint | #1–#8 |
| 02 | SHOP | `/shop` | `src/app/shop/page.tsx` | ShopView, FilterSidebar, ProductCard, SortDropdown | Filter: slide-in 300ms ease. Cards: stagger fade-up 50ms delay. Sort: dropdown spring | Grid: skeleton 3-col. Filter: skeleton sidebar | ProductCard: glass-card hover | `/api/auctions?status=live` | Filter state not connected | #9–#12 |
| 03 | LIVE-AUCTION-DETAIL | `/live-auctions/[slug]` | `src/app/live-auctions/[slug]/page.tsx` | AuctionDetail, BidPanel, LiveBadge, Timer, ImageGallery, AuthCard, BidHistory | BidPanel: slide-up from bottom. Timer: number flip animation. Images: crossfade 400ms. Bid history: real-time push animation | Gallery: skeleton rect. Bid history: skeleton rows. Timer: skeleton circle | BidPanel overlay: `backdrop-blur-xl bg-bone/90`. AuthCard: glass-card | `/api/auctions/:id`, `/api/auctions/:id/bids`, WS `/api/auctions/:id/live` | **Bid CTA has NO handler (audit #13)**. No WS. Mock data | #13–#18 |
| 04 | SELL-WITH-US | `/sell-with-us` | `src/app/sell-with-us/page.tsx` | SellSections, BenefitCards, CTA | Section: scroll-reveal fade-up. CTA: shimmer pulse | Sections: skeleton blocks | BenefitCards: glass-card | `/api/auth/me` (check seller status) | — | #19–#21 |
| 05 | DASHBOARD-CREATE-LISTING | `/dashboard/listings/new` | `src/app/dashboard/listings/new/page.tsx` | ListingStepper, SizeSelector, BrandPicker | Stepper: progress bar spring. Step transition: slide-left/right 300ms | Stepper: skeleton header. Form: skeleton fields | Step cards: glass-card subtle | Auth, `/api/seller/listings` POST | 5-step wizard → collapse to 1 page | #22–#25 |
| 06 | DASHBOARD-LISTING-DETAILS | `/dashboard/listings/new/details` | `src/app/dashboard/listings/new/details/page.tsx` | DetailsForm, ConditionPicker, DescriptionInput | Form: field focus ring animation | Form: skeleton | — | Step 05 size data | — | #26 |
| 07 | DASHBOARD-SELECT-SIZE | `/dashboard/listings/new/size` | `src/app/dashboard/listings/new/size/page.tsx` | SizeGrid, CategoryPicker, BrandSelector | Size chip: pop spring. Category: accordion | Size: skeleton grid | — | — | — | #27 |
| 08 | DASHBOARD-ORDERS | `/dashboard/orders` | `src/app/dashboard/orders/page.tsx` | OrderTable, StatusTimeline, OrderCard | Status change: color pulse. Row: hover lift | Table: skeleton rows. Status: skeleton bar | StatusTimeline: glass-card | `/api/seller/orders` | — | #28–#29 |
| 09 | DASHBOARD-PAYOUTS | `/dashboard/payouts` | `src/app/dashboard/payouts/page.tsx` | PayoutChart, PayoutTable, WithdrawCTA | Chart: draw-on-enter. Withdraw: scale press | Chart: skeleton area. Table: skeleton rows | PayoutCard: glass-card | `/api/seller/payouts`, recharts | — | #30–#31 |
| 10 | AUTH-LOGIN | `/login` | `src/app/login/page.tsx` | LoginForm, OTPModal, GoogleOAuth | Form: field shake on error. Success: confetti micro | Form: skeleton centered | Login card: `backdrop-blur-lg bg-white/70` centered | `/api/auth/login`, `/api/auth/google` | — | #32 |
| 11 | AUTH-SIGNUP | `/signup` | `src/app/signup/page.tsx` | SignupForm, OTPModal, PasswordStrength, GoogleOAuth | Password: strength bar fill animation. Field: focus spring | Form: skeleton | Card: glass login style | `/api/auth/register`, `/api/auth/verify-otp` | — | #33 |
| 12 | AUTH-FORGOT-PASSWORD | `/forgot-password` | `src/app/forgot-password/page.tsx` | ForgotForm, SuccessMessage | Form: slide next step. Success: checkmark draw | Form: skeleton | Card: glass | `/api/auth/forgot-password` | — | — |
| 13 | AUTH-RESET-PASSWORD | `/reset-password` | `src/app/reset-password/page.tsx` | ResetForm, PasswordStrength | Same as #12 | Same as #12 | Card: glass | `/api/auth/reset-password` | Token from URL query | — |
| 14 | CART | `/cart` | `src/app/cart/page.tsx` | CartItem, CartSummary, EmptyCart, PromoInput | Item add: slide-in right. Remove: slide-out left. Summary: number ticker | Items: skeleton rows. Summary: skeleton rect | Summary card: glass-card | `/api/cart`, Auth | **Wraps AuthShell (audit #34)**. Hard-coded mock data | #34–#35 |
| 15 | CHECKOUT | `/checkout` | `src/app/checkout/page.tsx` | AddressForm, SavedAddresses, PaymentSelector, OrderSummary, PlaceOrderCTA | Step progress: spring. Payment select: scale check. Place Order: btn shimmer → success pulse | Address: skeleton. Payment: skeleton cards | OrderSummary: glass-card. Address card: glass | `/api/checkout`, `/api/addresses`, `/api/payments/initiate` | **Custom inline header (audit #36)**. Hard-coded items | #36–#37 |
| 16 | ORDER-CONFIRMATION | `/order/[id]` | `src/app/order/[id]/page.tsx` | ConfirmationHero, OrderDetails, TrackingTimeline, ContinueCTA | Hero: scale-in. Timeline: sequential reveal 200ms | Hero: skeleton. Details: skeleton | Confirmation card: glass | `/api/orders/:id` | — | — |
| 17 | MY-BIDS | `/account/bids` | `src/app/account/bids/page.tsx` | BidCard, BidStatusBadge, AuctionLink, EmptyBids | Card: stagger fade. Status: color pulse on outbid | Grid: skeleton cards | BidCard: glass-card | `/api/bids/mine`, Auth | — | — |
| 18 | MY-ORDERS | `/account/orders` | `src/app/account/orders/page.tsx` | OrderList, OrderCard, FilterBar | Card: hover lift. Filter: spring dropdown | List: skeleton rows | OrderCard: glass-card | `/api/orders`, Auth | — | — |
| 19 | ORDER-DETAIL | `/account/orders/[id]` | `src/app/account/orders/[id]/page.tsx` | OrderSummary, ItemList, StatusTimeline, ShippingInfo | Timeline: sequential draw. Items: stagger | Summary: skeleton. Timeline: skeleton | Cards: glass | `/api/orders/:id`, Auth | — | — |
| 20 | WISHLIST | `/account/wishlist` | `src/app/account/wishlist/page.tsx` | WishlistGrid, WishlistCard, EmptyWishlist | Card: fade-up stagger. Remove: scale-down out | Grid: skeleton 3-col | WishlistCard: glass-card | `/api/wishlist`, Auth | — | — |
| 21 | PROFILE | `/account/profile` | `src/app/account/profile/page.tsx` | ProfileHeader, EditForm, AvatarUpload, SettingsLinks | Avatar: upload progress ring. Form: focus spring | Header: skeleton circle+lines | ProfileCard: glass | `/api/auth/me` PUT, Auth | — | — |
| 22 | DASHBOARD-ADD-PHOTOS | `/dashboard/listings/new/photos` | `src/app/dashboard/listings/new/photos/page.tsx` | PhotoUploader, PhotoGrid, DragDropZone | Drop zone: border dash animation. Upload: progress bar fill. Thumbnail: pop in | Grid: skeleton boxes | Upload card: glass | Step 05 data, `/api/seller/listings/:id/photos` | — | — |
| 23 | DASHBOARD-PRICING | `/dashboard/listings/new/pricing` | `src/app/dashboard/listings/new/pricing/page.tsx` | PricingForm, CommissionPreview, ReserveToggle, FeeBreakdown | Fee: animated-counter. Toggle: spring. Preview: number ticker | Form: skeleton. Breakdown: skeleton rows | Fee card: glass | Step 05-06 data | — | — |
| 24 | DASHBOARD-MY-LISTINGS | `/dashboard/listings` | `src/app/dashboard/listings/page.tsx` | ListingsTable, ListingCard, StatusBadge, QuickActions | Row: hover lift. Status: color dot pulse | Table: skeleton rows | ListingCard: glass | `/api/seller/listings`, Auth | — | — |
| 25 | DASHBOARD-ANALYTICS | `/dashboard/analytics` | `src/app/dashboard/analytics/page.tsx` | RevenueChart, ViewsChart, BidsChart, MetricCards, DateRangePicker | Charts: draw-on-enter (recharts). Metrics: animated-counter. Range: spring picker | Charts: skeleton area. Metrics: skeleton bars | MetricCard: glass-card | `/api/seller/analytics`, recharts | — | — |
| 26 | DASHBOARD-SETTINGS | `/dashboard/settings` | `src/app/dashboard/settings/page.tsx` | SettingsForm, BankDetails, NotificationPrefs, DangerZone | Save: success pulse. Toggle: spring. Danger: red glow | Form: skeleton | Settings card: glass | `/api/seller/settings` | — | — |
| 27 | TERMS | `/terms` | `src/app/terms/page.tsx` | LegalContent, TableOfContents | TOC: scroll spy highlight. Sections: fade-in on scroll | Content: skeleton paragraphs | — | Static content | — | — |
| 28 | PRIVACY | `/privacy` | `src/app/privacy/page.tsx` | LegalContent, TableOfContents | Same as #27 | Same as #27 | — | Static content | — | — |
| 29 | FAQ | `/faq` | `src/app/faq/page.tsx` | FAQAccordion, SearchBar, CategoryNav | Accordion: spring expand. Search: debounce highlight | Accordion: skeleton | Category nav: glass-card | `/api/faq` or static | — | — |
| 30 | CONTACT | `/contact` | `src/app/contact/page.tsx` | ContactForm, MapEmbed, SocialLinks, OfficeHours | Form: field focus ring. Submit: success checkmark. Map: lazy load | Form: skeleton | Contact card: glass | `/api/contact` POST | — | — |
| 31 | ABOUT | `/about` | `src/app/about/page.tsx` | AboutHero, TeamGrid, TimelineStory, ValuesSection | Hero: parallax. Team: stagger card. Timeline: sequential draw | Hero: skeleton. Team: skeleton grid | Value cards: glass-card | Static | — | — |
| 32 | 404 | not-found | `src/app/not-found.tsx` | NotFoundIllustration, SearchSuggestion, BackCTA | Illustration: subtle float. CTA: shimmer | — | Suggestion cards: glass-card | — | — | — |

---

## Chrome (Shared across all pages)

| Component | File | Action | Spec |
|-----------|------|--------|------|
| NavMarketplace | `components/layout/nav-marketplace.tsx` | **KEEP** → rename to `site-header.tsx` | Sticky, `backdrop-blur-md bg-bone/80`, shrink on scroll |
| site-header.tsx | `components/layout/site-header.tsx` | **DELETE** | Duplicate of NavMarketplace |
| FooterDetailed | `components/layout/footer.tsx` (2nd export) | **KEEP** → rename to `Footer` | Multi-section, glass-divider |
| Footer (4-col) | `components/layout/footer.tsx` (1st export) | **DELETE** | Parallel duplicate |
| AuthShell | `components/layout/auth-shell.tsx` | Keep for /login, /signup, /forgot, /reset only | — |
| AccountShell | `components/account/account-shell.tsx` | Keep for /account/* routes | — |
| DashboardLayout | `src/app/dashboard/layout.tsx` | Keep with Sidebar | — |
| Sidebar | `components/layout/sidebar.tsx` | Keep | — |

---

## Critical Blockers (from audit)

1. **Bid CTA has no handler** — `live-auctions/[slug]/page.tsx` "Place Bid" button is a dead click
2. **Cart uses hard-coded mock data** — not connected to `/api/cart`
3. **Checkout uses hard-coded items** — same issue
4. **Checkout has custom inline header** — should use shared NavMarketplace
5. **Cart wraps AuthShell** — should only gate bidding/checkout, not browsing
6. **No /api/ routes implemented** — 40+ endpoints in `api-routes.md`, zero in code
7. **5-step listing wizard** — should collapse to single-page flow per PRD
8. **Parallel headers + footers** — need unification (see Chrome table above)

---

## Build Order (cross-ref 21-phase plan)

1. **Foundation** — Design tokens, globals.css, font loading, shared primitives
2. **Chrome** — NavMarketplace (rename), FooterDetailed (rename), delete duplicates
3. **Auth** — Login, Signup, Forgot, Reset (gate for all protected routes)
4. **Buyer Flow** — Home → Shop → Auction Detail → Cart → Checkout → Order Conf
5. **Seller Flow** — Sell-With-Us → Dashboard → Listing (collapse wizard) → Orders → Payouts
6. **Account** — Bids, Orders, Order Detail, Wishlist, Profile
7. **Static** — About, Contact, FAQ, Terms, Privacy, 404
8. **API Layer** — All 40+ endpoints from `api-routes.md`
9. **Polish** — Remove mocks, wire live data, perf budget, Lighthouse 92+

---

## Performance Budgets

| Metric | Target | Current |
|--------|--------|---------|
| LCP (P75, 4G) | < 1.8s | ~3.2s |
| INP | < 200ms | Unknown |
| CLS | < 0.05 | Unknown |
| Lighthouse Mobile | 92+ | ~62 |
| JS per page | < 80 KB | Unknown |
| First Contentful Paint | < 1.2s | Unknown |

---

## Motion Vocabulary

| Effect | Config | Where |
|--------|--------|-------|
| Scroll reveal | `scroll-reveal.tsx` — fade-up 400ms ease-out, 50px offset | All sections |
| Parallax | `parallax.tsx` — 0.3× speed, disabled on mobile | Hero, About hero |
| Animated counter | `animated-counter.tsx` — spring, format INR | Stats, pricing, bids |
| Card hover | `scale(1.02) + shadow-xl` 200ms ease | Product, bid, order cards |
| Skeleton pulse | `skeleton.tsx` — bg-bone/30 wave 1.5s infinite | Every loading state |
| Glass card | `glass-card.tsx` — `backdrop-blur-md bg-white/70 border border-champagne/20` | Cards, panels, overlays |
| Spring toggle | framer-motion `spring stiffness:500 damping:30` | Toggles, accordions, steps |
| Number flip | framer-motion `AnimatePresence` — y-axis flip | Timer, prices, bid counts |
| Marquee | CSS `animation: marquee 20s linear infinite` | Market Moves ticker |

---

## Files Inventory (existing in src/)

### Pages (41 files)
```
src/app/page.tsx                          — /
src/app/shop/page.tsx                     — /shop
src/app/live-auctions/page.tsx            — /live-auctions
src/app/live-auctions/[slug]/page.tsx     — /live-auctions/:slug
src/app/cart/page.tsx                     — /cart
src/app/checkout/page.tsx                 — /checkout
src/app/order/[id]/page.tsx              — /order/:id
src/app/login/page.tsx                   — /login
src/app/signup/page.tsx                  — /signup
src/app/forgot-password/page.tsx         — /forgot-password
src/app/reset-password/page.tsx          — /reset-password
src/app/sell-with-us/page.tsx            — /sell-with-us
src/app/about/page.tsx                   — /about
src/app/contact/page.tsx                 — /contact
src/app/faq/page.tsx                     — /faq
src/app/terms/page.tsx                   — /terms
src/app/privacy/page.tsx                  — /privacy
src/app/not-found.tsx                     — 404
src/app/dashboard/page.tsx               — /dashboard
src/app/dashboard/layout.tsx             — dashboard chrome
src/app/dashboard/listings/page.tsx      — /dashboard/listings
src/app/dashboard/listings/new/page.tsx  — /dashboard/listings/new
src/app/dashboard/listings/new/size/page.tsx
src/app/dashboard/listings/new/details/page.tsx
src/app/dashboard/listings/new/photos/page.tsx
src/app/dashboard/listings/new/pricing/page.tsx
src/app/dashboard/orders/page.tsx
src/app/dashboard/payouts/page.tsx
src/app/dashboard/analytics/page.tsx
src/app/dashboard/settings/page.tsx
src/app/account/bids/page.tsx
src/app/account/orders/page.tsx
src/app/account/orders/[id]/page.tsx
src/app/account/wishlist/page.tsx
src/app/account/profile/page.tsx
src/app/layout.tsx                        — root layout
src/app/globals.css                       — global styles
```

### Components (34 files)
```
src/components/home/hero.tsx, how-it-works.tsx, market-grid.tsx,
  market-moves.tsx, stats-bar.tsx, stay-ahead.tsx
src/components/auction/auction-detail.tsx
src/components/shop/shop-view.tsx
src/components/sell/sell-sections.tsx
src/components/auth/otp-modal.tsx, password-strength.tsx
src/components/dashboard/listing-stepper.tsx
src/components/account/account-shell.tsx
src/components/layout/auth-shell.tsx, breadcrumb.tsx, footer.tsx,
  nav-marketplace.tsx, sidebar.tsx, site-header.tsx
src/components/providers/smooth-scroll-provider.tsx
src/components/shared/animated-counter.tsx, glass-card.tsx,
  live-badge.tsx, parallax.tsx, scroll-reveal.tsx,
  status-timeline.tsx, timer.tsx
src/components/ui/badge.tsx, button.tsx, card.tsx, input.tsx,
  label.tsx, separator.tsx, skeleton.tsx, textarea.tsx
```

### Lib + Types
```
src/lib/constants.ts, fonts.ts, mock-data.ts, utils.ts
src/types/auction.ts
```

---

*This map is the single source of truth for PRD → implementation routing. All 32 PRDs live in `prd/` phase folders. The 21-phase build plan lives in `docs/HYPE-NEXTJS-IMPLEMENTATION-PLAN.md`. Build audit in `docs/HYPE-NEXTJS-BUILD-AUDIT.md`.*