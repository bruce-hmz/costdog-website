import { cn } from "@/lib/utils";

interface GlowProps {
  className?: string;
  variant?: "purple" | "cyan";
}

export function Glow({ className, variant = "purple" }: GlowProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div
        className={cn(
          "absolute left-1/2 top-0 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-30 blur-[120px]",
          variant === "purple" ? "bg-primary/20" : "bg-secondary/20",
        )}
      />
    </div>
  );
}
