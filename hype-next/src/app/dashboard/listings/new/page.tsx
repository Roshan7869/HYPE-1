"use client";

import Link from "next/link";
import { Search, TrendingUp, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ListingStepper } from "@/components/dashboard/listing-stepper";

const TRENDING = [
  { name: "Jordan 1 Retro High", sub: "Mocha", avg: "₹24,500", demand: "High Demand", grad: "linear-gradient(150deg,#3a2546,#160a1e)" },
  { name: "Nike Dunk Low", sub: "Panda", avg: "₹15,800", demand: "High Demand", grad: "linear-gradient(150deg,#2e2540,#120a1c)" },
  { name: "Yeezy 350 V2", sub: "Beluga", avg: "₹18,900", demand: "Selling Fast", grad: "linear-gradient(150deg,#352843,#150b1e)", variant: "pink" as const },
  { name: "New Balance 9060", sub: "Grey", avg: "₹22,100", demand: "High Demand", grad: "linear-gradient(150deg,#2b2540,#100a1a)" },
  { name: "Adidas Samba OG", sub: "Green", avg: "₹12,900", demand: "Trending", grad: "linear-gradient(150deg,#33274a,#130a20)", variant: "blue" as const },
];

const POPULAR = ["Jordan 1", "Apple", "Rolex", "New Balance 9060", "Corteiz", "Travis Scott"];

export default function CreateListingPage() {
  return (
    <div>
      <div className="dash-head">
        <h1 className="font-disp text-[48px] font-extrabold leading-[1.02] tracking-tighter2">
          List Your Next Drop
        </h1>
        <p className="mt-2 text-[18px] text-muted">Start by searching the product you want to sell.</p>
      </div>

      <ListingStepper
        steps={[
          { label: "Product", current: true },
          { label: "Details" },
          { label: "Condition" },
          { label: "Photos" },
          { label: "Pricing" },
          { label: "Review" },
        ]}
      />

      <div className="rounded-[20px] bg-cream p-6">
        <div className="flex flex-col gap-3.5 sm:flex-row">
          <div className="flex flex-1 items-center gap-3 rounded-[12px] bg-white px-[22px] py-[18px] text-[15px] text-muted-2">
            <Search className="h-[18px] w-[18px]" />
            Search sneakers, brands, SKU or collections
          </div>
          <Link
            href="/dashboard/listings/new/details"
            className="inline-flex items-center justify-center gap-2 rounded-[12px] bg-ink px-10 py-[18px] text-[15px] font-semibold text-white hover:bg-black"
          >
            Search
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
        <div className="mt-4.5 flex flex-wrap items-center gap-3">
          <span className="text-[14px] text-muted">Popular searches:</span>
          {POPULAR.map((p) => (
            <button
              key={p}
              className="rounded-full border border-line bg-white px-[18px] py-2.5 text-[14px] font-medium hover:border-ink"
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      <div className="mt-10 mb-1 flex items-center gap-2.5 font-disp text-[26px] font-extrabold">
        <TrendingUp className="h-6 w-6 text-hype-green-ink" />
        Trending Right Now
      </div>
      <p className="mb-6 text-[15px] text-muted">Most listed sneakers this week</p>

      <div className="grid grid-cols-2 gap-[18px] sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {[...TRENDING, ...TRENDING].map((t, i) => (
          <Link
            key={i}
            href="/dashboard/listings/new/details"
            className="block rounded-[14px] border border-line-soft bg-cream-2 p-3.5 transition-shadow hover:shadow-sm"
          >
            <div
              className="flex aspect-[1/0.82] items-center justify-center rounded-[10px] text-center font-disp text-[13px] font-bold text-white/85"
              style={{ background: t.grad }}
            >
              <div className="px-2">
                {t.name}
                <br />
                {t.sub}
              </div>
            </div>
            <div className="mt-3 text-[15px] font-semibold">{t.name}</div>
            <div className="mt-0.5 text-[13px] text-muted">{t.sub}</div>
            <div className="mt-2 font-disp text-[15px] font-extrabold">
              {t.avg} <span className="text-[12px] font-medium text-muted">avg.</span>
            </div>
            <Badge
              variant={t.variant ?? "amber"}
              className="mt-3"
            >
              {t.demand}
            </Badge>
          </Link>
        ))}
      </div>
    </div>
  );
}
