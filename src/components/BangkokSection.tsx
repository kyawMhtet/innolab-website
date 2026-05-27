"use client";
import { useEffect, useRef } from "react";
import { useLocale } from "./LocaleContext";

export default function BangkokSection() {
  const ref = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const { t } = useLocale();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach(
          (e) => e.isIntersecting && e.target.classList.add("visible")
        ),
      { threshold: 0.12 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Scroll-based parallax on the hero image
  useEffect(() => {
    const onScroll = () => {
      if (!imgRef.current || !ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const progress = rect.top / (window.innerHeight + rect.height);
      const offset = progress * 50;
      imgRef.current.style.transform = `scale(1.12) translateY(${offset}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="bangkok"
      className="relative overflow-hidden py-0"
      ref={ref}
      style={{ background: "var(--bg-dark)" }}
    >
      <div className="flex flex-col lg:flex-row min-h-[560px] lg:min-h-[620px]">

        {/* ── LEFT: Image Panel ── */}
        <div className="reveal relative w-full lg:w-[52%] h-[320px] sm:h-[400px] lg:h-auto overflow-hidden">
          {/* Main photo */}
          <img
            ref={imgRef}
            src="/images/bangkok-hero.png"
            alt="Bangkok, Thailand — Wat Arun at golden hour"
            className="absolute inset-0 w-full h-full object-cover object-center"
            style={{ transform: "scale(1.12)", willChange: "transform" }}
          />

          {/* Fade-right gradient so text side bleeds in */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to right, transparent 55%, var(--bg-dark) 100%)",
            }}
          />
          {/* Subtle bottom darkening */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(to top, var(--bg-dark) 0%, transparent 35%)",
            }}
          />

          {/* Floating location badge */}
          <div
            className="absolute bottom-6 left-6 flex items-center gap-2.5 rounded-xl px-4 py-2.5"
            style={{
              background: "rgba(15,15,15,0.75)",
              backdropFilter: "blur(16px)",
              border: "1px solid rgba(255,186,0,0.22)",
              animation: "float-badge 3.5s ease-in-out infinite",
            }}
          >
            {/* Pulsing dot */}
            <span className="relative flex h-2.5 w-2.5">
              <span
                className="absolute inline-flex h-full w-full rounded-full opacity-75"
                style={{
                  background: "var(--yellow)",
                  animation: "ping 1.6s cubic-bezier(0,0,0.2,1) infinite",
                }}
              />
              <span
                className="relative inline-flex rounded-full h-2.5 w-2.5"
                style={{ background: "var(--yellow)" }}
              />
            </span>
            <span
              className="font-mono text-xs tracking-widest uppercase"
              style={{ color: "var(--yellow)" }}
            >
              Bangkok, Thailand
            </span>
          </div>

        </div>

        {/* ── RIGHT: Content Panel ── */}
        <div
          className="relative flex flex-col justify-center w-full lg:w-[48%] px-6 sm:px-10 lg:pl-14 lg:pr-10 xl:pr-16 py-14 sm:py-16 lg:py-20"
        >
          {/* Subtle decorative glow behind text */}
          <div
            className="absolute pointer-events-none"
            style={{
              width: 420,
              height: 420,
              top: "50%",
              left: "10%",
              transform: "translate(-50%, -50%)",
              background:
                "radial-gradient(circle, rgba(255,186,0,0.06) 0%, transparent 70%)",
              borderRadius: "50%",
            }}
          />

          <div className="relative z-10 max-w-[640px]">
            {/* Badge */}
            <div className="reveal mb-5 sm:mb-6">
              <span className="badge">{t.bangkok.badge}</span>
            </div>

            {/* Headline */}
            <div className="reveal mb-6 sm:mb-7">
              <h2
                className="font-extrabold leading-[1.05]"
                style={{ fontSize: "clamp(2rem, 4.5vw, 3.6rem)" }}
              >
                {t.bangkok.heading1}
                <br />
                <span style={{ color: "var(--yellow)" }}>
                  {t.bangkok.headingAccent}
                </span>
              </h2>
            </div>

            {/* Description */}
            <div className="reveal mb-8 sm:mb-10">
              <p
                className="leading-relaxed text-sm sm:text-base lg:text-[1.05rem] max-w-[480px]"
                style={{ color: "var(--text-secondary)" }}
              >
                {t.bangkok.para}
              </p>
            </div>

            {/* Stats row */}
            <div className="reveal flex flex-wrap gap-5 sm:gap-8 mb-10 sm:mb-12">
              {t.bangkok.stats.map((s) => (
                <div key={s.label} className="flex flex-col gap-0.5">
                  <span
                    className="text-2xl sm:text-3xl font-extrabold leading-none"
                    style={{ color: "var(--yellow)" }}
                  >
                    {s.val}
                  </span>
                  <span
                    className="font-mono text-[0.65rem] tracking-widest uppercase"
                    style={{ color: "var(--text-secondary)" }}
                  >
                    {s.label}
                  </span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="reveal flex flex-col sm:flex-row gap-3 sm:gap-4">
              <a href="#services" className="btn-primary justify-center">
                {t.bangkok.ctaPrimary}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a href="#contact" className="btn-outline justify-center">
                {t.bangkok.ctaSecondary}
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* ── Separator line ── */}
      <div
        className="w-full h-px"
        style={{
          background:
            "linear-gradient(to right, transparent, var(--border) 30%, var(--border) 70%, transparent)",
        }}
      />

      <style jsx>{`
        @keyframes float-badge {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-6px); }
        }
        @keyframes ping {
          75%, 100% { transform: scale(2); opacity: 0; }
        }
      `}</style>
    </section>
  );
}
