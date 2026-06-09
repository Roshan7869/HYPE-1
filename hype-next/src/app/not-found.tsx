"use client";

import { useState } from "react";
import Link from "next/link";
import { Search } from "lucide-react";
import { Footer } from "@/components/layout/footer";

export default function NotFound() {
  const [q, setQ] = useState("");
  return (
    <div className="min-h-screen bg-sand">
      <header className="bg-transparent">
        <div className="wrap flex h-20 items-center">
          <Link href="/" className="font-disp text-[28px] font-extrabold tracking-tighter2 text-ink">HYPE.</Link>
        </div>
      </header>

      <main className="wrap flex flex-col items-center px-4 pb-20 pt-12 text-center">
        <p
          aria-hidden
          className="select-none font-disp text-[160px] font-extrabold leading-[0.9] tracking-tighter2 text-ink/[0.08] md:text-[200px]"
        >
          404
        </p>
        <h1 className="-mt-10 font-disp text-[32px] font-extrabold tracking-tighter2 text-ink md:text-[36px]">
          Page Not Found
        </h1>
        <p className="mt-3 max-w-md text-[15px] leading-[1.6] text-muted">
          The page you&apos;re looking for doesn&apos;t exist or has been moved. Let&apos;s get you back on track.
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <Link
            href="/shop"
            className="inline-flex h-12 items-center rounded-full bg-ink px-8 text-[15px] font-bold text-white transition-colors hover:bg-black"
          >
            Browse Products
          </Link>
          <Link
            href="/"
            className="inline-flex h-12 items-center rounded-full border-[1.5px] border-ink px-8 text-[15px] font-bold text-ink transition-colors hover:bg-ink hover:text-white"
          >
            Go Home
          </Link>
        </div>

        <div className="my-10 flex w-full max-w-md items-center gap-4">
          <div className="h-px flex-1 bg-line" />
          <span className="text-[12px] font-bold uppercase tracking-[0.18em] text-muted">or try searching</span>
          <div className="h-px flex-1 bg-line" />
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            if (q) window.location.href = `/shop?q=${encodeURIComponent(q)}`;
          }}
          className="relative w-full max-w-md"
        >
          <Search className="absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-muted" />
          <input
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search for sneakers, brands..."
            className="h-12 w-full rounded-full border border-line bg-white pl-12 pr-5 text-[14px] outline-none focus:border-ink focus:ring-2 focus:ring-ink/10"
          />
        </form>

        <p className="mt-12 text-[12px] font-bold uppercase tracking-[0.18em] text-muted">Popular Pages</p>
        <nav className="mt-3 flex flex-wrap items-center justify-center gap-x-4 gap-y-2 text-[15px] font-semibold text-ink">
          <Link href="/shop" className="hover:underline">Shop</Link>
          <span className="text-muted">·</span>
          <Link href="/live-auctions" className="hover:underline">Auctions</Link>
          <span className="text-muted">·</span>
          <Link href="/sell-with-us" className="hover:underline">Sell With Us</Link>
          <span className="text-muted">·</span>
          <Link href="/faq" className="hover:underline">Help</Link>
        </nav>
      </main>

      <Footer />
    </div>
  );
}
