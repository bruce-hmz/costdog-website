import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: readonly string[];
  badge?: string;
  highlighted?: boolean;
  children: ReactNode;
}

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  badge,
  highlighted,
  children,
}: PricingCardProps) {
  return (
    <div
      className={cn(
        "relative flex h-full flex-col rounded-xl border p-8",
        highlighted
          ? "border-primary bg-surface shadow-lg glow-purple"
          : "border-border bg-surface",
      )}
    >
      {badge && (
        <Badge variant="primary" className="absolute -top-3 right-6">
          {badge}
        </Badge>
      )}

      <div className="mb-6">
        <h3 className="text-lg font-semibold text-foreground">{name}</h3>
        <div className="mt-2 flex items-baseline gap-1">
          <span className="text-4xl font-bold text-foreground">{price}</span>
          <span className="text-muted">{period}</span>
        </div>
        <p className="mt-2 text-sm text-muted">{description}</p>
      </div>

      <ul className="mb-8 flex flex-1 flex-col gap-3">
        {features.map((feature) => (
          <li
            key={feature}
            className="flex items-start gap-2 text-sm text-muted"
          >
            <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
            {feature}
          </li>
        ))}
      </ul>

      {children}
    </div>
  );
}
