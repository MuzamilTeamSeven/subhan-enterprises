import {
  Award,
  BadgeCheck,
  Cog,
  Gauge,
  Layers,
  ShieldCheck,
  Sparkles,
  ThumbsUp,
  Truck,
  Wrench,
} from "lucide-react"

const reasons = [
  { icon: BadgeCheck, title: "100% Original & Imported", sub: "Direct imports from trusted brands" },
  { icon: ThumbsUp, title: "Best Market Prices", sub: "Premium quality at best prices" },
  { icon: Wrench, title: "Expert Support", sub: "After sales service & parts availability" },
  { icon: ShieldCheck, title: "Secure & Easy Process", sub: "Smooth booking & delivery" },
  { icon: Truck, title: "Nationwide Delivery", sub: "Fast & safe delivery across Pakistan" },
  { icon: Award, title: "1 Year Warranty", sub: "Peace of mind with reliable warranty" },
]

const perf = [
  { icon: Gauge, title: "Powerful Engine", sub: "High performance guaranteed" },
  { icon: Layers, title: "Rugged Build", sub: "Built to handle the toughest terrains" },
  { icon: Cog, title: "Advanced Suspension", sub: "Smooth ride on every adventure" },
  { icon: Sparkles, title: "Superior Control", sub: "Precision handling and stability" },
]

export function WhyChoose() {
  return (
    <section className="px-3 py-6 sm:px-6">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-2xl border border-border bg-card/40 p-5 sm:p-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.4fr]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Why Choose Us?</p>
              <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl text-balance">
                Built For Performance.
                <br />
                Driven By <span className="text-primary">Passion.</span>
              </h2>
              <p className="mt-4 max-w-sm leading-relaxed text-muted-foreground">
                Subhan Enterprises is Pakistan&apos;s trusted name in premium ATVs and Quad Bikes. We bring you the best
                in performance, durability, and off-road experience.
              </p>
            </div>

            <div className="grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3">
              {reasons.map((r) => (
                <div key={r.title} className="flex gap-3">
                  <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                    <r.icon className="h-4 w-4" />
                  </span>
                  <span className="flex flex-col">
                    <span className="text-sm font-bold text-foreground">{r.title}</span>
                    <span className="text-xs leading-relaxed text-muted-foreground">{r.sub}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Performance strip */}
        <div className="mt-4 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 lg:grid-cols-4">
          {perf.map((p) => (
            <div key={p.title} className="flex items-center gap-3 bg-card px-5 py-6">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <p.icon className="h-5 w-5" />
              </span>
              <span className="flex flex-col">
                <span className="text-sm font-bold text-foreground">{p.title}</span>
                <span className="text-xs leading-relaxed text-muted-foreground">{p.sub}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
