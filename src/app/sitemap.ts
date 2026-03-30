import { MetadataRoute } from "next";
import assetData from "@/data/asset";
import caseStudies from "@/data/casestudy";

export const dynamic = "force-static";

// Always use your production domain in sitemap
const BASE_URL = "https://www.shihabsaleem.site";

// MUST match your page.tsx logic
function nameToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const { works } = assetData;

  // Set realistic dates - update this when you modify pages
  const staticLastModified = new Date();

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}`,
      lastModified: staticLastModified,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/case-studies`,
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.7,
    },

  ];

  const workPages: MetadataRoute.Sitemap = works
    .map((work) => ({
      url: `${BASE_URL}/work/${nameToSlug(work.name)}`,
      lastModified: staticLastModified,
      changeFrequency: "weekly",
      priority: 0.9,
    }));

  const caseStudyPages: MetadataRoute.Sitemap = caseStudies.map((study) => ({
    url: `${BASE_URL}/case-studies/${study.slug}`,
    lastModified: staticLastModified,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...staticPages, ...workPages, ...caseStudyPages];
}