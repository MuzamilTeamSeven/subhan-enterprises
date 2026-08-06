"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"

const testimonials = [
  {
    name: "Usman Ali",
    city: "Lahore",
    avatar: "/avatars/usman.png",
    text: "The performance is beyond amazing! Best quad bike experience so far. Highly recommend the Raptor 700R.",
  },
  {
    name: "Hamza Khan",
    city: "Islamabad",
    avatar: "/avatars/hamza.png",
    text: "Excellent build quality and powerful engine. Highly recommended! Subhan Enterprises has the best collection.",
  },
  {
    name: "Talal Ahmed",
    city: "Faisalabad",
    avatar: "/avatars/talal.png",
    text: "Smooth buying experience and great after sales support. Genuine parts are always available.",
  },
  {
    name: "Zainab Bibi",
    city: "Karachi",
    avatar: "/placeholder-user.jpg",
    text: "Extremely reliable quad bikes. My kids love riding them in the dunes! Safety and build quality is top-notch.",
  },
  {
    name: "Bilal Butt",
    city: "Peshawar",
    avatar: "/placeholder-user.jpg",
    text: "Amazing response and fast nationwide delivery. The CFMOTO 520L arrived in perfect condition.",
  },
  {
    name: "Omer Sheikh",
    city: "Multan",
    avatar: "/placeholder-user.jpg",
    text: "Subhan Enterprises offers the best rates in Pakistan. Highly impressed by their customer support.",
  },
]

const AUTOPLAY_MS = 3200

function scrollToIndex(el: HTMLDivElement, index: number) {
  const card = el.children[index] as HTMLElement | undefined
  if (!card) return
  const scrollerRect = el.getBoundingClientRect()
  const cardRect = card.getBoundingClientRect()
  el.scrollTo({ left: cardRect.left - scrollerRect.left + el.scrollLeft, behavior: "smooth" })
}

export function Testimonials() {
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
    const next = (activeRef.current + dir + testimonials.length) % testimonials.length
    goTo(next)
  }, [goTo])

  useEffect(() => {
    pausedRef.current = paused
  }, [paused])

  // Autoplay — timer never restarts, uses refs for zero-stale-closure reads
  useEffect(() => {
    const timer = setInterval(() => {
      if (pausedRef.current) return
      const el = scroller.current
      if (!el) return
      const next = (activeRef.current + 1) % testimonials.length
      activeRef.current = next
      setActive(next)
      scrollToIndex(el, next)
    }, AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [])

  // rAF-throttled scroll handler — no layout thrashing
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
    <section className="px-3 py-6 sm:px-6">
      <div
        className="glass-card mx-auto max-w-7xl rounded-2xl p-5 sm:p-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">What Our Riders Say</p>
        <h2 className="mt-2 text-center text-2xl font-extrabold tracking-tight sm:text-3xl">
          Trusted By Hundreds Of Adventurers
        </h2>

        <div className="relative mt-8">
          <button
            onClick={() => step(-1)}
            className="carousel-arrow-premium -left-6 hidden lg:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>

          <div
            ref={scroller}
            onScroll={onScroll}
            className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pt-2 -mt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {testimonials.map((t) => (
              <figure
                key={t.name}
                className="glass-card feature-card-hover relative w-[290px] sm:w-[360px] shrink-0 snap-start rounded-2xl p-6 flex flex-col"
              >
                <Quote className="absolute right-5 top-5 h-8 w-8 text-primary/10" />
                <div className="flex items-center gap-3">
                  <Image
                    src={t.avatar || "/placeholder.svg"}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 rounded-full border border-border object-cover bg-muted"
                  />
                  <figcaption>
                    <p className="text-sm font-bold text-foreground">{t.name}</p>
                    <p className="text-xs text-muted-foreground">{t.city}</p>
                  </figcaption>
                </div>
                <div className="mt-4 flex gap-0.5 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground italic">
                  &ldquo;{t.text}&rdquo;
                </blockquote>
              </figure>
            ))}
          </div>

          <button
            onClick={() => step(1)}
            className="carousel-arrow-premium -right-6 hidden lg:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>

        <div className="mt-6 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              aria-label={`Go to testimonial ${i + 1}`}
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
