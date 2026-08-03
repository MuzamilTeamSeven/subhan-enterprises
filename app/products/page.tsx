import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { ProductsCatalog } from "@/components/products-catalog"
import type { ProductCategory } from "@/lib/products"

export const metadata: Metadata = {
  title: "Products | Subhan Enterprises",
  description:
    "Browse our full range of ATVs and quad bikes, riding accessories, and genuine parts & gear. Filter by category, brand, price and availability.",
}

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
