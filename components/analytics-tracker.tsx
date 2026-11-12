"use client"

import { Suspense, useEffect, useRef } from "react"
import { usePathname, useSearchParams } from "next/navigation"
import { getAnalyticsPagePath, pushAnalyticsEvent } from "@/lib/analytics"
import type { ProductCategory } from "@/lib/products"

function getLinkText(anchor: HTMLAnchorElement) {
  const text =
    anchor.getAttribute("aria-label") ||
    anchor.getAttribute("title") ||
    anchor.textContent ||
    Array.from(anchor.querySelectorAll("img[alt]"))
      .map((image) => image.getAttribute("alt"))
      .filter(Boolean)
      .join(" ")
  return text.replace(/\s+/g, " ").trim().slice(0, 100)
}

function getLinkPlacement(anchor: HTMLAnchorElement) {
  const explicitPlacement = anchor.closest<HTMLElement>("[data-analytics-placement]")?.dataset.analyticsPlacement
  if (explicitPlacement) return explicitPlacement
  if (anchor.classList.contains("whatsapp-float")) return "floating_whatsapp"
  if (anchor.closest("header")) return "header"
  if (anchor.closest("footer")) return "footer"
  return "main_content"
}

function isWhatsAppUrl(url: URL) {
  return /(^|\.)((wa\.me)|(whatsapp\.com))$/i.test(url.hostname)
}

function safeOutboundUrl(url: URL) {
  const path = url.pathname
  const hostname = url.hostname.toLowerCase()
  let decodedPath = path
  try {
    decodedPath = decodeURIComponent(path)
  } catch {
    return undefined
  }
  const knownBusinessLinks: Record<string, RegExp> = {
    "www.facebook.com": /^\/SubhanEnterprise\/?$/,
    "www.instagram.com": /^\/subhan\._enterprises\/?$/,
    "www.youtube.com": /^\/@Subhan-Enterprises\/?$/,
    "www.tiktok.com": /^\/@subhan_enterprises(?:\/video\/\d+)?\/?$/,
  }
  if (knownBusinessLinks[hostname]?.test(decodedPath)) return `${url.origin}${path}`
  return url.origin
}

function readProductData(anchor: HTMLAnchorElement) {
  const productCategory = anchor.dataset.productCategory
  const productId = anchor.dataset.productId
  const productName = anchor.dataset.productName
  if (!productId || !productName || !isProductCategory(productCategory)) {
    return null
  }
  return { product_id: productId, product_name: productName, product_category: productCategory }
}

function isProductCategory(value: string | undefined): value is ProductCategory {
  return value === "atv" || value === "dirt_bike" || value === "accessories" || value === "parts"
}

