import { Footer } from "@/components/layout/footer";
import { SiteHeader } from "@/components/layout/site-header";
import { Breadcrumb } from "@/components/layout/breadcrumb";
import {
  SellHero,
  SellSteps,
  SellFeatures,
  SellTiers,
  ReadyToSell,
} from "@/components/sell/sell-sections";

export const metadata = {
  title: "Sell With Us — HYPE",
  description: "List, ship, and get paid. The Hype Company is India's most trusted resale marketplace.",
};

export default function SellWithUsPage() {
  return (
    <div className="page">
      <SiteHeader />

      <Breadcrumb
        crumbs={[{ label: "Home", href: "/" }, { label: "Sell With Us" }]}
      />

      <main className="flex-1">
        <SellHero />
        <SellSteps />
        <SellFeatures />
        <SellTiers />
        <ReadyToSell />
      </main>

      <Footer />
    </div>
  );
}
