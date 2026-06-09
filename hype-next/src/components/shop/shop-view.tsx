"use client";

import Link from "next/link";
import { Search, ChevronDown, Eye, Heart, Grid3x3, List, X, Check } from "lucide-react";
import { useState } from "react";
import { LiveBadge } from "@/components/shared/live-badge";
import { Timer } from "@/components/shared/timer";
import { formatINR, cn } from "@/lib/utils";
import type { Auction } from "@/types/auction";

const CATEGORIES = ["Sneakers", "Streetwear", "Accessories", "Collectibles"] as const;
const BRANDS = ["Nike", "adidas", "Jordan", "Supreme", "Cactus Jack", "Bape", "New Balance"];
const CONDITIONS = ["DS", "VNDS", "Used"] as const;
const PRICES = ["Any", "< ₹10K", "₹10K - ₹25K", "₹25K - ₹50K", "> ₹50K"] as const;
const SIZES = ["6", "7", "8", "9", "10", "11", "12"];

export function ShopView({ auctions }: { auctions: Auction[] }) {
  const [view, setView] = useState<"grid" | "list">("grid");
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  return (
    <div className="grid grid-cols-1 gap-9 lg:grid-cols-[300px_1fr]">
      <FiltersSidebar
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        selectedSize={selectedSize}
        setSelectedSize={setSelectedSize}
      />
      <div>
        <div className="mb-5 flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <Chip>Sneakers</Chip>
            <Chip onClear />
            <span className="ml-auto text-[15px] text-muted lg:ml-0">
              {auctions.length} results
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Select placeholder="Sort: Newest" />
            <Select placeholder="Price" />
            <button
              onClick={() => setView("grid")}
              aria-label="grid view"
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-[12px] border bg-white",
                view === "grid" ? "border-ink" : "border-line",
              )}
            >
              <Grid3x3 className="h-[18px] w-[18px]" />
            </button>
            <button
              onClick={() => setView("list")}
              aria-label="list view"
              className={cn(
                "flex h-12 w-12 items-center justify-center rounded-[12px] border bg-white",
                view === "list" ? "border-ink" : "border-line",
              )}
            >
              <List className="h-[18px] w-[18px]" />
            </button>
          </div>
        </div>

        <div
          className={cn(
            "grid gap-[18px]",
            view === "grid"
              ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
              : "grid-cols-1",
          )}
        >
          {auctions.map((a) => (
            <ProductCard key={a.id} auction={a} />
          ))}
        </div>

        <div className="mt-12 flex items-center justify-center gap-3">
          {[1, 2, 3, 4, 5].map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className={cn(
                "flex h-12 min-w-[48px] items-center justify-center rounded-[12px] border bg-white px-3 text-[15px] font-semibold",
                page === p ? "border-ink bg-ink text-white" : "border-line hover:border-ink",
              )}
            >
              {p}
            </button>
          ))}
          <button className="flex h-12 min-w-[48px] items-center justify-center rounded-[12px] border border-line bg-white px-3 text-[15px] font-semibold hover:border-ink">
            →
          </button>
        </div>
      </div>
    </div>
  );
}

function FiltersSidebar({
  selectedBrand,
  setSelectedBrand,
  selectedSize,
  setSelectedSize,
}: {
  selectedBrand: string | null;
  setSelectedBrand: (b: string | null) => void;
  selectedSize: string | null;
  setSelectedSize: (s: string | null) => void;
}) {
  return (
    <aside className="rounded-[18px] border border-line-soft bg-white px-6 py-2">
      <FilterSection title="Category">
        {CATEGORIES.map((c, i) => (
          <FilterRow key={c} label={c} count={[214, 158, 92, 41][i]} />
        ))}
      </FilterSection>

      <FilterSection title="Brand">
        <div className="mb-3.5 flex items-center gap-2.5 rounded-[10px] border border-line px-3.5 py-2.5 text-[14px] text-muted">
          <Search className="h-3.5 w-3.5" />
          Search brands
        </div>
        {BRANDS.map((b, i) => (
          <FilterRow
            key={b}
            label={b}
            count={[45, 38, 27, 22, 18, 14, 9][i]}
            checked={selectedBrand === b}
            onClick={() => setSelectedBrand(selectedBrand === b ? null : b)}
          />
        ))}
      </FilterSection>

      <FilterSection title="Size">
        <div className="grid grid-cols-4 gap-2">
          {SIZES.map((s) => (
            <button
              key={s}
              onClick={() => setSelectedSize(selectedSize === s ? null : s)}
              className={cn(
                "rounded-[9px] border bg-white py-2.5 text-[14px] font-semibold",
                selectedSize === s
                  ? "border-ink bg-ink text-white"
                  : "border-line hover:border-ink",
              )}
            >
              {s}
            </button>
          ))}
        </div>
      </FilterSection>

      <FilterSection title="Condition">
        {CONDITIONS.map((c) => (
          <FilterRow key={c} label={c} count={c === "DS" ? 312 : c === "VNDS" ? 86 : 24} />
        ))}
      </FilterSection>

      <FilterSection title="Price">
        {PRICES.map((p) => (
          <FilterRow key={p} label={p} />
        ))}
        <div className="mt-3 flex gap-2">
          <input
            placeholder="Min"
            className="w-1/2 rounded-[10px] border border-line px-3 py-3 text-[14px]"
          />
          <input
            placeholder="Max"
            className="w-1/2 rounded-[10px] border border-line px-3 py-3 text-[14px]"
          />
        </div>
        <div className="mt-3.5 h-1 rounded-[3px] bg-ink" />
      </FilterSection>
    </aside>
  );
}

function FilterSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="border-b border-line-soft py-6 last:border-b-0">
      <div className="mb-[18px] flex items-center justify-between">
        <h4 className="text-[13px] font-bold uppercase tracking-[0.14em]">{title}</h4>
        <ChevronDown className="h-3 w-3 opacity-60" />
      </div>
      <div className="space-y-1">{children}</div>
    </div>
  );
}

function FilterRow({
  label,
  count,
  checked,
  onClick,
}: {
  label: string;
  count?: number;
  checked?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="flex w-full items-center justify-between py-1.5 text-left text-[15px]"
    >
      <span className="flex items-center gap-2.5">
        <span
          className={cn(
            "flex h-[17px] w-[17px] flex-none items-center justify-center rounded-[5px] border-[1.6px]",
            checked ? "border-ink bg-ink text-white" : "border-[#b8afa0]",
          )}
        >
          {checked && <Check className="h-3 w-3" />}
        </span>
        {label}
      </span>
      {count !== undefined && <span className="text-[14px] text-muted">{count}</span>}
    </button>
  );
}

function Chip({ children, onClear }: { children?: React.ReactNode; onClear?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-4 py-2.5 text-[14px] font-medium">
      {children}
      <X className="h-3 w-3 cursor-pointer opacity-60 hover:opacity-100" />
      {onClear && <span className="cursor-pointer pl-1 font-bold text-hype-red">Clear all</span>}
    </span>
  );
}

function Select({ placeholder }: { placeholder: string }) {
  return (
    <button className="flex items-center gap-7 rounded-[12px] border border-line bg-white px-[18px] py-3 text-[14px] font-medium">
      {placeholder}
      <ChevronDown className="h-3 w-3" />
    </button>
  );
}

function ProductCard({ auction }: { auction: Auction }) {
  return (
    <Link href="/live-auctions" className="group block">
      <div className="relative flex aspect-square items-center justify-center overflow-hidden bg-[linear-gradient(150deg,#cfc4b2,#a89a84)]">
        <span className="px-4 text-center font-disp text-[13px] font-bold text-white/55">
          {auction.name}
        </span>
        {auction.verified && (
          <div className="absolute left-3 top-3">
            <LiveBadge size="sm" label="VERIFIED" />
          </div>
        )}
        {auction.status === "live" && (
          <div className="absolute left-3 top-10">
            <LiveBadge size="sm" />
          </div>
        )}
        <button
          aria-label="save"
          onClick={(e) => {
            e.preventDefault();
          }}
          className="absolute right-2.5 top-2.5 flex h-[30px] w-[30px] items-center justify-center rounded-full bg-white"
        >
          <Heart className="h-3.5 w-3.5" />
        </button>
        <span className="absolute bottom-2.5 left-3 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-[11px] text-white">
          <Eye className="h-3 w-3" /> {auction.watchers}
        </span>
        {auction.status === "live" && (
          <div className="absolute bottom-2.5 right-2.5 inline-flex items-center gap-1.5 rounded-full bg-black/55 px-2.5 py-1 text-[11px] text-white">
            <Timer initialSeconds={auction.endsIn} className="text-[11px] tabular-nums" />
          </div>
        )}
      </div>
      <div className="bg-ink p-4 text-white">
        <div className="line-clamp-2 min-h-[38px] text-[15px] font-semibold leading-[1.25]">
          {auction.name}
        </div>
        <div className="mt-1 text-[12px] text-[#9c958a]">
          {auction.condition} • {auction.size}
        </div>
        <div className="mt-2 font-disp text-[17px] font-extrabold">
          {formatINR(auction.currentBid)}
        </div>
      </div>
    </Link>
  );
}
