"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, Cog, Gauge, Settings2 } from "lucide-react"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { products, formatPrice } from "@/lib/products"

const models = products
  .filter((p) => p.category === "atv")
  .map((p) => ({
    id: p.id,
    name: p.name.toUpperCase(),
    brand: p.brand,
    image: p.image,
    tag: p.tag ? p.tag.toUpperCase() : null,
    cc: p.specs[0] || "500cc",
    drive: p.specs[1] || "4x4",
    engine: p.specs[2] || "4 Stroke",
    price: formatPrice(p.price),
  }))

const AUTOPLAY_MS = 2800

function scrollToIndex(el: HTMLDivElement, index: number) {
  const card = el.children[index] as HTMLElement | undefined
  if (!card) return
  const scrollerRect = el.getBoundingClientRect()
  const cardRect = card.getBoundingClientRect()
  el.scrollTo({ left: cardRect.left - scrollerRect.left + el.scrollLeft, behavior: "smooth" })
}

export function TopModels() {
  const scroller = useRef<HTMLDivElement>(null)
  const activeRef = useRef(0)
  const pausedRef = useRef(false)
  const scrollRafRef = useRef<number | null>(null)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const goTo = useCallback((index: number) => {
    const el = scroller.current
    if (!el) return
    activeRef.current = index
    setActive(index)
    scrollToIndex(el, index)
  }, [])

  const step = useCallback((dir: number) => {
    const next = (activeRef.current + dir + models.length) % models.length
    goTo(next)
  }, [goTo])

  // Autoplay — uses ref to avoid stale closure over `active`
  useEffect(() => {
    pausedRef.current = paused
  }, [paused])

  useEffect(() => {
    const timer = setInterval(() => {
      if (pausedRef.current) return
      const el = scroller.current
      if (!el) return
      const next = (activeRef.current + 1) % models.length
      activeRef.current = next
      setActive(next)
      scrollToIndex(el, next)
    }, AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [])

  // Throttled scroll listener — debounced via rAF to avoid layout thrash
  const onScroll = useCallback(() => {
    if (scrollRafRef.current !== null) return
    scrollRafRef.current = requestAnimationFrame(() => {
      scrollRafRef.current = null
      const el = scroller.current
      if (!el) return
      const children = Array.from(el.children) as HTMLElement[]
      const scrollerCenter = el.getBoundingClientRect().left + el.clientWidth / 2
      let closest = 0
      let min = Infinity
      children.forEach((c, i) => {
        const rect = c.getBoundingClientRect()
        const dist = Math.abs(rect.left + rect.width / 2 - scrollerCenter)
        if (dist < min) { min = dist; closest = i }
      })
      if (closest !== activeRef.current) {
        activeRef.current = closest
        setActive(closest)
      }
    })
  }, [])

  return (
    <section id="models" className="px-3 py-6 sm:px-6">
      <div
        className="glass-card mx-auto max-w-7xl rounded-2xl p-5 sm:p-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Our Collection</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">Explore Our Top Models</h2>
          </div>
          <Link
            href="/products?category=atv"
            className="glass-card hidden items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition hover:border-primary/50 sm:flex"
          >
            View All Models <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="relative mt-6">
          <button
            onClick={() => step(-1)}
            className="carousel-arrow-premium -left-6 hidden lg:flex"
            aria-label="Previous"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={scroller}
            onScroll={onScroll}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pt-2 -mt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {models.map((m) => (
              <article
                key={m.id}
                className="glass-card glass-card-hover group relative w-[270px] shrink-0 snap-start overflow-hidden rounded-2xl p-4 flex flex-col"
              >
                {m.tag && (
                  <span className="absolute left-4 top-4 z-10 rounded-md bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-primary-foreground">
                    {m.tag}
                  </span>
                )}
                <div className="image-zoom-wrap flex h-40 items-center justify-center">
                  <OptimizedImage
                    src={m.image || "/placeholder.svg"}
                    alt={`${m.brand} ${m.name} ATV Quad Bike — available in Pakistan from Subhan Enterprises`}
                    width={260}
                    height={180}
                    sizes="(max-width: 640px) 100vw, 260px"
                    className="image-zoom max-h-full w-auto object-contain"
                  />
                </div>
                <h3 className="mt-3 text-lg font-bold text-foreground">{m.name}</h3>
                <div className="mt-3 flex items-center gap-3 text-[11px] text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Gauge className="h-3.5 w-3.5 text-primary" /> {m.cc}
                  </span>
                  <span className="flex items-center gap-1">
                    <Settings2 className="h-3.5 w-3.5 text-primary" /> {m.drive}
                  </span>
                  <span className="flex items-center gap-1">
                    <Cog className="h-3.5 w-3.5 text-primary" /> {m.engine}
                  </span>
                </div>
                <p className="mt-3 text-lg font-extrabold text-primary">{m.price}</p>
                <Link
                  href={`/products/${m.id}`}
                  className="btn-glass mt-auto flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold"
                >
                  Explore <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>

          <button
            onClick={() => step(1)}
            className="carousel-arrow-premium -right-6 hidden lg:flex"
            aria-label="Next"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-5 flex justify-center gap-2">
          {models.map((m, i) => (
            <button
              key={m.id}
              onClick={() => goTo(i)}
              aria-label={`Go to ${m.name}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === active ? "w-6 bg-primary" : "w-2 bg-border hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
