import Link from "next/link";

export function AuthNavbar() {
  return (
    <header className="bg-transparent">
      <div className="wrap flex h-20 items-center">
        <Link href="/" className="font-disp text-[28px] font-extrabold tracking-tighter2 text-ink">
          HYPE.
        </Link>
      </div>
    </header>
  );
}

export function AuthFooter() {
  return (
    <footer className="mt-auto py-8">
      <div className="wrap flex flex-col items-center gap-2 text-[13px] text-muted md:flex-row md:justify-center md:gap-3">
        <Link href="/terms" className="hover:text-ink">
          Terms of Service
        </Link>
        <span aria-hidden>·</span>
        <Link href="/privacy" className="hover:text-ink">
          Privacy Policy
        </Link>
        <span aria-hidden>·</span>
        <span>© 2026 HYPE Company</span>
      </div>
    </footer>
  );
}

export function AuthShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-sand">
      <AuthNavbar />
      <main className="flex-1 px-5 py-10 md:py-14">{children}</main>
      <AuthFooter />
    </div>
  );
}
