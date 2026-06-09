"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Wallet,
  Bell,
  Palette,
  Plus,
  CheckCircle2,
  Copy,
  Building2,
  Smartphone,
  Eye,
  EyeOff,
  Save,
  RotateCcw,
  ArrowUpRight,
  Camera,
  Package,
} from "lucide-react";
import { cn } from "@/lib/utils";

const TABS = ["Payouts", "Notifications", "Shipping", "Branding"] as const;

export default function DashboardSettingsPage() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Payouts");
  const [savedToast, setSavedToast] = useState(false);

  function fakeSave() {
    setSavedToast(true);
    setTimeout(() => setSavedToast(false), 2200);
  }

  return (
    <div>
      <div className="dash-head">
        <h1 className="font-disp text-[48px] font-extrabold leading-[1.02] tracking-tighter2">
          Settings
        </h1>
        <p className="mt-2 text-[18px] text-muted">
          Manage payouts, alerts, shipping and your seller brand.
        </p>
      </div>

      <div className="mb-6 flex flex-wrap gap-2 border-b border-line pb-3">
        {TABS.map((t) => (
          <button
            key={t}
            onClick={() => setTab(t)}
            className={cn(
              "rounded-full px-5 py-2.5 text-[14px] font-semibold transition-colors",
              tab === t ? "bg-ink text-white" : "text-muted hover:text-ink",
            )}
          >
            {t}
          </button>
        ))}
      </div>

      {savedToast && (
        <div className="mb-5 flex items-center gap-2 rounded-[12px] border border-emerald-200 bg-emerald-50 px-4 py-3 text-[14px] font-semibold text-emerald-700">
          <CheckCircle2 className="h-4 w-4" /> Settings saved
        </div>
      )}

      {tab === "Payouts" && <PayoutsSection onSave={fakeSave} />}
      {tab === "Notifications" && <NotificationsSection onSave={fakeSave} />}
      {tab === "Shipping" && <ShippingSection onSave={fakeSave} />}
      {tab === "Branding" && <BrandingSection onSave={fakeSave} />}
    </div>
  );
}

/* ─────────────────────────── Payouts ─────────────────────────── */

