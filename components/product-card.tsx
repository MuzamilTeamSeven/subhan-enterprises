import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"
import { categoryLabels, formatPrice, type Product } from "@/lib/products"
import { cn } from "@/lib/utils"
import { OptimizedImage } from "@/components/ui/optimized-image"

type ProductCardProps = {
  product: Product
  className?: string
  priority?: boolean
}

export function ProductCard({ product, className, priority = false }: ProductCardProps) {
  return (
    <article
      className={cn(
        "glass-card glass-card-hover group relative flex flex-col overflow-hidden rounded-2xl p-5",
        className,
      )}
    >
      {product.tag && (
        <span className="absolute left-5 top-5 z-10 rounded-md bg-primary px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-primary-foreground shadow-lg shadow-primary/30">
          {product.tag}
        </span>
      )}
      {!product.inStock && (
        <span className="absolute right-5 top-5 z-10 rounded-md bg-secondary/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground border border-border/50">
          Out of Stock
        </span>
      )}
      <Link href={`/products/${product.slug}`} className="image-zoom-wrap relative flex aspect-[4/3] w-full items-center justify-center overflow-hidden rounded-xl bg-white/[0.01]">
        <OptimizedImage
          src={product.image || "/placeholder.svg"}
          alt={`${product.name} — ${product.brand} ${categoryLabels[product.category]}`}
          width={260}
          height={180}
          priority={priority}
          sizes="(max-width: 640px) 100vw, 260px"
          className="image-zoom max-h-full w-auto object-contain p-2"
        />
      </Link>
      <span className="mt-4 text-[10px] font-extrabold uppercase tracking-widest text-primary/90">
        {categoryLabels[product.category]}
      </span>
      <Link href={`/products/${product.slug}`}>
        <h3 className="mt-1 text-lg font-bold text-foreground transition-colors group-hover:text-primary leading-tight">
          {product.name}
        </h3>
      </Link>
      <p className="text-xs text-muted-foreground font-medium">{product.brand}</p>
      {product.rating != null && (
        <div className="mt-2.5 flex items-center gap-1 text-primary">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn("h-3.5 w-3.5", i < Math.round(product.rating!) ? "fill-current" : "fill-none opacity-30")}
            />
          ))}
          <span className="ml-1 text-[11px] font-semibold text-muted-foreground">{product.rating.toFixed(1)}</span>
        </div>
      )}
      <div className="mt-3.5 flex flex-wrap gap-1.5">
        {product.specs.slice(0, 3).map((s) => (
          <span key={s} className="rounded-md bg-white/[0.04] border border-white/[0.05] px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
            {s}
          </span>
        ))}
      </div>
      <div className="mt-4.5 flex flex-wrap items-baseline gap-2 pt-1 border-t border-white/[0.03]">
        <p className="text-xl font-extrabold text-primary">{formatPrice(product.price)}</p>
        {product.oldPrice != null && (
          <p className="text-xs text-muted-foreground/60 line-through font-medium">{formatPrice(product.oldPrice)}</p>
        )}
      </div>
      <Link
        href={`/products/${product.slug}`}
        className="btn-glass mt-4 flex items-center justify-between rounded-xl px-4 py-3 text-sm font-bold"
      >
        View Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </Link>
    </article>
  )
}
