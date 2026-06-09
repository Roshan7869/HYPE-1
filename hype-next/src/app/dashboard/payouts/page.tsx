"use client";

import { useState } from "react";
import { Wallet, ArrowUpRight, TrendingUp, ChevronDown } from "lucide-react";
import { formatINR, cn } from "@/lib/utils";
import { LineChart, Line, ResponsiveContainer, Tooltip, XAxis, YAxis, CartesianGrid } from "recharts";

const CHART = [
  { day: "Mon", v: 12000 },
  { day: "Tue", v: 18500 },
  { day: "Wed", v: 15200 },
  { day: "Thu", v: 22000 },
  { day: "Fri", v: 19500 },
  { day: "Sat", v: 26500 },
  { day: "Sun", v: 24800 },
];

const TXNS = [
  { id: "TXN-2204", item: "Air Jordan 1 'Chicago'", date: "Today, 4:32 PM", amt: 18500, status: "Paid" },
  { id: "TXN-2203", item: "Yeezy 350 V2 Beluga", date: "Yesterday", amt: 25200, status: "Paid" },
  { id: "TXN-2202", item: "Supreme Box Logo Hoodie", date: "2 days ago", amt: 31000, status: "Pending" },
  { id: "TXN-2201", item: "Air Jordan 4 University Blue", date: "Apr 22, 2026", amt: 28750, status: "Paid" },
];

export default function PayoutsPage() {
  const [filter, setFilter] = useState("This week");
  return (
    <div>
      <div className="dash-head">
        <h1 className="font-disp text-[48px] font-extrabold leading-[1.02] tracking-tighter2">
          Payouts &amp; Earnings
        </h1>
        <p className="mt-2 text-[18px] text-muted">
          Track your sales revenue, available balance, and payout history.
        </p>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3">
        <Stat
          icon={Wallet}
          label="Total Earnings"
          value={formatINR(248000)}
          sub="+ ₹48K this month"
        />
        <Stat
          icon={Wallet}
          label="Available for Payout"
          value={formatINR(74200)}
          sub="Next payout in 3 days"
          highlight
        />
        <Stat
          icon={TrendingUp}
          label="Pending Clearance"
          value={formatINR(31000)}
          sub="Authentication in progress"
        />
      </div>

      <div className="mt-7 grid grid-cols-1 gap-7 lg:grid-cols-[1fr_380px]">
        <div className="rounded-hype-lg border border-line-soft bg-cream-2 p-6">
          <div className="mb-4 flex items-center justify-between">
            <h3 className="font-disp text-[20px] font-extrabold">Earnings This Week</h3>
            <Select
              value={filter}
              options={["Today", "This week", "This month", "This year"]}
              onChange={setFilter}
            />
          </div>
          <div className="h-[260px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={CHART} margin={{ top: 10, right: 10, bottom: 0, left: -20 }}>
                <defs>
                  <linearGradient id="lineStroke" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#0c0b0a" />
                    <stop offset="1" stopColor="#c9a25e" />
                  </linearGradient>
                </defs>
                <CartesianGrid stroke="#eee" vertical={false} />
                <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fill: "#7e776b", fontSize: 12 }} />
                <YAxis tickLine={false} axisLine={false} tick={{ fill: "#7e776b", fontSize: 12 }} />
                <Tooltip
                  contentStyle={{
                    background: "#0c0b0a",
                    border: "none",
                    borderRadius: 8,
                    color: "white",
                    fontSize: 12,
                  }}
                  formatter={(v) => formatINR(v as number)}
                />
                <Line
                  type="monotone"
                  dataKey="v"
                  stroke="url(#lineStroke)"
                  strokeWidth={2.5}
                  dot={{ r: 4, fill: "#0c0b0a" }}
                  activeDot={{ r: 5, fill: "#c9a25e" }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        <div className="rounded-hype-lg border border-line-soft bg-cream-2 p-6">
          <h3 className="mb-4 font-disp text-[20px] font-extrabold">Recent Transactions</h3>
          <div className="space-y-3">
            {TXNS.map((t) => (
              <div
                key={t.id}
                className="flex items-center justify-between border-t border-line-soft py-3 first:border-t-0 first:pt-0"
              >
                <div>
                  <div className="font-bold">{t.item}</div>
                  <div className="text-[13px] text-muted">
                    {t.id} • {t.date}
                  </div>
                </div>
                <div className="text-right">
                  <div className="font-disp text-[18px] font-extrabold">{formatINR(t.amt)}</div>
                  <span
                    className={cn(
                      "text-[12px] font-bold uppercase tracking-[0.1em]",
                      t.status === "Paid" ? "text-hype-green-ink" : "text-amber-ink",
                    )}
                  >
                    {t.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
          <button className="mt-5 w-full rounded-[10px] bg-ink py-3 text-[14px] font-semibold text-white hover:bg-black">
            Request Payout
            <ArrowUpRight className="ml-2 inline-block h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function Stat({
  icon: Icon,
  label,
  value,
  sub,
  highlight,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  sub: string;
  highlight?: boolean;
}) {
  return (
    <div
      className={cn(
        "rounded-hype-lg border p-5",
        highlight ? "border-ink bg-ink text-white" : "border-line-soft bg-cream-2",
      )}
    >
      <div className={cn("flex items-center gap-2 text-[14px] font-semibold", highlight ? "text-white/80" : "text-muted")}>
        <Icon className="h-5 w-5" />
        {label}
      </div>
      <div className="my-2 font-disp text-[40px] font-extrabold leading-none">{value}</div>
      <div className={cn("text-[12px]", highlight ? "text-[#cdc7bd]" : "text-muted")}>{sub}</div>
    </div>
  );
}

function Select({
  value,
  options,
  onChange,
}: {
  value: string;
  options: string[];
  onChange: (v: string) => void;
}) {
  return (
    <div className="relative">
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="appearance-none rounded-[10px] border border-line bg-white px-4 py-2 pr-9 text-[14px] font-medium"
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-3 w-3 -translate-y-1/2" />
    </div>
  );
}
