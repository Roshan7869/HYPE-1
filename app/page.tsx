import { NavMarketplace } from '@/components/layout/nav-marketplace';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/home/hero';
import { StatsBar } from '@/components/home/stats-bar';
import { MarketGrid } from '@/components/home/market-grid';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavMarketplace />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <MarketGrid />
      </main>
      <Footer />
    </div>
  );
}
