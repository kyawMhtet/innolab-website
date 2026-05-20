import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Services from "@/components/Services";
import Process from "@/components/Process";
import Work from "@/components/Work";
import Testimonials from "@/components/Testimonials";
import About from "@/components/About";
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
        <Services />
        <Process />
        <Work />
        <Testimonials />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
