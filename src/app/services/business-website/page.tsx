import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AosInit from "@/components/AosInit";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Business Website Development — InnoLab Digital Solutions",
  description: "Professional websites for companies, startups, and brands. Responsive design, SEO, CMS, and lead capture — delivered in weeks.",
};

const packages = [
  { num: "01", name: "Starter", timeline: "2–3 weeks", desc: "Up to 5 pages, contact form, basic SEO", price: "From $300" },
  { num: "02", name: "Business", timeline: "3–5 weeks", desc: "Up to 10 pages, CMS, lead forms, analytics", price: "From $700" },
  { num: "03", name: "Professional", timeline: "6–8 weeks", desc: "Full site, blog, advanced SEO, integrations", price: "From $1,000" },
];
const idealFor = ["Small & medium businesses", "Startups launching a new brand", "Service-based companies & agencies", "Corporate marketing websites"];
const features = ["Responsive design (mobile, tablet, desktop)", "SEO-friendly structure & metadata", "CMS for easy content updates", "Contact & lead capture forms", "Analytics integration"];
const techStack = ["Next.js", "Tailwind CSS", "Headless CMS", "Vercel"];

export default function BusinessWebsitePage() {
  return (
    <>
      <AosInit />
      <Navbar />
      <main style={{ background: "var(--bg-dark)", minHeight: "100vh", paddingTop: "80px" }}>

        {/* Header */}
        <div className="py-14 sm:py-20 px-5 sm:px-8 lg:px-12" style={{ borderBottom: "1px solid var(--border)" }}>
          <div className="max-w-7xl mx-auto">
            <a href="/#services" className="inline-flex items-center gap-2 text-xs font-mono mb-8 transition-opacity hover:opacity-100"
              style={{ color: "var(--text-secondary)", opacity: 0.7 }}>
              ← Back to Services
            </a>
            <div className="animate-stagger">
              <span className="badge">Packaged Service</span>
              <h1 className="font-extrabold leading-none mt-5 mb-5" style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}>
                Business Website<br />
                <span style={{ color: "var(--yellow)", fontStyle: "italic", fontWeight: 400 }}>Development</span>
              </h1>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-secondary)", maxWidth: "580px" }}>
                Professional websites for companies, startups, and brands. From simple landing pages to full corporate sites with CMS, lead capture, and analytics integration.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="py-14 sm:py-20 px-5 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto space-y-10">

            {/* Ideal For + Core Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glow-card rounded-2xl p-6 sm:p-8" data-aos="fade-up" data-aos-delay="0">
                <h2 className="font-bold text-base sm:text-lg mb-5">Ideal For</h2>
                <div className="flex flex-col gap-3">
                  {idealFor.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-1.5 flex-shrink-0" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--yellow)" }} />
                      <span className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glow-card rounded-2xl p-6 sm:p-8" data-aos="fade-up" data-aos-delay="100">
                <h2 className="font-bold text-base sm:text-lg mb-5">Core Features</h2>
                <div className="flex flex-col gap-3">
                  {features.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-1.5 flex-shrink-0" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--blue)" }} />
                      <span className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Packages */}
            <div data-aos="fade-up">
              <h2 className="font-bold text-lg sm:text-xl mb-5">Packages</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {packages.map((pkg, i) => (
                  <div key={pkg.num} className="glow-card rounded-2xl p-5 sm:p-7 flex flex-col" data-aos="fade-up" data-aos-delay={i * 100}>
                    <span className="font-mono text-xs mb-3 block" style={{ color: "var(--text-secondary)" }}>{pkg.num}</span>
                    <h3 className="font-bold text-lg mb-1">{pkg.name}</h3>
                    <div className="text-xs font-mono mb-3" style={{ color: "var(--yellow)" }}>⏱ {pkg.timeline}</div>
                    <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--text-secondary)" }}>{pkg.desc}</p>
                    <div className="font-bold text-sm pt-4" style={{ color: "var(--text-primary)", borderTop: "1px solid var(--border)" }}>{pkg.price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack */}
            <div className="glow-card rounded-2xl p-5 sm:p-6 flex flex-wrap items-center gap-3" data-aos="fade-up">
              <span className="text-xs font-mono uppercase tracking-widest" style={{ color: "var(--text-secondary)" }}>Tech Stack</span>
              <div className="w-px h-4 hidden sm:block" style={{ background: "var(--border)" }} />
              {techStack.map((tech) => (
                <span key={tech} className="text-xs font-mono px-3 py-1 rounded-sm"
                  style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}>
                  {tech}
                </span>
              ))}
            </div>

            {/* CTA */}
            <div className="glow-card rounded-2xl p-8 sm:p-12 text-center" data-aos="fade-up" data-aos-delay="100">
              <h2 className="font-bold text-xl sm:text-2xl mb-3">Ready to build your website?</h2>
              <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
                Tell us about your business and we&apos;ll recommend the right package for you.
              </p>
              <a href="/#contact" className="btn-primary">Start a Website Project →</a>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
