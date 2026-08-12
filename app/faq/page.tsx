import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { FaqList, type FaqCategory } from "@/components/faq-list"
import { buildMetadata } from "@/lib/seo"

export const metadata: Metadata = buildMetadata({
  title: "ATV & Quad Bike FAQs Pakistan | Subhan Enterprises",
  description:
    "Answers to common questions about buying ATVs and quad bikes from Subhan Enterprises — delivery, warranty, financing, spare parts, accessories and after-sales support in Pakistan.",
  path: "/faq",
})

const faqs: FaqCategory[] = [
  {
    category: "Orders & Delivery",
    items: [
      {
        q: "Do you offer nationwide delivery across Pakistan?",
        a: "Yes. We deliver to all major cities including Lahore, Karachi, Islamabad, Faisalabad, Peshawar, Multan and beyond with safe, fully insured shipping.",
      },
      {
        q: "How long does delivery take?",
        a: "Once your model and payment are confirmed, delivery is typically arranged within 3 to 7 working days depending on your city and stock availability.",
      },
      {
        q: "Can I track my order?",
        a: "Absolutely. Our team shares tracking details and coordinates a delivery time window with you directly over phone or WhatsApp.",
      },
    ],
  },
  {
    category: "Products & Availability",
    items: [
      {
        q: "Are your ATVs original and imported?",
        a: "Every quad bike we sell is 100% original and directly imported from trusted global brands like CFMOTO, Can-Am, Yamaha, Linhai and more.",
      },
      {
        q: "Do you sell accessories and spare parts?",
        a: "Yes. Alongside quad bikes we stock a full range of accessories (helmets, gloves, goggles, light bars, winches) and genuine parts & gear such as tires, batteries, filters, brake pads and engine oil.",
      },
      {
        q: "What if a product is out of stock?",
        a: "If an item shows as out of stock, contact us and we'll give you an estimated restock date or suggest the closest available alternative.",
      },
    ],
  },
  {
    category: "Pricing & Payment",
    items: [
      {
        q: "Can I get financing or an installment plan?",
        a: "Yes, we offer easy financing options and exchange / trade-in deals. Request a quote and our team will share the available plans for your selected model.",
      },
      {
        q: "What payment methods do you accept?",
        a: "We accept bank transfers, cash on collection at our showroom, and can arrange secure payment options for out-of-city customers.",
      },
      {
        q: "Are prices negotiable?",
        a: "We offer competitive, fair pricing. For bulk orders or trade-ins, reach out and we'll do our best to work out the best possible deal for you.",
      },
    ],
  },
  {
    category: "Warranty & Support",
    items: [
      {
        q: "Do you provide a warranty?",
        a: "All our models come with a 1 year warranty covering the engine and major components for complete peace of mind.",
      },
      {
        q: "Do you offer after-sales service and maintenance?",
        a: "Yes. Our workshop provides servicing, maintenance and genuine spare parts so your ATV keeps performing at its best.",
      },
      {
        q: "What is your returns policy?",
        a: "If there is a genuine manufacturing defect on arrival, contact us immediately. We'll assess the issue and arrange a repair, replacement or return as per warranty terms.",
      },
    ],
  },
]

export default function FaqPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="px-3 py-6 sm:px-6">
        <div className="mx-auto max-w-3xl">
          {/* Hero */}
          <div className="glass rounded-2xl p-6 text-center sm:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Help Center</p>
            <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl text-balance">
              Frequently Asked Questions
            </h1>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
              Everything you need to know about ordering, delivery, warranty and support. Can&apos;t find your answer?
              Our team is just a message away.
            </p>
          </div>

          {/* List */}
          <div className="mt-6">
            <FaqList data={faqs} />
          </div>

          {/* CTA */}
          <div className="glass-tint mt-8 flex flex-col items-center gap-3 rounded-2xl px-6 py-8 text-center">
            <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/20 text-primary">
              <Phone className="h-6 w-6" />
            </span>
            <h2 className="text-xl font-bold text-foreground">Still have questions?</h2>
            <p className="max-w-md text-sm text-muted-foreground">
              Our team is happy to help you choose the right ATV, arrange a quote or answer any query.
            </p>
            <Link
              href="/contact"
              className="mt-2 inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground transition hover:brightness-110"
            >
              Contact Us <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
