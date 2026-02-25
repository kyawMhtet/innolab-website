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

  // Close menu on resize to desktop
  useEffect(() => {
    const onResize = () => { if (window.innerWidth >= 768) setMenuOpen(false); };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-500"
      style={{
        background: scrolled || menuOpen ? "rgba(8, 10, 15, 0.96)" : "transparent",
        backdropFilter: scrolled || menuOpen ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 h-16 sm:h-20 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 sm:gap-3 flex-shrink-0">
          <Image
            src="/logo.png"
            alt="Innolab Digital Solutions"
            width={36}
            height={36}
            style={{ objectFit: "contain", width: "auto", height: "36px" }}
            priority
          />
          <span className="font-bold text-base sm:text-lg tracking-tight">
            INNOLAB<span style={{ color: "var(--yellow)" }}>.</span>
          </span>
        </Link>

        {/* Desktop Links */}
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

        {/* Mobile: CTA + Hamburger */}
        <div className="md:hidden flex items-center gap-3">
          <a href="#contact" className="btn-primary text-xs py-2.5 px-4">
            Let's Talk
          </a>
          <button
            className="flex flex-col gap-1.5 p-1.5"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span className="block w-5 h-0.5 transition-all duration-300 origin-center"
              style={{ background: "var(--text-primary)", transform: menuOpen ? "rotate(45deg) translate(3px, 4px)" : "" }} />
            <span className="block w-5 h-0.5 transition-all duration-300"
              style={{ background: "var(--text-primary)", opacity: menuOpen ? 0 : 1, transform: menuOpen ? "scaleX(0)" : "" }} />
            <span className="block w-5 h-0.5 transition-all duration-300 origin-center"
              style={{ background: "var(--text-primary)", transform: menuOpen ? "rotate(-45deg) translate(3px, -4px)" : "" }} />
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300"
        style={{
          maxHeight: menuOpen ? "360px" : "0",
          background: "rgba(8, 10, 15, 0.98)",
          borderBottom: menuOpen ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div className="px-5 py-6 flex flex-col gap-5">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-bold tracking-widest uppercase"
              style={{ color: "var(--text-secondary)" }}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2" style={{ borderTop: "1px solid var(--border)" }}>
            <a href="#contact" className="btn-primary text-xs w-full justify-center" onClick={() => setMenuOpen(false)}>
              Start Dialogue →
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
