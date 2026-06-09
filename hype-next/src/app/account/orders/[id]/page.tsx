"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { ArrowLeft, Download, X, MapPin, CreditCard, HelpCircle, Star, RotateCw } from "lucide-react";
import { AccountShell } from "@/components/account/account-shell";
import { StatusTimeline } from "@/components/shared/status-timeline";
import { cn, formatINR } from "@/lib/utils";

const ORDER = {
  id: "ORD-10928",
  date: "9 Jun 2026",
  time: "2:30 PM",
  status: "Confirmed · Processing" as const,
  items: [
    { id: "i1", name: "Air Jordan 1 Retro High OG 'Chicago'", variant: "UK 9 · DS/Brand New", qty: 2, price: 24999, gradient: "from-stone-200 to-stone-400", emoji: "👟" },
    { id: "i2", name: "Yeezy 350 V2 Black", variant: "UK 8 · DS/Brand New", qty: 1, price: 18499, gradient: "from-stone-700 to-stone-900", emoji: "👟" },
    { id: "i3", name: "Nike Dunk Low Panda", variant: "UK 10 · DS/Brand New", qty: 1, price: 9999, gradient: "from-stone-100 to-stone-300", emoji: "👟" },
  ],
  shipping: {
    name: "Roshan Khatri",
    line1: "123 MG Road, Near Central Mall, Fort",
    city: "Mumbai, Maharashtra — 400001",
    phone: "+91 98765 43210",
  },
  payment: "Cash on Delivery",
};

