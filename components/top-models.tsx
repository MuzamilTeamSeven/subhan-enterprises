"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, Gauge } from "lucide-react"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { products, formatPrice } from "@/lib/products"
import { getCarouselDotIndexes } from "@/lib/utils"

const models = products
  .filter((p) => p.category === "atv" && p.isCatalogVisible !== false)
  .sort((a, b) => a.price - b.price)
  .map((p) => ({
    id: p.id,
    productName: p.name,
    productCategory: p.category,
    name: p.name.toUpperCase(),
    image: p.image,
    tag: p.tag ? p.tag.toUpperCase() : null,
    specs: p.specs,
    price: formatPrice(p.price),
  }))

const loopedModels = [models[models.length - 1], ...models, ...models.slice(0, 3)]
const AUTOPLAY_MS = 2800

function getClosestCardIndex(el: HTMLDivElement) {
  const children = Array.from(el.children) as HTMLElement[]
  const scrollerLeft = el.getBoundingClientRect().left
  let closest = 0
  let min = Infinity
  children.forEach((card, index) => {
    const distance = Math.abs(card.getBoundingClientRect().left - scrollerLeft)
    if (distance < min) {
      min = distance
      closest = index
    }
  })
  return closest
}

function scrollToIndex(el: HTMLDivElement, index: number, behavior: ScrollBehavior = "smooth") {
  const card = el.children[index] as HTMLElement | undefined
  if (!card) return
  const scrollerRect = el.getBoundingClientRect()
  const cardRect = card.getBoundingClientRect()
  const cardLeft = cardRect.left - scrollerRect.left + el.scrollLeft
  el.scrollTo({ left: cardLeft, behavior })
}

export function TopModels() {
  const scroller = useRef<HTMLDivElement>(null)
  const activeRef = useRef(0)
  const pausedRef = useRef(false)
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const navigateTo = useCallback((index: number, physicalIndex: number) => {
    const el = scroller.current
    if (!el) return
    activeRef.current = index
    setActive(index)
    scrollToIndex(el, physicalIndex)
  }, [])

  const goTo = useCallback((index: number) => navigateTo(index, index + 1), [navigateTo])

  const step = useCallback((dir: number) => {
    const next = (activeRef.current + dir + models.length) % models.length
    navigateTo(next, activeRef.current + 1 + dir)
  }, [navigateTo])

  // Autoplay — uses ref to avoid stale closure over `active`
  useEffect(() => {
    pausedRef.current = paused
  }, [paused])

  useEffect(() => {
    const el = scroller.current
    if (el) scrollToIndex(el, 1, "auto")
  }, [])

  useEffect(() => {
    const timer = setInterval(() => {
      if (pausedRef.current) return
      const el = scroller.current
      if (!el) return
      const next = (activeRef.current + 1) % models.length
      navigateTo(next, activeRef.current + 2)
    }, AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [navigateTo])

  // Wait for smooth scrolling or snap settling before syncing the selected card.
  const onScroll = useCallback(() => {
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
    scrollTimeoutRef.current = setTimeout(() => {
      const el = scroller.current
      if (!el || !el.children.length) return
      const physicalIndex = getClosestCardIndex(el)
      const closest = (physicalIndex - 1 + models.length) % models.length
      if (closest !== activeRef.current) {
        activeRef.current = closest
        setActive(closest)
      }
      if (physicalIndex === 0 || physicalIndex === models.length + 1) {
        scrollToIndex(el, closest + 1, "auto")
      }
    }, 120)
  }, [])

  useEffect(() => () => {
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
  }, [])

  return (
    <section
      id="models"
      data-analytics-section="home-models"
      data-analytics-section-name="Homepage product models"
      className="px-3 py-6 sm:px-6"
    >
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
            className="models-carousel flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pt-2 -mt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {loopedModels.map((m, physicalIndex) => {
              const index = (physicalIndex - 1 + models.length) % models.length
              return (
              <article
                key={`${m.id}-${physicalIndex}`}
                data-active={index === active}
                className={`glass-card glass-card-hover group relative flex w-[min(82vw,320px)] shrink-0 snap-start flex-col overflow-hidden rounded-2xl p-4 sm:w-[300px] xl:w-[320px] ${
                  index === active ? "carousel-item-active" : ""
                }`}
              >
                {m.tag && (
                  <span className="absolute left-4 top-4 z-10 rounded-md bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-primary-foreground">
                    {m.tag}
                  </span>
                )}
                <div className="image-zoom-wrap flex h-40 shrink-0 items-center justify-center">
                  <OptimizedImage
                    src={m.image || "/placeholder.svg"}
                    alt={`${m.name} ATV Quad Bike — sold by Subhan Enterprises`}
                    width={260}
                    height={180}
                    sizes="(max-width: 640px) 100vw, 260px"
                    className="image-zoom max-h-full w-auto object-contain"
                  />
                </div>
                <h3 className="mt-3 line-clamp-2 min-h-[3.5rem] text-lg font-bold text-foreground">{m.name}</h3>
                <div className="mt-3 flex min-h-5 items-center gap-3 text-[11px] text-muted-foreground">
                  {m.specs.map((spec) => (
                    <span key={spec} className="flex items-center gap-1">
                      <Gauge className="h-3.5 w-3.5 text-primary" /> {spec}
                    </span>
                  ))}
                </div>
                <p className="mt-auto min-h-12 border-t border-white/[0.03] pt-3 text-lg font-extrabold leading-7 text-primary">
                  {m.price}
                </p>
                <Link
                  href={`/products/${m.id}`}
                  data-analytics-product-select=""
                  data-product-id={m.id}
                  data-product-name={m.productName}
                  data-product-category={m.productCategory}
                  data-list-context="homepage_top_models"
                  className="btn-glass flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold"
                >
                  Explore <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
              )
            })}
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
          {getCarouselDotIndexes(active, models.length).map((i) => (
            <button
              key={models[i].id}
              onClick={() => goTo(i)}
              aria-label={`Go to ${models[i].name}`}
              aria-current={i === active ? "true" : undefined}
              className={`h-2.5 w-2.5 shrink-0 rounded-full transition-all duration-300 ${
                i === active ? "scale-125 bg-primary" : "bg-border hover:bg-primary/60"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
