import type { Metadata } from "next"
import Link from "next/link"
import { Clock, Mail, MapPin, MessageCircle, Phone } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { ContactForm } from "@/components/contact-form"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "Contact Subhan Enterprises | ATV Dealer Lahore Pakistan",
  description:
    "Get in touch with Subhan Enterprises for ATV price quotes, quad bike enquiries and after-sales support. Call, WhatsApp or email us, or visit our Lahore showroom.",
  path: "/contact",
})

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    lines: ["+92 332 4350140", "+92 322 2212727"],
    href: "tel:+923324350140",
    action: "Call now",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    lines: ["+92 332 4350140", "Quick replies, 7 days a week"],
    href: "https://wa.me/923324350140",
    action: "Chat now",
  },
  {
    icon: Mail,
    title: "Email Us",
    lines: ["naeem.majeed101@gmail.com", "Sales & support inquiries"],
    href: "mailto:naeem.majeed101@gmail.com",
    action: "Send email",
  },
]

const hours = [
  { day: "Monday - Friday", time: "10:00 AM - 8:00 PM" },
  { day: "Saturday", time: "10:00 AM - 8:00 PM" },
  { day: "Sunday", time: "Available on Call/WhatsApp" },
]

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="px-3 py-6 sm:px-6">
        <div className="mx-auto max-w-7xl">
          {/* Hero */}
          <div className="glass rounded-2xl p-5 sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Get In Touch</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-balance">
              We&apos;d Love To Hear From You
            </h1>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              Whether you want a price quote, have a question about a model, or need after-sales support, our team is
              ready to help. Reach out through any channel below or send us a message.
            </p>
          </div>

          {/* Contact channel cards */}
          <div className="mt-4 grid gap-4 sm:grid-cols-3">
            {contactCards.map((c) => (
              <div key={c.title} className="glass flex flex-col rounded-2xl p-5">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15 text-primary">
                  <c.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-4 text-base font-bold text-foreground">{c.title}</h3>
                <div className="mt-1 flex-1">
                  {c.lines.map((l, index) => (
                    <p key={`${c.title}-${index}`} className="text-sm text-muted-foreground">
                      {l}
                    </p>
                  ))}
                </div>
                <Link
                  href={c.href}
                  className="mt-4 inline-flex w-fit items-center gap-1.5 text-sm font-semibold text-primary transition hover:brightness-110"
                >
                  {c.action}
                </Link>
              </div>
            ))}
          </div>

          {/* Form + info */}
          <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr_1fr]">
            {/* Form */}
            <div className="glass rounded-2xl p-5 sm:p-8">
              <h2 className="text-2xl font-extrabold tracking-tight">Send Us A Message</h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Fill out the form and we&apos;ll get back to you as soon as possible.
              </p>
              <div className="mt-6">
                <ContactForm source="/contact" />
              </div>
            </div>

            {/* Info column */}
            <div className="flex flex-col gap-4">
              <div className="glass rounded-2xl p-5 sm:p-6">
                <h3 className="flex items-center gap-2 text-base font-bold text-foreground">
                  <MapPin className="h-5 w-5 text-primary" /> Visit Our Showroom
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  Shop # 36, New Islamia Park, Main LOS Samnabad, Lahore
                  <br />
                  Lahore, Punjab, Pakistan
                </p>
              </div>

              <div className="glass rounded-2xl p-5 sm:p-6">
                <h3 className="flex items-center gap-2 text-base font-bold text-foreground">
                  <Clock className="h-5 w-5 text-primary" /> Business Hours
                </h3>
                <ul className="mt-3 space-y-2">
                  {hours.map((h) => (
                    <li key={h.day} className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="font-medium text-foreground">{h.time}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Map */}
              <div className="glass overflow-hidden rounded-2xl">
                <iframe
                  title="Subhan Enterprises location on map"
                  src="https://www.openstreetmap.org/export/embed.html?bbox=74.3287%2C31.5100%2C74.3687%2C31.5400&layer=mapnik&marker=31.5250%2C74.3487"
                  className="h-64 w-full border-0 grayscale"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
