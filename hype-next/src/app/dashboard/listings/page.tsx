"use client";

import { useState } from "react";
import { motion, AnimatePresence, LayoutGroup } from "framer-motion";
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Package,
  Eye,
  Heart,
  Edit,
  Copy,
  Trash2,
  Pause,
  Play,
  TrendingUp,
  Gavel,
  Tag,
  X,
  Clock,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import { fadeUp, stagger, reduceMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

const TABS = ["Active", "Drafts", "Paused", "Sold"] as const;

type Status = "active" | "draft" | "paused" | "sold";

interface Listing {
  id: string;
  title: string;
  status: Status;
  type: "Fixed Price" | "Auction";
  price: string;
  watchers: number;
  likes: number;
  views: number;
  bids: number;
  hue: string;
  postedOn: string;
  endDate?: string;
  lastAction: string;
}

const LISTINGS: Listing[] = [
  {
    id: "LST-1001",
    title: "Air Jordan 1 Retro High OG 'Chicago'",
    status: "active",
    type: "Auction",
    price: "₹18,500",
    watchers: 142,
    likes: 89,
    views: 1240,
    bids: 12,
    hue: "from-red-200 to-red-400",
    postedOn: "Aug 4, 2026",
    endDate: "Aug 16, 4:00 PM",
    lastAction: "3 new bids in last hour",
  },
  {
    id: "LST-1002",
    title: "Yeezy 350 V2 'Beluga'",
    status: "active",
    type: "Fixed Price",
    price: "₹25,200",
    watchers: 78,
    likes: 42,
    views: 540,
    bids: 0,
    hue: "from-yellow-200 to-amber-400",
    postedOn: "Aug 6, 2026",
    lastAction: "Listed 2 days ago",
  },
  {
    id: "LST-1003",
    title: "Travis Scott Cactus Jack Hoodie",
    status: "draft",
    type: "Auction",
    price: "₹31,000",
    watchers: 0,
    likes: 0,
    views: 0,
    bids: 0,
    hue: "from-stone-300 to-stone-500",
    postedOn: "Draft",
    lastAction: "Photos uploaded 2h ago",
  },
  {
    id: "LST-1004",
    title: "Off-White x Nike Air Force 1 'Volt'",
    status: "paused",
    type: "Fixed Price",
    price: "₹65,000",
    watchers: 56,
    likes: 28,
    views: 312,
    bids: 0,
    hue: "from-lime-200 to-lime-400",
    postedOn: "Jul 28, 2026",
    lastAction: "Paused on Aug 9",
  },
  {
    id: "LST-1005",
    title: "Supreme Box Logo Hoodie FW22",
    status: "sold",
    type: "Auction",
    price: "₹31,000",
    watchers: 0,
    likes: 0,
    views: 890,
    bids: 24,
    hue: "from-orange-200 to-orange-400",
    postedOn: "Jul 12, 2026",
    endDate: "Jul 20, 2026",
    lastAction: "Sold to Sneha K.",
  },
  {
    id: "LST-1006",
    title: "New Balance 550 'White Green'",
    status: "active",
    type: "Fixed Price",
    price: "₹9,500",
    watchers: 23,
    likes: 11,
    views: 187,
    bids: 0,
    hue: "from-emerald-200 to-emerald-400",
    postedOn: "Aug 7, 2026",
    lastAction: "Listed 1 day ago",
  },
];

const STATUS_STYLES: Record<Status, { dot: string; bg: string; text: string; label: string }> = {
  active: { dot: "bg-emerald-500", bg: "bg-emerald-50", text: "text-emerald-700", label: "Active" },
  draft: { dot: "bg-amber-500", bg: "bg-amber-50", text: "text-amber-700", label: "Draft" },
  paused: { dot: "bg-stone-500", bg: "bg-stone-100", text: "text-stone-700", label: "Paused" },
  sold: { dot: "bg-ink", bg: "bg-ink/5", text: "text-ink", label: "Sold" },
};

export default function DashboardListingsPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Active");
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const filtered = LISTINGS.filter((l) => {
    if (tab === "Active") return l.status === "active";
    if (tab === "Drafts") return l.status === "draft";
    if (tab === "Paused") return l.status === "paused";
    if (tab === "Sold") return l.status === "sold";
    return true;
  });

  const counts = {
    Active: LISTINGS.filter((l) => l.status === "active").length,
    Drafts: LISTINGS.filter((l) => l.status === "draft").length,
    Paused: LISTINGS.filter((l) => l.status === "paused").length,
    Sold: LISTINGS.filter((l) => l.status === "sold").length,
  };

  return (
    <div>
      <div className="flex items-start justify-between gap-4">
        <div className="dash-head">
          <h1 className="font-disp text-[48px] font-extrabold leading-[1.02] tracking-tighter2">
            My Listings
          </h1>
          <p className="mt-2 text-[18px] text-muted">Manage your active, draft, and sold listings.</p>
        </div>
        <a
          href="/dashboard/listings/new"
          className="mt-1 inline-flex h-12 flex-none items-center gap-2 rounded-full bg-ink px-6 text-[14px] font-bold text-white hover:bg-black"
        >
          <Plus className="h-4 w-4" /> New Listing
        </a>
      </div>

      <LayoutGroup id="dash-listings-tabs">
        <div className="mt-5 mb-5.5 flex flex-wrap items-center gap-3">
          {TABS.map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={cn(
                "relative flex items-center gap-2 rounded-full px-[22px] py-2.5 text-[14px] font-semibold transition-colors",
                tab === t ? "text-white" : "bg-transparent text-muted hover:text-ink",
              )}
            >
              {tab === t && (
                <motion.span
                  layoutId="dash-listings-tab-bg"
                  className="absolute inset-0 rounded-full bg-ink"
                  transition={reduceMotion({ duration: 0.3, ease: [0.16, 1, 0.3, 1] })}
                />
              )}
              <span className="relative z-10">{t}</span>
              <span
                className={cn(
                  "relative z-10 flex h-5 min-w-[20px] items-center justify-center rounded-full px-1.5 text-[11px] font-bold",
                  tab === t ? "bg-white/15 text-white" : "bg-cream-2 text-muted",
                )}
              >
                {counts[t]}
              </span>
            </button>
          ))}

        <div className="ml-auto flex items-center gap-3">
          <div className="hidden items-center gap-2 rounded-[12px] border border-line bg-white px-3.5 py-2.5 text-[14px] md:flex">
            <Search className="h-4 w-4 text-muted" />
            <input
              placeholder="Search listings…"
              className="w-44 bg-transparent text-[14px] outline-none placeholder:text-muted"
            />
          </div>
          <button className="flex items-center gap-2 rounded-[12px] border border-line bg-white px-3.5 py-2.5 text-[14px] font-medium hover:border-ink">
            <Filter className="h-4 w-4" /> Filter <ChevronDown className="h-3 w-3" />
          </button>
        </div>
        </div>
      </LayoutGroup>

      {filtered.length === 0 ? (
        <div className="rounded-hype-lg border border-dashed border-line bg-cream-2 p-16 text-center">
          <Package className="mx-auto h-12 w-12 text-muted-2" strokeWidth={1.4} />
          <p className="mt-3 font-disp text-[22px] font-extrabold">No {tab.toLowerCase()} yet</p>
          <p className="mt-1 text-[14px] text-muted">
            Start by creating your first listing — it only takes a few minutes.
          </p>
          <a
            href="/dashboard/listings/new"
            className="mt-5 inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-[14px] font-bold text-white hover:bg-black"
          >
            <Plus className="h-4 w-4" /> Create Listing
          </a>
        </div>
      ) : (
        <motion.div
          key={tab}
          className="space-y-4"
          variants={stagger(0.06, 0.05)}
          initial="hidden"
          animate="show"
        >
          {filtered.map((l) => (
            <motion.div
              key={l.id}
              variants={fadeUp}
              layout
              transition={reduceMotion({ duration: 0.3, ease: [0.16, 1, 0.3, 1] })}
            >
              <ListingRow
                listing={l}
                menuOpen={openMenu === l.id}
                onMenuToggle={() => setOpenMenu(openMenu === l.id ? null : l.id)}
              />
            </motion.div>
          ))}
        </motion.div>
      )}
    </div>
  );
}

