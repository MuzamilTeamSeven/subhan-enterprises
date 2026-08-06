"use client"

import type React from "react"
import { useState } from "react"
import { Send, ShieldCheck } from "lucide-react"
import { products } from "@/lib/products"

const subjects = ["Product Enquiry", "Request a Quote", "Warranty / Support", "Financing / Installments", "Other"]

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="glass-tint flex flex-col items-center gap-3 rounded-2xl px-6 py-16 text-center">
        <span className="flex h-14 w-14 items-center justify-center rounded-full bg-primary/20 text-primary">
          <ShieldCheck className="h-7 w-7" />
        </span>
        <p className="text-lg font-bold text-foreground">Thank you! Your message has been received.</p>
        <p className="max-w-sm text-sm text-muted-foreground">
          Our team will get back to you shortly on your phone or email. For urgent queries, call us directly.
        </p>
        <button
          onClick={() => setSubmitted(false)}
          className="btn-glass mt-2 rounded-xl px-4 py-2 text-sm font-semibold"
        >
          Send another message
        </button>
      </div>
    )
  }

  const inputClass =
    "glass rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary/50 focus:ring-1 focus:ring-primary/20 transition-all duration-300 focus:outline-none"

  return (
    <form onSubmit={handleSubmit} className="grid gap-3">
      <div className="grid gap-3 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-medium text-muted-foreground">
            Full Name
          </label>
          <input id="name" required placeholder="e.g. Ahmed Khan" className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-xs font-medium text-muted-foreground">
            Phone Number
          </label>
          <input id="phone" required type="tel" placeholder="+92 3XX XXXXXXX" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-medium text-muted-foreground">
            Email Address
          </label>
          <input id="email" type="email" placeholder="you@example.com" className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="city" className="text-xs font-medium text-muted-foreground">
            City
          </label>
          <input id="city" placeholder="e.g. Lahore" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="subject" className="text-xs font-medium text-muted-foreground">
            Subject
          </label>
          <select id="subject" required defaultValue="" className={inputClass}>
            <option value="" disabled>
              Select a subject
            </option>
            {subjects.map((s) => (
              <option key={s} value={s} className="bg-card text-foreground">
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="model" className="text-xs font-medium text-muted-foreground">
            Product of Interest
          </label>
          <select id="model" defaultValue="" className={inputClass}>
            <option value="">Not sure yet</option>
            {products.map((p) => (
              <option key={p.id} value={p.id} className="bg-card text-foreground">
                {p.name}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-xs font-medium text-muted-foreground">
          Your Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          placeholder="Tell us how we can help you..."
          className={`${inputClass} resize-none`}
        />
      </div>

      <button
        type="submit"
        className="btn-primary mt-1 flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold"
      >
        Send Message <Send className="h-4 w-4" />
      </button>
      <p className="text-center text-xs text-muted-foreground">
        We usually respond within a few hours during business hours.
      </p>
    </form>
  )
}
