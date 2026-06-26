import Link from "next/link";
import { Section } from "@/components/shared/section";
import { FadeIn } from "@/components/shared/fade-in";
import { Button } from "@/components/ui/button";
import { SITE_CONFIG } from "@/lib/constants";

export function CTA() {
  return (
    <Section className="bg-surface">
      <FadeIn className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
          Start seeing your AI costs today
        </h2>
        <p className="mt-4 text-lg text-muted">
          Free. Open source. Under 3MB. Install in seconds.
        </p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg">
            <a href={SITE_CONFIG.githubReleases}>Download Free</a>
          </Button>
          <Button asChild variant="secondary" size="lg">
            <Link href="/docs">Read the Docs</Link>
          </Button>
        </div>
      </FadeIn>
    </Section>
  );
}
