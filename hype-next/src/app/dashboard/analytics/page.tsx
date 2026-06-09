"use client";

import { useState } from "react";
import {
  TrendingUp,
  Eye,
  Heart,
  IndianRupee,
  Gavel,
  ArrowUpRight,
  ArrowDownRight,
  Download,
  Calendar,
} from "lucide-react";
import {
  Area,
  AreaChart,
  CartesianGrid,
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { cn, formatINR } from "@/lib/utils";

const RANGES = ["7 days", "30 days", "90 days", "1 year"] as const;

const SALES_DATA = [
  { d: "Mon", sales: 12000, views: 320 },
  { d: "Tue", sales: 18500, views: 410 },
  { d: "Wed", sales: 9500, views: 290 },
  { d: "Thu", sales: 22000, views: 520 },
  { d: "Fri", sales: 31500, views: 680 },
  { d: "Sat", sales: 27200, views: 590 },
  { d: "Sun", sales: 24000, views: 510 },
];

const CATEGORY_DATA = [
  { name: "Sneakers", value: 58, color: "#0c0b0a" },
  { name: "Streetwear", value: 24, color: "#c9a25e" },
  { name: "Accessories", value: 11, color: "#3b6cd6" },
  { name: "Collectibles", value: 7, color: "#b3403d" },
];

const FUNNEL = [
  { label: "Visitors", n: 12480, pct: 100 },
  { label: "Product views", n: 8420, pct: 67 },
  { label: "Bids / Offers", n: 1840, pct: 15 },
  { label: "Checkouts", n: 612, pct: 5 },
  { label: "Sold", n: 384, pct: 3 },
];

const TOP_LISTINGS = [
  { name: "Air Jordan 1 Retro High 'Chicago'", views: 4820, bids: 38, price: "₹18,500", sold: 4, hue: "from-red-200 to-red-400" },
  { name: "Yeezy 350 V2 'Beluga'", views: 3210, bids: 24, price: "₹25,200", sold: 3, hue: "from-yellow-200 to-amber-400" },
  { name: "Off-White x AF1 'Volt'", views: 2840, bids: 19, price: "₹65,000", sold: 1, hue: "from-lime-200 to-lime-400" },
  { name: "Supreme Box Logo Hoodie", views: 2120, bids: 31, price: "₹31,000", sold: 2, hue: "from-orange-200 to-orange-400" },
  { name: "Travis Scott Cactus Jack", views: 1890, bids: 12, price: "₹31,000", sold: 1, hue: "from-stone-300 to-stone-500" },
];

const RECENT_BIDS = [
  { item: "Air Jordan 1 'Chicago'", bidder: "Rahul M.", amount: 19800, time: "2 min ago" },
  { item: "Air Jordan 1 'Chicago'", bidder: "Sneha K.", amount: 19500, time: "11 min ago" },
  { item: "Yeezy 350 V2 'Beluga'", bidder: "Aakash P.", amount: 26200, time: "1 hour ago" },
  { item: "Off-White x AF1 'Volt'", bidder: "Vikram S.", amount: 67500, time: "3 hours ago" },
  { item: "Supreme Box Logo Hoodie", bidder: "Priya V.", amount: 33200, time: "5 hours ago" },
];

export default function AnalyticsPage() {
  const [range, setRange] = useState<(typeof RANGES)[number]>("7 days");

  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div className="dash-head">
          <h1 className="font-disp text-[48px] font-extrabold leading-[1.02] tracking-tighter2">
            Analytics
          </h1>
          <p className="mt-2 text-[18px] text-muted">
            Track sales, traffic and performance across your listings.
          </p>
        </div>
        <div className="mt-1 flex flex-none items-center gap-2">
          <div className="flex items-center gap-2 rounded-[12px] border border-line bg-white px-3.5 py-2.5 text-[13px] font-medium">
            <Calendar className="h-4 w-4" /> {range}
          </div>
          <button
            onClick={() => setRange(range)}
            className="flex items-center gap-1.5 rounded-[12px] border border-line bg-white px-3.5 py-2.5 text-[13px] font-medium hover:border-ink"
          >
            Change
          </button>
          <button className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-line bg-white text-muted hover:border-ink hover:text-ink">
            <Download className="h-4 w-4" />
          </button>
        </div>
      </div>

      <div className="mt-5 mb-3 flex flex-wrap gap-2">
        {RANGES.map((r) => (
          <button
            key={r}
            onClick={() => setRange(r)}
            className={cn(
              "rounded-full px-4 py-2 text-[13px] font-semibold transition-colors",
              range === r ? "bg-ink text-white" : "bg-cream-2 text-muted hover:text-ink",
            )}
          >
            {r}
          </button>
        ))}
      </div>

      {/* Stat cards */}
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
        <Stat
          icon={IndianRupee}
          label="Total Revenue"
          value="₹1,84,500"
          delta="+12.4%"
          up
        />
        <Stat icon={Gavel} label="Items Sold" value="32" delta="+8.1%" up />
        <Stat icon={Eye} label="Total Views" value="24,816" delta="+18.7%" up />
        <Stat icon={Heart} label="Watchlist Adds" value="1,243" delta="-2.3%" />
      </div>

      {/* Sales chart */}
      <div className="mt-6 rounded-hype-lg border border-line-soft bg-white p-6">
        <div className="mb-1 flex items-center justify-between">
          <h2 className="font-disp text-[20px] font-extrabold">Sales &amp; Views</h2>
          <div className="flex items-center gap-4 text-[12px] font-semibold text-muted">
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-ink" /> Sales (₹)
            </span>
            <span className="flex items-center gap-1.5">
              <span className="h-2.5 w-2.5 rounded-full bg-hype-gold" /> Views
            </span>
          </div>
        </div>
        <div className="h-[280px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={SALES_DATA} margin={{ top: 16, right: 16, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="fillSales" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#0c0b0a" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#0c0b0a" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="fillViews" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#c9a25e" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#c9a25e" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ece6da" vertical={false} />
              <XAxis
                dataKey="d"
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12, fill: "#7a7468" }}
              />
              <YAxis
                tickLine={false}
                axisLine={false}
                tick={{ fontSize: 12, fill: "#7a7468" }}
                tickFormatter={(v) => (v >= 1000 ? `₹${(v / 1000).toFixed(0)}k` : v)}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#fff",
                  border: "1px solid #ece6da",
                  borderRadius: 10,
                  fontSize: 12,
                }}
                formatter={(v: number, n: string) =>
                  n === "sales" ? [formatINR(v), "Sales"] : [v, "Views"]
                }
              />
              <Area
                type="monotone"
                dataKey="sales"
                stroke="#0c0b0a"
                strokeWidth={2.5}
                fill="url(#fillSales)"
              />
              <Area
                type="monotone"
                dataKey="views"
                stroke="#c9a25e"
                strokeWidth={2.5}
                fill="url(#fillViews)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {/* Category pie */}
        <div className="rounded-hype-lg border border-line-soft bg-white p-6">
          <h2 className="font-disp text-[20px] font-extrabold">Sales by Category</h2>
          <p className="mt-1 text-[13px] text-muted">Last 30 days</p>
          <div className="mt-3 h-[230px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={CATEGORY_DATA}
                  innerRadius={55}
                  outerRadius={85}
                  dataKey="value"
                  paddingAngle={2}
                >
                  {CATEGORY_DATA.map((c) => (
                    <Cell key={c.name} fill={c.color} />
                  ))}
                </Pie>
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#fff",
                    border: "1px solid #ece6da",
                    borderRadius: 10,
                    fontSize: 12,
                  }}
                  formatter={(v: number) => `${v}%`}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
          <ul className="space-y-2 text-[13px]">
            {CATEGORY_DATA.map((c) => (
              <li key={c.name} className="flex items-center justify-between">
                <span className="flex items-center gap-2">
                  <span
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: c.color }}
                  />
                  {c.name}
                </span>
                <b className="text-ink">{c.value}%</b>
              </li>
            ))}
          </ul>
        </div>

        {/* Funnel */}
        <div className="rounded-hype-lg border border-line-soft bg-white p-6">
          <h2 className="font-disp text-[20px] font-extrabold">Conversion Funnel</h2>
          <p className="mt-1 text-[13px] text-muted">Visitor → Sold</p>
          <div className="mt-5 space-y-3">
            {FUNNEL.map((f) => {
              const widthPct = Math.max(8, f.pct);
              return (
                <div key={f.label}>
                  <div className="mb-1 flex items-center justify-between text-[13px]">
                    <span className="text-muted">{f.label}</span>
                    <b className="text-ink">
                      {f.n.toLocaleString("en-IN")} · {f.pct}%
                    </b>
                  </div>
                  <div className="h-2.5 overflow-hidden rounded-full bg-cream-2">
                    <div
                      className="h-full bg-ink transition-all"
                      style={{ width: `${widthPct}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
          <div className="mt-5 rounded-[10px] bg-amber-50 p-3 text-[12px] text-amber-800">
            <b>3.1%</b> conversion — above seller median of <b>2.4%</b>
          </div>
        </div>

        {/* Recent bids */}
        <div className="rounded-hype-lg border border-line-soft bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-disp text-[20px] font-extrabold">Recent Bids</h2>
            <a href="/account/bids" className="text-[12px] font-bold text-ink hover:underline">
              View all
            </a>
          </div>
          <ul className="mt-4 space-y-3">
            {RECENT_BIDS.map((b, i) => (
              <li
                key={i}
                className="flex items-center gap-3 border-b border-line-soft pb-3 last:border-b-0 last:pb-0"
              >
                <div className="flex h-9 w-9 flex-none items-center justify-center rounded-full bg-cream-2 text-[12px] font-extrabold text-ink">
                  {b.bidder
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[13px] font-bold text-ink">{b.bidder}</div>
                  <div className="truncate text-[12px] text-muted">{b.item}</div>
                </div>
                <div className="text-right">
                  <div className="font-disp text-[14px] font-extrabold">
                    {formatINR(b.amount)}
                  </div>
                  <div className="text-[11px] text-muted">{b.time}</div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Top listings table */}
      <div className="mt-6 rounded-hype-lg border border-line-soft bg-white p-6">
        <div className="mb-4 flex items-center justify-between">
          <h2 className="font-disp text-[20px] font-extrabold">Top Performing Listings</h2>
          <a href="/dashboard/listings" className="text-[12px] font-bold text-ink hover:underline">
            See all listings
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full min-w-[640px] text-left text-[14px]">
            <thead>
              <tr className="border-b border-line text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                <th className="py-2 pl-2">Item</th>
                <th className="py-2 text-right">Views</th>
                <th className="py-2 text-right">Bids</th>
                <th className="py-2 text-right">Price</th>
                <th className="py-2 pr-2 text-right">Sold</th>
              </tr>
            </thead>
            <tbody>
              {TOP_LISTINGS.map((row) => (
                <tr key={row.name} className="border-b border-line-soft last:border-b-0">
                  <td className="py-3 pl-2">
                    <div className="flex items-center gap-3">
                      <div
                        className={cn(
                          "h-10 w-10 flex-none rounded-[10px] bg-gradient-to-br",
                          row.hue,
                        )}
                      />
                      <div className="font-bold text-ink">{row.name}</div>
                    </div>
                  </td>
                  <td className="py-3 text-right font-semibold text-ink">
                    {row.views.toLocaleString("en-IN")}
                  </td>
                  <td className="py-3 text-right text-ink">{row.bids}</td>
                  <td className="py-3 text-right font-disp font-extrabold text-ink">
                    {row.price}
                  </td>
                  <td className="py-3 pr-2 text-right">
                    <span className="inline-flex h-7 min-w-[28px] items-center justify-center rounded-full bg-emerald-50 px-2 text-[12px] font-bold text-emerald-700">
                      {row.sold}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  delta,
  up,
}: {
  icon: typeof TrendingUp;
  label: string;
  value: string;
  delta: string;
  up?: boolean;
}) {
  return (
    <div className="rounded-hype-lg border border-line-soft bg-white p-5">
      <div className="flex items-center justify-between">
        <div className="flex h-9 w-9 items-center justify-center rounded-full bg-cream-2">
          <Icon className="h-4 w-4" strokeWidth={1.8} />
        </div>
        <span
          className={cn(
            "flex items-center gap-0.5 rounded-full px-2 py-0.5 text-[11px] font-bold",
            up ? "bg-emerald-50 text-emerald-700" : "bg-rose-50 text-rose-700",
          )}
        >
          {up ? <ArrowUpRight className="h-3 w-3" /> : <ArrowDownRight className="h-3 w-3" />}
          {delta}
        </span>
      </div>
      <div className="mt-3 text-[12px] font-semibold uppercase tracking-[0.14em] text-muted">
        {label}
      </div>
      <div className="mt-1 font-disp text-[32px] font-extrabold leading-none tracking-tighter2">
        {value}
      </div>
    </div>
  );
}
