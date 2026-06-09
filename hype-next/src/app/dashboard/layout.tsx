import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import { Sidebar } from "@/components/layout/sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="page">
      <SiteHeader />

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
