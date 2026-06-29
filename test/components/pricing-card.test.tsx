import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { PricingCard } from "@/components/ui/pricing-card";

const defaultProps = {
  name: "Free",
  price: "$0",
  period: "forever",
  description: "Everything you need.",
  features: ["Feature 1", "Feature 2", "Feature 3"],
  children: <button>Download</button>,
};

describe("PricingCard", () => {
  it("renders plan name and price", () => {
    render(<PricingCard {...defaultProps} />);
    expect(screen.getByText("Free")).toBeInTheDocument();
    expect(screen.getByText("$0")).toBeInTheDocument();
    expect(screen.getByText("forever")).toBeInTheDocument();
  });

  it("renders description", () => {
    render(<PricingCard {...defaultProps} />);
    expect(screen.getByText("Everything you need.")).toBeInTheDocument();
  });

  it("renders all features", () => {
    render(<PricingCard {...defaultProps} />);
    expect(screen.getByText("Feature 1")).toBeInTheDocument();
    expect(screen.getByText("Feature 2")).toBeInTheDocument();
    expect(screen.getByText("Feature 3")).toBeInTheDocument();
  });

  it("renders children (CTA button)", () => {
    render(<PricingCard {...defaultProps} />);
    expect(screen.getByRole("button", { name: "Download" })).toBeInTheDocument();
  });

  it("shows badge when provided", () => {
    render(<PricingCard {...defaultProps} badge="Coming Soon" />);
    expect(screen.getByText("Coming Soon")).toBeInTheDocument();
  });

  it("does not show badge when not provided", () => {
    const { container } = render(<PricingCard {...defaultProps} />);
    expect(container.querySelector('[class*="rounded-full"]')).toBeNull();
  });

  it("applies highlighted styling", () => {
    const { container } = render(
      <PricingCard {...defaultProps} highlighted />,
    );
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain("border-primary");
    expect(card.className).toContain("glow-purple");
  });

  it("applies default styling when not highlighted", () => {
    const { container } = render(<PricingCard {...defaultProps} />);
    const card = container.firstChild as HTMLElement;
    expect(card.className).toContain("border-border");
  });
});
