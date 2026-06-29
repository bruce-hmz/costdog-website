import {
  Activity,
  PanelTop,
  Calendar,
  BarChart3,
  Bell,
  Plug,
  Monitor,
  Database,
  ExternalLink,
} from "lucide-react";
import { Section, SectionHeader } from "@/components/shared/section";
import { FadeIn } from "@/components/shared/fade-in";
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
  Github: ExternalLink,
};

/* ── Spotlight features (alternating full-width rows) ── */

const spotlightFeatures = [
  {
    icon: Activity,
    title: "Real-Time Cost Tracking",
    description:
      "See every token and every dollar as it happens. No waiting for billing dashboards. No surprises at month-end.",
    mockup: "tracker",
  },
  {
    icon: Database,
    title: "Privacy First",
    description:
      "All data stays on your machine. Nothing leaves your network. No cloud account, no telemetry, no tracking.",
    mockup: "privacy",
  },
  {
    icon: Plug,
    title: "One-Click Install",
    description:
      "~5MB on macOS, ~15MB on Windows. Auto-scans your existing Claude Code and Codex logs. No SDK. No API keys. Install and go.",
    mockup: "install",
  },
];

function TrackerMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-background shadow-lg">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <span className="ml-2 text-xs text-muted">CostDog — Live Tracker</span>
      </div>
      {/* Content */}
      <div className="space-y-3 p-4 font-mono text-xs">
        <div className="flex items-center justify-between">
          <span className="text-muted">Session</span>
          <span className="text-foreground">claude-code-2026</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted">Provider</span>
          <span className="text-foreground">Anthropic</span>
        </div>
        <div className="my-3 h-px bg-border" />
        <div className="flex items-center justify-between">
          <span className="text-muted">Tokens</span>
          <span className="text-foreground">1,247,832</span>
        </div>
        <div className="flex items-center justify-between">
          <span className="text-muted">Cost</span>
          <span className="font-semibold text-primary">$3.74</span>
        </div>
        <div className="mt-2 h-2 overflow-hidden rounded-full bg-border">
          <div className="h-full w-[37%] rounded-full bg-primary transition-all" />
        </div>
        <div className="flex justify-between text-muted">
          <span>$0</span>
          <span>Budget: $10</span>
        </div>
      </div>
    </div>
  );
}

function PrivacyMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-background shadow-lg">
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <span className="ml-2 text-xs text-muted">costdog --status</span>
      </div>
      <div className="space-y-2 p-4 font-mono text-xs">
        <p className="text-muted">
          <span className="text-primary">$</span> costdog --status
        </p>
        <div className="mt-2 space-y-1.5">
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span className="text-foreground">Data stored locally</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span className="text-foreground">No cloud connection</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span className="text-foreground">No telemetry</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-green-400">✓</span>
            <span className="text-foreground">No account required</span>
          </div>
        </div>
        <p className="mt-3 text-muted">
          <span className="text-primary">$</span>{" "}
          <span className="animate-pulse">▊</span>
        </p>
      </div>
    </div>
  );
}

function InstallMockup() {
  return (
    <div className="overflow-hidden rounded-xl border border-border bg-background shadow-lg">
      <div className="flex items-center gap-2 border-b border-border px-4 py-2.5">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-red-500/80" />
          <div className="h-3 w-3 rounded-full bg-yellow-500/80" />
          <div className="h-3 w-3 rounded-full bg-green-500/80" />
        </div>
        <span className="ml-2 text-xs text-muted">Terminal</span>
      </div>
      <div className="space-y-2 p-4 font-mono text-xs">
        <p className="text-muted">
          <span className="text-primary">$</span> brew install costdog
        </p>
        <p className="text-foreground">
          {">>"} Downloading costdog...
        </p>
        <p className="text-foreground">
          {">>"} Installing costdog 1.6.3...
        </p>
        <p className="text-green-400">✓ Installed in 2.1s (4.6 MB)</p>
        <p className="mt-2 text-muted">
          <span className="text-primary">$</span> costdog start
        </p>
        <p className="text-foreground">
          Scanning logs... found 3 providers.
        </p>
        <p className="text-green-400">
          ✓ CostDog is running. http://localhost:3618
        </p>
      </div>
    </div>
  );
}

const mockupMap: Record<string, React.ElementType> = {
  tracker: TrackerMockup,
  privacy: PrivacyMockup,
  install: InstallMockup,
};

/* ── Component ── */

export function FeatureGrid() {
  const remainingFeatures = FEATURES.filter(
    (f) => !spotlightFeatures.some((s) => s.title === f.title),
  );

  return (
    <>
      {/* Spotlight: alternating full-width sections */}
      {spotlightFeatures.map((feature, i) => {
        const Icon = feature.icon;
        const Mockup = mockupMap[feature.mockup];
        const reversed = i % 2 === 1;

        return (
          <Section
            key={feature.title}
            className={i % 2 === 0 ? "bg-surface" : ""}
          >
            <div className="grid items-center gap-12 lg:grid-cols-2">
              {/* Text */}
              <FadeIn
                direction={reversed ? "right" : "left"}
                className={reversed ? "lg:order-2" : ""}
              >
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-2xl font-semibold text-foreground sm:text-3xl">
                  {feature.title}
                </h3>
                <p className="text-base leading-relaxed text-muted">
                  {feature.description}
                </p>
              </FadeIn>

              {/* Mockup */}
              <FadeIn
                direction={reversed ? "left" : "right"}
                delay={100}
                className={reversed ? "lg:order-1" : ""}
              >
                {Mockup && <Mockup />}
              </FadeIn>
            </div>
          </Section>
        );
      })}

      {/* Remaining features: compact grid */}
      <Section>
        <SectionHeader
          badge="And more"
          title="Everything else you need"
          description="Real-time visibility, smart alerts, and deep insights — all running locally."
        />
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {remainingFeatures.map((feature, i) => {
            const Icon = iconMap[feature.icon] || Activity;
            return (
              <FadeIn key={feature.title} delay={i * 50}>
                <div className="group h-full rounded-xl border border-border bg-surface p-6 transition-all duration-200 hover:border-primary/30 hover:shadow-md">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary/20">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="mb-2 text-base font-semibold text-foreground">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted">{feature.description}</p>
                </div>
              </FadeIn>
            );
          })}
        </div>
      </Section>
    </>
  );
}
