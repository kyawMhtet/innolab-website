"use client";
import { useLocale } from "./LocaleContext";

const icons = [
  // Retail - shopping bag
  <svg key="1" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 01-8 0" /></svg>,
  // Health - heart pulse
  <svg key="2" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" /></svg>,
  // Hospitality - building/bed
  <svg key="3" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 20v-8a2 2 0 012-2h16a2 2 0 012 2v8" /><path d="M2 16h20M6 10V6a2 2 0 012-2h8a2 2 0 012 2v4" /></svg>,
  // Construction - hard hat / building
  <svg key="4" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6" /></svg>,
  // Education - graduation cap
  <svg key="5" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 10L12 5 2 10l10 5 10-5z" /><path d="M6 12v5c0 1 2.5 3 6 3s6-2 6-3v-5" /></svg>,
  // Startups - rocket
  <svg key="6" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 00-2.91-.09z" /><path d="M12 15l-3-3a22 22 0 012-3.95A12.88 12.88 0 0122 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 01-4 2z" /><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" /></svg>,
];

export default function Industries() {
  const { t } = useLocale();

  return (
    <section id="industries" className="py-16 sm:py-20 lg:py-24 relative px-5 sm:px-8 lg:px-12">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-10 sm:mb-16 lg:mb-20" data-aos="fade-up">
          <span className="badge">{t.industries.badge}</span>
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 mt-5 sm:mt-6">
            <h2 className="font-extrabold leading-none" style={{ fontSize: "clamp(2rem, 7vw, 5rem)" }}>
              {t.industries.heading1}{" "}
              <span className="shimmer-text" style={{ fontStyle: "italic", fontWeight: 800 }}>{t.industries.headingItalic}</span>
            </h2>
            <p style={{ color: "var(--text-secondary)", maxWidth: "360px" }} className="text-sm leading-relaxed">{t.industries.sub}</p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {t.industries.items.map((item, i) => (
            <div key={item.name} className="glow-card tilt-card rounded-2xl p-6 sm:p-7 flex items-start gap-4" data-aos="fade-up" data-aos-delay={(i % 3) * 100}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0"
                style={{ background: "rgba(91,141,239,0.1)", color: "var(--yellow)", border: "1px solid rgba(91,141,239,0.2)" }}>
                {icons[i]}
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold leading-tight mb-1.5">{item.name}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
