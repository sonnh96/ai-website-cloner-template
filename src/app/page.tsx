import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { PopularCategorySection } from "@/components/sections/PopularCategorySection";
import { AboutSection } from "@/components/sections/AboutSection";
import { CoursesSection } from "@/components/sections/CoursesSection";
import { ChooseUsSection } from "@/components/sections/ChooseUsSection";
import { ClientsSection } from "@/components/sections/ClientsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { VideoCoursesSection } from "@/components/sections/VideoCoursesSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { BlogSection } from "@/components/sections/BlogSection";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <PopularCategorySection />
        <AboutSection />
        <CoursesSection />
        <ChooseUsSection />
        <ClientsSection />
        <StatsSection />
        <VideoCoursesSection />
        <TestimonialsSection />
        <BlogSection />
      </main>
      <Footer />
    </>
  );
}
