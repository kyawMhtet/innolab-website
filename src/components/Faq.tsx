"use client";
import { useState } from "react";
import { useLocale } from "./LocaleContext";

export default function Faq() {
  const { t } = useLocale();
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="py-16 sm:py-20 lg:py-24 relative px-5 sm:px-8 lg:px-12">
      <div className="max-w-3xl mx-auto relative z-10">
        <div className="mb-10 sm:mb-14 text-center" data-aos="fade-up">
          <div className="flex justify-center">
            <span className="badge">{t.faq.badge}</span>
          </div>
          <h2 className="font-extrabold leading-none mt-5 sm:mt-6" style={{ fontSize: "clamp(2rem, 7vw, 4.5rem)" }}>
            {t.faq.heading1}{" "}
            <span style={{ color: "var(--yellow)", fontStyle: "italic", fontWeight: 800 }}>{t.faq.headingItalic}</span>
          </h2>
          <p className="text-sm leading-relaxed mt-4 mx-auto" style={{ color: "var(--text-secondary)", maxWidth: "440px" }}>{t.faq.sub}</p>
        </div>

        <div className="flex flex-col gap-3" data-aos="fade-up" data-aos-delay={100}>
          {t.faq.items.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="glow-card rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 text-left p-5 sm:p-6"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base font-bold leading-snug">{item.q}</span>
                  <svg
                    width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                    className="flex-shrink-0"
                    style={{ color: "var(--yellow)", transform: isOpen ? "rotate(180deg)" : "none", transition: "transform 0.3s ease" }}
                  >
                    <path d="M6 9l6 6 6-6" />
                  </svg>
                </button>
                <div style={{ maxHeight: isOpen ? "300px" : "0", overflow: "hidden", transition: "max-height 0.35s ease" }}>
                  <p className="text-sm leading-relaxed px-5 sm:px-6 pb-5 sm:pb-6" style={{ color: "var(--text-secondary)" }}>
                    {item.a}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
