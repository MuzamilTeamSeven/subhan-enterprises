import type { Metadata } from "next"
import Link from "next/link"

import { notFound } from "next/navigation"
import { OptimizedImage } from "@/components/ui/optimized-image"
import { ChevronRight, Clock, User } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"
import { BlogCard } from "@/components/blog-card"
import { BlogArticleContent } from "@/components/blog-article-content"
import { ProductCard } from "@/components/product-card"
import {
  blogCategoryLabels,
  blogPostsMeta,
  formatBlogDate,
  getBlogPost,
  getRelatedPosts,
} from "@/lib/blog"
import { getProductBySlug } from "@/lib/products"
import {
  buildMetadata,
  generateArticleSchema,
  generateBreadcrumbSchema,
} from "@/lib/seo"

export function generateStaticParams() {
  return blogPostsMeta.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return { title: "Article Not Found | Subhan Enterprises" }
  return buildMetadata({
    title: post.metaTitle,
    description: post.metaDescription,
    path: `/blog/${post.slug}`,
    image: post.featuredImage,
    type: "article",
  })
}

export default async function BlogDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const explicitRelated = post.relatedArticleSlugs
    ?.map((s) => getBlogPost(s))
    .filter((p): p is NonNullable<typeof p> => p != null) ?? []

  const autoRelated = getRelatedPosts(slug, 3)
  const related = explicitRelated.length > 0 ? explicitRelated.slice(0, 3) : autoRelated

  const relatedProducts = post.relatedProductSlugs
    ?.map((s) => getProductBySlug(s))
    .filter((p): p is NonNullable<typeof p> => p != null) ?? []

  const date = formatBlogDate(post.publishedAt)

  const articleSchema = generateArticleSchema({
    title: post.metaTitle,
    description: post.metaDescription,
    image: post.featuredImage,
    slug: post.slug,
    publishedAt: post.publishedAt,
    author: post.author,
  })

  const breadcrumbSchema = generateBreadcrumbSchema([
    { name: "Home", url: "/" },
    { name: "Blog", url: "/blog" },
    { name: blogCategoryLabels[post.category], url: `/blog?category=${post.category}` },
    { name: post.title, url: `/blog/${post.slug}` },
  ])

  return (
    <main className="min-h-screen bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <Navbar />

      <section className="px-3 py-6 sm:px-6">
        <div className="mx-auto max-w-3xl">
          <nav className="flex flex-wrap items-center gap-1.5 text-xs text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="link-underline transition hover:text-primary">
              Home
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href="/blog" className="link-underline transition hover:text-primary">
              Blog
            </Link>
            <ChevronRight className="h-3.5 w-3.5" />
            <Link href={`/blog?category=${post.category}`} className="link-underline transition hover:text-primary">
              {blogCategoryLabels[post.category]}
            </Link>
          </nav>

          <header className="glass mt-6 overflow-hidden rounded-2xl">
            <div className="image-zoom-wrap relative h-52 sm:h-72">
              <OptimizedImage
                src={post.featuredImage}
                alt={post.imageAlt ?? `${post.title} — ATV guide by Subhan Enterprises Pakistan`}
                fill
                priority
                wrapperClassName="h-full w-full"
                className="image-zoom object-cover"
                sizes="(max-width: 768px) 100vw, 768px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            </div>
            <div className="p-5 sm:p-8">
              <span className="rounded-full bg-primary/15 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-primary">
                {blogCategoryLabels[post.category]}
              </span>
              <h1 className="mt-3 text-2xl font-extrabold tracking-tight text-balance sm:text-4xl">{post.title}</h1>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
              <div className="mt-4 flex flex-wrap items-center gap-4 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <User className="h-3.5 w-3.5 text-primary" /> {post.author}
                </span>
                <time dateTime={post.publishedAt}>{date.full}</time>
                <span className="flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-primary" /> {post.readTime} min read
                </span>
              </div>
            </div>
          </header>

          <div className="mt-8">
            <BlogArticleContent post={post} />
          </div>

          {relatedProducts.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-extrabold tracking-tight">Featured Products Mentioned</h2>
              <p className="mt-1 text-xs text-muted-foreground">Explore models and accessories referenced in this guide</p>
              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {relatedProducts.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            </div>
          )}

          {related.length > 0 && (
            <div className="mt-12">
              <h2 className="text-2xl font-extrabold tracking-tight">Related Articles</h2>
              <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {related.map((r) => (
                  <BlogCard key={r.slug} post={r} />
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

