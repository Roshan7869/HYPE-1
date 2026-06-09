'use client';

import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Activity } from 'lucide-react';

interface MarketTick {
  id: string;
  item: string;
  currentBid: number;
  previousBid: number;
  bidderCount: number;
  timeRemaining: string;}

const marketTicks: MarketTick[] = [
  { id: '1', item: 'Vintage Rolex Submariner', currentBid: 12500, previousBid: 11800, bidderCount: 47, timeRemaining: '2h 15m' },
  { id: '2', item: 'First Edition Hemingway', currentBid: 3200, previousBid: 2900, bidderCount: 23, timeRemaining: '4h 30m' },
  { id: '3', item: 'Original Banksy Print', currentBid: 45000, previousBid: 48500, bidderCount: 89, timeRemaining: '1h 45m' },
  { id: '4', item: 'Ming Dynasty Vase', currentBid: 28750, previousBid: 26000, bidderCount: 15, timeRemaining: '6h 20m' },
  { id: '5', item: 'Vintage Louis Vuitton Trunk', currentBid: 8900, previousBid: 8200, bidderCount: 34, timeRemaining: '3h 10m' },
];

const TickerItem = ({ tick, offset }: { tick: MarketTick; offset: number }) => {
  const trend = tick.currentBid > tick.previousBid ? 'up' : 'down';
  const percentChange = ((tick.currentBid - tick.previousBid) / tick.previousBid * 100).toFixed(1);
  const TrendIcon = trend === 'up' ? TrendingUp : TrendingDown;

  return (
    <div className="flex-shrink-0 w-80 px-6 py-4 rounded-hype glass border border-border/50 hover:border-secondary/50 transition-colors">
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h4 className="font-semibold text-foreground text-sm">{tick.item}</h4>
          <p className="text-xs text-muted-foreground mt-1">Ends in {tick.timeRemaining}</p>
        </div>
        <div className={`flex items-center gap-1 px-2 py-1 rounded text-xs font-semibold ${trend === 'up' ? 'text-green-600 bg-green-50' : 'text-red-600 bg-red-50'}`}>
          <TrendIcon className="w-3 h-3" />
          {percentChange}%
        </div>
      </div>

      <div className="flex items-baseline justify-between">
        <div>
          <p className="text-lg font-bold text-secondary">${tick.currentBid.toLocaleString()}</p>
          <p className="text-xs text-muted-foreground">Current bid</p>
        </div>
        <div className="flex items-center gap-1 text-xs text-muted-foreground">
          <Activity className="w-3 h-3" />
          {tick.bidderCount} bidders
        </div>
      </div>
    </div>
  );
};

export function MarketMovesTicker() {
  const duplicatedTicks = [...marketTicks, ...marketTicks, ...marketTicks];

  return (
    <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-background border-t border-b border-border overflow-hidden">
      <div className="max-w-7xl mx-auto mb-8">
        <div className="flex items-center gap-3">
          <Activity className="w-6 h-6 text-secondary" />
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground">
            Market Moves
          </h2>
          <div className="ml-auto flex items-center gap-2 px-3 py-1 rounded-full bg-secondary/10 border border-secondary/20">
            <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-xs font-semibold text-secondary">Live Updates</span>
          </div>
        </div>
      </div>

      {/* Ticker Container */}
      <div className="relative">
        {/* Gradient Fades */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Ticker */}
        <div className="flex overflow-x-hidden">
          <motion.div
            className="flex gap-4"
            animate={{ x: ['0%', '-50%'] }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            {duplicatedTicks.map((tick, index) => (
              <TickerItem key={`${tick.id}-${index}`} tick={tick} offset={index} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* Statistics Footer */}
      <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="text-center">
          <p className="text-2xl font-bold text-secondary">$1.2M+</p>
          <p className="text-xs text-muted-foreground mt-1">Total Bid Volume</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-secondary">892</p>
          <p className="text-xs text-muted-foreground mt-1">Active Auctions</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-secondary">18.4K</p>
          <p className="text-xs text-muted-foreground mt-1">Live Bidders</p>
        </div>
        <div className="text-center">
          <p className="text-2xl font-bold text-secondary">94.2%</p>
          <p className="text-xs text-muted-foreground mt-1">Buyer Satisfaction</p>
        </div>
      </div>
    </section>
  );
}
