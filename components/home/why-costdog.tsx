"use client";

import { motion } from "framer-motion";
import { Moon, EyeOff, Zap, ArrowRight } from "lucide-react";
import { Section, SectionHeader } from "@/components/shared/section";

const reasons = [
  {
    problemIcon: Moon,
    problem: "Dark Spend",
    problemDetail:
      "AI assistants charge per token, but there's no dashboard to see it in real time. Dollars tick invisibly.",
    solution: "Instant Visibility",
    solutionDetail:
      "Auto-scans your existing Claude Code and Codex logs. Zero setup. Install and see everything in seconds.",
  },
  {
    problemIcon: EyeOff,
    problem: "No Visibility",
    problemDetail:
      "Costs scattered across Claude Code, Codex, and other tools. No single view. No way to compare.",
    solution: "Single Dashboard",
    solutionDetail:
      "All your AI tools in one view. Token-level granularity broken down by model, project, and session.",
  },
  {
    problemIcon: Zap,
    problem: "Bill Shock",
    problemDetail:
      "You discover your AI spend only when the monthly bill arrives. No alerts. No budgets. No control.",
    solution: "Smart Alerts",
    solutionDetail:
      "Set daily cost thresholds. Get warned before you blow your budget. All data stays on your machine.",
  },
];

export function WhyCostDog() {
  return (
    <Section className="bg-foreground">
      <SectionHeader
        badge="Why CostDog"
        title="AI coding is powerful. AI costs are invisible."
        description="CostDog fixes that in seconds."
        className="[&_span]:bg-white/10 [&_span]:text-white/70 [&_span]:border-white/10 [&_h2]:text-white [&_p]:text-white/60"
      />

      <div className="mt-12 flex flex-col gap-6">
        {reasons.map((reason, i) => (
          <motion.div
            key={reason.problem}
            className="grid gap-6 rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm md:grid-cols-[1fr_auto_1fr]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            {/* Problem side */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <reason.problemIcon className="h-4 w-4 text-danger" />
                <span className="text-xs font-medium uppercase tracking-wider text-danger">
                  Problem
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {reason.problem}
              </h3>
              <p className="text-sm text-white/60">{reason.problemDetail}</p>
            </div>

            {/* Arrow divider */}
            <div className="hidden items-center justify-center md:flex">
              <ArrowRight className="h-5 w-5 text-primary" />
            </div>

            {/* Solution side */}
            <div>
              <div className="mb-3 flex items-center gap-2">
                <div className="h-2 w-2 rounded-full bg-success" />
                <span className="text-xs font-medium uppercase tracking-wider text-success">
                  Solution
                </span>
              </div>
              <h3 className="mb-2 text-lg font-semibold text-white">
                {reason.solution}
              </h3>
              <p className="text-sm text-white/60">{reason.solutionDetail}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
