"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react"
import { getCarouselDotIndexes } from "@/lib/utils"
import type { GoogleReviewsData } from "@/lib/google-reviews"

const AUTOPLAY_MS = 4500

const riderTestimonials = [
  {
    id: "usman-ali",
    author: "Usman Ali",
    city: "Lahore",
    date: "",
    rating: 5,
    comment:
      "The performance is beyond amazing! Best quad bike experience so far. Highly recommend the Raptor 700R.",
  },
  {
    id: "hamza-khan",
    author: "Hamza Khan",
    city: "Islamabad",
    date: "",
    rating: 5,
    comment:
      "Excellent build quality and powerful engine. Highly recommended! Subhan Enterprises has the best collection.",
  },
  {
    id: "talal-ahmed",
    author: "Talal Ahmed",
    city: "Faisalabad",
    date: "",
    rating: 5,
    comment:
      "Smooth buying experience and great after sales support. Genuine parts are always available.",
  },
  {
    id: "zainab-bibi",
    author: "Zainab Bibi",
    city: "Karachi",
    date: "",
    rating: 5,
    comment:
      "Extremely reliable quad bikes. My kids love riding them in the dunes! Safety and build quality is top-notch.",
  },
  {
    id: "bilal-butt",
    author: "Bilal Butt",
    city: "Peshawar",
    date: "",
    rating: 5,
    comment:
      "Amazing response and fast nationwide delivery. The quad bike arrived in perfect condition.",
  },
  {
    id: "omer-sheikh",
    author: "Omer Sheikh",
    city: "Multan",
    date: "",
    rating: 5,
    comment:
      "Subhan Enterprises offers the best rates in Pakistan. Highly impressed by their customer support.",
  },
]

const MAX_REVIEW_DOTS = 7

function scrollToIndex(el: HTMLDivElement, index: number, behavior: ScrollBehavior = "smooth") {
  const card = el.children[index] as HTMLElement | undefined
  if (!card) return
  const scrollerRect = el.getBoundingClientRect()
  const cardRect = card.getBoundingClientRect()
  const cardLeft = cardRect.left - scrollerRect.left + el.scrollLeft
  el.scrollTo({ left: cardLeft, behavior })
}

function formatReviewDate(value: string) {
  const date = new Date(value)
  return Number.isNaN(date.getTime())
    ? null
    : new Intl.DateTimeFormat("en", { month: "short", year: "numeric" }).format(date)
}

