import { NavMarketplace } from '@/components/layout/nav-marketplace';
import { Footer } from '@/components/layout/footer';
import { MarketGrid } from '@/components/home/market-grid';

export const metadata = {
  title: 'Shop - HYPE Marketplace',
  description: 'Browse our collection of fine art, jewelry, watches, and rare collectibles.',
};

export default function ShopPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavMarketplace />
      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-background via-background to-muted/30 py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <h1 className="text-5xl md:text-6xl font-heading font-bold text-foreground mb-4">
              Shop Fine Collections
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl">
              Curated selections from our global network of verified sellers. Every item is authenticated and professionally handled.
            </p>
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
