"use client";
import { useEffect, useRef } from "react";

const stages = [
  {
    num: "01",
    title: "Intelligence & Discovery",
    desc: "We begin by dissecting your market positioning and user pain points. This data-driven phase ensures every technical decision aligns with business ROI.",
    tags: ["2 Weeks", "Market Analysis", "User Personas"],
    deliverables: ["Strategic Roadmap", "Information Architecture"],
    visual: (
      <div className="flex items-center justify-center h-32">
        <div
          className="w-20 h-20 rounded-2xl flex items-center justify-center text-4xl font-bold"
          style={{ background: "rgba(0,245,212,0.1)", color: "var(--cyan)", border: "1px solid rgba(0,245,212,0.2)" }}
        >
          98%
        </div>
      </div>
    ),
  },
  {
    num: "02",
    title: "Architecture & Design",
    desc: "Form follows function. We translate strategy into high-fidelity wireframes and design systems that are both aesthetically elite and conversion-optimized.",
    tags: ["3-4 Weeks", "UI System", "Prototyping"],
    deliverables: ["Interactive Prototypes", "Comprehensive Design System"],
    visual: (
      <div className="flex items-center gap-3 h-32 justify-center">
        <div className="space-y-2">
          {[80, 60, 90, 50].map((w, i) => (
            <div key={i} className="h-2 rounded-full" style={{ width: `${w}px`, background: i === 0 ? "var(--cyan)" : "rgba(255,255,255,0.1)" }} />
          ))}
        </div>
        <div className="w-12 h-16 rounded-lg" style={{ background: "rgba(0,245,212,0.15)", border: "1px solid rgba(0,245,212,0.2)" }} />
      </div>
    ),
  },
  {
    num: "03",
    title: "Engineering & Core Build",
    desc: "Our development team converts designs into pixel-perfect, scalable code using the latest tech stacks. We focus on speed, security, and future-proof architecture.",
    tags: ["6-10 Weeks", "API Design", "Front-End"],
    deliverables: ["Production-Ready Code", "Integrated API Systems"],
    visual: (
      <div className="h-32 flex items-center justify-center">
        <div
          className="rounded-lg p-3 font-mono text-xs leading-relaxed"
          style={{ background: "rgba(0,245,212,0.05)", border: "1px solid rgba(0,245,212,0.15)", color: "var(--cyan)" }}
        >
          <div style={{ color: "rgba(255,255,255,0.4)" }}>{"// component.tsx"}</div>
          <div><span style={{ color: "#ff79c6" }}>export const</span> <span>Engine</span> {"= () => {"}</div>
          <div>&nbsp;&nbsp;<span style={{ color: "#ff79c6" }}>return</span> &lt;<span style={{ color: "var(--cyan)" }}>div</span>&gt;</div>
          <div>&nbsp;&nbsp;&nbsp;&nbsp;{"{children}"}</div>
          <div>&nbsp;&nbsp;&lt;/<span style={{ color: "var(--cyan)" }}>div</span>&gt;</div>
          <div>{"}"}</div>
        </div>
      </div>
    ),
  },
  {
    num: "04",
    title: "Deployment & Scaling",
    desc: "We orchestrate a seamless launch with comprehensive quality assurance and server-side optimization. Post-launch, we monitor and scale as your traffic grows.",
    tags: ["Continuous", "AWS / Vercel", "SEO Optimized"],
    deliverables: ["Optimized Performance Report", "24/7 Monitoring Dashboard"],
    visual: (
      <div className="h-32 flex flex-col items-center justify-center gap-3">
        <div
          className="w-14 h-14 rounded-full flex items-center justify-center"
          style={{ background: "rgba(0,245,212,0.15)", border: "2px solid var(--cyan)" }}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2">
            <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
          </svg>
        </div>
        <span className="text-xs font-mono" style={{ color: "var(--cyan)" }}>Live Production · Active</span>
      </div>
    ),
  },
];

export default function Process() {
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
    <section id="process" className="py-32 relative" ref={ref}>
      <div
        className="blob"
        style={{ width: "500px", height: "500px", background: "var(--cyan)", top: "20%", left: "-200px", opacity: 0.04 }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="reveal text-center mb-20">
          <span className="badge mb-6">Operational Workflow</span>
          <h2
            className="font-extrabold mt-6 leading-tight"
            style={{ fontSize: "clamp(2rem, 5vw, 4rem)" }}
          >
            A Systematic Journey
            <br />
            <span style={{ color: "var(--text-secondary)", fontWeight: 400 }}>to Digital Mastery</span>
          </h2>
          <p className="mt-4 text-sm" style={{ color: "var(--text-secondary)" }}>
            We've refined our process into a precise, four-stage evolution that bridges vision and execution.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden lg:block"
            style={{ background: "linear-gradient(to bottom, transparent, var(--cyan), transparent)" }}
          />

          <div className="space-y-12">
            {stages.map((stage, i) => (
              <div
                key={stage.num}
                className={`reveal grid lg:grid-cols-2 gap-8 items-center ${i % 2 !== 0 ? "lg:flex-row-reverse" : ""}`}
              >
                {/* Card */}
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="glow-card rounded-2xl p-8">
                    <div className="flex items-center gap-3 mb-4">
                      <span
                        className="font-mono text-xs px-3 py-1 rounded-full"
                        style={{ background: "rgba(0,245,212,0.1)", color: "var(--cyan)", border: "1px solid rgba(0,245,212,0.2)" }}
                      >
                        STAGE {stage.num}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{stage.title}</h3>
                    <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                      {stage.desc}
                    </p>

                    <div className="flex gap-2 flex-wrap mb-5">
                      {stage.tags.map((tag) => (
                        <span
                          key={tag}
                          className="text-xs font-mono px-3 py-1 rounded-full"
                          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="space-y-2">
                      {stage.deliverables.map((d) => (
                        <div key={d} className="flex items-center gap-2">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="var(--cyan)" strokeWidth="2.5">
                            <path d="M20 6L9 17l-5-5" />
                          </svg>
                          <span className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>
                            Deliverable: <span style={{ color: "var(--text-primary)" }}>{d}</span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Visual / connection */}
                <div className={`flex items-center justify-center ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <div
                    className="glow-card rounded-2xl p-6 w-full max-w-xs"
                    style={{ opacity: 0.8 }}
                  >
                    {stage.visual}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div
          className="reveal mt-24 rounded-3xl p-12 text-center"
          style={{
            background: "rgba(0,245,212,0.04)",
            border: "1px solid rgba(0,245,212,0.15)",
          }}
        >
          <h3 className="text-3xl font-bold mb-3">Ready to evolve?</h3>
          <p className="text-sm mb-8" style={{ color: "var(--text-secondary)" }}>
            Let's apply this proven methodology to your next digital venture.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <a href="#contact" className="btn-primary">Start Your Project</a>
            <a href="#work" className="btn-outline">Review Our Work</a>
          </div>
        </div>
      </div>
    </section>
  );
}
