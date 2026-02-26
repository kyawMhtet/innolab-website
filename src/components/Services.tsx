"use client";
import { useEffect, useRef } from "react";
import { useLocale } from "./LocaleContext";

const icons = [
  <svg key="1" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" /><path d="M8 21h8M12 17v4" /></svg>,
  <svg key="2" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="5" y="2" width="14" height="20" rx="2" /><path d="M12 18h.01" /></svg>,
  <svg key="3" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 12h-4l-3 9L9 3l-3 9H2" /></svg>,
  <svg key="4" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>,
];

export default function Services() {
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
    <section id="services" className="py-20 sm:py-28 lg:py-32 relative px-5 sm:px-8 lg:px-12" ref={ref}>
      <div className="blob" style={{ width: "40vw", height: "40vw", background: "var(--blue)", top: "50%", right: "-10vw", transform: "translateY(-50%)", opacity: 0.05 }} />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="reveal mb-10 sm:mb-16 lg:mb-20">
          <span className="badge">{t.services.badge}</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mt-5 sm:mt-6">
            <h2 className="font-extrabold leading-none" style={{ fontSize: "clamp(2rem, 7vw, 5rem)" }}>
              {t.services.heading1}{" "}
              <span style={{ color: "var(--yellow)", fontStyle: "italic", fontWeight: 400 }}>{t.services.headingItalic}</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "340px" }} className="text-sm leading-relaxed">{t.services.sub}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {t.services.items.map((service, i) => (
            <div key={service.num} className="reveal glow-card rounded-2xl p-5 sm:p-7 lg:p-8 cursor-pointer" style={{ animationDelay: `${i * 0.1}s` }}>
              <div className="flex items-start justify-between mb-4 sm:mb-5">
                <div>
                  <span className="font-mono text-xs mb-2 block" style={{ color: "var(--text-secondary)" }}>{service.num}</span>
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-bold leading-tight">{service.title}</h3>
                </div>
                <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center flex-shrink-0 ml-3"
                  style={{ background: "rgba(255,193,7,0.1)", color: "var(--yellow)", border: "1px solid rgba(255,193,7,0.2)" }}>
                  {icons[i]}
                </div>
              </div>
              <p className="text-sm leading-relaxed mb-4 sm:mb-5" style={{ color: "var(--text-secondary)" }}>{service.desc}</p>
              <div className="flex flex-wrap items-end justify-between gap-3">
                <div className="flex gap-1.5 sm:gap-2 flex-wrap">
                  {service.tags.map((tag) => (
                    <span key={tag} className="text-xs font-mono px-2 sm:px-3 py-1 rounded-full"
                      style={{ background: "rgba(255,255,255,0.05)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}>{tag}</span>
                  ))}
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-base sm:text-lg font-bold" style={{ color: "var(--yellow)" }}>{service.stat}</div>
                  <div className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>{service.statLabel}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}