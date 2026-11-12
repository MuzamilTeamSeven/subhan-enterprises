import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BadgeCheck, CheckCircle2, Clock, Cog, FileText, Info, Phone, Wrench } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "7-Day ATV Engine Warranty in Pakistan | Subhan Enterprises",
  description:
    "Learn about the 7-day ATV engine warranty from Subhan Enterprises. Engine smoke or blow issues reported within seven days are inspected for eligible free maintenance.",
  path: "/warranty",
})

const coverage = [
  {
    icon: Cog,
    title: "7-Day Engine Warranty",
    text: "Report engine smoke or an engine blow issue within seven days of delivery for an inspection under our engine warranty.",
  },
  {
    icon: Wrench,
    title: "Free Maintenance",
    text: "If inspection confirms an eligible engine issue within the warranty period, maintenance is provided free of charge.",
  },
]

const included = [
  "Seven days of engine warranty from delivery",
  "Engine smoke or engine blow concerns reported during the warranty period",
  "Free maintenance for issues confirmed eligible after inspection",
]

const notes = [
  "Claims reported after the seven-day engine warranty period",
  "Issues outside the engine are not included in this engine warranty",
  "Warranty eligibility is confirmed after the bike is inspected",
]

const steps = [
  { icon: Phone, title: "Contact Us", text: "Call or WhatsApp our support team with your model and issue details." },
  { icon: FileText, title: "Share Proof", text: "Provide your purchase details and report the engine issue within seven days of delivery." },
  { icon: Wrench, title: "Inspection", text: "Our technicians inspect the unit and confirm the warranty claim." },
  { icon: BadgeCheck, title: "Free Maintenance", text: "If approved, we provide the eligible engine maintenance free of charge." },
]

export default function WarrantyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <PageHeader
        eyebrow="Peace of Mind"
        title="7-Day Engine Warranty"
        description="Our ATV engine warranty covers eligible smoke or engine blow issues reported within seven days of delivery. The bike is inspected first, and approved engine maintenance is free."
        breadcrumb="Warranty"
      />

      {/* Highlight badges */}
      <section className="px-3 py-6 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-3">
          {[
            { icon: Clock, stat: "7 Days", label: "Engine Warranty" },
            { icon: Cog, stat: "Engine", label: "Smoke or Blow Issues" },
            { icon: BadgeCheck, stat: "Free", label: "Eligible Maintenance" },
          ].map((b) => (
            <div key={b.label} className="glass flex items-center gap-4 rounded-2xl p-5">
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <b.icon className="h-6 w-6" />
              </span>
              <div>
                <p className="text-2xl font-extrabold text-foreground">{b.stat}</p>
                <p className="text-xs text-muted-foreground">{b.label}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coverage */}
      <section className="px-3 py-6 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">What Your Warranty Covers</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {coverage.map((c) => (
              <div key={c.title} className="glass rounded-2xl p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-lg font-bold text-foreground">{c.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Included vs Excluded */}
      <section className="px-3 py-6 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-2">
          <div className="glass rounded-2xl p-6 sm:p-8">
            <h3 className="flex items-center gap-2 text-lg font-bold text-foreground">
              <CheckCircle2 className="h-5 w-5 text-primary" /> What&apos;s Included
            </h3>
            <ul className="mt-5 space-y-3">
              {included.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
          <div className="glass rounded-2xl p-6 sm:p-8">
            <h3 className="flex items-center gap-2 text-lg font-bold text-foreground">
              <Info className="h-5 w-5 text-muted-foreground" /> Important Warranty Details
            </h3>
            <ul className="mt-5 space-y-3">
              {notes.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <Info className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
                  {i}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Claim steps */}
      <section className="px-3 py-6 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">How to Claim Your Warranty</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {steps.map((s, i) => (
              <div key={s.title} className="glass relative rounded-2xl p-6">
                <span className="absolute right-5 top-5 text-2xl font-extrabold text-primary/20">{i + 1}</span>
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <s.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">{s.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-3 py-8 sm:px-6">
        <div className="glass-tint mx-auto flex max-w-7xl flex-col items-center gap-4 rounded-2xl p-8 text-center sm:p-12">
          <h2 className="text-2xl font-extrabold tracking-tight text-balance sm:text-3xl">
            Have a warranty question?
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            Our support team is ready to help you register, verify or claim your warranty. Get in touch and we&apos;ll
            take care of the rest.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/support"
              className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90"
            >
              Contact Support <ArrowRight className="h-4 w-4" />
            </Link>
            <a
              href="tel:+923324350140"
              data-analytics-placement="warranty_call_cta"
              className="glass flex items-center justify-center gap-2 rounded-xl px-6 py-3 text-sm font-bold transition hover:border-primary hover:text-primary"
            >
              <Phone className="h-4 w-4" /> +92 332 4350140
            </a>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
