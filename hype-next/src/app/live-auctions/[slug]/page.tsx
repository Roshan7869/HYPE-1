import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/layout/footer";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import {
  AuctionDetail,
  AuctionDetailsRow,
  PriceInsights,
  RelatedAuctions,
} from "@/components/auction/auction-detail";
import { getAllAuctionSlugs, getAuctionBySlug, getLiveAuctions } from "@/lib/mock-data";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllAuctionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const auction = getAuctionBySlug(slug);
  if (!auction) return { title: "Auction Not Found — HYPE" };
  return {
    title: `${auction.name} — HYPE Live Auctions`,
    description: `Bid on the ${auction.name}. ${auction.brand} ${auction.category}, ${auction.size}, ${auction.condition} condition.`,
  };
}

export default async function AuctionDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const auction = getAuctionBySlug(slug);
  if (!auction) notFound();

  // Exclude the current auction from the "You may also like" grid.
  const related = getLiveAuctions().filter((a) => a.id !== auction.id);

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
              { label: "Shop", href: "/shop" },
              { label: "Live Auctions", href: "/live-auctions", active: true },
              { label: "Sell With Us", href: "/sell-with-us" },
              { label: "About", href: "/about" },
              { label: "Contact", href: "/contact" },
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
              href="/login"
              className="rounded-full border-[1.5px] border-white/50 px-[26px] py-[13px] text-[14px] font-semibold tracking-[0.04em] text-white hover:border-white hover:bg-white/[0.06]"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="rounded-full bg-cream px-[26px] py-[13px] text-[14px] font-semibold tracking-[0.04em] text-ink hover:bg-white"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </header>

      <Breadcrumb
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Live Auctions", href: "/live-auctions" },
          { label: auction.category, href: `/shop?category=${auction.category.toLowerCase()}` },
          { label: auction.name },
        ]}
      />

      <main className="flex-1 bg-sand">
        <div className="wrap py-9 pb-[70px]">
          <AuctionDetail auction={auction} />
          <div className="grid grid-cols-1 lg:grid-cols-3">
            <div className="lg:col-span-3">
              <AuctionDetailsRow />
            </div>
            <div className="lg:col-span-3">
              <PriceInsights />
            </div>
          </div>
          {related.length > 0 && <RelatedAuctions auctions={related} />}
        </div>
      </main>

      <Footer />
    </div>
  );
}
