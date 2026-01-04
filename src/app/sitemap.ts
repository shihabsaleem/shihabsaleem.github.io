import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://shihabsaleem.online/",
      lastModified: new Date(),
    },
    {
      url: "https://shihabsaleem.online/about",
      lastModified: new Date(),
    },
     {
      url: "https://shihabsaleem.online/contact",
      lastModified: new Date(),
    },
    {
      url: "https://shihabsaleem.online/privacy",
      lastModified: new Date(),
    },
  ];
}
