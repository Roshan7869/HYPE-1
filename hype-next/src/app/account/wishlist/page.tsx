"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Heart, X, ShoppingBag } from "lucide-react";
import { AccountShell } from "@/components/account/account-shell";
import { fadeUp, stagger, reduceMotion } from "@/lib/motion";
import { cn, formatINR } from "@/lib/utils";

const INITIAL = [
  { id: "w1", brand: "Nike", name: "Dunk Low Panda", condition: "DS / Brand New", price: 9999, gradient: "from-stone-100 to-stone-300", emoji: "👟" },
  { id: "w2", brand: "adidas", name: "Yeezy 350 V2 Beluga", condition: "VNDS", price: 25200, gradient: "from-yellow-100 to-amber-200", emoji: "👟" },
  { id: "w3", brand: "Supreme", name: "Box Logo Hoodie FW23", condition: "DS / Brand New", price: 31000, gradient: "from-red-100 to-red-200", emoji: "🧥" },
  { id: "w4", brand: "Jordan", name: "Air Jordan 4 University Blue", condition: "DS / Brand New", price: 28750, gradient: "from-sky-100 to-sky-200", emoji: "👟" },
  { id: "w5", brand: "Jordan", name: "Off-White Air Jordan 1 Chicago", condition: "DS / Brand New", price: 83999, gradient: "from-amber-100 to-orange-200", emoji: "👟" },
  { id: "w6", brand: "adidas", name: "Gazelle Bold Pink", condition: "DS / Brand New", price: 11999, gradient: "from-pink-100 to-pink-200", emoji: "👟" },
];

const RECENT = [
  { id: "rv1", brand: "New Balance", name: "550 White Green", condition: "DS", price: 13499, gradient: "from-emerald-100 to-emerald-200", emoji: "👟" },
  { id: "rv2", brand: "Nike", name: "Air Max 1 Patta", condition: "DS", price: 22999, gradient: "from-emerald-200 to-teal-300", emoji: "👟" },
];

export default function WishlistPage() {
  const [items, setItems] = useState(INITIAL);

  function remove(id: string) {
    setItems((arr) => arr.filter((i) => i.id !== id));
  }

  return (
    <AccountShell
      title="My Wishlist"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Account", href: "/account/profile" },
        { label: "Wishlist" },
      ]}
      user={{ name: "Roshan K", email: "roshan@example.com" }}
    >
      {items.length === 0 ? (
        <div className="rounded-hype-lg border border-line bg-white px-6 py-16 text-center">
          <Heart className="mx-auto h-16 w-16 text-muted-2" strokeWidth={1.2} />
          <h2 className="mt-5 font-disp text-[22px] font-extrabold tracking-tighter2 text-ink">
            Your wishlist is empty
          </h2>
          <p className="mt-2 text-[15px] text-muted">
            Save items you love by clicking the heart icon while browsing.
          </p>
          <Link
            href="/shop"
            className="mt-6 inline-flex h-12 items-center rounded-full bg-ink px-8 text-[15px] font-bold text-white transition-colors hover:bg-black"
          >
            Browse Products
          </Link>
        </div>
      ) : (
        <>
          <p className="mb-5 text-[15px] text-muted">{items.length} items</p>
          <motion.div
            className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4"
            variants={stagger(0.05, 0.05)}
            initial="hidden"
            animate="show"
            layout
          >
            <AnimatePresence mode="popLayout">
              {items.map((p) => (
                <motion.div
                  key={p.id}
                  variants={fadeUp}
                  exit={{ opacity: 0, scale: 0.9 }}
                  layout
                  whileHover={{ y: -4 }}
                  transition={reduceMotion({ duration: 0.25, ease: [0.16, 1, 0.3, 1] })}
                  className="group relative overflow-hidden rounded-hype-lg border border-line bg-white"
                >
                <div className="relative">
                  <div className={cn("flex aspect-square items-center justify-center bg-gradient-to-br text-7xl", p.gradient)}>
                    {p.emoji}
                  </div>
                  <button
                    onClick={() => remove(p.id)}
                    className="absolute left-2 top-2 flex h-7 w-7 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
                    aria-label="Remove from wishlist"
                  >
                    <X className="h-3.5 w-3.5" />
                  </button>
                  <Heart className="absolute right-2 top-2 h-5 w-5 fill-red-500 text-red-500" />
                  <div className="absolute inset-0 flex items-center justify-center bg-white/90 opacity-0 transition-opacity group-hover:opacity-100">
                    <button
                      type="button"
                      className="flex h-11 items-center gap-2 rounded-full bg-ink px-6 text-[14px] font-bold text-white"
                    >
                      <ShoppingBag className="h-4 w-4" /> Move to Bag
                    </button>
                  </div>
                </div>
                <div className="p-4">
                  <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-muted">{p.brand}</p>
                  <h3 className="mt-1 text-[15px] font-semibold text-ink">{p.name}</h3>
                  <p className="mt-0.5 text-[13px] text-muted">{p.condition}</p>
                  <p className="mt-2 text-[16px] font-bold text-ink">{formatINR(p.price)}</p>
                </div>
              </motion.div>
            ))}
            </AnimatePresence>
          </motion.div>

          <section className="mt-16">
            <h2 className="mb-5 font-disp text-[20px] font-extrabold tracking-tighter2">Recently Viewed</h2>
            <div className="grid grid-cols-2 gap-5 md:grid-cols-3 lg:grid-cols-4">
              {RECENT.map((p) => (
                <div key={p.id} className="overflow-hidden rounded-hype-lg border border-line bg-white">
                  <div className={cn("flex aspect-square items-center justify-center bg-gradient-to-br text-7xl", p.gradient)}>
                    {p.emoji}
                  </div>
                  <div className="p-4">
                    <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-muted">{p.brand}</p>
                    <h3 className="mt-1 text-[15px] font-semibold text-ink">{p.name}</h3>
                    <p className="mt-0.5 text-[13px] text-muted">{p.condition}</p>
                    <p className="mt-2 text-[16px] font-bold text-ink">{formatINR(p.price)}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </>
      )}
    </AccountShell>
  );
}