function PayoutsSection({ onSave }: { onSave: () => void }) {
  const [primary, setPrimary] = useState<"upi" | "bank">("upi");
  const [showAccount, setShowAccount] = useState(false);

  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
      <div className="space-y-6">
        <div className="rounded-hype-lg border border-line-soft bg-white p-6">
          <h2 className="font-disp text-[20px] font-extrabold">Payout Method</h2>
          <p className="mt-1 text-[14px] text-muted">
            Choose how you want to receive your earnings.
          </p>

          <div className="mt-5 space-y-3">
            <PayoutMethodCard
              active={primary === "upi"}
              onSelect={() => setPrimary("upi")}
              icon={Smartphone}
              title="UPI"
              subtitle="rahul@hype · HDFC Bank"
              badge="Default"
            />
            <PayoutMethodCard
              active={primary === "bank"}
              onSelect={() => setPrimary("bank")}
              icon={Building2}
              title="Bank Transfer (NEFT/IMPS)"
              subtitle={
                showAccount ? "HDFC ••••• 4729 · IFSC HDFC0001234" : "HDFC ••••• 4729"
              }
              onToggle={() => setShowAccount(!showAccount)}
              showToggle
              showAccount={showAccount}
            />
          </div>

          <button className="mt-4 inline-flex h-11 items-center gap-2 rounded-full border border-line bg-white px-5 text-[14px] font-semibold hover:border-ink">
            <Plus className="h-4 w-4" /> Add payout method
          </button>
        </div>

        <div className="rounded-hype-lg border border-line-soft bg-white p-6">
          <h2 className="font-disp text-[20px] font-extrabold">Payout Schedule</h2>
          <p className="mt-1 text-[14px] text-muted">
            Funds release within 24 hours of buyer-confirmed delivery.
          </p>
          <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {[
              { v: "instant", l: "Instant", s: "Within 1 hour of delivery", fee: "1% fee" },
              { v: "daily", l: "Daily", s: "Every day at 9 AM IST", fee: "Free" },
              { v: "weekly", l: "Weekly", s: "Every Monday", fee: "Free" },
            ].map((opt, i) => (
              <label
                key={opt.v}
                className="flex items-start gap-3 rounded-[12px] border border-line p-4 has-[:checked]:border-ink has-[:checked]:bg-cream-2"
              >
                <input
                  type="radio"
                  name="payout-schedule"
                  defaultChecked={i === 1}
                  className="mt-1.5"
                />
                <div>
                  <div className="font-bold text-ink">{opt.l}</div>
                  <div className="text-[12px] text-muted">{opt.s}</div>
                  <div className="mt-1 text-[12px] font-semibold text-emerald-700">
                    {opt.fee}
                  </div>
                </div>
              </label>
            ))}
          </div>
        </div>

        <div className="rounded-hype-lg border border-line-soft bg-white p-6">
          <div className="flex items-center justify-between">
            <h2 className="font-disp text-[20px] font-extrabold">Payout History</h2>
            <Link href="/dashboard/payouts" className="text-[12px] font-bold text-ink hover:underline">
              View all
            </Link>
          </div>
          <div className="mt-4 overflow-x-auto">
            <table className="w-full min-w-[520px] text-left text-[14px]">
              <thead>
                <tr className="border-b border-line text-[11px] font-bold uppercase tracking-[0.14em] text-muted">
                  <th className="py-2 pl-2">Date</th>
                  <th className="py-2">Order</th>
                  <th className="py-2">Method</th>
                  <th className="py-2 pr-2 text-right">Amount</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { d: "Aug 8, 2026", o: "#ORD-10934", m: "UPI", a: "₹28,520" },
                  { d: "Aug 5, 2026", o: "#ORD-10925", m: "Bank", a: "₹12,300" },
                  { d: "Aug 1, 2026", o: "#ORD-10912", m: "UPI", a: "₹9,800" },
                ].map((r) => (
                  <tr key={r.o} className="border-b border-line-soft last:border-b-0">
                    <td className="py-3 pl-2 text-muted">{r.d}</td>
                    <td className="py-3 font-bold text-ink">{r.o}</td>
                    <td className="py-3">
                      <span className="rounded-full bg-cream-2 px-2 py-0.5 text-[11px] font-semibold">
                        {r.m}
                      </span>
                    </td>
                    <td className="py-3 pr-2 text-right font-disp font-extrabold text-ink">
                      {r.a}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onSave}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-7 text-[14px] font-bold text-white hover:bg-black"
          >
            <Save className="h-4 w-4" /> Save Changes
          </button>
        </div>
      </div>

      <aside className="rounded-hype-lg border border-line-soft bg-[#e9e1d4] p-6">
        <div className="mb-3 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-[#6f6a60]">
          <Wallet className="h-4 w-4" /> Available Balance
        </div>
        <div className="font-disp text-[44px] font-extrabold leading-none">₹28,520</div>
        <div className="mt-2 text-[13px] text-[#6f6a60]">Pending: ₹12,300</div>
        <button className="mt-5 inline-flex h-11 w-full items-center justify-center gap-2 rounded-full bg-ink text-[14px] font-bold text-white hover:bg-black">
          Withdraw Now <ArrowUpRight className="h-4 w-4" />
        </button>
        <p className="mt-3 text-[12px] text-[#6f6a60]">
          Withdrawals are free and processed within 1 business day.
        </p>
      </aside>
    </div>
  );
}

