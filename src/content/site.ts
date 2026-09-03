/**
 * ZARROUK FLOWERS — editable site content
 * ------------------------------------------------------------------
 * Everything the business owner may want to change lives here.
 *
 * VERIFICATION RULES
 * - Only `verified` business facts are shown on the public site.
 * - Fields set to `null` are hidden or shown as an inactive placeholder.
 * - Do NOT fill in phone numbers, addresses, hours, prices or social
 *   handles until they are confirmed with the business.
 *
 * IMAGES
 * - All photography below is placeholder / stock-style imagery.
 * - Replace the files in `src/assets/` with the shop's real photos.
 *   Keep similar aspect ratios (portrait 4:5 for cards) for best results.
 */

import hero from "@/assets/hero.jpg";
import intro from "@/assets/intro.jpg";
import feature from "@/assets/feature.jpg";

import collectionBouquets from "@/assets/collection-bouquets.jpg";
import collectionRoses from "@/assets/collection-roses.jpg";
import collectionSeasonal from "@/assets/collection-seasonal.jpg";
import collectionOccasions from "@/assets/collection-occasions.jpg";

import occasionBirthday from "@/assets/occasion-birthday.jpg";
import occasionLove from "@/assets/occasion-love.jpg";
import occasionThankYou from "@/assets/occasion-thankyou.jpg";
import occasionCelebration from "@/assets/occasion-celebration.jpg";
import occasionJustBecause from "@/assets/occasion-justbecause.jpg";

import gallery01 from "@/assets/gallery-01.jpg";
import gallery02 from "@/assets/gallery-02.jpg";
import gallery03 from "@/assets/gallery-03.jpg";
import gallery04 from "@/assets/gallery-04.jpg";
import gallery05 from "@/assets/gallery-05.jpg";
import gallery06 from "@/assets/gallery-06.jpg";
import gallery07 from "@/assets/gallery-07.jpg";
import gallery08 from "@/assets/gallery-08.jpg";
import gallery09 from "@/assets/gallery-09.jpg";

export const brand = {
  name: "Zarrouk Flowers",
  wordmark: ["Zarrouk", "Flowers"] as const,
  tagline: "Flowers for every feeling.",
  // Brand-style copy — not a factual business claim.
  heroSupport: "Thoughtfully arranged flowers for the moments that matter.",
  locationShort: "La Marsa · Tunisia",
};

export const seo = {
  siteTitle: "Zarrouk Flowers | Floral Boutique in La Marsa",
  siteDescription:
    "Discover Zarrouk Flowers in La Marsa and explore a world of beautiful floral inspiration.",
};

export const nav = [
  { label: "Home", to: "/" },
  { label: "Collections", to: "/collections" },
  { label: "About", to: "/about" },
  { label: "Gallery", to: "/gallery" },
  { label: "Contact", to: "/contact" },
] as const;

/**
 * VERIFIED CONTACT DETAILS ONLY.
 * Set a value to activate the matching button / block on the site.
 *   phone:        e.g. "+216 XX XXX XXX"   → activates "Call"
 *   whatsapp:     e.g. "216XXXXXXXX" (digits only) → activates "WhatsApp"
 *   address:      full street address       → shown under the location
 *   mapsUrl:      Google Maps share link     → activates "Get directions"
 *   mapsEmbedUrl: Google Maps embed src      → replaces the map placeholder
 */
export const contact = {
  city: "La Marsa, Tunisia",
  phone: null as string | null,
  whatsapp: null as string | null,
  address: null as string | null,
  mapsUrl: null as string | null,
  mapsEmbedUrl: null as string | null,
  email: null as string | null,
  openingHours: null as string | null,
};

/** Only verified official accounts. Leave empty to hide social icons. */
export const socials: { label: "Instagram" | "Facebook"; url: string }[] = [];

export const about = {
  heading: "Flowers with feeling.",
  intro: "Discover Zarrouk Flowers in La Marsa.",
  /**
   * [Add verified business story here]
   * Replace `story` with the shop's real story once confirmed with the owner.
   * While it is null, a neutral, claim-free paragraph is shown instead.
   */
  story: null as string | null,
  fallback:
    "A floral boutique in La Marsa, where every arrangement begins with a feeling and ends with the small details that make it yours.",
};

export type ImageAsset = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export const images = {
  hero: {
    src: hero,
    alt: "Soft cream and peach garden roses arranged with eucalyptus against warm linen",
    width: 1920,
    height: 1152,
  },
  intro: {
    src: intro,
    alt: "Hands arranging a loose bouquet of cream roses and olive branches on linen",
    width: 1024,
    height: 1280,
  },
  feature: {
    src: feature,
    alt: "Close-up of a cream peony's layered petals in soft light",
    width: 1024,
    height: 1280,
  },
} satisfies Record<string, ImageAsset>;

