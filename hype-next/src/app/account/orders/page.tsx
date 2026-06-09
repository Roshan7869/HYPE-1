"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { AccountShell } from "@/components/account/account-shell";
import { cn, formatINR } from "@/lib/utils";

type Status = "processing" | "shipped" | "delivered" | "cancelled";

type Order = {
  id: string;
  date: string;
  items: { name: string; variant: string; qty: number; price: number; gradient: string; emoji: string }[];
  total: number;
  status: Status;
};

const ORDERS: Order[] = [
  {
    id: "ORD-10928",
    date: "9 Jun 2026",
    items: [
      { name: "Air Jordan 1 Retro High OG 'Chicago'", variant: "UK 9 · DS/Brand New", qty: 2, price: 24999, gradient: "from-stone-200 to-stone-400", emoji: "👟" },
      { name: "Yeezy 350 V2 Black", variant: "UK 8 · DS/Brand New", qty: 1, price: 18499, gradient: "from-stone-700 to-stone-900", emoji: "👟" },
    ],
    total: 80826,
    status: "processing",
  },
  {
    id: "ORD-10921",
    date: "5 Jun 2026",
    items: [
      { name: "Nike Dunk Low Panda", variant: "UK 10 · DS/Brand New", qty: 1, price: 9999, gradient: "from-stone-100 to-stone-300", emoji: "👟" },
    ],
    total: 11799,
    status: "shipped",
  },
  {
    id: "ORD-10893",
    date: "1 Jun 2026",
    items: [
      { name: "Off-White x AJ1 Chicago", variant: "UK 9 · DS/Brand New", qty: 1, price: 83999, gradient: "from-amber-100 to-orange-200", emoji: "👟" },
    ],
    total: 99119,
    status: "delivered",
  },
  {
    id: "ORD-10854",
    date: "25 May 2026",
    items: [
      { name: "Adidas Samba OG Cloud White", variant: "UK 9 · DS", qty: 1, price: 12999, gradient: "from-amber-100 to-amber-200", emoji: "👟" },
    ],
    total: 15339,
    status: "cancelled",
  },
];

const FILTERS = [
  { id: "all", label: "All", n: ORDERS.length },
  { id: "processing", label: "Processing", n: ORDERS.filter((o) => o.status === "processing").length },
  { id: "shipped", label: "Shipped", n: ORDERS.filter((o) => o.status === "shipped").length },
  { id: "delivered", label: "Delivered", n: ORDERS.filter((o) => o.status === "delivered").length },
  { id: "cancelled", label: "Cancelled", n: ORDERS.filter((o) => o.status === "cancelled").length },
  { id: "returns", label: "Returns", n: 0 },
] as const;

const STATUS_STYLES: Record<Status, string> = {
  processing: "bg-amber-100 text-amber-800",
  shipped: "bg-blue-100 text-blue-800",
  delivered: "bg-emerald-100 text-emerald-800",
  cancelled: "bg-red-100 text-red-800",
};

const STATUS_DOT: Record<Status, string> = {
  processing: "bg-amber-500",
  shipped: "bg-blue-500",
  delivered: "bg-emerald-500",
  cancelled: "bg-red-500",
};

export default function OrdersListPage() {
  const [tab, setTab] = useState<(typeof FILTERS)[number]["id"]>("all");
  const [q, setQ] = useState("");

  const visible = ORDERS.filter((o) => {
    if (tab === "all") return true;
    if (tab === "returns") return false;
    return o.status === tab;
  }).filter((o) =>
    q
      ? o.id.toLowerCase().includes(q.toLowerCase()) ||
        o.items[0]?.name.toLowerCase().includes(q.toLowerCase())
      : true,
  );

  return (
    <AccountShell
      title="My Orders"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Account", href: "/account/profile" },
        { label: "My Orders" },
      ]}
      user={{ name: "Roshan K", email: "roshan@example.com" }}
    >
      <div className="mb-6 flex flex-col items-stretch gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:w-[320px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by order number or product"
            className="h-11 w-full rounded-xl border border-line bg-white pl-10 pr-4 text-[14px] outline-none focus:border-ink focus:ring-2 focus:ring-ink/10"
          />
        </div>
      </div>

      <div className="mb-6 flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setTab(f.id)}
            className={cn(
              "rounded-full px-4 py-2 text-[14px] font-semibold transition-colors",
              tab === f.id
                ? "bg-ink text-white border border-ink"
                : "border border-line bg-white text-muted hover:text-ink",
            )}
          >
            {f.label} <span className="ml-1 opacity-70">{f.n}</span>
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {visible.map((o) => (
          <div key={o.id} className="rounded-2xl border border-line bg-white p-5">
            <div className="mb-4 flex items-center justify-between text-[14px]">
              <div>
                <span className="font-bold text-ink">Order #{o.id}</span>
                <span className="ml-2 text-muted">· {o.date}</span>
              </div>
              <span
                className={cn(
                  "rounded-full px-3 py-1 text-[12px] font-bold uppercase tracking-wide",
                  STATUS_STYLES[o.status],
                )}
              >
                <span className={cn("mr-1.5 inline-block h-1.5 w-1.5 rounded-full align-middle", STATUS_DOT[o.status])} />
                {o.status}
              </span>
            </div>
            <div className="space-y-3">
              {o.items.slice(0, 2).map((it, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className={cn("flex h-14 w-14 flex-none items-center justify-center rounded-lg bg-gradient-to-br text-2xl", it.gradient)}>
                    {it.emoji}
                  </div>
                  <div className="flex-1">
                    <h4 className="text-[15px] font-semibold">{it.name}</h4>
                    <p className="text-[13px] text-muted">{it.variant} · Qty: {it.qty}</p>
                  </div>
                  <span className="text-[15px] font-bold">{formatINR(it.price * it.qty)}</span>
                </div>
              ))}
              {o.items.length > 2 && (
                <p className="text-[13px] text-muted">+ {o.items.length - 2} more item(s)</p>
              )}
            </div>
            <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-line pt-4">
              <p className="text-[14px]">
                <span className="text-muted">Total: </span>
                <span className="font-bold text-ink">{formatINR(o.total)}</span>
              </p>
              <div className="flex gap-2">
                {o.status === "processing" && (
                  <button className="rounded-lg border border-ink px-4 py-2 text-[13px] font-bold text-ink hover:bg-ink hover:text-white">
                    Track
                  </button>
                )}
                {o.status === "shipped" && (
                  <button className="rounded-lg border border-ink px-4 py-2 text-[13px] font-bold text-ink hover:bg-ink hover:text-white">
                    Track
                  </button>
                )}
                {o.status === "delivered" && (
                  <button className="rounded-lg border border-ink px-4 py-2 text-[13px] font-bold text-ink hover:bg-ink hover:text-white">
                    Reorder
                  </button>
                )}
                <Link
                  href={`/account/orders/${o.id}`}
                  className="rounded-lg bg-ink px-4 py-2 text-[13px] font-bold text-white hover:bg-black"
                >
                  Details
                </Link>
              </div>
            </div>
          </div>
        ))}
        {visible.length === 0 && (
          <div className="rounded-hype-lg border border-line bg-white p-12 text-center">
            <p className="text-[15px] text-muted">No orders match this filter.</p>
          </div>
        )}
      </div>
    </AccountShell>
  );
}