function PayoutMethodCard({
  active,
  onSelect,
  onToggle,
  icon: Icon,
  title,
  subtitle,
  badge,
  showToggle,
  showAccount,
}: {
  active: boolean;
  onSelect: () => void;
  onToggle?: () => void;
  icon: typeof Smartphone;
  title: string;
  subtitle: string;
  badge?: string;
  showToggle?: boolean;
  showAccount?: boolean;
}) {
  return (
    <label
      className={cn(
        "flex items-center gap-4 rounded-[14px] border-2 p-4 transition-colors",
        active ? "border-ink bg-cream-2" : "border-line-soft bg-white hover:border-ink",
      )}
    >
      <input
        type="radio"
        checked={active}
        onChange={onSelect}
        className="h-4 w-4 accent-ink"
      />
      <div className="flex h-11 w-11 flex-none items-center justify-center rounded-[10px] bg-cream-2">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1">
        <div className="flex items-center gap-2">
          <div className="font-bold text-ink">{title}</div>
          {badge && (
            <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700">
              {badge}
            </span>
          )}
        </div>
        <div className="text-[13px] text-muted">{subtitle}</div>
      </div>
      {showToggle && (
        <button
          onClick={(e) => {
            e.preventDefault();
            onToggle?.();
          }}
          className="rounded-md p-1.5 text-muted hover:bg-cream-2 hover:text-ink"
        >
          {showAccount ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
        </button>
      )}
    </label>
  );
}

/* ─────────────────────── Notifications ─────────────────────── */

const NOTIFICATIONS = [
  { k: "bid", l: "New bids on my listings", d: "Email, Push", on: true },
  { k: "sold", l: "Item sold", d: "Email, SMS, Push", on: true },
  { k: "auth", l: "Authentication updates", d: "Email, Push", on: true },
  { k: "payment", l: "Payouts &amp; payments", d: "Email, SMS", on: true },
  { k: "message", l: "Buyer messages", d: "Push", on: true },
  { k: "promo", l: "Marketing &amp; promotions", d: "—", on: false },
  { k: "news", l: "HYPE news &amp; drops", d: "Email", on: false },
];

function NotificationsSection({ onSave }: { onSave: () => void }) {
  const [state, setState] = useState<Record<string, boolean>>(
    Object.fromEntries(NOTIFICATIONS.map((n) => [n.k, n.on])),
  );
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
      <div className="rounded-hype-lg border border-line-soft bg-white p-6">
        <h2 className="font-disp text-[20px] font-extrabold">Email &amp; Push</h2>
        <p className="mt-1 text-[14px] text-muted">Pick what you want to hear about.</p>
        <div className="mt-5 space-y-2.5">
          {NOTIFICATIONS.map((n) => (
            <div
              key={n.k}
              className="flex items-center gap-4 rounded-[12px] border border-line-soft bg-cream-2 px-4 py-3.5"
            >
              <div className="flex-1">
                <div
                  className="font-bold text-ink"
                  dangerouslySetInnerHTML={{ __html: n.l }}
                />
                <div
                  className="text-[12px] text-muted"
                  dangerouslySetInnerHTML={{ __html: n.d }}
                />
              </div>
              <Toggle
                on={!!state[n.k]}
                onChange={() => setState((s) => ({ ...s, [n.k]: !s[n.k] }))}
              />
            </div>
          ))}
        </div>

        <div className="mt-7 flex justify-end gap-2">
          <button className="inline-flex h-12 items-center gap-2 rounded-full border border-line bg-white px-6 text-[14px] font-bold text-ink hover:border-ink">
            <RotateCcw className="h-4 w-4" /> Reset
          </button>
          <button
            onClick={onSave}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-7 text-[14px] font-bold text-white hover:bg-black"
          >
            <Save className="h-4 w-4" /> Save Changes
          </button>
        </div>
      </div>

      <aside className="rounded-hype-lg border border-line-soft bg-[#e9e1d4] p-6">
        <div className="mb-3 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-[#6f6a60]">
          <Bell className="h-4 w-4" /> Quiet hours
        </div>
        <p className="text-[14px] text-[#6f6a60]">
          Pause non-critical alerts during the hours you choose.
        </p>
        <div className="mt-4 grid grid-cols-2 gap-2">
          <input
            defaultValue="22:00"
            className="h-10 rounded-[10px] border border-line bg-white px-3 text-[14px] outline-none focus:border-ink"
          />
          <input
            defaultValue="08:00"
            className="h-10 rounded-[10px] border border-line bg-white px-3 text-[14px] outline-none focus:border-ink"
          />
        </div>
        <p className="mt-2 text-[12px] text-[#6f6a60]">From 10 PM to 8 AM IST</p>
      </aside>
    </div>
  );
}

function Toggle({ on, onChange }: { on: boolean; onChange: () => void }) {
  return (
    <button
      onClick={onChange}
      className={cn(
        "relative h-7 w-12 flex-none rounded-full transition-colors",
        on ? "bg-ink" : "bg-line",
      )}
    >
      <span
        className={cn(
          "absolute top-0.5 h-6 w-6 rounded-full bg-white shadow transition-transform",
          on ? "translate-x-5" : "translate-x-0.5",
        )}
      />
    </button>
  );
}

/* ─────────────────────────── Shipping ──────────────────────── */

