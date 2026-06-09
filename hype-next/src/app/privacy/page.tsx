import Link from "next/link";
import { ShieldCheck, ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import { SectionReveal } from "@/components/motion";

export const metadata = { title: "Privacy Policy — HYPE" };

const SECTIONS = [
  { id: "collection", title: "1. Information We Collect", body: "We collect personal information you provide during signup (name, email, phone, address), payment data processed securely by our PCI-DSS compliant payment partner (we never store full card numbers), usage data (pages visited, features used), and device information (IP, browser, OS) for fraud prevention." },
  { id: "usage", title: "2. How We Use Your Information", body: "We use your data to process orders, communicate transaction updates, prevent fraud, improve our services, and — only with your explicit consent — send marketing communications about new drops, auctions, and promotions." },
  { id: "sharing", title: "3. Information Sharing", body: "We share data only with: (a) sellers, to fulfill your order; (b) our payment partner Cashfree, to process payments; (c) analytics partners, in aggregate form; and (d) law enforcement, when legally required. We never sell your personal data to third parties." },
  { id: "security", title: "4. Data Security", body: "HYPE employs 256-bit SSL encryption, secure data storage with leading cloud providers, PCI-DSS compliant payment processing via Cashfree, regular security audits, and 2FA for all internal admin access. Despite our efforts, no system is 100% secure." },
  { id: "rights", title: "5. Your Rights Under DPDP Act", callout: true, body: "Under India's Digital Personal Data Protection Act 2023, you have the right to: access a summary of your personal data and processing activities; correct inaccurate or outdated data; request deletion of your data; nominate another individual to exercise your rights; and withdraw consent at any time. To exercise these rights, contact our Data Protection Officer." },
  { id: "cookies", title: "6. Cookies & Tracking", body: "We use essential cookies (required for the site to function), analytics cookies (Google Analytics, anonymized), and marketing cookies (only with your consent). You can opt out of non-essential cookies via your browser settings or our cookie banner." },
  { id: "retention", title: "7. Data Retention", body: "Account data is retained while your account is active. Order records are kept for 7 years for tax compliance. Authentication photos and reports are retained for 3 years. Marketing data is deleted within 30 days of opt-out." },
  { id: "children", title: "8. Children's Privacy", body: "HYPE is intended for users 18 and over. We do not knowingly collect personal data from children under 18. If you believe a minor has provided us data, contact us immediately and we will delete it." },
  { id: "transfers", title: "9. International Data Transfers", body: "Your data is primarily processed in India by HYPE and our Indian service providers. We do not transfer personal data outside India without your explicit consent, except as required for global fraud prevention services." },
  { id: "changes", title: "10. Changes to This Policy", body: "We will notify you of any material changes to this policy at least 30 days in advance via email and a prominent in-app notice. Continued use of HYPE after the effective date constitutes acceptance of the updated policy." },
  { id: "contact", title: "11. Contact & Grievance", body: "For any privacy concerns or to exercise your DPDP rights, contact our Data Protection Officer: privacy@thehypecompany.in. Grievance Officer: Grievance Officer, HYPE Pvt. Ltd., 123 MG Road, Fort, Mumbai 400001. We respond within 15 days." },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-sand">
      <SiteHeader />

      <SectionReveal>
        <section className="bg-ink py-20 text-white">
        <div className="wrap">
          <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#a39a8c]">Legal · Privacy</p>
          <h1 className="mt-3 font-disp text-[48px] font-extrabold leading-[1.05] tracking-tighter2 md:text-[64px]">
            Privacy Policy
          </h1>
          <p className="mt-3 text-[15px] text-[#cfc8bb]">Last updated: 9 June 2026 · DPDP Act 2023 compliant</p>
        </div>
      </section>
      </SectionReveal>

      <SectionReveal>

      <div className="wrap grid grid-cols-1 gap-12 py-12 lg:grid-cols-[260px_1fr]">
        <aside className="lg:sticky lg:top-6 lg:self-start">
          <p className="mb-3 text-[12px] font-bold uppercase tracking-[0.18em] text-muted">Contents</p>
          <nav className="space-y-1 border-l border-line">
            {SECTIONS.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="block py-2 pl-4 text-[14px] font-medium text-muted transition-colors hover:text-ink"
              >
                {s.title}
              </a>
            ))}
          </nav>
        </aside>
        <article className="max-w-[760px]">
          {SECTIONS.map((s) => (
            <section key={s.id} id={s.id} className="mb-10 scroll-mt-24">
              <h2 className="font-disp text-[24px] font-extrabold tracking-tighter2 text-ink">{s.title}</h2>
              {s.callout ? (
                <div className="mt-4 rounded-lg border-l-4 border-green-600 bg-green-50 p-5">
                  <div className="mb-2 flex items-center gap-2">
                    <ShieldCheck className="h-5 w-5 text-green-600" />
                    <span className="text-[15px] font-bold text-ink">Your Rights Under DPDP Act</span>
                  </div>
                  <p className="text-[15px] leading-[1.7] text-ink/80">{s.body}</p>
                </div>
              ) : (
                <p className="mt-3 text-[16px] leading-[1.8] text-muted">{s.body}</p>
              )}
            </section>
          ))}

          <div className="mt-16 rounded-2xl border border-line bg-white p-8">
            <h3 className="font-disp text-[18px] font-extrabold tracking-tighter2">Questions about your privacy?</h3>
            <p className="mt-2 text-[14px] text-muted">Contact our Data Protection Officer.</p>
            <Link
              href="/contact"
              className="mt-4 inline-flex h-11 items-center gap-1.5 rounded-full bg-ink px-6 text-[14px] font-bold text-white hover:bg-black"
            >
              Contact DPO <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </div>
      </SectionReveal>

      <Footer />
    </div>
  );
}
