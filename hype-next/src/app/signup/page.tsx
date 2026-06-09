"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Eye, EyeOff, AlertCircle } from "lucide-react";
import { AuthShell } from "@/components/layout/auth-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { PasswordStrengthMeter, getPasswordStrength } from "@/components/auth/password-strength";
import { OtpModal } from "@/components/auth/otp-modal";
import { reduceMotion } from "@/lib/motion";

export default function SignupPage() {
  const [showPw, setShowPw] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [otpOpen, setOtpOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [agreed, setAgreed] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(false);

  const strength = getPasswordStrength(password);
  const passwordsValid = strength.score === 4 && password === confirm;
  const canSubmit = name && email && phone.length === 10 && passwordsValid && agreed;

  function validate() {
    const e: Record<string, string> = {};
    if (!name.trim()) e.name = "Full name is required";
    if (!/^\S+@\S+\.\S+$/.test(email)) e.email = "Enter a valid email address";
    if (phone.length !== 10) e.phone = "Enter a 10-digit mobile number";
    if (strength.score < 4) e.password = "Password does not meet all requirements";
    if (password !== confirm) e.confirm = "Passwords do not match";
    if (!agreed) e.terms = "You must agree to the terms";
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 700));
    setLoading(false);
    setOtpOpen(true);
  }

  return (
    <AuthShell>
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={reduceMotion({ duration: 0.5, ease: [0.16, 1, 0.3, 1] })}
        className="mx-auto w-full max-w-[480px] rounded-3xl border border-line bg-white px-10 py-12"
      >
        <h1 className="text-center font-disp text-[28px] font-extrabold tracking-tighter2 text-ink">
          Create Your Account
        </h1>
        <p className="mt-2 text-center text-[15px] text-muted">
          Join India&apos;s premier live auction marketplace
        </p>

        <button
          type="button"
          className="mt-8 flex h-12 w-full items-center justify-center gap-2.5 rounded-xl border border-line bg-white text-[15px] font-semibold text-ink transition-colors hover:bg-cream-2"
        >
          <GoogleG />
          Sign up with Google
        </button>

        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-line" />
          <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted">
            or sign up with email
          </span>
          <div className="h-px flex-1 bg-line" />
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <Field id="name" label="Full Name" error={errors.name}>
            <Input
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Roshan Kumar"
              autoComplete="name"
            />
          </Field>

          <Field id="email" label="Email Address" error={errors.email}>
            <Input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@example.com"
              autoComplete="email"
            />
          </Field>

          <Field id="phone" label="Phone Number" error={errors.phone}>
            <div className="flex">
              <span className="flex h-11 w-[60px] flex-none items-center justify-center rounded-l-md border border-r-0 border-line bg-cream-3 text-[14px] font-semibold text-ink">
                +91
              </span>
              <Input
                id="phone"
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, "").slice(0, 10))}
                placeholder="9876543210"
                autoComplete="tel-national"
                className="rounded-l-none"
              />
            </div>
          </Field>

          <Field id="password" label="Password" error={errors.password}>
            <div className="relative">
              <Input
                id="password"
                type={showPw ? "text" : "password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                autoComplete="new-password"
                className="pr-12"
              />
              <button
                type="button"
                onClick={() => setShowPw((s) => !s)}
                aria-label="Toggle password visibility"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-ink"
              >
                {showPw ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
            <PasswordStrengthMeter password={password} />
          </Field>

          <Field id="confirm" label="Confirm Password" error={errors.confirm}>
            <div className="relative">
              <Input
                id="confirm"
                type={showConfirm ? "text" : "password"}
                value={confirm}
                onChange={(e) => setConfirm(e.target.value)}
                placeholder="••••••••"
                autoComplete="new-password"
                className="pr-12"
              />
              <button
                type="button"
                onClick={() => setShowConfirm((s) => !s)}
                aria-label="Toggle confirm password"
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-ink"
              >
                {showConfirm ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </Field>

          <div>
            <label className="flex cursor-pointer items-start gap-2.5">
              <button
                type="button"
                role="checkbox"
                aria-checked={agreed}
                onClick={() => setAgreed((a) => !a)}
                className={`mt-0.5 flex h-[18px] w-[18px] flex-none items-center justify-center rounded border-[1.5px] transition-colors ${
                  agreed ? "border-ink bg-ink text-white" : "border-line bg-white"
                }`}
              >
                {agreed && (
                  <svg viewBox="0 0 12 10" className="h-2.5 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 5l3 3 7-7" />
                  </svg>
                )}
              </button>
              <span className="text-[14px] leading-[1.5] text-muted">
                I agree to the{" "}
                <Link href="/terms" className="font-semibold text-ink underline-offset-4 hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="/privacy" className="font-semibold text-ink underline-offset-4 hover:underline">
                  Privacy Policy
                </Link>
              </span>
            </label>
            {errors.terms && (
              <p className="mt-1.5 flex items-center gap-1.5 text-[13px] text-red-600">
                <AlertCircle className="h-3.5 w-3.5" /> {errors.terms}
              </p>
            )}
          </div>

          <Button
            type="submit"
            size="lg"
            className="h-[52px] w-full text-[15px]"
            disabled={!canSubmit || loading}
          >
            {loading ? "Creating account..." : "Create Account"}
          </Button>
        </form>

        <p className="mt-7 text-center text-[15px] text-muted">
          Already have an account?{" "}
          <Link href="/login" className="font-bold text-ink underline-offset-4 hover:underline">
            Login
          </Link>
        </p>
      </motion.div>

      <OtpModal
        open={otpOpen}
        phone={phone}
        onVerify={() => {
          setOtpOpen(false);
          window.location.href = "/account/profile";
        }}
        onClose={() => setOtpOpen(false)}
      />
    </AuthShell>
  );
}

function Field({
  id,
  label,
  error,
  children,
}: {
  id: string;
  label: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={id} className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.18em] text-ink">
        {label}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 flex items-center gap-1.5 text-[13px] text-red-600">
          <AlertCircle className="h-3.5 w-3.5" /> {error}
        </p>
      )}
    </div>
  );
}

function GoogleG() {
  return (
    <svg viewBox="0 0 24 24" className="h-5 w-5" aria-hidden="true">
      <path fill="#4285F4" d="M23.49 12.27c0-.79-.07-1.54-.2-2.27H12v4.51h6.47c-.28 1.4-1.07 2.59-2.27 3.4v2.84h3.65c2.16-1.99 3.44-4.91 3.44-8.48z" />
      <path fill="#34A853" d="M12 24c3.06 0 5.62-1.01 7.49-2.74l-3.65-2.84c-1.01.68-2.31 1.09-3.84 1.09-2.95 0-5.46-1.99-6.35-4.67H1.85v2.93C3.71 21.31 7.57 24 12 24z" />
      <path fill="#FBBC05" d="M5.65 14.75c-.23-.68-.36-1.4-.36-2.15s.13-1.47.36-2.15V7.52H1.85C1.32 8.84 1 10.36 1 12s.32 3.16.85 4.48l3.8-2.93z" />
      <path fill="#EA4335" d="M12 4.75c1.67 0 3.16.58 4.34 1.7l3.25-3.25C17.62 1.19 15.06 0 12 0 7.57 0 3.71 2.69 1.85 6.52l3.8 2.93C6.54 6.74 9.05 4.75 12 4.75z" />
    </svg>
  );
}
