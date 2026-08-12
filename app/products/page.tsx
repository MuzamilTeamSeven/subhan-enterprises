import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { ProductsCatalog } from "@/components/products-catalog"
import { buildMetadata } from "@/lib/seo"
import type { ProductCategory } from "@/lib/products"

export const metadata: Metadata = buildMetadata({
  title: "ATV & Quad Bikes for Sale in Pakistan | Subhan Enterprises",
  description:
    "Shop 25+ ATVs, quad bikes, trail bikes and accessories from top brands — Yamaha, Can-Am, CFMOTO, Polaris, Kawasaki and more. Filter by category or brand. Nationwide delivery from Subhan Enterprises, Lahore.",
  path: "/products",
})

const validCategories: (ProductCategory | "all")[] = ["all", "atv", "accessories", "parts"]

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const { category } = await searchParams
  const initialCategory =
    category && validCategories.includes(category as ProductCategory) ? (category as ProductCategory) : "all"

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <ProductsCatalog initialCategory={initialCategory} />
      <SiteFooter />
    </main>
  )
}