export type Category = {
  slug: string;
  name: string;
  description: string;
  image: ImageAsset;
};

/** Editable categories — add, rename or remove freely. No prices shown. */
export const collections: Category[] = [
  {
    slug: "bouquets",
    name: "Bouquets",
    description: "Hand-tied gatherings of fresh stems, wrapped simply.",
    image: {
      src: collectionBouquets,
      alt: "Hand-tied bouquet of cream roses and eucalyptus wrapped in kraft paper",
      width: 1024,
      height: 1280,
    },
  },
  {
    slug: "roses",
    name: "Roses",
    description: "The classic, in soft and quiet shades.",
    image: {
      src: collectionRoses,
      alt: "Close-up of dusty pink and ivory garden roses with dew drops",
      width: 1024,
      height: 1280,
    },
  },
  {
    slug: "seasonal",
    name: "Seasonal flowers",
    description: "Whatever the season is offering, arranged naturally.",
    image: {
      src: collectionSeasonal,
      alt: "Seasonal arrangement of white anemones, olive branches and dried grasses in a ceramic vase",
      width: 1024,
      height: 1280,
    },
  },
  {
    slug: "special-occasions",
    name: "Special occasions",
    description: "Flowers to mark the moments worth remembering.",
    image: {
      src: collectionOccasions,
      alt: "Cream and white floral centrepiece on a candlelit linen table",
      width: 1024,
      height: 1280,
    },
  },
];

export type Occasion = {
  name: string;
  line: string;
  image: ImageAsset;
};

/** General floral occasions — inspiration only, not specific packages. */
export const occasions: Occasion[] = [
  {
    name: "Birthday",
    line: "Something bright to begin the year.",
    image: {
      src: occasionBirthday,
      alt: "Bouquet of pale yellow ranunculus, daisies and peach roses",
      width: 1024,
      height: 1280,
    },
  },
  {
    name: "Love",
    line: "Say it softly, or say it all.",
    image: {
      src: occasionLove,
      alt: "Deep burgundy and cream roses laid on ivory linen",
      width: 1024,
      height: 1280,
    },
  },
  {
    name: "Thank you",
    line: "A small gesture that lingers.",
    image: {
      src: occasionThankYou,
      alt: "Small posy of white sweet peas and spray roses tied with linen ribbon",
      width: 1024,
      height: 1280,
    },
  },
  {
    name: "Celebration",
    line: "For tables, toasts and gatherings.",
    image: {
      src: occasionCelebration,
      alt: "Abundant white hydrangea and rose arrangement on a celebration table",
      width: 1024,
      height: 1280,
    },
  },
  {
    name: "Just because",
    line: "No reason is the best reason.",
    image: {
      src: occasionJustBecause,
      alt: "A single white ranunculus in a glass bottle on a sunlit windowsill",
      width: 1024,
      height: 1280,
    },
  },
];

/**
 * Gallery — placeholder inspiration imagery.
 * These are NOT photographs of Zarrouk Flowers' own work.
 * Swap each file in `src/assets/` for real shop photography.
 */
export const gallery: ImageAsset[] = [
  { src: gallery01, alt: "Overhead flat lay of cream roses, eucalyptus and florist scissors on linen", width: 1024, height: 1024 },
  { src: gallery02, alt: "Tall white delphinium in a stoneware vase against a warm plaster wall", width: 1024, height: 1408 },
  { src: gallery03, alt: "Close-up of a dusty pink ranunculus in soft light", width: 1024, height: 768 },
  { src: gallery04, alt: "Bouquet of white peonies on a wooden bench in a sunlit whitewashed courtyard", width: 1024, height: 1280 },
  { src: gallery05, alt: "Dried pampas grass in a matte beige vase on an ivory shelf", width: 1024, height: 1024 },
  { src: gallery06, alt: "Cream roses and eucalyptus in a low brass bowl beside a candle", width: 1024, height: 768 },
  { src: gallery07, alt: "A single blush peony bloom on a warm beige background", width: 1024, height: 1408 },
  { src: gallery08, alt: "Buckets of fresh white lilies and cream roses in a florist studio", width: 1024, height: 1024 },
  { src: gallery09, alt: "Delicate white jasmine and orange blossom sprigs on ivory linen", width: 1024, height: 1280 },
];
