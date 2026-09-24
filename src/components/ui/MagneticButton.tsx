"use client";

import {
  useCallback,
  useEffect,
  useRef,
  type AnchorHTMLAttributes,
  type MouseEvent,
  type ReactNode,
} from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, "children">;

/**
 * Magnetic hover only on fine pointers. Disabled for touch / reduced-motion.
 * Uses direct transform (no continuous spring RAF).
 */
export function MagneticButton({
  children,
  className = "",
  strength = 0.28,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLAnchorElement>(null);
  const enabledRef = useRef(false);
  const raf = useRef(0);

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      enabledRef.current = fine.matches && !reduce.matches;
    };
    sync();

    fine.addEventListener("change", sync);
    reduce.addEventListener("change", sync);
    return () => {
      fine.removeEventListener("change", sync);
      reduce.removeEventListener("change", sync);
    };
  }, []);

  const reset = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
  }, []);

  function handleMove(e: MouseEvent<HTMLAnchorElement>) {
    if (!enabledRef.current) return;
    const el = ref.current;
    if (!el) return;

    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      const rect = el.getBoundingClientRect();
      const dx = (e.clientX - (rect.left + rect.width / 2)) * strength;
      const dy = (e.clientY - (rect.top + rect.height / 2)) * strength;
      el.style.transform = `translate3d(${dx}px, ${dy}px, 0)`;
    });
  }

  function handleLeave() {
    if (!enabledRef.current) return;
    cancelAnimationFrame(raf.current);
    reset();
  }

  useEffect(() => () => cancelAnimationFrame(raf.current), []);

  return (
    <a
      ref={ref}
      className={`magnetic-btn${className ? ` ${className}` : ""}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      {...props}
    >
      {children}
    </a>
  );
}
