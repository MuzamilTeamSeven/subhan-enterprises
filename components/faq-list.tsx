"use client"

import { useMemo, useState } from "react"
import { ChevronDown, Search } from "lucide-react"

export type FaqCategory = {
  category: string
  items: { q: string; a: string }[]
}

function FaqItem({ q, a, open, onToggle }: { q: string; a: string; open: boolean; onToggle: () => void }) {
  return (
    <div className="glass overflow-hidden rounded-xl">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-foreground sm:text-base">{q}</span>
        <ChevronDown className={`h-4 w-4 shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}`} />
      </button>
      {open && <p className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">{a}</p>}
    </div>
  )
}

export function FaqList({ data }: { data: FaqCategory[] }) {
  const [query, setQuery] = useState("")
  const [openKey, setOpenKey] = useState<string | null>(null)

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return data
    return data
      .map((group) => ({
        ...group,
        items: group.items.filter((it) => `${it.q} ${it.a}`.toLowerCase().includes(q)),
      }))
      .filter((group) => group.items.length > 0)
  }, [data, query])

  const totalResults = filtered.reduce((sum, g) => sum + g.items.length, 0)

  return (
    <div>
      {/* Search */}
      <div className="glass mx-auto flex max-w-xl items-center gap-2 rounded-xl px-4 py-3">
        <Search className="h-4 w-4 text-muted-foreground" />
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search questions..."
          className="w-full bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
      </div>

      {query.trim() && (
        <p className="mt-3 text-center text-sm text-muted-foreground">
          {totalResults} {totalResults === 1 ? "result" : "results"} found
        </p>
      )}

      {/* Groups */}
      <div className="mt-6 flex flex-col gap-8">
        {filtered.length === 0 ? (
          <div className="glass rounded-2xl px-6 py-16 text-center">
            <p className="text-lg font-semibold text-foreground">No matching questions</p>
            <p className="mt-1 text-sm text-muted-foreground">Try a different keyword or contact our team.</p>
          </div>
        ) : (
          filtered.map((group) => (
            <div key={group.category}>
              <h2 className="mb-3 text-sm font-bold uppercase tracking-[0.2em] text-primary">{group.category}</h2>
              <div className="grid gap-3">
                {group.items.map((it) => {
                  const key = `${group.category}-${it.q}`
                  return (
                    <FaqItem
                      key={key}
                      q={it.q}
                      a={it.a}
                      open={openKey === key}
                      onToggle={() => setOpenKey((prev) => (prev === key ? null : key))}
                    />
                  )
                })}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
}
