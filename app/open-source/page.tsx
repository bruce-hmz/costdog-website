"use client";

import { motion } from "framer-motion";
import { ExternalLink as Github, GitBranch, Heart, Users, Code, Star } from "lucide-react";
import { Section, SectionHeader } from "@/components/shared/section";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Glow } from "@/components/shared/glow";
import { SITE_CONFIG } from "@/lib/constants";

const ways = [
  {
    icon: Code,
    title: "Contribute Code",
    description:
      "Fix bugs, add features, improve documentation. Every PR is welcome.",
  },
  {
    icon: Star,
    title: "Star the Repo",
    description:
      "Help others discover CostDog by starring the GitHub repository.",
  },
  {
    icon: GitBranch,
    title: "Fork & Build",
    description:
      "Fork the project and build your own custom version. MIT licensed.",
  },
  {
    icon: Users,
    title: "Spread the Word",
    description:
      "Share CostDog with your team, on social media, or in blog posts.",
  },
];

export default function OpenSourcePage() {
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
              Open Source
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Built in public.
              <br />
              <span className="gradient-text">For everyone.</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
              CostDog is MIT licensed and open source. Inspect the code,
              contribute features, or fork freely. The core product will always
              be free.
            </p>
            <div className="mt-10">
              <Button asChild size="lg">
                <a
                  href={SITE_CONFIG.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 whitespace-nowrap"
                >
                  <Github className="h-4 w-4" />
                  View on GitHub
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Ways to contribute */}
      <Section>
        <SectionHeader
          title="Ways to contribute"
          description="There are many ways to be part of the CostDog community."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {ways.map((way, i) => (
            <motion.div
              key={way.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Card className="h-full text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <way.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">
                  {way.title}
                </h3>
                <p className="text-sm text-muted">{way.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* License */}
      <Section className="bg-surface">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-success/10">
              <Heart className="h-8 w-8 text-success" />
            </div>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              MIT License
            </h2>
            <p className="mb-6 text-muted">
              CostDog is released under the MIT License — one of the most
              permissive open-source licenses. You can use, modify, and
              distribute it freely, for any purpose, without restrictions.
            </p>
            <div className="rounded-lg border border-border bg-surface p-4 text-left">
              <pre className="overflow-x-auto text-xs text-muted">
                {`MIT License

Copyright (c) 2025 CostDog

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.`}
              </pre>
            </div>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
