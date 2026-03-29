import { HeroSection } from '@/components/sections/HeroSection';
import { TrustLogosSection } from '@/components/sections/TrustLogosSection';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTASection } from '@/components/sections/CTASection';

export default function BusinessPage(): React.JSX.Element {
  return (
    <>
      {/* Hook — what is Gymia and who is it for */}
      <HeroSection />

      {/* Social proof — gyms already using it */}
      <TrustLogosSection />

      {/* Benefits — outcomes for the member */}
      <BenefitsSection />

      {/* Features — what the app actually does */}
      <FeaturesSection />

      {/* How it works — frictionless onboarding */}
      <HowItWorksSection />

      {/* Testimonials — real member stories */}
      <TestimonialsSection />

      {/* Pricing — free anchor + upsell */}
      <PricingSection />

      {/* Blog — builds trust + SEO */}
      <BlogSection />

      {/* FAQ — handles remaining objections */}
      <FAQSection />

      {/* Final CTA */}
      <CTASection />
    </>
  );
}
