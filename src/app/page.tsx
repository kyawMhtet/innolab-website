import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import BangkokSection from "@/components/BangkokSection";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Process from "@/components/Process";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
import Faq from "@/components/Faq";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import AosInit from "@/components/AosInit";

export default function Home() {
  return (
    <>
      <AosInit />
      <Navbar />
      <main>
        <Hero />
        <Partners />
        <BangkokSection />
        <WhyUs />
        <Services />
        <Industries />
        <Process />
        <Work />
        <Testimonials />
        <About />
        <Faq />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
