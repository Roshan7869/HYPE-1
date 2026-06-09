'use client';

import { NavMarketplace } from '@/components/layout/nav-marketplace';
import { Footer } from '@/components/layout/footer';
import { mockAuctions } from '@/lib/mock-data';
import { Clock, Shield, Truck, User } from 'lucide-react';
import { useState } from 'react';

export default function AuctionDetailPage({ params }: { params: { id: string } }) {
  const auction = mockAuctions[0]; // Use first auction as demo
  const [bidAmount, setBidAmount] = useState(auction.currentBid + 100);
  const [isPlacingBid, setIsPlacingBid] = useState(false);

  const handlePlaceBid = async () => {
    setIsPlacingBid(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    setIsPlacingBid(false);
    alert(`Bid of $${bidAmount} placed successfully!`);
  };

  return (
    <div className="flex flex-col min-h-screen">
      <NavMarketplace />
      <main className="flex-1 pt-20">
        <section className="py-12 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
              {/* Image Section */}
              <div className="lg:col-span-2">
                <div className="relative rounded-hype-lg overflow-hidden bg-muted h-96 md:h-[600px] flex items-center justify-center">
                  <img
                    src={auction.imageUrl}
                    alt={auction.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 px-4 py-2 rounded-full bg-green-100 border border-green-300">
                    <div className="flex items-center gap-2">
                      <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse" />
                      <span className="text-sm font-semibold text-green-800">LIVE</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bid Section */}
              <div className="space-y-6">
                {/* Bid Card */}
                <div className="glass rounded-hype-lg p-8">
                  <h3 className="text-sm font-semibold text-muted-foreground uppercase mb-2">
                    Current Bid
                  </h3>
                  <p className="text-4xl font-bold text-secondary mb-6">
                    ${auction.currentBid.toLocaleString()}
                  </p>

                  <div className="space-y-4 mb-8 pb-8 border-b border-border">
                    <div>
                      <label className="text-sm font-semibold text-foreground block mb-2">
                        Your Bid Amount
                      </label>
                      <div className="flex gap-2">
                        <div className="text-lg font-bold text-secondary">$</div>
                        <input
                          type="number"
                          value={bidAmount}
                          onChange={(e) => setBidAmount(Number(e.target.value))}
                          className="flex-1 px-4 py-2 rounded-hype border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
                        />
                      </div>
                      <p className="text-xs text-muted-foreground mt-2">
                        Minimum: ${(auction.currentBid + 100).toLocaleString()}
                      </p>
                    </div>
                  </div>

                  <button
                    onClick={handlePlaceBid}
                    disabled={isPlacingBid}
                    className="w-full py-3 rounded-hype bg-secondary text-white font-semibold hover:bg-secondary/90 disabled:opacity-50 transition-colors mb-3"
                  >
                    {isPlacingBid ? 'Placing Bid...' : 'Place Bid'}
                  </button>

                  {/* Time Remaining */}
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="w-4 h-4" />
                    <span>Ends in 2 hours 15 minutes</span>
                  </div>
                </div>

                {/* Info Cards */}
                <div className="glass rounded-hype-lg p-6">
                  <div className="flex items-start gap-4 mb-6 pb-6 border-b border-border">
                    <Shield className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">Verified & Authenticated</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Certified by independent expert. Full provenance documentation included.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 mb-6 pb-6 border-b border-border">
                    <Truck className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">Insured Shipping</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Professional packing and fully insured delivery worldwide.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <User className="w-6 h-6 text-secondary flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-semibold text-foreground text-sm">24/7 Support</h4>
                      <p className="text-xs text-muted-foreground mt-1">
                        Expert support team ready to help with any questions.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Details Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              <div className="lg:col-span-2 space-y-8">
                {/* Item Details */}
                <div>
                  <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                    {auction.title}
                  </h2>
                  <p className="text-muted-foreground text-lg mb-6">{auction.description}</p>

                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <div className="p-4 rounded-hype border border-border">
                      <p className="text-xs text-muted-foreground uppercase">Category</p>
                      <p className="font-semibold text-foreground">{auction.category}</p>
                    </div>
                    <div className="p-4 rounded-hype border border-border">
                      <p className="text-xs text-muted-foreground uppercase">Status</p>
                      <p className="font-semibold text-foreground capitalize">{auction.status}</p>
                    </div>
                    <div className="p-4 rounded-hype border border-border">
                      <p className="text-xs text-muted-foreground uppercase">Seller Rating</p>
                      <p className="font-semibold text-foreground">4.9/5.0</p>
                    </div>
                    <div className="p-4 rounded-hype border border-border">
                      <p className="text-xs text-muted-foreground uppercase">Total Bids</p>
                      <p className="font-semibold text-foreground">47</p>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="glass rounded-hype-lg p-8">
                  <h3 className="text-2xl font-semibold text-foreground mb-4">Item Description</h3>
                  <p className="text-muted-foreground leading-relaxed mb-4">
                    {auction.description}
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    This exceptional piece represents the pinnacle of craftsmanship. With meticulous attention to detail and premium materials, it stands as a testament to fine artistry. Perfect for the discerning collector.
                  </p>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Bidding History */}
                <div className="glass rounded-hype-lg p-6">
                  <h3 className="font-semibold text-foreground mb-4">Recent Bids</h3>
                  <div className="space-y-3 text-sm">
                    {[
                      { bidder: 'Collector_847', amount: 12500, time: '2 min ago' },
                      { bidder: 'ArtLover_22', amount: 12400, time: '5 min ago' },
                      { bidder: 'Premium_Member', amount: 12200, time: '12 min ago' },
                      { bidder: 'Collector_847', amount: 12000, time: '18 min ago' },
                    ].map((bid, idx) => (
                      <div key={idx} className="flex justify-between py-2 border-b border-border last:border-0">
                        <span className="text-muted-foreground">{bid.bidder}</span>
                        <div>
                          <p className="font-semibold text-foreground">${bid.amount.toLocaleString()}</p>
                          <p className="text-xs text-muted-foreground">{bid.time}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Seller Info */}
                <div className="glass rounded-hype-lg p-6">
                  <h3 className="font-semibold text-foreground mb-4">Seller Information</h3>
                  <div className="text-sm space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Seller Name</span>
                      <span className="font-semibold text-foreground">Elite Collections</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Member Since</span>
                      <span className="font-semibold text-foreground">2019</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Total Sales</span>
                      <span className="font-semibold text-foreground">1,240+</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Success Rate</span>
                      <span className="font-semibold text-green-600">99.8%</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
