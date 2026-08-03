import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  Clock,
  Headphones,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Truck,
  Wrench,
} from "lucide-react"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { PageHeader } from "@/components/page-header"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Support | Subhan Enterprises",
  description:
    "Get expert help from the Subhan Enterprises support team. Call, WhatsApp or email us for sales enquiries, warranty claims, spare parts, servicing and after-sales care.",
}

const channels = [
  {
    icon: Phone,
    title: "Call Us",
    value: "+92 332 4350140",
    note: "Mon – Sun, 10AM – 8PM",
    href: "tel:+923121234567",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "+92 332 4350140",
    note: "Fastest response for quick queries",
    href: "https://wa.me/923121234567",
  },
  {
    icon: Mail,
    title: "Email",
    value: "naeem.majeed101@gmail.com",
    note: "We reply within 24 hours",
    href: "mailto:naeem.majeed101@gmail.com",
  },
]

const topics = [
  {
    icon: ShieldCheck,
    title: "Warranty & Claims",
    text: "Register your warranty or start a claim on your quad bike.",
    href: "/warranty",
    cta: "View Warranty",
  },
  {
    icon: Truck,
    title: "Shipping & Delivery",
    text: "Track your order or ask about delivery timelines and charges.",
    href: "/shipping",
    cta: "Delivery Info",
  },
  {
    icon: Wrench,
    title: "Parts & Servicing",
    text: "Order genuine spare parts or book a service for your ATV.",
    href: "/products?category=parts",
    cta: "Browse Parts",
  },
  {
    icon: Headphones,
    title: "General FAQs",
    text: "Find quick answers to the most common customer questions.",
    href: "/faq",
    cta: "Read FAQs",
  },
]

export default function SupportPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <PageHeader
        eyebrow="We're Here to Help"
        title="Customer Support & After-Sales Care"
        description="Whether it's a pre-purchase question, a warranty claim, spare parts or servicing — our dedicated support team is ready to help you every step of the way."
        breadcrumb="Support"
      />

      {/* Contact channels */}
      <section className="px-3 py-6 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-3">
          {channels.map((c) => (
            <a
              key={c.title}
              href={c.href}
              className="glass group flex items-start gap-4 rounded-2xl p-6 transition hover:border-primary/50"
            >
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-primary/15 text-primary">
                <c.icon className="h-6 w-6" />
              </span>
              <div>
                <h3 className="text-base font-bold text-foreground">{c.title}</h3>
                <p className="mt-1 font-semibold text-primary">{c.value}</p>
                <p className="mt-1 text-xs text-muted-foreground">{c.note}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* Support topics */}
      <section className="px-3 py-6 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">How Can We Help You?</h2>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {topics.map((t) => (
              <Link
                key={t.title}
                href={t.href}
                className="glass group flex flex-col rounded-2xl p-6 transition hover:border-primary/50"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <t.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">{t.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
                <span className="mt-4 flex items-center gap-1.5 text-sm font-semibold text-primary">
                  {t.cta} <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Form + info */}
      <section className="px-3 py-6 sm:px-6">
        <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-[1.4fr_1fr]">
          <div className="glass rounded-2xl p-6 sm:p-8">
            <h2 className="text-xl font-extrabold tracking-tight sm:text-2xl">Send Us a Message</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill in the form and our support team will get back to you shortly.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className="glass rounded-2xl p-6">
              <h3 className="flex items-center gap-2 text-base font-bold text-foreground">
                <Clock className="h-5 w-5 text-primary" /> Support Hours
              </h3>
              <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                <li className="flex justify-between">
                  <span>Monday – Saturday</span>
                  <span className="text-foreground">10AM – 8PM</span>
                </li>
                <li className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-foreground">Always on Call</span>
                </li>
                <li className="flex justify-between">
                  <span>WhatsApp</span>
                  <span className="text-primary">Always On</span>
                </li>
              </ul>
            </div>

            <div className="glass rounded-2xl p-6">
              <h3 className="flex items-center gap-2 text-base font-bold text-foreground">
                <MapPin className="h-5 w-5 text-primary" /> Visit Our Showroom
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Subhan Enterprises, Main Boulevard, Shop # 36, New Islamia Park, Main LOS Samnabad, Lahore. Walk in to explore our full range of quad bikes
                and speak to our team in person.
              </p>
            </div>

            <div className="glass-tint flex flex-col gap-3 rounded-2xl p-6">
              <h3 className="text-base font-bold text-foreground">Need to talk right now?</h3>
              <a
                href="https://wa.me/923121234567"
                className="flex items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90"
              >
                <MessageCircle className="h-4 w-4" /> Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
