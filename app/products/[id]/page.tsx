import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, Check, ChevronRight, Phone, ShieldCheck, Truck, Wrench, X } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import {
  categoryLabels,
  formatPrice,
  getProductById,
  getProductDescription,
  getRelatedProducts,
  products,
} from "@/lib/products"

export function generateStaticParams() {
  return products.map((p) => ({ id: p.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const product = getProductById(id)
  if (!product) return { title: "Product Not Found | Subhan Enterprises" }
  return {
    title: `${product.name} | Subhan Enterprises`,
    description: getProductDescription(product),
  }
}

const highlights = [
  { icon: ShieldCheck, label: "1 Year Warranty", href: "/warranty" },
  { icon: Truck, label: "Nationwide Delivery", href: "/shipping" },
  { icon: Wrench, label: "After-Sales Support", href: "/support" },
]

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductById(id)
  if (!product) notFound()

  const description = getProductDescription(product)
  const related = getRelatedProducts(product)

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="px-3 py-6 sm:px-6">
        <div className="mx-auto max-w-7xl">
          {/* Breadcrumb */}
          <nav className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="transition hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/products" className="transition hover:text-primary">
              Products
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href={`/products?category=${product.category}`} className="transition hover:text-primary">
              {categoryLabels[product.category]}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            {/* Image */}
            <div className="glass relative flex items-center justify-center rounded-2xl p-8">
              {product.tag && (
                <span className="absolute left-5 top-5 rounded-md bg-primary px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-foreground">
                  {product.tag}
                </span>
              )}
              <Image
                src={product.image || "/placeholder.svg"}
                alt={product.name}
                width={520}
                height={400}
                className="max-h-[380px] w-auto object-contain"
                priority
              />
            </div>

            {/* Details */}
            <div className="glass flex flex-col rounded-2xl p-6 sm:p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {categoryLabels[product.category]}
              </span>
              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">{product.name}</h1>
              <p className="mt-1 text-sm text-muted-foreground">by {product.brand}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {product.specs.map((s) => (
                  <span key={s} className="glass-tint rounded-lg px-3 py-1.5 text-xs font-medium text-foreground">
                    {s}
                  </span>
                ))}
              </div>

              <p className="mt-5 text-4xl font-extrabold text-primary">{formatPrice(product.price)}</p>

              <div className="mt-3 flex items-center gap-2 text-sm">
                {product.inStock ? (
                  <span className="flex items-center gap-1.5 font-semibold text-primary">
                    <Check className="h-4 w-4" /> In Stock — Ready to Deliver
                  </span>
                ) : (
                  <span className="flex items-center gap-1.5 font-semibold text-muted-foreground">
                    <X className="h-4 w-4" /> Currently Out of Stock
                  </span>
                )}
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{description}</p>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground transition hover:opacity-90"
                >
                  Enquire Now <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+923121234567"
                  className="glass flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold transition hover:border-primary hover:text-primary"
                >
                  <Phone className="h-4 w-4" /> Call to Order
                </a>
              </div>

              {/* Trust highlights */}
              <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                {highlights.map((h) => (
                  <Link
                    key={h.label}
                    href={h.href}
                    className="glass flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-xs font-semibold transition hover:border-primary hover:text-primary"
                  >
                    <h.icon className="h-4 w-4 shrink-0 text-primary" />
                    {h.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Related products */}
          {related.length > 0 && (
            <div className="mt-10">
              <h2 className="text-2xl font-extrabold tracking-tight">You May Also Like</h2>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {related.map((p) => (
                  <Link
                    key={p.id}
                    href={`/products/${p.id}`}
                    className="glass group flex flex-col overflow-hidden rounded-2xl p-4 transition hover:border-primary/50"
                  >
                    <div className="flex h-36 items-center justify-center">
                      <Image
                        src={p.image || "/placeholder.svg"}
                        alt={p.name}
                        width={220}
                        height={160}
                        className="max-h-full w-auto object-contain transition group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mt-3 text-sm font-bold text-foreground">{p.name}</h3>
                    <p className="text-xs text-muted-foreground">{p.brand}</p>
                    <p className="mt-2 text-base font-extrabold text-primary">{formatPrice(p.price)}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
