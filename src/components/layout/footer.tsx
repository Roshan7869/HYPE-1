'use client';

import Link from 'next/link';
import { Instagram, Twitter, Facebook, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const footerLinks = {
  Company: [
    { label: 'About Us', href: '/about' },
    { label: 'How It Works', href: '/how-it-works' },
    { label: 'Careers', href: '/careers' },
    { label: 'Press', href: '/press' },
  ],
  Support: [
    { label: 'Help Center', href: '/help' },
    { label: 'Contact Us', href: '/contact' },
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms of Service', href: '/terms' },
  ],
  Auction: [
    { label: 'Browse Auctions', href: '/shop' },
    { label: 'Live Auctions', href: '/live-auctions' },
    { label: 'Sell With Us', href: '/sell-with-us' },
    { label: 'Categories', href: '/categories' },
  ],
};

const socialLinks = [
  { Icon: Instagram, href: '#', label: 'Instagram' },
  { Icon: Twitter, href: '#', label: 'Twitter' },
  { Icon: Facebook, href: '#', label: 'Facebook' },
];

export function Footer() {
  return (
    <footer className="bg-hype-ink text-hype-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20">
        {/* Newsletter Section */}
        <div className="mb-16 pb-16 border-b border-hype-cream/10">
          <h3 className="font-heading text-2xl md:text-3xl font-bold mb-2">
            Stay Ahead of the Auctions
          </h3>
          <p className="text-hype-cream/60 mb-6">
            Get exclusive previews and early access to rare collections.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md">
            <Input
              type="email"
              placeholder="Enter your email"
              className="bg-hype-cream/10 border-hype-cream/20 text-hype-cream placeholder:text-hype-cream/50"
            />
            <Button className="bg-hype-gold hover:bg-hype-gold/90 text-hype-ink font-semibold whitespace-nowrap">
              Subscribe
            </Button>
          </div>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">
                {title}
              </h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-hype-cream/60 hover:text-hype-cream transition-colors text-sm"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pt-6 border-t border-hype-cream/10">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-hype-gold to-hype-accent rounded-hype flex items-center justify-center">
              <span className="text-hype-ink font-heading font-bold">H</span>
            </div>
            <span className="font-heading font-bold text-lg">HYPE</span>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map(({ Icon, href, label }) => (
              <Link
                key={label}
                href={href}
                className="p-2 rounded-hype hover:bg-hype-cream/10 transition-colors"
                aria-label={label}
              >
                <Icon className="w-5 h-5" />
              </Link>
            ))}
          </div>

          <p className="text-hype-cream/50 text-sm">
            &copy; 2024 HYPE Auctions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
