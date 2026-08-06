import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { BlogCard } from "@/components/blog-card"
import { blogPostsMeta } from "@/lib/blog"

const featuredPosts = blogPostsMeta.slice(0, 3)

export function Blog() {
  return (
    <section className="px-3 py-6 sm:px-6">
      <div className="glass mx-auto max-w-7xl rounded-2xl p-5 sm:p-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Latest Insights</p>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight sm:text-3xl">News, Tips &amp; Adventures</h2>
          </div>
          <Link
            href="/blog"
            className="btn-glass hidden items-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold sm:flex"
          >
            View All Articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-3">
          {featuredPosts.map((post, i) => (
            <BlogCard key={post.slug} post={post} priority={i === 0} />
          ))}
        </div>

        <Link
          href="/blog"
          className="btn-glass mt-6 flex w-full items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-semibold sm:hidden"
        >
          View All Articles <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  )
}
