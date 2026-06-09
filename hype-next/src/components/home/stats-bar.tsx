"use client";

import Link from "next/link";
import { Activity, Users, Coins, ArrowRight, type LucideIcon } from "lucide-react";
import { STATS } from "@/lib/constants";
import { AnimatedCounter } from "@/components/shared/animated-counter";
import { formatINR } from "@/lib/utils";

export function StatsBar() {
  return (
    <section className="border-t border-line bg-sand-hero">
      <div className="wrap flex flex-col items-stretch py-[30px] md:flex-row md:items-center">
        <Stat icon={Activity} value={STATS.liveAuctions.toString()} label="Live Auctions" />
        <Stat
          icon={Users}
          value={
            <AnimatedCounter to={STATS.usersWatching} format={(n) => `${(n / 1000).toFixed(1)}K`} />
          }
          label="Users Watching"
        />
        <Stat
          icon={Coins}
          value={
            <AnimatedCounter
              to={STATS.totalVolume}
              format={(n) =>
                n >= 10_000_000 ? `₹${(n / 10_000_000).toFixed(1)} CR+` : formatINR(n)
              }
            />
          }
          label="Total Volume"
        />
        <Link
          href="/live-auctions"
          className="ml-auto flex items-center gap-3 font-disp text-[18px] font-extrabold uppercase tracking-[0.06em] text-ink transition-colors hover:text-hype-gold"
        >
          <Activity className="h-[22px] w-[22px]" strokeWidth={2} />
          Market Pulse
          <ArrowRight className="h-[22px] w-[22px]" strokeWidth={2} />
        </Link>
      </div>
    </section>
  );
}

function Stat({
  icon: Icon,
  value,
  label,
}: {
  icon: LucideIcon;
  value: React.ReactNode;
  label: string;
}) {
  return (
    <div className="flex items-center gap-4 border-r border-line px-12 first:pl-0 last:border-r-0 max-md:border-r-0 max-md:border-b max-md:px-0 max-md:py-3">
      <Icon className="h-[34px] w-[34px] opacity-85" strokeWidth={2} />
      <div>
        <b className="block font-disp text-[30px] font-extrabold leading-none">{value}</b>
        <span className="text-[12px] font-semibold uppercase tracking-[0.13em] text-muted">
          {label}
        </span>
      </div>
    </div>
  );
}
