import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Home, Package, Phone, BookOpen } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"

export const metadata: Metadata = {
  title: "Page Not Found | Subhan Enterprises",
  description:
    "The page you are looking for could not be found. Return to Subhan Enterprises to browse ATVs, quad bikes and accessories available in Pakistan.",
  robots: { index: false, follow: true },
}

const helpLinks = [
  {
    icon: Package,
    title: "Browse ATVs & Quad Bikes",
    description: "Shop our full range of ATVs, quad bikes and trail bikes.",
    href: "/products?category=atv",
    cta: "View ATVs",
  },
  {
    icon: BookOpen,
    title: "Read Our Blog",
    description: "Expert ATV guides, buying tips and off-road adventure stories.",
    href: "/blog",
    cta: "Read Articles",
  },
  {
    icon: Phone,
    title: "Contact Us",
    description: "Get a price quote or ask about a specific model.",
    href: "/contact",
    cta: "Get in Touch",
  },
]

export default function NotFound() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="px-3 py-16 sm:px-6">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">404 Error</p>
          <h1 className="mt-4 text-5xl font-extrabold tracking-tight sm:text-7xl">
            Page Not Found
          </h1>
          <p className="mx-auto mt-5 max-w-md leading-relaxed text-muted-foreground">
            We couldn&apos;t find the page you were looking for. It may have moved or been removed. Try one of the links below to get back on track.
          </p>

          <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
            <Link
              href="/"
              className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition hover:brightness-110"
            >
              <Home className="h-4 w-4" /> Go to Homepage
            </Link>
            <Link
              href="/products"
              className="btn-glass flex items-center gap-2 rounded-xl px-6 py-3 text-sm font-bold"
            >
              Browse All Products <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>

        <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-3">
          {helpLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="glass group flex flex-col rounded-2xl p-6 transition hover:border-primary/50"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <l.icon className="h-5 w-5" />
              </span>
              <h2 className="mt-4 text-base font-bold text-foreground">{l.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {l.description}
              </p>
              <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary">
                {l.cta} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
