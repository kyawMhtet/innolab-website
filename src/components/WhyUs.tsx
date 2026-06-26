"use client";
import { useLocale } from "./LocaleContext";

const icons = [
  // Growth - trending up
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M23 6l-9.5 9.5-5-5L1 18" /><path d="M17 6h6v6" /></svg>,
  // Pricing - tag
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z" /><line x1="7" y1="7" x2="7.01" y2="7" /></svg>,
  // Ownership - key
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 2l-2 2m-7.61 7.61a5.5 5.5 0 11-7.778 7.778 5.5 5.5 0 017.777-7.777zm0 0L15.5 7.5m0 0l3 3L22 7l-3-3m-3.5 3.5L19 4" /></svg>,
  // One team - users
  <svg key="4" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" /></svg>,
];

export default function WhyUs() {
  const { t } = useLocale();

  return (
    <section id="why" className="py-16 sm:py-20 lg:py-24 relative px-5 sm:px-8 lg:px-12" style={{ overflow: "visible" }}>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-10 sm:mb-16 lg:mb-20" data-aos="fade-up">
          <span className="badge">{t.whyUs.badge}</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mt-5 sm:mt-6">
            <h2 className="font-extrabold leading-none" style={{ fontSize: "clamp(2rem, 7vw, 5rem)" }}>
              {t.whyUs.heading1}{" "}
              <span className="shimmer-text" style={{ fontStyle: "italic", fontWeight: 800 }}>{t.whyUs.headingItalic}</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "360px" }} className="text-sm leading-relaxed">{t.whyUs.sub}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {t.whyUs.items.map((item, i) => (
            <div key={item.title} className="glow-card tilt-card rounded-2xl p-6 sm:p-7 flex flex-col" data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="icon-box w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 mb-5"
                style={{ background: "rgba(91,141,239,0.1)", color: "var(--yellow)", border: "1px solid rgba(91,141,239,0.2)" }}>
                {icons[i]}
              </div>
              <h3 className="text-base sm:text-lg font-bold leading-tight mb-2.5">{item.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
