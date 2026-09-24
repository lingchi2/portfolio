"use client";

import { useEffect, useRef, useState } from "react";
import type { ProjectMedia } from "@/lib/data";
import { ExpandIcon } from "@/components/ui/Icons";
import { MediaLightbox } from "@/components/ui/MediaLightbox";

const INTERVAL_MS = 5000;

type ProjectMediaPreviewProps = {
  media: ProjectMedia[];
  title: string;
  size?: "default" | "large" | "wide";
};

/**
 * Clear, clickable media strip with auto-rotate + fullscreen lightbox.
 */
export function ProjectMediaPreview({
  media,
  title,
  size = "default",
}: ProjectMediaPreviewProps) {
  const rootRef = useRef<HTMLDivElement>(null);
  const dotsRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLImageElement | HTMLVideoElement | null)[]>([]);
  const indexRef = useRef(0);
  const inViewRef = useRef(false);
  const reduceRef = useRef(false);
  const lightboxOpenRef = useRef(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  useEffect(() => {
    lightboxOpenRef.current = lightboxOpen;
  }, [lightboxOpen]);

  useEffect(() => {
    if (media.length === 0) return;

    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduceRef.current = mq.matches;
    const onMq = () => {
      reduceRef.current = mq.matches;
    };
    mq.addEventListener("change", onMq);

    const root = rootRef.current;
    let io: IntersectionObserver | undefined;

    const syncVideos = () => {
      slidesRef.current.forEach((el, i) => {
        if (!(el instanceof HTMLVideoElement)) return;
        if (
          inViewRef.current &&
          i === indexRef.current &&
          !reduceRef.current &&
          !lightboxOpenRef.current
        ) {
          void el.play().catch(() => {});
        } else {
          el.pause();
        }
      });
    };

    const syncDots = (next: number) => {
      const dots = dotsRef.current?.querySelectorAll<HTMLElement>("[data-dot]");
      dots?.forEach((dot, i) => {
        const active = i === next;
        dot.classList.toggle("bg-accent", active);
        dot.classList.toggle("w-4", active);
        dot.classList.toggle("bg-white/35", !active);
        dot.classList.toggle("w-1.5", !active);
      });
    };

    const show = (next: number) => {
      indexRef.current = next;
      slidesRef.current.forEach((el, i) => {
        el?.classList.toggle("is-active", i === next);
      });
      syncDots(next);
      syncVideos();
    };

    show(0);

    if (root && typeof IntersectionObserver !== "undefined") {
      io = new IntersectionObserver(
        ([entry]) => {
          inViewRef.current = Boolean(entry?.isIntersecting);
          syncVideos();
        },
        { rootMargin: "40px", threshold: 0.2 },
      );
      io.observe(root);
    } else {
      inViewRef.current = true;
      syncVideos();
    }

    let timer: number | undefined;
    if (media.length > 1 && !reduceRef.current) {
      timer = window.setInterval(() => {
        if (
          !inViewRef.current ||
          reduceRef.current ||
          lightboxOpenRef.current
        ) {
          return;
        }
        show((indexRef.current + 1) % media.length);
      }, INTERVAL_MS);
    }

    return () => {
      mq.removeEventListener("change", onMq);
      io?.disconnect();
      if (timer) window.clearInterval(timer);
    };
  }, [media]);

  useEffect(() => {
    // Pause preview videos while lightbox is open
    slidesRef.current.forEach((el) => {
      if (el instanceof HTMLVideoElement) el.pause();
    });
  }, [lightboxOpen]);

  if (media.length === 0) return null;

  const heightClass =
    size === "large"
      ? "aspect-[16/10] min-h-[180px] sm:min-h-[220px]"
      : size === "wide"
        ? "aspect-[21/9] min-h-[140px] sm:min-h-[160px]"
        : "aspect-video min-h-[140px]";

  function openAt(i: number) {
    setLightboxIndex(i);
    setLightboxOpen(true);
  }

  function goTo(i: number) {
    indexRef.current = i;
    slidesRef.current.forEach((el, j) => {
      el?.classList.toggle("is-active", j === i);
    });
    const dots = dotsRef.current?.querySelectorAll<HTMLElement>("[data-dot]");
    dots?.forEach((dot, j) => {
      const active = j === i;
      dot.classList.toggle("bg-accent", active);
      dot.classList.toggle("w-4", active);
      dot.classList.toggle("bg-white/35", !active);
      dot.classList.toggle("w-1.5", !active);
    });
  }

  return (
    <>
      <div ref={rootRef} className={`relative w-full ${heightClass}`}>
        <button
          type="button"
          onClick={() => openAt(indexRef.current)}
          className="group/media relative block h-full w-full overflow-hidden rounded-xl border border-border bg-background text-left outline-none transition-colors hover:border-border-hover focus-visible:ring-2 focus-visible:ring-accent/50"
          aria-label={`Open media preview for ${title}`}
        >
          {media.map((item, i) => {
            const slideClass = `project-media-slide absolute inset-0 h-full w-full object-cover object-top${
              i === 0 ? " is-active" : ""
            }`;

            if (item.type === "video") {
              return (
                <video
                  key={item.src}
                  ref={(el) => {
                    slidesRef.current[i] = el;
                  }}
                  className={slideClass}
                  src={item.src}
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  disablePictureInPicture
                />
              );
            }

            return (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={item.src}
                ref={(el) => {
                  slidesRef.current[i] = el;
                }}
                src={item.src}
                alt=""
                className={slideClass}
                loading="lazy"
                decoding="async"
                draggable={false}
              />
            );
          })}

          <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

          <span className="pointer-events-none absolute bottom-2.5 right-2.5 inline-flex items-center gap-1.5 rounded-md border border-white/10 bg-black/55 px-2 py-1 font-mono text-[10px] tracking-wide text-zinc-200 opacity-90 transition-opacity group-hover/media:opacity-100">
            <ExpandIcon className="size-3" />
            View
          </span>
        </button>

        {media.length > 1 && (
          <div
            ref={dotsRef}
            className="absolute bottom-2.5 left-2.5 z-10 flex gap-1.5"
          >
            {media.map((item, i) => (
              <button
                key={item.src}
                type="button"
                data-dot
                onClick={(e) => {
                  e.stopPropagation();
                  goTo(i);
                }}
                className={`h-1 rounded-full transition-all ${
                  i === 0 ? "w-4 bg-accent" : "w-1.5 bg-white/35 hover:bg-white/55"
                }`}
                aria-label={`Show media ${i + 1}`}
              />
            ))}
          </div>
        )}
      </div>

      <MediaLightbox
        media={media}
        index={lightboxIndex}
        title={title}
        open={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onIndexChange={setLightboxIndex}
      />
    </>
  );
}
