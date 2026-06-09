import { cn } from "@/lib/utils";

interface LiveBadgeProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  label?: string;
}

export function LiveBadge({ className, size = "sm", label = "LIVE" }: LiveBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full bg-hype-red font-extrabold tracking-[0.1em] text-white",
        size === "sm" && "px-2 py-1 text-[10px]",
        size === "md" && "px-2.5 py-1 text-xs",
        size === "lg" && "px-3 py-1.5 text-sm",
        className,
      )}
    >
      <span className="relative flex h-1.5 w-1.5">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75" />
        <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-white" />
      </span>
      {label}
    </span>
  );
}
