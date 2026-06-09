"use client";

import { useMemo } from "react";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

type Check = { id: string; label: string; test: (p: string) => boolean };

const REQUIREMENTS: Check[] = [
  { id: "len", label: "8+ characters", test: (p) => p.length >= 8 },
  { id: "num", label: "1 number", test: (p) => /\d/.test(p) },
  { id: "spec", label: "1 special character", test: (p) => /[!@#$%^&*(),.?":{}|<>]/.test(p) },
  { id: "up", label: "1 uppercase letter", test: (p) => /[A-Z]/.test(p) },
];

export function getPasswordStrength(p: string): { score: 0 | 1 | 2 | 3 | 4; label: string; color: string } {
  const score = REQUIREMENTS.filter((r) => r.test(p)).length as 0 | 1 | 2 | 3 | 4;
  if (!p) return { score: 0, label: "—", color: "bg-line" };
  if (score === 1) return { score, label: "Weak", color: "bg-red-500" };
  if (score === 2) return { score, label: "Fair", color: "bg-amber-500" };
  if (score === 3) return { score, label: "Good", color: "bg-blue-500" };
  return { score: 4, label: "Strong", color: "bg-green-600" };
}

export function PasswordStrengthMeter({ password }: { password: string }) {
  const { score, label, color } = useMemo(() => getPasswordStrength(password), [password]);

  return (
    <div className="mt-3 space-y-2.5">
      <div className="flex gap-1.5">
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            className={cn(
              "h-1 flex-1 rounded-full transition-colors",
              i < score ? color : "bg-line",
            )}
          />
        ))}
      </div>
      <div className="flex items-center justify-between text-[12px] text-muted">
        <span>Password strength</span>
        <span className="font-semibold text-ink">{label}</span>
      </div>
      <div className="grid grid-cols-2 gap-x-4 gap-y-1.5 pt-1">
        {REQUIREMENTS.map((r) => {
          const met = r.test(password);
          return (
            <div
              key={r.id}
              className={cn(
                "flex items-center gap-1.5 text-[13px] transition-colors",
                met ? "text-ink" : "text-muted",
              )}
            >
              <span
                className={cn(
                  "flex h-3.5 w-3.5 items-center justify-center rounded-full",
                  met ? "bg-hype-green-ink text-white" : "bg-line text-muted-2",
                )}
              >
                {met && <Check className="h-2.5 w-2.5" strokeWidth={3} />}
              </span>
              {r.label}
            </div>
          );
        })}
      </div>
    </div>
  );
}
