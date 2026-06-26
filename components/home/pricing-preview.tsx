import Link from "next/link";
import { Check } from "lucide-react";
import { Section, SectionHeader } from "@/components/shared/section";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PRICING } from "@/lib/constants";

export function PricingPreview() {
  return (
    <Section>
      <SectionHeader
        badge="Pricing"
        title="Free forever for individuals. Pro for teams."
        description="Start free. Upgrade when you need team features, API access, and deeper insights."
      />

      <div className="mt-12 grid gap-8 md:grid-cols-2">
        {[PRICING.free, PRICING.pro].map((plan, i) => (
          <FadeIn key={plan.name} delay={i * 100}>
            <div
              className={`relative rounded-xl border p-8 ${
                plan.highlighted
                  ? "border-primary bg-surface shadow-lg glow-purple"
                  : "border-border bg-surface"
              }`}
            >
              {plan.badge && (
                <Badge variant="primary" className="absolute -top-3 right-6">
                  {plan.badge}
                </Badge>
              )}

              <div className="mb-6">
                <h3 className="text-lg font-semibold text-foreground">
                  {plan.name}
                </h3>
                <div className="mt-2 flex items-baseline gap-1">
                  <span className="text-4xl font-bold text-foreground">
                    {plan.price}
                  </span>
                  <span className="text-muted">{plan.period}</span>
                </div>
                <p className="mt-2 text-sm text-muted">{plan.description}</p>
              </div>

              <ul className="mb-8 flex flex-col gap-3">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="flex items-start gap-2 text-sm text-muted"
                  >
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-success" />
                    {feature}
                  </li>
                ))}
              </ul>

              <Button
                asChild
                variant={plan.highlighted ? "primary" : "secondary"}
                className="w-full"
              >
                <Link href="/pricing">{plan.cta}</Link>
              </Button>
            </div>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
