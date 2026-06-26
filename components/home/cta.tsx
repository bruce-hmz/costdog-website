"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Section } from "@/components/shared/section";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";
import { Glow } from "@/components/shared/glow";

export function CTA() {
  return (
    <Section className="relative overflow-hidden">
      <Glow variant="cyan" />
      <div className="relative mx-auto max-w-2xl text-center">
        <motion.h2
          className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Stop guessing your AI costs.
          <br />
          <span className="gradient-text">Start seeing them.</span>
        </motion.h2>

        <motion.p
          className="mt-4 text-lg text-muted"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Free forever. Open source. No account required.
        </motion.p>

        <motion.div
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Button asChild size="lg">
            <Link href="/pricing">
              Download Free
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <a
              href={SITE_CONFIG.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <ExternalLink className="h-4 w-4" />
              Star on GitHub
            </a>
          </Button>
        </motion.div>

        <motion.div
          className="mt-8 flex items-center justify-center gap-6 text-sm text-muted"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <span>Free forever</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>Open source</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>No account required</span>
          <span className="h-1 w-1 rounded-full bg-border" />
          <span>3MB</span>
        </motion.div>
      </div>
    </Section>
  );
}
