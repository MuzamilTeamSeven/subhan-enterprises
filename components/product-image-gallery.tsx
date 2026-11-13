"use client"

import { useState } from "react"
import { OptimizedImage } from "@/components/ui/optimized-image"

type ProductImageGalleryProps = {
  productName: string
  images: string[]
  tag?: string
}

export function ProductImageGallery({ productName, images, tag }: ProductImageGalleryProps) {
  const [selectedImage, setSelectedImage] = useState(0)
  const uniqueImages = Array.from(new Set(images))
  const currentImage = uniqueImages[selectedImage] ?? uniqueImages[0]

  return (
    <div>
      <div className="glass glass-card-hover relative flex aspect-square flex-col items-center justify-center overflow-hidden rounded-2xl p-4 sm:p-8">
        {tag && (
          <span className="relative z-20 mb-2 self-start rounded-md bg-primary px-2.5 py-1 text-[11px] font-bold uppercase tracking-wide text-primary-foreground sm:absolute sm:left-5 sm:top-5 sm:mb-0">
            {tag}
          </span>
        )}
        <OptimizedImage
          key={currentImage}
          src={currentImage}
          alt={`${productName} product image ${selectedImage + 1}`}
          width={520}
          height={400}
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          wrapperClassName="relative z-0 flex min-h-0 w-full flex-1 items-center justify-center"
          className="max-h-full w-full rounded-lg object-contain"
        />
      </div>
      {uniqueImages.length > 1 && (
        <div className="mt-3 grid grid-cols-3 gap-2 sm:gap-3" aria-label={`${productName} image gallery`}>
          {uniqueImages.map((image, index) => (
            <button
              key={image}
              type="button"
              onClick={() => setSelectedImage(index)}
              aria-label={`View ${productName} image ${index + 1}`}
              aria-pressed={selectedImage === index}
              className={`glass relative flex aspect-[7/5] min-w-0 items-center justify-center overflow-hidden rounded-xl border p-2 transition ${
                selectedImage === index ? "border-primary ring-1 ring-primary/60" : "border-white/10 hover:border-primary/50"
              }`}
            >
              <OptimizedImage
                src={image}
                alt=""
                width={112}
                height={80}
                sizes="112px"
                className="h-full w-full rounded-md object-contain"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
