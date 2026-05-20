import Navbar from "./Navbar";
import Footer from "./Footer";
import AosInit from "./AosInit";
import WorkImage from "./WorkImage";

export interface ServiceTier {
  num: string;
  name: string;
  timeline: string;
  desc: string;
  price: string;
  highlight?: boolean;
}

export interface ServiceData {
  num: string;
  badge: string;
  titleLine1: string;
  titleLine2: string;
  description: string;
  color: string;
  stats: { val: string; label: string }[];
  features: string[];
  outcomes: string[];
  tiers: ServiceTier[];
  techStack: string[];
  images: {
    layout: "standard" | "mobile" | "single";
    hero: string;
    screen1?: string;
    screen2?: string;
    screen3?: string;
  };
  ctaHeading: string;
  ctaDesc: string;
  ctaLabel: string;
}

export default function ServiceDetailLayout({ data }: { data: ServiceData }) {
  const { color } = data;

  return (
    <>
      <AosInit />
      <Navbar />
      <main style={{ background: "var(--bg-dark)", minHeight: "100vh" }}>

        {/* ── HERO ── */}
        <section
          className="px-5 sm:px-8 lg:px-12"
          style={{
            paddingTop: "clamp(120px, 18vw, 180px)",
            paddingBottom: "clamp(60px, 8vw, 100px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          {/* Background number */}
          <span
            aria-hidden
            style={{
              position: "absolute",
              right: "-2vw",
              top: "50%",
              transform: "translateY(-50%)",
              fontFamily: "var(--font-ibm-mono)",
              fontWeight: 800,
              fontSize: "clamp(160px, 30vw, 380px)",
              lineHeight: 1,
              color,
              opacity: 0.04,
              userSelect: "none",
              pointerEvents: "none",
              letterSpacing: "-0.05em",
            }}
          >
            {data.num}
          </span>

          <div className="max-w-7xl mx-auto" style={{ position: "relative" }}>
            {/* Back link */}
            <a
              href="/#services"
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
              All Services
            </a>

            {/* Badge */}
            <div style={{ marginBottom: "clamp(16px, 2.5vw, 28px)" }}>
              <span
                style={{
                  fontFamily: "var(--font-ibm-mono)",
                  fontSize: "0.62rem",
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color,
                  background: `${color}16`,
                  border: `1px solid ${color}35`,
                  padding: "7px 16px",
                  borderRadius: "4px",
                }}
              >
                {data.badge}
              </span>
            </div>

            {/* Title */}
            <h1
              data-aos="fade-up"
              data-aos-duration="900"
              style={{
                fontWeight: 800,
                lineHeight: 0.92,
                letterSpacing: "-0.03em",
                fontSize: "clamp(3.2rem, 10vw, 9.5rem)",
                marginBottom: "clamp(24px, 3.5vw, 44px)",
                color: "var(--text-primary)",
              }}
            >
              {data.titleLine1}
              <br />
              <span style={{ color, fontStyle: "italic" }}>{data.titleLine2}</span>
            </h1>

            {/* Description */}
            <p
              style={{
                fontSize: "clamp(0.95rem, 1.5vw, 1.1rem)",
                lineHeight: 1.75,
                color: "var(--text-secondary)",
                maxWidth: "580px",
                marginBottom: "clamp(40px, 5vw, 64px)",
              }}
            >
              {data.description}
            </p>

            {/* Stats row */}
            <div style={{ borderTop: "1px solid var(--border)", paddingTop: "clamp(24px, 3vw, 36px)" }}>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8">
                {data.stats.map((s) => (
                  <div key={s.label}>
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
                      {s.label}
                    </div>
                    <div style={{ fontSize: "0.92rem", fontWeight: 700, color: "var(--text-primary)" }}>
                      {s.val}
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
            <WorkImage
              src={data.images.hero}
              alt={`${data.titleLine1} ${data.titleLine2} - preview`}
              aspectRatio="16/9"
            />
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section
          className="px-5 sm:px-8 lg:px-12"
          style={{ paddingBottom: "clamp(80px, 10vw, 120px)" }}
        >
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20">

              {/* What's included */}
              <div data-aos="fade-up" data-aos-duration="800">
                <SvcLabel color={color}>What&apos;s Included</SvcLabel>
                <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
                  {data.features.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: "13px" }}>
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "4px",
                          background: `${color}18`,
                          border: `1px solid ${color}35`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: "1px",
                        }}
                      >
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                      </div>
                      <span style={{ fontSize: "0.9rem", lineHeight: 1.65, color: "var(--text-secondary)" }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* What you get */}
              <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="100">
                <SvcLabel color={color}>What You Get</SvcLabel>
                <div style={{ display: "flex", flexDirection: "column", gap: "13px" }}>
                  {data.outcomes.map((o) => (
                    <div key={o} style={{ display: "flex", alignItems: "flex-start", gap: "13px" }}>
                      <div
                        style={{
                          width: "20px",
                          height: "20px",
                          borderRadius: "4px",
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid var(--border)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          flexShrink: 0,
                          marginTop: "1px",
                        }}
                      >
                        <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" style={{ color: "var(--text-secondary)" }}>
                          <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                      </div>
                      <span style={{ fontSize: "0.9rem", lineHeight: 1.65, color: "var(--text-secondary)" }}>{o}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── SECONDARY IMAGES ── */}
        {data.images.layout !== "single" && (
          <section
            className="px-5 sm:px-8 lg:px-12"
            style={{ paddingBottom: "clamp(80px, 10vw, 120px)" }}
          >
            <div className="max-w-7xl mx-auto">
              {data.images.layout === "standard" && (
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div data-aos="fade-up" data-aos-duration="900">
                    <WorkImage src={data.images.screen1 ?? ""} alt="Screen 1" aspectRatio="4/3" objectFit="contain" />
                  </div>
                  <div data-aos="fade-up" data-aos-duration="900" data-aos-delay="100">
                    <WorkImage src={data.images.screen2 ?? ""} alt="Screen 2" aspectRatio="4/3" objectFit="contain" />
                  </div>
                </div>
              )}

              {data.images.layout === "mobile" && (
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(3, 1fr)",
                    gap: "clamp(12px, 2vw, 24px)",
                    maxWidth: "680px",
                    margin: "0 auto",
                  }}
                >
                  {[data.images.screen1, data.images.screen2, data.images.screen3].map((src, i) => (
                    <div key={i} data-aos="fade-up" data-aos-duration="800" data-aos-delay={i * 100}>
                      <WorkImage
                        src={src ?? ""}
                        alt={`Mobile screen ${i + 1}`}
                        aspectRatio="9/16"
                        objectFit="contain"
                      />
                    </div>
                  ))}
                </div>
              )}
            </div>
          </section>
        )}

        {/* ── PACKAGES ── */}
        <section
          className="px-5 sm:px-8 lg:px-12"
          style={{
            paddingTop: "clamp(60px, 8vw, 100px)",
            paddingBottom: "clamp(80px, 10vw, 120px)",
            borderTop: "1px solid var(--border)",
          }}
        >
          <div className="max-w-7xl mx-auto">
            <SvcLabel color={color}>Packages</SvcLabel>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: `repeat(${Math.min(data.tiers.length, 3)}, 1fr)`,
                gap: "16px",
              }}
              className="grid-cols-1 sm:grid-flow-col-dense"
            >
              {data.tiers.map((tier, i) => (
                <div
                  key={tier.num}
                  data-aos="fade-up"
                  data-aos-delay={i * 80}
                  style={{
                    background: tier.highlight ? `${color}08` : "var(--bg-card)",
                    border: `1px solid ${tier.highlight ? color + "40" : "var(--border)"}`,
                    borderRadius: "16px",
                    padding: "clamp(24px, 3vw, 36px)",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden",
                  }}
                >
                  {tier.highlight && (
                    <div
                      style={{
                        position: "absolute",
                        top: "0",
                        left: "0",
                        right: "0",
                        height: "2px",
                        background: color,
                      }}
                    />
                  )}
                  <div
                    style={{
                      fontFamily: "var(--font-ibm-mono)",
                      fontSize: "0.55rem",
                      letterSpacing: "0.2em",
                      color: "var(--text-secondary)",
                      opacity: 0.45,
                      marginBottom: "16px",
                    }}
                  >
                    {tier.num}
                  </div>
                  <h3 style={{ fontSize: "1.05rem", fontWeight: 700, marginBottom: "8px" }}>{tier.name}</h3>
                  <div
                    style={{
                      fontFamily: "var(--font-ibm-mono)",
                      fontSize: "0.65rem",
                      color,
                      marginBottom: "14px",
                      letterSpacing: "0.04em",
                    }}
                  >
                    {tier.timeline}
                  </div>
                  <p
                    style={{
                      fontSize: "0.85rem",
                      lineHeight: 1.7,
                      color: "var(--text-secondary)",
                      flex: 1,
                      marginBottom: "20px",
                    }}
                  >
                    {tier.desc}
                  </p>
                  <div
                    style={{
                      paddingTop: "18px",
                      borderTop: "1px solid var(--border)",
                      fontWeight: 700,
                      fontSize: "0.9rem",
                    }}
                  >
                    {tier.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── TECH STACK ── */}
        <section className="px-5 sm:px-8 lg:px-12" style={{ paddingBottom: "clamp(80px, 10vw, 120px)" }}>
          <div className="max-w-7xl mx-auto" data-aos="fade-up">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                gap: "10px",
                padding: "22px 28px",
                background: "var(--bg-card)",
                border: "1px solid var(--border)",
                borderRadius: "12px",
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
                  marginRight: "4px",
                  flexShrink: 0,
                }}
              >
                Tech Stack
              </span>
              <div className="hidden sm:block" style={{ width: "1px", height: "14px", background: "var(--border)", flexShrink: 0 }} />
              {data.techStack.map((tech) => (
                <span
                  key={tech}
                  style={{
                    fontFamily: "var(--font-ibm-mono)",
                    fontSize: "0.68rem",
                    padding: "5px 14px",
                    borderRadius: "4px",
                    border: "1px solid var(--border)",
                    color: "var(--text-secondary)",
                    background: "rgba(255,255,255,0.03)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-5 sm:px-8 lg:px-12" style={{ paddingBottom: "clamp(100px, 12vw, 160px)" }}>
          <div className="max-w-7xl mx-auto" data-aos="fade-up">
            <div
              style={{
                background: `linear-gradient(135deg, ${color}0a, ${color}04)`,
                border: `1px solid ${color}25`,
                borderRadius: "20px",
                padding: "clamp(48px, 6vw, 80px) clamp(32px, 5vw, 64px)",
                textAlign: "center",
              }}
            >
              <h2
                style={{
                  fontWeight: 800,
                  fontSize: "clamp(1.5rem, 3.5vw, 2.6rem)",
                  marginBottom: "16px",
                  letterSpacing: "-0.02em",
                }}
              >
                {data.ctaHeading}
              </h2>
              <p
                style={{
                  fontSize: "0.95rem",
                  color: "var(--text-secondary)",
                  maxWidth: "460px",
                  margin: "0 auto 36px",
                  lineHeight: 1.7,
                }}
              >
                {data.ctaDesc}
              </p>
              <a href="/#contact" className="btn-primary">{data.ctaLabel}</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}

function SvcLabel({ color, children }: { color: string; children: React.ReactNode }) {
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
