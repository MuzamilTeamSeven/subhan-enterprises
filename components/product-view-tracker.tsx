"use client"

import { useEffect, useRef } from "react"
import { usePathname } from "next/navigation"
import { getAnalyticsPagePath, pushAnalyticsEvent } from "@/lib/analytics"
import type { Product } from "@/lib/products"

type ProductViewTrackerProps = Pick<Product, "id" | "name" | "category" | "slug">

export function ProductViewTracker({ id, name, category, slug }: ProductViewTrackerProps) {
  const pathname = usePathname() || `/products/${slug}`
  const lastProduct = useRef<string | null>(null)

  useEffect(() => {
    if (lastProduct.current === id) return
    lastProduct.current = id
    const pagePath = getAnalyticsPagePath(pathname)
    pushAnalyticsEvent("product_view", {
      product_id: id,
      product_name: name,
      product_category: category,
      product_url: `${window.location.origin}/products/${slug}`,
      page_path: pagePath,
    })
  }, [category, id, name, pathname, slug])

  return null
}
