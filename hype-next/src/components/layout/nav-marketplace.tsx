"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Search, Menu, X } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function NavMarketplace() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-ink text-white">
      <div className="wrap flex h-[88px] items-center gap-8">
        <Link href="/" className="font-disp text-[30px] font-extrabold tracking-tighter2 text-white">
          HYPE.
        </Link>

        <nav className="ml-[18px] hidden items-center gap-[34px] md:flex">
          {NAV_LINKS.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.label}
                href={link.href}
                className={cn(
                  "relative px-0 py-1.5 text-[14px] font-semibold uppercase tracking-[0.06em] text-[#e7e2da] transition-colors hover:text-white",
                  active && "text-white",
                )}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-[2px] left-0 right-0 h-[2px] bg-white" />
                )}
              </Link>
            );
          })}
        </nav>

        <div className="ml-auto hidden max-w-[430px] flex-1 items-center gap-2.5 rounded-full bg-white px-[22px] py-[13px] text-sm text-[#6b6b6b] md:flex">
          <Search className="h-[17px] w-[17px] opacity-60" />
          <span>Search auctions, items...</span>
        </div>

        <div className="ml-auto flex items-center gap-5 md:ml-0">
          <Link
            href="/login"
            className="hidden text-[13px] font-semibold uppercase tracking-[0.08em] md:inline-block hover:text-white"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="hidden rounded-lg bg-cream px-6 py-[13px] text-[13px] font-bold uppercase tracking-[0.06em] text-ink hover:bg-white md:inline-block"
          >
            Register
          </Link>
          <button
            aria-label="menu"
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 items-center justify-center md:hidden"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="md:hidden">
          <div className="wrap flex flex-col gap-4 pb-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="text-[14px] font-semibold uppercase tracking-[0.06em] text-[#e7e2da] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <div className="flex items-center gap-2.5 rounded-full bg-white px-5 py-3 text-sm text-[#6b6b6b]">
              <Search className="h-4 w-4 opacity-60" />
              <span>Search auctions, items...</span>
            </div>
            <div className="flex gap-2">
              <Link
                href="/login"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-lg border border-white/20 px-4 py-2.5 text-center text-[13px] font-bold uppercase tracking-[0.06em] text-white"
              >
                Sign in
              </Link>
              <Link
                href="/signup"
                onClick={() => setOpen(false)}
                className="flex-1 rounded-lg bg-cream px-4 py-2.5 text-center text-[13px] font-bold uppercase tracking-[0.06em] text-ink"
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
