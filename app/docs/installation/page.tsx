import { Badge } from "@/components/ui/badge";

export default function InstallationPage() {
  return (
    <div className="animate-fade-in-up">
      <Badge variant="primary" className="mb-4">
        Installation
      </Badge>
      <h1 className="mb-6 text-3xl font-bold tracking-tight text-foreground">
        Installation
      </h1>
      <p className="mb-8 text-muted">
        Platform-specific installation guides for CostDog.
      </p>

      <div className="flex flex-col gap-8">
        {/* macOS */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            macOS
          </h2>
          <div className="flex flex-col gap-4">
            <div className="rounded-lg border border-border bg-surface p-4">
              <p className="mb-2 text-sm font-medium text-foreground">
                Option 1: Download DMG
              </p>
              <ol className="flex list-decimal flex-col gap-2 pl-4 text-sm text-muted">
                <li>
                  Go to{" "}
                  <a
                    href="https://github.com/bruce-hmz/costdog/releases"
                    className="text-primary hover:underline"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub Releases
                  </a>
                </li>
                <li>
                  Download the latest <code>.dmg</code> file
                </li>
                <li>Open the DMG and drag CostDog to Applications</li>
                <li>
                  On first launch, macOS may block the app. Run:
                  <pre className="mt-2 overflow-x-auto rounded-md bg-[#0f0f17] p-3 text-xs text-[#fafafa]">
                    <code>xattr -cr /Applications/CostDog.app</code>
                  </pre>
                </li>
              </ol>
            </div>

            <div className="rounded-lg border border-border bg-surface p-4">
              <p className="mb-2 text-sm font-medium text-foreground">
                Option 2: Build from Source
              </p>
              <pre className="overflow-x-auto rounded-md bg-[#0f0f17] p-3 text-xs text-[#fafafa]">
                <code>
                  {`git clone https://github.com/bruce-hmz/costdog.git
cd costdog
npm install
npm run tauri:build`}
                </code>
              </pre>
            </div>
          </div>
        </div>

        {/* Windows */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            Windows
          </h2>
          <div className="rounded-lg border border-border bg-surface p-4">
            <p className="mb-2 text-sm font-medium text-foreground">
              Download EXE Installer
            </p>
            <ol className="flex list-decimal flex-col gap-2 pl-4 text-sm text-muted">
              <li>
                Go to{" "}
                <a
                  href="https://github.com/bruce-hmz/costdog/releases"
                  className="text-primary hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub Releases
                </a>
              </li>
              <li>
                Download the latest <code>.exe</code> installer
              </li>
              <li>Run the installer and follow the prompts</li>
              <li>CostDog will start automatically</li>
            </ol>
          </div>
        </div>

        {/* System Requirements */}
        <div>
          <h2 className="mb-3 text-xl font-semibold text-foreground">
            System Requirements
          </h2>
          <div className="rounded-lg border border-border bg-surface p-4">
            <ul className="flex flex-col gap-2 text-sm text-muted">
              <li>
                • <strong className="text-foreground">macOS:</strong> 10.15+
                (Catalina or later). Universal binary (Intel + Apple Silicon).
              </li>
              <li>
                • <strong className="text-foreground">Windows:</strong> Windows
                10+ (x64).
              </li>
              <li>
                • <strong className="text-foreground">Disk:</strong> ~5MB (macOS)
                / ~15MB (Windows). SQLite database grows with usage.
              </li>
              <li>
                • <strong className="text-foreground">Prerequisites:</strong>{" "}
                Claude Code or Codex CLI must be installed and have at least
                one session.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
