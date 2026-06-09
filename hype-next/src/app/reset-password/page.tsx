"use client";

import { Suspense, useEffect, useState } from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Eye, EyeOff, ArrowLeft, CheckCircle2, AlertTriangle, KeyRound } from "lucide-react";
import { AuthShell } from "@/components/layout/auth-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordStrengthMeter } from "@/components/auth/password-strength";
import { dur, ease, fadeUp, modalContent, reduceMotion, stagger } from "@/lib/motion";

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
      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="show"
        className="mx-auto w-full max-w-[420px] rounded-3xl border border-line bg-white px-10 py-12"
      >
        {children}
      </motion.div>
    </AuthShell>
  );
}

function ResetSkeleton() {
  return (
    <div className="flex flex-col items-center py-8 text-muted">
      <motion.div
        className="h-10 w-10 rounded-full border-2 border-line border-t-ink"
        animate={{ rotate: 360 }}
        transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
      />
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
      // Treat empty / "expired" tokens as invalid. Otherwise valid.
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
      <AnimatePresence mode="wait">
        {tokenState === null && (
          <motion.div
            key="loading"
            variants={fadeUp}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0 }}
            className="flex flex-col items-center py-8 text-muted"
          >
            <motion.div
              className="h-10 w-10 rounded-full border-2 border-line border-t-ink"
              animate={{ rotate: 360 }}
              transition={reduceMotion({ duration: 0.9, repeat: Infinity, ease: "linear" })}
            />
            <p className="mt-4 text-[14px]">Verifying reset link...</p>
          </motion.div>
        )}

        {tokenState === false && !done && (
          <motion.div
            key="invalid"
            variants={modalContent}
            initial="hidden"
            animate="show"
            exit="exit"
            transition={reduceMotion({ duration: dur.base, ease: ease.out })}
          >
            <div className="flex flex-col items-center text-center">
              <motion.div
                animate={{ x: [0, -6, 6, -4, 4, 0] }}
                transition={reduceMotion({ duration: 0.6, ease: ease.inOut })}
                className="flex h-12 w-12 items-center justify-center rounded-full bg-red-100 text-red-500"
              >
                <AlertTriangle className="h-7 w-7" strokeWidth={1.5} />
              </motion.div>
              <h1 className="mt-6 font-disp text-[26px] font-extrabold tracking-tighter2 text-ink">
                Link Expired or Invalid
              </h1>
              <p className="mt-2 max-w-[320px] text-[15px] leading-[1.5] text-muted">
                This password reset link has expired or already been used. Please request a new one.
              </p>
            </div>
            <Link
              href="/forgot-password"
              className="mt-8 flex h-[52px] w-full items-center justify-center rounded-full bg-ink text-[15px] font-bold text-white transition-all duration-200 hover:scale-[1.01] hover:bg-black"
            >
              Request New Link
            </Link>
          </motion.div>
        )}

        {tokenState === true && !done && (
          <motion.div
            key="form"
            variants={stagger(0.08, 0.05)}
            initial="hidden"
            animate="show"
            exit={{ opacity: 0, scale: 0.96 }}
          >
            <motion.div variants={fadeUp} className="flex flex-col items-center text-center">
              <motion.div
                className="flex h-12 w-12 items-center justify-center rounded-full bg-cream-3"
                whileHover={{ rotate: [0, -8, 8, 0], transition: { duration: 0.5 } }}
              >
                <KeyRound className="h-6 w-6 text-ink" />
              </motion.div>
              <h1 className="mt-6 font-disp text-[26px] font-extrabold tracking-tighter2 text-ink">
                Reset Your Password
              </h1>
              <p className="mt-2 text-[15px] text-muted">Create a new password for your account.</p>
            </motion.div>

            <form onSubmit={onSubmit} className="mt-8 space-y-5">
              <motion.div variants={fadeUp}>
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
              </motion.div>

              <motion.div variants={fadeUp}>
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
              </motion.div>

              <motion.div variants={fadeUp}>
                <Button
                  type="submit"
                  size="lg"
                  className="h-[52px] w-full text-[15px]"
                  disabled={loading || pw.length < 8 || pw !== confirm}
                >
                  {loading ? "Resetting..." : "Reset Password"}
                </Button>
              </motion.div>
            </form>

            <motion.div variants={fadeUp}>
              <Link
                href="/login"
                className="mt-6 flex items-center justify-center gap-2 text-[15px] font-semibold text-ink hover:underline"
              >
                <ArrowLeft className="h-4 w-4" /> Back to Login
              </Link>
            </motion.div>
          </motion.div>
        )}

        {done && (
          <motion.div
            key="success"
            variants={modalContent}
            initial="hidden"
            animate="show"
            exit="exit"
            className="flex flex-col items-center text-center"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={reduceMotion({ type: "spring", stiffness: 260, damping: 18 })}
              className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 text-emerald-600"
            >
              <CheckCircle2 className="h-8 w-8" strokeWidth={1.5} />
            </motion.div>
            <h1 className="mt-6 font-disp text-[26px] font-extrabold tracking-tighter2 text-ink">
              Password Reset Successful
            </h1>
            <p className="mt-2 text-[15px] leading-[1.5] text-muted">
              Your password has been updated. You can now log in with your new password.
            </p>
            <Link
              href="/login"
              className="mt-8 flex h-[52px] w-full items-center justify-center rounded-full bg-ink text-[15px] font-bold text-white transition-all duration-200 hover:scale-[1.01] hover:bg-black"
            >
              Go to Login
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </ResetShell>
  );
}
