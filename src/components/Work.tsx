"use client";
import { useEffect, useRef } from "react";

const projects = [
  {
    tag: "Web Platform",
    tagColor: "var(--cyan)",
    title: "E-Commerce Redesign",
    client: "Retail Brand",
    desc: "Complete Shopify overhaul with custom product configurator and checkout optimization.",
    stats: [{ label: "Conversion Rate", val: "+68%" }, { label: "Load Time", val: "0.8s" }],
    color: "#00f5d4",
  },
  {
    tag: "Brand Identity",
    tagColor: "#ff6b9d",
    title: "Brand & Digital System",
    client: "Startup",
    desc: "Full brand identity from logo to UI kit — ready for launch in 4 weeks.",
    stats: [{ label: "Deliverables", val: "40+" }, { label: "Timeline", val: "4 Weeks" }],
    color: "#ff6b9d",
  },
  {
    tag: "Digital Marketing",
    tagColor: "#fbbf24",
    title: "Performance Campaign",
    client: "F&B Industry",
    desc: "Multi-channel ad strategy across Meta and Google — scaled from zero to 5K daily orders.",
    stats: [{ label: "ROAS", val: "4.2x" }, { label: "Daily Orders", val: "5K" }],
    color: "#fbbf24",
  },
  {
    tag: "App Development",
    tagColor: "#818cf8",
    title: "SaaS Dashboard",
    client: "B2B Platform",
    desc: "Real-time analytics platform with custom API integrations and role-based access.",
    stats: [{ label: "Users", val: "10K+" }, { label: "Uptime", val: "99.9%" }],
    color: "#818cf8",
  },
];

export default function Work() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="work" className="py-32 relative" ref={ref}>
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="reveal flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
          <div>
            <span className="badge mb-6">Our Artifacts</span>
            <h2
              className="font-extrabold mt-6 leading-none"
              style={{ fontSize: "clamp(2.5rem, 6vw, 5rem)" }}
            >
              SELECTED
              <br />
              <span style={{ color: "var(--cyan)", fontStyle: "italic", fontWeight: 400 }}>Work.</span>
            </h2>
          </div>
          <a href="#contact" className="btn-outline w-fit">
            View All Projects →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="reveal glow-card rounded-2xl overflow-hidden group cursor-pointer"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Project visual area */}
              <div
                className="h-48 relative flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${project.color}10, ${project.color}03)` }}
              >
                <div
                  className="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl font-bold opacity-30 group-hover:opacity-60 transition-opacity"
                  style={{ background: project.color, color: "#080c10" }}
                >
                  {project.title[0]}
                </div>
                <div
                  className="absolute top-4 left-4 text-xs font-mono px-3 py-1 rounded-full"
                  style={{
                    background: `${project.color}20`,
                    color: project.tagColor,
                    border: `1px solid ${project.color}40`,
                  }}
                >
                  {project.tag}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <span className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>
                      {project.client}
                    </span>
                  </div>
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="opacity-30 group-hover:opacity-100 transition-opacity group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    style={{ color: "var(--cyan)", flexShrink: 0 }}
                  >
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </div>

                <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)" }}>
                  {project.desc}
                </p>

                <div className="flex gap-6">
                  {project.stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-xl font-bold" style={{ color: project.tagColor }}>
                        {s.val}
                      </div>
                      <div className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
