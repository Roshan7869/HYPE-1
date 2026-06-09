import { NavMarketplace } from '@/components/layout/nav-marketplace';
import { Footer } from '@/components/layout/footer';
import { Hero } from '@/components/home/hero';
import { StatsBar } from '@/components/home/stats-bar';
import { MarketGrid } from '@/components/home/market-grid';
import { HowItWorks } from '@/components/home/how-it-works';
import { MarketMovesTicker } from '@/components/home/market-moves-ticker';
import { EmailCTA } from '@/components/home/email-cta';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavMarketplace />
      <main className="flex-1">
        <Hero />
        <StatsBar />
        <MarketGrid />
        <HowItWorks />
        <MarketMovesTicker />
        <EmailCTA />
      </main>
      <Footer />
    </div>
  );
}
