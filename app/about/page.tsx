import { Heart, ExternalLink as Github, Globe, Mail } from "lucide-react";
import { Section, SectionHeader } from "@/components/shared/section";
import { FadeIn } from "@/components/shared/fade-in";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Glow } from "@/components/shared/glow";
import { SITE_CONFIG } from "@/lib/constants";

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <Glow />
        <div className="grid-bg absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <Badge variant="primary" className="mb-6">
              About
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Making AI cost
              <br />
              <span className="gradient-text">transparent for everyone</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
              CostDog was born from a simple frustration: using AI coding
              assistants without knowing how much they cost.
            </p>
          </div>
        </div>
      </section>

      {/* Story */}
      <Section>
        <div className="mx-auto max-w-3xl">
          <FadeIn>
            <h2 className="mb-6 text-2xl font-semibold text-foreground">
              The Story
            </h2>
            <div className="flex flex-col gap-4 text-muted">
              <p>
                Like many developers, I started using Claude Code and Codex
                to accelerate my workflow. The productivity gains were
                incredible — but so was the surprise when I saw my first bill.
              </p>
              <p>
                I had no idea how many tokens I was burning through. No
                dashboard. No alerts. No way to know which projects or models
                were costing the most. Just a number at the end of the month.
              </p>
              <p>
                So I built CostDog. A tiny desktop widget that sits on top of
                my terminal and shows me exactly what I'm spending, in real
                time. No SDK. No cloud. No configuration. Just install and see
                everything.
              </p>
              <p>
                I open-sourced it because I believe every developer deserves
                visibility into their AI costs. The core product will always be
                free.
              </p>
            </div>
          </FadeIn>
        </div>
      </Section>

      {/* Values */}
      <Section className="bg-surface">
        <SectionHeader
          title="What we believe"
          description="The principles that guide CostDog's development."
        />

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {[
            {
              icon: Heart,
              title: "Developer First",
              description:
                "Built by developers, for developers. Every decision is made with the developer experience in mind.",
            },
            {
              icon: Globe,
              title: "Local First",
              description:
                "Your data stays on your machine. No cloud. No tracking. No account required. Full ownership.",
            },
            {
              icon: Github,
              title: "Open Source",
              description:
                "MIT licensed. Transparent. Community driven. Anyone can inspect, contribute, or fork.",
            },
          ].map((value, i) => (
            <FadeIn key={value.title} delay={i * 100}>
              <Card className="h-full text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {value.title}
                </h3>
                <p className="text-sm text-muted">{value.description}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section>
        <div className="mx-auto max-w-2xl text-center">
          <FadeIn>
            <h2 className="mb-4 text-2xl font-semibold text-foreground">
              Get in touch
            </h2>
            <p className="mb-8 text-muted">
              Have questions, feedback, or want to collaborate? We'd love to
              hear from you.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                <Github className="h-4 w-4" />
                GitHub
              </a>
              <a
                href="mailto:hello@costdog.vip"
                className="flex items-center gap-2 rounded-lg border border-border px-4 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                <Mail className="h-4 w-4" />
                hello@costdog.vip
              </a>
            </div>
          </FadeIn>
        </div>
      </Section>
    </>
  );
}
