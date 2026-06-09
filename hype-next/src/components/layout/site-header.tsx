"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Search, Menu, X, User } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { cn } from "@/lib/utils";
import { MobileAccountMenu } from "@/components/layout/mobile-account-menu";

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [accountOpen, setAccountOpen] = useState(false);

  return (
    <header className="relative bg-ink text-white">
      <div className="wrap flex h-[88px] items-center gap-4 md:gap-8">
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

        {/* Desktop auth buttons (Sign in + Register) */}
        <div className="ml-auto hidden items-center gap-5 md:flex">
          <Link
            href="/login"
            className="text-[13px] font-semibold uppercase tracking-[0.08em] hover:text-white"
          >
            Sign in
          </Link>
          <Link
            href="/signup"
            className="rounded-lg bg-cream px-6 py-[13px] text-[13px] font-bold uppercase tracking-[0.06em] text-ink hover:bg-white"
          >
            Register
          </Link>
        </div>

        {/* Mobile: account icon + hamburger (no text auth buttons) */}
        <div className="ml-auto flex items-center gap-1 md:hidden">
          <button
            aria-label="Account"
            aria-expanded={accountOpen}
            aria-haspopup="menu"
            onClick={() => {
              setAccountOpen((o) => !o);
              setOpen(false);
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/10"
          >
            <User className="h-5 w-5" strokeWidth={1.8} />
          </button>
          <button
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => {
              setOpen((o) => !o);
              setAccountOpen(false);
            }}
            className="flex h-10 w-10 items-center justify-center rounded-full transition-colors hover:bg-white/10"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile drawer (hamburger): nav links + search only. Auth moved to account icon. */}
      {open && (
        <div className="border-t border-white/10 md:hidden">
          <div className="wrap flex flex-col gap-4 pb-6 pt-4">
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
          </div>
        </div>
      )}

      {/* Account dropdown (mobile only — desktop doesn't render it because the icon is hidden md:hidden) */}
      <MobileAccountMenu open={accountOpen} onClose={() => setAccountOpen(false)} />
    </header>
  );
}
