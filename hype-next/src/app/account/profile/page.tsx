"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  User,
  MapPin,
  Lock,
  Bell,
  CreditCard,
  AlertTriangle,
  Camera,
  Check,
  Plus,
  Trash2,
  Eye,
  EyeOff,
  ShieldCheck,
  Smartphone,
} from "lucide-react";
import { AccountShell } from "@/components/account/account-shell";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { PasswordStrengthMeter, getPasswordStrength } from "@/components/auth/password-strength";
import { EmptyState, ToastProvider, useToast } from "@/components/motion";
import { dur, ease, fadeUp, reduceMotion } from "@/lib/motion";
import { cn } from "@/lib/utils";

const SECTIONS = [
  { id: "profile", label: "Profile Information", icon: User },
  { id: "addresses", label: "Saved Addresses", icon: MapPin },
  { id: "password", label: "Change Password", icon: Lock },
  { id: "notifications", label: "Notifications", icon: Bell },
  { id: "payment", label: "Payment Methods", icon: CreditCard },
  { id: "danger", label: "Danger Zone", icon: AlertTriangle },
] as const;

const ADDRESSES = [
  { id: "a1", label: "Home", name: "Roshan Khatri", line: "123 MG Road, Near Central Mall, Fort, Mumbai, Maharashtra — 400001", phone: "+91 98765 43210", isDefault: true },
  { id: "a2", label: "Work", name: "Roshan Khatri", line: "42 Hitech City, Madhapur, Hyderabad, Telangana — 500081", phone: "+91 98765 43210", isDefault: false },
];

export default function ProfilePage() {
  return (
    <ToastProvider>
      <ProfilePageInner />
    </ToastProvider>
  );
}

function ProfilePageInner() {
  const [tab, setTab] = useState<(typeof SECTIONS)[number]["id"]>("profile");
  return (
    <AccountShell
      title="Account Settings"
      breadcrumb={[
        { label: "Home", href: "/" },
        { label: "Account" },
        { label: "Profile" },
      ]}
      user={{ name: "Roshan K", email: "roshan@example.com" }}
    >
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[240px_1fr]">
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <nav className="rounded-2xl border border-line bg-white p-2">
            {SECTIONS.map((s) => {
              const Icon = s.icon;
              const active = tab === s.id;
              return (
                <button
                  key={s.id}
                  onClick={() => setTab(s.id)}
                  className={cn(
                    "relative flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-[15px] font-medium transition-colors",
                    active ? "text-white" : "text-muted hover:bg-cream-2 hover:text-ink",
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="profile-tab-bg"
                      className="absolute inset-0 rounded-xl bg-ink"
                      transition={reduceMotion({ type: "spring", stiffness: 380, damping: 30 })}
                    />
                  )}
                  <Icon className="relative z-10 h-5 w-5" />
                  <span className="relative z-10">{s.label}</span>
                </button>
              );
            })}
          </nav>
        </aside>

        <div className="min-w-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={tab}
              variants={fadeUp}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0, y: -8 }}
              transition={reduceMotion({ duration: dur.base, ease: ease.out })}
            >
              {tab === "profile" && <ProfileSection />}
              {tab === "addresses" && <AddressesSection />}
              {tab === "password" && <PasswordSection />}
              {tab === "notifications" && <NotificationsSection />}
              {tab === "payment" && <PaymentSection />}
              {tab === "danger" && <DangerSection />}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </AccountShell>
  );
}

function Card({ title, children, action }: { title: string; children: React.ReactNode; action?: React.ReactNode }) {
  return (
    <motion.div
      variants={fadeUp}
      className="rounded-[20px] border border-line bg-white p-8"
    >
      <div className="mb-6 flex items-center justify-between">
        <h2 className="font-disp text-[20px] font-extrabold tracking-tighter2 text-ink">{title}</h2>
        {action}
      </div>
      {children}
    </motion.div>
  );
}

