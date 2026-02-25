"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled || menuOpen ? "rgba(8, 10, 15, 0.96)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
        borderBottom: scrolled || menuOpen ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-16 sm:h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Innolab Digital Solutions"
            width={36}
            height={36}
            style={{ objectFit: "contain", width: "auto", height: "32px" }}
            priority
          />
          <span className="font-bold text-base sm:text-lg tracking-tight">
            INNOLAB<span style={{ color: "var(--yellow)" }}>.</span>
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <ul className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-xs lg:text-sm font-medium tracking-widest uppercase transition-colors duration-200"
                style={{ color: "var(--text-secondary)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text-primary)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--text-secondary)")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center">
          <a href="#contact" className="btn-primary text-xs">
            Start Dialogue
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
        </div>

        {/* Mobile Hamburger — hidden on md+ */}
        <button
          className="flex md:hidden flex-col flex-shrink-0 items-center justify-center"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          style={{
            width: "40px",
            height: "40px",
            gap: "5px",
            background: "transparent",
            border: "none",
            cursor: "pointer",
            padding: "0",
          }}
        >
          <span style={{
            display: "block",
            width: "22px",
            height: "2px",
            background: "var(--text-primary)",
            borderRadius: "2px",
            transition: "transform 0.3s ease",
            transform: menuOpen ? "rotate(45deg) translate(5px, 5px)" : "none",
          }} />
          <span style={{
            display: "block",
            width: "22px",
            height: "2px",
            background: "var(--text-primary)",
            borderRadius: "2px",
            transition: "opacity 0.3s ease",
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: "block",
            width: "22px",
            height: "2px",
            background: "var(--text-primary)",
            borderRadius: "2px",
            transition: "transform 0.3s ease",
            transform: menuOpen ? "rotate(-45deg) translate(5px, -5px)" : "none",
          }} />
        </button>
      </nav>

      {/* Mobile Dropdown Menu */}
      <div
        className="md:hidden"
        style={{
          maxHeight: menuOpen ? "400px" : "0",
          overflow: "hidden",
          transition: "max-height 0.3s ease",
          background: "rgba(8, 10, 15, 0.98)",
          borderBottom: menuOpen ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div style={{ padding: "24px 20px", display: "flex", flexDirection: "column", gap: "20px" }}>
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              style={{
                fontSize: "0.85rem",
                fontWeight: 700,
                letterSpacing: "0.15em",
                textTransform: "uppercase",
                color: "var(--text-secondary)",
                textDecoration: "none",
              }}
            >
              {link.label}
            </a>
          ))}
          <div style={{ paddingTop: "12px", borderTop: "1px solid rgba(255,255,255,0.06)" }}>
            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: "var(--yellow)",
                color: "#080a0f",
                fontWeight: 700,
                fontSize: "0.8rem",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
                padding: "13px 24px",
                borderRadius: "999px",
                textDecoration: "none",
                width: "100%",
                boxSizing: "border-box",
              }}
            >
              Start Dialogue →
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}