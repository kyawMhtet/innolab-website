"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function Interactions() {
  const pathname = usePathname();

  // ── Cross-route hash scroll (App Router lands at top otherwise) ──
  // Runs on first load AND on client-side navigations to a "/#section" URL.
  useEffect(() => {
    const hash = window.location.hash;
    if (hash.length <= 1) return;
    const id = decodeURIComponent(hash.slice(1));
    let tries = 0;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const jumpToHash = () => {
      const el = document.getElementById(id);
      if (!el) {
        if (tries++ < 15) timer = setTimeout(jumpToHash, 60);
        return;
      }
      const root = document.documentElement;
      const prev = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo(0, Math.max(0, el.getBoundingClientRect().top + window.scrollY - 80));
      root.style.scrollBehavior = prev;
    };
    const raf = requestAnimationFrame(() => requestAnimationFrame(jumpToHash));
    return () => {
      cancelAnimationFrame(raf);
      if (timer) clearTimeout(timer);
    };
  }, [pathname]);

  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const fine = window.matchMedia("(pointer: fine)").matches;

    // ── Scroll progress bar ──
    const bar = document.createElement("div");
    bar.setAttribute("aria-hidden", "true");
    bar.style.cssText =
      "position:fixed;top:0;left:0;height:3px;width:0;z-index:60;" +
      "background:linear-gradient(90deg,var(--yellow),var(--blue) 55%,var(--yellow));" +
      "box-shadow:0 0 14px 1px rgba(255,186,0,0.75);transition:width 0.12s linear;pointer-events:none;";
    document.body.appendChild(bar);

    let progRaf: number | null = null;
    const onScroll = () => {
      if (progRaf !== null) return;
      progRaf = requestAnimationFrame(() => {
        progRaf = null;
        const h = document.documentElement;
        const max = h.scrollHeight - h.clientHeight;
        bar.style.width = max > 0 ? `${(h.scrollTop / max) * 100}%` : "0%";
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    // ── Pointer effects: glow + tilt + magnetic ──
    let moveRaf: number | null = null;
    let lastGlow: HTMLElement | null = null;

    const onMove = (e: MouseEvent) => {
      if (!fine || reduce) return;
      if (moveRaf !== null) cancelAnimationFrame(moveRaf);
      const cx = e.clientX;
      const cy = e.clientY;
      const target = e.target as HTMLElement;

      moveRaf = requestAnimationFrame(() => {
        moveRaf = null;

        // Cursor-following glow
        const card = target.closest?.(".glow-card") as HTMLElement | null;
        if (lastGlow && lastGlow !== card) lastGlow.style.backgroundImage = "";
        if (card) {
          const r = card.getBoundingClientRect();
          card.style.backgroundImage = `radial-gradient(320px at ${cx - r.left}px ${cy - r.top}px, rgba(255,186,0,0.14) 0%, transparent 60%)`;
          lastGlow = card;
        } else {
          lastGlow = null;
        }

        // 3D tilt
        const tilt = target.closest?.(".tilt-card") as HTMLElement | null;
        document.querySelectorAll<HTMLElement>(".tilt-card[data-tilting]").forEach((el) => {
          if (el !== tilt) {
            el.style.transform = "";
            el.removeAttribute("data-tilting");
          }
        });
        if (tilt) {
          const r = tilt.getBoundingClientRect();
          const px = (cx - r.left) / r.width - 0.5;
          const py = (cy - r.top) / r.height - 0.5;
          tilt.style.transform = `perspective(900px) rotateX(${(-py * 5).toFixed(2)}deg) rotateY(${(px * 5).toFixed(2)}deg) translateY(-4px)`;
          tilt.setAttribute("data-tilting", "1");
        }

        // Magnetic primary buttons — only react when cursor is near the button's edges
        const pad = 14;
        document.querySelectorAll<HTMLElement>(".btn-primary").forEach((btn) => {
          const r = btn.getBoundingClientRect();
          const inside =
            cx >= r.left - pad && cx <= r.right + pad &&
            cy >= r.top - pad && cy <= r.bottom + pad;
          if (inside) {
            const dx = cx - (r.left + r.width / 2);
            const dy = cy - (r.top + r.height / 2);
            const clamp = (v: number, m: number) => Math.max(-m, Math.min(m, v));
            const tx = clamp(dx * 0.18, 10);
            const ty = clamp(dy * 0.28, 8);
            btn.style.transform = `translate(${tx.toFixed(1)}px, ${ty.toFixed(1)}px)`;
          } else if (btn.style.transform) {
            btn.style.transform = "";
          }
        });
      });
    };

    const onOut = (e: MouseEvent) => {
      const card = (e.target as HTMLElement).closest?.(".glow-card") as HTMLElement | null;
      if (!card) return;
      const rel = e.relatedTarget as HTMLElement | null;
      if (!(rel && card.contains(rel))) card.style.backgroundImage = "";
    };

    document.addEventListener("mousemove", onMove, { passive: true });
    document.addEventListener("mouseout", onOut, { passive: true });

    return () => {
      window.removeEventListener("scroll", onScroll);
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseout", onOut);
      if (progRaf !== null) cancelAnimationFrame(progRaf);
      if (moveRaf !== null) cancelAnimationFrame(moveRaf);
      bar.remove();
    };
  }, []);

  return null;
}
