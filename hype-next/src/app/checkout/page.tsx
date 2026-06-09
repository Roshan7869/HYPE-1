"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Lock, ShieldCheck, Plus, Banknote, QrCode, CreditCard, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { fadeUp, stagger, reduceMotion } from "@/lib/motion";
import { cn, formatINR } from "@/lib/utils";

type Address = {
  id: string;
  name: string;
  line1: string;
  city: string;
  state: string;
  pin: string;
  phone: string;
  isDefault: boolean;
};

const ADDRESSES: Address[] = [
  {
    id: "a1",
    name: "Roshan Khatri",
    line1: "123 MG Road, Near Central Mall, Fort",
    city: "Mumbai",
    state: "Maharashtra",
    pin: "400001",
    phone: "+91 98765 43210",
    isDefault: true,
  },
  {
    id: "a2",
    name: "Work Address",
    line1: "42 Hitech City, Madhapur",
    city: "Hyderabad",
    state: "Telangana",
    pin: "500081",
    phone: "+91 98765 43210",
    isDefault: false,
  },
];

const ORDER_ITEMS = [
  { id: "o1", name: "Air Jordan 1 High Retro Chicago", variant: "UK 9 · DS/Brand New", qty: 2, price: 24999, gradient: "from-stone-200 to-stone-400", emoji: "👟" },
  { id: "o2", name: "Yeezy 350 V2 Black", variant: "UK 8 · DS/Brand New", qty: 1, price: 18499, gradient: "from-stone-700 to-stone-900", emoji: "👟" },
  { id: "o3", name: "Nike Dunk Low Panda", variant: "UK 10 · DS/Brand New", qty: 1, price: 9999, gradient: "from-stone-100 to-stone-300", emoji: "👟" },
];

const STATES = ["Andhra Pradesh", "Delhi", "Goa", "Gujarat", "Karnataka", "Kerala", "Maharashtra", "Punjab", "Tamil Nadu", "Telangana", "Uttar Pradesh", "West Bengal"];

const UPI_APPS = [
  { id: "gpay", name: "Google Pay" },
  { id: "phonepe", name: "PhonePe" },
  { id: "paytm", name: "Paytm" },
  { id: "bhim", name: "BHIM" },
];

