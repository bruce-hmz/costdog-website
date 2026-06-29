import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/shared/section";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import { PricingCard } from "@/components/ui/pricing-card";
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
        {[PRICING.free, PRICING.pro].map((plan, i) => {
          const previewFeatures = plan.features.slice(0, 3);
          const remaining = plan.features.length - 3;

          return (
            <FadeIn key={plan.name} delay={i * 100}>
              <PricingCard
                name={plan.name}
                price={plan.price}
                period={plan.period}
                description={plan.description}
                features={previewFeatures}
                badge={plan.badge}
                highlighted={plan.highlighted}
              >
                {remaining > 0 && (
                  <p className="-mt-4 mb-4 text-xs text-muted">
                    +{remaining} more features
                  </p>
                )}
                <Button
                  asChild
                  variant={plan.highlighted ? "primary" : "secondary"}
                  className="w-full"
                >
                  <Link href="/pricing">{plan.cta}</Link>
                </Button>
                <Link
                  href="/pricing"
                  className="mt-3 inline-flex items-center justify-center gap-1 text-sm text-muted transition-colors hover:text-primary"
                >
                  Compare plans
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </PricingCard>
            </FadeIn>
          );
        })}
      </div>
    </Section>
  );
}
