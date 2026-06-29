import Link from "next/link";
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
        {[PRICING.free, PRICING.pro].map((plan, i) => (
          <FadeIn key={plan.name} delay={i * 100}>
            <PricingCard
              name={plan.name}
              price={plan.price}
              period={plan.period}
              description={plan.description}
              features={plan.features}
              badge={plan.badge}
              highlighted={plan.highlighted}
            >
              <Button
                asChild
                variant={plan.highlighted ? "primary" : "secondary"}
                className="w-full"
              >
                <Link href="/pricing">{plan.cta}</Link>
              </Button>
            </PricingCard>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
