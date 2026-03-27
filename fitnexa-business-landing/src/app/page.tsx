import { BlogSection } from '@/components/sections/BlogSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { TrustLogosSection } from '@/components/sections/TrustLogosSection';
import { BrandShowcaseSection } from '@/components/sections/BrandShowcaseSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { AIDemoSection } from '@/components/sections/AIDemoSection';
import { BenefitsSection } from '@/components/sections/BenefitsSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { PricingSection } from '@/components/sections/PricingSection';
import { TrustBadgesSection } from '@/components/sections/TrustBadgesSection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { FAQSection } from '@/components/sections/FAQSection';
import { CTASection } from '@/components/sections/CTASection';

export default function BusinessPage(): React.JSX.Element {
  return (
    <>
      {/* Hero Section */}
      <HeroSection />

      {/* Trust Logos - Social Proof */}
      <TrustLogosSection />

      {/* Brand Showcase - Custom App Demo */}
      <BrandShowcaseSection />

      {/* How It Works - 4 Steps */}
      <HowItWorksSection />

      {/* AI Demo Section - Interactive */}
      <AIDemoSection />

      {/* Benefits Section */}
      <BenefitsSection />

      {/* Features Section */}
      <FeaturesSection />

      {/* Pricing Section */}
      <PricingSection />

      {/* Trust Badges - Security & Compliance */}
      <TrustBadgesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Blog Section */}
      <BlogSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* CTA Section */}
      <CTASection />
    </>
  );
}
