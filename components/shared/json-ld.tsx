import { SITE_CONFIG } from "@/lib/constants";

export function OrganizationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Organization",
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.url,
          logo: `${SITE_CONFIG.url}/icon.svg`,
          sameAs: [SITE_CONFIG.github],
        }),
      }}
    />
  );
}

export function WebSiteJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "WebSite",
          name: SITE_CONFIG.name,
          url: SITE_CONFIG.url,
          description: SITE_CONFIG.description,
          potentialAction: {
            "@type": "SearchAction",
            target: `${SITE_CONFIG.url}/blog?q={search_term_string}`,
            "query-input": "required name=search_term_string",
          },
        }),
      }}
    />
  );
}

export function SoftwareApplicationJsonLd() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: SITE_CONFIG.name,
          operatingSystem: "macOS, Windows",
          applicationCategory: "DeveloperApplication",
          offers: {
            "@type": "Offer",
            price: "0",
            priceCurrency: "USD",
          },
          description: SITE_CONFIG.description,
          url: SITE_CONFIG.url,
          downloadUrl: SITE_CONFIG.github + "/releases",
        }),
      }}
    />
  );
}

export function FAQJsonLd({ faqs }: { faqs: { question: string; answer: string }[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((faq) => ({
            "@type": "Question",
            name: faq.question,
            acceptedAnswer: {
              "@type": "Answer",
              text: faq.answer,
            },
          })),
        }),
      }}
    />
  );
}

export function ArticleJsonLd({
  title,
  description,
  datePublished,
  url,
}: {
  title: string;
  description: string;
  datePublished: string;
  url: string;
}) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Article",
          headline: title,
          description,
          datePublished,
          url,
          author: {
            "@type": "Organization",
            name: SITE_CONFIG.name,
          },
          publisher: {
            "@type": "Organization",
            name: SITE_CONFIG.name,
          },
        }),
      }}
    />
  );
}
