export type BlogCategory = "maintenance" | "buying-guide" | "safety" | "adventures" | "news"

export const blogCategoryLabels: Record<BlogCategory, string> = {
  maintenance: "Maintenance",
  "buying-guide": "Buying Guide",
  safety: "Safety",
  adventures: "Adventures",
  news: "News & Tips",
}

export type BlogSection = {
  heading: string
  paragraphs: string[]
  list?: string[]
}

export type BlogFaq = {
  question: string
  answer: string
}

export type BlogPostMeta = {
  slug: string
  title: string
  metaTitle: string
  metaDescription: string
  excerpt: string
  featuredImage: string
  imageAlt?: string
  category: BlogCategory
  publishedAt: string
  updatedAt?: string
  readTime: number
  author: string
  tags: string[]
  relatedProductSlugs?: string[]
  relatedArticleSlugs?: string[]
}

export type BlogPost = BlogPostMeta & {
  sections: BlogSection[]
  faqs: BlogFaq[]
  cta: {
    heading: string
    text: string
    buttonLabel: string
    href: string
  }
}

export function formatBlogDate(iso: string) {
  const d = new Date(iso)
  return {
    day: d.getDate().toString().padStart(2, "0"),
    month: d.toLocaleString("en-US", { month: "short" }).toUpperCase(),
    full: d.toLocaleDateString("en-PK", { year: "numeric", month: "long", day: "numeric" }),
  }
}

export function estimateReadTime(sections: BlogSection[], faqs: BlogFaq[]): number {
  const text = [
    ...sections.flatMap((s) => [...s.paragraphs, ...(s.list ?? [])]),
    ...faqs.flatMap((f) => [f.question, f.answer]),
  ].join(" ")
  const words = text.split(/\s+/).length
  return Math.max(5, Math.ceil(words / 200))
}
