"use client";

import Link from "next/link";
import { useState } from "react";
import { Check, Plus, Minus, Eye, Users, Gavel, ArrowUpRight, Award, Truck } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Timer } from "@/components/shared/timer";
import { LiveBadge } from "@/components/shared/live-badge";
import { formatINR, cn } from "@/lib/utils";
import type { Auction } from "@/types/auction";

interface AuctionDetailProps {
  auction: Auction;
}

/**
 * Detailed single-auction view: image, hero info, bid card,
 * details, bid history chart, seller info, price insights.
 */
export function AuctionDetail({ auction }: AuctionDetailProps) {
  const [bid, setBid] = useState(auction.currentBid + auction.minIncrement);
  const minNext = auction.currentBid + auction.minIncrement;
  const watchers = 1425;
  const bidders = 450;

  return (
    <div className="grid grid-cols-1 gap-7 lg:grid-cols-[1fr_1.05fr_1fr]">
      {/* Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.97 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="relative aspect-[1/1.06] overflow-hidden rounded-[18px]"
        style={{
          background:
            "linear-gradient(135deg,#1b2a55 0%,#2f6bd6 30%,#a9c6ff 55%,#d98bd0 80%,#7a3f8f 100%)",
        }}
      >
        <div className="absolute inset-0 flex items-center justify-center px-6 text-center font-disp font-bold tracking-[0.04em] text-white/85">
          {auction.name}
        </div>
        <div className="absolute left-4 top-4">
          <LiveBadge size="md" />
        </div>
      </motion.div>

      {/* Middle info */}
      <div>
        <LiveBadge size="md" />
        <h1 className="mb-4 mt-3.5 font-disp text-[42px] font-extrabold leading-[0.98] tracking-tighter2">
          {auction.name}
        </h1>
        <div className="mb-3.5 flex items-center gap-3 font-semibold">
          <span>{auction.brand}</span>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-hype-green px-3 py-1 text-[12px] font-semibold text-hype-green-ink">
            <Check className="h-3 w-3" strokeWidth={2.5} />
            HYPE Verified
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-3.5 border-y border-line py-2.5 text-[14px] text-muted">
          <span>
            Condition: <b className="text-ink">{auction.condition}</b>
          </span>
          <span className="text-line">|</span>
          <span>
            Size: <b className="text-ink">{auction.size}</b>
          </span>
        </div>
        <div className="mt-4 flex flex-wrap items-center gap-5 text-[14px] text-muted">
          <span>Current Bid</span>
          <span className="flex items-center gap-1.5">
            <Eye className="h-4 w-4" /> <b className="text-ink">{watchers}</b> Watching
          </span>
          <span className="flex items-center gap-1.5">
            <Users className="h-4 w-4" /> <b className="text-ink">{bidders}</b> Active bidders
          </span>
        </div>
        <div className="mt-2.5 font-bold text-hype-green-ink">
          + ₹{auction.minIncrement.toLocaleString("en-IN")}{" "}
          <span className="mt-0.5 block text-[13px] font-medium text-muted">Next minimum bid</span>
        </div>
        <div className="mt-5">
          <div className="text-[13px] font-semibold tracking-[0.06em] text-muted">Ends In</div>
          <Timer
            initialSeconds={auction.endsIn}
            variant="inline"
            className="font-disp text-[52px] font-extrabold leading-none text-hype-red tabular-nums"
          />
        </div>
      </div>

      {/* Bid card */}
      <div className="rounded-hype-lg bg-cream p-[30px]">
        <h3 className="mb-4 text-[16px] font-semibold">Place Your Bid</h3>
        <div className="mb-2 flex items-center justify-between">
          <b className="font-disp text-[48px] font-extrabold leading-none tracking-tighter2">
            {formatINR(bid)}
          </b>
          <div className="flex gap-2.5">
            <button
              onClick={() => setBid((b) => Math.max(minNext, b - auction.minIncrement))}
              aria-label="decrease"
              className="flex h-[50px] w-[50px] items-center justify-center rounded-[12px] border border-line bg-white text-[22px] font-semibold hover:border-ink"
            >
              <Minus className="h-5 w-5" />
            </button>
            <button
              onClick={() => setBid((b) => b + auction.minIncrement)}
              aria-label="increase"
              className="flex h-[50px] w-[50px] items-center justify-center rounded-[12px] border border-line bg-white text-[22px] font-semibold hover:border-ink"
            >
              <Plus className="h-5 w-5" />
            </button>
          </div>
        </div>
        <div className="mb-5 text-[14px] text-muted">
          Minimum next: <b className="text-ink">{formatINR(minNext)}</b>
        </div>
        <Button variant="outline" size="lg" className="mb-3.5 w-full justify-center">
          <Gavel className="h-4 w-4" />
          Place Bid
        </Button>
        <div className="mb-3.5 flex gap-3">
          {[300, 500, 1000].map((d) => (
            <button
              key={d}
              onClick={() => setBid((b) => b + d)}
              className="flex-1 rounded-full border border-line bg-white py-3.5 text-[15px] font-semibold hover:border-ink"
            >
              +{d}
            </button>
          ))}
        </div>
        <Button size="lg" className="w-full justify-center">
          Buy Now <ArrowUpRight className="h-4 w-4" />
        </Button>
        <div className="mt-5 flex items-center">
          {["#e05a3a", "#e08a3a", "#2f9e5b", "#3a7be0", "#7b3ae0", "#c03a8a", "#e0a93a"].map(
            (color, i) => (
              <span
                key={i}
                className="-ml-2 flex h-[30px] w-[30px] items-center justify-center rounded-full border-2 border-cream text-[12px] font-bold text-white first:ml-0"
                style={{ background: color }}
              >
                {String.fromCharCode(65 + i)}
              </span>
            ),
          )}
          <span className="ml-2.5 text-[14px] font-semibold text-muted">+16</span>
        </div>
      </div>
    </div>
  );
}

