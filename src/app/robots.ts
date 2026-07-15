import { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: "*",
                allow: "/",
            },
            {
                userAgent: ["GPTBot", "PerplexityBot", "ClaudeBot", "anthropic-ai", "OAI-SearchBot", "Google-Extended"],
                allow: "/",
            }
        ],
        sitemap: "https://www.shihabsaleem.site/sitemap.xml",
    };
}
