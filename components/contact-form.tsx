"use client"

import type React from "react"
import { useState, useRef } from "react"
import emailjs from "@emailjs/browser"
import { AlertCircle, Loader2, Send, ShieldCheck } from "lucide-react"
import { products } from "@/lib/products"

const subjects = ["Product Enquiry", "Request a Quote", "Warranty / Support", "Financing / Installments", "Other"]

interface ContactFormProps {
  source?: string
}

export function ContactForm({ source = "/contact" }: ContactFormProps) {
  const formRef = useRef<HTMLFormElement>(null)
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [submittedAt, setSubmittedAt] = useState<string>("")

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()

    if (isSubmitting) return

    setError(null)
    setIsSubmitting(true)

    const now = new Date().toLocaleString("en-PK", {
      dateStyle: "full",
      timeStyle: "short",
    })
    setSubmittedAt(now)

    const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
    const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setError("Sorry, we couldn't send your inquiry right now. Please try again or contact us directly.")
      setIsSubmitting(false)
      return
    }

    try {
      if (formRef.current) {
        const submittedAtInput = formRef.current.querySelector<HTMLInputElement>('input[name="submitted_at"]')
        if (submittedAtInput) {
          submittedAtInput.value = now
        }
        await emailjs.sendForm(serviceId, templateId, formRef.current, {
          publicKey,
        })
      }
      setSubmitted(true)
    } catch {
      setError("Sorry, we couldn't send your inquiry right now. Please try again or contact us directly.")
    } finally {
      setIsSubmitting(false)
    }
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
          type="button"
          onClick={() => {
            setSubmitted(false)
            setError(null)
          }}
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
    <form ref={formRef} onSubmit={handleSubmit} className="grid gap-3">
      {/* Hidden Metadata Fields for EmailJS Template */}
      <input type="hidden" name="source" value={source} />
      <input type="hidden" name="submitted_at" value={submittedAt} />

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="name" className="text-xs font-medium text-muted-foreground">
            Full Name
          </label>
          <input id="name" name="name" required placeholder="e.g. Ahmed Khan" className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="phone" className="text-xs font-medium text-muted-foreground">
            Phone Number
          </label>
          <input id="phone" name="phone" required type="tel" placeholder="+92 3XX XXXXXXX" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="email" className="text-xs font-medium text-muted-foreground">
            Email Address
          </label>
          <input id="email" name="email" type="email" placeholder="you@example.com" className={inputClass} />
        </div>
        <div className="flex flex-col gap-1.5">
          <label htmlFor="city" className="text-xs font-medium text-muted-foreground">
            City
          </label>
          <input id="city" name="city" placeholder="e.g. Lahore" className={inputClass} />
        </div>
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="flex flex-col gap-1.5">
          <label htmlFor="subject" className="text-xs font-medium text-muted-foreground">
            Subject
          </label>
          <select id="subject" name="subject" required defaultValue="" className={inputClass}>
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
          <select id="model" name="model" defaultValue="" className={inputClass}>
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
          name="message"
          required
          rows={5}
          placeholder="Tell us how we can help you..."
          className={`${inputClass} resize-none`}
        />
      </div>

      {error && (
        <div className="flex items-center gap-2 rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-xs font-medium text-destructive">
          <AlertCircle className="h-4 w-4 shrink-0" />
          <span>{error}</span>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary mt-1 flex items-center justify-center gap-2 rounded-xl px-6 py-3.5 text-sm font-semibold disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <>
            Sending... <Loader2 className="h-4 w-4 animate-spin" />
          </>
        ) : (
          <>
            Send Message <Send className="h-4 w-4" />
          </>
        )}
      </button>
      <p className="text-center text-xs text-muted-foreground">
        We usually respond within a few hours during business hours.
      </p>
    </form>
  )
}
