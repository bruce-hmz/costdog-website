import Link from "next/link";
import { Check } from "lucide-react";
import { Section } from "@/components/shared/section";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Glow } from "@/components/shared/glow";
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
              <div
                className={`relative flex h-full flex-col rounded-xl border p-8 ${
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

                <ul className="mb-8 flex flex-1 flex-col gap-3">
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
                  {plan.highlighted ? (
                    <Link href="/contact">{plan.cta}</Link>
                  ) : (
                    <a href={SITE_CONFIG.githubReleases}>{plan.cta}</a>
                  )}
                </Button>
              </div>
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
