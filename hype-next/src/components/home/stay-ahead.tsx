"use client";

import { useState, type FormEvent } from "react";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function StayAhead() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (email.includes("@")) setSubmitted(true);
  }

  return (
    <section className="bg-ink py-16 text-white">
      <div className="wrap flex flex-col items-center justify-between gap-10 md:flex-row">
        <div>
          <h2 className="font-disp text-[40px] font-extrabold tracking-tighter2">
            Stay Ahead Of The Drop.
          </h2>
          <p className="mt-2 text-[16px] text-[#b7b0a4]">
            Get updates on exclusive drops and live auctions.
          </p>
        </div>
        {submitted ? (
          <div className="flex items-center gap-3 rounded-full bg-cream/10 px-8 py-4 text-cream-2">
            <Check className="h-5 w-5 text-hype-green" />
            <span className="font-semibold">You&apos;re in. Watch your inbox.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex w-full max-w-[560px]">
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="flex-1 rounded-none border-r-0 border-white/30 bg-transparent px-6 py-[18px] text-[15px] text-white placeholder:text-[#8c867b] focus-visible:ring-0 focus-visible:ring-offset-0"
            />
            <Button
              type="submit"
              variant="light"
              size="icon"
              className="h-auto w-[64px] flex-none rounded-none px-0"
              aria-label="subscribe"
            >
              <ArrowRight className="h-[22px] w-[18px]" strokeWidth={1.8} />
            </Button>
          </form>
        )}
      </div>
    </section>
  );
}
