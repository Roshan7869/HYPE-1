"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, Gavel, Clock, ChevronRight, Filter, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LiveBadge } from "@/components/shared/live-badge";
import { Timer } from "@/components/shared/timer";
import { SectionReveal } from "@/components/motion";
import { fadeUp, stagger, reduceMotion } from "@/lib/motion";
import { getAuctionSlug, getLiveAuctions, getUpcomingAuctions, getSoldAuctions } from "@/lib/mock-data";
import { cn, formatINR } from "@/lib/utils";
import type { Auction } from "@/types/auction";

type StatusFilter = "live" | "upcoming" | "sold";

const CATEGORIES = ["All", "Sneakers", "Streetwear", "Accessories", "Collectibles"];
const FILTERS = ["Ending Soon", "Newly Listed", "Most Bids", "Price: Low → High"];

const titleMap: Record<StatusFilter, { title: string; sub: string; count: string }> = {
  live: { title: "Bid on the drops", sub: "everybody wants.", count: "Live Now" },
  upcoming: { title: "Dropping soon.", sub: "Set your reminders.", count: "Upcoming" },
  sold: { title: "Recently sold.", sub: "See what moved.", count: "Recently Sold" },
};

export function LiveAuctionsView({
  status,
  items,
  featured,
  others,
}: {
  status: StatusFilter;
  items: Auction[];
  featured: Auction | null;
  others: Auction[];
}) {
  const t = titleMap[status];

  return (
    <main className="flex-1 bg-sand">
      <SectionReveal>
        <section className="bg-cream-2 py-14">
          <div className="wrap">
            <motion.div
              initial={{ opacity: 0, x: -12 }}
              animate={{ opacity: 1, x: 0 }}
              transition={reduceMotion({ duration: 0.4, ease: [0.16, 1, 0.3, 1] })}
              className="flex items-center gap-3 text-[12px] font-bold uppercase tracking-[0.18em] text-muted"
            >
              {status === "live" ? (
                <>
                  <LiveBadge size="sm" />
                  <span className="ml-1">{t.count} — {items.length} active auctions</span>
                </>
              ) : (
                <span>{t.count} — {items.length} items</span>
              )}
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduceMotion({ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.05 })}
              className="mt-3 font-disp text-[56px] font-extrabold leading-[0.95] tracking-tighter2"
            >
              {t.title}<br />
              <span className="text-muted-2">{t.sub}</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={reduceMotion({ duration: 0.5, ease: [0.16, 1, 0.3, 1], delay: 0.12 })}
              className="mt-3 max-w-xl text-[15px] text-muted"
            >
              Every item authenticated by HYPE. Real-time bidding. Sealed and shipped only after payment clears.
            </motion.p>
            <div className="mt-6 flex gap-2">
              {(["live", "upcoming", "sold"] as const).map((s) => {
                const labels: Record<StatusFilter, string> = { live: "Live Now", upcoming: "Upcoming", sold: "Sold" };
                const isActive = status === s;
                return (
                  <Link
                    key={s}
                    href={s === "live" ? "/live-auctions" : `/live-auctions?status=${s}`}
                    className={cn(
                      "flex h-10 items-center gap-2 rounded-full px-5 text-[13px] font-semibold transition-all duration-200",
                      isActive
                        ? "bg-ink text-white"
                        : "border border-line bg-white text-ink hover:border-ink",
                    )}
                  >
                    {labels[s]}
                    <span
                      className={cn(
                        "flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-[11px] font-bold",
                        isActive ? "bg-white/15 text-white" : "bg-cream-2 text-muted",
                      )}
                    >
                      {s === "live"
                        ? getLiveAuctions().length
                        : s === "upcoming"
                          ? getUpcomingAuctions().length
                          : getSoldAuctions().length}
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      </SectionReveal>

      <section className="sticky top-[88px] z-30 border-b border-line bg-white/95 backdrop-blur">
        <div className="wrap flex items-center gap-3 overflow-x-auto py-3.5">
          <div className="flex items-center gap-2 pr-3 text-[13px] font-semibold text-ink">
            <Filter className="h-4 w-4" /> Filter
          </div>
          {CATEGORIES.map((c, i) => (
            <button
              key={c}
              className={cn(
                "flex h-9 items-center rounded-full px-4 text-[13px] font-semibold transition-colors",
                i === 0 ? "bg-ink text-white" : "border border-line bg-white text-ink hover:border-ink",
              )}
            >
              {c}
            </button>
          ))}
          <div className="ml-auto hidden items-center gap-2 md:flex">
            {FILTERS.map((f, i) => (
              <button
                key={f}
                className={cn(
                  "flex h-9 items-center rounded-full px-4 text-[13px] font-medium transition-colors",
                  i === 0 ? "border border-ink bg-ink/5 text-ink" : "text-muted hover:text-ink",
                )}
              >
                {f}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div className="wrap py-10 pb-20">
        {items.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduceMotion({ duration: 0.4 })}
            className="rounded-hype-lg border border-dashed border-line bg-cream-2 p-16 text-center"
          >
            <Gavel className="mx-auto h-10 w-10 text-muted-2" strokeWidth={1.4} />
            <p className="mt-3 font-disp text-[22px] font-extrabold">
              No {status} items right now
            </p>
            <p className="mt-1 text-[14px] text-muted">Check back soon — new drops every day.</p>
            <Link
              href="/live-auctions"
              className="mt-5 inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-[14px] font-bold text-white hover:bg-black"
            >
              View Live Auctions
            </Link>
          </motion.div>
        ) : (
          <>
            {featured && (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={reduceMotion({ duration: 0.55, ease: [0.16, 1, 0.3, 1] })}
                className="mb-12"
              >
                <Link
                  href={`/live-auctions/${getAuctionSlug(featured)}`}
                  className="group grid grid-cols-1 overflow-hidden rounded-[20px] border border-line-soft bg-white transition-all hover:border-ink lg:grid-cols-[1.1fr_1fr]"
                >
                  <div
                    className="relative flex aspect-[16/10] items-center justify-center lg:aspect-auto"
                    style={{ background: "linear-gradient(135deg,#1b2a55,#2f6bd6 35%,#a9c6ff 60%,#d98bd0 85%,#7a3f8f)" }}
                  >
                    <span className="px-6 text-center font-disp text-[28px] font-extrabold text-white/90">
                      {featured.name}
                    </span>
                    {status === "live" && (
                      <div className="absolute left-4 top-4">
                        <LiveBadge size="md" />
                      </div>
                    )}
                    <div className="absolute right-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-ink">
                      Featured
                    </div>
                  </div>
                  <div className="flex flex-col justify-center p-8">
                    <div className="text-[12px] font-bold uppercase tracking-[0.18em] text-muted">
                      {featured.brand} · {featured.category}
                    </div>
                    <h2 className="mt-2 font-disp text-[36px] font-extrabold leading-tight tracking-tighter2">
                      {featured.name}
                    </h2>
                    <div className="mt-3 flex items-center gap-2 text-[13px] text-muted">
                      <Award className="h-3.5 w-3.5 text-emerald-600" />
                      Authenticated · Size {featured.size} · {featured.condition}
                    </div>
                    <div className="mt-6 flex items-end justify-between">
                      <div>
                        <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
                          {status === "sold" ? "Sold For" : "Current Bid"}
                        </div>
                        <div className="font-disp text-[40px] font-extrabold leading-none tracking-tighter2">
                          {formatINR(featured.currentBid)}
                        </div>
                      </div>
                      {status === "live" && (
                        <div className="text-right">
                          <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
                            Ends In
                          </div>
                          <div className="font-disp text-[22px] font-extrabold leading-none tracking-tighter2">
                            <Timer initialSeconds={featured.endsIn} variant="card" />
                          </div>
                        </div>
                      )}
                    </div>
                    <div className="mt-7 flex items-center gap-3">
                      <span className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-7 text-[14px] font-bold text-white group-hover:bg-black">
                        {status === "live" ? (
                          <>Place Bid <ChevronRight className="h-4 w-4" /></>
                        ) : status === "upcoming" ? (
                          <>View Details <ChevronRight className="h-4 w-4" /></>
                        ) : (
                          <>View Sale <ChevronRight className="h-4 w-4" /></>
                        )}
                      </span>
                      <span className="text-[13px] text-muted">{featured.watchers} watching</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            )}

            <div className="mb-6 flex items-end justify-between">
              <h3 className="font-disp text-[28px] font-extrabold tracking-tighter2">
                {status === "live" ? "All live drops" : status === "upcoming" ? "Coming up" : "Past sales"}
              </h3>
              <div className="text-[13px] text-muted">
                Showing {others.length} of {items.length} {status}
              </div>
            </div>

            <motion.div
              className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4"
              variants={stagger(0.06, 0.08)}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-40px" }}
            >
              {others.map((a) => (
                <motion.div
                  key={a.id}
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={reduceMotion({ duration: 0.25, ease: [0.16, 1, 0.3, 1] })}
                >
                  <Link
                    href={`/live-auctions/${getAuctionSlug(a)}`}
                    className="group block h-full overflow-hidden rounded-[14px] border border-line-soft bg-cream transition-colors hover:border-ink"
                  >
                    <div className={cn("relative flex aspect-[1/0.92] items-center justify-center", a.imageHue)}>
                      <span className="px-4 text-center font-disp text-[14px] font-bold text-white/85">
                        {a.name}
                      </span>
                      {status === "live" && (
                        <div className="absolute left-3 top-3">
                          <LiveBadge size="sm" />
                        </div>
                      )}
                      {status === "upcoming" && (
                        <div className="absolute left-3 top-3 flex h-6 items-center gap-1 rounded-full bg-amber-500 px-2 text-[10px] font-bold uppercase tracking-[0.14em] text-white">
                          Soon
                        </div>
                      )}
                      {status === "live" && (
                        <div className="absolute right-3 top-3 flex h-7 items-center gap-1 rounded-full bg-black/60 px-2.5 text-[11px] font-semibold text-white">
                          <Clock className="h-3 w-3" /> <Timer initialSeconds={a.endsIn} variant="inline" />
                        </div>
                      )}
                    </div>
                    <div className="p-4">
                      <div className="font-disp text-[15px] font-extrabold uppercase tracking-[0.02em]">
                        {a.name}
                      </div>
                      <div className="my-3 flex items-end justify-between">
                        <div className="font-disp text-[22px] font-extrabold leading-none">
                          {formatINR(a.currentBid)}
                        </div>
                        {status === "live" && (
                          <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
                            Min {formatINR(a.minIncrement)}
                          </div>
                        )}
                      </div>
                      <div className="mb-3.5 flex items-center gap-4 text-[12px] text-muted">
                        <span className="flex items-center gap-1.5">
                          <Eye className="h-3.5 w-3.5" /> {a.watchers} watching
                        </span>
                        {status === "live" && (
                          <span className="flex items-center gap-1.5 text-hype-red">
                            <Gavel className="h-3.5 w-3.5" /> Live
                          </span>
                        )}
                      </div>
                      <Button size="sm" className="w-full justify-center">
                        {status === "live" ? "Place Bid" : status === "upcoming" ? "Notify Me" : "View Sale"}
                      </Button>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </motion.div>
          </>
        )}
      </div>
    </main>
  );
}
