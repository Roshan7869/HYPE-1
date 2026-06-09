"use client";

import Link from "next/link";
import { ArrowUpRight, Bookmark } from "lucide-react";
import { motion } from "framer-motion";
import { Timer } from "@/components/shared/timer";
import { Parallax } from "@/components/shared/parallax";

/**
 * Hero section with the iconic "Bid. Win. Repeat." headline,
 * a 3D-feeling shoe illustration, and a live auction card.
 */
export function Hero() {
  return (
    <section className="relative overflow-hidden bg-sand-hero">
      <div className="wrap relative grid items-center gap-6 py-[60px] md:grid-cols-[1.15fr_0.95fr_0.9fr]">
        {/* Left: Headline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="font-disp text-[64px] font-extrabold uppercase leading-[0.84] tracking-tightest md:text-[clamp(64px,7.4vw,116px)]">
            Bid.
            <br />
            Win.
            <br />
            Repeat.
          </h1>
          <p className="mt-[26px] max-w-[340px] text-[19px] leading-[1.45] text-[#4f4a40]">
            India&apos;s first live auction marketplace for hype culture.
          </p>
          <div className="mt-[30px] flex flex-wrap gap-3.5">
            <Link
              href="/live-auctions"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-ink px-[30px] text-[15px] font-semibold tracking-[0.04em] text-white transition-colors hover:bg-black"
            >
              Browse Auctions
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
            </Link>
            <Link
              href="/sell-with-us"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border-[1.5px] border-ink px-[30px] text-[15px] font-semibold tracking-[0.04em] text-ink transition-colors hover:bg-ink hover:text-white"
            >
              Sell With Us
            </Link>
          </div>
        </motion.div>

        {/* Middle: Shoe art */}
        <div className="relative flex h-[520px] items-end justify-center">
          <Parallax offset={20}>
            <div className="hero-rock" />
            <div className="hero-shoe">
              AIR&nbsp;JORDAN&nbsp;1
              <br />
              MOCHA
            </div>
          </Parallax>
        </div>

        {/* Right: Live auction card */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="pl-1.5"
        >
          <span className="inline-flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.14em] text-[#3a352c]">
            <span className="h-2 w-2 rounded-full bg-hype-red" />
            Live Auction
          </span>
          <h2 className="mb-5 mt-3.5 font-disp text-[34px] font-extrabold uppercase leading-[0.98] tracking-tighter2">
            Air Jordan 1
            <br />
            Retro High OG &apos;Mocha&apos;
          </h2>
          <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
            Current Bid
          </div>
          <div className="mt-1 flex items-start gap-2">
            <b className="font-disp text-[50px] font-extrabold leading-none tracking-tighter2">
              ₹18,500
            </b>
            <ArrowUpRight className="mt-2 h-5 w-5" strokeWidth={2} />
          </div>
          <div className="mt-0.5 font-semibold text-hype-gold">+ ₹300</div>

          <div className="mt-5">
            <div className="text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
              Ends In
            </div>
            <Timer initialSeconds={7533} variant="hero" className="mt-1.5" />
            <div className="mt-1 flex gap-9 text-[11px] font-semibold uppercase tracking-[0.16em] text-muted">
              <span>HR</span>
              <span>MIN</span>
              <span>SEC</span>
            </div>
          </div>

          <div className="mt-6 flex gap-3">
            <Link
              href="/live-auctions"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-ink px-[30px] text-[15px] font-semibold tracking-[0.04em] text-white transition-colors hover:bg-black"
            >
              Place Bid
              <ArrowUpRight className="h-4 w-4" strokeWidth={2.2} />
            </Link>
            <button
              aria-label="save"
              className="flex h-[52px] w-[52px] items-center justify-center rounded-[13px] border-[1.5px] border-ink transition-colors hover:bg-ink hover:text-white"
            >
              <Bookmark className="h-5 w-5" strokeWidth={2} />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
