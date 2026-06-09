"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import {
  Package,
  Truck,
  ShieldCheck,
  Check,
  X,
  ChevronDown,
  ArrowRight,
  ArrowUpRight,
  Box,
  TrendingUp,
  PackageCheck,
  Home,
  CircleDot,
} from "lucide-react";
import { fadeUp, stagger, reduceMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

const STATS = [
  { icon: Package, label: "Active Orders", n: "02", sub: "Currently in progress" },
  { icon: Truck, label: "Pending Pickup", n: "04", sub: "Awaiting courier pickup" },
  { icon: ShieldCheck, label: "In Authentication", n: "08", sub: "Being verified by HYPE" },
  { icon: Check, label: "Completed", n: "126", sub: "Successfully delivered" },
  { icon: X, label: "Cancelled", n: "02", sub: "Orders cancelled / refunded" },
];

const TABS = ["Pending Pickup", "In Authentication", "Completed", "Cancelled"] as const;

type OrderStatus = "pickup" | "in_transit" | "auth" | "delivered" | "cancelled";

const TIMELINE: { key: OrderStatus; icon: typeof Package; label: string; when: string }[] = [
  { key: "pickup", icon: Home, label: "Pickup scheduled", when: "Today, 4:00 – 7:00 PM" },
  { key: "in_transit", icon: Truck, label: "In transit to HYPE", when: "Estimated Aug 14" },
  { key: "auth", icon: ShieldCheck, label: "Authentication", when: "24–48 hours" },
  { key: "delivered", icon: PackageCheck, label: "Delivered to buyer", when: "Estimated Aug 18" },
];

interface Order {
  name: string;
  id: string;
  due: string;
  desc: string;
  action: string;
  status: OrderStatus;
  buyer: string;
  amount: string;
  orderedOn: string;
}

const ORDERS: Order[] = [
  {
    name: "Air Jordan 1 Retro High 'Chicago'",
    id: "#ORD-10928",
    due: "Pickup scheduled today, 4:00 – 7:00 PM",
    desc: "Our delivery partner will collect the item from your registered address. Pack securely with the HYPE shipping label.",
    action: "Track Pickup",
    status: "pickup",
    buyer: "Rahul M.",
    amount: "₹18,500",
    orderedOn: "Aug 11, 2026",
  },
  {
    name: "Yeezy 350 V2 'Beluga'",
    id: "#ORD-10931",
    due: "Authentication in progress",
    desc: "Your item is being verified by our authentication team. Verification usually takes 24-48 hours.",
    action: "View Status",
    status: "auth",
    buyer: "Aakash P.",
    amount: "₹25,200",
    orderedOn: "Aug 10, 2026",
  },
  {
    name: "Travis Scott Cactus Jack Hoodie",
    id: "#ORD-10934",
    due: "Delivered to buyer",
    desc: "Funds will be released to your wallet within 24 hours of confirmed delivery.",
    action: "View Details",
    status: "delivered",
    buyer: "Sneha K.",
    amount: "₹31,000",
    orderedOn: "Aug 6, 2026",
  },
];

const STEP_ORDER: OrderStatus[] = ["pickup", "in_transit", "auth", "delivered"];

function getActiveStep(status: OrderStatus): number {
  if (status === "cancelled") return -1;
  return STEP_ORDER.indexOf(status);
}

export default function OrdersPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Pending Pickup");
  const [expanded, setExpanded] = useState<string | null>(null);

  const filtered = ORDERS.filter((o) => {
    if (tab === "Pending Pickup") return o.status === "pickup" || o.status === "in_transit";
    if (tab === "In Authentication") return o.status === "auth";
    if (tab === "Completed") return o.status === "delivered";
    if (tab === "Cancelled") return o.status === "cancelled";
    return true;
  });

  return (
    <div>
      <motion.div
        className="dash-head"
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduceMotion({ duration: 0.4, ease: [0.16, 1, 0.3, 1] })}
      >
        <h1 className="font-disp text-[48px] font-extrabold leading-[1.02] tracking-tighter2">
          Orders &amp; Shipments
        </h1>
        <p className="mt-2 text-[18px] text-muted">
          Track pickups, authentication progress and completed orders.
        </p>
      </motion.div>

      <motion.div
        className="my-6 grid grid-cols-2 gap-4 lg:grid-cols-5"
        variants={stagger(0.05, 0.05)}
        initial="hidden"
        animate="show"
      >
        {STATS.map((s) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.label}
              variants={fadeUp}
              whileHover={{ y: -3 }}
              transition={reduceMotion({ duration: 0.2 })}
              className="rounded-hype bg-black p-5 text-white"
            >
              <div className="flex items-center gap-2.5 text-[14px] font-semibold text-[#e7e2da]">
                <Icon className="h-5 w-5" strokeWidth={1.8} />
                {s.label}
              </div>
              <div className="my-2 font-disp text-[46px] font-extrabold leading-none">{s.n}</div>
              <div className="text-[12px] text-[#8c867b]">{s.sub}</div>
            </motion.div>
          );
        })}
      </motion.div>

      <LayoutGroup id="dashboard-orders-tabs">
        <div className="mb-5.5 flex flex-wrap items-center gap-3">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn(
                "relative rounded-full px-[26px] py-3 text-[15px] font-semibold transition-colors",
                tab === t ? "text-white" : "bg-transparent text-muted hover:text-ink",
              )}
            >
              {tab === t && (
                <motion.span
                  layoutId="dashboard-orders-tab-bg"
                  className="absolute inset-0 rounded-full bg-ink"
                  transition={reduceMotion({ duration: 0.3, ease: [0.16, 1, 0.3, 1] })}
                />
              )}
              <span className="relative z-10">{t}</span>
            </button>
          ))}
          <div className="ml-auto flex items-center gap-[18px] rounded-[12px] border border-line bg-cream-2 px-[18px] py-3 text-[14px] font-medium">
            Sort by: Newest
            <ChevronDown className="h-3 w-3" />
          </div>
        </div>
      </LayoutGroup>

      <div className="grid grid-cols-1 gap-7 lg:grid-cols-[1fr_380px]">
        <div>
          {filtered.length === 0 ? (
            <div className="rounded-hype-lg border border-dashed border-line bg-cream-2 p-12 text-center">
              <Package className="mx-auto h-10 w-10 text-muted-2" strokeWidth={1.4} />
              <p className="mt-3 font-disp text-[20px] font-extrabold">No orders here yet</p>
              <p className="mt-1 text-[14px] text-muted">
                When an order matches this status, it&apos;ll show up here.
              </p>
            </div>
          ) : (
            <motion.div
              key={tab}
              variants={stagger(0.07, 0.05)}
              initial="hidden"
              animate="show"
            >
            {filtered.map((o) => {
              const open = expanded === o.id;
              return (
                <motion.div
                  key={o.id}
                  variants={fadeUp}
                  layout
                  className="mb-5 rounded-hype-lg border border-line-soft bg-cream-2 p-6 transition-shadow hover:shadow-sm"
                >
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <h3 className="font-disp text-[22px] font-extrabold">{o.name}</h3>
                      <div className="mt-1 flex items-center gap-3 text-[13px] text-muted">
                        <span>{o.id}</span>
                        <span>•</span>
                        <span>Buyer: {o.buyer}</span>
                        <span>•</span>
                        <span>{o.orderedOn}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
                        Amount
                      </div>
                      <div className="font-disp text-[20px] font-extrabold">{o.amount}</div>
                    </div>
                  </div>

                  <div className="my-2 flex items-center gap-2 font-semibold text-hype-red">
                    <CircleDot className="h-4 w-4" />
                    {o.due}
                  </div>
                  <p className="mb-4 text-[15px] text-muted">{o.desc}</p>

                  <div className="flex flex-wrap items-center gap-2">
                    <button
                      onClick={() => setExpanded(open ? null : o.id)}
                      className="rounded-[10px] bg-ink px-6 py-3 text-[14px] font-semibold text-white hover:bg-black"
                    >
                      {o.action}
                      <ArrowRight className="ml-2 inline-block h-4 w-4" />
                    </button>
                    <button
                      onClick={() => setExpanded(open ? null : o.id)}
                      className="rounded-[10px] border border-line bg-white px-5 py-3 text-[14px] font-semibold text-ink hover:border-ink"
                    >
                      {open ? "Hide timeline" : "View timeline"}
                    </button>
                  </div>

                  <AnimatePresence initial={false}>
                    {open && o.status !== "cancelled" && (
                      <motion.div
                        key="timeline"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={reduceMotion({ duration: 0.3, ease: [0.16, 1, 0.3, 1] })}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="border-t border-line-soft pt-5">
                          <div className="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-muted">
                            Status timeline
                          </div>
                          <ol className="relative pl-7">
                            <span
                              aria-hidden
                              className="absolute left-[10px] top-1.5 bottom-1.5 w-px bg-line"
                            />
                            {TIMELINE.map((step, i) => {
                              const active = getActiveStep(o.status);
                              const done = active > i;
                              const current = active === i;
                              const Icon = step.icon;
                              return (
                                <li key={step.key} className="relative mb-4 last:mb-0">
                                  <span
                                    className={cn(
                                      "absolute -left-7 top-0 flex h-5 w-5 items-center justify-center rounded-full border-2",
                                      done
                                        ? "border-ink bg-ink text-white"
                                        : current
                                          ? "border-ink bg-white text-ink"
                                          : "border-line bg-cream-2 text-muted-2",
                                    )}
                                  >
                                    {done ? (
                                      <Check className="h-3 w-3" strokeWidth={3} />
                                    ) : (
                                      <Icon className="h-3 w-3" strokeWidth={2} />
                                    )}
                                  </span>
                                  <div
                                    className={cn(
                                      "text-[14px] font-bold",
                                      done || current ? "text-ink" : "text-muted-2",
                                    )}
                                  >
                                    {step.label}
                                    {current && (
                                      <span className="ml-2 rounded-full bg-hype-red/10 px-2 py-0.5 text-[11px] font-bold text-hype-red">
                                        Current
                                      </span>
                                    )}
                                  </div>
                                  <div className="text-[13px] text-muted">{step.when}</div>
                                </li>
                              );
                            })}
                          </ol>
                        </div>
                      </motion.div>
                    )}
                    {open && o.status === "cancelled" && (
                      <motion.div
                        key="cancelled"
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={reduceMotion({ duration: 0.25 })}
                        style={{ overflow: "hidden" }}
                      >
                        <div className="border-t border-line-soft pt-5 text-[14px] text-muted">
                          This order was cancelled. Funds (if any) have been returned to the buyer.
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
            </motion.div>
          )}
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
          href="/contact"
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
