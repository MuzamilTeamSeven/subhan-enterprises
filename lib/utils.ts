import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getCarouselDotIndexes(activeIndex: number, itemCount: number, maxDots = 7) {
  const dotCount = Math.min(itemCount, maxDots)
  const firstIndex = Math.min(
    Math.max(activeIndex - Math.floor(dotCount / 2), 0),
    itemCount - dotCount,
  )

  return Array.from({ length: dotCount }, (_, index) => firstIndex + index)
}
