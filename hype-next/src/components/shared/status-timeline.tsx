"use client";

import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

export type TimelineStep = {
  label: string;
  time?: string;
  state: "done" | "current" | "pending";
};

export function StatusTimeline({ steps }: { steps: TimelineStep[] }) {
  return (
    <div className="relative">
      <div className="flex items-start justify-between gap-2">
        {steps.map((s, i) => (
          <div key={i} className="relative z-10 flex flex-1 flex-col items-center">
            {i > 0 && (
              <div
                className={cn(
                  "absolute left-[-50%] right-[50%] top-[8px] h-[2px]",
                  steps[i - 1]?.state === "done" ? "bg-ink" : "bg-line",
                )}
                aria-hidden
              />
            )}
            <div
              className={cn(
                "relative z-10 flex h-5 w-5 items-center justify-center rounded-full border-2",
                s.state === "done" && "border-ink bg-ink text-white",
                s.state === "current" &&
                  "border-ink bg-white text-ink shadow-[0_0_0_4px_rgba(12,11,10,0.1)]",
                s.state === "pending" && "border-line bg-white",
              )}
            >
              {s.state === "done" && <Check className="h-2.5 w-2.5" strokeWidth={3} />}
              {s.state === "current" && <span className="h-2 w-2 rounded-full bg-ink" />}
            </div>
            <p className="mt-3 text-center text-[13px] font-semibold text-ink">{s.label}</p>
            {s.time && <p className="mt-1 text-center text-[12px] text-muted">{s.time}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
