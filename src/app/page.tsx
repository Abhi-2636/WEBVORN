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
        <Services />
        <SectionDivider />
        <WhyChoose />
        <SectionDivider />
        <Portfolio />
        <SectionDivider />
        <Process />
        <SectionDivider />
        <TechStack />
        <SectionDivider />
        <Testimonials />
        <SectionDivider />
        <Pricing />
        <SectionDivider />
        <FAQ />
        <SectionDivider />
        <Blog />
        <SectionDivider />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
