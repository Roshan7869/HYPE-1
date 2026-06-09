import { Footer } from "@/components/layout/footer";
import { Sidebar } from "@/components/layout/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page">
      <header className="bg-ink text-white">
        <div className="wrap flex h-[88px] items-center gap-8">
          <a href="/" className="font-disp text-[30px] font-extrabold tracking-tighter2 text-white">
            HYPE.
          </a>
          <nav className="flex flex-1 items-center justify-center gap-[34px]">
            {[
              { label: "Home", href: "/" },
              { label: "Shop", href: "/shop" },
              { label: "Live Auctions", href: "/live-auctions" },
              { label: "Sell With Us", href: "/sell-with-us" },
              { label: "About", href: "#" },
              { label: "Contact", href: "#" },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-[14px] font-semibold uppercase tracking-[0.06em] text-[#e7e2da] hover:text-white"
              >
                {l.label}
              </a>
            ))}
          </nav>
          <div className="flex items-center gap-3.5">
            <a
              href="#"
              className="rounded-full border-[1.5px] border-white/50 px-[26px] py-[13px] text-[14px] font-semibold tracking-[0.04em] text-white hover:border-white hover:bg-white/[0.06]"
            >
              Login
            </a>
            <a
              href="#"
              className="rounded-full bg-cream px-[26px] py-[13px] text-[14px] font-semibold tracking-[0.04em] text-ink hover:bg-white"
            >
              Sign Up
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1 bg-sand">
        <div className="wrap grid grid-cols-1 items-start gap-10 py-[34px] pb-[90px] lg:grid-cols-[300px_1fr]">
          <Sidebar />
          <div className="min-w-0">{children}</div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
