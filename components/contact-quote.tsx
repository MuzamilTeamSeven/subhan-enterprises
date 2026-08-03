"use client"

import type React from "react"

import { useState } from "react"
import { ChevronDown, Send, ShieldCheck, Phone, MapPin } from "lucide-react"

const faqs = [
  {
    q: "Do you offer nationwide delivery across Pakistan?",
    a: "Yes. We deliver to all major cities including Lahore, Karachi, Islamabad, Faisalabad and beyond with safe, insured shipping.",
  },
  {
    q: "Are your ATVs original and imported?",
    a: "Every quad bike we sell is 100% original and directly imported from trusted global brands like CFMOTO, Can-Am, Linhai and more.",
  },
  {
    q: "Do you provide a warranty?",
    a: "All our models come with a 1 year warranty covering the engine and major components for complete peace of mind.",
  },
  {
    q: "Can I get financing or an installment plan?",
    a: "Yes, we offer easy financing options and exchange / trade-in deals. Request a quote and our team will share the available plans.",
  },
  {
    q: "How long does the booking process take?",
    a: "Our process is smooth and quick. Once you confirm your model and payment, delivery is typically arranged within a few days.",
  },
]

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="glass overflow-hidden rounded-xl">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left"
        aria-expanded={open}
      >
        <span className="text-sm font-semibold text-foreground">{q}</span>
        <ChevronDown
          className={`h-4 w-4 shrink-0 text-primary transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && <p className="px-5 pb-4 text-sm leading-relaxed text-muted-foreground">{a}</p>}
    </div>
  )
}

export function ContactQuote() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <section id="contact" className="px-3 py-6 sm:px-6">
      <div className="mx-auto grid max-w-7xl gap-4 lg:grid-cols-2">
        {/* Quote form */}
        <div className="glass rounded-2xl p-5 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Get A Quote</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl text-balance">
            Ready To Ride? Request Your Quote.
          </h2>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
            Tell us which model you&apos;re interested in and our team will get back to you with the best price.
          </p>

          {submitted ? (
            <div className="glass-tint mt-6 flex items-center gap-3 rounded-xl px-5 py-6">
              <ShieldCheck className="h-6 w-6 text-primary" />
              <div>
                <p className="font-semibold text-foreground">Thank you! Your request has been received.</p>
                <p className="text-sm text-muted-foreground">Our team will contact you shortly.</p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="mt-6 grid gap-3">
              <div className="grid gap-3 sm:grid-cols-2">
                <input
                  required
                  placeholder="Full Name"
                  className="glass rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
                <input
                  required
                  type="tel"
                  placeholder="Phone Number"
                  className="glass rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <select
                required
                defaultValue=""
                className="glass rounded-xl px-4 py-3 text-sm text-foreground focus:border-primary focus:outline-none"
              >
                <option value="" disabled>
                  Select a model
                </option>
                <option>Raptor 700R</option>
                <option>CFMOTO 520L</option>
                <option>Can-Am Outlander</option>
                <option>Linhai LH 400</option>
                <option>Not sure yet</option>
              </select>
              <textarea
                rows={3}
                placeholder="Your message (optional)"
                className="glass resize-none rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none"
              />
              <button
                type="submit"
                className="flex items-center justify-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90"
              >
                Get Quote Now <Send className="h-4 w-4" />
              </button>
            </form>
          )}

          <div className="mt-6 flex flex-wrap gap-4 border-t border-border pt-5 text-sm text-muted-foreground">
            <span className="flex items-center gap-2">
              <Phone className="h-4 w-4 text-primary" /> +92 312 1234567
            </span>
            <span className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-primary" /> Lahore, Pakistan
            </span>
          </div>
        </div>

        {/* FAQ */}
        <div className="glass rounded-2xl p-5 sm:p-8">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">FAQs</p>
          <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl text-balance">
            Frequently Asked Questions
          </h2>
          <div className="mt-6 grid gap-3">
            {faqs.map((f) => (
              <FaqItem key={f.q} q={f.q} a={f.a} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
