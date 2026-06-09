"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft, KeyRound, CheckCircle2, AlertCircle } from "lucide-react";
import { AuthShell } from "@/components/layout/auth-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [cooldown, setCooldown] = useState(0);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!/^\S+@\S+\.\S+$/.test(email)) {
      setError("Please enter a valid email address");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setSent(true);
  }

  function resend() {
    setCooldown(60);
    const t = setInterval(() => {
      setCooldown((c) => {
        if (c <= 1) {
          clearInterval(t);
          return 0;
        }
        return c - 1;
      });
    }, 1000);
  }

  return (
    <AuthShell>
      <div className="mx-auto w-full max-w-[420px] rounded-3xl border border-line bg-white px-10 py-12">
        {!sent ? (
          <>
            <div className="flex flex-col items-center text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream-3">
                <KeyRound className="h-6 w-6 text-muted" />
              </div>
              <h1 className="mt-6 font-disp text-[26px] font-extrabold tracking-tighter2 text-ink">
                Forgot Your Password?
              </h1>
              <p className="mt-2 max-w-[320px] text-[15px] leading-[1.5] text-muted">
                Enter your email and we&apos;ll send you instructions to reset your password.
              </p>
            </div>

            <form onSubmit={onSubmit} className="mt-8 space-y-5">
              <div>
                <label htmlFor="email" className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.18em] text-ink">
                  Email Address
                </label>
                <Input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  autoComplete="email"
                  required
                />
              </div>

              {error && (
                <div className="flex items-center gap-2.5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-600">
                  <AlertCircle className="h-4 w-4 flex-none" /> {error}
                </div>
              )}

              <Button type="submit" size="lg" className="h-[52px] w-full text-[15px]" disabled={loading}>
                {loading ? "Sending..." : "Send Reset Link"}
              </Button>
            </form>

            <Link
              href="/login"
              className="mt-6 flex items-center justify-center gap-2 text-[15px] font-semibold text-ink hover:underline"
            >
              <ArrowLeft className="h-4 w-4" /> Back to Login
            </Link>
          </>
        ) : (
          <>
            <div className="flex flex-col items-center text-center">
              <CheckCircle2 className="h-12 w-12 text-green-600" strokeWidth={1.5} />
              <h1 className="mt-6 font-disp text-[26px] font-extrabold tracking-tighter2 text-ink">
                Check Your Email
              </h1>
              <p className="mt-2 text-[15px] leading-[1.5] text-muted">
                We&apos;ve sent a password reset link to{" "}
                <span className="font-semibold text-ink">{email}</span>. The link expires in 24 hours.
              </p>
            </div>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <button
                type="button"
                onClick={resend}
                disabled={cooldown > 0}
                className="h-[52px] flex-1 rounded-full border-[1.5px] border-ink text-[15px] font-bold text-ink transition-colors hover:bg-ink hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
              >
                {cooldown > 0 ? `Resend in ${cooldown}s` : "Resend email"}
              </button>
              <Link
                href="/login"
                className="flex h-[52px] flex-1 items-center justify-center rounded-full bg-ink text-[15px] font-bold text-white transition-colors hover:bg-black"
              >
                Back to Login
              </Link>
            </div>

            <p className="mt-6 text-center text-[13px] text-muted">
              Didn&apos;t get it? Check your spam folder.
            </p>
          </>
        )}
      </div>
    </AuthShell>
  );
}
