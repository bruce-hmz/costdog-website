"use client";

import { motion } from "framer-motion";
import { Zap, Shield, Target } from "lucide-react";
import { Section, SectionHeader } from "@/components/shared/section";
import { Card } from "@/components/ui/card";

const values = [
  {
    icon: Zap,
    title: "Instant",
    description:
      "Auto-scans your existing Claude Code and Codex logs. Zero setup required. Install and see everything in seconds.",
  },
  {
    icon: Shield,
    title: "Private",
    description:
      "All data stays on your machine. Nothing leaves your network. No cloud. No account. No tracking.",
  },
  {
    icon: Target,
    title: "Precise",
    description:
      "Token-level granularity broken down by model, project, and session. Know exactly where your money goes.",
  },
];

export function Solution() {
  return (
    <Section className="bg-surface">
      <SectionHeader
        badge="The Solution"
        title="Meet CostDog. Your AI spending watchdog."
        description="A free, open-source desktop widget that gives you instant visibility into every token your AI tools consume."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {values.map((value, i) => (
          <motion.div
            key={value.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="h-full hover:border-primary/30 hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                <value.icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {value.title}
              </h3>
              <p className="text-sm text-muted">{value.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
