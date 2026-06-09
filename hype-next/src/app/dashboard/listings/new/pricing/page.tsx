"use client";

import { useState } from "react";
import {
  Tag,
  Gavel,
  Calendar,
  TrendingUp,
  Info,
  CheckCircle2,
  Sparkles,
  ShieldCheck,
  Truck,
  CircleDollarSign,
} from "lucide-react";
import { cn, formatINR } from "@/lib/utils";
import { ListingStepper, BackLink } from "@/components/dashboard/listing-stepper";

type Mode = "fixed" | "auction";

export default function CreateListingPricingPage() {
  const [mode, setMode] = useState<Mode>("fixed");
  const [price, setPrice] = useState("25000");
  const [reserve, setReserve] = useState("22500");
  const [buyNow, setBuyNow] = useState("32000");
  const [duration, setDuration] = useState<"3" | "5" | "7" | "10">("7");
  const [startPrice, setStartPrice] = useState("18500");

  const numericPrice = Number(price.replace(/[^0-9]/g, "")) || 0;
  const commission = Math.round(numericPrice * 0.08);
  const shipping = 0;
  const payout = numericPrice - commission - shipping;

  return (
    <div>
      <div className="dash-head">
        <h1 className="font-disp text-[48px] font-extrabold leading-[1.02] tracking-tighter2">
          List Your Next Drop
        </h1>
        <p className="mt-2 text-[18px] text-muted">Start by searching the product you want to sell.</p>
      </div>

      <BackLink href="/dashboard/listings/new/photos">Back</BackLink>

      <ListingStepper
        steps={[
          { label: "Product", done: true },
          { label: "Details", done: true },
          { label: "Condition", done: true },
          { label: "Photos", done: true },
          { label: "Pricing", current: true },
          { label: "Review" },
        ]}
      />

      <div className="grid grid-cols-1 gap-[30px] rounded-hype-lg bg-cream p-9 lg:grid-cols-[1fr_320px]">
        <div>
          <div className="mb-6 flex items-start gap-4">
            <div className="mt-0.5 flex h-[34px] w-[34px] flex-none items-center justify-center rounded-full bg-ink font-disp text-[15px] font-extrabold text-white">
              5
            </div>
            <div>
              <h2 className="font-disp text-[24px] font-extrabold leading-tight tracking-tighter2">
                Set Your Price
              </h2>
              <p className="mt-1 text-[15px] text-muted">
                Choose how you want to sell — instant or via auction.
              </p>
            </div>
          </div>

          {/* Mode toggle */}
          <div className="mb-6 grid grid-cols-2 gap-3">
            <ModeCard
              active={mode === "fixed"}
              onClick={() => setMode("fixed")}
              icon={Tag}
              title="Fixed Price"
              desc="Set a price and sell instantly. Buyer purchases at the listed amount."
              perks={["Sell instantly", "No bidding window", "Best for in-demand items"]}
            />
            <ModeCard
              active={mode === "auction"}
              onClick={() => setMode("auction")}
              icon={Gavel}
              title="Auction"
              desc="Let buyers compete. Highest bid at auction end wins."
              perks={["Drives urgency", "Often above market", "Best for rare items"]}
            />
          </div>

          {/* Price form */}
          {mode === "fixed" ? (
            <div className="rounded-[18px] border border-line-soft bg-white p-6">
              <h3 className="font-disp text-[18px] font-extrabold">Price</h3>
              <p className="mt-1 text-[14px] text-muted">
                Set a competitive price. You can always edit it later.
              </p>
              <div className="mt-5 max-w-md">
                <label className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.18em] text-ink">
                  Asking Price
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[16px] font-bold text-muted">
                    ₹
                  </span>
                  <input
                    value={price}
                    onChange={(e) => setPrice(e.target.value.replace(/[^0-9]/g, ""))}
                    inputMode="numeric"
                    className="h-12 w-full rounded-[12px] border border-line bg-cream-2 pl-9 pr-4 font-disp text-[18px] font-extrabold outline-none focus:border-ink focus:ring-2 focus:ring-ink/10"
                  />
                </div>
                <div className="mt-2 flex items-center gap-2 text-[12px] text-muted">
                  <TrendingUp className="h-3.5 w-3.5" />
                  Suggested range for this item: <b className="text-ink">₹22,000 – ₹26,000</b>
                </div>
              </div>
            </div>
          ) : (
            <div className="space-y-5">
              <div className="rounded-[18px] border border-line-soft bg-white p-6">
                <h3 className="font-disp text-[18px] font-extrabold">Starting Price</h3>
                <p className="mt-1 text-[14px] text-muted">
                  First bid must be at least this amount. Lower start prices attract more bidders.
                </p>
                <div className="mt-5 max-w-md">
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[16px] font-bold text-muted">
                      ₹
                    </span>
                    <input
                      value={startPrice}
                      onChange={(e) => setStartPrice(e.target.value.replace(/[^0-9]/g, ""))}
                      inputMode="numeric"
                      className="h-12 w-full rounded-[12px] border border-line bg-cream-2 pl-9 pr-4 font-disp text-[18px] font-extrabold outline-none focus:border-ink focus:ring-2 focus:ring-ink/10"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-[18px] border border-line-soft bg-white p-6">
                <h3 className="font-disp text-[18px] font-extrabold">Duration</h3>
                <p className="mt-1 text-[14px] text-muted">
                  How long should the auction run? Most sneakers sell in 5–7 days.
                </p>
                <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {(
                    [
                      { v: "3", l: "3 days", s: "Express" },
                      { v: "5", l: "5 days", s: "Quick" },
                      { v: "7", l: "7 days", s: "Recommended" },
                      { v: "10", l: "10 days", s: "Maximum" },
                    ] as const
                  ).map((d) => (
                    <button
                      key={d.v}
                      onClick={() => setDuration(d.v)}
                      className={cn(
                        "rounded-[12px] border p-3.5 text-left transition-colors",
                        duration === d.v
                          ? "border-ink bg-ink text-white"
                          : "border-line bg-white text-ink hover:border-ink",
                      )}
                    >
                      <div className="font-disp text-[18px] font-extrabold">{d.l}</div>
                      <div className={cn("text-[12px]", duration === d.v ? "text-white/70" : "text-muted")}>
                        {d.s}
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-[18px] border border-line-soft bg-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-disp text-[18px] font-extrabold">Reserve Price</h3>
                    <p className="mt-1 text-[14px] text-muted">
                      Minimum amount you&apos;ll accept. Item won&apos;t sell if bids don&apos;t meet it.
                    </p>
                  </div>
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-amber-700">
                    Optional
                  </span>
                </div>
                <div className="mt-4 max-w-md">
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[16px] font-bold text-muted">
                      ₹
                    </span>
                    <input
                      value={reserve}
                      onChange={(e) => setReserve(e.target.value.replace(/[^0-9]/g, ""))}
                      inputMode="numeric"
                      className="h-12 w-full rounded-[12px] border border-line bg-cream-2 pl-9 pr-4 font-disp text-[18px] font-extrabold outline-none focus:border-ink focus:ring-2 focus:ring-ink/10"
                    />
                  </div>
                </div>
              </div>

              <div className="rounded-[18px] border border-line-soft bg-white p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-disp text-[18px] font-extrabold">Buy It Now Price</h3>
                    <p className="mt-1 text-[14px] text-muted">
                      Buyers can end the auction instantly at this price.
                    </p>
                  </div>
                  <span className="rounded-full bg-amber-50 px-3 py-1 text-[11px] font-bold uppercase tracking-[0.14em] text-amber-700">
                    Optional
                  </span>
                </div>
                <div className="mt-4 max-w-md">
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[16px] font-bold text-muted">
                      ₹
                    </span>
                    <input
                      value={buyNow}
                      onChange={(e) => setBuyNow(e.target.value.replace(/[^0-9]/g, ""))}
                      inputMode="numeric"
                      className="h-12 w-full rounded-[12px] border border-line bg-cream-2 pl-9 pr-4 font-disp text-[18px] font-extrabold outline-none focus:border-ink focus:ring-2 focus:ring-ink/10"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Schedule */}
          <div className="mt-6 rounded-[18px] border border-line-soft bg-white p-6">
            <div className="flex items-start gap-3">
              <Calendar className="mt-0.5 h-5 w-5 text-ink" />
              <div>
                <h3 className="font-disp text-[18px] font-extrabold">Schedule</h3>
                <p className="mt-1 text-[14px] text-muted">Choose when this listing goes live.</p>
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
              <label className="flex items-start gap-3 rounded-[12px] border border-line p-3.5 has-[:checked]:border-ink has-[:checked]:bg-cream-2">
                <input type="radio" name="schedule" defaultChecked className="mt-1.5" />
                <div>
                  <div className="font-bold text-ink">Publish now</div>
                  <div className="text-[13px] text-muted">Your listing goes live immediately after review.</div>
                </div>
              </label>
              <label className="flex items-start gap-3 rounded-[12px] border border-line p-3.5 has-[:checked]:border-ink has-[:checked]:bg-cream-2">
                <input type="radio" name="schedule" className="mt-1.5" />
                <div>
                  <div className="font-bold text-ink">Schedule for later</div>
                  <div className="text-[13px] text-muted">Pick a future date and time to publish.</div>
                </div>
              </label>
            </div>
          </div>

          <div className="mt-7.5 flex items-center justify-between">
            <a
              href="/dashboard/listings/new/photos"
              className="inline-flex h-12 items-center rounded-full border-[1.5px] border-ink px-7 text-[14px] font-bold text-ink transition-colors hover:bg-ink hover:text-white"
            >
              Back
            </a>
            <div className="flex items-center gap-2">
              <a
                href="/dashboard/listings"
                className="inline-flex h-12 items-center rounded-full border-[1.5px] border-ink px-6 text-[14px] font-bold text-ink transition-colors hover:bg-ink hover:text-white"
              >
                Save as Draft
              </a>
              <a
                href="/dashboard/listings/new/review"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-7 text-[14px] font-bold text-white transition-colors hover:bg-black"
              >
                Continue to Review
              </a>
            </div>
          </div>
        </div>

        {/* Payout sidebar */}
        <aside className="space-y-5 self-start">
          <div className="rounded-[16px] border border-line-soft bg-white p-5">
            <div className="mb-4 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-muted">
              <CircleDollarSign className="h-4 w-4" /> Payout Breakdown
            </div>
            <div className="space-y-3 text-[14px]">
              <Row label="Item price" value={formatINR(numericPrice)} />
              <Row label="HYPE commission (8%)" value={`- ${formatINR(commission)}`} muted />
              <Row label="Shipping (paid by buyer)" value={formatINR(shipping)} muted />
              <div className="my-2 border-t border-line-soft" />
              <Row label="You earn" value={formatINR(payout)} big />
            </div>
            <div className="mt-4 rounded-[10px] bg-cream-2 p-3 text-[12px] text-muted">
              <Info className="mr-1 inline-block h-3.5 w-3.5" />
              Funds release to your wallet within 24 hours of confirmed delivery.
            </div>
          </div>

          <div className="rounded-[16px] border border-line-soft bg-[#e9e1d4] p-5">
            <div className="mb-3 flex items-center gap-2 text-[15px] font-bold">
              <Sparkles className="h-4 w-4" /> Boost your listing
            </div>
            <ul className="space-y-2.5 text-[14px] leading-[1.5] text-[#6f6a60]">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                <span>
                  <b className="text-ink">Free authentication</b> included on every order
                </span>
              </li>
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                <span>
                  <b className="text-ink">Seller protection</b> against fraudulent claims
                </span>
              </li>
              <li className="flex items-start gap-2">
                <Truck className="mt-0.5 h-4 w-4 flex-none text-emerald-600" />
                <span>
                  <b className="text-ink">Free pickup</b> from your doorstep
                </span>
              </li>
            </ul>
          </div>
        </aside>
      </div>
    </div>
  );
}

function ModeCard({
  active,
  onClick,
  icon: Icon,
  title,
  desc,
  perks,
}: {
  active: boolean;
  onClick: () => void;
  icon: typeof Tag;
  title: string;
  desc: string;
  perks: string[];
}) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "rounded-[18px] border-2 p-5 text-left transition-colors",
        active ? "border-ink bg-white shadow-sm" : "border-line-soft bg-white hover:border-ink",
      )}
    >
      <div className="flex items-center gap-3">
        <div
          className={cn(
            "flex h-10 w-10 items-center justify-center rounded-[10px]",
            active ? "bg-ink text-white" : "bg-cream-2 text-ink",
          )}
        >
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <div className="font-disp text-[18px] font-extrabold">{title}</div>
          <div className="text-[12px] font-semibold text-muted">
            {active ? "Selected" : "Click to choose"}
          </div>
        </div>
      </div>
      <p className="mt-3 text-[13px] leading-[1.5] text-muted">{desc}</p>
      <ul className="mt-3 space-y-1.5">
        {perks.map((p) => (
          <li key={p} className="flex items-center gap-1.5 text-[12px] text-ink">
            <CheckCircle2 className="h-3.5 w-3.5 text-emerald-600" /> {p}
          </li>
        ))}
      </ul>
    </button>
  );
}

function Row({
  label,
  value,
  big,
  muted,
}: {
  label: string;
  value: string;
  big?: boolean;
  muted?: boolean;
}) {
  return (
    <div className="flex items-center justify-between">
      <span className={cn("text-[14px]", muted ? "text-muted" : "text-ink")}>{label}</span>
      <span
        className={cn(
          "font-disp",
          big ? "text-[22px] font-extrabold" : "text-[14px] font-bold",
          muted ? "text-muted" : "text-ink",
        )}
      >
        {value}
      </span>
    </div>
  );
}
