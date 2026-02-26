"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { useTheme } from "./ThemeContext";
import { useLocale, Locale } from "./LocaleContext";

function SunIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  );
}

const localeLabels: Record<Locale, string> = { en: "EN", th: "TH", zh: "中文" };
const localeOptions: Locale[] = ["en", "th", "zh"];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [langOpen, setLangOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { locale, setLocale, t } = useLocale();
  const isDark = theme === "dark";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Close lang dropdown when clicking outside
  useEffect(() => {
    const handler = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest(".lang-dropdown")) setLangOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const navLinks = [
    { label: t.nav.services, href: "#services" },
    { label: t.nav.process, href: "#process" },
    { label: t.nav.work, href: "#work" },
    { label: t.nav.about, href: "#about" },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled || menuOpen ? "var(--bg-nav)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
        borderBottom: scrolled || menuOpen ? "1px solid var(--border)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-16 sm:h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <Image src="/logo.png" alt="Innolab" width={36} height={36}
            style={{ objectFit: "contain", width: "auto", height: "32px" }} priority />
          <span className="font-bold text-base sm:text-lg tracking-tight">
            INNOLAB<span style={{ color: "var(--yellow)" }}>.</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a href={link.href}
                className="text-xs lg:text-sm font-medium tracking-widest uppercase transition-colors duration-200"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >{link.label}</a>
            </li>
          ))}
        </ul>

        {/* Desktop: Lang + Theme + CTA */}
        <div className="hidden md:flex items-center gap-2">
          {/* Language switcher */}
          <div className="lang-dropdown" style={{ position: "relative" }}>
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="theme-toggle"
              style={{ width: "auto", borderRadius: "20px", padding: "0 12px", fontSize: "0.7rem", fontFamily: "var(--font-dm-mono)", fontWeight: 600, letterSpacing: "0.08em", gap: "4px" }}
            >
              {localeLabels[locale]}
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                style={{ transform: langOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {langOpen && (
              <div style={{
                position: "absolute", top: "calc(100% + 8px)", right: 0,
                background: "var(--bg-card)", border: "1px solid var(--border)",
                borderRadius: "12px", overflow: "hidden", minWidth: "90px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)", zIndex: 100,
              }}>
                {localeOptions.map((l) => (
                  <button key={l} onClick={() => { setLocale(l); setLangOpen(false); }}
                    style={{
                      display: "block", width: "100%", padding: "9px 14px", textAlign: "left",
                      fontSize: "0.72rem", fontFamily: "var(--font-dm-mono)", fontWeight: 600,
                      letterSpacing: "0.06em", background: locale === l ? "rgba(255,193,7,0.1)" : "transparent",
                      color: locale === l ? "var(--yellow)" : "var(--text-secondary)",
                      border: "none", cursor: "pointer", transition: "background 0.15s ease",
                    }}
                    onMouseEnter={(e) => { if (locale !== l) (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.05)"; }}
                    onMouseLeave={(e) => { if (locale !== l) (e.currentTarget as HTMLElement).style.background = "transparent"; }}
                  >
                    {localeLabels[l]}
                  </button>
                ))}
              </div>
            )}
          </div>

          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>
          <a href="#contact" className="btn-primary text-xs">
            {t.nav.cta}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Mobile: Lang + Theme + Hamburger */}
        <div className="flex md:hidden items-center gap-1.5">
          {/* Mobile lang switcher */}
          <div className="lang-dropdown" style={{ position: "relative" }}>
            <button onClick={() => setLangOpen(!langOpen)}
              style={{
                height: "34px", padding: "0 10px", borderRadius: "20px",
                border: "1px solid var(--border)", background: "var(--bg-card)",
                color: "var(--text-primary)", fontSize: "0.65rem",
                fontFamily: "var(--font-dm-mono)", fontWeight: 600,
                letterSpacing: "0.08em", cursor: "pointer", display: "flex",
                alignItems: "center", gap: "3px", flexShrink: 0,
              }}
            >
              {localeLabels[locale]}
              <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"
                style={{ transform: langOpen ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}>
                <path d="M6 9l6 6 6-6" />
              </svg>
            </button>
            {langOpen && (
              <div style={{
                position: "absolute", top: "calc(100% + 8px)", right: 0,
                background: "var(--bg-card)", border: "1px solid var(--border)",
                borderRadius: "12px", overflow: "hidden", minWidth: "80px",
                boxShadow: "0 8px 24px rgba(0,0,0,0.15)", zIndex: 100,
              }}>
                {localeOptions.map((l) => (
                  <button key={l} onClick={() => { setLocale(l); setLangOpen(false); }}
                    style={{
                      display: "block", width: "100%", padding: "9px 14px", textAlign: "left",
                      fontSize: "0.7rem", fontFamily: "var(--font-dm-mono)", fontWeight: 600,
                      background: locale === l ? "rgba(255,193,7,0.1)" : "transparent",
                      color: locale === l ? "var(--yellow)" : "var(--text-secondary)",
                      border: "none", cursor: "pointer",
                    }}
                  >{localeLabels[l]}</button>
                ))}
              </div>
            )}
          </div>

          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme"
            style={{ width: "34px", height: "34px" }}>
            {isDark ? <SunIcon /> : <MoonIcon />}
          </button>

          {/* Hamburger */}
          <button className="flex flex-col flex-shrink-0 items-center justify-center"
            onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu"
            style={{ width: "36px", height: "36px", gap: "5px", background: "transparent", border: "none", cursor: "pointer", padding: "0" }}
          >
            <span style={{ display: "block", width: "20px", height: "2px", background: "var(--text-primary)", borderRadius: "2px", transition: "transform 0.3s ease", transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none" }} />
            <span style={{ display: "block", width: "20px", height: "2px", background: "var(--text-primary)", borderRadius: "2px", transition: "opacity 0.3s ease", opacity: menuOpen ? 0 : 1 }} />
            <span style={{ display: "block", width: "20px", height: "2px", background: "var(--text-primary)", borderRadius: "2px", transition: "transform 0.3s ease", transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none" }} />
          </button>
        </div>
      </nav>

      {/* Mobile Dropdown */}
      <div className="md:hidden" style={{ maxHeight: menuOpen ? "400px" : "0", overflow: "hidden", transition: "max-height 0.3s ease", background: "var(--bg-nav-mobile)", borderBottom: menuOpen ? "1px solid var(--border)" : "none" }}>
        <div style={{ padding: "24px 20px", display: "flex", flexDirection: "column", gap: "20px" }}>
          {navLinks.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}
              style={{ fontSize: "0.85rem", fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--text-secondary)", textDecoration: "none" }}>
              {link.label}
            </a>
          ))}
          <div style={{ paddingTop: "12px", borderTop: "1px solid var(--border)" }}>
            <a href="#contact" onClick={() => setMenuOpen(false)}
              style={{ display: "flex", alignItems: "center", justifyContent: "center", background: "var(--yellow)", color: "#ffffff", fontWeight: 700, fontSize: "0.8rem", letterSpacing: "0.05em", textTransform: "uppercase", padding: "13px 24px", borderRadius: "999px", textDecoration: "none", width: "100%", boxSizing: "border-box" }}>
              {t.nav.cta} →
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}