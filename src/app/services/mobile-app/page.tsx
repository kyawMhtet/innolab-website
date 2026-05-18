import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AosInit from "@/components/AosInit";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Application Development — InnoLab Digital Solutions",
  description: "iOS & Android apps built with React Native. Consumer apps, platform companions, and internal business tools — each scoped to your product vision.",
};

const appTypes = [
  { name: "Consumer App", desc: "Public-facing apps for end users — marketplace companions, loyalty apps, on-demand services." },
  { name: "Platform Companion", desc: "Mobile extension of an existing web platform, giving users access on iOS and Android." },
  { name: "Internal Business Tool", desc: "Staff-facing apps for field teams, inventory management, delivery tracking, and operations." },
];
const capabilities = [
  "Cross-platform iOS & Android from a single codebase",
  "Push notifications & real-time updates",
  "Offline mode & local data sync",
  "Camera, GPS, and device sensor integration",
  "Third-party API & backend integration",
  "App Store & Google Play submission",
  "Ongoing maintenance & feature updates",
];
const timelines = [
  { num: "01", name: "Simple Mobile App", timeline: "8–10 weeks", desc: "Core screens, authentication, basic API integration, App Store submission", price: "Custom" },
  { num: "02", name: "Medium Complexity App", timeline: "10–16 weeks", desc: "Multiple user roles, complex API flows, payments, real-time features", price: "Custom" },
  { num: "03", name: "Advanced App", timeline: "16+ weeks", desc: "Full product ecosystem — complex business logic, integrations, and scalable architecture", price: "From $2,500" },
];
const techStack = ["React Native", "Expo", "Laravel API", "Apple App Store", "Google Play Store"];

export default function MobileAppPage() {
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
                Mobile<br />
                <span style={{ color: "var(--yellow)", fontStyle: "italic", fontWeight: 400 }}>Application Development</span>
              </h1>
              <p className="text-sm sm:text-base leading-relaxed" style={{ color: "var(--text-secondary)", maxWidth: "580px" }}>
                iOS & Android apps built with React Native — a single codebase delivering a native experience on both platforms. Consumer apps, platform companions, and internal business tools, each scoped individually to match your product vision.
              </p>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="py-14 sm:py-20 px-5 sm:px-8 lg:px-12">
          <div className="max-w-7xl mx-auto space-y-10">

            {/* App Types */}
            <div data-aos="fade-up">
              <h2 className="font-bold text-lg sm:text-xl mb-5">What We Build</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {appTypes.map((type, i) => (
                  <div key={type.name} className="glow-card rounded-2xl p-5 sm:p-7" data-aos="fade-up" data-aos-delay={i * 100}>
                    <h3 className="font-bold text-base mb-3">{type.name}</h3>
                    <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{type.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Capabilities */}
            <div className="glow-card rounded-2xl p-6 sm:p-8" data-aos="fade-up">
              <h2 className="font-bold text-base sm:text-lg mb-5">Capabilities</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {capabilities.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <div className="mt-1.5 flex-shrink-0" style={{ width: "6px", height: "6px", borderRadius: "50%", background: "var(--yellow)" }} />
                    <span className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Project Timelines */}
            <div data-aos="fade-up">
              <h2 className="font-bold text-lg sm:text-xl mb-5">Project Timelines</h2>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {timelines.map((tier, i) => (
                  <div key={tier.num} className="glow-card rounded-2xl p-5 sm:p-7 flex flex-col" data-aos="fade-up" data-aos-delay={i * 100}>
                    <span className="font-mono text-xs mb-3 block" style={{ color: "var(--text-secondary)" }}>{tier.num}</span>
                    <h3 className="font-bold text-base mb-1">{tier.name}</h3>
                    <div className="text-xs font-mono mb-3" style={{ color: "var(--yellow)" }}>⏱ {tier.timeline}</div>
                    <p className="text-sm leading-relaxed mb-4 flex-1" style={{ color: "var(--text-secondary)" }}>{tier.desc}</p>
                    <div className="font-bold text-sm pt-4" style={{ color: "var(--text-primary)", borderTop: "1px solid var(--border)" }}>{tier.price}</div>
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
              <h2 className="font-bold text-xl sm:text-2xl mb-3">Have an app idea?</h2>
              <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
                Tell us what you&apos;re building and we&apos;ll scope the right approach for your platform.
              </p>
              <a href="/#contact" className="btn-primary">Start a Mobile App Project →</a>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
