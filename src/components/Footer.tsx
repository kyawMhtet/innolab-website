"use client";
import { useLocale } from "./LocaleContext";
import Image from "next/image";

export default function Footer() {
  const year = new Date().getFullYear();
  const { t } = useLocale();
  const f = t.footer;

  return (
    <footer className="py-10 sm:py-12 relative" style={{ borderTop: "1px solid var(--border)" }}>
      <style>{`
        .footer-link { color: var(--text-secondary); transition: color 0.2s ease; text-decoration: none; font-size: 0.875rem; }
        .footer-link:hover { color: var(--text-primary); }
        .footer-social { font-size: 0.7rem; font-family: var(--font-dm-mono), monospace; padding: 5px 10px; border-radius: 8px; background: rgba(255,255,255,0.04); border: 1px solid var(--border); color: var(--text-secondary); transition: border-color 0.2s ease, color 0.2s ease; text-decoration: none; display: inline-block; }
        .footer-social:hover { border-color: rgba(255,193,7,0.4); color: var(--yellow); }
        .footer-legal { font-size: 0.7rem; font-family: var(--font-dm-mono), monospace; color: var(--text-secondary); transition: color 0.2s ease; text-decoration: none; }
        .footer-legal:hover { color: var(--yellow); }
      `}</style>

      <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10 mb-10 sm:mb-12">

          {/* Brand */}
          <div className="sm:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0">
                <Image src="/logo.png" alt="logo" width={42} height={42} />
              </div>
              <span className="font-bold text-base sm:text-lg tracking-tight">
                INNOLAB<span style={{ color: "var(--yellow)" }}>.</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "var(--text-secondary)", maxWidth: "300px" }}>
              {f.tagline}
            </p>
            <div className="flex flex-wrap gap-2">
              {["LinkedIn", "Instagram", "Twitter"].map((social) => (
                <a key={social} href="#" className="footer-social">{social}</a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: "var(--text-secondary)" }}>
              {f.servicesTitle}
            </h4>
            <ul className="space-y-3">
              {f.services.map((s) => (
                <li key={s}><a href="#services" className="footer-link">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-xs font-mono tracking-widest uppercase mb-4" style={{ color: "var(--text-secondary)" }}>
              {f.contactTitle}
            </h4>
            <ul className="space-y-3">
              <li className="text-sm break-all" style={{ color: "var(--text-secondary)" }}>{f.email}</li>
              <li className="text-sm" style={{ color: "var(--text-secondary)" }}>{f.whatsapp}</li>
              <li className="pt-1">
                <a href="#contact" className="btn-primary text-xs inline-flex">{f.startProject}</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-6 sm:pt-8"
          style={{ borderTop: "1px solid var(--border)" }}>
          <p className="text-xs font-mono text-center sm:text-left" style={{ color: "var(--text-secondary)" }}>
            © {year} INNOLAB Digital Solutions. {f.rights}
          </p>
          <div className="flex flex-wrap gap-4 sm:gap-6 justify-center">
            {[f.privacy, f.terms, f.legal].map((link) => (
              <a key={link} href="#" className="footer-legal">{link}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}