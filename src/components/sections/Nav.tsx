"use client";

import { useEffect, useRef } from "react";

export function Nav() {
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const nav = navRef.current;
    if (!nav) return;

    let ticking = false;
    let scrolled = false;

    function update() {
      const next = window.scrollY > 40;
      if (next === scrolled) {
        ticking = false;
        return;
      }
      scrolled = next;
      nav!.classList.toggle("is-scrolled", next);
      ticking = false;
    }

    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(update);
    }

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      ref={navRef}
      className="site-nav fixed inset-x-0 top-0 z-40 border-b border-transparent bg-transparent transition-[background-color,border-color] duration-300"
      aria-label="Primary"
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6 sm:px-10 lg:px-16">
        <a
          href="#"
          className="font-mono text-sm font-medium tracking-tight text-foreground transition-colors hover:text-accent"
        >
          Maxim Tselichshev
        </a>
        <div className="flex items-center gap-8">
          <a
            href="#work"
            className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
          >
            Work
          </a>
          <a
            href="#contact"
            className="text-sm text-muted transition-colors duration-200 hover:text-foreground"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
