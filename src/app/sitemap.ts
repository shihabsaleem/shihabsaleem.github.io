import { MetadataRoute } from "next";
import assetData from "@/data/asset";

export const dynamic = "force-static";

// Vercel automatically provides VERCEL_URL during builds
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL 
  || (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : null)
  || "https://www.shihabsaleem.online"; // Note: your site uses www subdomain

// MUST match your page.tsx logic
function nameToSlug(name: string): string {
  return name.toLowerCase().replace(/\s+/g, "-");
}

export default function sitemap(): MetadataRoute.Sitemap {
  const { works } = assetData;
  
  // Set realistic dates - update this when you modify pages
  const staticLastModified = new Date("2025-01-04");

  const staticPages: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: staticLastModified,
      changeFrequency: "weekly", // Portfolio homepage - update more frequently
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: staticLastModified,
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: staticLastModified,
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/privacy`,
      lastModified: staticLastModified,
      changeFrequency: "yearly",
      priority: 0.3,
    },
  ];

  // Your portfolio work pages (e.g., /inventory, /adil-rafeeque, /custom-erp, etc.)
  const workPages: MetadataRoute.Sitemap = works.map((work) => ({
    url: `${BASE_URL}/${nameToSlug(work.name)}`,
    lastModified: staticLastModified,
    changeFrequency: "monthly",
    priority: 0.9, // High priority - these are your main showcase pieces
  }));

  return [...staticPages, ...workPages];
}