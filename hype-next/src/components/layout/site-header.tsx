"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Shop", href: "/shop" },
  { label: "Live Auctions", href: "/live-auctions" },
  { label: "Sell With Us", href: "/sell-with-us" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export function SiteHeader() {
  const pathname = usePathname();

  return (
    <header className="bg-ink text-white">
      <div className="wrap flex h-[88px] items-center gap-8">
        <Link href="/" className="font-disp text-[30px] font-extrabold tracking-tighter2 text-white">
          HYPE.
        </Link>
        <nav className="hidden flex-1 items-center justify-center gap-[34px] md:flex">
          {NAV_ITEMS.map((l) => {
            const active =
              pathname === l.href || (l.href !== "/" && pathname.startsWith(l.href));
            return (
              <Link
                key={l.label}
                href={l.href}
                className={cn(
                  "relative text-[14px] font-semibold uppercase tracking-[0.06em]",
                  active
                    ? "text-white after:absolute after:-bottom-[2px] after:left-0 after:right-0 after:h-[2px] after:bg-white"
                    : "text-[#e7e2da] hover:text-white",
                )}
              >
                {l.label}
              </Link>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-3.5">
          <Link
            href="/login"
            className="rounded-full border-[1.5px] border-white/50 px-[26px] py-[13px] text-[14px] font-semibold tracking-[0.04em] text-white hover:border-white hover:bg-white/[0.06]"
          >
            Login
          </Link>
          <Link
            href="/signup"
            className="rounded-full bg-cream px-[26px] py-[13px] text-[14px] font-bold tracking-[0.04em] text-ink hover:bg-white"
          >
            Sign Up
          </Link>
        </div>
      </div>
    </header>
  );
}
