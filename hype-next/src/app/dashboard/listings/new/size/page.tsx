"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Box } from "lucide-react";
import { ListingStepper, BackLink } from "@/components/dashboard/listing-stepper";
import { fadeUp, dur, ease, reduceMotion, stagger } from "@/lib/motion";
import { cn } from "@/lib/utils";

const SIZE_TABS = ["US W", "US M", "UK"];

const SIZES = [
  { s: "5",   ask: "₹5,700", bid: null },
  { s: "5.5", ask: "₹5,700", bid: "₹4,800" },
  { s: "6",   ask: "₹5,350", bid: "₹4,500" },
  { s: "6.5", ask: "₹5,350", bid: "₹4,500" },
  { s: "7",   ask: "₹950",   bid: null },
  { s: "7.5", ask: "₹4,300", bid: "₹3,600" },
  { s: "8",   ask: "₹5,900", bid: "₹4,950" },
  { s: "8.5", ask: "₹7,100", bid: "₹5,800" },
  { s: "9",   ask: "₹6,700", bid: "₹5,400" },
  { s: "9.5", ask: "₹5,900", bid: "₹4,700" },
  { s: "10",  ask: "₹6,200", bid: "₹5,100" },
  { s: "10.5", ask: "₹6,500", bid: null },
  { s: "11",  ask: "₹6,800", bid: null },
  { s: "11.5", ask: "₹7,000", bid: null },
  { s: "12",  ask: "₹7,200", bid: null },
  { s: "12.5", ask: "₹7,500", bid: null },
  { s: "13",  ask: "₹7,800", bid: null },
] as const;

export default function CreateListingSizePage() {
  const [tab, setTab] = useState("US W");
  const [selected, setSelected] = useState<string | null>("9");

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={reduceMotion({ duration: dur.base, ease: ease.out })}
    >
      <div className="dash-head">
        <h1 className="font-disp text-[48px] font-extrabold leading-[1.02] tracking-tighter2">
          List Your Next Drop
        </h1>
        <p className="mt-2 text-[18px] text-muted">Pick the size for your item — see live market demand.</p>
      </div>

      <BackLink href="/dashboard/listings/new/details">Back to Details</BackLink>

      <ListingStepper
        steps={[
          { label: "Product", done: true },
          { label: "Details", done: true },
          { label: "Size", current: true },
          { label: "Condition" },
          { label: "Photos" },
          { label: "Pricing" },
          { label: "Review" },
        ]}
      />

      <div className="grid grid-cols-1 gap-[30px] rounded-hype-lg bg-cream p-9 lg:grid-cols-[1fr_290px]">
        <div>
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-6 flex items-start gap-4"
          >
            <div className="mt-0.5 flex h-[34px] w-[34px] flex-none items-center justify-center rounded-full bg-ink font-disp text-[15px] font-extrabold text-white">
              3
            </div>
            <div>
              <h2 className="font-disp text-[24px] font-extrabold leading-tight tracking-tighter2">
                Select Size
              </h2>
              <p className="mt-1 text-[15px] text-muted">
                Choose the size you will be listing. We show live ASK and BID prices so you can price competitively.
              </p>
            </div>
          </motion.div>

          <div className="mb-6 flex flex-wrap items-center gap-2">
            {SIZE_TABS.map((t) => (
              <button
                key={t}
                onClick={() => setTab(t)}
                className={cn(
                  "relative rounded-full px-5 py-2 text-[14px] font-semibold transition-colors",
                  tab === t ? "text-white" : "text-muted hover:text-ink",
                )}
              >
                {tab === t && (
                  <motion.span
                    layoutId="size-tab-bg"
                    className="absolute inset-0 rounded-full bg-ink"
                    transition={reduceMotion({ type: "spring", stiffness: 380, damping: 30 })}
                  />
                )}
                <span className="relative z-10">{t}</span>
              </button>
            ))}
          </div>

          <motion.div
            key={tab}
            initial="hidden"
            animate="show"
            variants={stagger(0.025)}
            className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-5"
          >
            {SIZES.map(({ s, ask, bid }) => {
              const isSelected = selected === s;
              return (
                <motion.button
                  key={s}
                  variants={fadeUp}
                  whileHover={{ y: -3 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => setSelected(s)}
                  className={cn(
                    "relative rounded-[12px] border-[1.5px] bg-white p-4 text-left transition-colors",
                    isSelected ? "border-ink shadow-md" : "border-line-soft hover:border-ink/50",
                  )}
                >
                  <b className="block text-[16px] font-bold text-ink">{s}</b>
                  <div className="mt-1.5 flex flex-col gap-0.5">
                    {ask ? (
                      <span className="text-[12px] font-semibold text-hype-green-ink">
                        Ask {ask}
                      </span>
                    ) : (
                      <span className="text-[12px] text-muted-2">Ask —</span>
                    )}
                    {bid ? (
                      <span className="text-[12px] text-ink">Bid {bid}</span>
                    ) : (
                      <span className="text-[12px] text-muted-2">Bid —</span>
                    )}
                  </div>
                  {isSelected && (
                    <motion.span
                      layoutId="size-check"
                      className="absolute right-2 top-2 flex h-5 w-5 items-center justify-center rounded-full bg-ink text-white"
                      transition={reduceMotion({ type: "spring", stiffness: 500, damping: 30 })}
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                        <path d="M2 5L4 7L8 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.span>
                  )}
                </motion.button>
              );
            })}
          </motion.div>

          <div className="mt-7.5 flex items-center justify-between">
            <Link
              href="/dashboard/listings/new/details"
              className="inline-flex h-12 items-center rounded-full border-[1.5px] border-ink px-7 text-[14px] font-bold text-ink transition-all duration-200 hover:scale-[1.02] hover:bg-ink hover:text-white"
            >
              Back
            </Link>
            <div className="flex items-center gap-2">
              <Link
                href="/dashboard/listings"
                className="inline-flex h-12 items-center rounded-full border-[1.5px] border-ink px-6 text-[14px] font-bold text-ink transition-all duration-200 hover:scale-[1.02] hover:bg-ink hover:text-white"
              >
                Save as Draft
              </Link>
              <Link
                href="/dashboard/listings/new/condition"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-7 text-[14px] font-bold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-black"
              >
                Next: Condition
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <aside className="self-start rounded-[16px] border border-line-soft bg-[#e9e1d4] p-5">
          <div className="mb-3 flex items-center gap-2.5 text-[15px] font-bold">
            <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-ink text-[13px] font-bold text-white">
              <Box className="h-3.5 w-3.5" />
            </span>
            Why this matters
          </div>
          <p className="text-[14px] leading-[1.5] text-[#6f6a60]">
            Live ASK and BID prices help you set a competitive listing price. Sizes with active bids
            typically sell 40% faster.
          </p>
        </aside>
      </div>
    </motion.div>
  );
}
