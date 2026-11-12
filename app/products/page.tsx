import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { ProductsCatalog } from "@/components/products-catalog"
import { buildMetadata } from "@/lib/seo"
import type { ProductCategory } from "@/lib/products"

export const metadata: Metadata = buildMetadata({
  title: "ATVs, Quad Bikes & Dirt Bikes for Sale in Pakistan | Subhan Enterprises",
  description:
    "Explore quad bikes, dirt bikes, accessories and parts from Subhan Enterprises in Pakistan. Contact us to confirm specifications, availability and prices.",
  path: "/products",
})

const validCategories: (ProductCategory | "all")[] = ["all", "atv", "dirt_bike", "accessories", "parts"]

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
