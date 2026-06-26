import Link from "next/link";
import { ArrowRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SITE_CONFIG } from "@/lib/constants";
import { DashboardPreview } from "./dashboard-preview";
import { Glow } from "@/components/shared/glow";

export function Hero() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-28 lg:py-36">
      <Glow />
      <div className="grid-bg absolute inset-0" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <div className="animate-fade-in-up">
            <Badge variant="primary" className="mb-6">
              Free &amp; Open Source
            </Badge>
          </div>

          <h1 className="animate-fade-in-up text-4xl font-bold tracking-tight text-foreground [animation-delay:100ms] sm:text-6xl lg:text-7xl">
            See Every Token.
            <br />
            <span className="gradient-text">Control Every Dollar.</span>
          </h1>

          <p className="animate-fade-in-up mt-6 text-lg text-muted [animation-delay:200ms] sm:text-xl">
            Real-time AI cost intelligence for Claude Code, Codex, and every
            model you use. Free, open-source, and runs entirely on your machine.
          </p>

          <div className="animate-fade-in-up mt-10 flex flex-col items-center justify-center gap-4 [animation-delay:300ms] sm:flex-row">
            <Button asChild size="lg">
              <a
                href={SITE_CONFIG.githubReleases}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 whitespace-nowrap"
              >
                Download Free
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="secondary" size="lg">
              <a
                href={SITE_CONFIG.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 whitespace-nowrap"
              >
                <ExternalLink className="h-4 w-4" />
                Star on GitHub
              </a>
            </Button>
          </div>

          <p className="animate-fade-in-up mt-4 text-sm text-muted [animation-delay:400ms]">
            Free forever · Open source · No account required · 3MB
          </p>
        </div>

        {/* Dashboard preview */}
        <div className="animate-fade-in-up mx-auto mt-16 max-w-4xl [animation-delay:500ms] sm:mt-20">
          <DashboardPreview />
        </div>
      </div>
    </section>
  );
}
