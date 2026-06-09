'use client';

import { motion } from 'framer-motion';
import { useIntersection } from '@/hooks/use-intersection';
import { AnimatedCounter } from '@/components/shared/animated-counter';
import { mockStats } from '@/lib/mock-data';

const stats = [
  {
    label: 'Total Auctions',
    value: mockStats.totalAuctions,
    suffix: '+',
  },
  {
    label: 'Active Bidders',
    value: mockStats.uniqueBidders,
    suffix: '',
  },
  {
    label: 'Total Bids Placed',
    value: mockStats.totalBids,
    suffix: '+',
  },
  {
    label: 'Success Rate',
    value: 98,
    suffix: '%',
  },
];

export function StatsBar() {
  const { ref, isInView } = useIntersection({ triggerOnce: true });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-16 md:py-24 bg-gradient-to-b from-background to-hype-sand/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="glass p-6 md:p-8 rounded-hype-lg text-center group hover:border-hype-accent/50 transition-colors"
            >
              <div className="mb-4">
                <div className="text-3xl md:text-4xl font-heading font-bold text-foreground group-hover:text-hype-accent transition-colors">
                  {isInView ? (
                    <AnimatedCounter
                      end={stat.value}
                      duration={2}
                      suffix={stat.suffix}
                    />
                  ) : (
                    `0${stat.suffix}`
                  )}
                </div>
              </div>
              <p className="text-sm md:text-base text-foreground/60">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
