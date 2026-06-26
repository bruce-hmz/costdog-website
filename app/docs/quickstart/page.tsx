import { Badge } from "@/components/ui/badge";

export default function QuickStartPage() {
  return (
    <div className="animate-fade-in-up">
      <Badge variant="primary" className="mb-4">
        Quick Start
      </Badge>
      <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground">
        Quick Start
      </h1>
      <p className="mb-8 text-muted">
        Get CostDog up and running in under 2 minutes.
      </p>

      <div className="flex flex-col gap-8">
        {/* Step 1 */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            1. Install CostDog
          </h2>
          <p className="mb-4 text-sm text-muted">
            Download the installer for your platform:
          </p>
          <div className="rounded-lg border border-border bg-surface p-4">
            <p className="mb-2 text-sm font-medium text-foreground">
              macOS
            </p>
            <pre className="overflow-x-auto rounded-md bg-[#0f0f17] p-3 text-xs text-[#fafafa]">
              <code>
                {`# Download from GitHub Releases
# https://github.com/bruce-hmz/costdog/releases

# Or build from source
git clone https://github.com/bruce-hmz/costdog.git
cd costdog
npm install
npm run tauri:build`}
              </code>
            </pre>
          </div>
          <div className="mt-4 rounded-lg border border-border bg-surface p-4">
            <p className="mb-2 text-sm font-medium text-foreground">
              Windows
            </p>
            <pre className="overflow-x-auto rounded-md bg-[#0f0f17] p-3 text-xs text-[#fafafa]">
              <code>
                {`# Download .exe installer from GitHub Releases
# https://github.com/bruce-hmz/costdog/releases`}
              </code>
            </pre>
          </div>
        </div>

        {/* Step 2 */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            2. Launch CostDog
          </h2>
          <p className="mb-4 text-sm text-muted">
            Open CostDog. It will automatically scan your Claude Code and Codex
            session logs.
          </p>
          <div className="rounded-lg border border-border bg-surface p-4">
            <p className="text-sm text-muted">
              No configuration needed. CostDog reads the log files that Claude
              Code and Codex already write to your disk.
            </p>
          </div>
        </div>

        {/* Step 3 */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            3. View Your Costs
          </h2>
          <p className="mb-4 text-sm text-muted">
            The floating widget shows your real-time costs. Click to expand for
            detailed breakdowns.
          </p>
          <div className="rounded-lg border border-border bg-surface p-4">
            <ul className="flex flex-col gap-2 text-sm text-muted">
              <li>
                • <strong className="text-foreground">Bar mode:</strong> Shows
                today&apos;s cost, tokens, and sessions
              </li>
              <li>
                • <strong className="text-foreground">Expanded mode:</strong>{" "}
                Switch between Today / 7D / 30D / All
              </li>
              <li>
                • <strong className="text-foreground">Top Models:</strong> See
                which models cost the most
              </li>
              <li>
                • <strong className="text-foreground">Recent Sessions:</strong>{" "}
                Drill into individual sessions
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
