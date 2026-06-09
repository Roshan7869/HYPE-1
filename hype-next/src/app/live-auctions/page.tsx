import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import { LiveAuctionsView } from "./_components/live-auctions-view";
import { getLiveAuctions, getUpcomingAuctions, getSoldAuctions } from "@/lib/mock-data";

export const metadata = {
  title: "Live Auctions — HYPE",
  description: "Bid on authenticated sneakers and streetwear in real-time auctions.",
};

interface PageProps {
  searchParams?: { status?: string };
}

type StatusFilter = "live" | "upcoming" | "sold";

export default function LiveAuctionsPage({ searchParams }: PageProps) {
  const requested = (searchParams?.status ?? "live") as StatusFilter;
  const status: StatusFilter = ["live", "upcoming", "sold"].includes(requested)
    ? requested
    : "live";

  const items =
    status === "upcoming"
      ? getUpcomingAuctions()
      : status === "sold"
        ? getSoldAuctions()
        : getLiveAuctions();

  const featured =
    status === "live"
      ? (items.find((a) => a.name.includes("Air Jordan 1 Retro")) ?? items[0])
      : items[0];
  const others = featured ? items.filter((a) => a.id !== featured.id) : items;

  return (
    <div className="page">
      <SiteHeader />
      <LiveAuctionsView status={status} items={items} featured={featured ?? null} others={others} />
      <Footer />
    </div>
  );
}
