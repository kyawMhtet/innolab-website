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
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
      style={{ paddingTop: "80px" }}
    >
      {/* Background blobs */}
      <div
        className="blob"
        style={{
          width: "600px",
          height: "600px",
          background: "var(--cyan)",
          top: "-100px",
          right: "-200px",
          opacity: 0.07,
        }}
      />
      <div
        className="blob"
        style={{
          width: "400px",
          height: "400px",
          background: "#0066ff",
          bottom: "100px",
          left: "-100px",
          opacity: 0.06,
        }}
      />

      {/* Grid lines */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center animate-stagger">
        {/* Badge */}
        <div className="flex justify-center mb-8">
          <span className="badge">Available for projects · 2025</span>
        </div>

        {/* Headline */}
        <h1
          className="font-extrabold leading-none tracking-tight mb-6"
          style={{ fontSize: "clamp(3rem, 8vw, 7rem)", lineHeight: 1.0 }}
        >
          Elevating{" "}
          <span
            style={{
              fontStyle: "italic",
              color: "var(--cyan)",
              fontWeight: 400,
            }}
          >
            visions
          </span>{" "}
          into
          <br />
          extraordinary digital
          <br />
          reality.
        </h1>

        {/* Subheadline */}
        <p
          className="mx-auto mb-10 leading-relaxed"
          style={{
            color: "var(--text-secondary)",
            maxWidth: "580px",
            fontSize: "1.1rem",
          }}
        >
          A high-performance creative team for businesses seeking to dominate
          the digital landscape — websites, apps, marketing & brand design.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap gap-4 justify-center mb-16">
          <a href="#contact" className="btn-primary">
            Start Your Journey
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
          <a href="#process" className="btn-outline">
            Our Methodology
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

        {/* Scroll indicator */}
        <div className="flex flex-col items-center gap-2">
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--text-secondary)" }}
          >
            Scroll
          </span>
          <div
            className="w-px h-12"
            style={{
              background:
                "linear-gradient(to bottom, var(--cyan), transparent)",
              animation: "scroll-line 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      {/* Floating UI mockup cards */}
      <div
        className="absolute left-8 top-1/2 -translate-y-1/2 hidden xl:block"
        style={{
          animation: "float 6s ease-in-out infinite",
        }}
      >
        <div
          className="glow-card rounded-2xl p-4 w-52"
          style={{ opacity: 0.7 }}
        >
          <div className="flex items-center gap-2 mb-3">
            <div
              className="w-2 h-2 rounded-full"
              style={{ background: "var(--cyan)" }}
            />
            <span
              className="text-xs font-mono"
              style={{ color: "var(--text-secondary)" }}
            >
              ACTIVE PROJECT
            </span>
          </div>
          <div className="space-y-2">
            <div
              className="h-2 rounded-full"
              style={{
                background: "rgba(255,255,255,0.1)",
                width: "80%",
              }}
            />
            <div
              className="h-2 rounded-full"
              style={{
                background: "rgba(0,245,212,0.3)",
                width: "60%",
              }}
            />
            <div
              className="h-2 rounded-full"
              style={{
                background: "rgba(255,255,255,0.1)",
                width: "90%",
              }}
            />
          </div>
        </div>
      </div>

      <div
        className="absolute right-8 top-1/3 hidden xl:block"
        style={{
          animation: "float 8s ease-in-out infinite reverse",
        }}
      >
        <div
          className="glow-card rounded-2xl p-4 w-44"
          style={{ opacity: 0.6 }}
        >
          <div
            className="text-3xl font-bold mb-1"
            style={{ color: "var(--cyan)" }}
          >
            +120%
          </div>
          <div
            className="text-xs font-mono"
            style={{ color: "var(--text-secondary)" }}
          >
            AVG CLIENT GROWTH
          </div>
          <svg
            className="mt-3"
            width="100%"
            height="40"
            viewBox="0 0 100 40"
            fill="none"
          >
            <polyline
              points="0,35 20,28 40,20 60,10 80,15 100,5"
              stroke="var(--cyan)"
              strokeWidth="2"
              fill="none"
            />
            <polyline
              points="0,35 20,28 40,20 60,10 80,15 100,5 100,40 0,40"
              fill="rgba(0,245,212,0.1)"
            />
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