export default function CheckoutPage() {
  const [addressId, setAddressId] = useState(ADDRESSES[0]?.id);
  const [payment, setPayment] = useState<"cod" | "upi" | "card" | null>(null);
  const [upiApp, setUpiApp] = useState<string | null>(null);
  const [showAdd, setShowAdd] = useState(false);
  const [processing, setProcessing] = useState(false);

  const subtotal = ORDER_ITEMS.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = 0;
  const taxes = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + taxes;
  const codFee = payment === "cod" ? 50 : 0;
  const grandTotal = total + codFee;

  const canPlace = addressId && payment;

  async function placeOrder() {
    setProcessing(true);
    await new Promise((r) => setTimeout(r, 1200));
    const orderId = "ORD-" + Math.random().toString(36).slice(2, 8).toUpperCase();
    window.location.href = `/order/${orderId}`;
  }

  return (
    <div className="min-h-screen bg-sand">
      <header className="bg-transparent">
        <div className="wrap flex h-20 items-center justify-between">
          <Link href="/" className="font-disp text-[28px] font-extrabold tracking-tighter2 text-ink">
            HYPE.
          </Link>
          <div className="flex items-center gap-2 text-[14px] font-semibold text-muted">
            <Lock className="h-4 w-4" /> Secure Checkout
          </div>
        </div>
      </header>

      <div className="wrap pb-20">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={reduceMotion({ duration: 0.4, ease: [0.16, 1, 0.3, 1] })}
          className="flex items-center gap-2 text-[13px] text-muted"
        >
          <ShieldCheck className="h-4 w-4 text-green-600" />
          <span>SSL Encrypted · 100% Secure</span>
        </motion.div>

        <motion.div
          className="mt-6 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]"
          variants={stagger(0.1, 0.1)}
          initial="hidden"
          animate="show"
        >
          <div>
            <Section n={1} title="Shipping Address" done={Boolean(addressId)}>
              <div className="space-y-3">
                <button
                  onClick={() => setShowAdd(true)}
                  className="group flex w-full items-center gap-4 rounded-2xl border-2 border-dashed border-line p-5 text-muted transition-colors hover:border-ink hover:text-ink"
                  type="button"
                >
                  <span className="flex h-12 w-12 flex-none items-center justify-center rounded-full bg-cream-3 transition-colors group-hover:bg-ink group-hover:text-white">
                    <Plus className="h-5 w-5" />
                  </span>
                  <span className="text-[15px] font-semibold">Add New Address</span>
                </button>

                {ADDRESSES.map((a) => (
                  <label
                    key={a.id}
                    className={cn(
                      "flex cursor-pointer items-start gap-4 rounded-2xl border bg-white p-5 transition-all",
                      addressId === a.id ? "border-ink shadow-[0_0_0_3px_rgba(12,11,10,0.06)]" : "border-line",
                    )}
                  >
                    <button
                      type="button"
                      onClick={() => setAddressId(a.id)}
                      className={cn(
                        "mt-1 flex h-5 w-5 flex-none items-center justify-center rounded-full border-2 transition-colors",
                        addressId === a.id ? "border-ink" : "border-line",
                      )}
                      aria-label="Select address"
                    >
                      {addressId === a.id && <span className="h-2.5 w-2.5 rounded-full bg-ink" />}
                    </button>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-ink">{a.name}</span>
                        {a.isDefault && (
                          <span className="rounded bg-ink px-2 py-0.5 text-[11px] font-bold text-white">
                            Default
                          </span>
                        )}
                      </div>
                      <p className="mt-1 text-[14px] leading-[1.5] text-muted">{a.line1}</p>
                      <p className="text-[14px] text-muted">
                        {a.city}, {a.state} — {a.pin}
                      </p>
                      <p className="mt-1 flex items-center gap-1.5 text-[14px] text-muted">
                        <MapPin className="h-3.5 w-3.5" /> {a.phone}
                      </p>
                    </div>
                    <button
                      type="button"
                      className="text-[14px] font-semibold text-ink hover:underline"
                    >
                      Edit
                    </button>
                  </label>
                ))}
              </div>
            </Section>

            <Section n={2} title="Payment Method" done={Boolean(payment)}>
              <div className="space-y-3">
                <PaymentCard selected={payment === "cod"} onSelect={() => setPayment("cod")} icon={Banknote} title="Cash on Delivery" subtitle={`Pay ${formatINR(grandTotal)} when your order arrives`} extra="+ ₹50 COD fee" />
                <PaymentCard
                  selected={payment === "upi"}
                  onSelect={() => setPayment("upi")}
                  icon={QrCode}
                  title="UPI"
                  subtitle={upiApp ? `Pay via ${UPI_APPS.find((u) => u.id === upiApp)?.name}` : "Google Pay, PhonePe, Paytm, BHIM"}
                >
                  {payment === "upi" && (
                    <div>
                      <p className="mb-3 text-[13px] font-semibold uppercase tracking-[0.18em] text-muted">Select app</p>
                      <div className="grid grid-cols-4 gap-3">
                        {UPI_APPS.map((u) => (
                          <button
                            key={u.id}
                            type="button"
                            onClick={() => setUpiApp(u.id)}
                            className={cn(
                              "flex h-16 items-center justify-center rounded-xl border bg-white text-[13px] font-semibold transition-all",
                              upiApp === u.id ? "border-ink shadow-[0_0_0_2px_rgba(12,11,10,0.05)]" : "border-line hover:border-ink",
                            )}
                          >
                            {u.name.split(" ")[0]}
                          </button>
                        ))}
                      </div>
                      <p className="mt-3 text-[13px] text-muted">Scan QR code on your payment app to complete the transaction.</p>
                    </div>
                  )}
                </PaymentCard>
                <PaymentCard selected={payment === "card"} onSelect={() => setPayment("card")} icon={CreditCard} title="Credit / Debit Card" subtitle="Visa, Mastercard, Rupay, Amex">
                  {payment === "card" && (
                    <div className="space-y-3">
                      <Input placeholder="Card number" inputMode="numeric" />
                      <Input placeholder="Name on card" />
                      <div className="grid grid-cols-2 gap-3">
                        <Input placeholder="MM / YY" />
                        <Input placeholder="CVV" type="password" />
                      </div>
                      <label className="flex items-center gap-2 text-[14px] text-muted">
                        <input type="checkbox" className="h-4 w-4 rounded border-line accent-ink" />
                        Save card for future payments
                      </label>
                    </div>
                  )}
                </PaymentCard>
              </div>
            </Section>

            <Section n={3} title="Order Review">
              <div className="rounded-2xl border border-line bg-white p-6">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-disp text-[18px] font-extrabold">Items in your order</h3>
                  <Link href="/cart" className="text-[14px] font-semibold text-ink hover:underline">
                    Edit cart
                  </Link>
                </div>
                {ORDER_ITEMS.map((it) => (
                  <div key={it.id} className="flex items-center gap-4 border-b border-line py-4 last:border-b-0">
                    <div className={cn("flex h-12 w-12 flex-none items-center justify-center rounded-lg bg-gradient-to-br text-2xl", it.gradient)}>
                      {it.emoji}
                    </div>
                    <div className="flex-1">
                      <h4 className="text-[15px] font-bold">{it.name}</h4>
                      <p className="text-[13px] text-muted">{it.variant} · Qty: {it.qty}</p>
                    </div>
                    <span className="text-[15px] font-bold">{formatINR(it.price * it.qty)}</span>
                  </div>
                ))}
              </div>

              <Button
                size="lg"
                disabled={!canPlace || processing}
                onClick={placeOrder}
                className="mt-6 h-[56px] w-full gap-2 text-[16px]"
              >
                <Lock className="h-4 w-4" />
                {processing ? "Processing..." : `Place Order · ${formatINR(grandTotal)}`}
              </Button>
              <p className="mt-3 text-center text-[13px] text-muted">
                By placing this order, you agree to our{" "}
                <Link href="/terms" className="font-semibold text-ink underline-offset-4 hover:underline">Terms of Service</Link>{" "}
                and{" "}
                <Link href="/privacy" className="font-semibold text-ink underline-offset-4 hover:underline">Privacy Policy</Link>.
              </p>
            </Section>
          </div>

          <motion.aside
            className="lg:sticky lg:top-[100px] lg:self-start"
            variants={fadeUp}
            initial="hidden"
            animate="show"
          >
            <div className="rounded-[20px] border border-line bg-white p-8">
              <h2 className="font-disp text-[20px] font-extrabold tracking-tighter2">Order Summary</h2>
              <div className="mt-5 space-y-3">
                {ORDER_ITEMS.map((it) => (
                  <div key={it.id} className="flex items-center justify-between gap-3 text-[14px]">
                    <span className="line-clamp-1 flex-1 text-muted">
                      {it.name} × {it.qty}
                    </span>
                    <span className="font-semibold">{formatINR(it.price * it.qty)}</span>
                  </div>
                ))}
              </div>
              <div className="my-5 h-px bg-line" />
              <dl className="space-y-3 text-[15px]">
                <Row label="Subtotal" value={formatINR(subtotal)} />
                <Row label="Shipping" value="Free" />
                <Row label="Taxes (GST)" value={formatINR(taxes)} />
                {codFee > 0 && <Row label="COD Fee" value={formatINR(codFee)} />}
              </dl>
              <div className="my-5 h-px bg-line" />
              <div className="flex items-center justify-between">
                <span className="text-[18px] font-bold">Total</span>
                <span className="font-disp text-[24px] font-extrabold">{formatINR(grandTotal)}</span>
              </div>
            </div>
          </motion.aside>
        </motion.div>
      </div>

      {showAdd && <AddressFormModal onClose={() => setShowAdd(false)} onSave={() => { setAddressId("a-new"); setShowAdd(false); }} />}
    </div>
  );
}
function Section({ n, title, done, children }: { n: number; title: string; done?: boolean; children: React.ReactNode }) {
  return (
    <section className="mt-10 first:mt-0">
      <div className="mb-5 flex items-center gap-3">
        <div
          className={cn(
            "flex h-7 w-7 items-center justify-center rounded-full text-[13px] font-bold text-white",
            done ? "bg-green-600" : "bg-ink",
          )}
        >
          {done ? "✓" : n}
        </div>
        <h2 className="font-disp text-[20px] font-extrabold tracking-tighter2">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function PaymentCard({
  selected,
  onSelect,
  icon: Icon,
  title,
  subtitle,
  extra,
  children,
}: {
  selected: boolean;
  onSelect: () => void;
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  subtitle: string;
  extra?: string;
  children?: React.ReactNode;
}) {
  return (
    <label
      className={cn(
        "block cursor-pointer rounded-2xl border bg-white p-5 transition-all",
        selected ? "border-ink shadow-[0_0_0_3px_rgba(12,11,10,0.06)]" : "border-line",
      )}
    >
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onSelect}
          className={cn(
            "flex h-5 w-5 flex-none items-center justify-center rounded-full border-2 transition-colors",
            selected ? "border-ink" : "border-line",
          )}
          aria-label="Select payment method"
        >
          {selected && <span className="h-2.5 w-2.5 rounded-full bg-ink" />}
        </button>
        <Icon className="h-6 w-6 flex-none" />
        <div className="flex-1">
          <h3 className="text-[16px] font-semibold text-ink">{title}</h3>
          <p className="text-[14px] text-muted">{subtitle}</p>
        </div>
        {extra && <span className="text-[13px] font-semibold text-amber-600">{extra}</span>}
      </div>
      <AnimatePresence initial={false}>
        {children && (
          <motion.div
            key="payment-detail"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={reduceMotion({ duration: 0.3, ease: [0.16, 1, 0.3, 1] })}
            style={{ overflow: "hidden" }}
          >
            <div className="pt-4">{children}</div>
          </motion.div>
        )}
      </AnimatePresence>
    </label>
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

function AddressFormModal({ onClose, onSave }: { onClose: () => void; onSave: () => void }) {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={reduceMotion({ duration: 0.2 })}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.97 }}
          transition={reduceMotion({ duration: 0.3, ease: [0.16, 1, 0.3, 1] })}
          className="w-full max-w-[480px] rounded-3xl bg-white p-10"
          onClick={(e) => e.stopPropagation()}
        >
          <div className="mb-6 flex items-center justify-between">
            <h2 className="font-disp text-[22px] font-extrabold tracking-tighter2">Add New Address</h2>
            <button onClick={onClose} className="text-muted hover:text-ink" aria-label="Close">
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="Full name" />
              <Input placeholder="Phone" />
            </div>
            <Input placeholder="Address Line 1" />
            <Input placeholder="Address Line 2 (optional)" />
            <div className="grid grid-cols-2 gap-3">
              <Input placeholder="City" />
              <select className="h-11 rounded-md border border-line bg-cream-2 px-3 text-sm text-ink outline-none focus:border-ink focus:ring-2 focus:ring-ink/10">
                <option>State</option>
                {STATES.map((s) => <option key={s}>{s}</option>)}
              </select>
            </div>
            <Input placeholder="PIN Code" inputMode="numeric" maxLength={6} />
            <label className="flex items-center gap-2 text-[14px] text-muted">
              <input type="checkbox" className="h-4 w-4 rounded border-line accent-ink" />
              Set as default address
            </label>
          </div>
          <div className="mt-7 flex gap-3">
            <Button variant="outline" onClick={onClose} className="h-12 flex-1">Cancel</Button>
            <Button onClick={onSave} className="h-12 flex-1">Save Address</Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
