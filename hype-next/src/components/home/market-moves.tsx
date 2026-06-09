"use client";

import Link from "next/link";
import { Zap, ArrowRight } from "lucide-react";
import { MARKET_MOVES } from "@/lib/constants";

export function MarketMoves() {
  return (
    <section className="border-t border-line bg-cream py-[22px]">
      <div className="wrap flex items-center gap-5 overflow-hidden text-[14px]">
        <span className="flex flex-none items-center gap-2.5 font-disp text-[14px] font-extrabold uppercase tracking-[0.06em]">
          <Zap className="h-4 w-4 text-hype-gold" fill="currentColor" />
          Market Moves
        </span>
        <div className="scrollbar-hide flex flex-1 items-center gap-[18px] overflow-x-auto whitespace-nowrap text-[#4f4a40]">
          {MARKET_MOVES.map((m, i) => (
            <span key={i} className="flex items-center gap-[18px]">
              <span>{m}</span>
              {i < MARKET_MOVES.length - 1 && <span className="opacity-40">•</span>}
            </span>
          ))}
        </div>
        <Link
          href="/live-auctions"
          className="flex flex-none items-center gap-2.5 border-l border-line pl-6 font-disp text-[13px] font-extrabold uppercase tracking-[0.08em] text-ink transition-colors hover:text-hype-gold"
        >
          View Market
          <ArrowRight className="h-3.5 w-[22px]" strokeWidth={1.8} />
        </Link>
      </div>
    </section>
  );
}
