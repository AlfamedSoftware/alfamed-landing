import type { MetadataRoute } from "next"

const BASE_URL = "https://alfamed-page.vercel.app"

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${BASE_URL}/`,
      lastModified: new Date("2026-06-29"),
      changeFrequency: "monthly",
      priority: 1,
    },
  ]
}
