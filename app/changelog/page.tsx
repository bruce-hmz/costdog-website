import { Badge } from "@/components/ui/badge";
import { Glow } from "@/components/shared/glow";
import { Section } from "@/components/shared/section";
import { FadeIn } from "@/components/shared/fade-in";

const releases = [
  {
    version: "v0.1.8",
    date: "June 28, 2026",
    title: "Updater Stability",
    tag: "Fix",
    changes: [
      "Fixed updater showing [object Object] in progress bar",
      "Improved up-to-date and error dialogs",
    ],
  },
  {
    version: "v0.1.7",
    date: "June 28, 2026",
    title: "Update Progress Bar",
    tag: "Fix",
    changes: [
      "Added visible update progress bar",
      "Made update process transparent to users",
    ],
  },
  {
    version: "v0.1.6",
    date: "June 28, 2026",
    title: "Version in Header",
    tag: "Feature",
    changes: [
      "Show app version in detail header",
      "Made update process visible in UI",
    ],
  },
  {
    version: "v0.1.5",
    date: "June 28, 2026",
    title: "Tray Version Display",
    tag: "Feature",
    changes: [
      "Show version number in system tray tooltip",
      "Version displayed in tray menu header",
    ],
  },
  {
    version: "v0.1.4",
    date: "June 28, 2026",
    title: "Auto-Updater Test",
    tag: "Fix",
    changes: [
      "Tested auto-update flow end-to-end",
    ],
  },
  {
    version: "v0.1.3",
    date: "June 28, 2026",
    title: "Auto-Updater",
    tag: "Feature",
    changes: [
      "Auto-update on launch with signed releases",
      "Update check from system tray",
      "Update dialog with download progress",
    ],
  },
  {
    version: "v0.1.2",
    date: "June 27, 2026",
    title: "Pricing & Parsing Fixes",
    tag: "Fix",
    changes: [
      "Fixed OpenRouter string price parsing",
      "Fixed Claude model version matching (e.g. claude-sonnet-4-20250514)",
      "Skip zero-usage sessions to reduce noise",
      "Per-day attribution so Today view reflects actual daily usage",
    ],
  },
  {
    version: "v0.1.1",
    date: "June 26, 2026",
    title: "macOS Dragging Fix",
    tag: "Fix",
    changes: [
      "Fixed window dragging on macOS using data-tauri-drag-region",
      "Improved cross-platform compatibility",
      "Updated CI workflow for universal macOS builds",
    ],
  },
  {
    version: "v0.1.0",
    date: "June 26, 2026",
    title: "Initial Release",
    tag: "Release",
    changes: [
      "Desktop widget for Claude Code and Codex",
      "Real-time token tracking and cost calculation",
      "Today / 7D / 30D / All timeframes",
      "Top models ranking by cost",
      "Smart cost alerts",
      "Auto-refresh every 30 seconds",
      "Cross-platform support (macOS + Windows)",
      "Local SQLite storage",
    ],
  },
];

export default function ChangelogPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden py-20 sm:py-28">
        <Glow />
        <div className="grid-bg absolute inset-0" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <div className="animate-fade-in-up">
            <Badge variant="primary" className="mb-6">
              Changelog
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              What's new in
              <br />
              <span className="gradient-text">CostDog</span>
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
              Track every update, fix, and improvement.
            </p>
          </div>
        </div>
      </section>

      {/* Releases */}
      <Section>
        <div className="mx-auto max-w-2xl">
          {releases.map((release, i) => (
            <FadeIn key={release.version} delay={i * 100} direction="none">
              <div className="relative border-l border-border pl-8 pb-12 last:pb-0">
                {/* Timeline dot */}
                <div className="absolute -left-1.5 top-1 h-3 w-3 rounded-full border-2 border-primary bg-background" />

                <div className="mb-2 flex items-center gap-3">
                  <span className="font-mono text-sm font-medium text-primary">
                    {release.version}
                  </span>
                  <Badge
                    variant={
                      release.tag === "Release" ? "primary" : "default"
                    }
                  >
                    {release.tag}
                  </Badge>
                  <span className="text-sm text-muted">{release.date}</span>
                </div>

                <h3 className="mb-3 text-lg font-semibold text-foreground">
                  {release.title}
                </h3>

                <ul className="flex flex-col gap-2">
                  {release.changes.map((change) => (
                    <li
                      key={change}
                      className="flex items-start gap-2 text-sm text-muted"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                      {change}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </Section>
    </>
  );
}
