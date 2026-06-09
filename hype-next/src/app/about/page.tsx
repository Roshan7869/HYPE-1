import Link from "next/link";
import { Search, CheckCircle2, Award, Truck, Shield, Eye, Users, ArrowRight, AtSign, Globe } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";

export const metadata = { title: "About HYPE — Bid. Win. Repeat." };

const STATS = [
  { v: "50K+", l: "Items Sold" },
  { v: "₹5Cr+", l: "GMV" },
  { v: "100K+", l: "Users" },
  { v: "0.01%", l: "Fake Rate" },
];

const STEPS = [
  { icon: Search, title: "Inspect", desc: "Our experts examine every detail — stitching, materials, tags, packaging" },
  { icon: CheckCircle2, title: "Verify", desc: "Cross-referenced against brand databases and known fake patterns" },
  { icon: Award, title: "Seal", desc: "Authentic items receive the HYPE Seal of Authenticity with unique ID" },
  { icon: Truck, title: "Ship", desc: "Carefully packaged and shipped to you with the authentication card" },
];

const VALUES = [
  { icon: Shield, title: "Authenticity First", desc: "Every item verified. Zero tolerance for fakes. If it's not real, it's not on HYPE." },
  { icon: Eye, title: "Full Transparency", desc: "Clear fees, honest descriptions, real photos. What you see is what you get." },
  { icon: Users, title: "Community Driven", desc: "Built by sneakerheads, for sneakerheads. Your trust is our foundation." },
];

const TEAM = [
  { name: "Arjun Mehta", role: "Co-founder & CEO", initials: "AM" },
  { name: "Priya Sharma", role: "Co-founder & COO", initials: "PS" },
  { name: "Rohan Verma", role: "Head of Authentication", initials: "RV" },
  { name: "Kavya Iyer", role: "Head of Design", initials: "KI" },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-sand">
      <SiteHeader />

      <section className="bg-ink py-24 text-white">
        <div className="wrap text-center">
          <h1 className="mx-auto max-w-3xl font-disp text-[48px] font-extrabold leading-[1.05] tracking-tighter2 md:text-[64px]">
            Authenticity You Can Trust
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-[16px] leading-[1.6] text-[#cfc8bb]">
            HYPE is India&apos;s first authenticated sneaker &amp; streetwear marketplace. Every item verified by experts. Zero fakes guaranteed.
          </p>
        </div>
      </section>

      <section className="border-y border-line bg-white">
        <div className="wrap grid grid-cols-2 gap-0 py-12 md:grid-cols-4">
          {STATS.map((s, i) => (
            <div key={s.l} className={`text-center ${i > 0 ? "md:border-l md:border-line" : ""}`}>
              <p className="font-disp text-[36px] font-extrabold leading-none text-ink md:text-[44px]">{s.v}</p>
              <p className="mt-2 text-[12px] font-bold uppercase tracking-[0.18em] text-muted">{s.l}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="wrap py-20">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
          <div>
            <h2 className="font-disp text-[36px] font-extrabold leading-[1.1] tracking-tighter2 text-ink">Our Story</h2>
            <p className="mt-5 text-[16px] leading-[1.8] text-muted">
              HYPE was born from frustration. In 2024, sneaker culture in India was drowning in fakes. Buyers couldn&apos;t trust what they were getting. Sellers with authentic kicks had no way to prove it. We decided to fix that.
            </p>
            <p className="mt-4 text-[16px] leading-[1.8] text-muted">
              Today, every item on HYPE goes through a multi-point authentication process before it reaches you. We&apos;re not just a marketplace — we&apos;re a guarantee.
            </p>
            <Link
              href="/sell-with-us"
              className="mt-7 inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-[14px] font-bold text-white transition-colors hover:bg-black"
            >
              Learn About Authentication <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="flex aspect-[4/3] items-center justify-center rounded-[24px] bg-cream-3 p-8">
            <Award className="h-32 w-32 text-ink" strokeWidth={1} />
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="wrap">
          <h2 className="text-center font-disp text-[32px] font-extrabold tracking-tighter2 text-ink">How We Authenticate</h2>
          <p className="mt-2 text-center text-[15px] text-muted">Every item goes through our 4-step verification</p>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-8 md:grid-cols-4">
            {STEPS.map((s, i) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="relative text-center">
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-cream-3">
                    <Icon className="h-9 w-9 text-ink" strokeWidth={1.5} />
                  </div>
                  {i < STEPS.length - 1 && (
                    <ArrowRight className="absolute right-[-25px] top-10 hidden h-5 w-5 text-muted md:block" />
                  )}
                  <h3 className="mt-5 text-[18px] font-extrabold text-ink">{s.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.5] text-muted">{s.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-cream-2 py-20">
        <div className="wrap">
          <h2 className="text-center font-disp text-[32px] font-extrabold tracking-tighter2 text-ink">What We Stand For</h2>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div key={v.title} className="rounded-[20px] border border-line bg-white p-8 transition-all hover:border-ink hover:shadow-lg">
                  <Icon className="mx-auto h-10 w-10 text-ink" strokeWidth={1.5} />
                  <h3 className="mt-5 text-center text-[20px] font-extrabold text-ink">{v.title}</h3>
                  <p className="mt-2 text-center text-[14px] leading-[1.6] text-muted">{v.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="wrap">
          <h2 className="text-center font-disp text-[32px] font-extrabold tracking-tighter2 text-ink">The Team</h2>
          <div className="mx-auto mt-12 grid max-w-4xl grid-cols-2 gap-8 md:grid-cols-4">
            {TEAM.map((m) => (
              <div key={m.name} className="text-center">
                <div className="mx-auto flex h-[120px] w-[120px] items-center justify-center rounded-full bg-sand text-[40px] font-extrabold text-ink transition-transform hover:scale-105 md:h-[140px] md:w-[140px]">
                  {m.initials}
                </div>
                <h3 className="mt-4 text-[16px] font-extrabold text-ink">{m.name}</h3>
                <p className="mt-1 text-[13px] text-muted">{m.role}</p>
                <div className="mt-2 flex items-center justify-center gap-3 text-muted">
                  <AtSign className="h-4 w-4 cursor-pointer hover:text-ink" />
                  <Globe className="h-4 w-4 cursor-pointer hover:text-ink" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-ink py-20 text-white">
        <div className="wrap text-center">
          <h2 className="font-disp text-[36px] font-extrabold tracking-tighter2">Ready to Join the Community?</h2>
          <p className="mt-3 text-[16px] text-[#cfc8bb]">Sign up today and discover authenticated sneakers &amp; streetwear.</p>
          <Link
            href="/signup"
            className="mt-7 inline-flex h-12 items-center rounded-full bg-cream px-8 text-[15px] font-bold text-ink transition-colors hover:bg-white"
          >
            Get Started
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
