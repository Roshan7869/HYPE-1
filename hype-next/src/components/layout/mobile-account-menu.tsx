"use client";

import Link from "next/link";
import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { LogIn, UserPlus, User, LayoutDashboard, LogOut } from "lucide-react";

interface Props {
  open: boolean;
  onClose: () => void;
  isAuthenticated?: boolean;
  onSignOut?: () => void;
}

export function MobileAccountMenu({ open, onClose, isAuthenticated = false, onSignOut }: Props) {
  const pathname = usePathname();
  const menuRef = useRef<HTMLDivElement>(null);

  // Close on route change
  useEffect(() => {
    if (open) onClose();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Close on Escape; click-outside via document mousedown
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    const onClick = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onClick);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onClick);
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div
      ref={menuRef}
      role="menu"
      aria-label="Account"
      className="absolute right-3 top-[72px] z-50 w-[220px] overflow-hidden rounded-2xl border border-line bg-white text-ink shadow-2xl"
    >
      {isAuthenticated ? (
        <>
          <MenuLink href="/account/profile" icon={User} label="My Account" />
          <MenuLink href="/dashboard" icon={LayoutDashboard} label="Dashboard" />
          <button
            type="button"
            onClick={() => {
              onSignOut?.();
              onClose();
            }}
            className="flex w-full items-center gap-3 border-t border-line px-4 py-3 text-left text-[14px] font-semibold text-red-600 hover:bg-cream-2"
          >
            <LogOut className="h-4 w-4" />
            Sign out
          </button>
        </>
      ) : (
        <>
          <MenuLink href="/login" icon={LogIn} label="Sign in" />
          <MenuLink href="/signup" icon={UserPlus} label="Register" />
        </>
      )}
    </div>
  );
}

function MenuLink({
  href,
  icon: Icon,
  label,
}: {
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  label: string;
}) {
  return (
    <Link
      href={href}
      onClick={() => {
        // parent will close via pathname effect
      }}
      className="flex items-center gap-3 border-b border-line px-4 py-3 text-[14px] font-semibold text-ink last:border-b-0 hover:bg-cream-2"
    >
      <Icon className="h-4 w-4 text-muted" />
      {label}
    </Link>
  );
}
