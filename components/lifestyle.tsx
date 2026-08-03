import Image from "next/image"
import { ArrowRight, CheckCircle2, CreditCard, Play, Repeat } from "lucide-react"

const points = [
  "Premium quality quad bikes",
  "Trusted by hundreds of riders",
  "Unbeatable after sales support",
  "Passion for performance",
]

export function Lifestyle() {
  return (
    <section className="px-3 py-6 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-5 lg:grid-cols-[1fr_1fr_0.7fr]">
        {/* Video card */}
        <div className="group relative overflow-hidden rounded-2xl border border-border">
          <Image
            src="/atvs/lifestyle-rider.png"
            alt="Rider on ATV through rugged terrain"
            width={640}
            height={520}
            className="h-full min-h-[320px] w-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
          <button
            className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-primary/90 text-primary-foreground backdrop-blur transition group-hover:scale-110"
            aria-label="Play video"
          >
            <Play className="h-6 w-6 fill-current" />
          </button>
          <div className="absolute bottom-4 left-4">
            <p className="text-xs uppercase tracking-widest text-white/70">Built For Extreme</p>
            <p className="text-lg font-extrabold text-primary">Performance</p>
          </div>
        </div>

        {/* Copy */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About Us</p>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl text-balance">
            More Than Just A Ride,
            <br />
            It&apos;s A <span className="text-primary">Lifestyle.</span>
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            We don&apos;t just sell ATVs, we deliver adrenaline, adventure, and unforgettable experiences. Our machines
            are crafted for riders who demand the best.
          </p>
          <ul className="mt-6 space-y-3">
            {points.map((p) => (
              <li key={p} className="flex items-center gap-2.5 text-sm text-foreground">
                <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" /> {p}
              </li>
            ))}
          </ul>
        </div>

        {/* CTA card */}
        <div className="glass flex flex-col justify-between gap-6 rounded-2xl p-6">
          <div>
            <h3 className="text-lg font-extrabold text-foreground">Ready To Ride?</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Get your dream quad bike today. Limited stock available!
            </p>
            <a
              href="#"
              className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:brightness-110"
            >
              Get Quote Now <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <div className="space-y-3 border-t border-border pt-5">
            <div className="flex items-center gap-3 text-sm text-foreground">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <CreditCard className="h-4 w-4" />
              </span>
              Easy Financing Options
            </div>
            <div className="flex items-center gap-3 text-sm text-foreground">
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Repeat className="h-4 w-4" />
              </span>
              Exchange &amp; Trade-in Available
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
