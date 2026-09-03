import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useState } from "react";
import {
  about,
  brand,
  collections,
  contact,
  gallery,
  images,
  occasions,
  type ImageAsset,
} from "@/content/site";
import { cn } from "@/lib/utils";
import { ButtonAnchor, ButtonLink } from "./Button";
import { ContactActions } from "./ContactActions";
import { Lightbox } from "./Lightbox";
import { MapBlock } from "./MapBlock";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/* ------------------------------------------------------------------ */
/* HERO                                                                */
/* ------------------------------------------------------------------ */

export function Hero() {
  return (
    <section className="relative flex min-h-[100svh] items-end overflow-hidden bg-charcoal text-on-image">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src={images.hero.src}
          alt={images.hero.alt}
          width={images.hero.width}
          height={images.hero.height}
          fetchPriority="high"
          decoding="async"
          className="animate-hero-zoom h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/75 via-charcoal/20 to-charcoal/10" />
      </div>

      <div className="container-edge relative pb-16 pt-40 md:pb-24">
        <p className="animate-fade-up eyebrow text-on-image/70">{brand.name}</p>
        <h1 className="animate-fade-up stagger-1 display-xl mt-6 max-w-4xl">{brand.tagline}</h1>
        <p className="animate-fade-up stagger-2 mt-8 max-w-md text-base leading-relaxed text-on-image/80 md:text-lg">
          {brand.heroSupport}
        </p>
        <div className="animate-fade-up stagger-3 mt-10 flex flex-col gap-3 sm:flex-row sm:gap-4">
          <ButtonLink to="/collections" variant="light">
            Explore the flowers
          </ButtonLink>
          <ButtonLink to="/contact" variant="outline-light">
            Contact us
          </ButtonLink>
        </div>
      </div>

      <div className="animate-fade-in stagger-4 absolute bottom-8 right-6 hidden items-center gap-3 text-[0.62rem] uppercase tracking-[0.34em] text-on-image/60 md:flex md:right-16">
        <span>Scroll</span>
        <span className="h-px w-10 bg-on-image/40" />
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* INTRO                                                               */
/* ------------------------------------------------------------------ */

export function Intro() {
  return (
    <section className="container-edge py-24 md:py-40">
      <div className="grid items-center gap-14 md:grid-cols-12">
        <div className="md:col-span-5 md:col-start-1">
          <Reveal variant="image" className="aspect-[4/5] hover-zoom">
            <img
              src={images.intro.src}
              alt={images.intro.alt}
              width={images.intro.width}
              height={images.intro.height}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </Reveal>
        </div>
        <div className="md:col-span-6 md:col-start-7 lg:col-span-5 lg:col-start-8">
          <SectionHeading
            eyebrow="Zarrouk Flowers"
            title="Beauty, arranged naturally."
            description="Flowers have a way of saying what words sometimes cannot. Discover a refined floral experience designed around beauty, emotion and the little details."
          />
          <Reveal delay={150} className="mt-10">
            <Link to="/about" className="link-underline text-[0.72rem] font-medium uppercase tracking-[0.26em]">
              About the boutique
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* COLLECTIONS                                                         */
/* ------------------------------------------------------------------ */

export function Collections({ full = false }: { full?: boolean }) {
  return (
    <section className={cn("container-edge", full ? "pb-24 md:pb-40" : "py-24 md:py-40")}>
      {!full && (
        <div className="mb-16 flex flex-col gap-8 md:mb-20 md:flex-row md:items-end md:justify-between">
          <SectionHeading eyebrow="Collections" title="Explore the collection" />
          <Reveal delay={100}>
            <Link to="/collections" className="link-underline text-[0.72rem] font-medium uppercase tracking-[0.26em]">
              View all
            </Link>
          </Reveal>
        </div>
      )}
      <ul className="grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {collections.map((c, i) => (
          <Reveal as="li" key={c.slug} delay={i * 90} className={cn(i % 2 === 1 && "lg:mt-16")}>
            <Link to="/collections" hash={c.slug} className="group block">
              <div className="aspect-[4/5] hover-zoom bg-beige">
                <img
                  src={c.image.src}
                  alt={c.image.alt}
                  width={c.image.width}
                  height={c.image.height}
                  loading="lazy"
                  decoding="async"
                  sizes="(min-width: 1024px) 25vw, (min-width: 640px) 50vw, 100vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="mt-6 flex items-start justify-between gap-4">
                <div>
                  <h3 className="font-serif text-2xl md:text-[1.75rem]">{c.name}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.description}</p>
                </div>
                <ArrowUpRight
                  className="mt-2 h-5 w-5 shrink-0 text-sage transition-transform duration-500 ease-[var(--ease-elegant)] group-hover:-translate-y-1 group-hover:translate-x-1"
                  strokeWidth={1.25}
                />
              </div>
              <span className="link-underline mt-4 inline-block text-[0.68rem] font-medium uppercase tracking-[0.26em] text-foreground/80 group-hover:after:scale-x-100">
                Discover
              </span>
            </Link>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* OCCASIONS                                                           */
/* ------------------------------------------------------------------ */

export function Occasions() {
  return (
    <section className="bg-beige/60 py-24 md:py-40">
      <div className="container-edge">
        <SectionHeading eyebrow="Occasions" title="For every moment" align="center" />
      </div>
      {/* Horizontal scroll on mobile, five-up on large screens */}
      <ul className="mt-16 flex snap-x snap-mandatory gap-4 overflow-x-auto px-5 pb-4 [scrollbar-width:none] md:mt-20 lg:container-edge lg:grid lg:grid-cols-5 lg:gap-5 lg:overflow-visible lg:px-[clamp(1.25rem,4vw,4rem)]">
        {occasions.map((o, i) => (
          <Reveal
            as="li"
            key={o.name}
            delay={i * 80}
            className="group relative w-[72vw] shrink-0 snap-center sm:w-[44vw] lg:w-auto"
          >
            <div className="relative aspect-[3/4] hover-zoom bg-beige-deep">
              <img
                src={o.image.src}
                alt={o.image.alt}
                width={o.image.width}
                height={o.image.height}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 20vw, (min-width: 640px) 44vw, 72vw"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-charcoal/5 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-on-image">
                <h3 className="font-serif text-2xl md:text-3xl">{o.name}</h3>
                <p className="mt-1 max-w-[16rem] text-sm text-on-image/75 transition-all duration-700 ease-[var(--ease-elegant)] lg:translate-y-2 lg:opacity-0 lg:group-hover:translate-y-0 lg:group-hover:opacity-100">
                  {o.line}
                </p>
              </div>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* FEATURE                                                             */
/* ------------------------------------------------------------------ */

export function Feature() {
  return (
    <section className="grid lg:grid-cols-2">
      <Reveal variant="image" className="aspect-[4/5] lg:aspect-auto lg:min-h-[44rem]">
        <img
          src={images.feature.src}
          alt={images.feature.alt}
          width={images.feature.width}
          height={images.feature.height}
          loading="lazy"
          decoding="async"
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="h-full w-full object-cover"
        />
      </Reveal>
      <div className="flex items-center px-6 py-20 md:px-16 lg:px-24 xl:px-32">
        <Reveal className="max-w-lg">
          <p className="eyebrow">The art of flowers</p>
          <h2 className="display-lg mt-6">Let the flowers speak.</h2>
          <p className="mt-8 text-base leading-relaxed text-muted-foreground md:text-lg">
            From a single thoughtful gesture to a table filled with flowers, the right arrangement can
            completely transform a moment.
          </p>
          <ButtonLink to="/contact" variant="primary" className="mt-10">
            Get in touch
            <ArrowRight className="h-4 w-4 transition-transform duration-500 group-hover/btn:translate-x-1" strokeWidth={1.5} />
          </ButtonLink>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* GALLERY                                                             */
/* ------------------------------------------------------------------ */

export function Gallery({ items = gallery, heading = true }: { items?: ImageAsset[]; heading?: boolean }) {
  const [active, setActive] = useState<number | null>(null);

  return (
    <section className="container-edge py-24 md:py-40">
      {heading && (
        <SectionHeading
          eyebrow="Gallery"
          title="A little inspiration"
          description="A mood board of textures, tones and quiet compositions."
          align="center"
        />
      )}
      {/* Masonry via CSS columns; images are placeholders — see src/content/site.ts */}
      <ul className={cn("columns-2 gap-4 md:columns-3 md:gap-6", heading && "mt-16 md:mt-24")}>
        {items.map((img, i) => (
          <Reveal as="li" key={img.src} delay={(i % 3) * 80} className="mb-4 break-inside-avoid md:mb-6">
            <button
              type="button"
              onClick={() => setActive(i)}
              aria-label={`Open image ${i + 1}: ${img.alt}`}
              className="hover-zoom block w-full bg-beige focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <img
                src={img.src}
                alt={img.alt}
                width={img.width}
                height={img.height}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 768px) 33vw, 50vw"
                className="h-auto w-full"
              />
            </button>
          </Reveal>
        ))}
      </ul>
      <Lightbox images={items} index={active} onClose={() => setActive(null)} onChange={setActive} />
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* ABOUT                                                               */
/* ------------------------------------------------------------------ */

export function About({ as = "h2" }: { as?: "h1" | "h2" }) {
  return (
    <section className="bg-beige/60 py-24 md:py-40">
      <div className="container-edge grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <SectionHeading eyebrow="About" title={about.heading} as={as} />
        </div>
        <Reveal delay={120} className="md:col-span-6 md:col-start-7">
          <p className="font-serif text-3xl font-light leading-snug md:text-4xl">{about.intro}</p>
          {/* [Add verified business story here] — edit `about.story` in src/content/site.ts */}
          <p className="mt-8 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            {about.story ?? about.fallback}
          </p>
          <p className="mt-10 text-[0.68rem] uppercase tracking-[0.3em] text-muted-foreground">
            {brand.locationShort}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* CONTACT + MAP                                                       */
/* ------------------------------------------------------------------ */

export function Contact({ as = "h2" }: { as?: "h1" | "h2" }) {
  return (
    <section className="grid lg:grid-cols-2">
      <div className="container-edge flex items-center py-24 md:py-40 lg:pr-16">
        <div className="w-full max-w-xl">
          <SectionHeading
            eyebrow="Contact"
            title="Let's create something beautiful."
            description="Have a question or looking for the perfect flowers? Get in touch."
            as={as}
          />

          <Reveal delay={120} className="mt-12">
            <dl className="grid gap-6 border-t border-border pt-8 sm:grid-cols-2">
              <div>
                <dt className="eyebrow">Location</dt>
                <dd className="mt-3 font-serif text-2xl">{contact.city}</dd>
                {contact.address && <dd className="mt-1 text-sm text-muted-foreground">{contact.address}</dd>}
              </div>
              {contact.openingHours && (
                <div>
                  <dt className="eyebrow">Hours</dt>
                  <dd className="mt-3 text-sm leading-relaxed text-muted-foreground">{contact.openingHours}</dd>
                </div>
              )}
              {contact.phone && (
                <div>
                  <dt className="eyebrow">Phone</dt>
                  <dd className="mt-3 font-serif text-2xl">{contact.phone}</dd>
                </div>
              )}
              {contact.email && (
                <div>
                  <dt className="eyebrow">Email</dt>
                  <dd className="mt-3">
                    <ButtonAnchor href={`mailto:${contact.email}`} variant="ghost" className="normal-case tracking-normal">
                      {contact.email}
                    </ButtonAnchor>
                  </dd>
                </div>
              )}
            </dl>
          </Reveal>

          <Reveal delay={200} className="mt-10">
            <ContactActions />
            {!contact.phone && !contact.whatsapp && !contact.mapsUrl && (
              <p className="mt-4 text-[0.65rem] uppercase tracking-[0.26em] text-muted-foreground/70">
                Buttons activate once contact details are confirmed
              </p>
            )}
          </Reveal>
        </div>
      </div>
      <MapBlock />
    </section>
  );
}
