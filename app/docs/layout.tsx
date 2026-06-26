import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Documentation",
  description: "Get started with CostDog in minutes.",
};

const sidebarLinks = [
  { label: "Overview", href: "/docs" },
  { label: "Quick Start", href: "/docs/quickstart" },
  { label: "Installation", href: "/docs/installation" },
  { label: "Configuration", href: "/docs/configuration" },
  { label: "API Reference", href: "/docs/api" },
  { label: "Troubleshooting", href: "/docs/troubleshooting" },
];

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex gap-12">
        {/* Sidebar */}
        <aside className="hidden w-48 shrink-0 md:block">
          <nav className="sticky top-24 flex flex-col gap-1">
            {sidebarLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </aside>

        {/* Content */}
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
