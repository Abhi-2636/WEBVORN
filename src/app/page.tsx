import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import Services from "@/components/sections/Services";
import WhyChoose from "@/components/sections/WhyChoose";
import Portfolio from "@/components/sections/Portfolio";
import Process from "@/components/sections/Process";
import TechStack from "@/components/sections/TechStack";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/sections/FAQ";
import CTA from "@/components/sections/CTA";
import Blog from "@/components/sections/Blog";
import FadeIn from "@/components/ui/FadeIn";

function SectionDivider() {
  return <div className="section-divider" />;
}

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <FadeIn delay={0.05}>
          <Services />
        </FadeIn>
        <SectionDivider />
        <FadeIn delay={0.05}>
          <WhyChoose />
        </FadeIn>
        <SectionDivider />
        <FadeIn delay={0.05}>
          <Portfolio />
        </FadeIn>
        <SectionDivider />
        <FadeIn delay={0.05}>
          <Process />
        </FadeIn>
        <SectionDivider />
        <FadeIn delay={0.05}>
          <TechStack />
        </FadeIn>
        <SectionDivider />
        <FadeIn delay={0.05}>
          <Testimonials />
        </FadeIn>
        <SectionDivider />
        <FadeIn delay={0.05}>
          <Pricing />
        </FadeIn>
        <SectionDivider />
        <FadeIn delay={0.05}>
          <FAQ />
        </FadeIn>
        <SectionDivider />
        <FadeIn delay={0.05}>
          <Blog />
        </FadeIn>
        <SectionDivider />
        <FadeIn delay={0.05}>
          <CTA />
        </FadeIn>
      </main>
      <Footer />
    </>
  );
}