function ProfileSection() {
  const toast = useToast();
  return (
    <Card title="Profile Information">
      <div className="mb-8 flex flex-col items-center gap-3 text-center">
        <motion.div
          className="relative"
          whileHover={{ scale: 1.05 }}
          transition={reduceMotion({ type: "spring", stiffness: 380, damping: 20 })}
        >
          <div className="flex h-[100px] w-[100px] items-center justify-center rounded-full bg-sand text-[36px] font-extrabold text-ink">RK</div>
          <motion.button
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => toast("Photo upload coming soon", "info")}
            className="absolute bottom-0 right-0 flex h-8 w-8 items-center justify-center rounded-full bg-ink text-white shadow-md"
            aria-label="Upload avatar"
          >
            <Camera className="h-4 w-4" />
          </motion.button>
        </motion.div>
        <p className="text-[13px] text-muted">Click to upload new photo</p>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        <Field label="Full Name" id="name"><Input id="name" defaultValue="Roshan Khatri" /></Field>
        <Field label="Email Address" id="email">
          <div className="flex gap-2">
            <Input id="email" defaultValue="roshan@example.com" readOnly />
            <span className="inline-flex h-11 items-center gap-1.5 rounded-md bg-hype-green px-3 text-[12px] font-bold text-hype-green-ink">
              <Check className="h-3.5 w-3.5" /> Verified
            </span>
          </div>
        </Field>
        <Field label="Phone Number" id="phone">
          <div className="flex gap-2">
            <div className="flex h-11 w-[60px] flex-none items-center justify-center rounded-md border border-line bg-cream-3 text-[14px] font-semibold text-ink">+91</div>
            <Input id="phone" defaultValue="98765 43210" />
            <span className="inline-flex h-11 items-center gap-1.5 rounded-md bg-hype-green px-3 text-[12px] font-bold text-hype-green-ink">
              <Check className="h-3.5 w-3.5" /> Verified
            </span>
          </div>
        </Field>
        <Field label="Date of Birth" id="dob"><Input id="dob" type="date" defaultValue="2000-01-15" /></Field>
        <Field label="Gender" id="gender">
          <select id="gender" defaultValue="" className="h-11 w-full rounded-md border border-line bg-cream-2 px-4 text-sm text-ink outline-none focus:border-ink focus:ring-2 focus:ring-ink/10">
            <option value="" disabled>Select gender</option>
            <option>Male</option>
            <option>Female</option>
            <option>Other</option>
            <option>Prefer not to say</option>
          </select>
        </Field>
      </div>

      <div className="mt-8">
        <Button size="lg" onClick={() => toast("Profile updated", "success")}>Save Changes</Button>
      </div>
    </Card>
  );
}

