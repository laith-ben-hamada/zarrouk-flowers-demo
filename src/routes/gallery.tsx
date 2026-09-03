import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Gallery } from "@/components/site/sections";

const title = "Gallery | Zarrouk Flowers, La Marsa";
const description = "A little floral inspiration — textures, tones and quiet compositions from Zarrouk Flowers in La Marsa.";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: GalleryPage,
});

function GalleryPage() {
  return (
    <>
      <PageHeader
        eyebrow="Gallery"
        title="A little inspiration"
        description="A mood board of textures, tones and quiet compositions. Tap any image to view it larger."
      />
      <div className="-mt-24 md:-mt-40">
        <Gallery heading={false} />
      </div>
    </>
  );
}
