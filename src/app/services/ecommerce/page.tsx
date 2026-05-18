import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AosInit from "@/components/AosInit";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "E-commerce Platform Development — InnoLab Digital Solutions",
  description: "Online stores with product catalog, cart, checkout, and payment integration. Built to manage orders, inventory, and customers at scale.",
};

const tiers = [
  { num: "01", name: "Starter Store", timeline: "4–6 weeks", desc: "Product catalog, cart, checkout, basic payment gateway", price: "From $800" },
  { num: "02", name: "Business Store", timeline: "6–10 weeks", desc: "Full platform + inventory, customer accounts, advanced management", price: "From $1,000" },
];
const coreFeatures = ["Product catalog management", "Shopping cart & checkout", "Payment gateway integration", "Order management system", "Admin dashboard & analytics"];
const addOns = ["Inventory management", "Loyalty & coupon systems", "Multi-language / multi-currency", "Product reviews & ratings"];
const idealClients = ["Retail", "Fashion", "Electronics", "Food & Beverage", "Specialty Brands", "Wholesalers"];
const techStack = ["Next.js", "Laravel API", "Tailwind CSS", "Payment Gateways", "Cloud Hosting"];

export default function EcommercePage() {
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
              <span className="badge">Semi-Packaged Service</span>
              <h1 className="font-extrabold leading-none mt-5 mb-5" style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}>
                E-commerce<br />
                <span style={{ color: "var(--yellow)", fontStyle: "italic", fontWeight: 400 }}>Platform Development</span>
              </h1>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-secondary)", maxWidth: "580px" }}>
                Online stores built to sell — complete with product management, cart, secure checkout, and payment integration. Add inventory, loyalty, and multi-currency as your business scales.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="py-14 sm:py-20 px-5 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto space-y-10">

            {/* Core + Add-On Features */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="glow-card rounded-2xl p-6 sm:p-8" data-aos="fade-up" data-aos-delay="0">
                <h2 className="font-bold text-base sm:text-lg mb-5">Core Platform Features</h2>
                <div className="flex flex-col gap-3">
                  {coreFeatures.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-1.5 flex-shrink-0" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--yellow)" }} />
                      <span className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="glow-card rounded-2xl p-6 sm:p-8" data-aos="fade-up" data-aos-delay="100">
                <h2 className="font-bold text-base sm:text-lg mb-5">Add-On Features</h2>
                <div className="flex flex-col gap-3">
                  {addOns.map((item) => (
                    <div key={item} className="flex items-start gap-3">
                      <div className="mt-1.5 flex-shrink-0" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--blue)" }} />
                      <span className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Service Tiers */}
            <div data-aos="fade-up">
              <h2 className="font-bold text-lg sm:text-xl mb-5">Service Tiers</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {tiers.map((tier, i) => (
                  <div key={tier.num} className="glow-card rounded-2xl p-5 sm:p-7 flex flex-col" data-aos="fade-up" data-aos-delay={i * 100}>
                    <span className="font-mono text-xs mb-3 block" style={{ color: "var(--text-secondary)" }}>{tier.num}</span>
                    <h3 className="font-bold text-lg mb-1">{tier.name}</h3>
                    <div className="text-xs font-mono mb-3" style={{ color: "var(--yellow)" }}>⏱ {tier.timeline}</div>
                    <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--text-secondary)" }}>{tier.desc}</p>
                    <div className="font-bold text-sm pt-4" style={{ color: "var(--text-primary)", borderTop: "1px solid var(--border)" }}>{tier.price}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Ideal Clients */}
            <div className="glow-card rounded-2xl p-5 sm:p-7" data-aos="fade-up">
              <h2 className="font-bold text-base sm:text-lg mb-4">Ideal Clients</h2>
              <div className="flex flex-wrap gap-2">
                {idealClients.map((client) => (
                  <span key={client} className="text-xs font-mono px-3 py-1.5 rounded-sm"
                    style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}>
                    {client}
                  </span>
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
              <h2 className="font-bold text-xl sm:text-2xl mb-3">Ready to launch your online store?</h2>
              <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
                Tell us about your products and we&apos;ll scope the right platform for your business.
              </p>
              <a href="/#contact" className="btn-primary">Start an E-commerce Project →</a>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
