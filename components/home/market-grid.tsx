'use client';

import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { MarketCard } from './market-card';
import { FilterBar } from './filter-bar';
import { mockAuctions } from '@/lib/mock-data';
import { AuctionFilter } from '@/types/auction';

export function MarketGrid() {
  const [filters, setFilters] = useState<AuctionFilter>({});

  const filteredAuctions = useMemo(() => {
    let results = mockAuctions;

    if (filters.status) {
      results = results.filter((a) => a.status === filters.status);
    }

    if (filters.categories && filters.categories.length > 0) {
      results = results.filter((a) => filters.categories!.includes(a.category));
    }

    if (filters.priceMin !== undefined) {
      results = results.filter((a) => a.currentBid >= filters.priceMin!);
    }

    if (filters.priceMax !== undefined) {
      results = results.filter((a) => a.currentBid <= filters.priceMax!);
    }

    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      results = results.filter((a) =>
        a.title.toLowerCase().includes(query) ||
        a.description.toLowerCase().includes(query)
      );
    }

    return results;
  }, [filters]);

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="font-heading font-bold text-4xl md:text-5xl text-foreground mb-3">
            Market Spotlight
          </h2>
          <p className="text-lg text-foreground/60 max-w-2xl">
            Explore our curated selection of the finest auction items.
          </p>
        </motion.div>

        {/* Filter Bar */}
        <FilterBar onFiltersChange={setFilters} />

        {/* Results Count */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-sm text-foreground/60 mb-6"
        >
          Showing {filteredAuctions.length} auction{filteredAuctions.length !== 1 ? 's' : ''}
        </motion.p>

        {/* Grid */}
        {filteredAuctions.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredAuctions.map((auction, index) => (
              <MarketCard
                key={auction.id}
                auction={auction}
                index={index}
              />
            ))}
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-16"
          >
            <p className="text-foreground/60 text-lg">
              No auctions match your filters. Try adjusting your search.
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
