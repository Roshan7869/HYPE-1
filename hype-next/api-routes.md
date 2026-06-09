# HYPE Backend API Routes

## Auth (`/api/auth`)

| Method | Route | Purpose |
|--------|-------|---------|
| POST | `/api/auth/register` | Create account (name, email, phone, password) |
| POST | `/api/auth/login` | Email/password login |
| POST | `/api/auth/google` | Google OAuth login/signup |
| POST | `/api/auth/verify-otp` | Verify phone via OTP |
| POST | `/api/auth/resend-otp` | Resend OTP |
| POST | `/api/auth/forgot-password` | Request password reset email |
| POST | `/api/auth/reset-password` | Reset password with token |
| GET | `/api/auth/me` | Get current user profile |
| PUT | `/api/auth/me` | Update profile (name, phone, avatar) |
| PUT | `/api/auth/me/password` | Change password |

## Auctions (`/api/auctions`)

| Method | Route | Purpose |
|--------|-------|---------|
| GET | `/api/auctions` | List all auctions (filter: `?status=live\|upcoming\|sold&category=&brand=&q=`) |
| GET | `/api/auctions/:id` | Single auction detail |
| GET | `/api/auctions/:id/bids` | Bid history for an auction |
| GET | `/api/auctions/categories` | List categories with counts |

## Bidding (`/api/bids`)

| Method | Route | Purpose |
|--------|-------|---------|
| POST | `/api/bids` | Place a bid (auctionId, amount) |
| GET | `/api/bids/mine` | Current user's bid history |
| WS | `/api/auctions/:id/live` | WebSocket for real-time bid updates |

## Cart (`/api/cart`)

| Method | Route | Purpose |
|--------|-------|---------|
| GET | `/api/cart` | Get cart contents |
| POST | `/api/cart/items` | Add item to cart |
| PUT | `/api/cart/items/:id` | Update item quantity |
| DELETE | `/api/cart/items/:id` | Remove item from cart |

## Checkout (`/api/checkout`)

| Method | Route | Purpose |
|--------|-------|---------|
| POST | `/api/checkout` | Place order |
| GET | `/api/checkout/summary` | Calculate order summary (subtotal, taxes, shipping) |

## Addresses (`/api/addresses`)

| Method | Route | Purpose |
|--------|-------|---------|
| GET | `/api/addresses` | List user's saved addresses |
| POST | `/api/addresses` | Add new address |
| PUT | `/api/addresses/:id` | Update address |
| DELETE | `/api/addresses/:id` | Delete address |
| PUT | `/api/addresses/:id/default` | Set as default |

## Orders (`/api/orders`)

| Method | Route | Purpose |
|--------|-------|---------|
| GET | `/api/orders` | List user's orders (filter: `?status=pending\|confirmed\|shipped\|delivered`) |
| GET | `/api/orders/:id` | Single order detail |

## Wishlist (`/api/wishlist`)

| Method | Route | Purpose |
|--------|-------|---------|
| GET | `/api/wishlist` | List wishlisted items |
| POST | `/api/wishlist` | Add item to wishlist |
| DELETE | `/api/wishlist/:id` | Remove from wishlist |

## Seller Dashboard (`/api/seller`)

| Method | Route | Purpose |
|--------|-------|---------|
| GET | `/api/seller/listings` | Seller's listings |
| POST | `/api/seller/listings` | Create new listing |
| PUT | `/api/seller/listings/:id` | Update listing |
| DELETE | `/api/seller/listings/:id` | Remove listing |
| POST | `/api/seller/listings/:id/photos` | Upload listing photos |
| PUT | `/api/seller/listings/:id/status` | Update listing status |
| GET | `/api/seller/orders` | Orders for seller's items |
| PUT | `/api/seller/orders/:id/status` | Update order status (confirm/ship/deliver) |
| GET | `/api/seller/analytics` | Dashboard metrics (revenue, views, bids) |
| GET | `/api/seller/payouts` | Payout history |
| POST | `/api/seller/payouts/withdraw` | Request payout |
| GET | `/api/seller/settings` | Seller profile/settings |
| PUT | `/api/seller/settings` | Update seller settings |

## Payments (`/api/payments`)

| Method | Route | Purpose |
|--------|-------|---------|
| POST | `/api/payments/initiate` | Initiate payment (UPI/card) |
| POST | `/api/payments/verify` | Verify payment callback/webhook |
| GET | `/api/payments/methods` | Saved payment methods |
| POST | `/api/payments/methods` | Save payment method |

## Contact & Support (`/api/contact`)

| Method | Route | Purpose |
|--------|-------|---------|
| POST | `/api/contact` | Submit contact form |

## Misc

| Method | Route | Purpose |
|--------|-------|---------|
| GET | `/api/stats` | Site-wide stats (live auctions, users watching, total volume) |
| GET | `/api/market-moves` | Recent sales feed for homepage ticker |
| GET | `/api/faq` | FAQ content (or serve static) |
