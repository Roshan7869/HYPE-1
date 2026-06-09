'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { Mail, Check } from 'lucide-react';

export function EmailCTA() {
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitted(true);
    setEmail('');
    setIsLoading(false);

    // Reset after 3 seconds
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  return (
    <section className="relative py-24 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-secondary via-secondary/90 to-hype-accent overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-8"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Mail className="w-6 h-6 text-white" />
            <span className="text-sm font-semibold text-white/90 uppercase tracking-wider">
              Stay Informed
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-4">
            Never Miss an Auction
          </h2>
          <p className="text-lg text-white/80">
            Get notified about rare collections, price drops, and exclusive pre-auction previews. Curated insights delivered weekly.
          </p>
        </motion.div>

        {/* Form */}
        <motion.form
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
          className="flex gap-3 mb-6"
        >
          <div className="flex-1 relative">
            <input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              disabled={isSubmitted}
              className="w-full px-6 py-4 rounded-hype bg-white text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 disabled:opacity-50"
            />
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            disabled={isLoading || isSubmitted}
            className="px-8 py-4 rounded-hype bg-hype-ink text-white font-semibold hover:bg-hype-ink/90 disabled:opacity-50 transition-colors flex items-center gap-2 whitespace-nowrap"
          >
            {isLoading ? (
              <>
                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                Subscribing...
              </>
            ) : isSubmitted ? (
              <>
                <Check className="w-5 h-5" />
                Confirmed!
              </>
            ) : (
              'Subscribe'
            )}
          </motion.button>
        </motion.form>

        {/* Trust indicators */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row items-center justify-center gap-4 text-sm text-white/70"
        >
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-white/70" />
            <span>No spam, unsubscribe anytime</span>
          </div>
          <div className="hidden md:block w-1 h-1 rounded-full bg-white/70" />
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-white/70" />
            <span>Exclusive member-only deals</span>
          </div>
          <div className="hidden md:block w-1 h-1 rounded-full bg-white/70" />
          <div className="flex items-center gap-2">
            <div className="w-1 h-1 rounded-full bg-white/70" />
            <span>Join 150K+ collectors</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