export function Testimonials({ googleReviews }: { googleReviews: GoogleReviewsData }) {
  const hasGoogleReviews = googleReviews.status === "ready" && googleReviews.reviews.length > 0
  const reviews = hasGoogleReviews ? googleReviews.reviews : riderTestimonials
  const loopOffset = reviews.length > 1 ? 1 : 0
  const loopedReviews = loopOffset
    ? [reviews[reviews.length - 1], ...reviews, ...reviews.slice(0, 3)]
    : reviews
  const scroller = useRef<HTMLDivElement>(null)
  const activeRef = useRef(0)
  const pausedRef = useRef(false)
  const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const [active, setActive] = useState(0)
  const [paused, setPaused] = useState(false)

  const navigateTo = useCallback((index: number, physicalIndex: number) => {
    const el = scroller.current
    if (!el || !reviews.length) return
    activeRef.current = index
    setActive(index)
    scrollToIndex(el, physicalIndex)
  }, [reviews.length])

  const goTo = useCallback((index: number) => navigateTo(index, index + loopOffset), [loopOffset, navigateTo])

  const step = useCallback((dir: number) => {
    if (reviews.length < 2) return
    const next = (activeRef.current + dir + reviews.length) % reviews.length
    navigateTo(next, activeRef.current + loopOffset + dir)
  }, [loopOffset, navigateTo, reviews.length])

  useEffect(() => {
    pausedRef.current = paused
  }, [paused])

  // Autoplay — timer never restarts, uses refs for zero-stale-closure reads
  useEffect(() => {
    if (reviews.length < 2) return

    const timer = setInterval(() => {
      if (pausedRef.current) return
      const el = scroller.current
      if (!el) return
      const next = (activeRef.current + 1) % reviews.length
      navigateTo(next, activeRef.current + loopOffset + 1)
    }, AUTOPLAY_MS)
    return () => clearInterval(timer)
  }, [navigateTo, reviews.length])

  useEffect(() => {
    const el = scroller.current
    if (el) scrollToIndex(el, loopOffset, "auto")
  }, [loopOffset])

  useEffect(() => () => {
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
  }, [])

  // Wait for smooth scrolling or snap settling before syncing the selected card.
  const onScroll = useCallback(() => {
    if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current)
    scrollTimeoutRef.current = setTimeout(() => {
      const el = scroller.current
      if (!el || !el.children.length) return
      const children = Array.from(el.children) as HTMLElement[]
      const scrollerLeft = el.getBoundingClientRect().left
      let closest = 0
      let min = Infinity
      children.forEach((c, i) => {
        const rect = c.getBoundingClientRect()
        const dist = Math.abs(rect.left - scrollerLeft)
        if (dist < min) {
          min = dist
          closest = i
        }
      })
      const logicalIndex = (closest - loopOffset + reviews.length) % reviews.length
      if (logicalIndex !== activeRef.current) {
        activeRef.current = logicalIndex
        setActive(logicalIndex)
      }
      if (loopOffset && (closest === 0 || closest === reviews.length + 1)) {
        scrollToIndex(el, logicalIndex + loopOffset, "auto")
      }
    }, 120)
  }, [loopOffset, reviews.length])

  return (
    <section
      data-analytics-section="customer-reviews"
      data-analytics-section-name="Customer reviews"
      className="px-3 py-6 sm:px-6"
    >
      <div
        className="glass-card mx-auto max-w-7xl rounded-2xl p-5 sm:p-8"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
          <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            {hasGoogleReviews ? "Official Google Reviews" : "What Our Riders Say"}
          </p>
          <h2 className="mt-2 text-center text-2xl font-extrabold tracking-tight sm:text-3xl">
            {hasGoogleReviews ? "What Our Riders Say" : "Trusted By Riders Across Pakistan"}
          </h2>
          {hasGoogleReviews && googleReviews.totalReviewCount > 0 && (
            <p className="mt-2 text-center text-sm text-muted-foreground">
              {googleReviews.totalReviewCount.toLocaleString()} reviews ·{" "}
              {googleReviews.averageRating?.toFixed(1) ?? "—"}/5 on Google
            </p>
          )}

          <>
              <div className="relative mt-8">
                <button
                  onClick={() => step(-1)}
                  className="carousel-arrow-premium -left-6 hidden lg:flex"
                  aria-label="Previous review"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>

                <div
                  ref={scroller}
                  onScroll={onScroll}
                  className="reviews-carousel flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2 pt-2 -mt-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
                >
                  {loopedReviews.map((review, physicalIndex) => {
                    const index = (physicalIndex - loopOffset + reviews.length) % reviews.length
                    return (
                    <figure
                      key={`${review.id}-${physicalIndex}`}
                      data-active={index === active}
                      className={`glass-card feature-card-hover relative flex w-[290px] shrink-0 snap-start flex-col rounded-2xl p-6 sm:w-[360px] ${
                        index === active ? "carousel-item-active" : ""
                      }`}
                    >
                      <Quote className="absolute right-5 top-5 h-8 w-8 text-primary/10" />
                      <div className="flex items-center gap-3">
                        <span
                          aria-hidden="true"
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-border bg-muted text-lg font-bold text-foreground"
                        >
                          {review.author.charAt(0).toUpperCase()}
                        </span>
                        <figcaption>
                          <p className="text-sm font-bold text-foreground">{review.author}</p>
                          <p className="text-xs text-muted-foreground">
                            {formatReviewDate(review.date) ||
                              ("city" in review && typeof review.city === "string"
                                ? review.city
                                : "Google reviewer")}
                          </p>
                        </figcaption>
                      </div>
                      <div
                        className="mt-4 flex gap-0.5 text-primary"
                        aria-label={`${review.rating} out of 5 stars`}
                      >
                        {Array.from({ length: review.rating }).map((_, i) => (
                          <Star key={i} className="h-3.5 w-3.5 fill-current" />
                        ))}
                      </div>
                      {review.comment && (
                        <blockquote className="mt-4 text-sm leading-relaxed text-muted-foreground italic">
                          &ldquo;{review.comment}&rdquo;
                        </blockquote>
                      )}
                      {hasGoogleReviews && (
                        <p className="mt-auto pt-5 text-xs font-semibold text-muted-foreground">
                          <span className="mr-1 font-extrabold text-sky-400">G</span>Google review
                        </p>
                      )}
                    </figure>
                    )
                  })}
                </div>

                <button
                  onClick={() => step(1)}
                  className="carousel-arrow-premium -right-6 hidden lg:flex"
                  aria-label="Next review"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-6 flex justify-center gap-2">
                {getCarouselDotIndexes(active, reviews.length, MAX_REVIEW_DOTS).map((reviewIndex) => (
                  <button
                    key={reviews[reviewIndex].id}
                    onClick={() => goTo(reviewIndex)}
                    aria-label={`Go to review ${reviewIndex + 1}`}
                    aria-current={reviewIndex === active ? "true" : undefined}
                    className={`h-2.5 w-2.5 shrink-0 rounded-full transition-all duration-300 ${
                      reviewIndex === active
                        ? "scale-125 bg-primary"
                        : "bg-border hover:bg-primary/60"
                    }`}
                  />
                ))}
              </div>
          </>
        </div>
    </section>
  )
}
