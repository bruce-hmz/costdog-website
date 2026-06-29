export const SITE_CONFIG = {
  name: "CostDog",
  title: "CostDog — AI Cost Intelligence Platform",
  description:
    "See every token. Control every dollar. Real-time AI cost intelligence for Claude Code, Codex, and every model you use.",
  url: "https://costdog.dev",
  ogImage: "https://costdog.dev/api/og",
  github: "https://github.com/bruce-hmz/costdog",
  githubReleases: "https://github.com/bruce-hmz/costdog/releases/latest",
  githubApi: "https://api.github.com/repos/bruce-hmz/costdog",
  keywords: [
    "AI cost monitoring",
    "Claude Code cost",
    "token usage tracker",
    "LLM cost calculator",
    "AI spending tracker",
    "developer tools",
    "open source",
  ],
} as const;

export const NAV_LINKS = [
  { label: "Features", href: "/features" },
  { label: "Pricing", href: "/pricing" },
  { label: "Docs", href: "/docs" },
  { label: "Blog", href: "/blog" },
  { label: "Changelog", href: "/changelog" },
] as const;

export const FOOTER_LINKS = {
  Product: [
    { label: "Features", href: "/features" },
    { label: "Pricing", href: "/pricing" },
    { label: "Changelog", href: "/changelog" },
    { label: "Open Source", href: "/open-source" },
  ],
  Resources: [
    { label: "Documentation", href: "/docs" },
    { label: "Blog", href: "/blog" },
    { label: "Quick Start", href: "/docs/quickstart" },
    { label: "API Reference", href: "/docs/api" },
  ],
  Community: [
    { label: "GitHub", href: "https://github.com/bruce-hmz/costdog" },
    { label: "Issues", href: "https://github.com/bruce-hmz/costdog/issues" },
    {
      label: "Discussions",
      href: "https://github.com/bruce-hmz/costdog/discussions",
    },
  ],
  Legal: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "MIT License", href: "https://opensource.org/licenses/MIT" },
  ],
} as const;

export const FEATURES = [
  {
    title: "Real-Time Dashboard",
    description:
      "Live token counts, costs, and session stats refreshing every 30 seconds. Never miss a spike.",
    detailed:
      "Live token counts, costs, and session stats refreshing every 30 seconds. Never miss a spike. See exactly what's happening right now.",
    icon: "Activity",
    badge: "Core",
  },
  {
    title: "Desktop Widget",
    description:
      "Always-on-top floating bar that sits above your terminal. Costs at a glance, zero distraction.",
    detailed:
      "Always-on-top floating bar that sits above your terminal. Costs at a glance, zero distraction. Click to expand for full details.",
    icon: "PanelTop",
    badge: "Core",
  },
  {
    title: "Multi-Timeframe",
    description:
      "Switch between Today, 7 days, 30 days, and All Time views. Spot trends instantly.",
    detailed:
      "Switch between Today, 7 days, 30 days, and All Time views. Spot trends instantly. Compare spending across periods.",
    icon: "Calendar",
    badge: "Core",
  },
  {
    title: "Model Breakdown",
    description:
      "See which models cost the most — ranked by total spend. Know where your money goes.",
    detailed:
      "See which models cost the most — ranked by total spend. Know exactly where your money goes. Optimize your model selection.",
    icon: "BarChart3",
    badge: "Insights",
  },
  {
    title: "Smart Alerts",
    description:
      "Get warned when daily costs exceed your budget threshold. No more bill shock.",
    detailed:
      "Get warned when daily costs exceed your budget threshold. No more bill shock. Set custom thresholds per project.",
    icon: "Bell",
    badge: "Alerts",
  },
  {
    title: "Multi-Tool Support",
    description:
      "Claude Code and Codex in one view. More tools coming soon. One dashboard for everything.",
    detailed:
      "Claude Code and Codex in one view. One dashboard for everything. More tools coming soon: Windsurf, Cursor, Aider.",
    icon: "Plug",
    badge: "Integration",
  },
  {
    title: "Cross-Platform",
    description:
      "Native apps for macOS (Intel + Apple Silicon) and Windows. Lightweight installer. Done.",
    detailed:
      "Native apps for macOS (Intel + Apple Silicon) and Windows. Universal binary. Lightweight installer. Done in seconds.",
    icon: "Monitor",
    badge: "Platform",
  },
  {
    title: "Local SQLite",
    description:
      "All data stored locally in ~/.costdog/costdog.sqlite. Query it yourself if you want.",
    detailed:
      "All data stored locally in ~/.costdog/costdog.sqlite. Query it yourself. Export to CSV. Full ownership of your data.",
    icon: "Database",
    badge: "Data",
  },
  {
    title: "Open Source",
    description:
      "MIT licensed. Inspect the code, contribute features, fork freely. Built in public.",
    detailed:
      "MIT licensed. Inspect the code, contribute features, fork freely. Built in public. Community driven.",
    icon: "Github",
    badge: "OSS",
  },
] as const;

