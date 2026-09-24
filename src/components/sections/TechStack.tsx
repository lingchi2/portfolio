"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { allSkills } from "@/lib/data";

export function TechStack() {
  return (
    <section
      id="skills"
      aria-labelledby="tech-heading"
      className="content-auto border-y border-border py-8 sm:py-10"
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-5 px-6 sm:flex-row sm:justify-center sm:gap-8 sm:px-10 lg:px-16">
        <FadeIn>
          <h2
            id="tech-heading"
            className="shrink-0 font-mono text-[11px] tracking-[0.2em] text-muted-dim uppercase"
          >
            Tech Stack
          </h2>
        </FadeIn>

        <FadeIn delay={0.04} className="min-w-0">
          <ul
            className="flex flex-wrap items-center justify-center gap-2"
            aria-label="Technologies and tools"
          >
            {allSkills.map((skill) => (
              <li key={skill}>
                <span className="inline-flex items-center rounded-full border border-border bg-surface px-3.5 py-1.5 text-xs text-muted transition-colors duration-200 hover:border-accent/30 hover:text-foreground">
                  {skill}
                </span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
