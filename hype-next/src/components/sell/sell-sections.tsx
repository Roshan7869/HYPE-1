"use client";

import Link from "next/link";
import {
  ArrowRight,
  Check,
  Truck,
  ShieldCheck,
  TrendingUp,
  BarChart3,
  Award,
  Lock,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

const SELL_STEPS = [
  {
    n: "01",
    title: "Verify & Onboard",
    desc: "Create your seller account and verify your documents.",
  },
  {
    n: "02",
    title: "List Your Item",
    desc: "List your item and choose from Hype's suggested starting prices.",
  },
  {
    n: "03",
    title: "We Pick Up",
    desc: "Our delivery partner picks up your item when it's safe.",
  },
  {
    n: "04",
    title: "Get Paid",
    desc: "Item is authenticated and shipped to buyer. You get paid.",
  },
];

const SELL_FEATURES = [
  { icon: Truck, title: "Instant Logistics", desc: "No trips to a courier office." },
  { icon: ShieldCheck, title: "Authentication Handled", desc: "We verify, you just ship to us." },
  { icon: TrendingUp, title: "Live Auction Pricing", desc: "The market pays the real price." },
  { icon: BarChart3, title: "Analytics Dashboard", desc: "Track view, watchlist & conversion." },
  { icon: Award, title: "Badge Tier System", desc: "Build your seller reputation." },
  { icon: Lock, title: "Seller Protection", desc: "Dispute protection & relisting on buyer-fault cancellations." },
];

const TIERS = [
  {
    label: "Bronze",
    name: "New Seller",
    requirement: "Complete registration and list 1 item.",
    perks: ["List upto 5 items", "Basic seller support", "Access to resources"],
    bgClass: "from-[#7c5028] to-[#3a2412]",
  },
  {
    label: "Silver",
    name: "Verified Seller",
    requirement: "10+ successful sales and ID verified.",
    perks: ["List upto 50 items", "Priority support", "Insights Dashboard"],
    bgClass: "from-[#8e8e8e] to-[#3a3a3a]",
  },
  {
    label: "Gold",
    name: "Trusted Seller",
    requirement: "50+ successful sales and 4.8+ rating.",
    perks: ["List upto 200 items", "Lower selling fees", "Early feature access"],
    bgClass: "from-[#c9a25e] to-[#7a5a2e]",
  },
  {
    label: "Platinum",
    name: "Elite Seller",
    requirement: "100+ successful sales and ID verified.",
    perks: ["Unlimited listings", "Lowest selling fees", "Dedicated account manager"],
    bgClass: "from-[#8a8a92] to-[#2a2a30]",
  },
];

export function SellHero() {
  return (
    <section className="bg-cream">
      <div className="wrap grid items-center gap-10 py-16 md:grid-cols-2">
        <div>
          <h1 className="font-disp text-[80px] font-extrabold leading-[0.86] tracking-tighter2">
            List, Ship
            <br />
            Get Paid.
          </h1>
          <p className="mt-5 max-w-[520px] text-[18px] text-muted">
            The Hype Company is the trusted marketplace for verified resale, secure selling, and
            market-driven pricing across all hype categories.
          </p>
          <div className="mt-8 flex flex-wrap gap-3.5">
            <Link
              href="/dashboard/listings/new"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-ink px-7 text-[15px] font-semibold tracking-[0.04em] text-white transition-colors hover:bg-black"
            >
              Start Selling
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="#features"
              className="inline-flex h-14 items-center justify-center gap-2 rounded-full border-[1.5px] border-ink px-7 text-[15px] font-semibold tracking-[0.04em] text-ink transition-colors hover:bg-ink hover:text-white"
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className="relative aspect-[5/4] overflow-hidden rounded-hype-lg bg-[linear-gradient(135deg,#d8ccba,#9a8366)]">
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="font-disp text-[20px] font-extrabold uppercase tracking-[0.18em] text-white/80">
              HYPE Packaging
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export function SellSteps() {
  return (
    <section className="bg-cream py-20">
      <div className="wrap">
        <h2 className="mb-12 text-center font-disp text-[36px] font-extrabold tracking-tighter2">
          How Selling Works
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {SELL_STEPS.map((step, i) => (
            <ScrollReveal key={step.n} delay={i * 0.08}>
              <div className="relative rounded-hype-lg border border-line-soft bg-cream-2 p-6">
                <div className="absolute right-4 top-1 font-disp text-[64px] font-extrabold leading-none text-ink/5">
                  {step.n}
                </div>
                <div className="step-icon">
                  <span className="font-disp text-[24px] font-extrabold">{step.n}</span>
                </div>
                <div className="mt-4 font-disp text-[24px] font-extrabold leading-none">
                  {step.n}
                </div>
                <p className="mt-2 text-[14px] text-muted">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SellFeatures() {
  return (
    <section id="features" className="bg-cream py-20">
      <div className="wrap">
        <h2 className="mb-12 font-disp text-[36px] font-extrabold tracking-tighter2">
          Built for sellers
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {SELL_FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <ScrollReveal key={f.title} delay={i * 0.06}>
                <div className="flex items-start gap-4 rounded-hype-lg border border-line-soft bg-cream-2 p-6 transition-all hover:border-ink/20 hover:shadow-sm">
                  <div className="step-icon flex-none">
                    <Icon className="h-7 w-7" strokeWidth={1.7} />
                  </div>
                  <div>
                    <h3 className="font-disp text-[20px] font-extrabold leading-tight tracking-tighter2">
                      {f.title}
                    </h3>
                    <p className="mt-1.5 text-[14px] text-muted">{f.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function SellTiers() {
  return (
    <section className="bg-cream py-20">
      <div className="wrap">
        <h2 className="mb-12 text-center font-disp text-[36px] font-extrabold tracking-tighter2">
          Badge Tiers
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((tier, i) => (
            <ScrollReveal key={tier.label} delay={i * 0.06}>
              <div className="relative overflow-hidden rounded-hype-lg border border-line-soft bg-cream-2">
                <div className={cn("bg-gradient-to-br p-6 text-white", tier.bgClass)}>
                  <div className="flex items-center justify-between">
                    <div className="font-disp text-[40px] font-extrabold leading-none">
                      {tier.label[0]}
                    </div>
                    <svg
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="h-7 w-7 text-white/90"
                    >
                      <path d="m12 2 3 6.5 7 .8-5.2 4.7 1.5 6.9L12 17.8 5.7 20.9l1.5-6.9L2 9.3l7-.8z" />
                    </svg>
                  </div>
                  <div className="mt-2 text-[12px] font-semibold uppercase tracking-[0.16em] opacity-80">
                    {tier.label} Tier
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="font-disp text-[24px] font-extrabold tracking-tighter2">
                    {tier.name}
                  </h3>
                  <div className="mt-3 text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
                    Requirement
                    <b className="mt-1 block text-[14px] font-medium normal-case tracking-normal text-ink">
                      {tier.requirement}
                    </b>
                  </div>
                  <div className="mt-5 text-[11px] font-bold uppercase tracking-[0.12em] text-muted">
                    Perks
                  </div>
                  <div className="mt-2 space-y-1.5">
                    {tier.perks.map((p) => (
                      <div key={p} className="flex items-center gap-2 text-[13px]">
                        <Check className="h-4 w-4 flex-none text-hype-green-ink" strokeWidth={2.5} />
                        {p}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ReadyToSell() {
  return (
    <section className="bg-cream py-20">
      <div className="wrap">
        <div className="rounded-hype-lg bg-ink p-12 text-center text-white md:p-16">
          <h2 className="font-disp text-[64px] font-extrabold uppercase leading-[0.86] tracking-tighter2">
            Ready To Sell?
          </h2>
          <p className="mt-4 text-[18px] text-[#b7b0a4]">
            Join thousands of sellers earning with HYPE.
          </p>
          <Link
            href="/dashboard/listings/new"
            className="mt-8 inline-flex h-14 items-center justify-center gap-2 rounded-full bg-cream px-7 text-[15px] font-semibold tracking-[0.04em] text-ink transition-colors hover:bg-white"
          >
            Apply To Sell
            <ArrowRight className="h-4 w-4" />
          </Link>
          <div className="mt-6 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#7c756a]">
            Note — Application reviewed within 48 hours. Document verification required.
          </div>
        </div>
      </div>
    </section>
  );
}
