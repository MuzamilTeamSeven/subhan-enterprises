import Link from "next/link"
import { ArrowRight, HelpCircle, MapPin, Phone } from "lucide-react"

export function HomeCta() {
  return (
    <section className="px-3 py-6 sm:px-6">
      <div className="glass-tint mx-auto max-w-7xl overflow-hidden rounded-2xl p-6 sm:p-10">
        <div className="grid gap-6 lg:grid-cols-[1.5fr_1fr] lg:items-center">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Ready To Ride</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl text-balance">
              Get Your Best Price Today
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Tell us which model you&apos;re interested in and our team will get back to you with the best price,
              financing options and nationwide delivery details.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:brightness-110"
              >
                Request a Quote <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/faq"
                className="glass flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition hover:border-primary hover:text-primary"
              >
                <HelpCircle className="h-4 w-4 text-primary" /> Read FAQs
              </Link>
            </div>
          </div>

          <div className="glass flex flex-col gap-4 rounded-2xl p-5">
            <a
              href="tel:+923121234567"
              className="flex items-center gap-3 text-sm text-muted-foreground transition hover:text-foreground"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <Phone className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs">Call us</span>
                <span className="font-semibold text-foreground">+92 332 4350140</span>
              </span>
            </a>
            <div className="flex items-center gap-3 text-sm text-muted-foreground">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <MapPin className="h-5 w-5" />
              </span>
              <span>
                <span className="block text-xs">Visit us</span>
                <span className="font-semibold text-foreground">Shop # 36, New Islamia Park, Main LOS Samnabad, Lahore</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
