"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Check, ArrowRight, ExternalLink as Github } from "lucide-react";
import { Section, SectionHeader } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { PRICING, FAQS, SITE_CONFIG } from "@/lib/constants";
import { Glow } from "@/components/shared/glow";
import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function PricingPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <Glow />
        <div className="grid-bg absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="primary" className="mb-6">
              Pricing
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Free forever for individuals.
              <br />
              <span className="gradient-text">Pro for teams.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
              Start free. Upgrade when you need team features, API access, and
              deeper insights.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <Section>
        <div className="mx-auto grid max-w-4xl gap-8 md:grid-cols-2">
          {[PRICING.free, PRICING.pro].map((plan, i) => (
            <motion.div
              key={plan.name}
              className={`relative rounded-xl border p-8 ${
                plan.highlighted
                  ? "border-primary bg-surface shadow-lg glow-purple"
                  : "border-border bg-surface"
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
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

              {plan.highlighted ? (
                <Button asChild className="w-full">
                  <Link href="/contact" className="inline-flex items-center gap-2 whitespace-nowrap">
                    {plan.cta}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
              ) : (
                <Button asChild variant="secondary" className="w-full">
                  <a
                    href={SITE_CONFIG.githubReleases}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 whitespace-nowrap"
                  >
                    <Github className="h-4 w-4" />
                    {plan.cta}
                  </a>
                </Button>
              )}
            </motion.div>
          ))}
        </div>
      </Section>

      {/* FAQ */}
      <Section className="bg-surface">
        <SectionHeader
          badge="FAQ"
          title="Pricing questions"
          description="Everything you need to know about CostDog pricing."
        />

        <div className="mx-auto mt-12 max-w-2xl">
          {FAQS.slice(0, 8).map((faq, i) => (
            <motion.div
              key={i}
              className="border-b border-border"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.05 }}
            >
              <button
                className="flex w-full items-center justify-between gap-4 py-4 text-left"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="text-sm font-medium text-foreground">
                  {faq.question}
                </span>
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-muted transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="pb-4 text-sm text-muted">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
