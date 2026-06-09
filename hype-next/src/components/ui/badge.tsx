import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold leading-none",
  {
    variants: {
      variant: {
        default: "bg-cream text-ink",
        green: "bg-hype-green text-hype-green-ink",
        amber: "bg-hype-amber text-hype-amber-ink",
        blue: "bg-hype-blue text-hype-blue-ink",
        pink: "bg-hype-pink text-hype-pink-ink",
        red: "bg-hype-red text-white",
        outline: "border border-current bg-transparent",
      },
    },
    defaultVariants: { variant: "default" },
  },
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <span className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
