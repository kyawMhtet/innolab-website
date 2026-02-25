export default function Partners() {
  const partners = [
    "Shopify", "Webflow", "Next.js", "React", "Figma",
    "Meta Ads", "Google Ads", "Framer", "Vercel", "Tailwind CSS",
    "Shopify", "Webflow", "Next.js", "React", "Figma",
    "Meta Ads", "Google Ads", "Framer", "Vercel", "Tailwind CSS",
  ];

  return (
    <section className="py-16 relative overflow-hidden" style={{ borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
      <p className="text-center mb-8 text-xs font-mono tracking-widest uppercase" style={{ color: "var(--text-secondary)" }}>
        Technologies & Platforms We Master
      </p>
      <div className="relative overflow-hidden">
        <div className="marquee-track flex gap-12 whitespace-nowrap">
          {partners.map((p, i) => (
            <span
              key={i}
              className="text-sm font-bold tracking-widest uppercase flex-shrink-0"
              style={{ color: i % 3 === 0 ? "var(--cyan)" : "rgba(255,255,255,0.2)" }}
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
