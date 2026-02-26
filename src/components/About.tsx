"use client";
import { useEffect, useRef } from "react";
import { useLocale } from "./LocaleContext";

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLocale();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="py-20 sm:py-28 lg:py-32 relative px-5 sm:px-8 lg:px-12" ref={ref}>
      <div className="blob" style={{ width: "40vw", height: "40vw", background: "var(--yellow)", bottom: "0", right: "-10vw", opacity: 0.04 }} />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="reveal mb-12 sm:mb-16 lg:mb-20">
          <span className="badge">{t.about.badge}</span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mt-5 sm:mt-6">
            <h2 className="font-extrabold leading-none" style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}>
              {t.about.heading1}<br />
              <span style={{ color: "var(--yellow)" }}>{t.about.heading2}</span>
            </h2>
            <div>
              <p className="leading-relaxed mb-4 text-sm sm:text-base" style={{ color: "var(--text-secondary)" }}>{t.about.para1}</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{t.about.para2}</p>
            </div>
          </div>
        </div>

        <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16 lg:mb-20">
          {t.about.stats.map((stat) => (
            <div key={stat.label} className="glow-card rounded-2xl p-4 sm:p-6 text-center">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-1.5 sm:mb-2" style={{ color: "var(--yellow)" }}>{stat.val}</div>
              <div className="text-xs font-mono leading-snug" style={{ color: "var(--text-secondary)" }}>{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="reveal">
          <h3 className="text-base sm:text-lg font-bold mb-5 sm:mb-8" style={{ color: "var(--text-secondary)" }}>{t.about.teamTitle}</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {t.about.team.map((member, i) => (
              <div key={i} className="glow-card rounded-2xl p-4 sm:p-6">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-bold text-sm sm:text-lg mb-3 sm:mb-4"
                  style={{ background: "rgba(255,193,7,0.12)", color: "var(--yellow)", border: "1px solid rgba(255,193,7,0.2)" }}>
                  {member.initial}
                </div>
                <div className="font-bold text-xs sm:text-sm lg:text-base mb-1">{member.name}</div>
                <div className="text-xs font-mono leading-relaxed" style={{ color: "var(--text-secondary)" }}>{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}