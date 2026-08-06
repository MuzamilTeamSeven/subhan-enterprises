"use client"

import { useMemo, useState } from "react"
import { Check, Search, SlidersHorizontal, X } from "lucide-react"
import { ProductCard } from "@/components/product-card"
import { products, categoryLabels, type ProductCategory } from "@/lib/products"

type CategoryFilter = ProductCategory | "all"
type SortKey = "featured" | "price-asc" | "price-desc" | "name"

const categoryTabs: { key: CategoryFilter; label: string }[] = [
  { key: "all", label: "All" },
  { key: "atv", label: "Quad Bikes" },
  { key: "accessories", label: "Accessories" },
  { key: "parts", label: "Parts & Gear" },
]

const sortOptions: { key: SortKey; label: string }[] = [
  { key: "featured", label: "Featured" },
  { key: "price-asc", label: "Price: Low to High" },
  { key: "price-desc", label: "Price: High to Low" },
  { key: "name", label: "Name A-Z" },
]

const brands = Array.from(new Set(products.map((p) => p.brand))).sort()

export function ProductsCatalog({ initialCategory = "all" }: { initialCategory?: CategoryFilter }) {
  const [category, setCategory] = useState<CategoryFilter>(initialCategory)
  const [query, setQuery] = useState("")
  const [selectedBrands, setSelectedBrands] = useState<string[]>([])
  const [inStockOnly, setInStockOnly] = useState(false)
  const [sort, setSort] = useState<SortKey>("featured")
  const [filtersOpen, setFiltersOpen] = useState(false)

  const toggleBrand = (brand: string) =>
    setSelectedBrands((prev) => (prev.includes(brand) ? prev.filter((b) => b !== brand) : [...prev, brand]))

  const filtered = useMemo(() => {
    let list = products.filter((p) => {
      if (category !== "all" && p.category !== category) return false
      if (selectedBrands.length > 0 && !selectedBrands.includes(p.brand)) return false
      if (inStockOnly && !p.inStock) return false
      if (query.trim() && !`${p.name} ${p.brand}`.toLowerCase().includes(query.trim().toLowerCase())) return false
      return true
    })

    list = [...list].sort((a, b) => {
      if (sort === "price-asc") return a.price - b.price
      if (sort === "price-desc") return b.price - a.price
      if (sort === "name") return a.name.localeCompare(b.name)
      return 0
    })
    return list
  }, [category, query, selectedBrands, inStockOnly, sort])

  const clearAll = () => {
    setCategory("all")
    setQuery("")
    setSelectedBrands([])
    setInStockOnly(false)
    setSort("featured")
  }

  const hasActiveFilters = selectedBrands.length > 0 || inStockOnly || query.trim() !== "" || category !== "all"

  const FiltersPanel = (
    <div className="flex flex-col gap-6">
      <div>
        <h3 className="text-sm font-bold text-foreground">Category</h3>
        <div className="mt-3 flex flex-col gap-1.5">
          {categoryTabs.map((c) => (
            <button
              key={c.key}
              onClick={() => setCategory(c.key)}
              className={`flex items-center justify-between rounded-lg px-3 py-2 text-left text-sm transition-all duration-300 ${
                category === c.key
                  ? "bg-primary/20 border border-primary/20 font-bold text-primary shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                  : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
              }`}
            >
              {c.label}
              <span className="text-xs">
                {c.key === "all" ? products.length : products.filter((p) => p.category === c.key).length}
              </span>
            </button>
          ))}
        </div>
      </div>

      <div className="border-t border-border pt-5">
        <h3 className="text-sm font-bold text-foreground">Brand</h3>
        <div className="mt-3 flex flex-col gap-2">
          {brands.map((brand) => (
            <label key={brand} className="flex cursor-pointer items-center gap-2.5 text-sm text-muted-foreground">
              <span
                className={`flex h-4.5 w-4.5 items-center justify-center rounded border transition ${
                  selectedBrands.includes(brand) ? "border-primary bg-primary text-primary-foreground" : "border-border"
                }`}
                style={{ height: "1.125rem", width: "1.125rem" }}
              >
                {selectedBrands.includes(brand) && <Check className="h-3 w-3" />}
              </span>
              <input
                type="checkbox"
                className="sr-only"
                checked={selectedBrands.includes(brand)}
                onChange={() => toggleBrand(brand)}
              />
              {brand}
            </label>
          ))}
        </div>
      </div>

      <div className="border-t border-border pt-5">
        <h3 className="text-sm font-bold text-foreground">Availability</h3>
        <label className="mt-3 flex cursor-pointer items-center gap-2.5 text-sm text-muted-foreground">
          <span
            className={`flex items-center justify-center rounded border transition ${
              inStockOnly ? "border-primary bg-primary text-primary-foreground" : "border-border"
            }`}
            style={{ height: "1.125rem", width: "1.125rem" }}
          >
            {inStockOnly && <Check className="h-3 w-3" />}
          </span>
          <input
            type="checkbox"
            className="sr-only"
            checked={inStockOnly}
            onChange={() => setInStockOnly((v) => !v)}
          />
          In stock only
        </label>
      </div>

      {hasActiveFilters && (
        <button
          onClick={clearAll}
          className="btn-glass flex items-center justify-center gap-2 rounded-xl px-3 py-2 text-sm font-medium"
        >
          <X className="h-4 w-4" /> Clear all filters
        </button>
      )}
    </div>
  )

  return (
    <section className="px-3 py-6 sm:px-6">
      <div className="mx-auto max-w-7xl">
        {/* Page header */}
        <div className="glass rounded-2xl p-5 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Shop</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-balance">
            Explore Our Full Range
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            From powerful quad bikes to premium accessories and genuine parts &amp; gear — everything you need for the
            ride, all in one place. Use the filters to find exactly what you want.
          </p>
        </div>

        {/* Controls */}
        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="glass focus-within:border-primary/40 transition-all duration-300 flex items-center gap-2 rounded-xl px-4 py-2.5">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search products..."
              className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none sm:w-64"
            />
          </div>
          <div className="flex items-center gap-2">
            <button
              onClick={() => setFiltersOpen(true)}
              className="btn-glass flex items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold lg:hidden"
            >
              <SlidersHorizontal className="h-4 w-4 text-primary" /> Filters
            </button>
            <div className="glass focus-within:border-primary/40 transition-all duration-300 flex items-center gap-2 rounded-xl px-4 py-2.5">
              <label htmlFor="sort" className="text-xs text-muted-foreground">
                Sort
              </label>
              <select
                id="sort"
                value={sort}
                onChange={(e) => setSort(e.target.value as SortKey)}
                className="bg-transparent text-sm font-semibold text-foreground focus:outline-none"
              >
                {sortOptions.map((o) => (
                  <option key={o.key} value={o.key} className="bg-card text-foreground">
                    {o.label}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Category quick tabs */}
        <div className="mt-4 flex flex-wrap gap-2">
          {categoryTabs.map((c) => (
            <button
              key={c.key}
              onClick={() => setCategory(c.key)}
              className={`rounded-full px-5 py-1.5 text-sm font-semibold transition-all duration-300 ${
                category === c.key
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25 border border-primary/20"
                  : "glass text-muted-foreground hover:text-foreground hover:border-white/20"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Layout: sidebar + grid */}
        <div className="mt-4 grid gap-4 lg:grid-cols-[240px_1fr]">
          {/* Desktop sidebar */}
          <aside className="glass hidden h-fit rounded-2xl p-5 lg:block">{FiltersPanel}</aside>

          {/* Grid */}
          <div>
            <p className="mb-3 text-sm text-muted-foreground">
              Showing <span className="font-semibold text-foreground">{filtered.length}</span>{" "}
              {filtered.length === 1 ? "product" : "products"}
            </p>

            {filtered.length === 0 ? (
              <div className="glass flex flex-col items-center justify-center rounded-2xl px-6 py-20 text-center">
                <p className="text-lg font-semibold text-foreground">No products found</p>
                <p className="mt-1 text-sm text-muted-foreground">Try adjusting your filters or search.</p>
                <button
                  onClick={clearAll}
                  className="btn-primary mt-4 rounded-xl px-5 py-2.5 text-sm font-semibold"
                >
                  Clear filters
                </button>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
                {filtered.map((p, i) => (
                  <ProductCard key={p.id} product={p} priority={i < 3} />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mobile filters drawer */}
      {filtersOpen && (
        <div className="fixed inset-0 z-[60] lg:hidden">
          <div className="absolute inset-0 bg-background/70 backdrop-blur-sm" onClick={() => setFiltersOpen(false)} />
          <div className="glass-strong absolute inset-y-0 left-0 w-[85%] max-w-xs overflow-y-auto p-5">
            <div className="mb-5 flex items-center justify-between">
              <h2 className="text-lg font-bold text-foreground">Filters</h2>
              <button
                onClick={() => setFiltersOpen(false)}
                className="btn-glass flex h-9 w-9 items-center justify-center rounded-lg"
                aria-label="Close filters"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            {FiltersPanel}
            <button
              onClick={() => setFiltersOpen(false)}
              className="btn-primary mt-6 w-full rounded-xl py-3 text-sm font-semibold text-primary-foreground"
            >
              View {filtered.length} results
            </button>
          </div>
        </div>
      )}
    </section>
  )
}
