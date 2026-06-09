import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full font-semibold text-sm tracking-[0.04em] transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hype-gold focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-ink text-white hover:bg-black",
        light: "bg-cream text-ink hover:bg-white",
        dark: "bg-ink text-white hover:bg-black",
        outline: "border-[1.5px] border-ink text-ink hover:bg-ink hover:text-white",
        ghost: "border-[1.5px] border-white/50 text-white hover:border-white hover:bg-white/[0.06]",
        link: "text-ink underline-offset-4 hover:underline",
      },
      size: {
        default: "h-11 px-6",
        sm: "h-9 px-4 text-xs",
        lg: "h-14 px-[30px] text-[15px]",
        icon: "h-[52px] w-[52px] rounded-[13px]",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(buttonVariants({ variant, size, className }))}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
