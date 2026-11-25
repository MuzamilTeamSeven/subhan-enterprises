import Link from "next/link"
import { ArrowRight, Star } from "lucide-react"
import { categoryLabels, formatPrice, type Product } from "@/lib/products"
import { cn } from "@/lib/utils"
import { OptimizedImage } from "@/components/ui/optimized-image"

type ProductCardProps = {
  product: Product
  className?: string
  priority?: boolean
  listContext?: string
}

export function ProductCard({
  product,
  className,
  priority = false,
  listContext = "product_list",
}: ProductCardProps) {
  const productAnalyticsAttributes = {
    "data-analytics-product-select": "",
    "data-product-id": product.id,
    "data-product-name": product.name,
    "data-product-category": product.category,
    "data-list-context": listContext,
  }

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
      {product.inStock === false && (
        <span className="absolute right-5 top-5 z-10 rounded-md bg-secondary/90 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-muted-foreground border border-border/50">
          Out of Stock
        </span>
      )}
      {/* Image — fixed 4/3 aspect ratio, clean contain layout */}
      <Link
        href={`/products/${product.slug}`}
        {...productAnalyticsAttributes}
        className="image-zoom-wrap relative block w-full overflow-hidden rounded-xl bg-white/[0.02]"
      >
        <div className="relative w-full" style={{ paddingBottom: "75%" }}>
          <OptimizedImage
            src={product.image || "/placeholder.svg"}
            alt={`${product.name} — ${categoryLabels[product.category]} sold by Subhan Enterprises`}
            fill
            priority={priority}
            sizes="(max-width: 640px) 100vw, 260px"
            wrapperClassName="absolute inset-0"
            className="image-zoom object-contain p-2 transition-transform duration-300"
          />
        </div>
      </Link>

      {/* Content — grows to fill remaining space so button always sticks to bottom */}
      <div className="mt-4 flex flex-1 flex-col">
        <span className="text-[10px] font-extrabold uppercase tracking-widest text-primary/90">
          {categoryLabels[product.category]}
        </span>
        <Link href={`/products/${product.slug}`} {...productAnalyticsAttributes}>
          <h3 className="mt-1 text-base font-bold text-foreground transition-colors group-hover:text-primary leading-snug line-clamp-2">
            {product.name}
          </h3>
        </Link>
        <p className="mt-0.5 text-xs text-muted-foreground font-medium">
          {product.category === "atv" || product.category === "dirt_bike"
            ? "Sold by Subhan Enterprises"
            : product.brand}
        </p>

        {product.rating != null && (
          <div className="mt-2 flex items-center gap-1 text-primary">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={cn("h-3 w-3", i < Math.round(product.rating!) ? "fill-current" : "fill-none opacity-30")}
              />
            ))}
            <span className="ml-1 text-[11px] font-semibold text-muted-foreground">{product.rating.toFixed(1)}</span>
          </div>
        )}

        {product.specs.length > 0 && (
          <div className="mt-2.5 flex flex-wrap gap-1.5">
            {product.specs.slice(0, 3).map((s) => (
              <span key={s} className="rounded-md bg-white/[0.04] border border-white/[0.05] px-2 py-0.5 text-[10px] font-medium text-muted-foreground">
                {s}
              </span>
            ))}
          </div>
        )}

        {/* Price — pushed towards bottom via mt-auto spacer */}
        <div className="mt-auto pt-4 border-t border-white/[0.05]">
          <div className="flex flex-wrap items-baseline gap-2">
            <p className="text-xl font-extrabold text-primary">{formatPrice(product.price)}</p>
            {product.oldPrice != null && (
              <p className="text-xs text-muted-foreground/60 line-through font-medium">{formatPrice(product.oldPrice)}</p>
            )}
          </div>
          <Link
            href={`/products/${product.slug}`}
            {...productAnalyticsAttributes}
            className="btn-glass mt-3 flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-sm font-bold"
          >
            View Details <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </article>
  )
}
