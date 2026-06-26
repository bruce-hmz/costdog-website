"use client";

import { useEffect } from "react";
import { RefreshCw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <section className="flex min-h-[60vh] flex-col items-center justify-center px-4 text-center">
      <span className="mb-6 text-6xl">🐕</span>
      <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
        Something went wrong
      </h1>
      <p className="mt-4 max-w-md text-lg text-muted">
        An unexpected error occurred. Try refreshing the page or heading back
        home.
      </p>
      <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
        <button
          onClick={reset}
          className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-primary-hover"
        >
          <RefreshCw className="h-4 w-4" />
          Try again
        </button>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg border border-border px-5 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-surface"
        >
          <Home className="h-4 w-4" />
          Back to home
        </Link>
      </div>
    </section>
  );
}
