"use client";
import { useLocale } from "./LocaleContext";
import { useTheme } from "./ThemeContext";
import Particles from "./Particles";

export default function Hero() {
  const { t } = useLocale();
  const { theme } = useTheme();

  const colors = theme === "dark"
    ? ["#FFBA00", "#FFD54F", "#5b8def", "#8b5cf6"]
    : ["#D4920A", "#E6A800", "#1d4ed8", "#4f46e5"];

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden px-5 sm:px-8"
      style={{ paddingTop: "80px" }}
    >
      {/* Particles background - key forces remount on theme change so WebGL buffers reinitialize */}
      <div key={theme} style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <Particles
          particleCount={400}
          particleSpread={10}
          speed={0.1}
          particleColors={colors}
          moveParticlesOnHover
          particleHoverFactor={0.5}
          alphaParticles
          particleBaseSize={80}
          sizeRandomness={1.2}
          cameraDistance={22}
          pixelRatio={1}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto text-center animate-stagger">
        <div className="flex justify-center mb-6 sm:mb-8">
          <span className="badge">{t.hero.badge}</span>
        </div>
        <h1
          className="font-extrabold tracking-tight mb-5 sm:mb-6"
          style={{ fontSize: "clamp(2.4rem, 8vw, 7rem)", lineHeight: 1.05 }}
        >
          {t.hero.headline1}{" "}
          <span style={{ fontStyle: "italic", color: "var(--yellow)", fontWeight: 800 }}>
            {t.hero.headlineItalic}
          </span>{" "}
          {t.hero.headline2}
          <br className="hidden sm:block" />
          {" "}{t.hero.headline3}
          <br className="hidden sm:block" />
          {" "}{t.hero.headline4}
        </h1>
        <p
          className="mx-auto mb-8 sm:mb-10 leading-relaxed text-sm sm:text-base lg:text-lg"
          style={{ color: "var(--text-secondary)", maxWidth: "560px" }}
        >
          {t.hero.sub}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-stretch sm:items-center mb-12 sm:mb-16">
          <a href="#contact" className="btn-primary justify-center">
            {t.hero.ctaPrimary}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a href="#process" className="btn-outline justify-center">
            {t.hero.ctaSecondary}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>
        <div className="flex flex-col items-center gap-2">
          <span
            className="font-mono text-xs tracking-widest uppercase"
            style={{ color: "var(--text-secondary)" }}
          >
            {t.hero.scroll}
          </span>
          <div
            className="w-px h-10 sm:h-12"
            style={{
              background: "linear-gradient(to bottom, var(--yellow), transparent)",
              animation: "scroll-line 2s ease-in-out infinite",
            }}
          />
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll-line {
          0%  { opacity: 0; transform: scaleY(0); transform-origin: top; }
          50% { opacity: 1; transform: scaleY(1); }
          100%{ opacity: 0; transform: translateY(20px); }
        }
      `}</style>
    </section>
  );
}
