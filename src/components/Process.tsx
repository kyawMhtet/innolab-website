"use client";
import { useEffect, useRef } from "react";
import { useLocale } from "./LocaleContext";

export default function Process() {
  const ref = useRef<HTMLDivElement>(null);
  const { t } = useLocale();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add("visible")),
      { threshold: 0.1 }
    );
    ref.current?.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const visuals = [
    <div key="1" className="flex items-center justify-center h-24 sm:h-32">
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center text-xl sm:text-3xl font-bold"
        style={{ background: "rgba(255,193,7,0.1)", color: "var(--yellow)", border: "1px solid rgba(255,193,7,0.25)" }}>98%</div>
    </div>,
    <div key="2" className="flex items-center gap-3 h-24 sm:h-32 justify-center">
      <div className="space-y-2">{[70,50,85,40].map((w,i)=><div key={i} className="h-2 rounded-full" style={{width:`${w}px`,background:i===0?"var(--yellow)":"rgba(255,255,255,0.1)"}}/>)}</div>
      <div className="w-10 h-14 sm:w-12 sm:h-16 rounded-lg" style={{background:"rgba(255,193,7,0.15)",border:"1px solid rgba(255,193,7,0.25)"}}/>
    </div>,
    <div key="3" className="h-24 sm:h-32 flex items-center justify-center overflow-hidden">
      <div className="rounded-lg p-2.5 font-mono text-xs leading-relaxed" style={{background:"rgba(255,193,7,0.05)",border:"1px solid rgba(255,193,7,0.15)",color:"var(--yellow)"}}>
        <div style={{color:"rgba(255,255,255,0.35)"}}>{"// component.tsx"}</div>
        <div><span style={{color:"#ff79c6"}}>export const</span>{" Engine = () => {"}</div>
        <div>&nbsp;&nbsp;<span style={{color:"#ff79c6"}}>return</span> &lt;<span style={{color:"var(--yellow)"}}>div</span>&gt;</div>
        <div>&nbsp;&nbsp;&nbsp;&nbsp;{"{children}"}</div>
        <div>&nbsp;&nbsp;&lt;/<span style={{color:"var(--yellow)"}}>div</span>&gt;</div>
        <div>{"}"}</div>
      </div>
    </div>,
    <div key="4" className="h-24 sm:h-32 flex flex-col items-center justify-center gap-2 sm:gap-3">
      <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center" style={{background:"rgba(255,193,7,0.15)",border:"2px solid var(--yellow)"}}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--yellow)" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
      </div>
      <span className="text-xs font-mono" style={{color:"var(--yellow)"}}>Live · Active</span>
    </div>,
  ];

  return (
    <section id="process" className="py-20 sm:py-28 lg:py-32 relative px-5 sm:px-8 lg:px-12" ref={ref}>
      <div className="blob" style={{ width: "40vw", height: "40vw", background: "var(--yellow)", top: "20%", left: "-10vw", opacity: 0.04 }} />
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="reveal text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="badge">{t.process.badge}</span>
          <h2 className="font-extrabold mt-5 leading-tight" style={{ fontSize: "clamp(1.8rem, 6vw, 4rem)" }}>
            {t.process.heading1}<br />
            <span style={{ color: "var(--text-secondary)", fontWeight: 400 }}>{t.process.heading2}</span>
          </h2>
          <p className="mt-3 sm:mt-4 text-sm max-w-md mx-auto" style={{ color: "var(--text-secondary)" }}>{t.process.sub}</p>
        </div>

        <div className="relative">
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 hidden lg:block"
            style={{ background: "linear-gradient(to bottom, transparent, rgba(255,193,7,0.4), transparent)" }} />
          <div className="space-y-6 sm:space-y-10 lg:space-y-12">
            {t.process.stages.map((stage, i) => (
              <div key={stage.num} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 lg:gap-8 items-center">
                <div className={i % 2 !== 0 ? "lg:order-2" : ""}>
                  <div className="glow-card rounded-2xl p-5 sm:p-7">
                    <div className="flex items-center gap-3 mb-3 sm:mb-4">
                      <span className="font-mono text-xs px-3 py-1 rounded-full"
                        style={{ background: "rgba(255,193,7,0.1)", color: "var(--yellow)", border: "1px solid rgba(255,193,7,0.25)" }}>
                        {stage.stageLabel} {stage.num}
                      </span>
                    </div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-bold mb-2 sm:mb-3">{stage.title}</h3>
                    <p className="text-sm leading-relaxed mb-4 sm:mb-5" style={{ color: "var(--text-secondary)" }}>{stage.desc}</p>
                    <div className="flex gap-1.5 sm:gap-2 flex-wrap mb-3 sm:mb-4">
                      {stage.tags.map((tag) => (
                        <span key={tag} className="text-xs font-mono px-2 sm:px-3 py-1 rounded-full"
                          style={{ background: "rgba(255,255,255,0.04)", border: "1px solid var(--border)", color: "var(--text-secondary)" }}>{tag}</span>
                      ))}
                    </div>
                    <div className="space-y-1.5 sm:space-y-2">
                      {stage.deliverables.map((d) => (
                        <div key={d} className="flex items-center gap-2">
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="var(--yellow)" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                          <span className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>
                            {stage.deliverableLabel}: <span style={{ color: "var(--text-primary)" }}>{d}</span>
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                <div className={`flex items-center justify-center ${i % 2 !== 0 ? "lg:order-1" : ""}`}>
                  <div className="glow-card rounded-2xl p-4 sm:p-6 w-full max-w-xs" style={{ opacity: 0.85 }}>
                    {visuals[i]}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="reveal mt-14 sm:mt-20 rounded-3xl p-7 sm:p-10 lg:p-12 text-center"
          style={{ background: "rgba(255,193,7,0.04)", border: "1px solid rgba(255,193,7,0.15)" }}>
          <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold mb-3">{t.process.ctaHeading}</h3>
          <p className="text-sm mb-6 sm:mb-8" style={{ color: "var(--text-secondary)" }}>{t.process.ctaSub}</p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center">
            <a href="#contact" className="btn-primary justify-center">{t.process.ctaPrimary}</a>
            <a href="#work" className="btn-outline justify-center">{t.process.ctaSecondary}</a>
          </div>
        </div>
      </div>
    </section>
  );
}