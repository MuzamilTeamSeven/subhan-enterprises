import Image from "next/image"
import { ArrowRight } from "lucide-react"

const posts = [
  {
    date: { day: "10", month: "APR" },
    image: "/atvs/blog-maintenance.png",
    title: "Top 5 Tips For Maintaining Your ATV",
    excerpt: "Keep your quad bike in top condition with these essential maintenance tips.",
  },
  {
    date: { day: "22", month: "APR" },
    image: "/atvs/blog-offroad.png",
    title: "Best ATVs For Off-Road Adventures",
    excerpt: "Explore our top picks for the ultimate off-road thrill and performance.",
  },
  {
    date: { day: "05", month: "MAY" },
    image: "/atvs/blog-safety.png",
    title: "ATV Safety Gear: What You Need",
    excerpt: "Stay safe on every ride with the right gear and equipment.",
  },
]

export function Blog() {
  return (
    <section className="px-3 py-6 sm:px-6">
      <div className="glass mx-auto max-w-7xl rounded-2xl p-5 sm:p-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Latest Insights</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">News, Tips &amp; Adventures</h2>
          </div>
          <a
            href="#"
            className="glass hidden items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition hover:border-primary/50 sm:flex"
          >
            View All Articles <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {posts.map((p) => (
            <article
              key={p.title}
              className="glass group overflow-hidden rounded-2xl transition hover:border-primary/50"
            >
              <div className="relative h-44 overflow-hidden">
                <Image
                  src={p.image || "/placeholder.svg"}
                  alt={p.title}
                  width={420}
                  height={260}
                  className="h-full w-full object-cover transition group-hover:scale-105"
                />
                <div className="absolute left-3 top-3 flex flex-col items-center rounded-lg bg-primary px-2.5 py-1.5 leading-none text-primary-foreground">
                  <span className="text-base font-extrabold">{p.date.day}</span>
                  <span className="text-[10px] font-semibold">{p.date.month}</span>
                </div>
              </div>
              <div className="p-5">
                <h3 className="text-base font-bold text-foreground">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.excerpt}</p>
                <a
                  href="#"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition hover:gap-2.5"
                >
                  Read More <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
