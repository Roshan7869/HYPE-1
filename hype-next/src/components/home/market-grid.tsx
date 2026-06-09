"use client";

import Link from "next/link";
import { Eye, ChevronDown, ArrowLeft, ArrowRight } from "lucide-react";
import type { Auction } from "@/types/auction";
import { Timer } from "@/components/shared/timer";
import { formatINR } from "@/lib/utils";
import { LiveBadge } from "@/components/shared/live-badge";

export function MarketGrid({ auctions }: { auctions: Auction[] }) {
  return (
    <section className="bg-ink py-8 pb-11 text-white">
      <div className="wrap flex flex-col items-stretch gap-0 md:flex-row md:items-end">
        <FilterCell label="Category" value="Sneakers" />
        <FilterCell label="Status" value="Live" />
        <FilterCell label="Price" value="Any" />
        <FilterCell label="Ending" value="Anytime" />
        <FilterCell label="Sort By" value="Ending Soon" />
        <div className="ml-auto flex gap-3">
          <button
            aria-label="prev"
            className="flex h-[42px] w-[42px] items-center justify-center rounded-full border-[1.5px] border-white/35 text-white transition-colors hover:bg-white/10"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <button
            aria-label="next"
            className="flex h-[42px] w-[42px] items-center justify-center rounded-full border-[1.5px] border-white/35 text-white transition-colors hover:bg-white/10"
          >
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="wrap mt-7 grid grid-cols-2 gap-[18px] sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {auctions.map((a) => (
          <MarketCard key={a.id} auction={a} />
        ))}
      </div>

      <div className="wrap mt-6">
        <div className="relative h-[3px] overflow-hidden rounded-[2px] bg-white/[0.16]">
          <div className="absolute left-0 top-0 h-full w-[34%] rounded-[2px] bg-cream" />
        </div>
      </div>
    </section>
  );
}

function FilterCell({ label, value }: { label: string; value: string }) {
  return (
    <div className="border-l border-white/[0.16] px-[30px] first:border-l-0 first:pl-0">
      <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-[#8c867b]">{label}</div>
      <div className="mt-1.5 flex items-center gap-2.5 font-disp text-[18px] font-extrabold tracking-[0.02em]">
        {value}
        <ChevronDown className="h-3 w-3 opacity-70" strokeWidth={2.5} />
      </div>
    </div>
  );
}

function MarketCard({ auction }: { auction: Auction }) {
  return (
    <Link href="/live-auctions" className="group flex flex-col">
      <div className="relative flex aspect-[1/0.92] items-center justify-center overflow-hidden rounded-[12px] bg-cream">
        <div
          className={`flex h-full w-full items-center justify-center ${auction.imageHue} bg-opacity-50`}
        >
          <span className="px-2.5 text-center font-disp text-[12px] font-bold tracking-[0.04em] text-stone-500">
            {auction.name}
          </span>
        </div>
        {auction.status === "live" && (
          <div className="absolute right-2.5 top-2.5">
            <LiveBadge size="sm" />
          </div>
        )}
      </div>
      <div className="mt-3.5 font-semibold text-[14px] text-white">{auction.name}</div>
      <div className="mt-2 flex items-center justify-between font-disp font-extrabold">
        <span className="text-[18px]">{formatINR(auction.currentBid)}</span>
        <Timer
          initialSeconds={auction.endsIn}
          className="text-[16px] text-hype-gold tabular-nums"
        />
      </div>
      <div className="mt-2.5 flex justify-between border-t border-white/13 pt-2.5 text-[11px] tracking-[0.04em] text-[#8c867b]">
        <span className="flex items-center gap-1">
          <Eye className="h-3 w-3" /> {auction.watchers} watching
        </span>
        <span>
          {auction.size} • {auction.condition}
        </span>
      </div>
    </Link>
  );
}
