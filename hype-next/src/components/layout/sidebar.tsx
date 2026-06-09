"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  ListChecks,
  PlusSquare,
  Package,
  Wallet,
  BarChart3,
  Settings,
  Star,
  Check,
} from "lucide-react";
import { cn } from "@/lib/utils";

const SIDEBAR_LINKS = [
  { key: "overview", label: "Overview", href: "/dashboard", icon: LayoutDashboard },
  { key: "listings", label: "My Listings", href: "/dashboard/listings", icon: ListChecks },
  { key: "create", label: "Create Listing", href: "/dashboard/listings/new", icon: PlusSquare },
  {
    key: "orders",
    label: "Orders & Shipments",
    href: "/dashboard/orders",
    icon: Package,
  },
  { key: "payouts", label: "Payouts & Earnings", href: "/dashboard/payouts", icon: Wallet },
  { key: "analytics", label: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { key: "settings", label: "Account Settings", href: "/dashboard/settings", icon: Settings },
] as const;

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="relative flex min-h-[880px] flex-col overflow-hidden rounded-[26px] bg-black">
      <div className="relative z-[2] px-[22px] pb-2 pt-[26px]">
        <span className="inline-flex items-center gap-2 rounded-full bg-white px-3 py-1.5 text-[12px] font-semibold text-hype-green-ink">
          <Check className="h-3.5 w-3.5" strokeWidth={2.4} />
          Verified seller
        </span>
        <div className="mt-3.5 text-[15px] font-bold text-white">HYPE India Store</div>
        <div className="mt-0.5 flex items-center gap-1 text-[13px] text-[#b7b0a4]">
          <Star className="h-3 w-3 fill-[#c9c2b6] text-[#c9c2b6]" /> 4.8
        </div>
      </div>

      <nav className="relative z-[2] flex flex-col gap-2.5 px-[18px] pt-5">
        {SIDEBAR_LINKS.map((link) => {
          const Icon = link.icon;
          const active = pathname === link.href || pathname.startsWith(link.href + "/");
          return (
            <Link
              key={link.key}
              href={link.href}
              className={cn(
                "flex items-center gap-3 rounded-[13px] border border-transparent px-4 py-3.5 text-[15px] font-medium text-[#c9c2b6] transition-colors hover:bg-white/[0.06] hover:text-white",
                active && "border-transparent bg-white text-ink font-semibold",
              )}
            >
              <Icon className="h-[18px] w-[18px]" strokeWidth={1.7} />
              {link.label}
            </Link>
          );
        })}
      </nav>

      <div className="side-emboss" aria-hidden />
    </aside>
  );
}
