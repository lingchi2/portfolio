type IconProps = {
  className?: string;
};

/** Inline icons with suppressHydrationWarning — Dark Reader mutates SVG attrs before hydrate. */
export function ArrowDownRightIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      suppressHydrationWarning
    >
      <path d="M17 7v10H7" suppressHydrationWarning />
      <path d="M7 7l10 10" suppressHydrationWarning />
    </svg>
  );
}

export function ArrowUpRightIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      suppressHydrationWarning
    >
      <path d="M7 17V7h10" suppressHydrationWarning />
      <path d="M7 17l10-10" suppressHydrationWarning />
    </svg>
  );
}

export function CloseIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      aria-hidden="true"
      suppressHydrationWarning
    >
      <path d="M18 6 6 18" suppressHydrationWarning />
      <path d="m6 6 12 12" suppressHydrationWarning />
    </svg>
  );
}

export function ChevronLeftIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      suppressHydrationWarning
    >
      <path d="m15 18-6-6 6-6" suppressHydrationWarning />
    </svg>
  );
}

export function ChevronRightIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="20"
      height="20"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      suppressHydrationWarning
    >
      <path d="m9 18 6-6-6-6" suppressHydrationWarning />
    </svg>
  );
}

export function ExpandIcon({ className }: IconProps) {
  return (
    <svg
      className={className}
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      suppressHydrationWarning
    >
      <path d="M15 3h6v6" suppressHydrationWarning />
      <path d="M9 21H3v-6" suppressHydrationWarning />
      <path d="M21 3l-7 7" suppressHydrationWarning />
      <path d="M3 21l7-7" suppressHydrationWarning />
    </svg>
  );
}
