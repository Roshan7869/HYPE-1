"use client";

import { useState } from "react";
import Link from "next/link";
import { Clock } from "lucide-react";
import { AccountShell } from "@/components/account/account-shell";
import { cn, formatINR } from "@/lib/utils";

type Bid = {
  id: string;
  name: string;
  variant: string;
  yourBid: number;
  currentBid: number;
  endsIn: number; // minutes
  state: "leading" | "outbid" | "won" | "lost";
  gradient: string;
  emoji: string;
  time: string;
};

const ACTIVE: Bid[] = [
  { id: "b1", name: "Air Jordan 1 Retro High OG 'Chicago'", variant: "UK 9 · DS/Brand New", yourBid: 24500, currentBid: 24999, endsIn: 134, state: "outbid", gradient: "from-stone-200 to-stone-400", emoji: "👟", time: "2h 14m" },
  { id: "b2", name: "Yeezy 350 V2 Black", variant: "UK 8 · DS/Brand New", yourBid: 18000, currentBid: 18000, endsIn: 45, state: "leading", gradient: "from-stone-700 to-stone-900", emoji: "👟", time: "45m" },
  { id: "b3", name: "Adidas Samba OG Cloud White", variant: "UK 10 · DS", yourBid: 13500, currentBid: 14200, endsIn: 320, state: "outbid", gradient: "from-amber-100 to-amber-200", emoji: "👟", time: "5h 20m" },
];

const WON: Bid[] = [
  { id: "w1", name: "Nike Dunk Low Panda", variant: "UK 10 · DS/Brand New", yourBid: 9999, currentBid: 9999, endsIn: 0, state: "won", gradient: "from-stone-100 to-stone-300", emoji: "👟", time: "Won 2h ago" },
  { id: "w2", name: "Off-White x AJ1 Chicago", variant: "UK 9 · DS/Brand New", yourBid: 83500, currentBid: 83500, endsIn: 0, state: "won", gradient: "from-amber-100 to-orange-200", emoji: "👟", time: "Won yesterday" },
];

const LOST: Bid[] = [
  { id: "l1", name: "Travis Scott AJ1 Mocha", variant: "UK 10 · DS", yourBid: 78000, currentBid: 82500, endsIn: 0, state: "lost", gradient: "from-stone-600 to-stone-800", emoji: "👟", time: "Lost 3d ago" },
];

const TABS = [
  { id: "active", label: "Active", n: ACTIVE.length },
  { id: "won", label: "Won", n: WON.length },
  { id: "lost", label: "Lost", n: LOST.length },
  { id: "all", label: "All", n: ACTIVE.length + WON.length + LOST.length },
] as const;

export default function BidsPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]["id"]>("active");
  const all = [...ACTIVE, ...WON, ...LOST];
  const visible = tab === "all" ? all : all.filter((b) => b.state === tab);

  return (
    <AccountShell
      title="My Bids"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Account", href: "/account/profile" },
        { label: "My Bids" },
      ]}
      user={{ name: "Roshan K", email: "roshan@example.com" }}
    >
      <div className="mb-6 flex flex-wrap items-center gap-1 border-b border-line">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={cn(
              "flex items-center gap-2 px-5 py-3 text-[15px] font-semibold transition-colors",
              tab === t.id
                ? "border-b-2 border-ink text-ink"
                : "text-muted hover:text-ink",
            )}
          >
            {t.label}
            <span
              className={cn(
                "rounded-full px-2 py-0.5 text-[12px] font-bold",
                tab === t.id ? "bg-ink text-white" : "bg-cream-3 text-muted",
              )}
            >
              {t.n}
            </span>
          </button>
        ))}
      </div>

      <div className="space-y-4">
        {visible.map((b) => (
          <BidCard key={b.id} bid={b} />
        ))}
        {visible.length === 0 && (
          <div className="rounded-hype-lg border border-line bg-white p-12 text-center">
            <p className="text-[15px] text-muted">No bids in this tab yet.</p>
          </div>
        )}
      </div>
    </AccountShell>
  );
}

function BidCard({ bid }: { bid: Bid }) {
  return (
    <div className="rounded-2xl border border-line bg-white p-5">
      <div className="flex items-start gap-4">
        <div className={cn("flex h-20 w-20 flex-none items-center justify-center rounded-xl bg-gradient-to-br text-3xl", bid.gradient)}>
          {bid.emoji}
        </div>
        <div className="flex-1">
          <h3 className="font-disp text-[16px] font-extrabold">{bid.name}</h3>
          <p className="mt-0.5 text-[13px] text-muted">{bid.variant}</p>
          <div className="mt-3 flex flex-wrap items-center gap-6 text-[14px]">
            <div>
              <p className="text-muted">Your bid</p>
              <p className="font-bold">{formatINR(bid.yourBid)}</p>
            </div>
            <div>
              <p className="text-muted">Current</p>
              <p className="font-bold">{formatINR(bid.currentBid)}</p>
            </div>
          </div>
          {bid.state === "outbid" || bid.state === "leading" ? (
            <div className="mt-3 flex items-center gap-2">
              <span
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-[12px] font-bold",
                  bid.state === "leading" && "bg-hype-green text-hype-green-ink",
                  bid.state === "outbid" && "bg-hype-red/15 text-hype-red",
                )}
              >
                {bid.state === "leading" ? "● Leading" : "● Outbid"}
              </span>
              <span className="flex items-center gap-1 text-[13px] font-semibold text-hype-red">
                <Clock className="h-3.5 w-3.5" /> {bid.time} remaining
              </span>
            </div>
          ) : bid.state === "won" ? (
            <div className="mt-3 flex items-center gap-2">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-hype-green px-2.5 py-1 text-[12px] font-bold text-hype-green-ink">
                ● Won · {bid.time}
              </span>
              <span className="text-[13px] font-semibold text-amber-600">
                ⏰ Payment due in 22:00:00
              </span>
            </div>
          ) : (
            <div className="mt-3">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-cream-3 px-2.5 py-1 text-[12px] font-bold text-muted">
                ✕ Lost · {bid.time}
              </span>
            </div>
          )}
        </div>
        <div className="flex flex-col gap-2">
          {bid.state === "leading" && (
            <Link
              href="/live-auctions"
              className="rounded-lg border-[1.5px] border-ink px-5 py-2.5 text-[13px] font-bold text-ink transition-colors hover:bg-ink hover:text-white"
            >
              View Auction
            </Link>
          )}
          {bid.state === "outbid" && (
            <button className="rounded-lg bg-ink px-5 py-2.5 text-[13px] font-bold text-white hover:bg-black">
              Increase Bid
            </button>
          )}
          {bid.state === "won" && (
            <button className="rounded-lg bg-ink px-5 py-2.5 text-[13px] font-bold text-white hover:bg-black">
              Complete Payment
            </button>
          )}
          {bid.state === "lost" && (
            <button className="rounded-lg border-[1.5px] border-ink px-5 py-2.5 text-[13px] font-bold text-ink hover:bg-ink hover:text-white">
              Find Similar
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
