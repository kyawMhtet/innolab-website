"use client";
import { useEffect, useRef } from "react";
import { useLocale } from "./LocaleContext";

const tagColors = ["var(--yellow)", "#ff6b9d", "var(--blue)", "#818cf8"];
const projectColors = ["#FFC107", "#ff6b9d", "#2563EB", "#818cf8"];

export default function Work() {
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
    <section id="work" className="py-20 sm:py-28 lg:py-32 relative px-5 sm:px-8 lg:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10 sm:mb-14 lg:mb-16">
          <div>
            <span className="badge">{t.work.badge}</span>
            <h2 className="font-extrabold mt-4 sm:mt-6 leading-none" style={{ fontSize: "clamp(2rem, 7vw, 5rem)" }}>
              {t.work.heading1}<br />
              <span style={{ color: "var(--yellow)", fontStyle: "italic", fontWeight: 400 }}>{t.work.headingItalic}</span>
            </h2>
          </div>
          <a href="#contact" className="btn-outline w-fit flex-shrink-0">{t.work.viewAll}</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {t.work.projects.map((project, i) => (
            <div key={i} className="reveal glow-card rounded-2xl overflow-hidden group cursor-pointer" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="h-32 sm:h-44 relative flex items-center justify-center"
                style={{ background: `linear-gradient(135deg, ${projectColors[i]}12, ${projectColors[i]}04)` }}>
                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center text-2xl sm:text-3xl font-bold opacity-25 group-hover:opacity-50 transition-opacity duration-300"
                  style={{ background: projectColors[i], color: "#080a0f" }}>
                  {project.title[0]}
                </div>
                <div className="absolute top-3 left-3 sm:top-4 sm:left-4 text-xs font-mono px-2 sm:px-3 py-1 rounded-full"
                  style={{ background: `${projectColors[i]}25`, color: tagColors[i], border: `1px solid ${projectColors[i]}50` }}>
                  {project.tag}
                </div>
              </div>
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between mb-2 sm:mb-3">
                  <div>
                    <h3 className="text-base sm:text-xl font-bold mb-0.5 sm:mb-1">{project.title}</h3>
                    <span className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>{project.client}</span>
                  </div>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"
                    className="opacity-25 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 mt-1"
                    style={{ color: "var(--yellow)" }}>
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>{project.desc}</p>
                <div className="flex gap-5 sm:gap-8">
                  {project.stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-lg sm:text-xl font-bold" style={{ color: tagColors[i] }}>{s.val}</div>
                      <div className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>{s.label}</div>
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