"use client";
import { useLocale } from "./LocaleContext";

export default function Partners() {
  const { t } = useLocale();
  const partners = [
    "Shopify", "Webflow", "Next.js", "React", "Figma",
    "Meta Ads", "Google Ads", "Framer", "Vercel", "Tailwind CSS",
    "Shopify", "Webflow", "Next.js", "React", "Figma",
    "Meta Ads", "Google Ads", "Framer", "Vercel", "Tailwind CSS",
  ];

  return (
    <section className="py-10 sm:py-14 relative" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", overflow: "hidden" }}>
      <p className="text-center mb-6 text-xs font-mono tracking-widest uppercase px-4" style={{ color: "var(--text-secondary)" }}>
        {t.partners.title}
      </p>
      <div style={{ overflow: "hidden", width: "100%" }}>
        <div style={{ position: "relative" }}>
          <div className="absolute left-0 top-0 bottom-0 w-10 sm:w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to right, var(--bg-dark), transparent)" }} />
          <div className="absolute right-0 top-0 bottom-0 w-10 sm:w-20 z-10 pointer-events-none" style={{ background: "linear-gradient(to left, var(--bg-dark), transparent)" }} />
          <div className="marquee-track flex gap-8 sm:gap-12" style={{ width: "max-content" }}>
            {partners.map((p, i) => (
              <span key={i} className="text-xs sm:text-sm font-bold tracking-widest uppercase flex-shrink-0"
                style={{ color: i % 3 === 0 ? "var(--yellow)" : "var(--text-secondary)" }}>
                {p}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}