"use client";

import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Glow } from "@/components/shared/glow";

export default function BlogPostPage() {
  return (
    <>
      <section className="relative overflow-hidden py-20 sm:py-28">
        <Glow />
        <div className="grid-bg absolute inset-0" />
        <div className="relative mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              href="/blog"
              className="mb-8 inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>

            <div className="mb-4 flex items-center gap-2">
              <Badge variant="primary">Guide</Badge>
              <span className="flex items-center gap-1 text-xs text-muted">
                <Calendar className="h-3 w-3" />
                June 2025
              </span>
              <span className="flex items-center gap-1 text-xs text-muted">
                <Clock className="h-3 w-3" />
                5 min read
              </span>
            </div>

            <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
              How Much Does Claude Code Really Cost?
            </h1>

            <div className="prose prose-invert max-w-none">
              <p className="text-lg text-muted">
                A developer's analysis of real-world Claude Code spending
                patterns across different project types.
              </p>

              <div className="mt-8 rounded-xl border border-border bg-surface p-6">
                <p className="text-sm text-muted">
                  This is a preview. Full blog content coming soon.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
