import { isLocale, getHomeContent } from "@/content";
import { notFound } from "next/navigation";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { FloatingWidgets } from "@/components/layout/FloatingWidgets";
import { HeroSection } from "@/components/home/HeroSection";
import { TrustStrip } from "@/components/home/TrustStrip";
import { PrincipalSection } from "@/components/home/PrincipalSection";
import { ProgramsSection } from "@/components/home/ProgramsSection";
import { FiveStarsSection } from "@/components/home/FiveStarsSection";
import { StatsSection } from "@/components/home/StatsSection";
import { NewsSection } from "@/components/home/NewsSection";
import { UniversitySection } from "@/components/home/UniversitySection";
import { ValuesSection } from "@/components/home/ValuesSection";
import { TestimonialsSection } from "@/components/home/TestimonialsSection";
import { InquiryFormSection } from "@/components/home/InquiryFormSection";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const content = getHomeContent(locale);

  return (
    <>
      <Header content={content} locale={locale} />
      <FloatingWidgets />
      <main id="app">
        <HeroSection content={content.hero} />
        <TrustStrip />
        <PrincipalSection content={content.principal} />
        <ProgramsSection content={content.programs} />
        <FiveStarsSection content={content.fiveStars} />
        <StatsSection content={content.stats} />
        <NewsSection content={content.news} />
        <UniversitySection content={content.university} />
        <ValuesSection content={content.values} />
        <TestimonialsSection content={content.testimonials} />
        <InquiryFormSection content={content.inquiryForm} />
      </main>
      <Footer content={content.footer} />
    </>
  );
}
