"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { ArrowRight, Bike, MapPin, Menu, Truck, X } from "lucide-react"

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
]

export function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const isActive = (href: string) => (href === "/" ? pathname === "/" : pathname.startsWith(href))

  return (
    <header className="sticky top-0 z-50 px-3 pt-3 sm:px-6">
      <div
        className={`glass-strong mx-auto flex max-w-7xl items-center justify-between rounded-2xl px-4 py-3 sm:px-6 ${
          scrolled ? "nav-scrolled" : ""
        }`}
      >
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/15 text-primary">
            <Bike className="h-5 w-5" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-sm font-extrabold tracking-wide text-foreground">SUBHAN</span>
            <span className="text-[10px] font-medium tracking-[0.25em] text-primary">ENTERPRISES</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-7 lg:flex">
          {navLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className={`nav-link relative text-sm font-medium transition-colors hover:text-foreground ${
                isActive(link.href) ? "nav-link-active text-primary" : "text-muted-foreground"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right badges + CTA */}
        <div className="flex items-center gap-3">
          <div className="glass hidden items-center gap-4 rounded-xl px-4 py-2 xl:flex">
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <MapPin className="h-3.5 w-3.5 text-primary" /> Main LOS Samnabad, Lahore
            </span>
            <span className="h-4 w-px bg-border" />
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Truck className="h-3.5 w-3.5 text-primary" /> Nationwide Delivery
            </span>
          </div>
          <Link
            href="/contact"
            className="btn-primary hidden items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold sm:flex"
          >
            Get Quote <ArrowRight className="h-4 w-4" />
          </Link>
          <button
            onClick={() => setOpen((v) => !v)}
            className="btn-glass flex h-10 w-10 items-center justify-center rounded-lg lg:hidden"
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
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className={`rounded-lg border px-3 py-2.5 text-sm transition-all duration-300 ${
                  isActive(link.href)
                    ? "bg-primary/20 border-primary/20 text-primary font-bold shadow-[inset_0_1px_0_rgba(255,255,255,0.05)]"
                    : "border-transparent text-muted-foreground hover:bg-white/5"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="btn-primary mt-2 flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold"
            >
              Get Quote <ArrowRight className="h-4 w-4" />
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
