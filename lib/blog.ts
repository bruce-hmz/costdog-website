export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  date: string;
  readTime: string;
  tag: string;
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "claude-code-cost-analysis",
    title: "How Much Does Claude Code Really Cost?",
    description:
      "A developer's analysis of real-world Claude Code spending patterns across different project types.",
    date: "June 2025",
    readTime: "8 min",
    tag: "Analysis",
    content: `
# How Much Does Claude Code Really Cost?

If you're using Claude Code for your daily development work, you've probably wondered: *how much is this actually costing me?*

I tracked my own usage over 30 days across different project types to find out.

## The Setup

I used Claude Code for three types of work:

1. **Bug fixes** — Small, focused tasks
2. **Feature development** — Medium complexity, multi-file changes
3. **Architecture refactoring** — Large-scale codebase changes

## The Results

### Bug Fixes
- Average session: 15 minutes
- Average tokens: ~50K input, ~20K output
- Average cost: **$0.15–$0.30 per fix**

### Feature Development
- Average session: 1–2 hours
- Average tokens: ~500K input, ~200K output
- Average cost: **$2–$5 per feature**

### Architecture Refactoring
- Average session: 3–4 hours
- Average tokens: ~2M input, ~800K output
- Average cost: **$8–$15 per session**

## Key Findings

1. **Cache tokens matter.** Repeated context (like your codebase) gets cached, reducing costs by 60–80%.
2. **Model choice is huge.** Claude Sonnet costs 5x less than Claude Opus for similar quality on most tasks.
3. **Session length scales linearly.** There's no "bulk discount" — longer sessions cost proportionally more.

## How to Reduce Costs

- Use Claude Haiku for simple tasks (typos, formatting)
- Keep your context focused — don't dump your entire codebase
- Use \`/compact\` to reduce context when it gets long
- Set up CostDog to monitor your spending in real time

## Bottom Line

For a typical developer using Claude Code 4 hours/day:

- **Light usage:** $30–50/month
- **Medium usage:** $100–200/month
- **Heavy usage:** $300–500/month

The productivity gains far outweigh the costs — but only if you can see and control them.
    `,
  },
  {
    slug: "hidden-cost-ai-coding",
    title: "The Hidden Cost of AI Coding Assistants",
    description:
      "Why your AI bill is 3x higher than expected — and what you can do about it.",
    date: "June 2025",
    readTime: "6 min",
    tag: "Insights",
    content: `
# The Hidden Cost of AI Coding Assistants

You signed up for Claude Code or Copilot thinking it'd be $20/month. Then the bill came: $150. What happened?

## The Three Hidden Costs

### 1. Context Window Bloat

Every time you paste a file, ask a question, or reference code, you're sending tokens. Most developers don't realize that a single "Can you fix this bug?" prompt can cost $0.50–$1.00 if it includes a large file.

### 2. Retry Loops

When the AI doesn't get it right the first time, you retry. And retry. And retry. Each attempt costs the same as the first. A "simple" fix that takes 5 attempts costs 5x what you expected.

### 3. Background Processes

Some AI tools run in the background — indexing your codebase, suggesting completions, analyzing patterns. These invisible processes consume tokens you never see.

## Real Numbers

From a survey of 50 developers:

- **Expected monthly cost:** $20–50
- **Actual monthly cost:** $80–300
- **Surprise factor:** 3–5x

## What You Can Do

1. **Monitor in real time.** Use CostDog to see exactly what you're spending.
2. **Set budget alerts.** Get warned before you hit $50/day.
3. **Choose models wisely.** Use Haiku for simple tasks, Sonnet for most work, Opus only when needed.
4. **Compress context.** Use \`/compact\` regularly to reduce token usage.

## The Bottom Line

AI coding assistants are worth the cost — but only if you know what the cost is. Visibility is the first step to control.
    `,
  },
  {
    slug: "tauri-v2-desktop-widget",
    title: "Building a Desktop Widget with Tauri v2",
    description:
      "How CostDog uses Tauri v2 to create a lightweight, always-on-top floating widget.",
    date: "June 2025",
    readTime: "10 min",
    tag: "Technical",
    content: `
# Building a Desktop Widget with Tauri v2

CostDog is a desktop widget that sits on top of your terminal. Here's how we built it with Tauri v2.

## Why Tauri?

- **Lightweight installer** (~5MB mac, ~15MB Windows) vs Electron's 150MB+
- **Rust backend** — fast, memory-safe, no runtime
- **System WebView** — no bundled browser
- **Native feel** — real window controls, system tray

## The Architecture

\`\`\`
┌─────────────────────┐
│   Tauri WebView      │
│   (HTML/CSS/JS)      │
├─────────────────────┤
│   Rust Backend       │
│   (SQLite, Scanner)  │
├─────────────────────┤
│   System Window      │
│   (Always on top)    │
└─────────────────────┘
\`\`\`

## Key Design Decisions

### 1. Frameless Window
We used \`decorations: false\` to remove the native title bar, then built our own draggable bar with a close button.

### 2. Dynamic Resizing
The widget starts at 410×36px (just the bar) and expands to 410×520px when clicked. We use Tauri's \`resize_window\` command for this.

### 3. Auto-Refresh
A background thread in Rust scans session logs every 30 seconds and emits a \`refresh-data\` event to the frontend via Tauri's event system.

### 4. Local SQLite
All data is stored in \`~/.costdog/costdog.sqlite\` using rusqlite with WAL journal mode for concurrent reads.

## Challenges

1. **macOS dragging** — CSS \`-webkit-app-region: drag\` doesn't work reliably. We switched to Tauri's \`data-tauri-drag-region\` attribute.
2. **Gatekeeper** — Unsigned macOS apps are blocked. Users need to run \`xattr -cr\` to unblock.
3. **Window focus** — Always-on-top windows can steal focus. We had to handle click-through carefully.

## Code Example

Here's how the Rust backend scans Claude Code sessions:

\`\`\`rust
fn scan_claude_sessions(db: &Connection) -> Result<()> {
    let home = dirs::home_dir().unwrap();
    let claude_dir = home.join(".claude").join("projects");

    for entry in WalkDir::new(&claude_dir) {
        let entry = entry?;
        if entry.path().extension().map_or(false, |e| e == "jsonl") {
            parse_jsonl(entry.path(), db)?;
        }
    }
    Ok(())
}
\`\`\`

## Lessons Learned

1. **Start simple.** We started with a single HTML file. No build step, no framework.
2. **Rust is worth it.** The learning curve is steep, but the performance and safety pay off.
3. **Desktop apps are different.** Window management, system tray, auto-update — all need special handling.
    `,
  },
  {
    slug: "reduce-ai-coding-costs",
    title: "5 Ways to Reduce Your AI Coding Spend by 50%",
    description:
      "Practical strategies to optimize your token usage without sacrificing productivity.",
    date: "June 2025",
    readTime: "7 min",
    tag: "Guide",
    content: `
# 5 Ways to Reduce Your AI Coding Spend by 50%

AI coding assistants are powerful, but they can be expensive. Here are 5 proven strategies to cut your costs in half.

## 1. Use the Right Model for the Task

Not every task needs Claude Opus. Use this guide:

| Task | Model | Cost |
|------|-------|------|
| Typo/formatting fixes | Haiku | $0.01 |
| Simple bug fixes | Sonnet | $0.10–0.30 |
| Complex features | Sonnet | $1–5 |
| Architecture decisions | Opus | $5–15 |

**Savings: 30–40%**

## 2. Compress Your Context

Long conversations consume more tokens. Use \`/compact\` to summarize the context when it gets long.

Before: 200K tokens ($0.60)
After compact: 50K tokens ($0.15)

**Savings: 60–75% per conversation**

## 3. Be Specific in Prompts

Vague prompts lead to retries. Each retry costs the same as the first attempt.

❌ "Fix the bug"
✅ "The login form returns 401 when the email contains a + character. Fix the regex validation in auth.ts line 42."

**Savings: 50% fewer retries**

## 4. Avoid Pasting Large Files

Instead of pasting an entire file, reference it by path:

❌ *pastes 500-line file*
✅ "Look at src/components/Dashboard.tsx and fix the state management in the useEffect hook"

**Savings: 80% fewer input tokens**

## 5. Monitor and Alert

You can't optimize what you can't see. Use CostDog to:
- Track spending in real time
- Set daily budget alerts
- Identify which models cost the most
- Find sessions that burned the most tokens

**Savings: 20–30% through awareness**

## Combined Savings

If you apply all 5 strategies:

- **Before:** $200/month
- **After:** $80–100/month
- **Savings:** 50–60%

The key insight: AI costs are manageable — you just need visibility and discipline.
    `,
  },
  {
    slug: "local-first-monitoring",
    title: "Local-First AI Monitoring: Why Cloud Isn't Always Better",
    description:
      "The case for running your AI cost monitoring locally — privacy, speed, and simplicity.",
    date: "June 2025",
    readTime: "5 min",
    tag: "Opinion",
    content: `
# Local-First AI Monitoring: Why Cloud Isn't Always Better

There's a growing trend of "cloud-first everything." But for AI cost monitoring, local-first is often the better choice.

## The Cloud Problem

### Privacy
Your AI prompts may contain proprietary code, business logic, or sensitive data. Sending this to a third-party monitoring service creates a privacy risk.

### Latency
Cloud monitoring adds network round-trips. For real-time dashboards, this means delays and stale data.

### Complexity
Cloud solutions require:
- API keys
- SDK integration
- Account creation
- Data pipelines
- Billing setup

That's a lot of overhead just to see your costs.

## The Local Advantage

### Privacy by Default
Data stays on your machine. No network calls. No third-party access. Full ownership.

### Instant Updates
Local SQLite queries are sub-millisecond. Your dashboard updates in real time without network delays.

### Zero Configuration
Read existing log files. No SDK. No API keys. No accounts. Install and go.

## When Cloud Makes Sense

Cloud monitoring is better when you need:
- **Team dashboards** — multiple developers sharing data
- **Historical analysis** — long-term trend data
- **Alerting** — email/Slack notifications
- **Compliance** — audit trails and data retention

## The Hybrid Approach

CostDog starts local-first. The core product is free and runs entirely on your machine. But we're building a Pro version with:
- Team dashboards (cloud-synced)
- API access
- Historical exports
- Custom alerts

The key: **local is the default. Cloud is opt-in.**

## Conclusion

For individual developers, local-first monitoring is simpler, faster, and more private. Don't over-engineer what can be solved with a SQLite database and a desktop widget.
    `,
  },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getAllBlogPosts(): BlogPost[] {
  return BLOG_POSTS.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );
}
