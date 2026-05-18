import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AosInit from "@/components/AosInit";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Marketplace Platform Development — InnoLab Digital Solutions",
  description: "Multi-vendor platforms connecting buyers and sellers. Custom-scoped with vendor onboarding, transaction flows, commission management, and reviews.",
};

const capabilities = [
  "Vendor onboarding & storefronts",
  "Buyer & seller transaction flows",
  "Commission & payout management",
  "Review & rating systems",
  "Multi-category product listings",
  "Admin oversight & reporting dashboard",
  "Dispute resolution workflow",
  "Search & filter with advanced matching",
];
const processSteps = [
  { num: "01", title: "Discovery Session", desc: "We map your marketplace model — categories, user roles, transaction flows, and revenue mechanism." },
  { num: "02", title: "Requirements & Scoping", desc: "A detailed requirements document and technical architecture are agreed upon before any development starts." },
  { num: "03", title: "Custom Proposal", desc: "You receive a tailored proposal with timeline, milestones, and investment — no generic quotes." },
  { num: "04", title: "Development & Delivery", desc: "Milestone-based development with regular check-ins, staging previews, and transparent progress updates." },
];
const techStack = ["Next.js", "Laravel API", "MySQL", "Cloud VPS", "AWS S3", "Stripe / Payment API"];

export default function MarketplacePage() {
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
              <span className="badge">Custom Project</span>
              <h1 className="font-extrabold leading-none mt-5 mb-5" style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}>
                Marketplace<br />
                <span style={{ color: "var(--yellow)", fontStyle: "italic", fontWeight: 400 }}>Platform Development</span>
              </h1>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-secondary)", maxWidth: "580px" }}>
                Multi-vendor digital marketplaces connecting buyers and sellers. Highly customised platforms — every project starts with a discovery session, requirements analysis, and a tailored proposal before development begins.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="py-14 sm:py-20 px-5 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto space-y-10">

            {/* Key Capabilities */}
            <div className="glow-card rounded-2xl p-6 sm:p-8" data-aos="fade-up">
              <h2 className="font-bold text-base sm:text-lg mb-5">Key Capabilities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {capabilities.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1.5 flex-shrink-0" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--yellow)" }} />
                    <span className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Our Process */}
            <div data-aos="fade-up">
              <h2 className="font-bold text-lg sm:text-xl mb-5">Our Process for Custom Projects</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {processSteps.map((step, i) => (
                  <div key={step.num} className="glow-card rounded-2xl p-5 sm:p-7" data-aos="fade-up" data-aos-delay={i * 80}>
                    <span className="font-mono text-xs mb-3 block" style={{ color: "var(--text-secondary)" }}>{step.num}</span>
                    <h3 className="font-bold text-base mb-2">{step.title}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{step.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline note */}
            <div className="glow-card rounded-2xl p-5 sm:p-7 flex flex-col sm:flex-row sm:items-center gap-5" data-aos="fade-up">
              <div className="flex-shrink-0">
                <div className="text-2xl font-extrabold mb-1" style={{ color: "var(--yellow)" }}>12+ wks</div>
                <div className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>Typical timeline</div>
              </div>
              <div className="w-px h-10 hidden sm:block" style={{ background: "var(--border)" }} />
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                All marketplace projects are scoped individually. Timeline and investment depend on the number of user roles, transaction complexity, and feature set agreed upon in discovery.
              </p>
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
              <h2 className="font-bold text-xl sm:text-2xl mb-3">Have a marketplace idea?</h2>
              <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
                Let&apos;s start with a discovery call to understand your model and scope the right solution.
              </p>
              <a href="/#contact" className="btn-primary">Book a Discovery Call →</a>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
