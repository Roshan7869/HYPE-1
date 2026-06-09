"use client";

import { useState } from "react";
import Link from "next/link";
import { Eye, EyeOff, AlertCircle } from "lucide-react";
import { AuthShell } from "@/components/layout/auth-shell";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginPage() {
  const [show, setShow] = useState(false);
  const [remember, setRemember] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    if (!email || !password) {
      setError("Please enter both email and password");
      return;
    }
    setLoading(true);
    await new Promise((r) => setTimeout(r, 900));
    setLoading(false);
    setError("Invalid email or password");
  }

  return (
    <AuthShell>
      <div className="mx-auto w-full max-w-[420px] rounded-3xl border border-line bg-white px-10 py-12">
        <h1 className="text-center font-disp text-[28px] font-extrabold tracking-tighter2 text-ink">
          Login to Your Account
        </h1>
        <p className="mt-2 text-center text-[15px] text-muted">
          Enter your email and password to continue
        </p>

        <button
          type="button"
          className="mt-8 flex h-12 w-full items-center justify-center gap-2.5 rounded-xl border border-line bg-white text-[15px] font-semibold text-ink transition-colors hover:bg-cream-2"
        >
          <GoogleG />
          Continue with Google
        </button>

        <div className="my-6 flex items-center gap-4">
          <div className="h-px flex-1 bg-line" />
          <span className="text-[12px] font-semibold uppercase tracking-[0.18em] text-muted">
            or continue with email
          </span>
          <div className="h-px flex-1 bg-line" />
        </div>

        <form onSubmit={onSubmit} className="space-y-5">
          <div>
            <label htmlFor="email" className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.18em] text-ink">
              Email Address
            </label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="mb-1.5 block text-[12px] font-semibold uppercase tracking-[0.18em] text-ink">
              Password
            </label>
            <div className="relative">
              <Input
                id="password"
                type={show ? "text" : "password"}
                autoComplete="current-password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="pr-12"
                required
              />
              <button
                type="button"
                onClick={() => setShow((s) => !s)}
                aria-label={show ? "Hide password" : "Show password"}
                className="absolute right-4 top-1/2 -translate-y-1/2 text-muted hover:text-ink"
              >
                {show ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between pt-1">
            <label className="flex cursor-pointer items-center gap-2.5">
              <button
                type="button"
                role="checkbox"
                aria-checked={remember}
                onClick={() => setRemember((r) => !r)}
                className={`flex h-[18px] w-[18px] items-center justify-center rounded border-[1.5px] transition-colors ${
                  remember ? "border-ink bg-ink text-white" : "border-line bg-white"
                }`}
              >
                {remember && (
                  <svg viewBox="0 0 12 10" className="h-2.5 w-3" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M1 5l3 3 7-7" />
                  </svg>
                )}
              </button>
              <span className="text-[14px] text-muted">Remember me</span>
            </label>
            <Link href="/forgot-password" className="text-[14px] font-semibold text-ink underline-offset-4 hover:underline">
              Forgot password?
            </Link>
          </div>

          <Button type="submit" size="lg" className="mt-6 h-[52px] w-full text-[15px]" disabled={loading}>
            {loading ? "Signing in..." : "Login to Account"}
          </Button>

          {error && (
            <div className="flex items-center gap-2.5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-red-600">
              <AlertCircle className="h-4 w-4 flex-none" />
              {error}
            </div>
          )}
        </form>

        <p className="mt-7 text-center text-[15px] text-muted">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-bold text-ink underline-offset-4 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </AuthShell>
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
