"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ChevronLeft, ChevronRight, Cog, Gauge, Settings2 } from "lucide-react"

const models = [
  {
    name: "RAPTOR 700R",
    image: "/atvs/raptor-700r.png",
    tag: "BEST SELLER",
    cc: "700cc",
    price: "PKR 2,850,000",
  },
  {
    name: "CFMOTO 520L",
    image: "/atvs/cfmoto-520l.png",
    tag: "NEW ARRIVAL",
    cc: "520cc",
    price: "PKR 1,950,000",
  },
  {
    name: "CAN-AM OUTLANDER",
    image: "/atvs/can-am-outlander.png",
    tag: null,
    cc: "650cc",
    price: "PKR 2,450,000",
  },
  {
    name: "LINHAI LH 400",
    image: "/atvs/linhai-lh400.png",
    tag: null,
    cc: "400cc",
    price: "PKR 1,350,000",
  },
]

export function TopModels() {
  const scroller = useRef<HTMLDivElement>(null)
  const [active, setActive] = useState(0)
  const [atStart, setAtStart] = useState(true)
  const [atEnd, setAtEnd] = useState(false)

  const updateState = useCallback(() => {
    const el = scroller.current
    if (!el) return
    const { scrollLeft, scrollWidth, clientWidth } = el
    setAtStart(scrollLeft <= 4)
    setAtEnd(scrollLeft + clientWidth >= scrollWidth - 4)
    const card = el.firstElementChild as HTMLElement | null
    const step = card ? card.offsetWidth + 16 : 286
    setActive(Math.round(scrollLeft / step))
  }, [])

  useEffect(() => {
    updateState()
    window.addEventListener("resize", updateState)
    return () => window.removeEventListener("resize", updateState)
  }, [updateState])

  const scroll = (dir: number) => {
    const el = scroller.current
    if (!el) return
    const card = el.firstElementChild as HTMLElement | null
    const step = card ? card.offsetWidth + 16 : 320
    el.scrollBy({ left: dir * step, behavior: "smooth" })
  }

  const scrollTo = (index: number) => {
    const el = scroller.current
    if (!el) return
    const card = el.firstElementChild as HTMLElement | null
    const step = card ? card.offsetWidth + 16 : 320
    el.scrollTo({ left: index * step, behavior: "smooth" })
  }

  return (
    <section id="models" className="px-3 py-6 sm:px-6">
      <div className="glass mx-auto max-w-7xl rounded-2xl p-5 sm:p-8">
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
            onClick={() => scroll(-1)}
            className="absolute -left-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:border-primary hover:text-primary lg:flex"
            aria-label="Previous"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>

          <div
            ref={scroller}
            className="flex snap-x gap-4 overflow-x-auto pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {models.map((m) => (
              <article
                key={m.name}
                className="glass group relative w-[270px] shrink-0 snap-start overflow-hidden rounded-2xl p-4 transition hover:border-primary/50"
              >
                {m.tag && (
                  <span className="absolute left-4 top-4 z-10 rounded-md bg-primary px-2 py-1 text-[10px] font-bold uppercase tracking-wide text-primary-foreground">
                    {m.tag}
                  </span>
                )}
                <div className="flex h-40 items-center justify-center">
                  <Image
                    src={m.image || "/placeholder.svg"}
                    alt={m.name}
                    width={260}
                    height={180}
                    className="max-h-full w-auto object-contain transition group-hover:scale-105"
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
                  href="/products?category=atv"
                  className="glass mt-4 flex items-center justify-between rounded-xl px-4 py-2.5 text-sm font-semibold transition hover:border-primary hover:text-primary"
                >
                  Explore <ArrowRight className="h-4 w-4" />
                </Link>
              </article>
            ))}
          </div>

          <button
            onClick={() => scroll(1)}
            className="absolute -right-3 top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground transition hover:border-primary hover:text-primary lg:flex"
            aria-label="Next"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>

        <div className="mt-5 flex justify-center gap-2">
          <span className="h-2 w-6 rounded-full bg-primary" />
          <span className="h-2 w-2 rounded-full bg-border" />
          <span className="h-2 w-2 rounded-full bg-border" />
        </div>
      </div>
    </section>
  )
}
