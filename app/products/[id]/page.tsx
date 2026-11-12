import type { Metadata } from "next"
import Link from "next/link"

import { notFound, permanentRedirect } from "next/navigation"
import { ArrowRight, Check, ChevronRight, Phone, ShieldCheck, Star, Truck, Wrench, X } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { ProductCard } from "@/components/product-card"
import { BlogCard } from "@/components/blog-card"
import { ProductViewTracker } from "@/components/product-view-tracker"
import { ProductImageGallery } from "@/components/product-image-gallery"
import { getRelatedBlogPosts } from "@/lib/blog"
import {
  categoryLabels,
  formatPrice,
  getProductBySlug,
  getProductDescription,
  getReplacementProductSlug,
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
  return products.filter((p) => p.isCatalogVisible !== false).map((p) => ({ id: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ id: string }>
}): Promise<Metadata> {
  const { id } = await params
  const product = getProductBySlug(id)
  if (!product || product.isCatalogVisible === false) {
    if (getReplacementProductSlug(id)) {
      return buildMetadata({
        title: "Quad Bikes for Sale in Pakistan | Subhan Enterprises",
        description: "Browse verified quad-bike listings from Subhan Enterprises.",
        path: "/products?category=atv",
      })
    }
    return { title: "Product Not Found | Subhan Enterprises" }
  }
  return buildMetadata({
    title: getProductSeoTitle(product),
    description: getProductSeoDescription(product),
    path: `/products/${product.slug}`,
    image: product.image,
  })
}

const highlights = [
  { icon: ShieldCheck, label: "7-Day Engine Warranty", href: "/warranty" },
  { icon: Truck, label: "Nationwide Delivery", href: "/shipping" },
  { icon: Wrench, label: "After-Sales Support", href: "/support" },
]

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const product = getProductBySlug(id)
  if (!product || product.isCatalogVisible === false) {
    if (getReplacementProductSlug(id)) permanentRedirect("/products?category=atv")
    notFound()
  }

  const description = getProductDescription(product)
  const related = getRelatedProducts(product)
  const relatedBlogPosts = getRelatedBlogPosts(product.slug, 3)
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
      <ProductViewTracker
        id={product.id}
        name={product.name}
        category={product.category}
        slug={product.slug}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
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

          <div
            data-analytics-section="product-detail"
            data-analytics-section-name="Product details"
            className="mt-6 grid gap-6 lg:grid-cols-2"
          >
            <ProductImageGallery
              key={product.id}
              productName={product.name}
              images={product.images ?? [product.image]}
              tag={product.tag}
            />

            <div className="glass flex flex-col rounded-2xl p-6 sm:p-8">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">
                {categoryLabels[product.category]}
              </span>
              <h1 className="mt-2 text-3xl font-extrabold tracking-tight text-balance sm:text-4xl">{product.name}</h1>
              <p className="mt-1 text-sm text-muted-foreground">
                Sold by Subhan Enterprises{product.brand ? ` · ${product.brand}` : ""}
              </p>

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

              {product.specs.length > 0 && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {product.specs.map((s) => (
                    <span key={s} className="glass-tint rounded-lg px-3 py-1.5 text-xs font-medium text-foreground">
                      {s}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-5 flex flex-wrap items-baseline gap-3">
                <p className="text-4xl font-extrabold text-primary">{formatPrice(product.price)}</p>
                {product.oldPrice != null && (
                  <p className="text-lg text-muted-foreground line-through">{formatPrice(product.oldPrice)}</p>
                )}
              </div>

              <div className="mt-3 flex items-center gap-2 text-sm">
                {product.inStock === true ? (
                  <span className="flex items-center gap-1.5 font-semibold text-primary">
                    <Check className="h-4 w-4" /> In Stock — Ready to Deliver
                  </span>
                ) : product.inStock === false ? (
                  <span className="flex items-center gap-1.5 font-semibold text-muted-foreground">
                    <X className="h-4 w-4" /> Currently Out of Stock
                  </span>
                ) : (
                  <span className="font-semibold text-muted-foreground">Contact us to confirm availability</span>
                )}
              </div>

              <p className="mt-5 text-sm leading-relaxed text-muted-foreground">{description}</p>
              {product.sourceUrl && (
                <a
                  href={product.sourceUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-3 w-fit text-sm font-medium text-primary underline-offset-4 hover:underline"
                >
                  View original Subhan Enterprises TikTok post
                </a>
              )}

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/contact"
                  data-analytics-product-enquiry=""
                  data-product-id={product.id}
                  data-product-name={product.name}
                  data-product-category={product.category}
                  data-product-url={`/products/${product.slug}`}
                  data-analytics-placement="product_detail"
                  className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-bold text-primary-foreground shadow-lg shadow-primary/25 transition hover:brightness-110"
                >
                  Enquire Now <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="tel:+923324350140"
                  data-analytics-placement="product_detail"
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
                  <ProductCard key={p.id} product={p} listContext="related_products" />
                ))}
              </div>
            </div>
          )}

          {relatedBlogPosts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-extrabold tracking-tight">From Our Blog & Guides</h2>
              <p className="mt-1 text-xs text-muted-foreground">Guides and articles featuring this model</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {relatedBlogPosts.map((post) => (
                  <BlogCard key={post.slug} post={post} />
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
