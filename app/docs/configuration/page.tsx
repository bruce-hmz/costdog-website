"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";

export default function ConfigurationPage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Badge variant="primary" className="mb-4">
        Configuration
      </Badge>
      <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground">
        Configuration
      </h1>
      <p className="mb-8 text-muted">
        CostDog works out of the box with zero configuration. But you can
        customize it if you want.
      </p>

      <div className="flex flex-col gap-8">
        {/* Environment Variables */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Environment Variables
          </h2>
          <div className="rounded-lg border border-border bg-surface p-4">
            <div className="flex flex-col gap-4">
              <div>
                <p className="mb-1 font-mono text-sm text-primary">
                  COSTDOG_DATA_DIR
                </p>
                <p className="text-sm text-muted">
                  Custom path for the SQLite database. Default:{" "}
                  <code>~/.costdog/</code>
                </p>
              </div>
              <div>
                <p className="mb-1 font-mono text-sm text-primary">
                  CODEX_HOME
                </p>
                <p className="text-sm text-muted">
                  Custom path for Codex sessions. Default:{" "}
                  <code>~/.codex/</code>
                </p>
              </div>
              <div>
                <p className="mb-1 font-mono text-sm text-primary">
                  COSTDOG_PORT
                </p>
                <p className="text-sm text-muted">
                  Port for the web panel. Default: <code>3456</code>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Data Storage */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Data Storage
          </h2>
          <div className="rounded-lg border border-border bg-surface p-4">
            <p className="mb-4 text-sm text-muted">
              CostDog stores all data in a local SQLite database:
            </p>
            <pre className="overflow-x-auto rounded-md bg-[#0f0f17] p-3 text-xs text-[#fafafa]">
              <code>
                {`~/.costdog/costdog.sqlite`}
              </code>
            </pre>
            <p className="mt-4 text-sm text-muted">
              You can query this database directly using any SQLite client. The
              schema includes:
            </p>
            <pre className="mt-2 overflow-x-auto rounded-md bg-[#0f0f17] p-3 text-xs text-[#fafafa]">
              <code>
                {`CREATE TABLE sessions (
  session_id TEXT,
  source TEXT,
  start_time TEXT,
  model TEXT,
  input_tokens INTEGER,
  output_tokens INTEGER,
  cache_read_tokens INTEGER,
  cost REAL,
  disk_write_bytes INTEGER,
  PRIMARY KEY (session_id, source)
);

CREATE TABLE alerts (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  level TEXT,
  message TEXT,
  timestamp TEXT,
  dismissed INTEGER DEFAULT 0
);`}
              </code>
            </pre>
          </div>
        </div>

        {/* Auto-Refresh */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Auto-Refresh
          </h2>
          <div className="rounded-lg border border-border bg-surface p-4">
            <p className="text-sm text-muted">
              CostDog automatically scans for new sessions every{" "}
              <strong className="text-foreground">30 seconds</strong>. This is
              currently not configurable. The widget updates in real-time via
              Tauri events.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
