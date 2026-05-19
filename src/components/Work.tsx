"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { useLocale } from "./LocaleContext";
import { works } from "@/data/works";

const projectSlugs = ["huan-tai", "soulsmith", "sa-kyi", "unesco-classmap"];
const tagColors = ["var(--yellow)", "#ff6b9d", "var(--blue)", "#818cf8"];
const projectColors = ["#5b8def", "#ff6b9d", "#2563EB", "#818cf8"];

function CardImage({ src, color, letter }: { src: string; color: string; letter: string }) {
  const [status, setStatus] = useState<"loading" | "loaded" | "error">("loading");

  return (
    <div style={{ position: "absolute", inset: 0 }}>
      {/* Hero image */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt=""
        onLoad={() => setStatus("loaded")}
        onError={() => setStatus("error")}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "top",
          opacity: status === "loaded" ? 1 : 0,
          transition: "opacity 0.5s ease",
          display: "block",
        }}
      />

      {/* Bottom fade overlay when image is visible */}
      {status === "loaded" && (
        <div style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to bottom, transparent 30%, rgba(0,0,0,0.55) 100%)",
        }} />
      )}

      {/* Fallback: gradient + letter when image hasn't loaded */}
      {status !== "loaded" && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: `linear-gradient(135deg, ${color}14, ${color}04)`,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div
            className="group-hover:opacity-50 transition-opacity duration-300"
            style={{
              width: "52px",
              height: "52px",
              borderRadius: "14px",
              background: color,
              color: "#080a0f",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.6rem",
              fontWeight: 800,
              opacity: 0.2,
            }}
          >
            {letter}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Work() {
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

  return (
    <section id="work" className="py-20 sm:py-28 lg:py-32 relative px-5 sm:px-8 lg:px-12" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <div className="reveal flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10 sm:mb-14 lg:mb-16">
          <div>
            <span className="badge">{t.work.badge}</span>
            <h2 className="font-extrabold mt-4 sm:mt-6 leading-none" style={{ fontSize: "clamp(2rem, 7vw, 5rem)" }}>
              {t.work.heading1}<br />
              <span style={{ color: "var(--yellow)", fontStyle: "italic", fontWeight: 800 }}>{t.work.headingItalic}</span>
            </h2>
          </div>
          <a href="#contact" className="btn-outline w-fit flex-shrink-0">{t.work.viewAll}</a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {t.work.projects.map((project, i) => (
            <Link
              key={i}
              href={`/work/${projectSlugs[i]}`}
              className="glow-card rounded-2xl overflow-hidden group block"
              style={{ textDecoration: "none", color: "inherit" }}
              data-aos="fade-up"
              data-aos-delay={i * 120}
            >
              {/* Image area */}
              <div className="relative" style={{ height: "clamp(160px, 22vw, 220px)" }}>
                <CardImage
                  src={works[i].images.hero}
                  color={projectColors[i]}
                  letter={project.title[0]}
                />

                {/* Tag chip */}
                <div
                  className="absolute top-3 left-3 sm:top-4 sm:left-4 text-xs font-mono px-2 sm:px-3 py-1 rounded-sm"
                  style={{
                    background: `${projectColors[i]}30`,
                    color: tagColors[i],
                    border: `1px solid ${projectColors[i]}55`,
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    zIndex: 1,
                    position: "relative",
                  }}
                >
                  {project.tag}
                </div>

                {/* Arrow icon top-right */}
                <div className="absolute top-3 right-3 sm:top-4 sm:right-4" style={{ zIndex: 1 }}>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    style={{ color: "#fff" }}
                  >
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </div>
              </div>

              {/* Card body */}
              <div className="p-5 sm:p-6">
                <div className="flex items-start justify-between mb-2 sm:mb-3">
                  <div>
                    <h3 className="text-base sm:text-xl font-bold mb-0.5 sm:mb-1">{project.title}</h3>
                    <span className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>{project.client}</span>
                  </div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    className="opacity-25 group-hover:opacity-100 transition-opacity duration-300 flex-shrink-0 mt-1"
                    style={{ color: "var(--yellow)" }}
                  >
                    <path d="M7 17L17 7M7 7h10v10" />
                  </svg>
                </div>
                <p className="text-sm leading-relaxed mb-4" style={{ color: "var(--text-secondary)" }}>{project.desc}</p>
                <div className="flex gap-5 sm:gap-8">
                  {project.stats.map((s) => (
                    <div key={s.label}>
                      <div className="text-lg sm:text-xl font-bold" style={{ color: tagColors[i] }}>{s.val}</div>
                      <div className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>{s.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
