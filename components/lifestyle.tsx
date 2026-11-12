import { ArrowRight, CheckCircle2, CreditCard, ExternalLink, Repeat } from "lucide-react"
import { OptimizedImage } from "@/components/ui/optimized-image"

const YOUTUBE_CHANNEL_URL = "https://www.youtube.com/@Subhan-Enterprises"

const points = [
  "18+ years of ATV experience",
  "10,000+ riders served across Pakistan",
  "Nationwide delivery",
  "7-day engine warranty",
]

export function Lifestyle() {
  return (
    <section
      data-analytics-section="lifestyle"
      data-analytics-section-name="Lifestyle and social content"
      className="px-3 py-6 sm:px-6"
    >
      <div className="mx-auto grid max-w-7xl items-stretch gap-5 lg:grid-cols-[1fr_1fr_0.7fr]">
        {/* YouTube channel card */}
        <a
          href={YOUTUBE_CHANNEL_URL}
          target="_blank"
          rel="noreferrer"
          data-analytics-placement="homepage_lifestyle"
          aria-label="Visit the official Subhan Enterprises YouTube channel"
          className="glass-card feature-card-hover group relative min-h-[360px] self-stretch overflow-hidden rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary"
        >
          <OptimizedImage
            src="/atvs/lifestyle-rider.png"
            alt="Rider on ATV through rugged terrain"
            width={640}
            height={520}
            sizes="(max-width: 768px) 100vw, 640px"
            wrapperClassName="absolute inset-0"
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/10 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 sm:p-6">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/70">
                Subhan Enterprises
              </p>
              <p className="mt-1 text-lg font-extrabold text-white sm:text-xl">
                Official YouTube Channel
              </p>
            </div>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/25 bg-black/35 text-white backdrop-blur transition group-hover:border-primary group-hover:bg-primary">
              <ExternalLink className="h-5 w-5" />
            </span>
          </div>
        </a>

        {/* Copy */}
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">About Us</p>
          <h2 className="mt-3 text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl text-balance">
            More Than Just A Ride,
            <br />
            It&apos;s A <span className="text-primary">Lifestyle.</span>
          </h2>
          <p className="mt-4 leading-relaxed text-muted-foreground">
            With 18+ years in the ATV market and more than 10,000 riders served, Subhan Enterprises helps customers across Pakistan find the right quad bike for their needs. Explore available models, ask about nationwide delivery, and get clear guidance on our 7-day engine warranty.
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
        <div className="glass-card feature-card-hover flex flex-col justify-between gap-6 rounded-2xl p-6">
          <div>
            <h3 className="text-lg font-extrabold text-foreground">Ready To Ride?</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Compare available quad bikes for work, recreation, and off-road riding. Our team can help you choose a model, confirm current stock, explain delivery across Pakistan, and answer questions about the 7-day engine warranty.
            </p>
            <a
              href="/contact"
              className="btn-primary mt-5 flex items-center justify-center gap-2 rounded-xl px-5 py-3.5 text-sm font-semibold"
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