export const PRICING = {
  free: {
    name: "Free",
    price: "$0",
    period: "forever",
    description: "Everything you need to track AI costs.",
    features: [
      "Desktop widget (Mac + Windows)",
      "All timeframes (Today / 7D / 30D / All)",
      "Claude Code support",
      "Codex CLI support",
      "Basic cost alerts",
      "Local SQLite storage",
      "Auto-refresh every 30s",
      "Open source (MIT)",
    ],
    cta: "Download Free",
    highlighted: false,
    badge: undefined,
  },
  pro: {
    name: "Pro",
    price: "$19",
    period: "/mo",
    description: "For teams that need deeper insights.",
    features: [
      "Everything in Free",
      "Team dashboard",
      "Custom alert thresholds",
      "Historical data export (CSV/PDF)",
      "API access",
      "Project-level cost breakdown",
      "Per-user cost attribution",
      "Priority support",
    ],
    cta: "Join Waitlist",
    highlighted: true,
    badge: "Coming Soon",
  },
} as const;

export const FAQS = [
  {
    question: "What AI tools does CostDog support?",
    answer:
      "Claude Code and Codex CLI today. Support for Windsurf, Cursor, Aider, and direct API tracking (OpenAI, Anthropic, Google) is on the roadmap.",
  },
  {
    question: "Is my data sent to the cloud?",
    answer:
      "No. CostDog runs entirely on your machine. Data is stored in a local SQLite file at ~/.costdog/costdog.sqlite. Nothing leaves your network.",
  },
  {
    question: "How does CostDog get my token usage?",
    answer:
      "It reads the session log files that Claude Code and Codex already write to your disk. No SDK, no API keys, no configuration needed.",
  },
  {
    question: "Is CostDog free?",
    answer:
      "Yes. The core product is free and open-source under the MIT license. A Pro plan with team features and API access is planned.",
  },
  {
    question: "Does it work on Apple Silicon?",
    answer:
      "Yes. Universal binary for macOS (Intel + Apple Silicon). Also available for Windows x64. Lightweight installers, done in seconds.",
  },
  {
    question: "How accurate is the cost calculation?",
    answer:
      "We use per-model pricing rates based on provider list prices. A future update will add real-time pricing via OpenRouter for 339+ models.",
  },
  {
    question: "Can I use it in a team?",
    answer:
      "Team dashboards are planned for the Pro version. Each developer can use the free version individually today.",
  },
  {
    question: "Does it affect my AI assistant's performance?",
    answer:
      "No. CostDog is read-only — it only reads log files, never modifies them. It runs a lightweight scan every 30 seconds.",
  },
  {
    question: "How do I install it?",
    answer:
      "macOS: download the .dmg from GitHub Releases. Windows: download the .exe installer. Both are lightweight and install in seconds.",
  },
  {
    question: "Can I set a budget limit?",
    answer:
      "You can configure daily cost alerts today. Hard budget limits with automatic cutoffs are planned for a future release.",
  },
  {
    question: "Does it support GPT-4, Gemini, and other models?",
    answer:
      "Currently focused on models used through Claude Code and Codex. Direct API cost tracking for OpenAI, Google, and other providers is on the roadmap.",
  },
  {
    question: "Is it open source?",
    answer:
      "Yes. MIT licensed. Star us on GitHub at github.com/bruce-hmz/costdog.",
  },
] as const;

export const STEPS = [
  {
    step: 1,
    title: "Install",
    description:
      "Download the installer for your platform. macOS (.dmg) or Windows (.exe). Lightweight. Done in seconds.",
  },
  {
    step: 2,
    title: "Open CostDog",
    description:
      "It auto-scans your existing Claude Code and Codex session logs. No SDK. No API keys. No configuration.",
  },
  {
    step: 3,
    title: "See Your Costs",
    description:
      "Real-time dashboard shows tokens, costs, and trends. Switch between timeframes. Drill into sessions.",
  },
  {
    step: 4,
    title: "Stay in Control",
    description:
      "Set budget alerts. Monitor trends. Never be surprised by a bill again.",
  },
] as const;
