"use client"

import { useState, useEffect } from "react"
import {
  ArrowRight,
  ChevronDown,
  Cog,
  Gauge,
  Mountain,
  Settings2,
  ShieldCheck,
  Star,
  Zap,
} from "lucide-react"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { cn } from "@/lib/utils"

const specs = [
  { icon: Zap, title: "700cc", sub: "Powerful Engine" },
  { icon: Settings2, title: "4x4", sub: "Drive System" },
  { icon: Cog, title: "Automatic", sub: "Transmission" },
  { icon: Gauge, title: "4 Stroke", sub: "Engine" },
  { icon: Mountain, title: "Off Road", sub: "Built Tough" },
  { icon: ShieldCheck, title: "Warranty", sub: "1 Year" },
]

export function Hero() {
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsVisible(false)
      } else {
        setIsVisible(true)
      }
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const handleScrollDown = () => {
    const statsSection = document.getElementById("stats")
    if (statsSection) {
      const offset = 90 // sticky navbar offset height
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = statsSection.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      })
    }
  }

  return (
    <section className="relative overflow-hidden px-3 pt-8 sm:px-6 pb-10">
      <div className="hero-glow" aria-hidden="true" />

      <div className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-[1fr_1.1fr_auto]">
        {/* Left copy */}
        <div className="order-2 lg:order-1">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
            Pakistan&apos;s Premium ATV Dealer
          </p>
          <h1 className="mt-4 text-5xl font-extrabold leading-[0.95] tracking-tight text-balance sm:text-6xl">
            CONQUER
            <br />
            EVERY
            <br />
            <span className="text-primary">TERRAIN.</span>
          </h1>
          <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
            Experience unmatched power, control, and freedom with our premium range of Quad Bikes.
          </p>

          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="/contact"
              className="btn-primary flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold"
            >
              Get Quote Now <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="/products?category=atv"
              className="btn-glass flex items-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold text-foreground"
            >
              Explore Models <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <div className="mt-8 flex items-center gap-4">
            <div className="flex -space-x-3">
              {["usman", "hamza", "talal"].map((a) => (
                <OptimizedImage
                  key={a}
                  src={`/avatars/${a}.png`}
                  alt={`Customer avatar ${a}`}
                  width={40}
                  height={40}
                  sizes="40px"
                  className="h-10 w-10 rounded-full border-2 border-background object-cover"
                />
              ))}
            </div>
            <div>
              <p className="text-sm font-bold text-foreground">500+ Happy Riders</p>
              <div className="flex items-center gap-1 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
                <span className="ml-1 text-xs text-muted-foreground">4.9/5</span>
              </div>
            </div>
          </div>
        </div>

        {/* Center image with circular ring */}
        <div className="relative order-1 flex items-center justify-center lg:order-2 w-full max-w-[450px] mx-auto aspect-square">
          <div className="absolute aspect-square w-[90%] rounded-full border-2 border-primary/30 shadow-[0_0_90px_-10px] shadow-primary/35" />
          <div className="absolute aspect-square w-[110%] rounded-full bg-primary/20 blur-[120px] pointer-events-none" />
          <div className="absolute aspect-square w-[80%] rounded-full bg-primary/15 blur-[80px] pointer-events-none" />
          
          <div className="relative z-10 w-[85%] aspect-square rounded-full overflow-hidden border border-white/10 shadow-2xl">
            <OptimizedImage
              src="/atvs/hero-atv.png"
              alt="Premium black and red ATV quad bike"
              width={600}
              height={600}
              priority
              fetchPriority="high"
              decoding="async"
              quality={85}
              sizes="(max-width: 768px) 100vw, 600px"
              wrapperClassName="w-full h-full"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        {/* Right spec rail */}
        <div className="order-3 flex flex-row flex-wrap justify-center gap-2.5 lg:flex-col">
          {specs.map((s) => (
            <div
              key={s.title}
              className="glass float-hover flex w-[150px] items-center gap-3 rounded-xl px-3 py-2.5 sm:w-auto"
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <s.icon className="h-4 w-4" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="text-sm font-bold text-foreground">{s.title}</span>
                <span className="text-[11px] text-muted-foreground">{s.sub}</span>
              </span>
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={handleScrollDown}
        className={cn(
          "glass absolute left-1/2 bottom-4 z-10 flex -translate-x-1/2 items-center justify-center gap-2 rounded-full border border-white/10 bg-background/70 text-muted-foreground shadow-2xl shadow-black/40 backdrop-blur-md transition-all duration-300 w-[150px] h-[52px] pulse-glow cursor-pointer",
          isVisible ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-4 scale-95 pointer-events-none"
        )}
        aria-label="Scroll Down to Statistics"
      >
        <ChevronDown className="h-4 w-4 animate-bounce text-primary" />
        <span className="text-[10px] font-bold uppercase tracking-widest text-foreground">Scroll Down</span>
      </button>
    </section>
  )
}
