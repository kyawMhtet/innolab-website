"use client";
import { useEffect, useRef } from "react";

const services = [
  {
    num: "01",
    title: "Web Design & Development",
    desc: "Pixel-perfect websites engineered for conversion and emotional resonance. From landing pages to full-scale platforms.",
    tags: ["Next.js", "Webflow", "Shopify"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8M12 17v4" />
      </svg>
    ),
    stat: "3-Week Launch",
    statLabel: "Avg turnaround",
  },
  {
    num: "02",
    title: "App Development",
    desc: "Full-stack applications built with scalable architecture. Mobile-ready, API-integrated, performance-obsessed.",
    tags: ["React Native", "Node.js", "API Design"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
    stat: "99.9%",
    statLabel: "Uptime SLA",
  },
  {
    num: "03",
    title: "Digital Marketing",
    desc: "Data-driven campaigns across Meta, Google & LinkedIn. We make your budget work harder and your brand grow faster.",
    tags: ["Meta Ads", "Google Ads", "SEO"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    stat: "+42% Conv.",
    statLabel: "Avg conversion lift",
  },
  {
    num: "04",
    title: "Brand & Design",
    desc: "Strategic identity systems — logos, brand guidelines, UI/UX, and marketing materials that command attention.",
    tags: ["Figma", "Branding", "UI/UX"],
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
      </svg>
    ),
    stat: "4-Person",
    statLabel: "Dedicated team",
  },
];

export default function Services() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    const elements = ref.current?.querySelectorAll(".reveal");
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="py-32 relative" ref={ref}>
      {/* Background blob */}
      <div
        className="blob"
        style={{
          width: "500px",
          height: "500px",
          background: "#0066ff",
          top: "50%",
          right: "-200px",
          transform: "translateY(-50%)",
          opacity: 0.05,
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="reveal mb-20">
          <span className="badge mb-6">Our Ecosystem</span>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mt-6">
            <h2
              className="font-extrabold leading-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              SERVICES &{" "}
              <span style={{ color: "var(--cyan)", fontStyle: "italic", fontWeight: 400 }}>
                Verticals.
              </span>
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "360px" }} className="text-sm leading-relaxed">
              We blend strategy, design, and engineering into one seamless creative engine.
            </p>
          </div>
        </div>

        {/* Service cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {services.map((service, i) => (
            <div
              key={service.num}
              className="reveal glow-card rounded-2xl p-8 cursor-pointer"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              <div className="flex items-start justify-between mb-6">
                <div>
                  <span
                    className="font-mono text-xs mb-3 block"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {service.num}
                  </span>
                  <h3 className="text-2xl font-bold leading-tight">{service.title}</h3>
                </div>
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(0, 245, 212, 0.1)",
                    color: "var(--cyan)",
                    border: "1px solid rgba(0,245,212,0.2)",
                  }}
                >
                  {service.icon}
                </div>
              </div>

              <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                {service.desc}
              </p>

              <div className="flex items-center justify-between">
                <div className="flex gap-2 flex-wrap">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs font-mono px-3 py-1 rounded-full"
                      style={{
                        background: "rgba(255,255,255,0.05)",
                        border: "1px solid rgba(255,255,255,0.08)",
                        color: "var(--text-secondary)",
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="text-right flex-shrink-0 ml-4">
                  <div className="text-lg font-bold" style={{ color: "var(--cyan)" }}>
                    {service.stat}
                  </div>
                  <div className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>
                    {service.statLabel}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