function ShippingSection({ onSave }: { onSave: () => void }) {
  const [pickup, setPickup] = useState(true);
  return (
    <div className="space-y-6">
      <div className="rounded-hype-lg border border-line-soft bg-white p-6">
        <h2 className="font-disp text-[20px] font-extrabold">Default Pickup Address</h2>
        <p className="mt-1 text-[14px] text-muted">
          Our delivery partner will collect items from this address.
        </p>
        <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Full Name" defaultValue="Rahul Mehta" />
          <Field label="Phone" defaultValue="+91 98765 43210" />
          <Field label="Address Line 1" defaultValue="42, Marine Drive" full />
          <Field label="Address Line 2" defaultValue="Apt 5B, Sea Breeze Apartments" full />
          <Field label="City" defaultValue="Mumbai" />
          <Field label="State" defaultValue="Maharashtra" />
          <Field label="Pincode" defaultValue="400020" />
          <Field label="Country" defaultValue="India" />
        </div>
      </div>

      <div className="rounded-hype-lg border border-line-soft bg-white p-6">
        <h2 className="font-disp text-[20px] font-extrabold">Pickup Preferences</h2>
        <div className="mt-4 space-y-3">
          <ToggleRow
            label="Weekend pickups"
            desc="Allow Saturday &amp; Sunday collections"
            on={pickup}
            onChange={() => setPickup(!pickup)}
          />
          <ToggleRow
            label="Drop-off option"
            desc="Show nearest HYPE drop-off points to buyers"
            on={false}
            onChange={() => {}}
          />
          <ToggleRow
            label="Signature required"
            desc="Courier must collect with ID proof"
            on={true}
            onChange={() => {}}
          />
        </div>
      </div>

      <div className="rounded-hype-lg border border-line-soft bg-white p-6">
        <h2 className="font-disp text-[20px] font-extrabold">Shipping Cost</h2>
        <p className="mt-1 text-[14px] text-muted">
          Shipping is paid by the buyer by default. You can offer free shipping.
        </p>
        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
          {[
            { l: "Buyer pays", s: "Standard" },
            { l: "Free shipping", s: "Boost sales" },
            { l: "Flat ₹99", s: "Subsidized" },
          ].map((opt, i) => (
            <label
              key={opt.l}
              className="flex items-start gap-3 rounded-[12px] border border-line p-4 has-[:checked]:border-ink has-[:checked]:bg-cream-2"
            >
              <input
                type="radio"
                name="shipping"
                defaultChecked={i === 0}
                className="mt-1.5"
              />
              <div>
                <div className="font-bold text-ink">{opt.l}</div>
                <div className="text-[12px] text-muted">{opt.s}</div>
              </div>
            </label>
          ))}
        </div>
      </div>

      <div className="flex justify-end">
        <button
          onClick={onSave}
          className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-7 text-[14px] font-bold text-white hover:bg-black"
        >
          <Save className="h-4 w-4" /> Save Changes
        </button>
      </div>
    </div>
  );
}

function ToggleRow({
  label,
  desc,
  on,
  onChange,
}: {
  label: string;
  desc: string;
  on: boolean;
  onChange: () => void;
}) {
  return (
    <div className="flex items-center gap-4 rounded-[12px] border border-line-soft bg-cream-2 px-4 py-3.5">
      <div className="flex-1">
        <div className="font-bold text-ink">{label}</div>
        <div className="text-[12px] text-muted">{desc}</div>
      </div>
      <Toggle on={on} onChange={onChange} />
    </div>
  );
}

function Field({
  label,
  defaultValue,
  full,
}: {
  label: string;
  defaultValue?: string;
  full?: boolean;
}) {
  return (
    <div className={full ? "sm:col-span-2" : ""}>
      <label className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.18em] text-ink">
        {label}
      </label>
      <input
        defaultValue={defaultValue}
        className="h-11 w-full rounded-[10px] border border-line bg-cream-2 px-4 text-[14px] outline-none focus:border-ink focus:ring-2 focus:ring-ink/10"
      />
    </div>
  );
}

/* ─────────────────────────── Branding ──────────────────────── */

