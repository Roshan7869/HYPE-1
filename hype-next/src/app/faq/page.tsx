"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Search, Plus, HelpCircle, Mail, MessageCircle } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import { EmptyState } from "@/components/motion/empty-state";
import { dur, ease, fadeUp, reduceMotion, stagger } from "@/lib/motion";
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
      <SiteHeader />

      <section className="bg-ink pb-24 pt-20 text-white">
        <div className="wrap text-center">
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={reduceMotion({ type: "spring", stiffness: 220, damping: 16, delay: 0.1 })}
          >
            <HelpCircle className="mx-auto h-12 w-12 text-[#cfc8bb]" />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduceMotion({ duration: dur.slow, ease: ease.out, delay: 0.15 })}
            className="mt-4 font-disp text-[48px] font-extrabold tracking-tighter2 md:text-[56px]"
          >
            How can we help?
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduceMotion({ duration: dur.slow, ease: ease.out, delay: 0.25 })}
            className="mt-3 text-[16px] text-[#cfc8bb]"
          >
            Search our most common questions or browse by category.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduceMotion({ duration: dur.slow, ease: ease.out, delay: 0.35 })}
            className="mx-auto mt-8 max-w-2xl"
          >
            <div className="group flex items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-3 backdrop-blur-sm transition-colors focus-within:border-white/60 focus-within:bg-white/15">
              <Search className="h-5 w-5 text-white/70" />
              <input
                value={q}
                onChange={(e) => setQ(e.target.value)}
                placeholder="Search for answers..."
                className="flex-1 bg-transparent text-[15px] text-white placeholder:text-white/60 outline-none"
              />
            </div>
          </motion.div>
        </div>
      </section>

      <div className="wrap grid grid-cols-1 gap-10 py-12 lg:grid-cols-[220px_1fr]">
        <aside>
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-muted">Categories</p>
          <nav className="space-y-1">
            {CATEGORIES.map((c, i) => (
              <motion.a
                key={c.id}
                href={`#${c.id}`}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={reduceMotion({ duration: dur.base, ease: ease.out, delay: i * 0.05 })}
                whileHover={{ x: 4 }}
                className="block rounded-lg px-3 py-2 text-[15px] font-medium text-muted hover:bg-cream-2 hover:text-ink"
              >
                {c.label}
              </motion.a>
            ))}
          </nav>
        </aside>

        <div className="min-w-0">
          {filtered ? (
            <div className="space-y-3">
              {filtered.length === 0 ? (
                <EmptyState
                  icon={<HelpCircle className="h-7 w-7" />}
                  title={`No results for “${q}”`}
                  description="Try a different search, or contact our support team."
                  action={
                    <Link
                      href="/contact"
                      className="inline-flex h-12 items-center rounded-full bg-ink px-8 text-[14px] font-bold text-white hover:bg-black"
                    >
                      Contact Support
                    </Link>
                  }
                />
              ) : (
                <motion.div
                  className="space-y-3"
                  variants={stagger(0.05)}
                  initial="hidden"
                  animate="show"
                >
                  {filtered.map((x) => (
                    <motion.div key={x.id} variants={fadeUp}>
                      <QAItem
                        id={x.id}
                        category={x.category}
                        q={x.q}
                        a={x.a}
                        open={open === x.id}
                        onToggle={() => setOpen(open === x.id ? null : x.id)}
                      />
                    </motion.div>
                  ))}
                </motion.div>
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

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-60px" }}
            className="mt-12 rounded-2xl border border-line bg-white p-8 text-center"
          >
            <h3 className="font-disp text-[20px] font-extrabold tracking-tighter2">Still need help?</h3>
            <p className="mt-2 text-[14px] text-muted">Our support team is available 9 AM – 9 PM IST.</p>
            <div className="mt-5 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-8 text-[14px] font-bold text-white transition-all duration-200 hover:scale-[1.02] hover:bg-black"
              >
                <MessageCircle className="h-4 w-4" />
                Contact Support
              </Link>
              <a
                href="mailto:support@thehypecompany.in"
                className="inline-flex h-12 items-center gap-2 rounded-full border-[1.5px] border-ink bg-white px-8 text-[14px] font-bold text-ink transition-all duration-200 hover:scale-[1.02] hover:bg-ink hover:text-white"
              >
                <Mail className="h-4 w-4" />
                Email Us
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function QAItem({ id, q, a, open, onToggle, category }: { id: string; q: string; a: string; open: boolean; onToggle: () => void; category?: string }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white">
      <button
        onClick={onToggle}
        aria-expanded={open}
        aria-controls={id}
        className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left transition-colors hover:bg-cream-2/40"
      >
        <span className="flex-1 text-[15px] font-bold text-ink">
          {category && <span className="mr-2 text-[11px] font-semibold uppercase tracking-[0.14em] text-hype-gold">{category}</span>}
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={reduceMotion({ duration: dur.base, ease: ease.out })}
          className={cn(
            "flex h-7 w-7 flex-none items-center justify-center rounded-full border transition-colors",
            open ? "border-ink bg-ink text-white" : "border-line text-muted",
          )}
        >
          <Plus className="h-4 w-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={reduceMotion({ duration: dur.base, ease: ease.inOut })}
            className="overflow-hidden border-t border-line bg-cream-2"
          >
            <p className="px-6 py-5 text-[14px] leading-[1.7] text-muted">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
