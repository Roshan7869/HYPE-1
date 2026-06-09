"use client";

import { useState } from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, AtSign, Clock, Zap, Send, CheckCircle2, Tag, CreditCard, ShieldCheck, ChevronRight } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { Input } from "@/components/ui/input";

const INFO = [
  { icon: Mail, label: "EMAIL", value: "support@thehypecompany.in", href: "mailto:support@thehypecompany.in" },
  { icon: Phone, label: "PHONE", value: "+91 22 1234 5678" },
  { icon: MapPin, label: "ADDRESS", value: "HYPE Pvt. Ltd., 123 MG Road, Fort, Mumbai, Maharashtra 400001" },
  { icon: AtSign, label: "SOCIAL", value: "@hypeindiahq", href: "#" },
  { icon: Clock, label: "HOURS", value: "Mon – Sat: 10 AM – 7 PM IST" },
  { icon: Zap, label: "RESPONSE", value: "Within 24 hours" },
];

const SUBJECTS = [
  { v: "order", l: "Order Issue" },
  { v: "auction", l: "Auction Question" },
  { v: "payment", l: "Payment Problem" },
  { v: "selling", l: "Selling Question" },
  { v: "auth", l: "Authenticity Concern" },
  { v: "account", l: "Account Issue" },
  { v: "other", l: "Other" },
];

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [ref, setRef] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    await new Promise((r) => setTimeout(r, 800));
    setRef("HYP-" + Math.random().toString(36).slice(2, 8).toUpperCase());
    setSent(true);
  }

  return (
    <div className="min-h-screen bg-sand">
      <header className="bg-ink text-white">
        <div className="wrap flex h-[88px] items-center">
          <Link href="/" className="font-disp text-[30px] font-extrabold tracking-tighter2 text-white">HYPE.</Link>
        </div>
      </header>

      <div className="wrap pb-20 pt-10">
        <nav className="mb-6 flex items-center gap-2 text-[14px] text-muted">
          <Link href="/" className="hover:text-ink">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="font-medium text-ink">Contact Us</span>
        </nav>

        <h1 className="font-disp text-[32px] font-extrabold tracking-tighter2 text-ink">Contact Us</h1>
        <p className="mt-2 text-[16px] text-muted">We&apos;d love to hear from you.</p>

        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-[320px_1fr]">
          <div className="rounded-[20px] bg-ink p-8 text-white">
            {INFO.map((i) => {
              const Icon = i.icon;
              const href = i.href ?? undefined;
              return (
                <div key={i.label} className="border-b border-white/10 py-5 first:pt-0 last:border-b-0 last:pb-0">
                  <div className="flex items-center gap-2.5 text-[12px] font-bold uppercase tracking-[0.18em] text-white/60">
                    <Icon className="h-4 w-4" /> {i.label}
                  </div>
                  {href ? (
                    <Link href={href} className="mt-2 block text-[15px] font-semibold text-white hover:underline">
                      {i.value}
                    </Link>
                  ) : (
                    <p className="mt-2 text-[15px] font-semibold text-white">{i.value}</p>
                  )}
                </div>
              );
            })}
          </div>

          <div className="rounded-[20px] border border-line bg-white p-8">
            {sent ? (
              <div className="flex flex-col items-center py-12 text-center">
                <CheckCircle2 className="h-16 w-16 text-green-600" strokeWidth={1.5} />
                <h2 className="mt-5 font-disp text-[22px] font-extrabold tracking-tighter2 text-ink">Message Sent!</h2>
                <p className="mt-2 text-[15px] text-muted">We&apos;ll get back to you within 24 hours.</p>
                <p className="mt-3 text-[14px] text-muted">Reference: <span className="font-bold text-ink">#{ref}</span></p>
                <button onClick={() => setSent(false)} className="mt-6 text-[14px] font-semibold text-ink hover:underline">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={onSubmit}>
                <h2 className="font-disp text-[20px] font-extrabold tracking-tighter2 text-ink">Send us a message</h2>
                <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.18em] text-ink">Name</label>
                    <Input id="name" required placeholder="Your full name" />
                  </div>
                  <div>
                    <label htmlFor="email" className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.18em] text-ink">Email</label>
                    <Input id="email" type="email" required placeholder="you@example.com" />
                  </div>
                </div>
                <div className="mt-4">
                  <label htmlFor="subject" className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.18em] text-ink">Subject</label>
                  <select id="subject" required className="h-11 w-full rounded-md border border-line bg-cream-2 px-4 text-sm text-ink outline-none focus:border-ink focus:ring-2 focus:ring-ink/10">
                    <option value="">Select a topic</option>
                    {SUBJECTS.map((s) => <option key={s.v} value={s.v}>{s.l}</option>)}
                  </select>
                </div>
                <div className="mt-4">
                  <label htmlFor="message" className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.18em] text-ink">Message</label>
                  <textarea id="message" required rows={6} placeholder="How can we help?" className="block w-full rounded-md border border-line bg-cream-2 px-4 py-3 text-sm text-ink outline-none focus:border-ink focus:ring-2 focus:ring-ink/10" />
                </div>
                <button type="submit" className="mt-6 flex h-[52px] w-full items-center justify-center gap-2 rounded-full bg-ink text-[15px] font-bold text-white transition-colors hover:bg-black">
                  <Send className="h-4 w-4" /> Send Message
                </button>
              </form>
            )}
          </div>
        </div>

        <section className="mt-12">
          <h2 className="mb-5 font-disp text-[20px] font-extrabold tracking-tighter2">Looking for quick answers?</h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <Link href="/faq" className="group rounded-2xl border border-line bg-white p-6 transition-colors hover:border-ink hover:bg-cream-2">
              <Tag className="h-6 w-6 text-ink" />
              <h3 className="mt-3 text-[15px] font-semibold text-ink">Returns</h3>
              <p className="mt-1 text-[13px] text-muted">How do returns work?</p>
            </Link>
            <Link href="/faq" className="group rounded-2xl border border-line bg-white p-6 transition-colors hover:border-ink hover:bg-cream-2">
              <CreditCard className="h-6 w-6 text-ink" />
              <h3 className="mt-3 text-[15px] font-semibold text-ink">Payments</h3>
              <p className="mt-1 text-[13px] text-muted">When do I get paid as a seller?</p>
            </Link>
            <Link href="/faq" className="group rounded-2xl border border-line bg-white p-6 transition-colors hover:border-ink hover:bg-cream-2">
              <ShieldCheck className="h-6 w-6 text-ink" />
              <h3 className="mt-3 text-[15px] font-semibold text-ink">Authentication</h3>
              <p className="mt-1 text-[13px] text-muted">How are items verified?</p>
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
}
