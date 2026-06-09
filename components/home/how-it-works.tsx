'use client';

import { motion } from 'framer-motion';
import { useIntersection } from '@/hooks/use-intersection';
import { Search, Gavel, CheckCircle, Trophy } from 'lucide-react';
import { useRef } from 'react';

const steps = [
  {
    icon: Search,
    title: 'Browse Collections',
    description: 'Explore thousands of curated auctions from verified sellers worldwide. Filter by category, price, or status to find exactly what you want.',
    number: '01',
  },
  {
    icon: Gavel,
    title: 'Place Your Bid',
    description: 'Bid with confidence. Our transparent auction system ensures fair pricing and secure transactions. Real-time bidding updates keep you in control.',
    number: '02',
  },
  {
    icon: CheckCircle,
    title: 'Secure & Verify',
    description: 'Every item is verified for authenticity. Our escrow system protects both buyers and sellers until the auction concludes successfully.',
    number: '03',
  },
  {
    icon: Trophy,
    title: 'Claim Your Prize',
    description: 'Win your auction and receive your item with insurance. We handle shipping coordination and provide detailed provenance documentation.',
    number: '04',
  },
];

export function HowItWorks() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIntersection(ref, { threshold: 0.3 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-background via-background to-muted/30"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A transparent, secure process designed for the modern collector. Four simple steps to own your next treasure.
          </p>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16"
        >
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                className="group relative"
              >
                {/* Card Background */}
                <div className="glass h-full p-8 rounded-hype-lg flex flex-col transition-all duration-300 group-hover:shadow-lg group-hover:bg-white/20">
                  {/* Step Number */}
                  <div className="text-6xl font-heading font-bold text-secondary/20 mb-6 leading-none">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 inline-block">
                    <div className="p-3 bg-secondary/10 rounded-hype">
                      <Icon className="w-6 h-6 text-secondary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground flex-1">
                    {step.description}
                  </p>

                  {/* Connector Line (hidden on last) */}
                  {index < steps.length - 1 && (
                    <div className="hidden lg:block absolute -right-4 top-1/2 w-8 h-0.5 bg-gradient-to-r from-secondary/50 to-transparent transform -translate-y-1/2" />
                  )}
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center"
        >
          <button className="inline-flex items-center justify-center px-8 py-3 rounded-hype bg-secondary text-hype-cream font-semibold hover:bg-secondary/90 transition-colors">
            Get Started Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
