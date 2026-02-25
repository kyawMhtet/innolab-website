"use client";
import { useEffect, useRef } from "react";

const stats = [
  { val: "4", label: "Team Members" },
  { val: "20+", label: "Projects Delivered" },
  { val: "3", label: "Countries Served" },
  { val: "100%", label: "Client Satisfaction" },
];

const team = [
  { name: "Founder & Developer", role: "Full-Stack Engineering · Strategy", initial: "F" },
  { name: "UI/UX Designer", role: "Brand Identity · Design Systems", initial: "D" },
  { name: "Digital Marketer", role: "Meta Ads · Google · SEO", initial: "M" },
  { name: "Project Manager", role: "Delivery · Client Success", initial: "P" },
];

export default function About() {
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
    <section id="about" className="py-32 relative" ref={ref}>
      <div
        className="blob"
        style={{ width: "400px", height: "400px", background: "var(--cyan)", bottom: "0", right: "-100px", opacity: 0.04 }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="reveal mb-20">
          <span className="badge mb-6">The Collective</span>
          <div className="grid lg:grid-cols-2 gap-12 items-center mt-6">
            <h2
              className="font-extrabold leading-none"
              style={{ fontSize: "clamp(2.5rem, 5vw, 4.5rem)" }}
            >
              Small team.
              <br />
              <span style={{ color: "var(--cyan)" }}>Big impact.</span>
            </h2>
            <div>
              <p className="leading-relaxed mb-6" style={{ color: "var(--text-secondary)" }}>
                Innolab Digital Solutions is a focused 4-person creative engine. We're not an agency with 50 people where your project gets handed off to a junior. You work directly with the team building your product — every day, every decision.
              </p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>
                Founded by a developer with a passion for turning business problems into elegant digital solutions, Innolab brings together design, engineering, marketing, and strategy under one roof — with none of the bloat.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-5 mb-20">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="glow-card rounded-2xl p-6 text-center"
            >
              <div
                className="text-4xl font-extrabold mb-2"
                style={{ color: "var(--cyan)" }}
              >
                {stat.val}
              </div>
              <div className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Team */}
        <div className="reveal">
          <h3 className="text-xl font-bold mb-8" style={{ color: "var(--text-secondary)" }}>
            The Team
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {team.map((member, i) => (
              <div
                key={member.name}
                className="glow-card rounded-2xl p-6"
                style={{ animationDelay: `${i * 0.1}s` }}
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center font-bold text-lg mb-4"
                  style={{
                    background: "rgba(0,245,212,0.12)",
                    color: "var(--cyan)",
                    border: "1px solid rgba(0,245,212,0.2)",
                  }}
                >
                  {member.initial}
                </div>
                <div className="font-bold mb-1">{member.name}</div>
                <div className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>
                  {member.role}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
