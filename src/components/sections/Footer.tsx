"use client";

import { FadeIn } from "@/components/ui/FadeIn";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { siteConfig } from "@/lib/data";

function GitHubIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      suppressHydrationWarning
    >
      <path
        d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"
        suppressHydrationWarning
      />
    </svg>
  );
}

function TelegramIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      suppressHydrationWarning
    >
      <path
        d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"
        suppressHydrationWarning
      />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="content-auto border-t border-border px-6 py-20 sm:px-10 sm:py-24 lg:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 sm:flex-row sm:items-end sm:justify-between">
        <FadeIn>
          <p className="mb-4 font-mono text-xs tracking-[0.2em] text-muted-dim uppercase">
            Contact
          </p>
          <a
            href={`mailto:${siteConfig.email}`}
            className="group inline-block text-2xl font-semibold tracking-tight text-foreground transition-colors duration-200 hover:text-accent sm:text-3xl"
          >
            {siteConfig.email}
            <span className="mt-1 block h-px w-0 bg-accent transition-all duration-300 group-hover:w-full" />
          </a>
        </FadeIn>

        <FadeIn delay={0.08} className="flex items-center gap-3">
          <MagneticButton
            href={siteConfig.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            strength={0.35}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-glass text-muted transition-colors duration-200 hover:border-accent/40 hover:bg-glass-hover hover:text-foreground"
          >
            <GitHubIcon className="size-4" />
          </MagneticButton>

          <MagneticButton
            href={siteConfig.telegram}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Telegram"
            strength={0.35}
            className="inline-flex size-11 items-center justify-center rounded-full border border-border bg-glass text-muted transition-colors duration-200 hover:border-accent/40 hover:bg-glass-hover hover:text-foreground"
          >
            <TelegramIcon className="size-4" />
          </MagneticButton>
        </FadeIn>
      </div>

      <FadeIn delay={0.12} className="mx-auto mt-16 max-w-6xl">
        <p className="font-mono text-[11px] tracking-wider text-muted-dim">
          © {siteConfig.year} {siteConfig.name}
        </p>
      </FadeIn>
    </footer>
  );
}
