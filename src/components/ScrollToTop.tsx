"use client";

import { useState, useEffect } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={`fixed bottom-6 right-6 md:bottom-8 md:right-8 z-50 p-3 md:p-3.5 rounded-full flex items-center justify-center bg-[var(--yellow)] text-white dark:text-[#0f0f0f] shadow-lg shadow-yellow-500/20 transition-all duration-500 ease-[cubic-bezier(0.34,1.56,0.64,1)] focus:outline-none group ${
        isVisible ? "opacity-100 translate-y-0 visible" : "opacity-0 translate-y-8 invisible"
      }`}
    >
      <span className="absolute inset-0 rounded-full animate-ping opacity-30 bg-[var(--yellow)] group-hover:opacity-40 transition-opacity duration-300" style={{ animationDuration: '3s' }}></span>
      <FaArrowUp className="w-5 h-5 relative z-10 transition-transform duration-300 group-hover:-translate-y-1" />
    </button>
  );
}
