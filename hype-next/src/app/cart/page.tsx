"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Minus,
  Plus,
  Trash2,
  ArrowLeft,
  ShoppingBag,
  Lock,
  ChevronRight,
  Heart,
} from "lucide-react";
import { AuthShell } from "@/components/layout/auth-shell";
import { Button } from "@/components/ui/button";
import { formatINR } from "@/lib/utils";
import { cn } from "@/lib/utils";

type CartItem = {
  id: string;
  name: string;
  variant: string;
  condition: string;
  price: number;
  quantity: number;
  gradient: string;
  emoji: string;
  max: number;
};

const INITIAL: CartItem[] = [
  {
    id: "ci-1",
    name: "Air Jordan 1 High Retro Chicago",
    variant: "UK 9",
    condition: "DS / Brand New",
    price: 24999,
    quantity: 2,
    gradient: "bg-gradient-to-br from-stone-200 to-stone-400",
    emoji: "👟",
    max: 5,
  },
  {
    id: "ci-2",
    name: "Yeezy 350 V2 Black",
    variant: "UK 8",
    condition: "DS / Brand New",
    price: 18499,
    quantity: 1,
    gradient: "bg-gradient-to-br from-stone-700 to-stone-900",
    emoji: "👟",
    max: 3,
  },
  {
    id: "ci-3",
    name: "Nike Dunk Low Panda",
    variant: "UK 10",
    condition: "DS / Brand New",
    price: 9999,
    quantity: 1,
    gradient: "bg-gradient-to-br from-stone-100 to-stone-300",
    emoji: "👟",
    max: 5,
  },
];

const RECOMMENDED = [
  { id: "r1", name: "Off-White Air Jordan 1", price: 83999, gradient: "from-amber-100 to-amber-200", emoji: "👟" },
  { id: "r2", name: "Travis Scott Cactus Jack Hoodie", price: 48999, gradient: "from-stone-700 to-stone-900", emoji: "🧥" },
  { id: "r3", name: "Adidas Gazelle Bold Pink", price: 11999, gradient: "from-pink-100 to-pink-200", emoji: "👟" },
  { id: "r4", name: "New Balance 550 White Green", price: 13499, gradient: "from-emerald-100 to-emerald-200", emoji: "👟" },
];