function AnalyticsTrackerContent() {
  const pathname = usePathname() || "/"
  const searchParams = useSearchParams()
  const search = searchParams.toString()
  const pagePath = getAnalyticsPagePath(pathname, search)
  const lastRouteKey = useRef<string | null>(null)
  const previousPageLocation = useRef<string | null>(null)

  useEffect(() => {
    if (lastRouteKey.current === pagePath) return

    const pageLocation = `${window.location.origin}${pagePath}`
    const initialReferrer = document.referrer
    let pageReferrer = previousPageLocation.current
    if (!pageReferrer && initialReferrer) {
      try {
        const referrer = new URL(initialReferrer)
        pageReferrer = referrer.origin
      } catch {
        pageReferrer = null
      }
    }

    pushAnalyticsEvent("page_view", {
      page_location: pageLocation,
      page_path: pagePath,
      page_title: document.title,
      ...(pageReferrer ? { page_referrer: pageReferrer } : {}),
    })
    lastRouteKey.current = pagePath
    previousPageLocation.current = pageLocation
  }, [pagePath])

  useEffect(() => {
    const thresholds = [25, 50, 75, 90] as const
    const reported = new Set<number>()
    let animationFrame = 0

    const reportScrollDepth = () => {
      animationFrame = 0
      const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight
      if (scrollableHeight <= 0) return

      const percent = Math.min(100, (window.scrollY / scrollableHeight) * 100)
      for (const threshold of thresholds) {
        if (percent >= threshold && !reported.has(threshold)) {
          reported.add(threshold)
          pushAnalyticsEvent("scroll", {
            percent_scrolled: threshold,
            page_path: pagePath,
          })
        }
      }
    }

    const onScroll = () => {
      if (!animationFrame) animationFrame = window.requestAnimationFrame(reportScrollDepth)
    }

    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    onScroll()

    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      if (animationFrame) window.cancelAnimationFrame(animationFrame)
    }
  }, [pagePath])

  useEffect(() => {
    const reportedSections = new Set<string>()
    const sections = document.querySelectorAll<HTMLElement>("[data-analytics-section]")
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          const section = entry.target as HTMLElement
          const sectionId = section.dataset.analyticsSection
          if (!sectionId || reportedSections.has(sectionId)) continue
          reportedSections.add(sectionId)
          pushAnalyticsEvent("section_view", {
            section_id: sectionId,
            section_name: section.dataset.analyticsSectionName || sectionId,
            page_path: pagePath,
          })
          observer.unobserve(section)
        }
      },
      { threshold: 0.25 },
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [pagePath])

  useEffect(() => {
    const onClick = (event: MouseEvent) => {
      const target = event.target
      if (!(target instanceof Element)) return
      const anchor = target.closest<HTMLAnchorElement>("a[href]")
      if (!anchor) return

      const href = anchor.getAttribute("href")
      if (!href) return
      const placement = getLinkPlacement(anchor)
      const linkText = getLinkText(anchor)

      if (/^tel:/i.test(href)) {
        pushAnalyticsEvent("phone_click", {
          page_path: getAnalyticsPagePath(window.location.pathname, window.location.search),
          link_placement: placement,
          contact_method: "phone",
        })
        return
      }

      if (/^mailto:/i.test(href)) {
        pushAnalyticsEvent("email_click", {
          page_path: getAnalyticsPagePath(window.location.pathname, window.location.search),
          link_placement: placement,
          contact_method: "email",
        })
        return
      }

      let url: URL
      try {
        url = new URL(href, window.location.href)
      } catch {
        return
      }

      const currentPagePath = getAnalyticsPagePath(window.location.pathname, window.location.search)
      if (isWhatsAppUrl(url)) {
        pushAnalyticsEvent("whatsapp_click", {
          page_path: currentPagePath,
          link_placement: placement,
          link_text: linkText,
          contact_method: "whatsapp",
        })
        return
      }

      const productEnquiry = anchor.hasAttribute("data-analytics-product-enquiry")
      if (productEnquiry) {
        const product = readProductData(anchor)
        const productPath = anchor.dataset.productUrl
        if (product && productPath) {
          pushAnalyticsEvent("product_enquiry_click", {
            ...product,
            product_url: `${window.location.origin}${productPath}`,
            page_path: currentPagePath,
            link_placement: placement,
          })
        }
        return
      }

      if (anchor.hasAttribute("data-analytics-product-select")) {
        const product = readProductData(anchor)
        if (product) {
          pushAnalyticsEvent("product_select", {
            ...product,
            list_context: anchor.dataset.listContext || "product_list",
            destination_path: url.pathname,
          })
        }
        return
      }

      if ((url.protocol === "http:" || url.protocol === "https:") && url.origin !== window.location.origin) {
        const linkUrl = safeOutboundUrl(url)
        pushAnalyticsEvent("click", {
          link_domain: url.hostname,
          ...(linkUrl ? { link_url: linkUrl } : {}),
          link_text: linkText,
          page_path: currentPagePath,
          link_placement: placement,
        })
      }
    }

    document.addEventListener("click", onClick, true)
    return () => document.removeEventListener("click", onClick, true)
  }, [])

  return null
}

export function AnalyticsTracker() {
  return (
    <Suspense fallback={null}>
      <AnalyticsTrackerContent />
    </Suspense>
  )
}
