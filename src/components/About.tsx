"use client";
import { useEffect, useRef, useState } from "react";
import { useLocale } from "./LocaleContext";

function AnimatedStat({ val, isVisible }: { val: string; isVisible: boolean }) {
  const [display, setDisplay] = useState("0");
  const hasRun = useRef(false);

  useEffect(() => {
    if (!isVisible || hasRun.current) return;
    hasRun.current = true;
    const match = val.match(/^([\d.]+)(.*)$/);
    if (!match) { setDisplay(val); return; }
    const num = parseFloat(match[1]);
    const suffix = match[2] ?? "";
    const duration = 1400;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = Number.isInteger(num)
        ? Math.round(eased * num)
        : Math.round(eased * num * 10) / 10;
      setDisplay(`${current}${suffix}`);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isVisible, val]);

  return <>{display}</>;
}

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsVisible, setStatsVisible] = useState(false);
  const { t } = useLocale();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!statsRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsVisible(true); observer.disconnect(); } },
      { threshold: 0.35 }
    );
    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" data-theme="dark" className="py-16 sm:py-20 lg:py-24 relative px-5 sm:px-8 lg:px-12 bg-cover bg-center bg-no-repeat overflow-hidden" ref={ref} style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1552465011-b4e21bf6e79a?q=80&w=2000&auto=format&fit=crop")' }}>
      {/* Dark overlay to ensure text remains readable */}
      <div className="absolute inset-0 bg-[#0d1117]/50 z-0"></div>
      {/* Subtle gradient overlay for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0d1117] via-[#0d1117]/30 to-transparent z-0"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="reveal mb-12 sm:mb-16 lg:mb-20">
          <span className="badge">{t.about.badge}</span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center mt-5 sm:mt-6">
            <h2 className="font-extrabold leading-none" style={{ fontSize: "clamp(2rem, 6vw, 4.5rem)" }}>
              {t.about.heading1}<br />
              <span style={{ color: "var(--yellow)" }}>{t.about.heading2}</span>
            </h2>
            <div>
              <p className="leading-relaxed mb-4 text-sm sm:text-base" style={{ color: "var(--text-secondary)" }}>{t.about.para1}</p>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-secondary)" }}>{t.about.para2}</p>
            </div>
          </div>
        </div>

        <div className="reveal grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16 lg:mb-20" ref={statsRef}>
          {t.about.stats.map((stat) => (
            <div key={stat.label} className="glow-card rounded-2xl p-4 sm:p-6 text-center !bg-[#0f0f0f]/60 backdrop-blur-md !border-white/5">
              <div className="text-2xl sm:text-3xl lg:text-4xl font-extrabold mb-1.5 sm:mb-2" style={{ color: "var(--yellow)" }}>
                <AnimatedStat val={stat.val} isVisible={statsVisible} />
              </div>
              <div className="text-xs font-mono leading-snug text-white/70">{stat.label}</div>
            </div>
          ))}
        </div>

        <div className="reveal">
          <h3 className="text-base sm:text-lg font-bold mb-5 sm:mb-8" style={{ color: "var(--text-secondary)" }}>{t.about.teamTitle}</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
            {t.about.team.map((member, i) => (
              <div key={i} className="glow-card rounded-2xl p-4 sm:p-6 !bg-[#0f0f0f]/60 backdrop-blur-md !border-white/5">
                <div className="w-9 h-9 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center font-bold text-sm sm:text-lg mb-3 sm:mb-4"
                  style={{ background: "rgba(91,141,239,0.1)", color: "var(--yellow)", border: "1px solid rgba(91,141,239,0.2)" }}>
                  {member.initial}
                </div>
                <div className="font-bold text-xs sm:text-sm lg:text-base mb-1 text-white">{member.name}</div>
                <div className="text-xs font-mono leading-relaxed text-white/70">{member.role}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}