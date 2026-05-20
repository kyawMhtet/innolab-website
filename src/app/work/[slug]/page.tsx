import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AosInit from "@/components/AosInit";
import WorkImage from "@/components/WorkImage";
import { getWork, works } from "@/data/works";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return works.map((w) => ({ slug: w.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getWork(slug);
  if (!project) return {};
  return {
    title: `${project.title} - InnoLab Digital Solutions`,
    description: project.overview.slice(0, 160),
  };
}

export default async function WorkDetailPage({ params }: Props) {
  const { slug } = await params;
  const project = getWork(slug);
  if (!project) notFound();

  return (
    <>
      <AosInit />
      <Navbar />
      <main style={{ background: "var(--bg-dark)", minHeight: "100vh" }}>

        {/* ── HERO ── */}
        <section
          className="px-5 sm:px-8 lg:px-12"
          style={{ paddingTop: "clamp(120px, 18vw, 180px)", paddingBottom: "clamp(60px, 8vw, 100px)", position: "relative", overflow: "hidden" }}
        >
          {/* Background project number */}
          <span
            aria-hidden
            style={{
              position: "absolute",
              right: "-2vw",
              top: "50%",
              transform: "translateY(-50%)",
              fontFamily: "var(--font-ibm-mono)",
              fontWeight: 800,
              fontSize: "clamp(180px, 35vw, 420px)",
              lineHeight: 1,
              color: project.color,
              opacity: 0.04,
              userSelect: "none",
              pointerEvents: "none",
              letterSpacing: "-0.05em",
            }}
          >
            {project.num}
          </span>

          <div className="max-w-7xl mx-auto" style={{ position: "relative" }}>
            {/* Back link */}
            <a
              href="/#work"
              className="hover:opacity-100 transition-opacity"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontFamily: "var(--font-ibm-mono)",
                fontSize: "0.62rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
                textDecoration: "none",
                marginBottom: "clamp(40px, 6vw, 72px)",
                opacity: 0.6,
              }}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M19 12H5M5 12l7-7M5 12l7 7" />
              </svg>
              All Work
            </a>

            {/* Tag + Year */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: "clamp(20px, 3vw, 32px)" }}>
              <span
                style={{
                  fontFamily: "var(--font-ibm-mono)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: project.color,
                  background: `${project.color}16`,
                  border: `1px solid ${project.color}35`,
                  padding: "7px 16px",
                  borderRadius: "4px",
                }}
              >
                {project.tag}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-ibm-mono)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.15em",
                  color: "var(--text-secondary)",
                  opacity: 0.5,
                }}
              >
                {project.year}
              </span>
            </div>

            {/* Project title */}
            <h1
              data-aos="fade-up"
              data-aos-duration="900"
              style={{
                fontWeight: 800,
                lineHeight: 0.88,
                letterSpacing: "-0.03em",
                fontSize: "clamp(4.5rem, 15vw, 13rem)",
                marginBottom: "clamp(40px, 6vw, 80px)",
                color: "var(--text-primary)",
              }}
            >
              {project.title}
            </h1>

            {/* Meta row */}
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "clamp(24px, 3vw, 36px)" }}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
                {[
                  { label: "Client", val: project.client },
                  { label: "Industry", val: project.industry },
                  { label: "Timeline", val: project.timeline },
                  { label: "Role", val: project.role },
                ].map((item) => (
                  <div key={item.label}>
                    <div
                      style={{
                        fontFamily: "var(--font-ibm-mono)",
                        fontSize: "0.55rem",
                        letterSpacing: "0.2em",
                        textTransform: "uppercase",
                        color: "var(--text-secondary)",
                        opacity: 0.5,
                        marginBottom: "8px",
                      }}
                    >
                      {item.label}
                    </div>
                    <div style={{ fontSize: "0.88rem", fontWeight: 600, color: "var(--text-primary)", lineHeight: 1.4 }}>
                      {item.val}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── HERO IMAGE ── */}
        <section className="px-5 sm:px-8 lg:px-12" style={{ paddingBottom: "clamp(60px, 8vw, 100px)" }}>
          <div className="max-w-7xl mx-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="80">
            <WorkImage src={project.images.hero} alt={`${project.title} - hero`} aspectRatio="16/9" />
          </div>
        </section>

        {/* ── OVERVIEW + STACK ── */}
        <section
          className="px-5 sm:px-8 lg:px-12"
          style={{ paddingBottom: "clamp(80px, 10vw, 130px)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 lg:gap-20">

              {/* Overview */}
              <div data-aos="fade-up" data-aos-duration="800">
                <SectionLabel color={project.color}>Overview</SectionLabel>
                <p
                  style={{
                    fontSize: "clamp(1rem, 1.8vw, 1.2rem)",
                    lineHeight: 1.75,
                    color: "var(--text-secondary)",
                    maxWidth: "660px",
                  }}
                >
                  {project.overview}
                </p>
              </div>

              {/* Stack + Role */}
              <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                <SectionLabel color={project.color}>Tech Stack</SectionLabel>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "8px", marginBottom: "40px" }}>
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        fontFamily: "var(--font-ibm-mono)",
                        fontSize: "0.68rem",
                        padding: "6px 14px",
                        borderRadius: "4px",
                        border: "1px solid var(--border)",
                        color: "var(--text-secondary)",
                        background: "var(--bg-card)",
                        letterSpacing: "0.04em",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-ibm-mono)",
                    fontSize: "0.55rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--text-secondary)",
                    opacity: 0.5,
                    marginBottom: "10px",
                  }}
                >
                  Role
                </div>
                <div style={{ fontSize: "0.92rem", fontWeight: 600, color: "var(--text-primary)" }}>
                  {project.role}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── CHALLENGE & SOLUTION ── */}
        <section
          className="px-5 sm:px-8 lg:px-12"
          style={{
            paddingTop: "clamp(60px, 8vw, 100px)",
            paddingBottom: "clamp(60px, 8vw, 100px)",
            borderTop: "1px solid var(--border)",
            borderBottom: "1px solid var(--border)",
          }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">

              {/* Challenge */}
              <div data-aos="fade-up" data-aos-duration="800">
                <div
                  style={{
                    fontFamily: "var(--font-ibm-mono)",
                    fontSize: "0.58rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: project.color,
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <span style={{ color: project.color, fontFamily: "var(--font-ibm-mono)", fontSize: "0.68rem", letterSpacing: "-0.12em", lineHeight: 1, paddingRight: "2px", flexShrink: 0 }}>//</span>
                  The Challenge
                </div>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-secondary)" }}>
                  {project.challenge}
                </p>
              </div>

              {/* Solution */}
              <div
                data-aos="fade-up"
                data-aos-duration="800"
                data-aos-delay="120"
                style={{
                  paddingTop: "0",
                }}
                className="lg:border-l lg:pl-16"
              >
                <div
                  style={{
                    fontFamily: "var(--font-ibm-mono)",
                    fontSize: "0.58rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: project.color,
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    borderTop: "none",
                  }}
                >
                  <span style={{ color: project.color, fontFamily: "var(--font-ibm-mono)", fontSize: "0.68rem", letterSpacing: "-0.12em", lineHeight: 1, paddingRight: "2px", flexShrink: 0 }}>//</span>
                  The Solution
                </div>
                <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--text-secondary)" }}>
                  {project.solution}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* ── IMAGE GALLERY ── */}
        {!project.hideGallery && (
          <section
            className="px-5 sm:px-8 lg:px-12"
            style={{ paddingTop: "clamp(80px, 10vw, 120px)", paddingBottom: "clamp(80px, 10vw, 120px)" }}
          >
            <div className="max-w-7xl mx-auto" style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              <div data-aos="fade-up" data-aos-duration="1000" data-aos-offset="60">
                <WorkImage src={project.images.full1} alt={`${project.title} - screen 1`} aspectRatio="16/9" />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="100" data-aos-offset="60">
                  <WorkImage src={project.images.half1} alt={`${project.title} - screen 2`} aspectRatio="4/3" objectFit="contain" />
                </div>
                <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="200" data-aos-offset="60">
                  <WorkImage src={project.images.half2} alt={`${project.title} - screen 3`} aspectRatio="4/3" objectFit="contain" />
                </div>
              </div>
            </div>
          </section>
        )}

        {/* ── KEY RESULTS ── */}
        <section className="px-5 sm:px-8 lg:px-12" style={{ paddingBottom: "clamp(80px, 10vw, 120px)" }}>
          <div className="max-w-7xl mx-auto" data-aos="fade-up" data-aos-duration="900">
            <div
              style={{
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "20px",
                padding: "clamp(40px, 6vw, 72px) clamp(32px, 5vw, 64px)",
              }}
            >
              <SectionLabel color={project.color}>Key Results</SectionLabel>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
                {project.metrics.map((m, i) => (
                  <div key={m.label} data-aos="fade-up" data-aos-delay={i * 80}>
                    <div
                      style={{
                        fontSize: "clamp(1.6rem, 3.5vw, 2.8rem)",
                        fontWeight: 800,
                        color: project.color,
                        lineHeight: 1,
                        marginBottom: "10px",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {m.val}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-ibm-mono)",
                        fontSize: "0.62rem",
                        letterSpacing: "0.1em",
                        color: "var(--text-secondary)",
                        textTransform: "uppercase",
                        opacity: 0.7,
                      }}
                    >
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── NEXT PROJECT ── */}
        <section className="px-5 sm:px-8 lg:px-12" style={{ paddingBottom: "clamp(80px, 10vw, 140px)" }}>
          <div className="max-w-7xl mx-auto">
            <Link
              href={`/work/${project.nextSlug}`}
              className="group block"
              style={{ textDecoration: "none", borderTop: "1px solid var(--border)" }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  paddingTop: "32px",
                  paddingBottom: "20px",
                }}
              >
                <span
                  style={{
                    fontFamily: "var(--font-ibm-mono)",
                    fontSize: "0.58rem",
                    letterSpacing: "0.2em",
                    textTransform: "uppercase",
                    color: "var(--text-secondary)",
                    opacity: 0.5,
                  }}
                >
                  Next Project
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-ibm-mono)",
                    fontSize: "0.62rem",
                    letterSpacing: "0.12em",
                    textTransform: "uppercase",
                    color: project.nextColor,
                    background: `${project.nextColor}14`,
                    border: `1px solid ${project.nextColor}30`,
                    padding: "5px 12px",
                    borderRadius: "3px",
                  }}
                >
                  {project.nextTag}
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                  gap: "24px",
                  paddingBottom: "40px",
                }}
              >
                <h2
                  style={{
                    fontWeight: 800,
                    fontSize: "clamp(3rem, 10vw, 9rem)",
                    lineHeight: 0.88,
                    letterSpacing: "-0.03em",
                    color: "var(--text-primary)",
                    transition: "color 0.3s ease",
                  }}
                  className="group-hover:opacity-90"
                >
                  {project.nextTitle}
                </h2>
                <div
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    border: `1px solid ${project.nextColor}40`,
                    background: `${project.nextColor}10`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    transition: "background 0.3s ease, transform 0.3s ease",
                  }}
                  className="group-hover:translate-x-2"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={project.nextColor} strokeWidth="2" strokeLinecap="round">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Hover underline */}
              <div
                style={{
                  height: "1px",
                  background: project.nextColor,
                  transformOrigin: "left",
                  transition: "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                  transform: "scaleX(0)",
                }}
                className="group-hover:scale-x-100"
              />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

function SectionLabel({ color, children }: { color: string; children: string }) {
  return (
    <div
      style={{
        fontFamily: "var(--font-ibm-mono)",
        fontSize: "0.58rem",
        letterSpacing: "0.2em",
        textTransform: "uppercase",
        color: "var(--text-secondary)",
        opacity: 0.55,
        marginBottom: "24px",
        display: "flex",
        alignItems: "center",
        gap: "7px",
      }}
    >
      <span
        style={{
          color,
          fontFamily: "var(--font-ibm-mono)",
          fontSize: "0.72rem",
          letterSpacing: "-0.12em",
          lineHeight: 1,
          paddingRight: "2px",
          opacity: 1 / 0.55,
          flexShrink: 0,
        }}
      >
        //
      </span>
      {children}
    </div>
  );
}
