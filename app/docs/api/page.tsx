"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function APIPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Badge variant="primary" className="mb-4">
        API Reference
      </Badge>
      <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground">
        API Reference
      </h1>
      <p className="mb-8 text-muted">
        CostDog exposes a REST API via its built-in Express server for
        integration with other tools.
      </p>

      <div className="flex flex-col gap-8">
        {/* Base URL */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Base URL
          </h2>
          <div className="rounded-lg border border-border bg-surface p-4">
            <pre className="overflow-x-auto rounded-md bg-[#0f0f17] p-3 text-xs text-[#fafafa]">
              <code>http://localhost:3456</code>
            </pre>
          </div>
        </div>

        {/* Endpoints */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Endpoints
          </h2>
          <div className="flex flex-col gap-4">
            <div className="rounded-lg border border-border bg-surface p-4">
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded bg-success/20 px-2 py-0.5 text-xs font-medium text-success">
                  GET
                </span>
                <code className="text-sm text-foreground">
                  /api/dashboard
                </code>
              </div>
              <p className="mb-4 text-sm text-muted">
                Returns the full dashboard data including all timeframes, top
                models, recent sessions, and alerts.
              </p>
              <p className="mb-2 text-sm font-medium text-foreground">
                Response
              </p>
              <pre className="overflow-x-auto rounded-md bg-[#0f0f17] p-3 text-xs text-[#fafafa]">
                <code>
                  {`{
  "today": {
    "tokenUsage": {
      "inputTokens": 842000,
      "outputTokens": 384000,
      "cacheReadTokens": 156000
    },
    "diskWriteBytes": 50331648,
    "topModels": [
      { "model": "claude-sonnet-4-20250514", "cost": 3.21 }
    ],
    "sessions": 23,
    "cost": 4.72
  },
  "week": { ... },
  "month": { ... },
  "allTime": { ... },
  "recentSessions": [ ... ],
  "alerts": [ ... ]
}`}
                </code>
              </pre>
            </div>

            <div className="rounded-lg border border-border bg-surface p-4">
              <div className="mb-2 flex items-center gap-2">
                <span className="rounded bg-primary/20 px-2 py-0.5 text-xs font-medium text-primary">
                  POST
                </span>
                <code className="text-sm text-foreground">/api/scan</code>
              </div>
              <p className="text-sm text-muted">
                Triggers a manual rescan of all session files. Returns the
                updated dashboard data.
              </p>
            </div>
          </div>
        </div>

        {/* CLI */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            CLI Commands
          </h2>
          <div className="rounded-lg border border-border bg-surface p-4">
            <div className="flex flex-col gap-4">
              <div>
                <code className="text-sm text-primary">costdog</code>
                <p className="mt-1 text-sm text-muted">
                  Launch the interactive terminal dashboard.
                </p>
              </div>
              <div>
                <code className="text-sm text-primary">costdog scan</code>
                <p className="mt-1 text-sm text-muted">
                  Run a one-time scan and print a summary.
                </p>
              </div>
              <div>
                <code className="text-sm text-primary">costdog pricing</code>
                <p className="mt-1 text-sm text-muted">
                  Display current model pricing information.
                </p>
              </div>
              <div>
                <code className="text-sm text-primary">costdog web</code>
                <p className="mt-1 text-sm text-muted">
                  Start the web panel on{" "}
                  <code>http://localhost:3456</code>.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
