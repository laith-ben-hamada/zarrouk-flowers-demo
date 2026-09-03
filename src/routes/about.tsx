import { createFileRoute } from "@tanstack/react-router";
import { About, Feature, Intro } from "@/components/site/sections";

const title = "About | Zarrouk Flowers, La Marsa";
const description = "Discover Zarrouk Flowers, a floral boutique in La Marsa, Tunisia.";

export const Route = createFileRoute("/about")({
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
  component: AboutPage,
});

function AboutPage() {
  return (
    <div className="pt-20">
      <About as="h1" />
      <Intro />
      <Feature />
    </div>
  );
}
