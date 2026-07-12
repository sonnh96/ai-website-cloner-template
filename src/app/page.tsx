import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HomeSection1 } from "@/components/HomeSection1";
import { HomeSection2 } from "@/components/HomeSection2";
import { HomeSection3 } from "@/components/HomeSection3";
import { HomeSection4 } from "@/components/HomeSection4";
import { HomeSection5 } from "@/components/HomeSection5";
import { HomeSection6 } from "@/components/HomeSection6";
import { CertificateStrip } from "@/components/CertificateStrip";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="pt-[81px] md:pt-[119px]">
        <Hero />
        <HomeSection1 />
        <HomeSection2 />
        <HomeSection3 />
        <HomeSection4 />
        <HomeSection5 />
        <HomeSection6 />
      </main>
      <CertificateStrip />
      <Footer />
    </>
  );
}
