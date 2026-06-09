"use client";

import { useEffect, useRef, useState } from "react";
import { CheckCircle2 } from "lucide-react";
import { cn } from "@/lib/utils";

export function OtpModal({
  open,
  phone,
  onVerify,
  onClose,
}: {
  open: boolean;
  phone: string;
  onVerify: (code: string) => void;
  onClose: () => void;
}) {
  const [code, setCode] = useState<string[]>(["", "", "", "", "", ""]);
  const [countdown, setCountdown] = useState(30);
  const [isVerifying, setIsVerifying] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const inputs = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    if (!open) return;
    setCode(["", "", "", "", "", ""]);
    setCountdown(30);
    setError(null);
    setTimeout(() => inputs.current[0]?.focus(), 100);
  }, [open]);

  useEffect(() => {
    if (!open || countdown <= 0) return;
    const t = setTimeout(() => setCountdown((c) => c - 1), 1000);
    return () => clearTimeout(t);
  }, [countdown, open]);

  if (!open) return null;

  function setDigit(i: number, v: string) {
    const ch = v.replace(/\D/g, "").slice(-1);
    const next = [...code];
    next[i] = ch;
    setCode(next);
    setError(null);
    if (ch && i < 5) inputs.current[i + 1]?.focus();
  }

  function onKey(i: number, e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Backspace" && !code[i] && i > 0) {
      inputs.current[i - 1]?.focus();
    }
  }

  function onPaste(e: React.ClipboardEvent<HTMLInputElement>) {
    const text = e.clipboardData.getData("text").replace(/\D/g, "").slice(0, 6);
    if (!text) return;
    e.preventDefault();
    const next = ["", "", "", "", "", ""];
    text.split("").forEach((c, i) => (next[i] = c));
    setCode(next);
    inputs.current[Math.min(text.length, 5)]?.focus();
  }

  async function handleVerify() {
    const full = code.join("");
    if (full.length !== 6) {
      setError("Enter the complete 6-digit code");
      return;
    }
    setIsVerifying(true);
    await new Promise((r) => setTimeout(r, 800));
    setIsVerifying(false);
    onVerify(full);
  }

  const masked = phone.length >= 10
    ? `+91 ${phone.slice(0, 2)}XXX XXXXX`
    : phone;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="w-full max-w-[400px] rounded-3xl bg-white p-10 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex flex-col items-center text-center">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream-3">
            <CheckCircle2 className="h-6 w-6 text-ink" />
          </div>
          <h2 className="mt-6 font-disp text-[26px] font-extrabold tracking-tighter2 text-ink">
            Verify Your Phone
          </h2>
          <p className="mt-2 text-[14px] leading-[1.5] text-muted">
            Enter the 6-digit code sent to {masked}
          </p>
        </div>

        <div className="mt-7 flex justify-between gap-2">
          {code.map((c, i) => (
            <input
              key={i}
              ref={(el) => {
                inputs.current[i] = el;
              }}
              value={c}
              onChange={(e) => setDigit(i, e.target.value)}
              onKeyDown={(e) => onKey(i, e)}
              onPaste={onPaste}
              inputMode="numeric"
              maxLength={1}
              aria-label={`OTP digit ${i + 1}`}
              className={cn(
                "h-12 w-12 rounded-xl border border-line bg-white text-center font-disp text-[20px] font-bold text-ink outline-none transition-shadow focus:border-ink focus:ring-2 focus:ring-ink/10",
                error && "border-red-500",
              )}
            />
          ))}
        </div>

        {error && (
          <p className="mt-3 text-center text-[13px] text-red-600">{error}</p>
        )}

        <div className="mt-5 text-center text-[14px]">
          {countdown > 0 ? (
            <span className="text-muted">
              Resend code in {countdown}s
            </span>
          ) : (
            <button
              type="button"
              onClick={() => setCountdown(30)}
              className="font-semibold text-ink underline-offset-4 hover:underline"
            >
              Resend code
            </button>
          )}
        </div>

        <button
          type="button"
          disabled={isVerifying}
          onClick={handleVerify}
          className="mt-7 flex h-[52px] w-full items-center justify-center rounded-full bg-ink text-[15px] font-bold text-white transition-colors hover:bg-black disabled:opacity-70"
        >
          {isVerifying ? "Verifying..." : "Verify & Continue"}
        </button>

        <button
          type="button"
          onClick={onClose}
          className="mt-3 w-full text-[14px] font-semibold text-muted hover:text-ink"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
