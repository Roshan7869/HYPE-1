import { notFound } from "next/navigation";
import { SiteHeader } from "@/components/layout/site-header";
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
      <SiteHeader />

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
