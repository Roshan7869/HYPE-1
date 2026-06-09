import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import { Hero } from "@/components/home/hero";
import { StatsBar } from "@/components/home/stats-bar";
import { MarketGrid } from "@/components/home/market-grid";
import { HowItWorks } from "@/components/home/how-it-works";
import { MarketMoves } from "@/components/home/market-moves";
import { StayAhead } from "@/components/home/stay-ahead";
import { AUCTIONS } from "@/lib/mock-data";

export default function HomePage() {
  const liveAuctions = AUCTIONS.filter((a) => a.status === "live").slice(0, 6);

  return (
    <div className="page">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <MarketGrid auctions={liveAuctions} />
        <HowItWorks />
        <MarketMoves />
        <StayAhead />
      </main>
      <Footer />
    </div>
  );
}
