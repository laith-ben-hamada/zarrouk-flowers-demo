import { createFileRoute } from "@tanstack/react-router";
import {
  About,
  Collections,
  Contact,
  Feature,
  Gallery,
  Hero,
  Intro,
  Occasions,
} from "@/components/site/sections";
import { seo } from "@/content/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: seo.siteTitle },
      { name: "description", content: seo.siteDescription },
      { property: "og:title", content: seo.siteTitle },
      { property: "og:description", content: seo.siteDescription },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <>
      <Hero />
      <Intro />
      <Collections />
      <Occasions />
      <Feature />
      <Gallery />
      <About />
      <Contact />
    </>
  );
}
