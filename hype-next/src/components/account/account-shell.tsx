"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Gavel,
  ShoppingBag,
  Heart,
  User,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Footer } from "@/components/layout/footer";

type NavItem = { label: string; href: string; icon: React.ComponentType<{ className?: string }> };

const PRIMARY: NavItem[] = [
  { label: "My Bids", href: "/account/bids", icon: Gavel },
  { label: "My Orders", href: "/account/orders", icon: ShoppingBag },
  { label: "Wishlist", href: "/account/wishlist", icon: Heart },
];

const SETTINGS: NavItem[] = [
  { label: "Profile", href: "/account/profile", icon: User },
];

export function AccountShell({
  title,
  breadcrumb,
  user,
  children,
}: {
  title: string;
  breadcrumb: { label: string; href?: string }[];
  user: { name: string; email: string };
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  return (
    <div className="min-h-screen bg-sand">
      <header className="bg-ink text-white">
        <div className="wrap flex h-[88px] items-center gap-8">
          <Link href="/" className="font-disp text-[30px] font-extrabold tracking-tighter2 text-white">
            HYPE.
          </Link>
          <nav className="hidden flex-1 items-center justify-center gap-[34px] md:flex">
            {[
              { label: "Home", href: "/" },
              { label: "Shop", href: "/shop" },
              { label: "Live Auctions", href: "/live-auctions" },
              { label: "Sell With Us", href: "/sell-with-us" },
            ].map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-[14px] font-semibold uppercase tracking-[0.06em] text-[#e7e2da] hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="ml-auto flex items-center gap-3.5">
            <Link
              href="/account/profile"
              className="flex items-center gap-3 rounded-full bg-white/10 px-3 py-1.5 text-[13px] font-semibold hover:bg-white/15"
            >
              <span className="flex h-7 w-7 items-center justify-center rounded-full bg-cream text-[12px] font-extrabold text-ink">
                {user.name
                  .split(" ")
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join("")}
              </span>
              <span className="hidden md:inline">{user.name}</span>
            </Link>
          </div>
        </div>
      </header>

      <div className="wrap pb-20 pt-8">
        <nav className="mb-6 flex items-center gap-2 text-[14px] text-muted">
          {breadcrumb.map((b, i) => (
            <span key={i} className="flex items-center gap-2">
              {i > 0 && <ChevronRight className="h-3 w-3" />}
              {b.href ? (
                <Link href={b.href} className="hover:text-ink">
                  {b.label}
                </Link>
              ) : (
                <span className="font-medium text-ink">{b.label}</span>
              )}
            </span>
          ))}
        </nav>

        <h1 className="mb-8 font-disp text-[32px] font-extrabold tracking-tighter2 text-ink">{title}</h1>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[240px_1fr]">
          <aside className="lg:sticky lg:top-6 lg:self-start">
            <div className="rounded-2xl border border-line bg-white p-2">
              <NavGroup label="Buying" items={PRIMARY} pathname={pathname} />
              <div className="my-1 h-px bg-line" />
              <NavGroup label="Settings" items={SETTINGS} pathname={pathname} />
            </div>
            <div className="mt-4 rounded-2xl border border-line bg-white p-5">
              <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-muted">Need help?</p>
              <p className="mt-2 text-[13px] text-muted">
                Our support team is available 9 AM – 9 PM IST.
              </p>
              <Link
                href="/contact"
                className="mt-3 inline-flex text-[13px] font-bold text-ink hover:underline"
              >
                Contact support →
              </Link>
            </div>
          </aside>
          <div className="min-w-0">{children}</div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

function NavGroup({ label, items, pathname }: { label: string; items: NavItem[]; pathname: string }) {
  return (
    <div className="space-y-0.5 p-1">
      <p className="px-3 pb-1.5 pt-2 text-[11px] font-bold uppercase tracking-[0.18em] text-muted">
        {label}
      </p>
      {items.map((item) => {
        const Icon = item.icon;
        const active = pathname === item.href || pathname.startsWith(item.href + "/");
        return (
          <Link
            key={item.href}
            href={item.href}
            className={cn(
              "flex items-center gap-3 rounded-xl px-3 py-2.5 text-[15px] font-medium transition-colors",
              active
                ? "bg-ink text-white"
                : "text-muted hover:bg-cream-2 hover:text-ink",
            )}
          >
            <Icon className="h-5 w-5" />
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