export default function CartPage() {
  const [items, setItems] = useState<CartItem[]>(INITIAL);

  const subtotal = items.reduce((s, i) => s + i.price * i.quantity, 0);
  const shipping = subtotal > 0 ? 0 : 0;
  const taxes = Math.round(subtotal * 0.18);
  const total = subtotal + shipping + taxes;

  function setQty(id: string, d: 1 | -1) {
    setItems((arr) =>
      arr.map((i) =>
        i.id === id ? { ...i, quantity: Math.max(1, Math.min(i.max, i.quantity + d)) } : i,
      ),
    );
  }
  function remove(id: string) {
    setItems((arr) => arr.filter((i) => i.id !== id));
  }

  return (
    <AuthShell>
      <div className="wrap pt-4 pb-20">
        <div className="mb-6 flex items-center gap-2 text-[14px] text-muted">
          <Link href="/" className="hover:text-ink">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="font-medium text-ink">Cart</span>
        </div>

        {items.length === 0 ? (
          <EmptyState />
        ) : (
          <>
            <div className="mb-8">
              <h1 className="font-disp text-[32px] font-extrabold tracking-tighter2 text-ink">Your Bag</h1>
              <p className="mt-1 text-[15px] text-muted">{items.length} item{items.length > 1 ? "s" : ""}</p>
            </div>

            <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1fr_360px]">
              <div>
                <div className="rounded-hype-lg border border-line bg-white px-6">
                  {items.map((i) => (
                    <div
                      key={i.id}
                      className="flex gap-5 border-b border-line py-6 last:border-b-0"
                    >
                      <div className={cn("h-20 w-20 flex-none rounded-xl", i.gradient)}>
                        <div className="flex h-full items-center justify-center text-3xl">
                          {i.emoji}
                        </div>
                      </div>
                      <div className="flex flex-1 flex-col">
                        <h3 className="font-disp text-[16px] font-bold text-ink">{i.name}</h3>
                        <p className="mt-1 text-[14px] text-muted">
                          {i.variant} · {i.condition}
                        </p>
                        <p className="mt-2 text-[16px] font-bold text-ink">{formatINR(i.price)}</p>
                      </div>
                      <div className="flex flex-col items-end justify-between">
                        <button
                          onClick={() => remove(i.id)}
                          className="text-muted transition-colors hover:text-red-500"
                          aria-label="Remove from cart"
                        >
                          <Trash2 className="h-[18px] w-[18px]" />
                        </button>
                        <Qty value={i.quantity} onChange={(d) => setQty(i.id, d)} max={i.max} />
                      </div>
                    </div>
                  ))}
                </div>

                <Link
                  href="/shop"
                  className="mt-6 inline-flex items-center gap-2 text-[15px] font-semibold text-ink hover:underline"
                >
                  <ArrowLeft className="h-4 w-4" /> Continue Shopping
                </Link>
              </div>

              <aside className="lg:sticky lg:top-[100px] lg:self-start">
                <div className="rounded-[20px] border border-line bg-white p-8">
                  <h2 className="font-disp text-[20px] font-extrabold tracking-tighter2">Order Summary</h2>
                  <dl className="mt-6 space-y-3 text-[15px]">
                    <Row label="Subtotal" value={formatINR(subtotal)} />
                    <Row label="Shipping" value={shipping === 0 ? "Free" : formatINR(shipping)} />
                    <Row label="Taxes (GST)" value={formatINR(taxes)} />
                  </dl>
                  <div className="my-5 h-px bg-line" />
                  <div className="flex items-center justify-between">
                    <span className="text-[18px] font-bold text-ink">Total</span>
                    <span className="font-disp text-[22px] font-extrabold text-ink">
                      {formatINR(total)}
                    </span>
                  </div>
                  <p className="mt-1 text-right text-[13px] text-muted">including GST</p>

                  <Link href="/checkout">
                    <Button size="lg" className="mt-6 h-[52px] w-full gap-2 text-[15px]">
                      <Lock className="h-4 w-4" />
                      Proceed to Checkout
                    </Button>
                  </Link>
                </div>
              </aside>
            </div>

            <section className="mt-16">
              <h2 className="mb-6 font-disp text-[22px] font-extrabold tracking-tighter2">You May Also Like</h2>
              <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {RECOMMENDED.map((r) => (
                  <div
                    key={r.id}
                    className="group overflow-hidden rounded-hype-lg border border-line bg-white p-4"
                  >
                    <div className={cn("h-44 rounded-xl bg-gradient-to-br", r.gradient)}>
                      <div className="flex h-full items-center justify-center text-5xl">
                        {r.emoji}
                      </div>
                    </div>
                    <h3 className="mt-3 text-[15px] font-bold">{r.name}</h3>
                    <p className="mt-1 text-[14px] font-bold">{formatINR(r.price)}</p>
                    <button
                      className="mt-2 text-[13px] font-semibold text-ink underline-offset-4 hover:underline"
                      type="button"
                    >
                      Add to Bag
                    </button>
                  </div>
                ))}
              </div>
            </section>
          </>
        )}
      </div>
    </AuthShell>
  );
}

function Qty({ value, onChange, max }: { value: number; onChange: (d: 1 | -1) => void; max: number }) {
  return (
    <div className="inline-flex h-9 items-center rounded-lg border border-line">
      <button
        type="button"
        onClick={() => onChange(-1)}
        disabled={value <= 1}
        className="flex h-full w-9 items-center justify-center text-muted transition-colors hover:bg-cream-2 disabled:opacity-40"
        aria-label="Decrease quantity"
      >
        <Minus className="h-4 w-4" />
      </button>
      <span className="flex w-10 items-center justify-center text-[15px] font-semibold">{value}</span>
      <button
        type="button"
        onClick={() => onChange(1)}
        disabled={value >= max}
        className="flex h-9 w-9 items-center justify-center text-muted transition-colors hover:bg-cream-2 disabled:opacity-40"
        aria-label="Increase quantity"
      >
        <Plus className="h-4 w-4" />
      </button>
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

function EmptyState() {
  return (
    <div className="mx-auto flex max-w-md flex-col items-center py-20 text-center">
      <ShoppingBag className="h-16 w-16 text-muted-2" strokeWidth={1.2} />
      <h1 className="mt-6 font-disp text-[22px] font-extrabold tracking-tighter2 text-ink">
        Your bag is empty
      </h1>
      <p className="mt-2 text-[15px] text-muted">
        Looks like you haven&apos;t added anything to your bag yet.
      </p>
      <Link
        href="/shop"
        className="mt-6 inline-flex h-[48px] items-center gap-2 rounded-full bg-ink px-8 text-[15px] font-bold text-white transition-colors hover:bg-black"
      >
        <Heart className="h-4 w-4" />
        Continue Shopping
      </Link>
    </div>
  );
}
