import { AchievementsSection } from "@/components/achievements-section";
import { BlogCarouselSection } from "@/components/blog-carousel-section";
import { CTABanner } from "@/components/cta-banner";
import { CurriculumSection } from "@/components/curriculum-section";
import { ExploreTasLifeSection } from "@/components/explore-tas-life-section";
import { FacilitiesSection } from "@/components/facilities-section";
import { GraduatesSection } from "@/components/graduates-section";
import { HeroSection } from "@/components/hero-section";
import { NewsletterSection } from "@/components/newsletter-section";
import { SeoBlogCarouselSection } from "@/components/seo-blog-carousel-section";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { TasLifeNewsSection } from "@/components/tas-life-news-section";
import { TestimonialsSection } from "@/components/testimonials-section";
import { VisionMissionSection } from "@/components/vision-mission-section";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col overflow-x-hidden">
      <div className="relative">
        <SiteHeader />
        <HeroSection />
      </div>

      <VisionMissionSection />
      <AchievementsSection />
      <GraduatesSection />

      <CTABanner
        variant="crimson"
        heading="Ready to Join Our Community?"
        description="Discover how easy it is to become part of The American School family! Learn more about our transparent fee structure and streamlined admission process."
        buttonLabel="View Fees and Apply Now"
      />

      <CurriculumSection />
      <FacilitiesSection />
      <BlogCarouselSection />
      <TasLifeNewsSection />
      <TestimonialsSection />

      <CTABanner
        variant="navy"
        heading="Start Your Journey with Us"
        description="At The American School, we believe in providing a nurturing and supportive environment where every student can thrive."
        buttonLabel="Apply Now"
      />

      <ExploreTasLifeSection />
      <SeoBlogCarouselSection />
      <NewsletterSection />
      <SiteFooter />
    </main>
  );
}
