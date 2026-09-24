"use client";

import { useEffect, useId, useRef } from "react";
import { createPortal } from "react-dom";
import type { ProjectMedia } from "@/lib/data";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  CloseIcon,
} from "@/components/ui/Icons";

type MediaLightboxProps = {
  media: ProjectMedia[];
  index: number;
  title: string;
  open: boolean;
  onClose: () => void;
  onIndexChange: (index: number) => void;
};

export function MediaLightbox({
  media,
  index,
  title,
  open,
  onClose,
  onIndexChange,
}: MediaLightboxProps) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const labelId = useId();
  const item = media[index];

  useEffect(() => {
    if (!open) return;

    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") {
        onIndexChange((index - 1 + media.length) % media.length);
      }
      if (e.key === "ArrowRight") {
        onIndexChange((index + 1) % media.length);
      }
    }

    window.addEventListener("keydown", onKey);
    dialogRef.current?.focus();

    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [open, index, media.length, onClose, onIndexChange]);

  if (!open || !item || typeof document === "undefined") return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-8"
      role="dialog"
      aria-modal="true"
      aria-labelledby={labelId}
    >
      <button
        type="button"
        className="absolute inset-0 bg-black/85"
        aria-label="Close preview"
        onClick={onClose}
      />

      <div
        ref={dialogRef}
        tabIndex={-1}
        className="relative z-10 flex max-h-[90vh] w-full max-w-5xl flex-col outline-none"
      >
        <div className="mb-3 flex items-center justify-between gap-4">
          <p
            id={labelId}
            className="truncate font-mono text-xs tracking-wider text-zinc-400"
          >
            {title}
            {media.length > 1 ? ` · ${index + 1}/${media.length}` : ""}
          </p>
          <button
            type="button"
            onClick={onClose}
            className="inline-flex size-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-zinc-300 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close"
          >
            <CloseIcon />
          </button>
        </div>

        <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden rounded-xl border border-white/10 bg-zinc-950">
          {item.type === "video" ? (
            <video
              key={item.src}
              src={item.src}
              className="max-h-[80vh] w-auto max-w-full object-contain"
              controls
              autoPlay
              playsInline
            />
          ) : (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={item.src}
              src={item.src}
              alt={title}
              className="max-h-[80vh] w-auto max-w-full object-contain"
              draggable={false}
            />
          )}

          {media.length > 1 && (
            <>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onIndexChange((index - 1 + media.length) % media.length);
                }}
                className="absolute left-2 top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white transition-colors hover:bg-black/70 sm:left-3"
                aria-label="Previous"
              >
                <ChevronLeftIcon />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  onIndexChange((index + 1) % media.length);
                }}
                className="absolute right-2 top-1/2 inline-flex size-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-black/50 text-white transition-colors hover:bg-black/70 sm:right-3"
                aria-label="Next"
              >
                <ChevronRightIcon />
              </button>
            </>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
}
