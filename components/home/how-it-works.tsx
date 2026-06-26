"use client";

import { motion } from "framer-motion";
import { Download, Scan, Eye, Shield } from "lucide-react";
import { Section, SectionHeader } from "@/components/shared/section";
import { STEPS } from "@/lib/constants";

const stepIcons = [Download, Scan, Eye, Shield];

export function HowItWorks() {
  return (
    <Section className="bg-surface">
      <SectionHeader
        badge="How It Works"
        title="Up and running in 4 steps"
        description="No SDK. No API keys. No configuration. Just install and see everything."
      />

      <div className="relative mt-12">
        {/* Connection line */}
        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary/50 via-primary/20 to-transparent lg:block" />

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {STEPS.map((step, i) => {
            const Icon = stepIcons[i];
            return (
              <motion.div
                key={step.step}
                className="relative text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full border border-primary/20 bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="mb-2 text-sm font-medium text-primary">
                  Step {step.step}
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="text-sm text-muted">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </Section>
  );
}
