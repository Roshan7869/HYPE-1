import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import {
  AuctionDetail,
  AuctionDetailsRow,
  PriceInsights,
  RelatedAuctions,
} from "@/components/auction/auction-detail";
import { AUCTIONS, getLiveAuctions } from "@/lib/mock-data";

export const metadata = {
  title: "Air Jordan 1 Retro High OG 'Chicago' — HYPE Live Auctions",
  description: "Bid on the Air Jordan 1 'Chicago'. Live auction with real-time bidding.",
};

export default function LiveAuctionsPage() {
  const featured = AUCTIONS.find((a) => a.name.includes("Air Jordan 1 Retro")) ?? AUCTIONS[0]!;
  const related = getLiveAuctions();

  return (
    <div className="page">
      {/* Standard site header (not the marketplace one) */}
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
              { label: "About", href: "#" },
              { label: "Contact", href: "#" },
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
              href="#"
              className="rounded-full border-[1.5px] border-white/50 px-[26px] py-[13px] text-[14px] font-semibold tracking-[0.04em] text-white hover:border-white hover:bg-white/[0.06]"
            >
              Login
            </Link>
            <Link
              href="#"
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
          { label: "Live Auctions", href: "/live-auctions" },
          { label: "Sneakers", href: "#" },
          { label: "Nike Air Jordan 1 Retro High OG" },
        ]}
      />

      <main className="flex-1 bg-sand">
        <div className="wrap py-9 pb-[70px]">
          <AuctionDetail auction={featured} />
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-3">
              <AuctionDetailsRow />
            </div>
            <div className="lg:col-span-3">
              <PriceInsights />
            </div>
          </div>
          <RelatedAuctions auctions={related} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
