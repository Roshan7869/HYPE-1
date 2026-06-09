"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { Search, Plus, Minus, HelpCircle } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { cn } from "@/lib/utils";

const CATEGORIES = [
  { id: "buying", label: "Buying", qa: [
    { q: "How do I place a bid?", a: "Open any live auction, enter an amount at or above the minimum next bid, and click 'Place Bid'. You'll be notified if you're outbid or if you win." },
    { q: "What happens if I win an auction?", a: "You have 24 hours to complete payment. We accept UPI, cards, and net banking. Once paid, the seller ships to our authentication center, and we forward to you." },
    { q: "Can I cancel a winning bid?", a: "No. Winning bids are binding contracts. If you fail to pay within 24 hours, your account may be suspended." },
    { q: "How long does delivery take?", a: "5–10 business days within India. Metro cities typically receive in 3–5 days. International shipping is not currently available." },
  ]},
  { id: "selling", label: "Selling", qa: [
    { q: "How do I list an item?", a: "Click 'Sell With Us' from the top menu, search for your item, complete the 4-step listing flow, and submit. We'll review within 24 hours." },
    { q: "What commission does HYPE charge?", a: "8% on the final sale price for sneakers and streetwear. No listing fees, no hidden charges." },
    { q: "When do I get paid?", a: "Payouts are released within 24 hours of confirmed delivery. You can view your payout history in Dashboard → Payouts." },
    { q: "Can I sell internationally?", a: "Currently, HYPE operates in India only. We're working on expanding to other markets." },
  ]},
  { id: "payments", label: "Payments", qa: [
    { q: "What payment methods do you accept?", a: "UPI (GPay, PhonePe, Paytm, BHIM), Credit/Debit Cards (Visa, Mastercard, Rupay, Amex), Net Banking, and Cash on Delivery for select orders." },
    { q: "Is Cash on Delivery available?", a: "Yes, COD is available for orders under ₹50,000 with a ₹50 fee. A re-stocking fee may apply for refused COD orders." },
    { q: "Are there any hidden fees?", a: "No. The price you see is the price you pay. GST is included in the listed price. Shipping is free above ₹2,500." },
  ]},
  { id: "auth", label: "Authentication", qa: [
    { q: "How does HYPE authenticate items?", a: "Every item goes through a 4-step process: physical inspection (stitching, materials, tags), database cross-check, HYPE seal of authenticity, and insured shipping." },
    { q: "What if my item fails authentication?", a: "If a sold item fails authentication, the buyer receives a full refund and the item is returned to the seller at the seller's expense." },
    { q: "Can I get a certificate of authenticity?", a: "Yes. Every verified item ships with a HYPE authentication card featuring a unique QR code you can verify anytime." },
  ]},
  { id: "account", label: "Account", qa: [
    { q: "How do I reset my password?", a: "Click 'Forgot password?' on the login page and enter your email. We'll send a reset link valid for 24 hours." },
    { q: "Can I have both a buyer and seller account?", a: "One account supports both. Toggle between 'Buying' and 'Selling' modes from your dashboard." },
    { q: "How do I delete my account?", a: "Go to Profile → Danger Zone → Delete account. This is permanent and cannot be undone." },
  ]},
] as const;

