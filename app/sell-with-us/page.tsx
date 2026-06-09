import { NavMarketplace } from '@/components/layout/nav-marketplace';
import { Footer } from '@/components/layout/footer';
import { Upload, Shield, BarChart3, Zap } from 'lucide-react';

export const metadata = {
  title: 'Sell With Us - HYPE Marketplace',
  description: 'Consign your items and reach millions of collectors. Get maximum value with our expert authentication.',
};

const benefits = [
  {
    icon: Upload,
    title: 'Simple Consignment',
    description: 'Upload photos and details. We handle the rest—photography, listing, and promotion.',
  },
  {
    icon: Shield,
    title: 'Expert Authentication',
    description: 'Every item is verified by certified experts. Build buyer confidence and command premium prices.',
  },
  {
    icon: BarChart3,
    title: 'Maximum Exposure',
    description: 'Your items reach 1M+ collectors monthly. Strategic pricing ensures competitive bidding.',
  },
  {
    icon: Zap,
    title: 'Fast Payouts',
    description: 'Get paid within 7 days of auction completion. Transparent fees, no hidden charges.',
  },
];

export default function SellPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <NavMarketplace />
      <main className="flex-1 pt-20">
        {/* Header Section */}
        <section className="bg-gradient-to-br from-secondary via-secondary/90 to-hype-accent py-20 px-4 sm:px-6 lg:px-8 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-heading font-bold mb-6">
              Sell Your Treasures
            </h1>
            <p className="text-xl text-white/90 mb-8">
              Reach collectors worldwide. Get expert authentication. Maximize your returns. HYPE handles everything.
            </p>
            <button className="inline-flex items-center justify-center px-8 py-4 rounded-hype bg-white text-secondary font-bold text-lg hover:bg-white/90 transition-colors">
              Start Selling Today
            </button>
          </div>
        </section>

        {/* How It Works for Sellers */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground text-center mb-16">
              The Seller Experience
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="p-8 rounded-hype-lg glass hover:shadow-lg transition-all">
                    <div className="mb-6 inline-block p-4 bg-secondary/10 rounded-hype">
                      <Icon className="w-8 h-8 text-secondary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-3">
                      {benefit.title}
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      {benefit.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-muted/50 border-y border-border">
          <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <p className="text-4xl font-bold text-secondary mb-2">$500M+</p>
              <p className="text-muted-foreground">In Sales Last Year</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-secondary mb-2">95%</p>
              <p className="text-muted-foreground">Seller Satisfaction Rate</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-secondary mb-2">1M+</p>
              <p className="text-muted-foreground">Active Collectors</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-secondary mb-2">8%</p>
              <p className="text-muted-foreground">Average Seller Commission</p>
            </div>
          </div>
        </section>

        {/* Process Steps */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-heading font-bold text-foreground text-center mb-16">
              Get Started in 3 Easy Steps
            </h2>
            <div className="space-y-6">
              {[
                {
                  step: '01',
                  title: 'Submit Your Items',
                  desc: 'Upload high-quality photos and provide detailed descriptions. Tell us about condition, provenance, and any certifications.',
                },
                {
                  step: '02',
                  title: 'Expert Review & Pricing',
                  desc: 'Our specialists authenticate, appraise, and photograph your items professionally. We suggest optimal pricing strategies.',
                },
                {
                  step: '03',
                  title: 'Active Auction & Payment',
                  desc: 'Your items go live to 1M+ collectors. You earn 92% of final sale price (8% platform fee). Get paid in 7 days.',
                },
              ].map((item, index) => (
                <div key={index} className="flex gap-8 p-8 rounded-hype-lg border border-border hover:border-secondary/50 transition-colors">
                  <div className="text-5xl font-heading font-bold text-secondary/20 flex-shrink-0">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-foreground mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-secondary to-hype-accent text-white text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-4xl font-heading font-bold mb-4">Ready to Sell?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of successful sellers. Start your first auction today.
            </p>
            <button className="inline-flex items-center justify-center px-8 py-4 rounded-hype bg-white text-secondary font-bold text-lg hover:bg-white/90 transition-colors">
              Create Seller Account
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
