"use client";

import { AtSign, Camera, Globe } from "lucide-react";
import Link from "next/link";
import { FOOTER_LINKS } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="bg-ink text-[#cdc7bd]">
      {/* Desktop / tablet (md+): keep the existing 6-col grid */}
      <div className="hidden gap-12 py-[84px] md:grid md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr_1fr] md:px-0">
        <FooterBrand />
        <FooterCol title="Market" links={FOOTER_LINKS.market} />
        <FooterCol title="Account" links={FOOTER_LINKS.account} />
        <FooterCol title="Sell" links={FOOTER_LINKS.sell} />
        <FooterCol title="Company" links={FOOTER_LINKS.company} />
        <FooterCol title="Support" links={FOOTER_LINKS.support} />
      </div>

      {/* Mobile: handset-first stacked layout */}
      <div className="md:hidden">
        {/* Brand row */}
        <div className="px-5 pt-12 pb-8 text-center">
          <div className="mb-3 font-disp text-[34px] font-extrabold tracking-tighter2 text-[#efe9df]">
            HYPE.
          </div>
          <p className="mb-5 text-[14px] text-[#b7b0a4]">The market decides.</p>
          <div className="flex justify-center gap-5">
            <Link href="/about" aria-label="Instagram" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15">
              <Camera className="h-4 w-4 text-[#b7b0a4]" />
            </Link>
            <Link href="/about" aria-label="Twitter" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15">
              <AtSign className="h-4 w-4 text-[#b7b0a4]" />
            </Link>
            <Link href="/about" aria-label="YouTube" className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15">
              <Globe className="h-4 w-4 text-[#b7b0a4]" />
            </Link>
          </div>
        </div>

        {/* 2-col link grid */}
        <div className="grid grid-cols-2 gap-x-6 gap-y-8 border-t border-white/10 px-5 py-10">
          <FooterCol title="Market" links={FOOTER_LINKS.market} compact />
          <FooterCol title="Account" links={FOOTER_LINKS.account} compact />
          <FooterCol title="Sell" links={FOOTER_LINKS.sell} compact />
          <FooterCol title="Company" links={FOOTER_LINKS.company} compact />
        </div>

        {/* Support full-width */}
        <div className="border-t border-white/10 px-5 py-8">
          <FooterCol title="Support" links={FOOTER_LINKS.support} compact />
        </div>

        {/* Compact bottom action bar */}
        <div className="border-t border-white/10 px-5 py-6">
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.16em] text-[#8f887d]">
            Download the app
          </p>
          <div className="flex gap-2">
            <span className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-white/15 bg-[#1c1a16] py-2.5 text-[13px] text-[#cdc7bd]">
              App Store
            </span>
            <span className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-full border border-white/15 bg-[#1c1a16] py-2.5 text-[13px] text-[#cdc7bd]">
              Google Play
            </span>
          </div>
          <p className="mt-5 text-center text-[12px] text-[#7c756a]">© 2024 HYPE. All rights reserved.</p>
        </div>
      </div>

      {/* Desktop / tablet bottom bar */}
      <div className="hidden border-t border-white/10 md:block">
        <div className="wrap flex flex-col items-start justify-between gap-6 py-6 md:flex-row md:items-center">
          <div className="text-[13px] uppercase tracking-[0.06em] text-[#8f887d]">
            Download the app — Coming soon
          </div>
          <div className="flex gap-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#1c1a16] px-4 py-2 text-sm text-[#cdc7bd]">
              App Store
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-[#1c1a16] px-4 py-2 text-sm text-[#cdc7bd]">
              Google Play
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterBrand() {
  return (
    <div>
      <div className="mb-[18px] font-disp text-[38px] font-extrabold tracking-tighter2 text-[#efe9df]">
        HYPE.
      </div>
      <p className="mb-[18px] text-[15px] text-[#b7b0a4]">The market decides.</p>
      <p className="text-[13px] text-[#7c756a]">© 2024 HYPE. All rights reserved.</p>
      <div className="mt-6 flex gap-4">
        <Link href="/about" aria-label="Instagram">
          <Camera className="h-5 w-5 text-[#b7b0a4] hover:text-white" />
        </Link>
        <Link href="/about" aria-label="Twitter">
          <AtSign className="h-5 w-5 text-[#b7b0a4] hover:text-white" />
        </Link>
        <Link href="/about" aria-label="YouTube">
          <Globe className="h-5 w-5 text-[#b7b0a4] hover:text-white" />
        </Link>
      </div>
    </div>
  );
}

function FooterCol({
  title,
  links,
  compact = false,
}: {
  title: string;
  links: ReadonlyArray<{ label: string; href: string }>;
  compact?: boolean;
}) {
  return (
    <div>
      <h4
        className={
          compact
            ? "mb-3 font-disp text-[12px] font-extrabold uppercase tracking-[0.14em] text-[#efe9df]"
            : "mb-6 font-disp text-[20px] font-extrabold tracking-[0.02em] text-[#efe9df]"
        }
      >
        {title}
      </h4>
      <ul className={compact ? "flex flex-col gap-2.5" : "flex flex-col gap-[15px]"}>
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className={
                compact
                  ? "text-[13px] tracking-[0.02em] text-[#b7b0a4] hover:text-white"
                  : "text-[15px] uppercase tracking-[0.05em] text-[#b7b0a4] hover:text-white"
              }
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
