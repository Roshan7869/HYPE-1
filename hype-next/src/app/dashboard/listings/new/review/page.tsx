"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { CheckCircle2, Tag, Sparkles } from "lucide-react";
import { ListingStepper, BackLink } from "@/components/dashboard/listing-stepper";
import { fadeUp, dur, ease, reduceMotion, stagger } from "@/lib/motion";

const REVIEW_ROWS = [
  { label: "Product", value: "Air Jordan 1 Chicago Lost & Found" },
  { label: "Size", value: "US 9 (UK 8 / EU 42.5)" },
  { label: "Condition", value: "Like New / Excellent" },
  { label: "Photos", value: "12 uploaded" },
  { label: "Pricing", value: "Auction · Starting ₹32,000 · 7 days" },
  { label: "Payout estimate", value: "₹27,360 (after 8% commission)" },
];

export default function CreateListingReviewPage() {
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
        <p className="mt-2 text-[18px] text-muted">One last look — then your item goes live.</p>
      </div>

      <BackLink href="/dashboard/listings/new/pricing">Back to Pricing</BackLink>

      <ListingStepper
        steps={[
          { label: "Product", done: true },
          { label: "Details", done: true },
          { label: "Size", done: true },
          { label: "Condition", done: true },
          { label: "Photos", done: true },
          { label: "Pricing", done: true },
          { label: "Review", current: true },
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
              7
            </div>
            <div>
              <h2 className="font-disp text-[24px] font-extrabold leading-tight tracking-tighter2">
                Review Your Listing
              </h2>
              <p className="mt-1 text-[15px] text-muted">
                Everything looks good? Publish to make your listing live.
              </p>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mb-6 grid grid-cols-1 gap-4 rounded-[16px] border border-line-soft bg-white p-6 md:grid-cols-[140px_1fr]"
          >
            <div className="flex aspect-square items-center justify-center rounded-[12px] bg-[linear-gradient(150deg,#dfe3e8,#c2b9ac)] font-disp text-[14px] font-bold text-black/40">
              Photo
            </div>
            <div>
              <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-hype-gold">Preview</p>
              <h3 className="mt-1 font-disp text-[22px] font-extrabold leading-tight tracking-tighter2 text-ink">
                Air Jordan 1 Chicago Lost & Found
              </h3>
              <p className="mt-1 text-[14px] text-muted">US 9 · Like New · 12 photos</p>
              <p className="mt-3 text-[24px] font-extrabold text-ink">₹32,000</p>
              <span className="mt-2 inline-flex items-center gap-1.5 rounded-full bg-ink px-3 py-1 text-[11px] font-bold text-white">
                <Tag className="h-3 w-3" /> Auction · 7 days
              </span>
            </div>
          </motion.div>

          <motion.div
            variants={stagger(0.05, 0.1)}
            initial="hidden"
            animate="show"
            className="rounded-[16px] border border-line-soft bg-white p-6"
          >
            <h3 className="mb-3 font-disp text-[15px] font-extrabold uppercase tracking-[0.12em] text-ink">
              Listing summary
            </h3>
            <div className="divide-y divide-line-soft">
              {REVIEW_ROWS.map((r) => (
                <motion.div key={r.label} variants={fadeUp} className="flex items-center justify-between gap-3 py-3 text-[14px]">
                  <span className="text-muted">{r.label}</span>
                  <span className="font-semibold text-ink">{r.value}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.label
            variants={fadeUp}
            initial="hidden"
            animate="show"
            className="mt-6 flex cursor-pointer items-start gap-3 rounded-[12px] border border-line-soft bg-white p-4 text-[14px] text-ink"
          >
            <input type="checkbox" className="mt-0.5 h-4 w-4 flex-none accent-ink" />
            <span>
              I confirm this item is <b>100% authentic</b> and I agree to HYPE&apos;s{" "}
              <Link href="/terms" className="font-bold underline">Terms of Service</Link> and{" "}
              <Link href="/privacy" className="font-bold underline">Privacy Policy</Link>. I understand
              that counterfeit items will be removed and may result in account suspension.
            </span>
          </motion.label>

          <div className="mt-7.5 flex items-center justify-between">
            <Link
              href="/dashboard/listings/new/pricing"
              className="inline-flex h-12 items-center rounded-full border-[1.5px] border-ink px-7 text-[14px] font-bold text-ink transition-all duration-200 hover:scale-[1.02] hover:bg-ink hover:text-white"
            >
              Back
            </Link>
            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex h-12 items-center gap-2 rounded-full bg-emerald-600 px-8 text-[14px] font-bold text-white transition-colors hover:bg-emerald-700"
            >
              <CheckCircle2 className="h-4 w-4" />
              Publish Listing
            </motion.button>
          </div>
        </div>

        <aside className="self-start rounded-[16px] border border-line-soft bg-[#e9e1d4] p-5">
          <div className="mb-3 flex items-center gap-2.5 text-[15px] font-bold">
            <span className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-ink text-[13px] font-bold text-white">
              <Sparkles className="h-3.5 w-3.5" />
            </span>
            What happens next
          </div>
          <ol className="space-y-2.5 text-[14px] leading-[1.5] text-[#6f6a60]">
            <li>1. Your listing is reviewed within 30 minutes</li>
            <li>2. We pick up your item (free)</li>
            <li>3. Our auth team verifies (1–2 days)</li>
            <li>4. Item goes live · bidders see it</li>
            <li>5. Auction ends · you get paid out</li>
          </ol>
        </aside>
      </div>
    </motion.div>
  );
}
