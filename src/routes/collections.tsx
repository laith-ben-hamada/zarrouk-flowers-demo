import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Collections, Feature, Occasions } from "@/components/site/sections";

const title = "Collections | Zarrouk Flowers, La Marsa";
const description =
  "Explore bouquets, roses, seasonal flowers and special-occasion arrangements from Zarrouk Flowers in La Marsa.";

export const Route = createFileRoute("/collections")({
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
  component: CollectionsPage,
});

function CollectionsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Collections"
        title="Explore the collection"
        description="Four ways to begin. Each category is a starting point rather than a fixed list — the flowers change with the season."
      />
      <Collections full />
      <Occasions />
      <Feature />
    </>
  );
}
