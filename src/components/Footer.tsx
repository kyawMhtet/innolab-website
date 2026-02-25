import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="py-12 relative" style={{ borderTop: "1px solid var(--border)" }}>
      <style>{`
        .footer-link { color: var(--text-secondary); transition: color 0.2s ease; text-decoration: none; }
        .footer-link:hover { color: var(--text-primary); }
        .footer-social { font-size: 0.75rem; font-family: var(--font-dm-mono), monospace; padding: 6px 12px; border-radius: 8px; background: rgba(255,255,255,0.04); border: 1px solid var(--border); color: var(--text-secondary); transition: border-color 0.2s ease, color 0.2s ease; text-decoration: none; display: inline-block; }
        .footer-social:hover { border-color: rgba(0,245,212,0.4); color: var(--cyan); }
        .footer-legal { font-size: 0.75rem; font-family: var(--font-dm-mono), monospace; color: var(--text-secondary); transition: color 0.2s ease; text-decoration: none; }
        .footer-legal:hover { color: var(--cyan); }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center" >
                <Image src="/logo.png" alt="logo" width={42} height={42} />
              </div>
              <span className="font-bold text-lg tracking-tight">
                INNOLAB<span style={{ color: "var(--cyan)" }}>.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-6" style={{ color: "var(--text-secondary)", maxWidth: "280px" }}>
              A high-performance creative team for businesses seeking to dominate the digital landscape.
            </p>
            <div className="flex gap-3">
              {["LinkedIn", "Instagram", "Twitter"].map((social) => (
                <a key={social} href="#" className="footer-social">{social}</a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: "var(--text-secondary)" }}>Services</h4>
            <ul className="space-y-3">
              {["Web Design & Development", "App Development", "Digital Marketing", "Brand & Design"].map((s) => (
                <li key={s}><a href="#services" className="footer-link text-sm">{s}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: "var(--text-secondary)" }}>Contact</h4>
            <ul className="space-y-3">
              <li className="text-sm" style={{ color: "var(--text-secondary)" }}>hello@innolabdigital.com</li>
              <li className="text-sm" style={{ color: "var(--text-secondary)" }}>WhatsApp: +1 234 567 8900</li>
              <li><a href="#contact" className="btn-primary text-xs mt-2 inline-flex">Start a Project →</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8" style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-xs font-mono" style={{ color: "var(--text-secondary)" }}>
            © {year} Innolab Digital Solutions. All rights reserved.
          </p>
          <div className="flex gap-6">
            {["Privacy Policy", "Terms of Service", "Legal"].map((link) => (
              <a key={link} href="#" className="footer-legal">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
