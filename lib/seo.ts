import type { Metadata } from "next"

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://subhan-enterprises.vercel.app"
export const siteName = "Subhan Enterprises"
export const sitePhone = "+923324350140"
export const siteEmail = "naeem.majeed101@gmail.com"
export const siteAddress =
  "Shop # 36, New Islamia Park, Main LOS Samnabad, Lahore, Punjab, Pakistan"
export const defaultOgImage = "/atvs/hero-atv.png"

export function getSiteUrl() {
  return siteUrl
}

export function buildMetadata({
  title,
  description,
  path = "",
  image = defaultOgImage,
  type = "website",
  noIndex = false,
}: {
  title: string
  description: string
  path?: string
  image?: string
  type?: "website" | "article"
  noIndex?: boolean
}): Metadata {
  const url = `${siteUrl}${path}`
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: url },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true, googleBot: { index: true, follow: true } },
    openGraph: {
      title,
      description,
      url,
      siteName,
      locale: "en_PK",
      type,
      images: [{ url: imageUrl, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imageUrl],
    },
  }
}

export const defaultMetadata: Metadata = {
  ...buildMetadata({
    title:
      "Subhan Enterprises | ATV & Quad Bike Dealer Pakistan — ATVs, Trail Bikes & More",
    description:
      "Pakistan's trusted ATV and Quad Bike dealer. Shop premium ATVs, quad bikes and trail bikes from top brands. Nationwide delivery, 1-year warranty, expert after-sales support. Visit our Lahore showroom.",
    path: "/",
  }),
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  ...(process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION
    ? {
      verification: {
        google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
      },
    }
    : {}),
}

// ─── JSON-LD Schema Factories ───────────────────────────────────────────────

/** Organization + LocalBusiness schema for the site root */
export function generateOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": ["Organization", "LocalBusiness", "AutoDealer"],
        "@id": `${siteUrl}/#organization`,
        name: siteName,
        url: siteUrl,
        logo: {
          "@type": "ImageObject",
          url: `${siteUrl}/logo.png`,
          width: 200,
          height: 200,
        },
        image: `${siteUrl}/atvs/hero-atv.png`,
        description:
          "Pakistan's trusted ATV and Quad Bike dealer based in Lahore. Supplying premium ATVs, quad bikes and trail bikes nationwide.",
        telephone: sitePhone,
        email: siteEmail,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Shop # 36, New Islamia Park, Main LOS Samnabad",
          addressLocality: "Lahore",
          addressRegion: "Punjab",
          addressCountry: "PK",
        },
        geo: {
          "@type": "GeoCoordinates",
          latitude: 31.525,
          longitude: 74.3487,
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday",
            ],
            opens: "10:00",
            closes: "20:00",
          },
        ],
        sameAs: [
          "https://www.facebook.com/SubhanEnterprise/",
          "https://www.instagram.com/subhan._enterprises/",
          "https://www.youtube.com/@Subhan-Enterprises",
          "https://www.tiktok.com/@subhan_enterprises",
        ],
        priceRange: "PKR 1,350,000 – PKR 2,850,000",
        currenciesAccepted: "PKR",
        paymentAccepted: "Cash, Bank Transfer",
        areaServed: {
          "@type": "Country",
          name: "Pakistan",
        },
      },
    ],
  }
}

/** WebSite schema with sitelinks SearchAction */
export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    name: siteName,
    url: siteUrl,
    description:
      "Buy ATVs, Quad Bikes and Trail Bikes in Pakistan — Subhan Enterprises",
    publisher: {
      "@id": `${siteUrl}/#organization`,
    },
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${siteUrl}/products?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
    inLanguage: "en-PK",
  }
}

/** Product schema for individual ATV/product pages */
export function generateProductSchema({
  name,
  description,
  image,
  brand,
  price,
  currency = "PKR",
  availability,
  url,
  sku,
}: {
  name: string
  description: string
  image: string
  brand: string
  price: number
  currency?: string
  availability: boolean
  url: string
  sku: string
}) {
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name,
    description,
    image: imageUrl,
    sku,
    brand: {
      "@type": "Brand",
      name: brand,
    },
    offers: {
      "@type": "Offer",
      priceCurrency: currency,
      price: price.toString(),
      availability: availability
        ? "https://schema.org/InStock"
        : "https://schema.org/OutOfStock",
      url,
      seller: {
        "@type": "Organization",
        name: siteName,
      },
    },
  }
}

/** BreadcrumbList schema */
export function generateBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url.startsWith("http") ? item.url : `${siteUrl}${item.url}`,
    })),
  }
}

/** BlogPosting / Article schema */
export function generateArticleSchema({
  title,
  description,
  image,
  slug,
  publishedAt,
  author,
}: {
  title: string
  description: string
  image: string
  slug: string
  publishedAt: string
  author: string
}) {
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`
  const articleUrl = `${siteUrl}/blog/${slug}`
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: title,
    description,
    image: imageUrl,
    url: articleUrl,
    datePublished: publishedAt,
    dateModified: publishedAt,
    author: {
      "@type": "Organization",
      name: author,
      url: siteUrl,
    },
    publisher: {
      "@type": "Organization",
      name: siteName,
      logo: {
        "@type": "ImageObject",
        url: `${siteUrl}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": articleUrl,
    },
    inLanguage: "en-PK",
  }
}
