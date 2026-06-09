import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
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
      <SiteHeader />

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
