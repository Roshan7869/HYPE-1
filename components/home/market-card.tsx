'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Auction } from '@/types/auction';
import { formatCurrency } from '@/lib/constants';

interface MarketCardProps {
  auction: Auction;
  index?: number;
}

export function MarketCard({ auction, index = 0 }: MarketCardProps) {
  const timeRemaining = auction.endTime.getTime() - Date.now();
  const hoursLeft = Math.floor(timeRemaining / (1000 * 60 * 60));
  const minutesLeft = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));

  const statusColor = {
    live: 'bg-emerald-500',
    upcoming: 'bg-amber-500',
    ended: 'bg-gray-500',
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        delay: index * 0.1,
        duration: 0.6,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover={{ y: -4 }}
      className="group"
    >
      <Link href={`/auctions/${auction.id}`}>
        <div className="glass rounded-hype-lg overflow-hidden transition-all duration-300 hover:border-hype-accent/50">
          {/* Image Container */}
          <div className="relative h-48 md:h-56 bg-hype-sand/20 overflow-hidden">
            <Image
              src={auction.image}
              alt={auction.title}
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Status Badge */}
            <div className="absolute top-3 right-3 z-10">
              <Badge
                className={`${statusColor[auction.status]} text-white font-semibold`}
              >
                {auction.status === 'live' && '🔴 LIVE'}
                {auction.status === 'upcoming' && 'Upcoming'}
                {auction.status === 'ended' && 'Ended'}
              </Badge>
            </div>

            {/* Featured Badge */}
            {auction.featured && (
              <div className="absolute top-3 left-3 z-10">
                <Badge className="bg-hype-gold text-hype-ink font-semibold">
                  ⭐ Featured
                </Badge>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-4 md:p-6">
            {/* Title */}
            <h3 className="font-heading font-bold text-lg md:text-xl text-foreground line-clamp-2 mb-2 group-hover:text-hype-accent transition-colors">
              {auction.title}
            </h3>

            {/* Description */}
            <p className="text-sm text-foreground/60 line-clamp-2 mb-4">
              {auction.description}
            </p>

            {/* Price Info */}
            <div className="flex items-baseline gap-2 mb-4">
              <span className="text-xs text-foreground/50">Current Bid</span>
              <span className="font-heading font-bold text-lg md:text-2xl text-foreground">
                {formatCurrency(auction.currentBid)}
              </span>
            </div>

            {/* Auction Details Grid */}
            <div className="grid grid-cols-3 gap-2 mb-4 pb-4 border-b border-border">
              <div className="text-center">
                <p className="text-xs text-foreground/60">Bids</p>
                <p className="font-semibold text-sm">{auction.totalBids}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-foreground/60">Views</p>
                <p className="font-semibold text-sm">{auction.views || 0}</p>
              </div>
              <div className="text-center">
                <p className="text-xs text-foreground/60">Seller</p>
                <p className="font-semibold text-sm truncate">{auction.seller.name.split(' ')[0]}</p>
              </div>
            </div>

            {/* Time Remaining / CTA */}
            <div className="space-y-3">
              {auction.status === 'live' && (
                <div className="text-xs text-hype-accent font-semibold">
                  {hoursLeft}h {minutesLeft}m remaining
                </div>
              )}
              <Button className="w-full bg-hype-accent hover:bg-hype-accent/90 text-hype-cream font-semibold rounded-hype">
                View Listing
              </Button>
            </div>
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
