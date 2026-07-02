# CostDog — Product Hunt Launch Kit

> Prepared 2026-06-28. Product: https://github.com/bruce-hmz/costdog
> Website: https://costdog.vip (deploy TBD)

---

## 1. Tagline (max 60 chars)

```
See every token. Control every dollar.
```

**Alt options:**
- `Stop guessing what your AI costs. Start knowing.`
- `Real-time AI cost monitoring for Claude Code & Codex`
- `Your AI has a cost problem. CostDog fixes it.`

## 2. Description (max 260 chars)

```
CostDog is a free, open-source desktop app that shows you exactly what Claude Code and Codex CLI cost — in real time. Tokens, dollars, disk writes, per-model breakdown. Runs 100% locally. No cloud. No account. ~15MB install.
```

## 3. Topics / Categories

Select 3-5 when submitting:
- **Developer Tools** (primary)
- **Open Source**
- **Artificial Intelligence**
- **Productivity**
- **Mac**

## 4. Maker's Comment (first comment)

Post this immediately after launch:

---

Hey PH! 👋

I built CostDog because I was burning through Claude Code sessions with zero visibility into what they cost. The billing dashboard shows you yesterday's damage — I wanted to see what's happening *right now*.

**What it does:**
- 🖥️ Desktop widget sits on top of your terminal — live cost, live tokens
- 📊 Dashboard with Today / 7D / 30D / All views
- 🔍 Per-model breakdown (which model is eating your budget)
- ⚠️ Smart alerts when daily spend crosses your threshold
- 💾 Tracks disk writes from Write/Edit tools (surprisingly expensive)

**What it doesn't do:**
- Send your data anywhere. Zero network calls except OpenRouter for pricing.
- Require an account, API key, or SDK. It reads the logs Claude Code already writes.

**Tech stack:** TypeScript, Tauri (Rust), SQLite, Express. ~15MB on Mac, ~5MB on Windows.

Currently supports Claude Code and Codex CLI. More tools on the roadmap.

Would love feedback on what metrics matter most to you. Star the repo if you find it useful! ⭐

---

## 5. Gallery / Screenshots

**Required screenshots (1270×760 or 1280×800):**

1. **Hero shot** — Desktop widget floating over a terminal with Claude Code running. Show the cost tracking in real time.

2. **Dashboard view** — Web dashboard showing Today view with sessions, costs, token breakdown, top models.

3. **Multi-timeframe** — Side-by-side or single shot showing Today vs 7D vs 30D comparison.

4. **Alerts** — Show the smart alert notification when a budget threshold is crossed.

5. **CLI output** — Terminal showing `costdog` command with the formatted dashboard output.

**Optional:**
6. **Before/After** — "Before CostDog: 🤷 what did that session cost? After CostDog: $3.74, 1.2M tokens, claude-sonnet-4."
7. **GIF** — 15-second screen recording of the widget updating in real time.

### Screenshot Checklist

```
[ ] Desktop widget over terminal (hero)
[ ] Web dashboard — Today view
[ ] Web dashboard — 7D/30D view
[ ] CLI terminal output
[ ] Alert notification
[ ] Before/After comparison
[ ] Animated GIF (optional)
```

## 6. Video (optional but recommended)

60-90 second demo script:

```
0:00 — "Every time I use Claude Code, I have no idea what it costs until the bill arrives."
0:05 — Install CostDog: `brew install costdog` or download from GitHub
0:10 — `costdog start` — widget appears on screen
0:15 — Show live token counter incrementing during a Claude Code session
0:25 — Open web dashboard — show Today view with real numbers
0:35 — Switch to 7D view — "I spent $47 this week across 89 sessions"
0:40 — Show per-model breakdown — "Turns out claude-opus is 80% of my spend"
0:45 — "Set a $10 daily budget alert — now I know before it's too late"
0:50 — "Everything runs locally. No cloud. No account. Open source."
0:55 — End card: costdog.vip + GitHub link
```

## 7. Key Differentiators (for Q&A / comments)

| Question | Answer |
|---|---|
| How is this different from the Anthropic dashboard? | Anthropic shows you yesterday. CostDog shows you *right now*, per-session, per-model. |
| Does it send my data anywhere? | No. 100% local. The only outbound request is to OpenRouter for pricing data (cached 24h). |
| What about Cursor/Windsurf/etc? | Claude Code and Codex today. More tools on the roadmap. |
| Is it really free? | Yes. MIT licensed. Open source. A Pro plan with team features is planned but the core is free forever. |
| How accurate are the costs? | Uses real-time OpenRouter pricing for 339+ models. Prices cached locally, refreshed daily. |
| Why Tauri instead of Electron? | ~15MB vs ~150MB. Native performance. Rust backend. |

## 8. Social Copy

### Twitter/X — Launch Day

```
🐕 Just launched CostDog on @ProductHunt!

See what your AI costs in real time. Not yesterday. Not at the end of the month. Right now.

→ Claude Code + Codex CLI
→ Desktop widget + web dashboard
→ 100% local, open source, free

[PH link]

#DevTools #OpenSource #AI
```

### Twitter/X — Technical angle

```
I was burning $50/day on Claude Code with zero visibility.

Built CostDog to fix it:
• Real-time token tracking
• Per-model cost breakdown
• Smart budget alerts
• 100% local, no cloud

~15MB Tauri app. MIT licensed.

[PH link]
```

### LinkedIn

```
Excited to share CostDog — a tool I built to solve my own problem.

As a developer using Claude Code daily, I had no real-time visibility into what each session cost. The billing dashboard showed me yesterday's damage. I wanted to see what was happening right now.

CostDog is a free, open-source desktop app that shows you:
• Real-time token usage and cost per session
• Per-model breakdown (which AI model is eating your budget)
• Smart alerts when you cross a spending threshold
• Disk write monitoring

Everything runs locally. No cloud, no account, no data leaves your machine.

If you use Claude Code or Codex CLI, I'd love your feedback.

[PH link]
```

## 9. Launch Checklist

```
BEFORE LAUNCH:
[ ] Screenshots captured (5-7 images, 1270×760)
[ ] GIF/video recorded (optional but recommended)
[ ] PH profile set up (maker account)
[ ] Product page drafted on PH
[ ] Tagline and description finalized
[ ] Topics selected
[ ] First comment written
[ ] Website live at costdog.vip

LAUNCH DAY (Tuesday or Wednesday, ~12:01 AM PT):
[ ] Submit product on PH
[ ] Post maker's comment immediately
[ ] Share on Twitter/X (2-3 posts throughout the day)
[ ] Share on LinkedIn
[ ] Share in relevant communities:
   - Reddit: r/programming, r/SideProject, r/opensource
   - Hacker News (Show HN)
   - Dev.to article
   - Claude/AI Discord communities
[ ] Reply to every comment on PH within 1 hour
[ ] Thank upvoters

AFTER LAUNCH:
[ ] Write a retrospective blog post
[ ] Update README with PH badge
[ ] Track analytics
```

## 10. Pricing for PH

Product Hunt is free to submit. No paid promotion needed.

Best launch time: **Tuesday or Wednesday, 12:01 AM Pacific Time** (gets full 24h of visibility).
