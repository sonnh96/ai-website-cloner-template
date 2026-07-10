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
        heading="Sẵn Sàng Gia Nhập Cộng Đồng CIS?"
        description="Khám phá hành trình học tập tại CIS! Tìm hiểu thêm về chương trình học, học phí minh bạch và quy trình tuyển sinh của trường."
        buttonLabel="Đăng Ký Tư Vấn Ngay"
      />

      <CurriculumSection />
      <FacilitiesSection />
      <BlogCarouselSection />
      <TasLifeNewsSection />
      <TestimonialsSection />

      <CTABanner
        variant="navy"
        heading="Bắt Đầu Hành Trình Cùng CIS"
        description="Tại CIS, chúng tôi tin rằng mỗi học sinh xứng đáng có một môi trường nuôi dưỡng và hỗ trợ để phát triển toàn diện."
        buttonLabel="Đăng Ký Ngay"
      />

      <ExploreTasLifeSection />
      <SeoBlogCarouselSection />
      <NewsletterSection />
      <SiteFooter />
    </main>
  );
}
