"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { Eye, EyeOff, ArrowLeft, Lock, CheckCircle2, AlertTriangle } from "lucide-react";
import { AuthShell } from "@/components/layout/auth-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordStrengthMeter } from "@/components/auth/password-strength";

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<ResetShell><ResetSkeleton /></ResetShell>}>
      <ResetPasswordInner />
    </Suspense>
  );
}

function ResetShell({ children }: { children: React.ReactNode }) {
  return (
    <AuthShell>
      <div className="mx-auto w-full max-w-[420px] rounded-3xl border border-line bg-white px-10 py-12">
        {children}
      </div>
    </AuthShell>
  );
}

function ResetSkeleton() {
  return (
    <div className="flex flex-col items-center py-8 text-muted">
      <div className="h-10 w-10 animate-spin rounded-full border-2 border-line border-t-ink" />
      <p className="mt-4 text-[14px]">Loading…</p>
    </div>
  );
}

function ResetPasswordInner() {
  const params = useSearchParams();
  const token = params.get("token") ?? "";

  // null = checking, true = valid, false = invalid/expired
  const [tokenState, setTokenState] = useState<null | boolean>(null);
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [pw, setPw] = useState("");
  const [confirm, setConfirm] = useState("");
  const [loading, setLoading] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setTokenState(Boolean(token) && token !== "expired");
    }, 600);
    return () => clearTimeout(t);
  }, [token]);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setDone(true);
  }

  return (
    <ResetShell>
      {tokenState === null && (
        <div className="flex flex-col items-center py-8 text-muted">
          <div className="h-10 w-10 animate-spin rounded-full border-2 border-line border-t-ink" />
          <p className="mt-4 text-[14px]">Verifying reset link...</p>
        </div>
      )}

      {tokenState === false && (
        <>
          <div className="flex flex-col items-center text-center">
            <AlertTriangle className="h-12 w-12 text-red-500" strokeWidth={1.5} />
            <h1 className="mt-6 font-disp text-[26px] font-extrabold tracking-tighter2 text-ink">
              Link Expired or Invalid
            </h1>
            <p className="mt-2 max-w-[320px] text-[15px] leading-[1.5] text-muted">
              This password reset link has expired or already been used. Please request a new one.
            </p>
          </div>
          <Link
            href="/forgot-password"
            className="mt-8 flex h-[52px] w-full items-center justify-center rounded-full bg-ink text-[15px] font-bold text-white transition-colors hover:bg-black"
          >
            Request New Link
          </Link>
        </>
      )}

      {tokenState === true && !done && (
        <>
          <div className="flex flex-col items-center text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-cream-3">
              <Lock className="h-6 w-6 text-muted" />
            </div>
            <h1 className="mt-6 font-disp text-[26px] font-extrabold tracking-tighter2 text-ink">
              Reset Your Password
            </h1>
            <p className="mt-2 text-[15px] text-muted">Create a new password for your account.</p>
          </div>

          <form onSubmit={onSubmit} className="mt-8 space-y-5">
            <div>
              <label htmlFor="pw" className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.18em] text-ink">
                New Password
              </label>
              <div className="relative">
                <Input
                  id="pw"
                  type={showPw ? "text" : "password"}
                  value={pw}
                  onChange={(e) => setPw(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="new-password"
                  className="pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPw((s) => !s)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-ink"
                  aria-label="Toggle password"
                >
                  {showPw ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
              <PasswordStrengthMeter password={pw} />
            </div>

            <div>
              <label htmlFor="confirm" className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.18em] text-ink">
                Confirm New Password
              </label>
              <div className="relative">
                <Input
                  id="confirm"
                  type={showConfirm ? "text" : "password"}
                  value={confirm}
                  onChange={(e) => setConfirm(e.target.value)}
                  placeholder="••••••••"
                  autoComplete="new-password"
                  className="pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowConfirm((s) => !s)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-ink"
                  aria-label="Toggle confirm"
                >
                  {showConfirm ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                </button>
              </div>
            </div>

            <Button
              type="submit"
              size="lg"
              className="h-[52px] w-full text-[15px]"
              disabled={loading || pw.length < 8 || pw !== confirm}
            >
              {loading ? "Resetting..." : "Reset Password"}
            </Button>
          </form>

          <Link
            href="/login"
            className="mt-6 flex items-center justify-center gap-2 text-[15px] font-semibold text-ink hover:underline"
          >
            <ArrowLeft className="h-4 w-4" /> Back to Login
          </Link>
        </>
      )}

      {done && (
        <>
          <div className="flex flex-col items-center text-center">
            <CheckCircle2 className="h-12 w-12 text-green-600" strokeWidth={1.5} />
            <h1 className="mt-6 font-disp text-[26px] font-extrabold tracking-tighter2 text-ink">
              Password Reset Successful
            </h1>
            <p className="mt-2 text-[15px] leading-[1.5] text-muted">
              Your password has been updated. You can now log in with your new password.
            </p>
          </div>
          <Link
            href="/login"
            className="mt-8 flex h-[52px] w-full items-center justify-center rounded-full bg-ink text-[15px] font-bold text-white transition-colors hover:bg-black"
          >
            Go to Login
          </Link>
        </>
      )}
    </ResetShell>
  );
}
