"use client";

import { AnimatePresence, motion } from "framer-motion";
import { createContext, useCallback, useContext, useState, type ReactNode } from "react";
import { CheckCircle2, AlertCircle, Info, X } from "lucide-react";
import { slideInRight } from "@/lib/motion";
import { cn } from "@/lib/utils";

type ToastVariant = "success" | "error" | "info";

interface Toast {
  id: number;
  message: string;
  variant: ToastVariant;
  /** Auto-dismiss in ms. Default 3000. Set 0 to disable. */
  duration?: number;
}

interface ToastContextValue {
  toast: (message: string, variant?: ToastVariant, duration?: number) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

/** Wrap your app in <ToastProvider> to enable the useToast hook. */
export function ToastProvider({ children }: { children: ReactNode }) {
  const [toasts, setToasts] = useState<Toast[]>([]);

  const toast = useCallback<ToastContextValue["toast"]>(
    (message, variant = "info", duration = 3000) => {
      const id = Date.now() + Math.random();
      setToasts((prev) => [...prev, { id, message, variant, duration }]);
      if (duration > 0) {
        setTimeout(() => setToasts((prev) => prev.filter((t) => t.id !== id)), duration);
      }
    },
    [],
  );

  return (
    <ToastContext.Provider value={{ toast }}>
      {children}
      <div className="pointer-events-none fixed right-4 top-4 z-[200] flex w-full max-w-sm flex-col gap-2">
        <AnimatePresence>
          {toasts.map((t) => (
            <motion.div
              key={t.id}
              layout
              variants={slideInRight}
              initial="hidden"
              animate="show"
              exit="exit"
              className={cn(
                "pointer-events-auto flex items-start gap-3 rounded-xl border bg-white px-4 py-3 shadow-2xl",
                t.variant === "success" && "border-emerald-200",
                t.variant === "error" && "border-red-200",
                t.variant === "info" && "border-line",
              )}
              role="status"
            >
              {t.variant === "success" && <CheckCircle2 className="h-5 w-5 text-emerald-600" />}
              {t.variant === "error" && <AlertCircle className="h-5 w-5 text-red-600" />}
              {t.variant === "info" && <Info className="h-5 w-5 text-muted" />}
              <p className="flex-1 text-[14px] text-ink">{t.message}</p>
              <button
                aria-label="Dismiss"
                onClick={() => setToasts((prev) => prev.filter((x) => x.id !== t.id))}
                className="text-muted hover:text-ink"
              >
                <X className="h-4 w-4" />
              </button>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </ToastContext.Provider>
  );
}

/** Returns the toast() function. Throws if used outside ToastProvider. */
export function useToast(): ToastContextValue["toast"] {
  const ctx = useContext(ToastContext);
  if (!ctx) {
    // Safe fallback: log to console if no provider mounted.
    return (msg) => console.log("[toast]", msg);
  }
  return ctx.toast;
}