export function AuctionDetailsRow() {
  return (
    <div className="mt-9 grid grid-cols-1 gap-10 rounded-hype-lg bg-cream p-[34px] md:grid-cols-[1fr_1.2fr_1fr]">
      {/* Details */}
      <div>
        <h4 className="mb-[18px] flex items-center gap-1.5 text-[14px] font-bold">Details</h4>
        <div className="mb-4">
          <div className="text-[13px] text-muted">Market</div>
          <div className="text-[15px] text-stone-400 line-through">₹39,500</div>
          <div className="font-disp text-[26px] font-extrabold tracking-[-0.01em]">₹31,500</div>
        </div>
        <div className="mb-4">
          <div className="text-[13px] text-muted">Average Sale Price</div>
          <div className="font-disp text-[26px] font-extrabold tracking-[-0.01em]">₹28,250</div>
          <div className="text-[12px] text-stone-400">Relative bids to sales</div>
        </div>
        <div className="mb-4">
          <div className="text-[13px] text-muted">Hype Index</div>
          <div className="font-disp text-[22px] font-bold text-hype-green-ink">High</div>
        </div>
        <div className="flex gap-3">
          <div className="flex-1 rounded-[12px] bg-ink p-3.5 text-white">
            <div className="text-[12px] text-[#b7b0a4]">Last Sale</div>
            <div className="mt-1 font-disp text-[20px] font-extrabold">₹28,500</div>
          </div>
          <div className="flex-1 rounded-[12px] bg-ink p-3.5 text-white">
            <div className="text-[12px] text-[#b7b0a4]">Highest Bid</div>
            <div className="mt-1 font-disp text-[20px] font-extrabold">₹32,000</div>
          </div>
        </div>
      </div>

      {/* Bid history */}
      <div>
        <h4 className="mb-3.5 text-[14px] font-bold">Bid History</h4>
        <div className="relative rounded-[14px] border border-line-soft bg-white p-4">
          <span className="absolute right-3.5 top-2.5 rounded-md bg-ink px-2.5 py-1 text-[12px] font-bold text-white">
            ₹23,500
          </span>
          <svg viewBox="0 0 400 170" preserveAspectRatio="none" className="h-[170px] w-full">
            <defs>
              <linearGradient id="hg" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0" stopColor="#e8543b" stopOpacity=".35" />
                <stop offset="1" stopColor="#e8543b" stopOpacity="0" />
              </linearGradient>
            </defs>
            <line x1="0" y1="30" x2="400" y2="30" stroke="#eee" />
            <line x1="0" y1="70" x2="400" y2="70" stroke="#eee" />
            <line x1="0" y1="110" x2="400" y2="110" stroke="#eee" />
            <line x1="0" y1="150" x2="400" y2="150" stroke="#eee" />
            <path
              d="M0 130 L70 120 L110 135 L160 95 L220 85 L300 55 L360 40 L400 25 L400 170 L0 170 Z"
              fill="url(#hg)"
            />
            <path
              d="M0 130 L70 120 L110 135 L160 95 L220 85 L300 55 L360 40 L400 25"
              fill="none"
              stroke="#e8543b"
              strokeWidth="2.5"
            />
            <circle cx="160" cy="95" r="4" fill="#e8543b" />
            <circle cx="220" cy="85" r="4" fill="#e8543b" />
            <circle cx="300" cy="55" r="4" fill="#e8543b" />
            <circle cx="400" cy="25" r="4.5" fill="#0c0b0a" />
          </svg>
          <div className="mt-1.5 flex justify-between px-1 text-[11px] text-stone-400">
            <span>10:00 AM</span>
            <span>10:00 PM</span>
            <span>02:00 PM</span>
            <span>Now</span>
          </div>
        </div>
        <div className="mt-2">
          {[
            { who: "Bidder ID", when: "2 mins ago", amt: 39500 },
            { who: "Bidder ID", when: "5 mins ago", amt: 32550 },
            { who: "Bidder ID", when: "7 mins ago", amt: 28550 },
            { who: "Bidder ID", when: "13 mins ago", amt: 38500 },
          ].map((r, i) => (
            <div
              key={i}
              className="flex items-center justify-between border-b border-line-soft py-3 text-[14px] last:border-b-0"
            >
              <span className="text-muted">{r.who}</span>
              <span className="text-stone-400">{r.when}</span>
              <span className="font-bold">{formatINR(r.amt)}</span>
            </div>
          ))}
        </div>
        <Link
          href="/dashboard/bids"
          className="mt-3.5 inline-block border-b-2 border-ink pb-0.5 text-[14px] font-bold"
        >
          View All Bids
        </Link>
      </div>

      {/* Seller */}
      <div>
        <h4 className="mb-4 text-[14px] font-bold">Seller Info</h4>
        <div className="mb-4 flex items-center gap-3">
          <div className="flex h-[46px] w-[46px] items-center justify-center rounded-full bg-ink font-disp font-extrabold text-white">
            SN
          </div>
          <div>
            <div className="flex items-center gap-1.5 font-bold">
              SneakerNation
              <Check className="h-3.5 w-3.5 text-hype-green-ink" strokeWidth={2.5} />
            </div>
            <div className="text-[12px] text-muted">2/1 ★ 126 waitlisted</div>
          </div>
        </div>
        <div className="mb-4 flex gap-5">
          {[
            { v: "98%", l: "Item Sold" },
            { v: "98%", l: "Positive Feedback" },
            { v: "17", l: "Pairings" },
          ].map((s) => (
            <div key={s.l}>
              <b className="block font-disp text-[22px] font-extrabold">{s.v}</b>
              <span className="text-[11px] text-muted">{s.l}</span>
            </div>
          ))}
        </div>
        <Button size="default" className="mb-5 w-full justify-center">
          View Profile
          <ArrowUpRight className="h-4 w-4" />
        </Button>
        <div className="mb-4">
          <h5 className="mb-3 text-[13px] font-bold">Seller Badge</h5>
          {[
            "Identity Authenticity",
            "Stocks 3Shipper v1",
            "Onipaid Lots Included",
            "Certified Settlements",
            "Buyer Price Shipping Res",
          ].map((b) => (
            <div key={b} className="flex items-center gap-2 py-1 text-[13px] text-muted">
              <Check className="h-4 w-4 flex-none text-hype-green-ink" strokeWidth={2.5} />
              {b}
            </div>
          ))}
        </div>
        <div>
          <h5 className="mb-3 text-[13px] font-bold">Shipping & Delivery</h5>
          {[
            "Ships to India",
            "3–8 delivery days",
            "Onipaid Lots Included",
            "Vr-verified Settlements",
            "Buyer Price Shipping Res",
          ].map((b) => (
            <div key={b} className="flex items-center gap-2 py-1 text-[13px] text-muted">
              <Truck className="h-4 w-4 flex-none text-hype-green-ink" strokeWidth={2.5} />
              {b}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export function PriceInsights() {
  return (
    <div className="mt-6 rounded-hype-lg border border-line-soft bg-white p-5 lg:col-span-1">
      <h5 className="mb-4 flex items-center gap-1.5 text-[14px] font-bold">Price Insights</h5>
      <div className="flex flex-wrap justify-between gap-5">
        <Stat label="Market" value="₹31,500" sub="Low: ₹19,550" />
        <Stat label="Hype Index" value="01" sub="▲ ₹233,600" />
        <Stat label="Average Sale Price" value="₹28,250" sub="Based on last 30 sales" />
      </div>
      <div className="mt-3.5 h-1 rounded-[3px] bg-gradient-to-r from-ink from-[60%] to-sand to-[60%]" />
      <div className="mt-1.5 flex justify-between text-[11px] text-stone-400">
        <span>19,350</span>
        <span>28,550</span>
        <span>2,3,460</span>
      </div>
    </div>
  );
}

function Stat({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div>
      <div className="text-[12px] text-muted">{label}</div>
      <b className="block font-disp text-[22px] font-extrabold tracking-tighter2">{value}</b>
      <span className="text-[12px] font-medium text-stone-400">{sub}</span>
    </div>
  );
}

export function RelatedAuctions({ auctions }: { auctions: Auction[] }) {
  return (
    <div className="mt-16">
      <h2 className="mb-9 text-center font-disp text-[48px] font-extrabold tracking-tighter2">
        You May Also Like
      </h2>
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {auctions.slice(0, 4).map((a) => (
          <div
            key={a.id}
            className="overflow-hidden rounded-[14px] border border-line-soft bg-cream"
          >
            <div
              className={cn(
                "relative flex aspect-[1/0.92] items-center justify-center",
                a.imageHue,
              )}
            >
              <span className="px-4 text-center font-disp text-[13px] font-bold text-white/80">
                {a.name}
              </span>
              {a.status === "live" && (
                <div className="absolute left-3 top-3">
                  <LiveBadge size="sm" />
                </div>
              )}
            </div>
            <div className="p-4">
              <div className="font-disp text-[16px] font-extrabold uppercase tracking-[0.02em]">
                {a.name}
              </div>
              <div className="my-3 font-disp text-[24px] font-extrabold">
                {formatINR(a.currentBid)}
              </div>
              <div className="mb-3.5 flex gap-4 text-[13px] text-muted">
                <span className="flex items-center gap-1.5">
                  <Eye className="h-3.5 w-3.5" /> {a.watchers}
                </span>
                <span className="flex items-center gap-1.5 text-hype-red">
                  <Award className="h-3.5 w-3.5" /> Ends soon
                </span>
              </div>
              <Button size="sm" className="w-full justify-center">
                Place Bid
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
