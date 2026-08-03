"use client"

import { useState } from "react"
import { ArrowRight, Bike, MapPin, Menu, Truck, X } from "lucide-react"

const navLinks = ["Home", "Products", "About Us", "Gallery", "Contact"]

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6">
      <div className="glass-strong mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <Bike className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-extrabold tracking-wide text-foreground">SUBHAN</span>
            <span className="text-[10px] font-medium tracking-[0.25em] text-primary">ENTERPRISES</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link, i) => (
            <a
              key={link}
              href="#"
              className={`relative text-sm font-medium transition-colors hover:text-foreground ${
                i === 0 ? "text-primary" : "text-muted-foreground"
              }`}
            >
              {link}
              {i === 0 && <span className="absolute -bottom-1.5 left-0 h-0.5 w-full rounded bg-primary" />}
            </a>
          ))}
        </nav>

        {/* Right badges + CTA */}
        <div className="flex items-center gap-3">
          <div className="glass hidden items-center gap-4 rounded-xl px-4 py-2 xl:flex">
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary" /> Lahore, Pakistan
            </span>
            <span className="h-4 w-px bg-border" />
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Truck className="h-3.5 w-3.5 text-primary" /> Nationwide Delivery
            </span>
          </div>
          <a
            href="#"
            className="hidden items-center gap-2 rounded-xl bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition hover:brightness-110 sm:flex"
          >
            Get Quote <ArrowRight className="h-4 w-4" />
          </a>
          <button
            onClick={() => setOpen((v) => !v)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-border text-foreground lg:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="glass-strong mx-auto mt-2 max-w-7xl rounded-2xl p-4 lg:hidden">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link, i) => (
              <a
                key={link}
                href="#"
                className={`rounded-lg px-3 py-2.5 text-sm font-medium ${
                  i === 0 ? "bg-primary/10 text-primary" : "text-muted-foreground hover:bg-background"
                }`}
              >
                {link}
              </a>
            ))}
            <a
              href="#"
              className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground"
            >
              Get Quote <ArrowRight className="h-4 w-4" />
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}
