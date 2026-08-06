import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { BlogListing } from "@/components/blog-listing"
import { buildMetadata } from "@/lib/seo"
import type { BlogCategory } from "@/lib/blog"

export const metadata: Metadata = buildMetadata({
  title: "Blog | Subhan Enterprises — ATV Tips, Guides & Adventures",
  description:
    "Expert ATV guides, maintenance tips, safety advice, and off-road adventure stories from Pakistan's premium quad bike dealer, Subhan Enterprises.",
  path: "/blog",
})

const validCategories: (BlogCategory | "all")[] = [
  "all",
  "maintenance",
  "buying-guide",
  "safety",
  "adventures",
  "news",
]

export default async function BlogPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams
  const initialCategory =
    category && validCategories.includes(category as BlogCategory) ? (category as BlogCategory) : "all"

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <BlogListing initialCategory={initialCategory} />
      <SiteFooter />
    </main>
  )
}
