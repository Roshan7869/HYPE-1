import Link from "next/link";
import { Eye, Gavel, Clock, ChevronRight, Filter, Award } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { Button } from "@/components/ui/button";
import { LiveBadge } from "@/components/shared/live-badge";
import { Timer } from "@/components/shared/timer";
import { AUCTIONS, getAuctionSlug, getLiveAuctions } from "@/lib/mock-data";
import { cn, formatINR } from "@/lib/utils";

export const metadata = {
  title: "Live Auctions — HYPE",
  description: "Bid on authenticated sneakers and streetwear in real-time auctions.",
};

const CATEGORIES = ["All", "Sneakers", "Streetwear", "Accessories", "Collectibles"];
const FILTERS = ["Ending Soon", "Newly Listed", "Most Bids", "Price: Low → High"];

export default function LiveAuctionsPage() {
  const live = getLiveAuctions();
  const all = AUCTIONS;
  const featured = all.find((a) => a.name.includes("Air Jordan 1 Retro")) ?? all[0]!;
  const others = live.filter((a) => a.id !== featured.id);

  return (
    <div className="page">
      <header className="bg-ink text-white">
        <div className="wrap flex h-[88px] items-center gap-8">
          <Link href="/" className="font-disp text-[30px] font-extrabold tracking-tighter2 text-white">
            HYPE.
          </Link>
          <nav className="flex flex-1 items-center justify-center gap-[34px]">
            {[
              { label: "Home", href: "/" },
              { label: "Shop", href: "/shop" },
              { label: "Live Auctions", href: "/live-auctions", active: true },
              { label: "Sell With Us", href: "/sell-with-us" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={`relative text-[14px] font-semibold uppercase tracking-[0.06em] ${l.active ? "text-white after:absolute after:-bottom-[2px] after:left-0 after:right-0 after:h-[2px] after:bg-white" : "text-[#e7e2da] hover:text-white"}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3.5">
            <Link
              href="/login"
              className="rounded-full border-[1.5px] border-white/50 px-[26px] py-[13px] text-[14px] font-semibold tracking-[0.04em] text-white hover:border-white hover:bg-white/[0.06]"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-cream px-[26px] py-[13px] text-[14px] font-semibold tracking-[0.04em] text-ink hover:bg-white"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Live Auctions" },
        ]}
      />

      <main className="flex-1 bg-sand">
        {/* Hero */}
        <section className="bg-cream-2 py-14">
          <div className="wrap">
            <div className="flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-muted">
              <LiveBadge size="sm" />
              <span className="ml-1">Live Now — {live.length} active auctions</span>
            </div>
            <h1 className="mt-3 font-disp text-[56px] font-extrabold leading-[0.95] tracking-tighter2">
              Bid on the drops<br />
              <span className="text-muted-2">everybody wants.</span>
            </h1>
            <p className="mt-3 max-w-xl text-[15px] text-muted">
              Every item authenticated by HYPE. Real-time bidding. Sealed and shipped only after payment clears.
            </p>
          </div>
        </section>

        {/* Filter bar */}
        <section className="sticky top-[88px] z-30 border-b border-line bg-white/95 backdrop-blur">
          <div className="wrap flex items-center gap-3 overflow-x-auto py-3.5">
            <div className="flex items-center gap-2 pr-3 text-[13px] font-semibold text-ink">
              <Filter className="h-4 w-4" /> Filter
            </div>
            {CATEGORIES.map((c, i) => (
              <button
                key={c}
                className={cn(
                  "flex h-9 items-center rounded-full px-4 text-[13px] font-semibold transition-colors",
                  i === 0 ? "bg-ink text-white" : "border border-line bg-white text-ink hover:border-ink",
                )}
              >
                {c}
              </button>
            ))}
            <div className="ml-auto hidden items-center gap-2 md:flex">
              {FILTERS.map((f, i) => (
                <button
                  key={f}
                  className={cn(
                    "flex h-9 items-center rounded-full px-4 text-[13px] font-medium transition-colors",
                    i === 0 ? "border border-ink bg-ink/5 text-ink" : "text-muted hover:text-ink",
                  )}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </section>

        <div className="wrap py-10 pb-20">
          {/* Featured */}
          <Link
            href={`/live-auctions/${getAuctionSlug(featured)}`}
            className="group mb-12 grid grid-cols-1 overflow-hidden rounded-[20px] border border-line-soft bg-white transition-all hover:border-ink lg:grid-cols-[1.1fr_1fr]"
          >
            <div
              className="relative flex aspect-[16/10] items-center justify-center lg:aspect-auto"
              style={{ background: "linear-gradient(135deg,#1b2a55,#2f6bd6 35%,#a9c6ff 60%,#d98bd0 85%,#7a3f8f)" }}
            >
              <span className="px-6 text-center font-disp text-[28px] font-extrabold text-white/90">
                {featured.name}
              </span>
              <div className="absolute left-4 top-4">
                <LiveBadge size="md" />
              </div>
              <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-ink">
                Featured
              </div>
            </div>
            <div className="flex flex-col justify-center p-8">
              <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-muted">
                {featured.brand} · {featured.category}
              </div>
              <h2 className="mt-2 font-disp text-[36px] font-extrabold leading-tight tracking-tighter2">
                {featured.name}
              </h2>
              <div className="mt-3 flex items-center gap-2 text-[13px] text-muted">
                <Award className="h-3.5 w-3.5 text-emerald-600" />
                Authenticated · Size {featured.size} · {featured.condition}
              </div>
              <div className="mt-6 flex items-end justify-between">
                <div>
                  <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
                    Current Bid
                  </div>
                  <div className="font-disp text-[40px] font-extrabold leading-none tracking-tighter2">
                    {formatINR(featured.currentBid)}
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
                    Ends In
                  </div>
                  <div className="font-disp text-[22px] font-extrabold leading-none tracking-tighter2">
                    <Timer initialSeconds={featured.endsIn} variant="card" />
                  </div>
                </div>
              </div>
              <div className="mt-7 flex items-center gap-3">
                <span className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-7 text-[14px] font-bold text-white group-hover:bg-black">
                  Place Bid <ChevronRight className="h-4 w-4" />
                </span>
                <span className="text-[13px] text-muted">{featured.watchers} watching</span>
              </div>
            </div>
          </Link>

          {/* Grid heading */}
          <div className="mb-6 flex items-end justify-between">
            <h3 className="font-disp text-[28px] font-extrabold tracking-tighter2">All live drops</h3>
            <div className="text-[13px] text-muted">
              Showing {others.length} of {live.length} live
            </div>
          </div>

          {/* Grid */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {others.map((a) => (
              <Link
                key={a.id}
                href={`/live-auctions/${getAuctionSlug(a)}`}
                className="group overflow-hidden rounded-[14px] border border-line-soft bg-cream transition-all hover:border-ink"
              >
                <div className={cn("relative flex aspect-[1/0.92] items-center justify-center", a.imageHue)}>
                  <span className="px-4 text-center font-disp text-[14px] font-bold text-white/85">
                    {a.name}
                  </span>
                  <div className="absolute left-3 top-3">
                    <LiveBadge size="sm" />
                  </div>
                  <div className="absolute right-3 top-3 flex h-7 items-center gap-1 rounded-full bg-black/60 px-2.5 text-[11px] font-semibold text-white">
                    <Clock className="h-3 w-3" /> <Timer initialSeconds={a.endsIn} variant="inline" />
                  </div>
                </div>
                <div className="p-4">
                  <div className="font-disp text-[15px] font-extrabold uppercase tracking-[0.02em]">
                    {a.name}
                  </div>
                  <div className="my-3 flex items-end justify-between">
                    <div className="font-disp text-[22px] font-extrabold leading-none">
                      {formatINR(a.currentBid)}
                    </div>
                    <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
                      Min {formatINR(a.minIncrement)}
                    </div>
                  </div>
                  <div className="mb-3.5 flex items-center gap-4 text-[12px] text-muted">
                    <span className="flex items-center gap-1.5">
                      <Eye className="h-3.5 w-3.5" /> {a.watchers} watching
                    </span>
                    <span className="flex items-center gap-1.5 text-hype-red">
                      <Gavel className="h-3.5 w-3.5" /> Live
                    </span>
                  </div>
                  <Button size="sm" className="w-full justify-center">
                    Place Bid
                  </Button>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
