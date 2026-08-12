import type { Metadata } from "next"
import Link from "next/link"
import Script from "next/script"
import { notFound } from "next/navigation"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { ArrowRight, Check, ChevronRight, Phone, ShieldCheck, Star, Truck, Wrench, X } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { ProductCard } from "@/components/product-card"
import {
  categoryLabels,
  formatPrice,
  getProductBySlug,
  getProductDescription,
  getProductSeoTitle,
  getProductSeoDescription,
  getRelatedProducts,
  products,
} from "@/lib/products"
import {
  buildMetadata,
  generateProductSchema,
  generateBreadcrumbSchema,
  siteUrl,
} from "@/lib/seo"
import { cn } from "@/lib/utils"

export function generateStaticParams() {
  return products.map((p) => ({ id: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const product = getProductBySlug(id)
  if (!product) return { title: "Product Not Found | Subhan Enterprises" }
  return buildMetadata({
    title: getProductSeoTitle(product),
    description: getProductSeoDescription(product),
    path: `/products/${product.slug}`,
    image: product.image,
  })
}

const highlights = [
  { icon: ShieldCheck, label: "1 Year Warranty", href: "/warranty" },
  { icon: Truck, label: "Nationwide Delivery", href: "/shipping" },
  { icon: Wrench, label: "After-Sales Support", href: "/support" },
]

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductBySlug(id)
  if (!product) notFound()

  const description = getProductDescription(product)
  const related = getRelatedProducts(product)
  const productUrl = `${siteUrl}/products/${product.slug}`

  const productSchema = generateProductSchema({
    name: product.name,
    description: getProductSeoDescription(product),
    image: product.image,
    brand: product.brand,
    price: product.price,
    availability: product.inStock,
    url: productUrl,
    sku: product.id,
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Products", url: "/products" },
    { name: categoryLabels[product.category], url: `/products?category=${product.category}` },
    { name: product.name, url: `/products/${product.slug}` },
  ])

  return (
    <main className="min-h-screen bg-background">
      <Script
        id={`schema-product-${product.id}`}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <Script
        id={`schema-breadcrumb-product-${product.id}`}
        type="application/ld+json"
        strategy="beforeInteractive"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <section className="px-3 py-6 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <nav className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="link-underline transition hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/products" className="link-underline transition hover:text-primary">
              Products
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href={`/products?category=${product.category}`} className="link-underline transition hover:text-primary">
              {categoryLabels[product.category]}
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <span className="text-foreground">{product.name}</span>
          </nav>

          <div className="mt-6 grid gap-6 lg:grid-cols-2">
            <div className="glass glass-card-hover relative flex items-center justify-center rounded-2xl p-8">
              {product.tag && (
                <span className="absolute left-5 top-5 rounded-md bg-primary px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-foreground">
                  {product.tag}
                </span>
              )}
              <OptimizedImage
                src={product.image || "/placeholder.svg"}
                alt={`${product.brand} ${product.name} — ${categoryLabels[product.category]} available in Pakistan from Subhan Enterprises`}
                width={520}
                height={400}
                priority
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="max-h-[380px] w-auto object-contain"
              />
            </div>

            <div className="glass flex flex-col rounded-2xl p-6 sm:p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {categoryLabels[product.category]}
              </span>
              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">{product.name}</h1>
              <p className="mt-1 text-sm text-muted-foreground">by {product.brand}</p>

              {product.rating != null && (
                <div className="mt-3 flex items-center gap-1 text-primary">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={cn("h-4 w-4", i < Math.round(product.rating!) ? "fill-current" : "fill-none opacity-40")}
                    />
                  ))}
                  <span className="ml-1 text-sm text-muted-foreground">{product.rating.toFixed(1)} rating</span>
                </div>
              )}

              <div className="mt-4 flex flex-wrap gap-2">
                {product.specs.map((s) => (
                  <span key={s} className="glass-tint rounded-lg px-3 py-1.5 text-xs font-medium text-foreground">
                    {s}
                  </span>
                ))}
              </div>

              <div className="mt-5 flex flex-wrap items-baseline gap-3">
                <p className="text-4xl font-extrabold text-primary">{formatPrice(product.price)}</p>
                {product.oldPrice != null && (
                  <p className="text-lg text-muted-foreground line-through">{formatPrice(product.oldPrice)}</p>
                )}
              </div>

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
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition hover:brightness-110"
                >
                  Enquire Now <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+923324350140"
                  className="btn-glass flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-bold"
                >
                  <Phone className="h-4 w-4" /> Call to Order
                </a>
              </div>

              <div className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-3">
                {highlights.map((h) => (
                  <Link
                    key={h.label}
                    href={h.href}
                    className="btn-glass float-hover flex items-center gap-2.5 rounded-xl px-3 py-2.5 text-xs font-semibold"
                  >
                    <h.icon className="h-4 w-4 shrink-0 text-primary" />
                    {h.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {related.length > 0 && (
            <div className="mt-10">
              <h2 className="text-2xl font-extrabold tracking-tight">You May Also Like</h2>
              <div className="mt-5 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
                {related.map((p) => (
                  <ProductCard key={p.id} product={p} />
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
