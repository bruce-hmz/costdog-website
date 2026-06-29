import { Section, SectionHeader } from "@/components/shared/section";
import { FadeIn } from "@/components/shared/fade-in";
import { FAQS } from "@/lib/constants";

export function FAQ() {
  return (
    <Section className="bg-surface">
      <SectionHeader
        badge="FAQ"
        title="Frequently asked questions"
        description="Everything you need to know about CostDog."
      />

      <div className="mx-auto mt-12 max-w-2xl">
        {FAQS.map((faq, i) => (
          <FadeIn key={i} delay={i * 50} direction="none">
            <details className="group border-b border-border">
              <summary className="flex w-full cursor-pointer items-center justify-between gap-4 py-4 text-left list-none [&::-webkit-details-marker]:hidden">
                <span className="text-sm font-medium text-foreground">
                  {faq.question}
                </span>
                <svg
                  className="h-4 w-4 shrink-0 text-muted transition-transform group-open:rotate-180"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                </svg>
              </summary>
              <p className="pb-4 text-sm text-muted">{faq.answer}</p>
            </details>
          </FadeIn>
        ))}
      </div>
    </Section>
  );
}
