import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { Footer } from "@/components/layout/footer";
import { SectionReveal } from "@/components/motion";

export const metadata = { title: "Terms of Service — HYPE" };

const SECTIONS = [
  { id: "acceptance", title: "1. Acceptance of Terms", body: "By accessing or using HYPE (the 'Platform', 'we', 'us'), you agree to be bound by these Terms of Service. If you do not agree, you must not use the Platform. HYPE operates as a marketplace that connects buyers and sellers of authenticated sneakers, streetwear, and collectibles in India." },
  { id: "eligibility", title: "2. Eligibility", body: "You must be at least 18 years old and a resident of India to use HYPE. By using the Platform, you represent and warrant that you meet these requirements. We may require identity verification at any time." },
  { id: "account", title: "3. Account Registration", body: "To place bids, list items, or make purchases, you must create an account. You agree to provide accurate, current, and complete information and to keep it updated. You are responsible for safeguarding your password and for any activity on your account." },
  { id: "listings", title: "4. Listings & Auctions", body: "Sellers are responsible for the accuracy of their listings. All items must be authentic. HYPE reserves the right to remove any listing we suspect to be counterfeit, misrepresented, or otherwise in violation of these Terms. Auction bids are binding — winning bidders must complete payment within 24 hours." },
  { id: "authentication", title: "5. Authentication Process", body: "Every item sold through HYPE is subject to our multi-point authentication process. Items that fail authentication will be returned to the seller at the seller's expense. HYPE's authentication is final and binding, although buyers may dispute within 7 days of receipt with photo evidence." },
  { id: "pricing", title: "6. Pricing, Fees & Payments", body: "All prices are listed in Indian Rupees (INR) and are inclusive of GST where applicable. HYPE charges a seller's commission of 8% on the final sale price. Payment processing is handled by our PCI-DSS compliant payment partner." },
  { id: "shipping", title: "7. Shipping & Delivery", body: "Sellers must ship sold items to HYPE's authentication center within 3 business days. After authentication, HYPE ships to buyers via insured courier. Risk of loss passes to the buyer upon delivery confirmation. Delivery times: 5–10 business days within India." },
  { id: "returns", title: "8. Returns & Refunds", body: "Returns are accepted within 7 days of delivery for items that are not as described, damaged, or fail authentication. Refunds are processed within 5–7 business days to the original payment method. Buyer remorse returns are not accepted for auction wins." },
  { id: "prohibited", title: "9. Prohibited Items & Conduct", body: "You may not list counterfeit items, stolen goods, replicas, or items that infringe on intellectual property rights. You may not manipulate bids, shill bid, or engage in any form of fraud. Violations result in immediate account suspension and possible legal action." },
  { id: "ip", title: "10. Intellectual Property", body: "All content on the Platform, including but not limited to text, graphics, logos, images, and software, is the property of HYPE or its licensors and is protected by Indian and international copyright, trademark, and other IP laws." },
  { id: "liability", title: "11. Limitation of Liability & Disputes", body: "HYPE's total liability is limited to the amount of fees you have paid to us in the 12 months preceding the claim. Disputes are governed by the laws of India and subject to the exclusive jurisdiction of courts in Mumbai, Maharashtra." },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-sand">
      <SiteHeader />

      <SectionReveal>
        <section className="bg-ink py-20 text-white">
        <div className="wrap">
          <p className="text-[12px] font-bold uppercase tracking-[0.18em] text-[#a39a8c]">Legal</p>
          <h1 className="mt-3 font-disp text-[48px] font-extrabold leading-[1.05] tracking-tighter2 md:text-[64px]">
            Terms of Service
          </h1>
          <p className="mt-3 text-[15px] text-[#cfc8bb]">Last updated: 9 June 2026</p>
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
            <section key={s.id} id={s.id} className="mb-12 scroll-mt-24">
              <h2 className="font-disp text-[24px] font-extrabold tracking-tighter2 text-ink">{s.title}</h2>
              <p className="mt-3 text-[16px] leading-[1.8] text-muted">{s.body}</p>
            </section>
          ))}

          <div className="mt-16 rounded-2xl border border-line bg-white p-8">
            <h3 className="font-disp text-[18px] font-extrabold tracking-tighter2">Questions about these terms?</h3>
            <p className="mt-2 text-[14px] text-muted">
              Our legal team is happy to clarify any points. Reach out anytime.
            </p>
            <Link
              href="/contact"
              className="mt-4 inline-flex h-11 items-center gap-1.5 rounded-full bg-ink px-6 text-[14px] font-bold text-white hover:bg-black"
            >
              Contact Legal <ChevronRight className="h-4 w-4" />
            </Link>
          </div>
        </article>
      </div>
      </SectionReveal>

      <Footer />
    </div>
  );
}
