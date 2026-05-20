"use client";
import { useEffect, useRef } from "react";
import { useLocale } from "./LocaleContext";

const PARTNERS = [
  "Next.js", "React", "Tailwind CSS", "Figma", "Vercel",
  "Laravel", "MySQL", "React Native", "Expo", "Meta Ads",
  "Google Ads", "Framer", "Webflow", "Shopify", "AWS S3",
];

export default function Partners() {
  const { t } = useLocale();
  const innerRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const measure = () => {
      if (!firstSetRef.current || !innerRef.current) return;
      const w = firstSetRef.current.scrollWidth;
      innerRef.current.style.setProperty("--marquee-w", `${w}px`);
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <>
      <style>{`
        @keyframes p-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(-1 * var(--marquee-w, 0px))); }
        }
        .p-marquee-inner {
          display: flex;
          width: max-content;
          animation: p-marquee 22s linear infinite;
        }
      `}</style>

      <section className="py-10 sm:py-14 relative" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <p className="text-center mb-6 text-xs font-mono tracking-widest uppercase px-4" style={{ color: "var(--text-secondary)" }}>
          {t.partners.title}
        </p>
        <div style={{
          overflow: "hidden",
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}>
          <div className="p-marquee-inner" ref={innerRef}>
            {/* first set - measured */}
            <div ref={firstSetRef} style={{ display: "flex", alignItems: "center" }}>
              {PARTNERS.map((p, i) => (
                <span key={i} className="text-xs sm:text-sm font-bold tracking-widest uppercase flex-shrink-0"
                  style={{ paddingLeft: "24px", paddingRight: "24px", color: i % 3 === 0 ? "var(--yellow)" : "var(--text-secondary)" }}>
                  {p}
                </span>
              ))}
            </div>
            {/* duplicate - seamless loop */}
            <div aria-hidden="true" style={{ display: "flex", alignItems: "center" }}>
              {PARTNERS.map((p, i) => (
                <span key={i} className="text-xs sm:text-sm font-bold tracking-widest uppercase flex-shrink-0"
                  style={{ paddingLeft: "24px", paddingRight: "24px", color: i % 3 === 0 ? "var(--yellow)" : "var(--text-secondary)" }}>
                  {p}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
