import { useCallback, useEffect } from "react";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import type { ImageAsset } from "@/content/site";

type Props = {
  images: ImageAsset[];
  index: number | null;
  onClose: () => void;
  onChange: (next: number) => void;
};

export function Lightbox({ images, index, onClose, onChange }: Props) {
  const open = index !== null;

  const prev = useCallback(() => {
    if (index === null) return;
    onChange((index - 1 + images.length) % images.length);
  }, [index, images.length, onChange]);

  const next = useCallback(() => {
    if (index === null) return;
    onChange((index + 1) % images.length);
  }, [index, images.length, onChange]);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [open, onClose, prev, next]);

  if (!open || index === null) return null;
  const img = images[index];

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Image viewer"
      className="animate-fade-in fixed inset-0 z-[60] flex items-center justify-center bg-charcoal/95 p-4 sm:p-10"
      onClick={onClose}
      style={{ animationDuration: "0.4s" }}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label="Close"
        className="absolute right-4 top-4 grid h-12 w-12 place-items-center text-on-image/80 transition-colors hover:text-on-image sm:right-8 sm:top-8"
      >
        <X className="h-6 w-6" strokeWidth={1.25} />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          prev();
        }}
        aria-label="Previous image"
        className="absolute left-2 top-1/2 hidden h-14 w-14 -translate-y-1/2 place-items-center text-on-image/70 transition-colors hover:text-on-image sm:grid sm:left-6"
      >
        <ChevronLeft className="h-8 w-8" strokeWidth={1} />
      </button>

      <figure
        key={index}
        className="animate-fade-up flex max-h-full max-w-5xl flex-col items-center"
        style={{ animationDuration: "0.7s" }}
        onClick={(e) => e.stopPropagation()}
      >
        <img
          src={img.src}
          alt={img.alt}
          width={img.width}
          height={img.height}
          className="max-h-[80vh] w-auto max-w-full object-contain shadow-soft"
        />
        <figcaption className="mt-4 text-[0.68rem] uppercase tracking-[0.3em] text-on-image/60">
          {index + 1} / {images.length}
        </figcaption>
      </figure>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation();
          next();
        }}
        aria-label="Next image"
        className="absolute right-2 top-1/2 hidden h-14 w-14 -translate-y-1/2 place-items-center text-on-image/70 transition-colors hover:text-on-image sm:grid sm:right-6"
      >
        <ChevronRight className="h-8 w-8" strokeWidth={1} />
      </button>

      {/* Mobile swipe-less controls */}
      <div className="absolute inset-x-0 bottom-6 flex justify-center gap-10 sm:hidden">
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            prev();
          }}
          aria-label="Previous image"
          className="grid h-12 w-12 place-items-center text-on-image/80"
        >
          <ChevronLeft className="h-7 w-7" strokeWidth={1} />
        </button>
        <button
          type="button"
          onClick={(e) => {
            e.stopPropagation();
            next();
          }}
          aria-label="Next image"
          className="grid h-12 w-12 place-items-center text-on-image/80"
        >
          <ChevronRight className="h-7 w-7" strokeWidth={1} />
        </button>
      </div>
    </div>
  );
}
