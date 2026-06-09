# Overview — Vision, Brand, and the 3-Click Promise

## 1. The vision in one paragraph

HYPE is India's first live auction marketplace for hype culture — sneakers, streetwear, collectibles. We compete on **trust, scarcity, and time**. The product is a private auction house disguised as a mobile-first web app. Every pixel should whisper *curated*; every interaction should feel *inevitable*. The buyer should go from "I want to see what's live" to "payment confirmed" in 3–4 taps. The seller should go from "I have a pair of Jordans in my closet" to "my listing is live and shipping is scheduled" in under 5 minutes.

## 2. The 3–4 click promise — buyer flow

```
  CLICK 1  Home (/)                       — see live auctions on hero, click card
  CLICK 2  Auction Detail (live-auctions/[slug])
                                            — tap "Place Bid" or "Buy It Now"
  CLICK 3  Bid Panel (inline)  OR  Cart (/cart)
                                            — confirm amount, tap Place Bid
  CLICK 4  Checkout (/checkout)            — address (saved) + payment (UPI) + Place Order
```

Total: **3 clicks** for "Place Bid", **4 clicks** for "Buy It Now + Checkout". The detail page never requires a separate "Add to Cart" step. The bid panel opens inline. The checkout pre-fills the saved address and saved UPI. There is no login wall for browsing; login is required only when bidding, listing, or paying.

## 3. Brand positioning

| Tier | Reference brands | What they teach us |
|---|---|---|
| Aspirational luxury | Hermès, Gucci, Bottega Veneta, Dior | Restraint. One accent colour. Whitespace as a feature. |
| Modern minimal | Apple, Aēsop, Muji, Teenage Engineering | Functional. No decoration. Each element does one job. |
| Curated commerce | Christie's, Sotheby's, 1stDibs, Farfetch | Each item is a story. Photographed, catalogued, authenticated. |
| Editorial tech | Stripe, Linear, Vercel | Calm interfaces. Confident typography. Subtle motion. |
| Indian street culture | SneakerLaundry, VegNonVeg, Sole Supreme, The Souled Store | Cultural fluency. The audience knows hype, don't over-explain. |

**Our niche:** the first four tiers applied to a category (hype) that the fifth tier has owned culturally. HYPE is the bridge.

## 4. Tone of voice

- Confident, not loud
- Specific, not generic ("DS — verified at HYPE Lab, Mumbai" beats "100% authentic")
- Indian without trying to be ("UPI, COD, cards" not "convenient payment methods")
- Numbers are honest ("₹18,500" not "₹18.5K" in headline prices; "₹18.5K" only in dense stats bars)

## 5. The four pillars of the redesign

| Pillar | What it means | Concrete change |
|---|---|---|
| **Restraint** | Remove decoration. Let type and image do the work. | Kill the cartoon-shoe hero illustration. Replace with high-fidelity product art. |
| **Speed** | LCP < 1.5s on 4G. INP < 200ms. CLS < 0.05. | Image CDN, route-level code split, no animation libraries on critical path. |
| **Trust** | Authentication is the product. Show it. | Every product page has a HYPE authentication card with a verifiable ID. |
| **Calm** | Motion is the punctuation, not the prose. | Lenis smooth scroll, no autoplay video, no parallax on mobile. |

## 6. What we are NOT

- We are not StockX. We are not Goat. We are not eBay. We are a curated auction house.
- We are not a "deal site." Prices go up, not down. The badge is **Highest Bid**, not **Lowest Price**.
- We are not a feed. The home page is a curated set of drops, not a wall of items.
- We are not a marketplace for resellers listing their closets. Sellers are vetted; listings are authenticated.

## 7. Success metrics (90-day post-launch)

| Metric | Baseline (now) | Target | Owner |
|---|---|---|---|
| Visit-to-bid (median clicks) | ~8 | 3–4 | Product |
| Visit-to-checkout (median time) | ~12 min | < 4 min | Product |
| Mobile bounce on home | ~62% | < 40% | Design + Eng |
| LCP (P75, mobile 4G) | ~3.2s | < 1.8s | Eng |
| Lighthouse score (mobile) | ~62 | 92+ | Eng |
| Authenticated-item trust score (CSAT) | 4.3/5 | 4.7/5 | Trust |
| New sellers onboarded / month | ~14 | 50+ | Growth |

## 8. Non-goals (this quarter)

- Real-time bidding via WebSocket (planned Q4)
- Mobile app (planned Q1 2027)
- International shipping (planned Q3 2027)
- AI-generated product descriptions (planned Q1 2027)
- Loyalty / rewards programme (planned Q2 2027)
