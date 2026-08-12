import type { MetadataRoute } from "next"
import { blogPostsMeta } from "@/lib/blog"
import { products } from "@/lib/products"
import { getSiteUrl } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()

  // Use a fixed reference date so the sitemap is deterministic in static builds
  const siteLastMod = new Date("2025-09-15")

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: siteLastMod, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/products`, lastModified: siteLastMod, changeFrequency: "weekly", priority: 0.95 },
    { url: `${base}/blog`, lastModified: siteLastMod, changeFrequency: "weekly", priority: 0.85 },
    { url: `${base}/contact`, lastModified: siteLastMod, changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/faq`, lastModified: siteLastMod, changeFrequency: "monthly", priority: 0.75 },
    { url: `${base}/warranty`, lastModified: siteLastMod, changeFrequency: "monthly", priority: 0.65 },
    { url: `${base}/shipping`, lastModified: siteLastMod, changeFrequency: "monthly", priority: 0.65 },
    { url: `${base}/support`, lastModified: siteLastMod, changeFrequency: "monthly", priority: 0.65 },
  ]

  // ATV products get highest priority — main commercial intent pages
  const atvPages: MetadataRoute.Sitemap = products
    .filter((p) => p.category === "atv")
    .map((p) => ({
      url: `${base}/products/${p.slug}`,
      lastModified: siteLastMod,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    }))

  // Accessories slightly lower
  const accessoryPages: MetadataRoute.Sitemap = products
    .filter((p) => p.category === "accessories")
    .map((p) => ({
      url: `${base}/products/${p.slug}`,
      lastModified: siteLastMod,
      changeFrequency: "weekly" as const,
      priority: 0.75,
    }))

  // Parts lower still
  const partsPages: MetadataRoute.Sitemap = products
    .filter((p) => p.category === "parts")
    .map((p) => ({
      url: `${base}/products/${p.slug}`,
      lastModified: siteLastMod,
      changeFrequency: "monthly" as const,
      priority: 0.65,
    }))

  const blogPages: MetadataRoute.Sitemap = blogPostsMeta.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...atvPages, ...accessoryPages, ...partsPages, ...blogPages]
}
