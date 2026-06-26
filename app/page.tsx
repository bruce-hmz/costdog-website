import { Hero } from "@/components/home/hero";
import { SocialProof } from "@/components/home/social-proof";
import { Problem } from "@/components/home/problem";
import { Solution } from "@/components/home/solution";
import { FeatureGrid } from "@/components/home/feature-grid";
import { HowItWorks } from "@/components/home/how-it-works";
import { PricingPreview } from "@/components/home/pricing-preview";
import { FAQ } from "@/components/home/faq";
import { CTA } from "@/components/home/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <SocialProof />
      <Problem />
      <Solution />
      <FeatureGrid />
      <HowItWorks />
      <PricingPreview />
      <FAQ />
      <CTA />
    </>
  );
}
