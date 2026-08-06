import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import { blogCategoryLabels, formatBlogDate, type BlogPostMeta } from "@/lib/blog"
import { cn } from "@/lib/utils"
import { OptimizedImage } from "@/components/ui/optimized-image"

type BlogCardProps = {
  post: BlogPostMeta
  className?: string
  priority?: boolean
}

export function BlogCard({ post, className, priority = false }: BlogCardProps) {
  const date = formatBlogDate(post.publishedAt)

  return (
    <article className={cn("glass glass-card-hover group overflow-hidden rounded-2xl", className)}>
      <Link href={`/blog/${post.slug}`} className="block">
        <div className="image-zoom-wrap relative h-44 overflow-hidden">
          <OptimizedImage
            src={post.featuredImage || "/placeholder.svg"}
            alt={post.title}
            width={420}
            height={260}
            priority={priority}
            sizes="(max-width: 768px) 100vw, 420px"
            className="image-zoom h-full w-full object-cover"
          />
          <div className="absolute left-3 top-3 flex flex-col items-center rounded-lg bg-primary px-2.5 py-1.5 leading-none text-primary-foreground shadow-lg">
            <span className="text-base font-extrabold">{date.day}</span>
            <span className="text-[10px] font-semibold">{date.month}</span>
          </div>
          <span className="absolute bottom-3 left-3 rounded-full bg-background/80 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wide text-primary backdrop-blur-sm">
            {blogCategoryLabels[post.category]}
          </span>
        </div>
        <div className="p-5">
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <Clock className="h-3.5 w-3.5" />
            {post.readTime} min read
          </div>
          <h3 className="mt-2 text-base font-bold text-foreground transition-colors group-hover:text-primary">
            {post.title}
          </h3>
          <p className="mt-2 line-clamp-2 text-sm leading-relaxed text-muted-foreground">{post.excerpt}</p>
          <span className="link-underline mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary">
            Read More <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </span>
        </div>
      </Link>
    </article>
  )
}
