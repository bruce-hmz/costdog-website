import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <span className="mb-6 text-6xl">🐕</span>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-4 max-w-md text-lg text-muted">
        Looks like this page ran off. Don&apos;t worry, we&apos;ll help you find
        your way back.
      </p>
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
        >
          <Home className="h-4 w-4" />
          Back to home
        </Link>
        <Link
          href="/features"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface"
        >
          <ArrowLeft className="h-4 w-4" />
          View features
        </Link>
      </div>
    </section>
  );
}
