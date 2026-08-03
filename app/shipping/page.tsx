import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  BadgeCheck,
  ClipboardCheck,
  MapPin,
  PackageCheck,
  Phone,
  ShieldCheck,
  Truck,
  Wallet,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"

export const metadata: Metadata = {
  title: "Shipping & Delivery | Subhan Enterprises",
  description:
    "Fast, fully insured nationwide delivery of ATVs and quad bikes across Pakistan. Learn about our delivery timelines, coverage, charges and the safe handover process.",
}

const features = [
  {
    icon: Truck,
    title: "Nationwide Coverage",
    text: "We deliver to all major cities — Lahore, Karachi, Islamabad, Faisalabad, Peshawar, Multan and beyond.",
  },
  {
    icon: ShieldCheck,
    title: "Fully Insured Transit",
    text: "Every shipment is insured and securely crated, so your quad bike arrives in flawless condition.",
  },
  {
    icon: PackageCheck,
    title: "Safe Handover",
    text: "Our team inspects and demonstrates the unit with you at delivery before the final handover.",
  },
]

const zones = [
  { zone: "Lahore & Central Punjab", time: "2 – 3 working days", note: "Same-region express handling" },
  { zone: "Islamabad, Rawalpindi & KPK", time: "3 – 5 working days", note: "Insured intercity transport" },
  { zone: "Karachi & Sindh", time: "4 – 6 working days", note: "Crated freight delivery" },
  { zone: "Balochistan & Remote Areas", time: "5 – 8 working days", note: "Coordinated on request" },
]

const steps = [
  { icon: ClipboardCheck, title: "Order Confirmed", text: "We confirm your model, colour and payment details." },
  { icon: PackageCheck, title: "Crating & Dispatch", text: "Your unit is inspected, securely crated and dispatched." },
  { icon: MapPin, title: "In Transit", text: "Track your delivery with live updates from our team." },
  { icon: BadgeCheck, title: "Delivered", text: "We demonstrate the bike and complete a safe handover." },
]

export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <PageHeader
        eyebrow="Fast & Insured"
        title="Shipping & Delivery Across Pakistan"
        description="From our showroom to your doorstep — we handle safe, fully insured nationwide delivery of every quad bike and accessory, with live coordination the whole way."
        breadcrumb="Shipping & Delivery"
      />

      {/* Feature cards */}
      <section className="px-3 py-6 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {features.map((f) => (
            <div key={f.title} className="glass rounded-2xl p-6">
              <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <f.icon className="h-5 w-5" />
              </span>
              <h3 className="mt-4 text-lg font-bold text-foreground">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Delivery zones */}
      <section className="px-3 py-6 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Estimated Delivery Timelines</h2>
          <p className="mt-2 max-w-2xl text-sm text-muted-foreground">
            Timelines begin once your order and payment are confirmed and are subject to stock availability.
          </p>
          <div className="glass mt-6 overflow-hidden rounded-2xl">
            <div className="hidden grid-cols-3 gap-4 border-b border-border px-6 py-4 text-xs font-bold uppercase tracking-wide text-muted-foreground sm:grid">
              <span>Region</span>
              <span>Estimated Time</span>
              <span>Notes</span>
            </div>
            {zones.map((z) => (
              <div
                key={z.zone}
                className="grid grid-cols-1 gap-1 border-b border-border px-6 py-4 last:border-0 sm:grid-cols-3 sm:gap-4"
              >
                <span className="flex items-center gap-2 font-semibold text-foreground">
                  <MapPin className="h-4 w-4 text-primary" /> {z.zone}
                </span>
                <span className="text-sm text-primary">{z.time}</span>
                <span className="text-sm text-muted-foreground">{z.note}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Charges */}
      <section className="px-3 py-6 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-2">
          <div className="glass rounded-2xl p-6 sm:p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <Wallet className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-foreground">Delivery Charges</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              Delivery charges depend on your city and the model ordered. For many quad bikes within Punjab we offer
              free or heavily subsidised delivery. Our team shares exact charges at the time of order confirmation — no
              hidden fees.
            </p>
          </div>
          <div className="glass rounded-2xl p-6 sm:p-8">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
              <ShieldCheck className="h-5 w-5" />
            </span>
            <h3 className="mt-4 text-lg font-bold text-foreground">Damage-Free Guarantee</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              In the rare event of any transit damage, report it at handover and we will repair or replace the affected
              parts at no cost to you. Your satisfaction on delivery is guaranteed.
            </p>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="px-3 py-6 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">The Delivery Process</h2>
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
            Want a delivery estimate for your city?
          </h2>
          <p className="max-w-xl text-sm leading-relaxed text-muted-foreground">
            Tell us your location and the model you want, and we&apos;ll give you an exact timeline and delivery charge.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90"
            >
              Get a Quote <ArrowRight className="h-4 w-4" />
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
