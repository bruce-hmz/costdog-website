"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/constants";
import { DashboardPreview } from "./dashboard-preview";
import { Glow } from "@/components/shared/glow";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
      <Glow />
      <div className="grid-bg absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="primary" className="mb-6">
              Free &amp; Open Source
            </Badge>
          </motion.div>

          <motion.h1
            className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl lg:text-7xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            See Every Token.
            <br />
            <span className="gradient-text">Control Every Dollar.</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-lg text-muted sm:text-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Real-time AI cost intelligence for Claude Code, Codex, and every
            model you use. Free, open-source, and runs entirely on your machine.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Button asChild size="lg">
              <Link href="/pricing" className="whitespace-nowrap">
                Download Free
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="whitespace-nowrap"
              >
                <ExternalLink className="h-4 w-4" />
                Star on GitHub
              </a>
            </Button>
          </motion.div>

          <motion.p
            className="mt-4 text-sm text-muted"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            Free forever · Open source · No account required · 3MB
          </motion.p>
        </div>

        {/* Dashboard preview */}
        <motion.div
          className="mx-auto mt-16 max-w-4xl sm:mt-20"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
        >
          <DashboardPreview />
        </motion.div>
      </div>
    </section>
  );
}