export default function OrderDetailPage() {
  const params = useParams<{ id: string }>();
  const id = params?.id ?? "";
  const subtotal = ORDER.items.reduce((s, i) => s + i.price * i.qty, 0);
  const taxes = Math.round(subtotal * 0.18);
  const total = subtotal + taxes;

  return (
    <AccountShell
      title={`Order #${id}`}
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Account", href: "/account/profile" },
        { label: "My Orders", href: "/account/orders" },
        { label: id },
      ]}
      user={{ name: "Roshan K", email: "roshan@example.com" }}
    >
      <div className="mb-5 flex items-center gap-3 text-[14px] text-muted">
        <Link href="/account/orders" className="flex items-center gap-1.5 hover:text-ink">
          <ArrowLeft className="h-4 w-4" /> Back to Orders
        </Link>
      </div>

      <div className="rounded-[20px] border border-line bg-white p-6">
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div>
            <p className="font-disp text-[20px] font-extrabold tracking-tighter2 text-ink">Order #{id}</p>
            <p className="mt-1 text-[14px] text-muted">
              Placed on 9 June 2026 at 2:30 PM
            </p>
            <p className="mt-2 flex items-center gap-2 text-[14px] font-semibold text-ink">
              <span className="h-2 w-2 rounded-full bg-amber-500" />
              Processing
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button className="flex h-11 items-center gap-2 rounded-full border-[1.5px] border-ink px-5 text-[14px] font-bold text-ink transition-colors hover:bg-ink hover:text-white">
              <X className="h-4 w-4" /> Cancel Order
            </button>
            <button className="flex h-11 items-center gap-2 rounded-full bg-ink px-5 text-[14px] font-bold text-white transition-colors hover:bg-black">
              <MapPin className="h-4 w-4" /> Track Package
            </button>
          </div>
        </div>
        <button className="mt-4 flex items-center gap-1.5 text-[14px] font-semibold text-ink hover:underline">
          <Download className="h-4 w-4" /> Download Invoice
        </button>
      </div>

      <div className="mt-5 rounded-[20px] border border-line bg-white p-6">
        <h2 className="mb-6 font-disp text-[18px] font-extrabold tracking-tighter2">Order Status</h2>
        <StatusTimeline
          steps={[
            { label: "Order Placed", time: "9 Jun, 2:30 PM", state: "done" },
            { label: "Confirmed", time: "9 Jun, 3:15 PM", state: "done" },
            { label: "Shipped", state: "current" },
            { label: "Out for Delivery", state: "pending" },
            { label: "Delivered", state: "pending" },
          ]}
        />
      </div>

      <div className="mt-5 rounded-[20px] border border-line bg-white p-6">
        <h2 className="mb-5 font-disp text-[18px] font-extrabold tracking-tighter2">Items</h2>
        <div className="space-y-4">
          {ORDER.items.map((i) => (
            <div key={i.id} className="flex items-center gap-4 border-b border-line pb-4 last:border-0 last:pb-0">
              <div className={cn("flex h-16 w-16 flex-none items-center justify-center rounded-xl bg-gradient-to-br text-3xl", i.gradient)}>
                {i.emoji}
              </div>
              <div className="flex-1">
                <h3 className="text-[15px] font-bold">{i.name}</h3>
                <p className="text-[13px] text-muted">{i.variant} · Qty: {i.qty}</p>
              </div>
              <span className="text-[15px] font-bold">{formatINR(i.price * i.qty)}</span>
            </div>
          ))}
        </div>
        <div className="mt-5 flex flex-wrap gap-2 border-t border-line pt-5">
          <button className="flex h-10 items-center gap-2 rounded-full border border-ink px-4 text-[13px] font-bold text-ink hover:bg-ink hover:text-white">
            <Star className="h-4 w-4" /> Write Review
          </button>
          <button className="flex h-10 items-center gap-2 rounded-full border border-ink px-4 text-[13px] font-bold text-ink hover:bg-ink hover:text-white">
            <RotateCw className="h-4 w-4" /> Buy Again
          </button>
        </div>
      </div>

      <div className="mt-5 grid grid-cols-1 gap-5 md:grid-cols-2">
        <div className="rounded-[20px] border border-line bg-white p-6">
          <h2 className="mb-4 font-disp text-[18px] font-extrabold tracking-tighter2">Shipping Address</h2>
          <p className="text-[15px] font-bold">{ORDER.shipping.name}</p>
          <p className="mt-1 text-[14px] text-muted">{ORDER.shipping.line1}</p>
          <p className="text-[14px] text-muted">{ORDER.shipping.city}</p>
          <p className="mt-2 text-[14px] text-muted">{ORDER.shipping.phone}</p>
        </div>
        <div className="rounded-[20px] border border-line bg-white p-6">
          <h2 className="mb-4 flex items-center gap-2 font-disp text-[18px] font-extrabold tracking-tighter2">
            <CreditCard className="h-5 w-5" /> Payment Info
          </h2>
          <p className="text-[15px] font-bold">{ORDER.payment}</p>
          <dl className="mt-4 space-y-2 text-[14px]">
            <Row label="Subtotal" value={formatINR(subtotal)} />
            <Row label="Shipping" value="Free" />
            <Row label="Taxes (GST)" value={formatINR(taxes)} />
            <div className="my-2 h-px bg-line" />
            <div className="flex items-center justify-between">
              <dt className="font-bold text-ink">Total</dt>
              <dd className="font-disp text-[20px] font-extrabold">{formatINR(total)}</dd>
            </div>
          </dl>
        </div>
      </div>

      <div className="mt-5 rounded-[20px] border border-line bg-white p-6">
        <h2 className="mb-3 flex items-center gap-2 font-disp text-[18px] font-extrabold tracking-tighter2">
          <HelpCircle className="h-5 w-5" /> Need Help?
        </h2>
        <p className="text-[14px] text-muted">
          Our support team is here 9 AM – 9 PM IST, every day.
        </p>
        <div className="mt-4 flex flex-wrap gap-2">
          <Link href="/contact" className="rounded-full bg-ink px-5 py-2.5 text-[13px] font-bold text-white hover:bg-black">
            Contact Support
          </Link>
          <Link href="/faq" className="rounded-full border border-ink px-5 py-2.5 text-[13px] font-bold text-ink hover:bg-ink hover:text-white">
            FAQ
          </Link>
          <Link href="/faq" className="rounded-full border border-ink px-5 py-2.5 text-[13px] font-bold text-ink hover:bg-ink hover:text-white">
            Return Policy
          </Link>
        </div>
      </div>
    </AccountShell>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between">
      <dt className="text-muted">{label}</dt>
      <dd className="font-semibold text-ink">{value}</dd>
    </div>
  );
}
