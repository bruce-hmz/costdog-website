import { describe, it, expect } from "vitest";
import { SITE_CONFIG, FEATURES, PRICING, FAQS, STEPS, NAV_LINKS, FOOTER_LINKS } from "@/lib/constants";

describe("SITE_CONFIG", () => {
  it("has valid githubReleases URL", () => {
    expect(SITE_CONFIG.githubReleases).toMatch(/^https:\/\/github\.com\//);
    expect(SITE_CONFIG.githubReleases).toContain("/releases/latest");
  });

  it("has valid ogImage URL", () => {
    expect(SITE_CONFIG.ogImage).toMatch(/^https?:\/\//);
  });

  it("has valid url", () => {
    expect(SITE_CONFIG.url).toMatch(/^https?:\/\//);
  });

  it("has keywords array", () => {
    expect(SITE_CONFIG.keywords.length).toBeGreaterThan(0);
  });
});

describe("FEATURES", () => {
  it("has 9 features", () => {
    expect(FEATURES).toHaveLength(9);
  });

  it("each feature has required fields", () => {
    for (const feature of FEATURES) {
      expect(feature.title).toBeTruthy();
      expect(feature.description).toBeTruthy();
      expect(feature.detailed).toBeTruthy();
      expect(feature.icon).toBeTruthy();
      expect(feature.badge).toBeTruthy();
    }
  });

  it("icons are valid string identifiers", () => {
    for (const feature of FEATURES) {
      expect(typeof feature.icon).toBe("string");
      expect(feature.icon.length).toBeGreaterThan(0);
    }
  });
});

describe("PRICING", () => {
  it("has free and pro plans", () => {
    expect(PRICING.free).toBeDefined();
    expect(PRICING.pro).toBeDefined();
  });

  it("free plan is $0", () => {
    expect(PRICING.free.price).toBe("$0");
    expect(PRICING.free.highlighted).toBe(false);
  });

  it("pro plan is highlighted", () => {
    expect(PRICING.pro.highlighted).toBe(true);
    expect(PRICING.pro.badge).toBe("Coming Soon");
  });

  it("both plans have features", () => {
    expect(PRICING.free.features.length).toBeGreaterThan(0);
    expect(PRICING.pro.features.length).toBeGreaterThan(0);
  });
});

describe("FAQS", () => {
  it("has at least 10 FAQs", () => {
    expect(FAQS.length).toBeGreaterThanOrEqual(10);
  });

  it("each FAQ has question and answer", () => {
    for (const faq of FAQS) {
      expect(faq.question).toBeTruthy();
      expect(faq.answer).toBeTruthy();
    }
  });
});

describe("STEPS", () => {
  it("has 4 steps", () => {
    expect(STEPS).toHaveLength(4);
  });

  it("steps are numbered 1-4", () => {
    STEPS.forEach((step, i) => {
      expect(step.step).toBe(i + 1);
    });
  });
});

describe("NAV_LINKS", () => {
  it("has at least 4 nav links", () => {
    expect(NAV_LINKS.length).toBeGreaterThanOrEqual(4);
  });

  it("each link has label and href", () => {
    for (const link of NAV_LINKS) {
      expect(link.label).toBeTruthy();
      expect(link.href).toBeTruthy();
    }
  });
});

describe("FOOTER_LINKS", () => {
  it("has Product, Resources, Community, Legal sections", () => {
    expect(FOOTER_LINKS.Product).toBeDefined();
    expect(FOOTER_LINKS.Resources).toBeDefined();
    expect(FOOTER_LINKS.Community).toBeDefined();
    expect(FOOTER_LINKS.Legal).toBeDefined();
  });

  it("each section has links", () => {
    for (const [, links] of Object.entries(FOOTER_LINKS)) {
      expect(links.length).toBeGreaterThan(0);
    }
  });
});
