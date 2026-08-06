"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, Cog, Gauge, Settings2 } from "lucide-react"
import { OptimizedImage } from "@/components/ui/optimized-image"

const models = [
  {
    id: "raptor-700r",
    name: "RAPTOR 700R",
    image: "/atvs/raptor-700r.png",
    tag: "BEST SELLER",
    cc: "700cc",
    price: "PKR 2,850,000",
  },
  {
    id: "cfmoto-520l",
    name: "CFMOTO 520L",
    image: "/atvs/cfmoto-520l.png",
    tag: "NEW ARRIVAL",
    cc: "520cc",
    price: "PKR 1,950,000",
  },
  {
    id: "can-am-outlander",
    name: "CAN-AM OUTLANDER",
    image: "/atvs/can-am-outlander.png",
    tag: null,
    cc: "650cc",
    price: "PKR 2,450,000",
  },
  {
    id: "linhai-lh400",
    name: "LINHAI LH 400",
    image: "/atvs/linhai-lh400.png",
    tag: null,
    cc: "400cc",
    price: "PKR 1,350,000",
  },
]

const AUTOPLAY_MS = 2200

export function TopModels() {
  const scroller = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  // Scroll to a given card index
  const goTo = useCallback((index: number) => {
    const el = scroller.current
    if (!el) return
    const card = el.children[index] as HTMLElement | undefined
    if (!card) return
    el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" })
    setActive(index)
  }, [])

  const step = useCallback(
    (dir: number) => {
      const next = (active + dir + models.length) % models.length
      goTo(next)
    },
    [active, goTo],
  )

  // Real-time autoplay — advances the carousel automatically, pauses on hover/focus
  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setActive((prev) => {
        const next = (prev + 1) % models.length
        const el = scroller.current
        const card = el?.children[next] as HTMLElement | undefined
        if (el && card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft, behavior: "smooth" })
        return next
      })
    }, AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [paused])

  // Keep the active dot in sync when the user scrolls manually
  const onScroll = useCallback(() => {
    const el = scroller.current
    if (!el) return
    const children = Array.from(el.children) as HTMLElement[]
    const center = el.scrollLeft + el.clientWidth / 2
    let closest = 0
    let min = Infinity
    children.forEach((c, i) => {
      const cardCenter = c.offsetLeft - el.offsetLeft + c.clientWidth / 2
      const dist = Math.abs(cardCenter - center)
      if (dist < min) {
        min = dist
        closest = i
      }
    })
    setActive(closest)
  }, [])

  return (
    <section id="models" className="px-3 py-6 sm:px-6">
      <div
        className="glass mx-auto max-w-7xl rounded-2xl p-5 sm:p-8"
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
            className="glass hidden items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition hover:border-primary/50 sm:flex"
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
            className="scroll-smooth flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {models.map((m) => (
              <article
                key={m.id}
                className="glass glass-card-hover group relative w-[270px] shrink-0 snap-start overflow-hidden rounded-2xl p-4"
              >
                {m.tag && (
                  <span className="absolute left-4 top-4 z-10 rounded-md bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-primary-foreground">
                    {m.tag}
                  </span>
                )}
                <div className="image-zoom-wrap flex h-40 items-center justify-center">
                  <OptimizedImage
                    src={m.image || "/placeholder.svg"}
                    alt={m.name}
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
                    <Settings2 className="h-3.5 w-3.5 text-primary" /> 4x4
                  </span>
                  <span className="flex items-center gap-1">
                    <Cog className="h-3.5 w-3.5 text-primary" /> 4 Stroke
                  </span>
                </div>
                <p className="mt-3 text-lg font-extrabold text-primary">{m.price}</p>
                <Link
                  href={`/products/${m.id}`}
                  className="btn-glass mt-4 flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold"
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
              className={`h-2 rounded-full transition-all ${
                i === active ? "w-6 bg-primary" : "w-2 bg-border hover:bg-primary/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
