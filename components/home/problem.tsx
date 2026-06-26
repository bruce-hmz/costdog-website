"use client";

import { motion } from "framer-motion";
import { Moon, EyeOff, Zap } from "lucide-react";
import { Section, SectionHeader } from "@/components/shared/section";
import { Card } from "@/components/ui/card";

const problems = [
  {
    icon: Moon,
    title: "Dark Spend",
    description:
      "AI assistants charge per token, but there's no dashboard to see it in real time. You write a prompt, the tokens flow, and the dollars tick — invisibly.",
  },
  {
    icon: EyeOff,
    title: "No Visibility",
    description:
      "You use Claude Code, Codex, and other tools — but costs are scattered across providers. No single view. No way to compare.",
  },
  {
    icon: Zap,
    title: "Bill Shock",
    description:
      "You discover your AI spend only when the monthly bill arrives. By then, it's too late. No alerts. No budgets. No control.",
  },
];

export function Problem() {
  return (
    <Section>
      <SectionHeader
        badge="The Problem"
        title="AI coding is powerful. AI costs are invisible."
        description="Developers using AI coding assistants have zero visibility into how much they're spending — until the bill arrives."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-3">
        {problems.map((problem, i) => (
          <motion.div
            key={problem.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Card className="h-full hover:border-danger/30 hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-danger/10">
                <problem.icon className="h-5 w-5 text-danger" />
              </div>
              <h3 className="mb-2 text-lg font-semibold text-foreground">
                {problem.title}
              </h3>
              <p className="text-sm text-muted">{problem.description}</p>
            </Card>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
