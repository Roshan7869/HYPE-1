import { NavMarketplace } from '@/components/layout/nav-marketplace';
import { Footer } from '@/components/layout/footer';
import { MarketGrid } from '@/components/home/market-grid';
import { Activity } from 'lucide-react';

export const metadata = {
  title: 'Live Auctions - HYPE Marketplace',
  description: 'Join live auctions in progress. Real-time bidding on premium collections.',
};

export default function LiveAuctionsPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavMarketplace />
      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-background via-background to-muted/30 py-16 px-4 sm:px-6 lg:px-8 border-b border-border">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-100 border border-green-300">
                <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                <span className="text-sm font-semibold text-green-800">Live Now</span>
              </div>
            </div>
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-4">
              Live Auctions
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Join thousands of collectors bidding in real-time. Watch prices climb, make strategic bids, and win extraordinary pieces.
            </p>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="bg-background border-b border-border px-4 sm:px-6 lg:px-8 py-8">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex items-center gap-4">
              <Activity className="w-8 h-8 text-secondary" />
              <div>
                <p className="text-sm text-muted-foreground">Active Now</p>
                <p className="text-2xl font-bold text-foreground">342</p>
              </div>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Bidders</p>
              <p className="text-2xl font-bold text-foreground">18.4K</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Bid Volume</p>
              <p className="text-2xl font-bold text-foreground">$2.1M+</p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Avg Item Value</p>
              <p className="text-2xl font-bold text-foreground">$6,250</p>
            </div>
          </div>
        </section>

        {/* Market Grid */}
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <MarketGrid />
        </section>
      </main>
      <Footer />
    </div>
  );
}
