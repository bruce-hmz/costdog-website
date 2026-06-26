import {
  Activity,
  PanelTop,
  Calendar,
  BarChart3,
  Bell,
  Plug,
  Monitor,
  Database,
  ExternalLink as Github,
  Shield,
  Zap,
  Eye,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/shared/section";
import { FadeIn } from "@/components/shared/fade-in";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Glow } from "@/components/shared/glow";

const features = [
  {
    icon: Activity,
    title: "Real-Time Dashboard",
    description:
      "Live token counts, costs, and session stats refreshing every 30 seconds. Never miss a spike. See exactly what's happening right now.",
    badge: "Core",
  },
  {
    icon: PanelTop,
    title: "Desktop Widget",
    description:
      "Always-on-top floating bar that sits above your terminal. Costs at a glance, zero distraction. Click to expand for full details.",
    badge: "Core",
  },
  {
    icon: Calendar,
    title: "Multi-Timeframe",
    description:
      "Switch between Today, 7 days, 30 days, and All Time views. Spot trends instantly. Compare spending across periods.",
    badge: "Core",
  },
  {
    icon: BarChart3,
    title: "Model Breakdown",
    description:
      "See which models cost the most — ranked by total spend. Know exactly where your money goes. Optimize your model selection.",
    badge: "Insights",
  },
  {
    icon: Bell,
    title: "Smart Alerts",
    description:
      "Get warned when daily costs exceed your budget threshold. No more bill shock. Set custom thresholds per project.",
    badge: "Alerts",
  },
  {
    icon: Plug,
    title: "Multi-Tool Support",
    description:
      "Claude Code and Codex in one view. One dashboard for everything. More tools coming soon: Windsurf, Cursor, Aider.",
    badge: "Integration",
  },
  {
    icon: Monitor,
    title: "Cross-Platform",
    description:
      "Native apps for macOS (Intel + Apple Silicon) and Windows. Universal binary. 3MB installer. Done in seconds.",
    badge: "Platform",
  },
  {
    icon: Database,
    title: "Local SQLite",
    description:
      "All data stored locally in ~/.costdog/costdog.sqlite. Query it yourself. Export to CSV. Full ownership of your data.",
    badge: "Data",
  },
  {
    icon: Github,
    title: "Open Source",
    description:
      "MIT licensed. Inspect the code, contribute features, fork freely. Built in public. Community driven.",
    badge: "OSS",
  },
];

const highlights = [
  {
    icon: Shield,
    title: "Private by Default",
    description:
      "All data stays on your machine. Nothing leaves your network. No cloud. No account. No tracking.",
  },
  {
    icon: Zap,
    title: "Zero Configuration",
    description:
      "Auto-scans your existing Claude Code and Codex logs. No SDK. No API keys. Install and go.",
  },
  {
    icon: Eye,
    title: "Always Visible",
    description:
      "The floating widget stays on top of your terminal. You always know what you're spending — without switching context.",
  },
];

export default function FeaturesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <Glow />
        <div className="grid-bg absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <Badge variant="primary" className="mb-6">
              Features
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              Everything you need to see
              <br />
              <span className="gradient-text">AI costs clearly</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
              Real-time visibility, smart alerts, and deep insights — all
              running locally on your machine. No cloud required.
            </p>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <Section className="bg-surface">
        <div className="grid gap-6 md:grid-cols-3">
          {highlights.map((h, i) => (
            <FadeIn key={h.title} delay={i * 100}>
              <Card className="h-full text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <h.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-2 text-lg font-semibold text-foreground">
                  {h.title}
                </h3>
                <p className="text-sm text-muted">{h.description}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>

      {/* All Features */}
      <Section>
        <SectionHeader
          title="Deep dive into every feature"
          description="From real-time monitoring to smart alerts — CostDog has everything you need."
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <FadeIn key={feature.title} delay={i * 50}>
              <Card className="h-full hover:border-primary/30 hover:shadow-md">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <Badge variant="default">{feature.badge}</Badge>
                </div>
                <h3 className="mb-2 text-base font-semibold text-foreground">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted">{feature.description}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
