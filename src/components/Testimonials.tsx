"use client";
import { useEffect, useRef } from "react";
import { useLocale } from "./LocaleContext";

function TestimonialCard({ item }: { item: { quote: string; name: string; role: string; company: string } }) {
  return (
    <div className="glow-card rounded-2xl p-6 flex flex-col gap-4"
      style={{ width: "360px", flexShrink: 0 }}>
      <svg width="24" height="18" viewBox="0 0 28 20" fill="none" aria-hidden="true">
        <path d="M0 20V12.667C0 5.556 3.556 1.333 10.667 0l1.866 2.4C9.2 3.289 7.2 5.156 6.667 8H12V20H0zm16 0V12.667C16 5.556 19.556 1.333 26.667 0l1.866 2.4C25.2 3.289 23.2 5.156 22.667 8H28V20H16z"
          fill="var(--yellow)" fillOpacity="0.3" />
      </svg>
      <p className="text-sm leading-relaxed flex-1" style={{ color: "var(--text-secondary)" }}>
        &ldquo;{item.quote}&rdquo;
      </p>
      <div className="flex items-center gap-3 pt-2" style={{ borderTop: "1px solid var(--border)" }}>
        <div className="w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0"
          style={{ background: "rgba(91,141,239,0.12)", color: "var(--yellow)", border: "1px solid rgba(91,141,239,0.25)" }}>
          {item.name.charAt(0)}
        </div>
        <div>
          <div className="font-bold text-sm">{item.name}</div>
          <div className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>
            {item.role}{item.company ? ` · ${item.company}` : ""}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const innerRef = useRef<HTMLDivElement>(null);
  const firstSetRef = useRef<HTMLDivElement>(null);
  const { t } = useLocale();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    sectionRef.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

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

  const items = t.testimonials.items;

  return (
    <>
      <style>{`
        @keyframes t-marquee {
          from { transform: translateX(0); }
          to   { transform: translateX(calc(-1 * var(--marquee-w, 0px))); }
        }
        .t-marquee-inner {
          display: flex;
          width: max-content;
          animation: t-marquee 28s linear infinite;
        }
        .t-marquee-inner:hover { animation-play-state: paused; }
      `}</style>

      <section className="py-16 sm:py-20 lg:py-24 relative" ref={sectionRef}>
        <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
          <div className="reveal text-center mb-12 sm:mb-16">
            <span className="badge">{t.testimonials.badge}</span>
            <h2 className="font-extrabold mt-5 leading-tight" style={{ fontSize: "clamp(1.8rem, 6vw, 4rem)" }}>
              {t.testimonials.heading1}{" "}
              <span style={{ color: "var(--yellow)", fontStyle: "italic", fontWeight: 800 }}>{t.testimonials.headingItalic}</span>
            </h2>
          </div>
        </div>

        <div style={{
          overflow: "hidden",
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}>
          <div className="t-marquee-inner" ref={innerRef}>
            {/* first set - measured */}
            <div ref={firstSetRef} style={{ display: "flex" }}>
              {items.map((item, i) => (
                <div key={i} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                  <TestimonialCard item={item} />
                </div>
              ))}
            </div>
            {/* duplicate - seamless loop */}
            <div aria-hidden="true" style={{ display: "flex" }}>
              {items.map((item, i) => (
                <div key={i} style={{ paddingLeft: "10px", paddingRight: "10px" }}>
                  <TestimonialCard item={item} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
