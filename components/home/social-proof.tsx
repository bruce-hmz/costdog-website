"use client";

import { motion } from "framer-motion";
import { Star, Users, Monitor, Package } from "lucide-react";

const stats = [
  { icon: Star, label: "GitHub Stars", value: "Open Source" },
  { icon: Users, label: "Built for", value: "Developers" },
  { icon: Monitor, label: "Platforms", value: "macOS + Windows" },
  { icon: Package, label: "Installer", value: "< 3MB" },
];

export function SocialProof() {
  return (
    <section className="border-y border-border bg-surface py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="flex flex-col items-center gap-2 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <stat.icon className="h-5 w-5 text-primary" />
              <span className="text-lg font-semibold text-foreground">
                {stat.value}
              </span>
              <span className="text-sm text-muted">{stat.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
