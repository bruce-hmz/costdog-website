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
  Github,
};

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
          {FEATURES.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Github;
            return (
              <FadeIn key={feature.title} delay={i * 50}>
                <Card className="h-full hover:border-primary/30 hover:shadow-md">
                  <div className="mb-4 flex items-center justify-between">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <Badge variant="default">{feature.badge}</Badge>
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted">{feature.detailed}</p>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </Section>
    </>
  );
}
