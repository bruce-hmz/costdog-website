import { Hero } from "@/components/home/hero";
import { WhyCostDog } from "@/components/home/why-costdog";
import { FeatureGrid } from "@/components/home/feature-grid";
import { HowItWorks } from "@/components/home/how-it-works";
import { PricingPreview } from "@/components/home/pricing-preview";
import { FAQ } from "@/components/home/faq";
import { CTA } from "@/components/home/cta";
import { FAQJsonLd } from "@/components/shared/json-ld";
import { FAQS } from "@/lib/constants";

export default function Home() {
  return (
    <>
      <FAQJsonLd faqs={[...FAQS]} />
      <Hero />
      <WhyCostDog />
      <FeatureGrid />
      <HowItWorks />
      <PricingPreview />
      <FAQ />
      <CTA />
    </>
  );
}