function ListingRow({
  listing: l,
  menuOpen,
  onMenuToggle,
}: {
  listing: Listing;
  menuOpen: boolean;
  onMenuToggle: () => void;
}) {
  const s = STATUS_STYLES[l.status];
  return (
    <div className="grid grid-cols-1 gap-5 rounded-hype-lg border border-line-soft bg-cream-2 p-5 lg:grid-cols-[120px_1fr_auto] lg:items-center">
      {/* Image */}
      <div
        className={cn(
          "relative flex aspect-square items-center justify-center rounded-[14px] bg-gradient-to-br lg:aspect-square",
          l.hue,
        )}
      >
        <span className="px-2 text-center font-disp text-[12px] font-bold text-white/85">
          {l.title.split(" ")[0]}
        </span>
        {l.type === "Auction" && (
          <span className="absolute right-2 top-2 flex h-6 items-center gap-1 rounded-full bg-black/70 px-2 text-[10px] font-bold uppercase tracking-[0.12em] text-white">
            <Gavel className="h-2.5 w-2.5" /> Auction
          </span>
        )}
      </div>

      {/* Info */}
      <div className="min-w-0">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-[0.14em]",
              s.bg,
              s.text,
            )}
          >
            <span className={cn("h-1.5 w-1.5 rounded-full", s.dot)} />
            {s.label}
          </span>
          <span className="rounded-full bg-white px-2.5 py-0.5 text-[11px] font-semibold text-muted">
            {l.id}
          </span>
        </div>
        <h3 className="mt-1.5 font-disp text-[20px] font-extrabold leading-tight">{l.title}</h3>
        <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-[13px] text-muted">
          <span className="flex items-center gap-1.5">
            <Tag className="h-3.5 w-3.5" />
            {l.type} · {l.price}
          </span>
          <span className="flex items-center gap-1.5">
            <Eye className="h-3.5 w-3.5" /> {l.views.toLocaleString("en-IN")} views
          </span>
          <span className="flex items-center gap-1.5">
            <Heart className="h-3.5 w-3.5" /> {l.likes} likes
          </span>
          {l.status === "active" && l.endDate && (
            <span className="flex items-center gap-1.5 text-hype-red">
              <Clock className="h-3.5 w-3.5" /> Ends {l.endDate}
            </span>
          )}
          {l.type === "Auction" && l.bids > 0 && (
            <span className="flex items-center gap-1.5 text-emerald-700">
              <TrendingUp className="h-3.5 w-3.5" /> {l.bids} bids
            </span>
          )}
        </div>
        <p className="mt-2 text-[12px] text-muted-2">{l.lastAction}</p>
      </div>

      {/* Actions */}
      <div className="flex items-center gap-2 lg:flex-col lg:items-end">
        {l.status === "active" && (
          <a
            href="/live-auctions"
            className="inline-flex h-10 items-center gap-1.5 rounded-full bg-ink px-5 text-[13px] font-bold text-white hover:bg-black"
          >
            <Eye className="h-3.5 w-3.5" /> View
          </a>
        )}
        {l.status === "draft" && (
          <a
            href="/dashboard/listings/new/photos"
            className="inline-flex h-10 items-center gap-1.5 rounded-full bg-ink px-5 text-[13px] font-bold text-white hover:bg-black"
          >
            Continue
          </a>
        )}
        {l.status === "paused" && (
          <button className="inline-flex h-10 items-center gap-1.5 rounded-full bg-ink px-5 text-[13px] font-bold text-white hover:bg-black">
            <Play className="h-3.5 w-3.5" /> Resume
          </button>
        )}
        {l.status === "sold" && (
          <span className="inline-flex h-10 items-center gap-1.5 rounded-full bg-emerald-50 px-4 text-[13px] font-bold text-emerald-700">
            <CheckCircle2 className="h-4 w-4" /> Completed
          </span>
        )}

        <div className="relative">
          <button
            onClick={onMenuToggle}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-muted hover:border-ink hover:text-ink"
            aria-label="More actions"
          >
            <MoreHorizontal className="h-4 w-4" />
          </button>
          <AnimatePresence>
            {menuOpen && (
              <motion.div
                initial={{ opacity: 0, y: -6, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -6, scale: 0.96 }}
                transition={reduceMotion({ duration: 0.18, ease: [0.16, 1, 0.3, 1] })}
                className="absolute right-0 top-12 z-20 w-52 overflow-hidden rounded-[12px] border border-line bg-white py-1.5 shadow-lg"
              >
                <MenuItem icon={Edit} label="Edit listing" />
                <MenuItem icon={Copy} label="Duplicate" />
                {l.status === "active" ? (
                  <MenuItem icon={Pause} label="Pause listing" />
                ) : l.status === "paused" ? (
                  <MenuItem icon={Play} label="Resume listing" />
                ) : null}
                {l.status === "draft" && <MenuItem icon={X} label="Cancel draft" />}
                <div className="my-1 border-t border-line-soft" />
                <MenuItem icon={Trash2} label="Delete" danger />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}

function MenuItem({
  icon: Icon,
  label,
  danger,
}: {
  icon: typeof Edit;
  label: string;
  danger?: boolean;
}) {
  return (
    <button
      className={cn(
        "flex w-full items-center gap-2.5 px-4 py-2.5 text-left text-[14px] hover:bg-cream-2",
        danger ? "text-hype-red" : "text-ink",
      )}
    >
      <Icon className="h-4 w-4" /> {label}
    </button>
  );
}
