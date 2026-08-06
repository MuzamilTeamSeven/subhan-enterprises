import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { ProductsCatalog } from "@/components/products-catalog"
import { buildMetadata } from "@/lib/seo"
import type { ProductCategory } from "@/lib/products"

export const metadata: Metadata = buildMetadata({
  title: "Products | Subhan Enterprises — ATVs, Accessories & Parts",
  description:
    "Browse 25+ premium ATVs, quad bikes, riding accessories, and genuine parts. Filter by category, brand, price and availability. Nationwide delivery.",
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