function BrandingSection({ onSave }: { onSave: () => void }) {
  const [brandName, setBrandName] = useState("HYPE India Store");
  const [bio, setBio] = useState(
    "Curated authenticated sneakers and streetwear. Ships within 24 hours.",
  );
  return (
    <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1fr_320px]">
      <div className="space-y-6">
        <div className="rounded-hype-lg border border-line-soft bg-white p-6">
          <h2 className="font-disp text-[20px] font-extrabold">Storefront</h2>
          <p className="mt-1 text-[14px] text-muted">
            How buyers see you on HYPE.
          </p>

          <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-[120px_1fr]">
            <div className="relative">
              <div className="flex h-[120px] w-[120px] items-center justify-center rounded-full bg-gradient-to-br from-amber-200 to-amber-500 text-[36px] font-extrabold text-white">
                HI
              </div>
              <button className="absolute bottom-0 right-0 flex h-9 w-9 items-center justify-center rounded-full bg-ink text-white shadow hover:bg-black">
                <Camera className="h-4 w-4" />
              </button>
            </div>
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.18em] text-ink">
                  Brand name
                </label>
                <input
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
                  className="h-11 w-full rounded-[10px] border border-line bg-cream-2 px-4 text-[14px] font-bold outline-none focus:border-ink focus:ring-2 focus:ring-ink/10"
                />
                <div className="mt-1.5 text-[12px] text-muted">
                  Your unique URL:{" "}
                  <span className="font-semibold text-ink">hype.in/@hype-india-store</span>{" "}
                  <button className="ml-1 text-ink hover:underline">
                    <Copy className="inline h-3 w-3" /> Copy
                  </button>
                </div>
              </div>
              <div>
                <label className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.18em] text-ink">
                  Bio
                </label>
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  rows={3}
                  className="block w-full rounded-[10px] border border-line bg-cream-2 px-4 py-3 text-[14px] outline-none focus:border-ink focus:ring-2 focus:ring-ink/10"
                />
                <div className="mt-1 text-right text-[12px] text-muted">
                  {bio.length} / 200
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-hype-lg border border-line-soft bg-white p-6">
          <h2 className="font-disp text-[20px] font-extrabold">Banner</h2>
          <p className="mt-1 text-[14px] text-muted">
            A 1200×400 image displayed at the top of your store.
          </p>
          <div className="mt-4 flex h-[160px] items-center justify-center rounded-[14px] border-2 border-dashed border-line bg-cream-2">
            <div className="text-center">
              <Package className="mx-auto h-7 w-7 text-muted-2" />
              <p className="mt-2 text-[14px] font-semibold">Click to upload banner</p>
              <p className="text-[12px] text-muted">1200 × 400 · PNG or JPG · 4 MB max</p>
            </div>
          </div>
        </div>

        <div className="rounded-hype-lg border border-line-soft bg-white p-6">
          <h2 className="font-disp text-[20px] font-extrabold">Social Links</h2>
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Field label="Instagram" defaultValue="@hypeindiahq" />
            <Field label="Twitter / X" defaultValue="@hypeindiahq" />
            <Field label="YouTube" defaultValue="youtube.com/@hypeindia" />
            <Field label="Website" defaultValue="thehypecompany.in" />
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={onSave}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-7 text-[14px] font-bold text-white hover:bg-black"
          >
            <Save className="h-4 w-4" /> Save Changes
          </button>
        </div>
      </div>

      <aside className="rounded-hype-lg border border-line-soft bg-[#e9e1d4] p-6">
        <div className="mb-3 flex items-center gap-2 text-[12px] font-bold uppercase tracking-[0.18em] text-[#6f6a60]">
          <Palette className="h-4 w-4" /> Preview
        </div>
        <div className="overflow-hidden rounded-[14px] border border-line bg-white">
          <div className="h-20 bg-gradient-to-br from-amber-200 via-orange-200 to-rose-300" />
          <div className="px-4 pb-4 -mt-7">
            <div className="flex h-14 w-14 items-center justify-center rounded-full border-2 border-white bg-gradient-to-br from-amber-200 to-amber-500 text-[18px] font-extrabold text-white">
              HI
            </div>
            <div className="mt-2 font-disp text-[18px] font-extrabold">{brandName}</div>
            <p className="mt-1 text-[12px] text-muted line-clamp-2">{bio}</p>
            <div className="mt-3 flex items-center gap-3 text-[11px] font-semibold text-muted">
              <span>128 sold</span>
              <span>•</span>
              <span>4.9 ★</span>
              <span>•</span>
              <span>Verified</span>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
