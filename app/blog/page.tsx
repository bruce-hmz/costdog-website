"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Calendar, Clock } from "lucide-react";
import { Section } from "@/components/shared/section";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Glow } from "@/components/shared/glow";

const posts = [
  {
    title: "How Much Does Claude Code Really Cost?",
    description:
      "A developer's analysis of real-world Claude Code spending patterns across different project types.",
    date: "June 2025",
    readTime: "8 min",
    slug: "claude-code-cost-analysis",
    tag: "Analysis",
  },
  {
    title: "The Hidden Cost of AI Coding Assistants",
    description:
      "Why your AI bill is 3x higher than expected — and what you can do about it.",
    date: "June 2025",
    readTime: "6 min",
    slug: "hidden-cost-ai-coding",
    tag: "Insights",
  },
  {
    title: "Building a Desktop Widget with Tauri v2",
    description:
      "How CostDog uses Tauri v2 to create a lightweight, always-on-top floating widget.",
    date: "June 2025",
    readTime: "10 min",
    slug: "tauri-v2-desktop-widget",
    tag: "Technical",
  },
  {
    title: "5 Ways to Reduce Your AI Coding Spend by 50%",
    description:
      "Practical strategies to optimize your token usage without sacrificing productivity.",
    date: "June 2025",
    readTime: "7 min",
    slug: "reduce-ai-coding-costs",
    tag: "Guide",
  },
  {
    title: "Local-First AI Monitoring: Why Cloud Isn't Always Better",
    description:
      "The case for running your AI cost monitoring locally — privacy, speed, and simplicity.",
    date: "June 2025",
    readTime: "5 min",
    slug: "local-first-monitoring",
    tag: "Opinion",
  },
];

export default function BlogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <Glow />
        <div className="grid-bg absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="primary" className="mb-6">
              Blog
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Thoughts on
              <br />
              <span className="gradient-text">AI cost intelligence</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
              Insights, guides, and technical deep dives on AI cost management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Posts */}
      <Section>
        <div className="mx-auto grid max-w-4xl gap-6">
          {posts.map((post, i) => (
            <motion.div
              key={post.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="group block">
                <Card className="transition-all duration-200 hover:border-primary/30 hover:shadow-md">
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <div className="mb-2 flex items-center gap-2">
                        <Badge variant="default">{post.tag}</Badge>
                        <span className="flex items-center gap-1 text-xs text-muted">
                          <Calendar className="h-3 w-3" />
                          {post.date}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-muted">
                          <Clock className="h-3 w-3" />
                          {post.readTime}
                        </span>
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-foreground group-hover:text-primary">
                        {post.title}
                      </h3>
                      <p className="text-sm text-muted">{post.description}</p>
                    </div>
                    <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-muted transition-transform group-hover:translate-x-1 group-hover:text-primary" />
                  </div>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </Section>
    </>
  );
}
