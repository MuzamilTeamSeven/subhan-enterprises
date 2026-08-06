"use client"

import { type ImageProps } from "next/image"
import Image from "next/image"
import { type SyntheticEvent, useState } from "react"
import { cn } from "@/lib/utils"

type OptimizedImageProps = Omit<ImageProps, "onLoadingComplete"> & {
  wrapperClassName?: string
}

export function OptimizedImage({
  wrapperClassName,
  className,
  priority,
  loading,
  onLoad,
  ...props
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(Boolean(priority))

  const handleLoad = (event: SyntheticEvent<HTMLImageElement, Event>) => {
    setLoaded(true)
    onLoad?.(event)
  }

  const effectiveLoading = priority ? undefined : loading ?? "lazy"

  return (
    <div className={cn("relative overflow-hidden", wrapperClassName)}>
      <Image
        {...props}
        priority={priority}
        loading={effectiveLoading}
        onLoad={handleLoad}
        className={cn(
          "transition duration-700 ease-out",
          loaded ? "opacity-100" : "opacity-0",
          className,
        )}
      />
      {!loaded && <div className="pointer-events-none absolute inset-0 animate-pulse rounded-2xl bg-white/5" />}
    </div>
  )
}
