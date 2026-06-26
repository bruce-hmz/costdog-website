"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

const issues = [
  {
    question: "CostDog shows no data after installation",
    answer:
      "Make sure you have at least one Claude Code or Codex session. CostDog reads existing log files — if you haven't used either tool yet, there's nothing to scan. Try running a quick Claude Code session, then click the refresh button in the widget.",
  },
  {
    question: "macOS says 'Apple cannot verify CostDog'",
    answer:
      "CostDog is not signed with an Apple Developer certificate. Run this command to remove the quarantine attribute:\n\nxattr -cr /Applications/CostDog.app\n\nThen open the app normally.",
  },
  {
    question: "The widget doesn't show on top of other windows",
    answer:
      "CostDog uses always-on-top window flags. If it's not staying on top, try clicking the widget to focus it. On some macOS versions, you may need to grant accessibility permissions.",
  },
  {
    question: "Costs seem inaccurate",
    answer:
      "CostDog currently uses estimated per-model rates. A future update will add real-time pricing via the OpenRouter API for 339+ models. Check the model breakdown to see which models are being tracked.",
  },
  {
    question: "How do I update CostDog?",
    answer:
      "Download the latest installer from GitHub Releases and install over the existing version. Your database and settings are preserved in ~/.costdog/.",
  },
  {
    question: "Can I move the widget?",
    answer:
      "Yes. Click and drag the top bar of the widget to reposition it. On macOS, make sure you're dragging the bar area (where the dog emoji and cost are shown).",
  },
  {
    question: "The web panel doesn't load",
    answer:
      "The web panel runs on http://localhost:3456. Make sure no other application is using that port. You can change the port with the COSTDOG_PORT environment variable.",
  },
  {
    question: "How do I reset my data?",
    answer:
      "Delete the database file at ~/.costdog/costdog.sqlite and restart CostDog. It will rebuild from your existing Claude Code and Codex session logs.",
  },
];

export default function TroubleshootingPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Badge variant="primary" className="mb-4">
        Troubleshooting
      </Badge>
      <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground">
        Troubleshooting
      </h1>
      <p className="mb-8 text-muted">
        Common issues and solutions.
      </p>

      <div className="flex flex-col gap-6">
        {issues.map((issue, i) => (
          <div
            key={i}
            className="rounded-lg border border-border bg-surface p-6"
          >
            <h3 className="mb-3 text-base font-semibold text-foreground">
              {issue.question}
            </h3>
            <div className="text-sm text-muted whitespace-pre-line">
              {issue.answer}
            </div>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