export default function FaqPage() {
  const [q, setQ] = useState("");
  const [open, setOpen] = useState<string | null>("buying-0");

  const all = useMemo(() => {
    const result: { id: string; category: string; q: string; a: string }[] = [];
    CATEGORIES.forEach((c) =>
      c.qa.forEach((qa, i) =>
        result.push({ id: `${c.id}-${i}`, category: c.label, q: qa.q, a: qa.a }),
      ),
    );
    return result;
  }, []);

  const filtered = q
    ? all.filter((x) => (x.q + x.a + x.category).toLowerCase().includes(q.toLowerCase()))
    : null;

  return (
    <div className="min-h-screen bg-sand">
      <header className="bg-ink text-white">
        <div className="wrap flex h-[88px] items-center gap-8">
          <Link href="/" className="font-disp text-[30px] font-extrabold tracking-tighter2 text-white">HYPE.</Link>
          <nav className="ml-auto hidden gap-6 md:flex">
            <Link href="/contact" className="text-[14px] font-semibold uppercase tracking-[0.06em] text-[#e7e2da] hover:text-white">Contact</Link>
            <Link href="/about" className="text-[14px] font-semibold uppercase tracking-[0.06em] text-[#e7e2da] hover:text-white">About</Link>
          </nav>
        </div>
      </header>

      <section className="bg-ink pb-24 pt-20 text-white">
        <div className="wrap text-center">
          <HelpCircle className="mx-auto h-12 w-12 text-[#cfc8bb]" />
          <h1 className="mt-4 font-disp text-[48px] font-extrabold tracking-tighter2 md:text-[56px]">
            How can we help?
          </h1>
          <p className="mt-3 text-[16px] text-[#cfc8bb]">
            Search our most common questions or browse by category.
          </p>
          <div className="mx-auto mt-8 max-w-2xl">
            <div className="flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-sm">
              <Search className="h-5 w-5 text-white/70" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search for answers..."
                className="flex-1 bg-transparent text-[15px] text-white placeholder:text-white/60 outline-none"
              />
            </div>
          </div>
        </div>
      </section>

      <div className="wrap grid grid-cols-1 gap-10 py-12 lg:grid-cols-[220px_1fr]">
        <aside>
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-muted">Categories</p>
          <nav className="space-y-1">
            {CATEGORIES.map((c) => (
              <a key={c.id} href={`#${c.id}`} className="block rounded-lg px-3 py-2 text-[15px] font-medium text-muted hover:bg-cream-2 hover:text-ink">
                {c.label}
              </a>
            ))}
          </nav>
        </aside>

        <div className="min-w-0">
          {filtered ? (
            <div className="space-y-3">
              {filtered.length === 0 ? (
                <p className="rounded-2xl border border-line bg-white p-12 text-center text-[15px] text-muted">
                  No results for &ldquo;{q}&rdquo;. Try a different search.
                </p>
              ) : (
                filtered.map((x) => (
                  <QAItem key={x.id} id={x.id} category={x.category} q={x.q} a={x.a} open={open === x.id} onToggle={() => setOpen(open === x.id ? null : x.id)} />
                ))
              )}
            </div>
          ) : (
            CATEGORIES.map((c) => (
              <section key={c.id} id={c.id} className="mb-10 scroll-mt-24">
                <h2 className="font-disp text-[28px] font-extrabold tracking-tighter2 text-ink">{c.label}</h2>
                <div className="mt-5 space-y-3">
                  {c.qa.map((qa, i) => (
                    <QAItem
                      key={i}
                      id={`${c.id}-${i}`}
                      q={qa.q}
                      a={qa.a}
                      open={open === `${c.id}-${i}`}
                      onToggle={() => setOpen(open === `${c.id}-${i}` ? null : `${c.id}-${i}`)}
                    />
                  ))}
                </div>
              </section>
            ))
          )}

          <div className="mt-12 rounded-2xl border border-line bg-white p-8 text-center">
            <h3 className="font-disp text-[20px] font-extrabold tracking-tighter2">Still need help?</h3>
            <p className="mt-2 text-[14px] text-muted">Our support team is available 9 AM – 9 PM IST.</p>
            <Link
              href="/contact"
              className="mt-5 inline-flex h-12 items-center rounded-full bg-ink px-8 text-[14px] font-bold text-white hover:bg-black"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function QAItem({ id, q, a, open, onToggle }: { id: string; category?: string; q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white">
      <button
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
      >
        <span className="flex-1 text-[15px] font-bold text-ink">{q}</span>
        {open ? <Minus className="h-5 w-5 flex-none text-ink" /> : <Plus className="h-5 w-5 flex-none text-muted" />}
      </button>
      <div
        id={id}
        className={cn(
          "grid overflow-hidden border-t border-line bg-cream-2 transition-all duration-200",
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]",
        )}
      >
        <div className="min-h-0 overflow-hidden">
          <p className="px-6 py-5 text-[14px] leading-[1.7] text-muted">{a}</p>
        </div>
      </div>
    </div>
  );
}
