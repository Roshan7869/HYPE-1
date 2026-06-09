"use client";

import Link from "next/link";
import { Check, ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

export interface StepperStep {
  label: string;
  done?: boolean;
  current?: boolean;
}

export function ListingStepper({ steps }: { steps: StepperStep[] }) {
  return (
    <div className="mb-9 flex items-start gap-0">
      {steps.map((s, i) => (
        <div key={s.label} className="flex items-start">
          <div className={cn("flex flex-col items-center gap-2", s.current && "stp-active")}>
            <div
              className={cn(
                "z-[2] flex h-12 w-12 items-center justify-center rounded-full border-[1.5px] bg-white font-disp text-[18px] font-extrabold",
                s.done
                  ? "border-ink bg-ink text-white"
                  : s.current
                    ? "border-ink bg-ink text-white"
                    : "border-line text-muted-2",
              )}
            >
              {s.done ? <Check className="h-5 w-5" strokeWidth={3} /> : i + 1}
            </div>
            <div
              className={cn(
                "text-[13px] font-medium",
                s.current ? "font-semibold text-ink" : "text-muted-2",
              )}
            >
              {s.label}
            </div>
          </div>
          {i < steps.length - 1 && (
            <div className="mt-6 h-[1.5px] min-w-[40px] flex-1 bg-line" />
          )}
        </div>
      ))}
    </div>
  );
}

export function BackLink({ href, children }: { href: string; children?: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="mb-5 mt-7 inline-flex items-center gap-2 text-[16px] font-medium hover:underline"
    >
      <ArrowLeft className="h-4 w-4" />
      {children ?? "Back"}
    </Link>
  );
}
