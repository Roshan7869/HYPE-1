import Link from "next/link";
import { Footer } from "@/components/layout/footer";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import { ShopView } from "@/components/shop/shop-view";
import { AUCTIONS } from "@/lib/mock-data";

export const metadata = {
  title: "Shop — HYPE",
  description: "Browse authentic sneakers, streetwear, and collectibles.",
};

export default function ShopPage() {
  return (
    <div className="page">
      <header className="bg-ink text-white">
        <div className="wrap flex h-[88px] items-center gap-8">
          <Link href="/" className="font-disp text-[30px] font-extrabold tracking-tighter2 text-white">
            HYPE.
          </Link>
          <nav className="flex flex-1 items-center justify-center gap-[34px]">
            {[
              { label: "Home", href: "/" },
              { label: "Shop", href: "/shop", active: true },
              { label: "Live Auctions", href: "/live-auctions" },
              { label: "Sell With Us", href: "/sell-with-us" },
              { label: "About", href: "#" },
              { label: "Contact", href: "#" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className={`relative text-[14px] font-semibold uppercase tracking-[0.06em] ${l.active ? "text-white after:absolute after:-bottom-[2px] after:left-0 after:right-0 after:h-[2px] after:bg-white" : "text-[#e7e2da] hover:text-white"}`}
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-3.5">
            <Link
              href="#"
              className="rounded-full border-[1.5px] border-white/50 px-[26px] py-[13px] text-[14px] font-semibold tracking-[0.04em] text-white hover:border-white hover:bg-white/[0.06]"
            >
              Login
            </Link>
            <Link
              href="#"
              className="rounded-full bg-cream px-[26px] py-[13px] text-[14px] font-semibold tracking-[0.04em] text-ink hover:bg-white"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      <Breadcrumb
        crumbs={[{ label: "Home", href: "/" }, { label: "Shop" }]}
      />

      <main className="flex-1 bg-shop-bg">
        <div className="wrap py-[34px] pb-20">
          <div className="mb-5.5 flex flex-wrap items-end justify-between gap-3">
            <p className="text-[18px] text-muted">
              Find your next grail from the world&apos;s most coveted drops.
            </p>
          </div>
          <ShopView auctions={AUCTIONS.filter((a) => a.status === "live")} />
        </div>
      </main>

      <Footer />
    </div>
  );
}
