import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://shihabsaleem.github.io/",
      lastModified: new Date(),
    },
    {
      url: "https://shihabsaleem.github.io/about",
      lastModified: new Date(),
    },
     {
      url: "https://shihabsaleem.github.io/contact",
      lastModified: new Date(),
    },
    {
      url: "https://shihabsaleem.github.io/privacy",
      lastModified: new Date(),
    },
  ];
}
