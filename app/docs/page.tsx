"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  BookOpen,
  Download,
  Settings,
  Code,
  HelpCircle,
  Zap,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Glow } from "@/components/shared/glow";

const sections = [
  {
    icon: Zap,
    title: "Quick Start",
    description: "Get up and running in 2 minutes.",
    href: "/docs/quickstart",
  },
  {
    icon: Download,
    title: "Installation",
    description: "Platform-specific install guides.",
    href: "/docs/installation",
  },
  {
    icon: Settings,
    title: "Configuration",
    description: "Customize CostDog to your needs.",
    href: "/docs/configuration",
  },
  {
    icon: Code,
    title: "API Reference",
    description: "Integrate CostDog into your workflow.",
    href: "/docs/api",
  },
  {
    icon: HelpCircle,
    title: "Troubleshooting",
    description: "Common issues and solutions.",
    href: "/docs/troubleshooting",
  },
];

export default function DocsPage() {
  return (
    <>
      <div className="relative mb-12 overflow-hidden rounded-xl border border-border bg-surface p-8">
        <Glow />
        <div className="relative">
          <Badge variant="primary" className="mb-4">
            Documentation
          </Badge>
          <h1 className="mb-4 text-3xl font-bold tracking-tight text-foreground">
            Get started with CostDog
          </h1>
          <p className="max-w-xl text-muted">
            Install CostDog in under 2 minutes. No SDK, no API keys, no
            configuration required.
          </p>
        </div>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {sections.map((section, i) => (
          <motion.div
            key={section.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
          >
            <Link href={section.href} className="group block">
              <Card className="h-full transition-all duration-200 hover:border-primary/30 hover:shadow-md">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <section.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold text-foreground group-hover:text-primary">
                      {section.title}
                    </h3>
                    <p className="text-sm text-muted">
                      {section.description}
                    </p>
                  </div>
                </div>
              </Card>
            </Link>
          </motion.div>
        ))}
      </div>
    </>
  );
}
