import { MapPin } from "lucide-react";
import { contact } from "@/content/site";
import { Reveal } from "./Reveal";

/**
 * Location block. Uses a real Google Maps embed when `contact.mapsEmbedUrl`
 * is set; otherwise renders a clean placeholder — no fabricated coordinates.
 */
export function MapBlock() {
  return (
    <Reveal variant="image" className="relative aspect-[4/3] w-full overflow-hidden bg-beige md:aspect-[16/9] lg:aspect-auto lg:h-full lg:min-h-[32rem]">
      {contact.mapsEmbedUrl ? (
        <iframe
          title={`Map — ${contact.city}`}
          src={contact.mapsEmbedUrl}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 h-full w-full border-0 grayscale-[35%] contrast-[0.95]"
          allowFullScreen
        />
      ) : (
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-6 p-8 text-center">
          {/* decorative contour lines */}
          <svg
            aria-hidden="true"
            className="absolute inset-0 h-full w-full text-sage/25"
            viewBox="0 0 800 600"
            preserveAspectRatio="xMidYMid slice"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
          >
            <path d="M-50 120 C 150 40, 300 200, 520 110 S 850 60, 900 140" />
            <path d="M-50 220 C 120 150, 320 300, 540 210 S 820 160, 900 240" />
            <path d="M-50 320 C 140 260, 300 400, 560 310 S 840 260, 900 340" />
            <path d="M-50 420 C 160 360, 340 500, 580 410 S 800 360, 900 440" />
            <path d="M-50 520 C 120 460, 360 600, 600 510 S 820 460, 900 540" />
            <path d="M120 -20 C 200 150, 100 300, 220 620" />
            <path d="M420 -20 C 380 150, 520 300, 460 620" />
            <path d="M680 -20 C 640 200, 760 380, 700 620" />
          </svg>
          <span className="relative grid h-14 w-14 place-items-center rounded-full border border-sage/40 bg-background text-sage">
            <MapPin className="h-5 w-5" strokeWidth={1.25} />
            <span className="absolute inset-0 -z-10 animate-ping rounded-full bg-sage/20" style={{ animationDuration: "3s" }} />
          </span>
          <div className="relative">
            <p className="font-serif text-3xl font-light">{contact.city}</p>
            <p className="mt-2 text-[0.68rem] uppercase tracking-[0.3em] text-muted-foreground">
              Exact location to be confirmed
            </p>
          </div>
        </div>
      )}
    </Reveal>
  );
}
