import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, BadgeCheck, CheckCircle2, Clock, Cog, FileText, Phone, ShieldCheck, Wrench, XCircle } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Warranty | Subhan Enterprises",
  description:
    "Every ATV and quad bike from Subhan Enterprises is backed by a comprehensive 1 year warranty covering engine, transmission and electrical components with genuine parts and expert service.",
}

const coverage = [
  {
    icon: Cog,
    title: "Engine & Transmission",
    text: "Full coverage on engine internals, gearbox and drivetrain against manufacturing defects for 12 months.",
  },
  {
    icon: ShieldCheck,
    title: "Electrical System",
    text: "Wiring, ignition, lighting and electronic control units are protected against faults from day one.",
  },
  {
    icon: Wrench,
    title: "Genuine Parts & Labour",
    text: "All warranty repairs use 100% original parts and are carried out by our factory-trained technicians.",
  },
]

const included = [
  "Manufacturing defects in engine, transmission and frame",
  "Electrical and electronic component failures",
  "Free labour on all approved warranty claims",
  "Genuine imported replacement parts",
  "Nationwide service coordination",
]

const excluded = [
  "Normal wear items — tyres, brake pads, filters, oil",
  "Damage from accidents, misuse or racing",
  "Unauthorised modifications or repairs",
  "Neglected or skipped scheduled maintenance",
  "Cosmetic wear from regular use",
]

const steps = [
  { icon: Phone, title: "Contact Us", text: "Call or WhatsApp our support team with your model and issue details." },
  { icon: FileText, title: "Share Proof", text: "Provide your invoice and warranty card so we can verify coverage." },
  { icon: Wrench, title: "Inspection", text: "Our technicians inspect the unit and confirm the warranty claim." },
  { icon: BadgeCheck, title: "Repaired & Returned", text: "We repair with genuine parts and return your bike ready to ride." },
]

export default function WarrantyPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <PageHeader
        eyebrow="Peace of Mind"
        title="1 Year Comprehensive Warranty"
        description="Every quad bike we sell is 100% original and protected by a full 12-month warranty. Ride with total confidence knowing our team and genuine parts stand behind your machine."
        breadcrumb="Warranty"
      />

      {/* Highlight badges */}
      <section className="px-3 py-6 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-3">
          {[
            { icon: Clock, stat: "12 Months", label: "Full Warranty Cover" },
            { icon: Wrench, stat: "100%", label: "Genuine Parts Used" },
            { icon: BadgeCheck, stat: "Free", label: "Labour on Claims" },
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
          <div className="mt-6 grid gap-4 md:grid-cols-3">
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
              <XCircle className="h-5 w-5 text-muted-foreground" /> What&apos;s Not Covered
            </h3>
            <ul className="mt-5 space-y-3">
              {excluded.map((i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <XCircle className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground" />
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
              href="tel:+923121234567"
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
