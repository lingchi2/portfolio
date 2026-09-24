"use client";

import { MagneticButton } from "@/components/ui/MagneticButton";
import { FadeIn } from "@/components/ui/FadeIn";
import { ArrowDownRightIcon } from "@/components/ui/Icons";
import { credentials, siteConfig } from "@/lib/data";

export function Hero() {
  return (
    <header className="relative flex min-h-[100svh] flex-col justify-center px-6 pb-16 pt-24 sm:px-10 lg:px-16 lg:pb-20">
      <div
        className="pointer-events-none absolute inset-0 -z-10 motion-reduce:hidden"
        aria-hidden="true"
      >
        <div className="absolute left-1/2 top-0 h-[42vh] w-[60vw] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,var(--accent-glow)_0%,transparent_70%)] opacity-50" />
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
      </div>

      <div className="mx-auto w-full max-w-6xl">
        <FadeIn delay={0.04}>
          <p className="mb-6 font-mono text-xs tracking-[0.2em] text-accent uppercase sm:text-sm">
            Portfolio / {siteConfig.year}
          </p>
        </FadeIn>

        <FadeIn delay={0.1}>
          <h1 className="max-w-5xl text-[clamp(2.25rem,7vw,5.25rem)] font-semibold leading-[1.05] tracking-tight text-foreground">
            Hi, I&apos;m {siteConfig.name}.{" "}
            <span className="text-muted">
              A Software Engineering student and Backend Developer.
            </span>
          </h1>
        </FadeIn>

        <FadeIn delay={0.14}>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-dim sm:text-lg">
            Building scalable architectures, robust APIs, and efficient database
            schemas.
          </p>
        </FadeIn>

        <FadeIn
          delay={0.18}
          className="mt-10 grid max-w-2xl grid-cols-1 gap-6 border-t border-border pt-8 sm:grid-cols-2 sm:gap-10"
        >
          <div>
            <p className="mb-2 font-mono text-[11px] tracking-[0.18em] text-muted-dim uppercase">
              {credentials.education.label}
            </p>
            <p className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              {credentials.education.title}
            </p>
            <p className="mt-1 text-sm text-muted-dim">
              {credentials.education.detail}
            </p>
          </div>
          <div>
            <p className="mb-2 font-mono text-[11px] tracking-[0.18em] text-muted-dim uppercase">
              {credentials.experience.label}
            </p>
            <p className="text-lg font-semibold tracking-tight text-foreground sm:text-xl">
              {credentials.experience.title}
            </p>
            <p className="mt-1 text-sm text-muted-dim">
              {credentials.experience.detail}
            </p>
          </div>
        </FadeIn>

        <FadeIn delay={0.22} className="mt-10 flex flex-wrap items-center gap-4">
          <MagneticButton
            href="#work"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-glass px-7 py-3.5 text-sm font-medium text-foreground transition-colors duration-200 hover:border-accent/40 hover:bg-glass-hover"
          >
            View Work
            <ArrowDownRightIcon className="size-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
          </MagneticButton>

          <MagneticButton
            href={siteConfig.resumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center rounded-full px-7 py-3.5 text-sm font-medium text-muted transition-colors duration-200 hover:text-foreground"
            strength={0.2}
          >
            Resume
          </MagneticButton>
        </FadeIn>
      </div>
    </header>
  );
}
