"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ChevronRight, Sparkles, ShieldCheck } from "lucide-react";
import { ListingStepper, BackLink } from "@/components/dashboard/listing-stepper";
import { fadeUp, dur, ease, reduceMotion, stagger } from "@/lib/motion";

const CONDITIONS = [
  {
    id: "new",
    label: "New / Deadstock",
    desc: "Brand new, never worn, with original box and tags. Highest sale price.",
    examples: ["DS (Deadstock)", "Brand New", "VNDS (Very Near Deadstock)"],
    multiplier: "1.0x",
  },
  {
    id: "like-new",
    label: "Like New / Excellent",
    desc: "Worn once or twice with no visible flaws. Original packaging included.",
    examples: ["Excellent condition", "Like new", "Lightly tried"],
    multiplier: "0.85x",
  },
  {
    id: "good",
    label: "Good / Gently Used",
    desc: "Worn with minor signs of wear, fully functional. No major creases or damage.",
    examples: ["Gently used", "Good condition"],
    multiplier: "0.7x",
  },
  {
    id: "fair",
    label: "Fair / Worn",
    desc: "Visible wear, scuffs, or sole creases. Still wearable and authentic.",
    examples: ["Worn", "Fair condition"],
    multiplier: "0.55x",
  },
];

export default function CreateListingConditionPage() {
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
        <p className="mt-2 text-[18px] text-muted">Tell buyers about the condition — be honest, builds trust.</p>
      </div>

      <BackLink href="/dashboard/listings/new/size">Back to Size</BackLink>

      <ListingStepper
        steps={[
          { label: "Product", done: true },
          { label: "Details", done: true },
          { label: "Size", done: true },
          { label: "Condition", current: true },
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
              4
            </div>
            <div>
              <h2 className="font-disp text-[24px] font-extrabold leading-tight tracking-tighter2">
                Item Condition
              </h2>
              <p className="mt-1 text-[15px] text-muted">
                Choose the condition that best matches your item. Buyers filter by condition.
              </p>
            </div>
          </motion.div>

          <motion.div
            className="space-y-3"
            variants={stagger(0.08, 0.05)}
            initial="hidden"
            animate="show"
          >
            {CONDITIONS.map((c) => (
              <motion.button
                key={c.id}
                variants={fadeUp}
                whileHover={{ x: 4 }}
                whileTap={{ scale: 0.99 }}
                onClick={() => {
                  // would update listing state
                }}
                className="group block w-full rounded-[14px] border-[1.5px] border-line-soft bg-white p-5 text-left transition-colors hover:border-ink"
              >
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-cream-3 text-ink transition-colors group-hover:bg-ink group-hover:text-white">
                    <Sparkles className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <b className="text-[16px] font-bold text-ink">{c.label}</b>
                      <span className="rounded bg-ink/5 px-2 py-0.5 text-[11px] font-bold text-ink">
                        Avg {c.multiplier}
                      </span>
                    </div>
                    <p className="mt-1 text-[14px] text-muted">{c.desc}</p>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {c.examples.map((ex) => (
                        <span key={ex} className="rounded bg-cream-3 px-2 py-0.5 text-[11px] font-semibold text-muted">
                          {ex}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ChevronRight className="h-4 w-4 text-[#b8afa0] transition-transform group-hover:translate-x-1" strokeWidth={2.5} />
                </div>
              </motion.button>
            ))}
          </motion.div>

          <div className="mt-7.5 flex items-center justify-between">
            <Link
              href="/dashboard/listings/new/size"
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
                href="/dashboard/listings/new/photos"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-7 text-[14px] font-bold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-black"
              >
                Next: Photos
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>

        <aside className="self-start rounded-[16px] border border-line-soft bg-[#e9e1d4] p-5">
          <div className="mb-3 flex items-center gap-2.5 text-[15px] font-bold">
            <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-ink text-[13px] font-bold text-white">
              <ShieldCheck className="h-3.5 w-3.5" />
            </span>
            HYPE Authenticity Promise
          </div>
          <p className="text-[14px] leading-[1.5] text-[#6f6a60]">
            Every item is inspected by our authentication team. Items that fail our check are
            returned to the seller at no cost to you. HYPE will never list counterfeit goods.
          </p>
        </aside>
      </div>
    </motion.div>
  );
}
