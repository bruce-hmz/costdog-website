"use client";

import { motion } from "framer-motion";
import {
  Activity,
  PanelTop,
  Calendar,
  BarChart3,
  Bell,
  Plug,
  Monitor,
  Database,
  ExternalLink,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/shared/section";
import { FEATURES } from "@/lib/constants";

const iconMap: Record<string, React.ElementType> = {
  Activity,
  PanelTop,
  Calendar,
  BarChart3,
  Bell,
  Plug,
  Monitor,
  Database,
  Github: ExternalLink,
};

export function FeatureGrid() {
  return (
    <Section>
      <SectionHeader
        badge="Features"
        title="Everything you need to see AI costs clearly"
        description="Real-time visibility, smart alerts, and deep insights — all running locally on your machine."
      />

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {FEATURES.map((feature, i) => {
          const Icon = iconMap[feature.icon] || Activity;
          return (
            <motion.div
              key={feature.title}
              className="group rounded-xl border border-border bg-surface p-6 transition-all duration-200 hover:border-primary/30 hover:shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="mb-2 text-base font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm text-muted">{feature.description}</p>
            </motion.div>
          );
        })}
      </div>
    </Section>
  );
}
