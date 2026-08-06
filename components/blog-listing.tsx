"use client"

import { useMemo, useState } from "react"
import { Search, ChevronLeft, ChevronRight } from "lucide-react"
import { BlogCard } from "@/components/blog-card"
import {
  blogCategoryLabels,
  blogPostsMeta,
  type BlogCategory,
} from "@/lib/blog"

const POSTS_PER_PAGE = 6
type CategoryFilter = BlogCategory | "all"

const categoryTabs: { key: CategoryFilter; label: string }[] = [
  { key: "all", label: "All Articles" },
  ...(Object.entries(blogCategoryLabels) as [BlogCategory, string][]).map(([key, label]) => ({
    key,
    label,
  })),
]

export function BlogListing({ initialCategory = "all" }: { initialCategory?: CategoryFilter }) {
  const [category, setCategory] = useState<CategoryFilter>(initialCategory)
  const [query, setQuery] = useState("")
  const [page, setPage] = useState(1)

  const filtered = useMemo(() => {
    return blogPostsMeta.filter((p) => {
      if (category !== "all" && p.category !== category) return false
      if (query.trim()) {
        const q = query.trim().toLowerCase()
        return (
          p.title.toLowerCase().includes(q) ||
          p.excerpt.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
        )
      }
      return true
    })
  }, [category, query])

  const totalPages = Math.max(1, Math.ceil(filtered.length / POSTS_PER_PAGE))
  const currentPage = Math.min(page, totalPages)
  const paginated = filtered.slice((currentPage - 1) * POSTS_PER_PAGE, currentPage * POSTS_PER_PAGE)

  const onCategoryChange = (c: CategoryFilter) => {
    setCategory(c)
    setPage(1)
  }

  const onQueryChange = (value: string) => {
    setQuery(value)
    setPage(1)
  }

  return (
    <section className="px-3 py-6 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="glass rounded-2xl p-5 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Blog</p>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-balance">
            News, Tips &amp; Adventures
          </h1>
          <p className="mt-2 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            Expert guides on ATV maintenance, buying advice, safety gear, and off-road adventures across Pakistan.
          </p>
        </div>

        <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div className="glass flex items-center gap-2 rounded-xl px-4 py-2.5">
            <Search className="h-4 w-4 text-muted-foreground" />
            <input
              value={query}
              onChange={(e) => onQueryChange(e.target.value)}
              placeholder="Search articles..."
              aria-label="Search blog articles"
              className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none sm:w-72"
            />
          </div>
          <p className="text-sm text-muted-foreground">
            {filtered.length} {filtered.length === 1 ? "article" : "articles"}
          </p>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {categoryTabs.map((c) => (
            <button
              key={c.key}
              onClick={() => onCategoryChange(c.key)}
              className={`rounded-full px-4 py-1.5 text-sm font-medium transition ${
                category === c.key
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {c.label}
            </button>
          ))}
        </div>

        {paginated.length === 0 ? (
          <div className="glass mt-6 flex flex-col items-center justify-center rounded-2xl px-6 py-20 text-center">
            <p className="text-lg font-semibold text-foreground">No articles found</p>
            <p className="mt-1 text-sm text-muted-foreground">Try a different search or category.</p>
          </div>
        ) : (
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {paginated.map((post, i) => (
              <BlogCard key={post.slug} post={post} priority={i < 3} />
            ))}
          </div>
        )}

        {totalPages > 1 && (
          <nav className="mt-8 flex items-center justify-center gap-3" aria-label="Blog pagination">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="btn-glass flex h-10 w-10 items-center justify-center rounded-xl disabled:opacity-40"
              aria-label="Previous page"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-sm text-muted-foreground">
              Page <span className="font-semibold text-foreground">{currentPage}</span> of{" "}
              <span className="font-semibold text-foreground">{totalPages}</span>
            </span>
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="btn-glass flex h-10 w-10 items-center justify-center rounded-xl disabled:opacity-40"
              aria-label="Next page"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </nav>
        )}
      </div>
    </section>
  )
}
