import Link from "next/link"
import { ChevronRight } from "lucide-react"

export function PageHeader({
  eyebrow,
  title,
  description,
  breadcrumb,
}: {
  eyebrow: string
  title: string
  description: string
  breadcrumb: string
}) {
  return (
    <section className="px-3 pt-6 sm:px-6">
      <div className="glass mx-auto max-w-7xl overflow-hidden rounded-2xl p-6 sm:p-10">
        <nav className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground" aria-label="Breadcrumb">
          <Link href="/" className="transition hover:text-primary">
            Home
          </Link>
          <ChevronRight className="h-3.5 w-3.5" />
          <span className="text-foreground">{breadcrumb}</span>
        </nav>
        <p className="mt-5 text-xs font-semibold uppercase tracking-[0.2em] text-primary">{eyebrow}</p>
        <h1 className="mt-2 max-w-3xl text-3xl font-extrabold tracking-tight text-balance sm:text-4xl md:text-5xl">
          {title}
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">{description}</p>
      </div>
    </section>
  )
}
