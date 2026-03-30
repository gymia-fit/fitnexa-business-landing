import { HeroSection } from '@/components/sections/HeroSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { BlogSection } from '@/components/sections/BlogSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTASection } from '@/components/sections/CTASection';

export default function HomePage(): React.JSX.Element {
  return (
    <>
      {/* Hook — free gym companion, coming soon */}
      <HeroSection />

      {/* Features — everything the app does */}
      <FeaturesSection />

      {/* How it works — 4 steps, 30 seconds */}
      <HowItWorksSection />

      {/* Benefits — why gym-goers love it */}
      <BenefitsSection />

      {/* Social proof — real member stories */}
      <TestimonialsSection />

      {/* Blog — trust + SEO */}
      <BlogSection />

      {/* FAQ — handles remaining objections */}
      <FAQSection />

      {/* Final CTA — waitlist */}
      <CTASection />
    </>
  );
}
