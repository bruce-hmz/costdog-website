import Link from "next/link";
import { Section } from "@/components/shared/section";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Glow } from "@/components/shared/glow";
import { PricingCard } from "@/components/ui/pricing-card";
import { PRICING, SITE_CONFIG } from "@/lib/constants";

export default function PricingPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <Glow />
        <div className="grid-bg absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <Badge variant="primary" className="mb-6">
              Pricing
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Free forever.
              <br />
              <span className="gradient-text">Pro when you need it.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
              Start free. Upgrade when you need team features, API access, and
              deeper insights.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing cards */}
      <Section>
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
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
                  {plan.highlighted ? (
                    <Link href="/contact">{plan.cta}</Link>
                  ) : (
                    <a href={SITE_CONFIG.githubReleases}>{plan.cta}</a>
                  )}
                </Button>
              </PricingCard>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-surface">
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              Questions?
            </h2>
            <p className="mb-8 text-muted">
              Check our documentation or reach out on GitHub.
            </p>
            <div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Button asChild variant="secondary">
                <Link href="/docs">Read the Docs</Link>
              </Button>
              <Button asChild variant="ghost">
                <a
                  href={SITE_CONFIG.github + "/discussions"}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Ask on GitHub
                </a>
              </Button>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
