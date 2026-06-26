import * as React from "react";
import { cn } from "@/lib/utils";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  container?: boolean;
}

export function Section({
  className,
  container = true,
  children,
  ...props
}: SectionProps) {
  return (
    <section
      className={cn("relative py-20 sm:py-28", className)}
      {...props}
    >
      {container ? (
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {children}
        </div>
      ) : (
        children
      )}
    </section>
  );
}

interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  badge?: string;
  centered?: boolean;
}

export function SectionHeader({
  title,
  description,
  badge,
  centered = true,
  className,
  ...props
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-12 max-w-2xl",
        centered && "mx-auto text-center",
        className,
      )}
      {...props}
    >
      {badge && (
        <span className="mb-4 inline-block rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
          {badge}
        </span>
      )}
      <h2 className="text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-muted">{description}</p>
      )}
    </div>
  );
}
