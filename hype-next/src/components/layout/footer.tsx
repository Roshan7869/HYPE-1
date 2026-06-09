"use client";

import { AtSign, Camera, Globe } from "lucide-react";
import Link from "next/link";
import { FOOTER_LINKS, SITE_CONFIG } from "@/lib/constants";

/**
 * Detailed footer used on the home page. 5-column layout with brand,
 * social icons, and the app download call-out.
 */
export function FooterDetailed() {
  return (
    <footer className="bg-ink text-[#cdc7bd]">
      <div className="wrap grid gap-12 py-[84px] md:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-[18px] font-disp text-[38px] font-extrabold tracking-tighter2 text-[#efe9df]">
            HYPE.
          </div>
          <p className="mb-[18px] text-[15px] text-[#b7b0a4]">The market decides.</p>
          <p className="text-[13px] text-[#7c756a]">© 2024 HYPE. All rights reserved.</p>
          <div className="mt-6 flex gap-4">
            <Link href="#" aria-label="Instagram">
              <Camera className="h-5 w-5 text-[#b7b0a4] hover:text-white" />
            </Link>
            <Link href="#" aria-label="Twitter">
              <AtSign className="h-5 w-5 text-[#b7b0a4] hover:text-white" />
            </Link>
            <Link href="#" aria-label="YouTube">
              <Globe className="h-5 w-5 text-[#b7b0a4] hover:text-white" />
            </Link>
          </div>
        </div>

        <FooterCol title="Market" links={FOOTER_LINKS.market} />
        <FooterCol title="Sell" links={FOOTER_LINKS.sell} />
        <FooterCol title="Company" links={FOOTER_LINKS.company} />
        <FooterCol title="Support" links={FOOTER_LINKS.support} />
      </div>

      <div className="wrap flex flex-col items-start justify-between gap-6 border-t border-white/10 py-6 md:flex-row md:items-center">
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
    </footer>
  );
}

/** Standard footer used on shop, live-auctions, sell-with-us, dashboard. */
export function Footer() {
  return (
    <footer className="bg-ink text-[#cdc7bd]">
      <div className="wrap grid gap-12 py-[84px] md:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <div className="mb-[18px] font-disp text-[38px] font-extrabold tracking-tighter2 text-[#efe9df]">
            HYPE.
          </div>
          <p className="max-w-[330px] text-[13px] uppercase leading-[1.7] tracking-[0.04em] text-[#8f887d]">
            India&apos;s First Live Auction Marketplace
            <br />
            THEHYPECOMPANY.IN
          </p>
        </div>

        <FooterCol title="Quick Links" links={FOOTER_LINKS.market.slice(0, 5)} />
        <div>
          <h4 className="mb-6 font-disp text-[20px] font-extrabold tracking-[0.02em] text-[#efe9df]">
            Social Links
          </h4>
          <p className="text-[15px] uppercase leading-[1.6] tracking-[0.04em] text-[#b7b0a4]">
            <span className="font-bold text-[#efe9df]">{SITE_CONFIG.twitter}</span> ON X AND OTHER
            PLATFORMS
          </p>
        </div>
        <div>
          <h4 className="mb-6 font-disp text-[20px] font-extrabold tracking-[0.02em] text-[#efe9df]">
            Download Our App
          </h4>
        </div>
      </div>

      <div className="wrap flex flex-col items-start justify-between gap-4 py-8 md:flex-row md:items-end">
        <div className="font-disp text-[17px] font-extrabold tracking-[0.04em] text-[#cdc7bd]">
          The Hype Company
          <small className="mt-1 block text-[11px] font-medium uppercase tracking-[0.1em] text-[#7c756a]">
            All rights reserved
          </small>
        </div>
        <div className="text-[11px] uppercase tracking-[0.1em] text-[#7c756a]">With policy links</div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: ReadonlyArray<{ label: string; href: string }>;
}) {
  return (
    <div>
      <h4 className="mb-6 font-disp text-[20px] font-extrabold tracking-[0.02em] text-[#efe9df]">
        {title}
      </h4>
      <ul className="flex flex-col gap-[15px]">
        {links.map((l) => (
          <li key={l.label}>
            <Link
              href={l.href}
              className="text-[15px] uppercase tracking-[0.05em] text-[#b7b0a4] hover:text-white"
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