function AddressesSection() {
  const toast = useToast();
  return (
    <Card
      title="Saved Addresses"
      action={
        <Button size="sm" className="gap-1.5" onClick={() => toast("Add address form coming soon", "info")}>
          <Plus className="h-4 w-4" /> Add New
        </Button>
      }
    >
      <div className="space-y-3">
        {ADDRESSES.map((a, i) => (
          <motion.div
            key={a.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={reduceMotion({ duration: dur.base, ease: ease.out, delay: i * 0.05 })}
            className="flex items-start gap-4 rounded-2xl border border-line p-5 transition-colors hover:border-ink/30"
          >
            <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-cream-3">
              <MapPin className="h-5 w-5 text-ink" />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <p className="text-[15px] font-bold text-ink">{a.label}</p>
                {a.isDefault && (
                  <span className="rounded bg-ink px-2 py-0.5 text-[11px] font-bold text-white">Default</span>
                )}
              </div>
              <p className="mt-1 text-[14px] font-semibold text-ink">{a.name}</p>
              <p className="mt-1 text-[14px] text-muted">{a.line}</p>
              <p className="mt-1 text-[14px] text-muted">{a.phone}</p>
            </div>
            <div className="flex flex-col gap-2">
              <button onClick={() => toast("Edit address coming soon", "info")} className="text-[14px] font-semibold text-ink hover:underline">Edit</button>
              <button onClick={() => toast("Delete address coming soon", "info")} className="text-[14px] font-semibold text-red-500 hover:underline">Delete</button>
            </div>
          </motion.div>
        ))}
      </div>
    </Card>
  );
}

function PasswordSection() {
  const toast = useToast();
  const [pw, setPw] = useState("");
  const [confirm, setConfirm] = useState("");
  const [show, setShow] = useState(false);
  const strength = getPasswordStrength(pw);
  const valid = strength.score === 4 && pw === confirm;
  return (
    <Card title="Change Password">
      <div className="space-y-5">
        <Field label="Current Password" id="cur">
          <Input id="cur" type="password" placeholder="••••••••" autoComplete="current-password" />
        </Field>
        <Field label="New Password" id="pw">
          <div className="relative">
            <Input id="pw" type={show ? "text" : "password"} value={pw} onChange={(e) => setPw(e.target.value)} placeholder="••••••••" className="pr-12" />
            <button type="button" onClick={() => setShow((s) => !s)} className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-ink">
              {show ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
            </button>
          </div>
          <PasswordStrengthMeter password={pw} />
        </Field>
        <Field label="Confirm New Password" id="confirm">
          <Input id="confirm" type="password" value={confirm} onChange={(e) => setConfirm(e.target.value)} placeholder="••••••••" />
        </Field>
      </div>
      <div className="mt-8">
        <Button size="lg" disabled={!valid} onClick={() => valid && toast("Password updated", "success")}>Update Password</Button>
      </div>
    </Card>
  );
}

function NotificationsSection() {
  const toast = useToast();
  const [prefs, setPrefs] = useState({ orders: true, bids: true, marketing: false, newsletter: false, sms: true });
  return (
    <Card title="Notification Preferences">
      <div className="divide-y divide-line">
        {[
          { id: "orders", label: "Order updates", desc: "Shipping, delivery, and order status changes" },
          { id: "bids", label: "Bid activity", desc: "Outbid alerts, auction wins, and payment reminders" },
          { id: "marketing", label: "Marketing & promotions", desc: "Discounts, new arrivals, and special offers" },
          { id: "newsletter", label: "Weekly newsletter", desc: "Curated drops and sneaker culture stories" },
          { id: "sms", label: "SMS notifications", desc: "Receive critical updates via SMS" },
        ].map((n) => (
          <div key={n.id} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
            <div>
              <p className="text-[15px] font-semibold text-ink">{n.label}</p>
              <p className="mt-0.5 text-[13px] text-muted">{n.desc}</p>
            </div>
            <button
              type="button"
              role="switch"
              aria-checked={prefs[n.id as keyof typeof prefs]}
              onClick={() => setPrefs((p) => ({ ...p, [n.id]: !p[n.id as keyof typeof prefs] }))}
              className={cn(
                "relative h-7 w-12 flex-none rounded-full transition-colors duration-200",
                prefs[n.id as keyof typeof prefs] ? "bg-ink" : "bg-line",
              )}
            >
              <motion.span
                className="absolute top-0.5 h-6 w-6 rounded-full bg-white shadow-sm"
                animate={{ x: prefs[n.id as keyof typeof prefs] ? 22 : 2 }}
                transition={reduceMotion({ type: "spring", stiffness: 500, damping: 30 })}
              />
            </button>
          </div>
        ))}
      </div>
      <div className="mt-6">
        <Button size="lg" onClick={() => toast("Notification preferences saved", "success")}>Save Preferences</Button>
      </div>
    </Card>
  );
}

function PaymentSection() {
  const toast = useToast();
  return (
    <Card
      title="Saved Payment Methods"
      action={
        <Button size="sm" className="gap-1.5" onClick={() => toast("Add card form coming soon", "info")}>
          <Plus className="h-4 w-4" /> Add Card
        </Button>
      }
    >
      <div className="space-y-3">
        <motion.div
          whileHover={{ y: -2 }}
          transition={reduceMotion({ type: "spring", stiffness: 380, damping: 28 })}
          className="flex items-center gap-4 rounded-2xl border border-line bg-gradient-to-br from-ink to-zinc-800 p-5 text-white"
        >
          <div className="flex h-10 w-10 flex-none items-center justify-center rounded-full bg-white/10">
            <CreditCard className="h-5 w-5" />
          </div>
          <div className="flex-1">
            <p className="text-[15px] font-bold">HDFC •••• 4321</p>
            <p className="mt-1 text-[12px] uppercase tracking-[0.12em] text-white/60">Expires 12/28</p>
          </div>
          <span className="rounded bg-white/10 px-2 py-0.5 text-[11px] font-bold">Default</span>
        </motion.div>
      </div>
      <div className="mt-6 rounded-2xl bg-cream-3 p-5">
        <div className="flex items-center gap-3">
          <Smartphone className="h-5 w-5 text-ink" />
          <p className="text-[14px] font-bold text-ink">UPI</p>
          <span className="inline-flex items-center gap-1.5 rounded-md bg-hype-green px-2 py-0.5 text-[11px] font-bold text-hype-green-ink">
            <ShieldCheck className="h-3 w-3" /> Verified
          </span>
        </div>
        <p className="mt-2 text-[13px] text-muted">Default: roshan@okhdfc</p>
        <button onClick={() => toast("Change UPI flow coming soon", "info")} className="mt-3 text-[13px] font-semibold text-ink hover:underline">Change UPI ID</button>
      </div>
    </Card>
  );
}

function DangerSection() {
  const toast = useToast();
  return (
    <Card title="Danger Zone">
      <div className="space-y-3">
        <motion.div
          whileHover={{ scale: 1.005 }}
          transition={reduceMotion({ duration: dur.fast })}
          className="flex items-center justify-between rounded-2xl border border-amber-200 bg-amber-50 p-5"
        >
          <div>
            <p className="text-[15px] font-bold text-ink">Deactivate account</p>
            <p className="mt-1 text-[13px] text-muted">Hide your profile and listings. You can reactivate any time.</p>
          </div>
          <Button variant="outline" size="sm" onClick={() => toast("Deactivate flow coming soon", "info")}>Deactivate</Button>
        </motion.div>
        <motion.div
          whileHover={{ scale: 1.005 }}
          transition={reduceMotion({ duration: dur.fast })}
          className="flex items-center justify-between rounded-2xl border border-red-200 bg-red-50 p-5"
        >
          <div>
            <p className="text-[15px] font-bold text-ink">Delete account</p>
            <p className="mt-1 text-[13px] text-muted">Permanently delete your account and all data. This cannot be undone.</p>
          </div>
          <Button
            size="sm"
            className="bg-red-600 hover:bg-red-700"
            onClick={() => toast("Delete confirmation modal coming soon", "error")}
          >
            <Trash2 className="mr-1.5 h-3.5 w-3.5" /> Delete
          </Button>
        </motion.div>
      </div>
    </Card>
  );
}

function Field({ label, id, children }: { label: string; id: string; children: React.ReactNode }) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.18em] text-ink">
        {label}
      </label>
      {children}
    </div>
  );
}
