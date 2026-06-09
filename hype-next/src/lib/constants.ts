export const SITE_CONFIG = {
  name: "HYPE",
  tagline: "Bid. Win. Repeat.",
  description: "India's first live auction marketplace for hype culture.",
  url: "https://thehypecompany.in",
  email: "hello@thehypecompany.in",
  twitter: "@hypeindiahq",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Live", href: "/live-auctions" },
  { label: "Upcoming", href: "/live-auctions?status=upcoming" },
  { label: "Sold", href: "/live-auctions?status=sold" },
  { label: "Sell", href: "/sell-with-us" },
  { label: "About", href: "/about" },
] as const;

export const FOOTER_LINKS = {
  market: [
    { label: "Auctions", href: "/live-auctions" },
    { label: "Live", href: "/live-auctions" },
    { label: "Upcoming", href: "/live-auctions?status=upcoming" },
    { label: "Sold", href: "/live-auctions?status=sold" },
    { label: "Categories", href: "/shop" },
  ],
  sell: [
    { label: "Sell With Us", href: "/sell-with-us" },
    { label: "How It Works", href: "/sell-with-us#how" },
    { label: "Seller Guide", href: "/sell-with-us#guide" },
    { label: "Payouts", href: "/dashboard/payouts" },
  ],
  account: [
    { label: "My Orders", href: "/account/orders" },
    { label: "My Bids", href: "/account/bids" },
    { label: "Wishlist", href: "/account/wishlist" },
    { label: "Profile", href: "/account/profile" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact Us", href: "/contact" },
    { label: "Help Center", href: "/faq" },
    { label: "Careers", href: "/about" },
  ],
  support: [
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
    { label: "Terms", href: "/terms" },
    { label: "Privacy Policy", href: "/privacy" },
  ],
} as const;

export const STATS = {
  liveAuctions: 12,
  usersWatching: 1200,
  totalVolume: 24_000_000, // ₹2.4 CR+
} as const;

export const MARKET_MOVES = [
  "Nike Dunk Low sold for ₹19,200",
  "Yeezy 350 Beluga highest bid ₹25,500",
  "Supreme Tee sold for ₹8,500",
  "Off-White Air Jordan 1 new bid ₹83,200",
  "Air Jordan 4 Bred Reimagined sold for ₹32,800",
  "Travis Scott Cactus Jack hoodie sold for ₹48,000",
] as const;

export const HOW_IT_WORKS = [
  {
    n: "01",
    title: "List",
    desc: "List your authentic item in minutes.",
  },
  {
    n: "02",
    title: "Bid",
    desc: "Real-time bidding decides the price.",
  },
  {
    n: "03",
    title: "Own",
    desc: "Highest bid wins. We authenticate & deliver.",
  },
] as const;
