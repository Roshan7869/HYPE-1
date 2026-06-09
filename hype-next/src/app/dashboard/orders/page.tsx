"use client";

import { useState } from "react";
import {
  Package,
  Truck,
  ShieldCheck,
  Check,
  X,
  ChevronDown,
  ArrowRight,
  Box,
  TrendingUp,
  ArrowUpRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const STATS = [
  { icon: Package, label: "Active Orders", n: "02", sub: "Orders cancelled / refunded" },
  { icon: Truck, label: "Pending Pickup", n: "04", sub: "Awaiting courier pickup" },
  { icon: ShieldCheck, label: "In Authentication", n: "08", sub: "Being verified by HYPE" },
  { icon: Check, label: "Completed", n: "126", sub: "Successfully delivered" },
  { icon: X, label: "Cancelled", n: "02", sub: "Orders cancelled / refunded" },
];

const TABS = ["Pending Pickup", "In Authentication", "Completed", "Cancelled"] as const;

const ORDERS = [
  {
    name: "Air Jordan 1 Retro High 'Chicago'",
    id: "#ORD-10928",
    due: "Pickup scheduled today, 4:00 – 7:00 PM",
    desc: "Our delivery partner will collect the item from your registered address. Pack securely with the HYPE shipping label.",
    action: "Track Pickup",
  },
  {
    name: "Yeezy 350 V2 'Beluga'",
    id: "#ORD-10931",
    due: "Authentication in progress",
    desc: "Your item is being verified by our authentication team. Verification usually takes 24-48 hours.",
    action: "View Status",
  },
  {
    name: "Travis Scott Cactus Jack Hoodie",
    id: "#ORD-10934",
    due: "Delivered to buyer",
    desc: "Funds will be released to your wallet within 24 hours of confirmed delivery.",
    action: "View Details",
  },
];

export default function OrdersPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Pending Pickup");

  return (
    <div>
      <div className="dash-head">
        <h1 className="font-disp text-[48px] font-extrabold leading-[1.02] tracking-tighter2">
          Orders &amp; Shipments
        </h1>
        <p className="mt-2 text-[18px] text-muted">
          Track pickups, authentication progress and completed orders.
        </p>
      </div>

      <div className="my-6 grid grid-cols-2 gap-4 lg:grid-cols-5">
        {STATS.map((s) => {
          const Icon = s.icon;
          return (
            <div key={s.label} className="rounded-hype bg-black p-5 text-white">
              <div className="flex items-center gap-2.5 text-[14px] font-semibold text-[#e7e2da]">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
                {s.label}
              </div>
              <div className="my-2 font-disp text-[46px] font-extrabold leading-none">{s.n}</div>
              <div className="text-[12px] text-[#8c867b]">{s.sub}</div>
            </div>
          );
        })}
      </div>

      <div className="mb-5.5 flex flex-wrap items-center gap-3">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              "rounded-full px-[26px] py-3 text-[15px] font-semibold transition-colors",
              tab === t ? "bg-ink text-white" : "bg-transparent text-muted hover:text-ink",
            )}
          >
            {t}
          </button>
        ))}
        <div className="ml-auto flex items-center gap-[18px] rounded-[12px] border border-line bg-cream-2 px-[18px] py-3 text-[14px] font-medium">
          Sort by: Newest
          <ChevronDown className="h-3 w-3" />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-7 lg:grid-cols-[1fr_380px]">
        <div>
          {ORDERS.map((o) => (
            <div
              key={o.id}
              className="mb-5 rounded-hype-lg border border-line-soft bg-cream-2 p-6"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-disp text-[22px] font-extrabold">{o.name}</h3>
                <span className="text-[14px] text-muted">{o.id}</span>
              </div>
              <div className="my-2 font-semibold text-hype-red">{o.due}</div>
              <p className="mb-4 text-[15px] text-muted">{o.desc}</p>
              <button className="rounded-[10px] bg-ink px-6 py-3 text-[14px] font-semibold text-white hover:bg-black">
                {o.action}
                <ArrowRight className="ml-2 inline-block h-4 w-4" />
              </button>
            </div>
          ))}
        </div>

        <aside className="space-y-6">
          <InsightsCard />
        </aside>
      </div>
    </div>
  );
}

function InsightsCard() {
  return (
    <div className="rounded-hype-lg border border-line-soft bg-cream-2 p-6">
      <h3 className="mb-5 font-disp text-[20px] font-extrabold">Insights</h3>

      <Block label="Top Category" value="Sneakers" sub="↑ 12% this week" positive />
      <Block label="Conversion Rate" value="8.4%" sub="Above seller average" />
      <Block label="Avg. Days to Sell" value="3.2d" sub="Faster than 78% of sellers" positive />

      <div className="mt-4 border-t border-line-soft pt-4">
        <h4 className="text-[14px] font-bold text-muted">Top Item</h4>
        <div className="mt-2 flex items-center gap-3">
          <div className="h-[46px] w-[46px] flex-none rounded-[10px] bg-[linear-gradient(150deg,#3a2546,#160a1e)]" />
          <div>
            <b className="block text-[15px] font-bold">Air Jordan 1 Mocha</b>
            <span className="text-[13px] text-muted">2 sold this week</span>
          </div>
        </div>
        <button className="mt-3.5 w-full rounded-[10px] bg-ink py-3 text-[14px] font-semibold text-white hover:bg-black">
          List Similar
        </button>
      </div>

      <div className="mt-4 border-t border-line-soft pt-4">
        <h4 className="text-[14px] font-bold">Need help?</h4>
        <p className="mt-1.5 text-[14px] leading-[1.45] text-muted">
          Our seller support team is available 9 AM – 9 PM IST.
        </p>
        <a
          href="#"
          className="mt-3 inline-flex items-center gap-2 text-[14px] font-bold"
        >
          Contact Support
          <ArrowUpRight className="h-3.5 w-3.5" />
        </a>
      </div>
    </div>
  );
}

function Block({
  label,
  value,
  sub,
  positive,
}: {
  label: string;
  value: string;
  sub: string;
  positive?: boolean;
}) {
  return (
    <div className="border-t border-line-soft py-4 first:border-t-0 first:pt-0">
      <div className="flex items-center gap-1.5 text-[14px] text-muted">
        <Box className="h-3.5 w-3.5 opacity-50" />
        {label}
      </div>
      <div className="mt-1.5 font-disp text-[30px] font-extrabold">{value}</div>
      <div className={cn("text-[13px]", positive ? "font-semibold text-hype-green-ink" : "text-muted")}>
        {positive && <TrendingUp className="mr-1 inline-block h-3.5 w-3.5" />}
        {sub}
      </div>
    </div>
  );
}
