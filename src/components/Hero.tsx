"use client";
import { useEffect, useRef } from "react";

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    if (!hero) return;
    const onMouseMove = (e: MouseEvent) => {
      const rect = hero.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      hero.style.setProperty("--mouse-x", `${x}%`);
      hero.style.setProperty("--mouse-y", `${y}%`);
    };
    hero.addEventListener("mousemove", onMouseMove);
    return () => hero.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-5 sm:px-8"
      style={{ paddingTop: "80px" }}
    >
      {/* Blobs */}
      <div className="blob" style={{ width: "40vw", height: "40vw", minWidth: "200px", background: "var(--yellow)", top: "-80px", right: "-100px", opacity: 0.06 }} />
      <div className="blob" style={{ width: "35vw", height: "35vw", minWidth: "160px", background: "var(--blue)", bottom: "80px", left: "-80px", opacity: 0.05 }} />

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.015) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.015) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center animate-stagger">
        {/* Badge */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <span className="badge">Available for projects · 2026</span>
        </div>

        {/* Headline */}
        <h1
          className="font-extrabold tracking-tight mb-5 sm:mb-6"
          style={{ fontSize: "clamp(2.4rem, 8vw, 7rem)", lineHeight: 1.05 }}
        >
          Elevating{" "}
          <span style={{ fontStyle: "italic", color: "var(--yellow)", fontWeight: 400 }}>visions</span>{" "}
          into
          <br className="hidden sm:block" />
          {" "}extraordinary digital
          <br className="hidden sm:block" />
          {" "}reality.
        </h1>

        {/* Subheadline */}
        <p
          className="mx-auto mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base lg:text-lg"
          style={{ color: "var(--text-secondary)", maxWidth: "560px" }}
        >
          A high-performance creative team for businesses seeking to dominate
          the digital landscape — websites, apps, marketing &amp; brand design.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-12 sm:mb-16">
          <a href="#contact" className="btn-primary justify-center">
            Start Your Journey
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#process" className="btn-outline justify-center">
            Our Methodology
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2">
          <span className="font-mono text-xs tracking-widest uppercase" style={{ color: "var(--text-secondary)" }}>Scroll</span>
          <div className="w-px h-10 sm:h-12"
            style={{ background: "linear-gradient(to bottom, var(--yellow), transparent)", animation: "scroll-line 2s ease-in-out infinite" }} />
        </div>
      </div>

      {/* Floating cards — xl only */}
      <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden xl:block" style={{ animation: "float 6s ease-in-out infinite" }}>
        <div className="glow-card rounded-2xl p-4 w-48" style={{ opacity: 0.7 }}>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-2 h-2 rounded-full" style={{ background: "var(--yellow)" }} />
            <span className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>ACTIVE PROJECT</span>
          </div>
          <div className="space-y-2">
            {[80, 60, 90].map((w, i) => (
              <div key={i} className="h-1.5 rounded-full" style={{ width: `${w}%`, background: i === 1 ? "rgba(255,193,7,0.4)" : "rgba(255,255,255,0.1)" }} />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute right-6 top-1/3 hidden xl:block" style={{ animation: "float 8s ease-in-out infinite reverse" }}>
        <div className="glow-card rounded-2xl p-4 w-44" style={{ opacity: 0.6 }}>
          <div className="text-3xl font-bold mb-1" style={{ color: "var(--yellow)" }}>+120%</div>
          <div className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>AVG CLIENT GROWTH</div>
          <svg className="mt-3" width="100%" height="36" viewBox="0 0 100 36" fill="none">
            <polyline points="0,32 20,25 40,18 60,8 80,13 100,3" stroke="var(--yellow)" strokeWidth="2" fill="none" />
            <polyline points="0,32 20,25 40,18 60,8 80,13 100,3 100,36 0,36" fill="rgba(255,193,7,0.08)" />
          </svg>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(-50%) translateY(0px); }
          50% { transform: translateY(-50%) translateY(-12px); }
        }
        @keyframes scroll-line {
          0% { opacity: 0; transform: scaleY(0); transform-origin: top; }
          50% { opacity: 1; transform: scaleY(1); }
          100% { opacity: 0; transform: translateY(20px); }
        }
      `}</style>
    </section>
  );
}
