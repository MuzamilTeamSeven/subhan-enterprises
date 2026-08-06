import type { MetadataRoute } from "next"
import { blogPostsMeta } from "@/lib/blog"
import { products } from "@/lib/products"
import { getSiteUrl } from "@/lib/seo"

export default function sitemap(): MetadataRoute.Sitemap {
  const base = getSiteUrl()
  const now = new Date()

  const staticPages: MetadataRoute.Sitemap = [
    { url: base, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${base}/products`, lastModified: now, changeFrequency: "weekly", priority: 0.9 },
    { url: `${base}/blog`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    { url: `${base}/contact`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/faq`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
    { url: `${base}/warranty`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/shipping`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
    { url: `${base}/support`, lastModified: now, changeFrequency: "monthly", priority: 0.5 },
  ]

  const productPages: MetadataRoute.Sitemap = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }))

  const blogPages: MetadataRoute.Sitemap = blogPostsMeta.map((p) => ({
    url: `${base}/blog/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }))

  return [...staticPages, ...productPages, ...blogPages]
}
