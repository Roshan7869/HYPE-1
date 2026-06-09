import { type HTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends HTMLAttributes<HTMLDivElement> {
  intensity?: "sm" | "md" | "lg";
}

export const GlassCard = forwardRef<HTMLDivElement, GlassCardProps>(
  ({ className, intensity = "md", ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-hype-lg border border-line-soft backdrop-blur-xl",
          intensity === "sm" && "bg-cream/40",
          intensity === "md" && "bg-cream-2/60",
          intensity === "lg" && "bg-cream/80",
          className,
        )}
        {...props}
      />
    );
  },
);
GlassCard.displayName = "GlassCard";
