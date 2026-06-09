"use client";

import { ClipboardList, Gavel, Package, ArrowRight } from "lucide-react";
import { HOW_IT_WORKS } from "@/lib/constants";
import { ScrollReveal } from "@/components/shared/scroll-reveal";

export function HowItWorks() {
  return (
    <section className="bg-cream py-16 md:py-[72px]">
      <div className="wrap">
        <h2 className="mb-11 font-disp text-[34px] font-extrabold tracking-[-0.01em]">
          How It Works
        </h2>
        <div className="flex flex-wrap items-center gap-2">
          {HOW_IT_WORKS.map((step, i) => {
            const Icon = [ClipboardList, Gavel, Package][i] ?? ClipboardList;
            return (
              <div key={step.n} className="flex items-center gap-2">
                <ScrollReveal delay={i * 0.1}>
                  <div className="step">
                    <div className={`step-icon ${i === 1 ? "step-icon--big" : ""}`}>
                      <Icon className="h-[30px] w-[30px]" strokeWidth={1.7} />
                    </div>
                    <div>
                      <div className="font-disp text-[30px] font-extrabold leading-none">
                        {step.n}
                      </div>
                      <div className="mt-0.5 text-[13px] font-bold uppercase tracking-[0.16em]">
                        {step.title}
                      </div>
                      <p className="mt-1.5 max-w-[160px] text-[14px] leading-[1.4] text-muted">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </ScrollReveal>
                {i < HOW_IT_WORKS.length - 1 && (
                  <ArrowRight className="h-5 w-5 text-[#8c867b] max-md:hidden" strokeWidth={1.5} />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
