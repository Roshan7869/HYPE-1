import Link from "next/link";
import { Check, Package, Mail, MapPin } from "lucide-react";
import { formatINR, cn } from "@/lib/utils";

const ORDER = {
  id: "ORD-10928",
  date: "9 Jun 2026",
  status: "Confirmed · Processing",
  items: [
    { id: "o1", name: "Air Jordan 1 High Retro Chicago", variant: "UK 9 · DS/Brand New", qty: 2, price: 24999, gradient: "from-stone-200 to-stone-400", emoji: "👟" },
    { id: "o2", name: "Yeezy 350 V2 Black", variant: "UK 8 · DS/Brand New", qty: 1, price: 18499, gradient: "from-stone-700 to-stone-900", emoji: "👟" },
    { id: "o3", name: "Nike Dunk Low Panda", variant: "UK 10 · DS/Brand New", qty: 1, price: 9999, gradient: "from-stone-100 to-stone-300", emoji: "👟" },
  ],
  payment: "Cash on Delivery",
  shipping: {
    name: "Roshan Khatri",
    line: "123 MG Road, Near Central Mall, Fort",
    city: "Mumbai, Maharashtra — 400001",
    phone: "+91 98765 43210",
  },
};

const STEPS = [
  { icon: Package, title: "Order Packing", desc: "We're preparing your items for shipment" },
  { icon: Mail, title: "Email Confirmation", desc: "A confirmation email has been sent to you" },
  { icon: MapPin, title: "Track Order", desc: "Track your package once it ships" },
];

export default async function OrderConfirmationPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const subtotal = ORDER.items.reduce((s, i) => s + i.price * i.qty, 0);
  const taxes = Math.round(subtotal * 0.18);
  const total = subtotal + taxes;
  return (
    <div className="min-h-screen bg-sand">
      <header className="bg-transparent">
        <div className="wrap flex h-20 items-center">
          <Link href="/" className="font-disp text-[28px] font-extrabold tracking-tighter2 text-ink">
            HYPE.
          </Link>
        </div>
      </header>

      <div className="wrap pb-20">
        <div className="flex flex-col items-center pt-8 text-center">
          <div className="flex h-20 w-20 animate-[scaleIn_300ms_ease-out] items-center justify-center rounded-full bg-green-600 shadow-[0_8px_24px_rgba(34,197,94,0.3)]">
            <Check className="h-10 w-10 text-white" strokeWidth={3} />
          </div>
          <h1 className="mt-8 font-disp text-[32px] font-extrabold tracking-tighter2 text-ink">
            Order Confirmed!
          </h1>
          <p className="mt-2 text-[16px] text-muted">
            Your order <span className="font-semibold text-ink">#{id}</span> has been placed successfully.
          </p>
        </div>

        <div className="mx-auto mt-10 max-w-[640px] rounded-[20px] border border-line bg-white p-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Meta label="Order Number" value={id} />
            <Meta label="Order Date" value={ORDER.date} />
            <div>
              <p className="text-[13px] text-muted">Status</p>
              <p className="mt-1 flex items-center gap-2 text-[15px] font-bold text-ink">
                <span className="inline-block h-2 w-2 rounded-full bg-green-600" />
                {ORDER.status}
              </p>
            </div>
          </div>

          <div className="my-6 h-px bg-line" />

          <div className="space-y-4">
            {ORDER.items.map((i) => (
              <div key={i.id} className="flex items-center gap-4">
                <div className={cn("flex h-16 w-16 flex-none items-center justify-center rounded-[10px] bg-gradient-to-br text-3xl", i.gradient)}>
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

          <div className="my-6 h-px bg-line" />

          <dl className="space-y-3 text-[15px]">
            <Row label="Subtotal" value={formatINR(subtotal)} />
            <Row label="Shipping" value="Free" />
            <Row label="Taxes (GST 18%)" value={formatINR(taxes)} />
          </dl>
          <div className="mt-4 flex items-center justify-between border-t-2 border-ink pt-4">
            <span className="text-[18px] font-bold">Total</span>
            <span className="font-disp text-[22px] font-extrabold">{formatINR(total)}</span>
          </div>

          <div className="my-6 h-px bg-line" />

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div>
              <p className="text-[13px] text-muted">Payment Method</p>
              <p className="mt-1 text-[15px] font-bold">{ORDER.payment}</p>
            </div>
            <div>
              <p className="text-[13px] text-muted">Shipping to</p>
              <p className="mt-1 text-[15px] font-bold">{ORDER.shipping.name}</p>
              <p className="text-[14px] text-muted">{ORDER.shipping.line}</p>
              <p className="text-[14px] text-muted">{ORDER.shipping.city}</p>
              <p className="text-[14px] text-muted">{ORDER.shipping.phone}</p>
            </div>
          </div>
        </div>

        <section className="mx-auto mt-10 max-w-[640px]">
          <h2 className="text-center font-disp text-[20px] font-extrabold tracking-tighter2">
            What&apos;s Next?
          </h2>
          <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-3">
            {STEPS.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.title} className="rounded-[16px] border border-line bg-white p-6 text-center">
                  <div className="mx-auto flex h-10 w-10 items-center justify-center">
                    <Icon className="h-7 w-7 text-ink" strokeWidth={1.5} />
                  </div>
                  <h3 className="mt-3 text-[15px] font-semibold">{s.title}</h3>
                  <p className="mt-1 text-[13px] text-muted">{s.desc}</p>
                </div>
              );
            })}
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/shop"
              className="inline-flex h-12 items-center rounded-full border-[1.5px] border-ink px-8 text-[15px] font-bold text-ink transition-colors hover:bg-ink hover:text-white"
            >
              Continue Shopping
            </Link>
            <Link
              href="/account/orders"
              className="inline-flex h-12 items-center rounded-full bg-ink px-8 text-[15px] font-bold text-white transition-colors hover:bg-black"
            >
              View My Orders
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[13px] text-muted">{label}</p>
      <p className="mt-1 text-[15px] font-bold text-ink">{value}</p>
    </div>
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
