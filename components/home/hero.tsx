'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';
import { ANIMATION_CONFIG } from '@/lib/constants';

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headlineVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    }),
  };

  const words = ['Discover', 'Bid', 'Own'];

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-background via-background to-hype-sand/5"
    >
      {/* Background parallax layer */}
      <motion.div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(215, 179, 102, 0.2) 0%, transparent 50%)',
          transform: `translateY(${scrollY * 0.3}px)`,
        }}
      />

      {/* Content container */}
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Accent line above headline */}
        <motion.div
          className="h-1 w-12 bg-hype-accent mx-auto mb-8"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        />

        {/* Main headline */}
        <div className="mb-8">
          <motion.div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {words.map((word, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={headlineVariants}
                initial="hidden"
                animate="visible"
                className="font-heading font-bold text-5xl md:text-7xl lg:text-8xl tracking-tight text-foreground"
              >
                {word}
              </motion.span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="mt-6"
          >
            <p className="font-heading font-bold text-2xl md:text-3xl text-hype-accent">
              Extraordinary Collections
            </p>
          </motion.div>
        </div>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-lg md:text-xl text-foreground/70 max-w-2xl mx-auto mb-12"
        >
          Enter the world's premier luxury auction marketplace. Discover rare pieces, place winning bids, and own what moves you.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Button
            size="lg"
            className="bg-hype-accent hover:bg-hype-accent/90 text-hype-cream font-semibold px-8 h-12 text-base"
          >
            Explore Auctions
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="border-2 border-foreground/30 hover:border-hype-accent text-foreground hover:text-hype-accent px-8 h-12 text-base"
          >
            Learn More
          </Button>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="flex justify-center"
        >
          <ChevronDown className="w-6 h-6 text-hype-accent opacity-60" />
        </motion.div>
      </div>
    </section>
  );
}
