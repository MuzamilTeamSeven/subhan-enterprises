import type { Metadata } from "next"

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://subhanenterprises.com"
const siteName = "Subhan Enterprises"

export function getSiteUrl() {
  return siteUrl
}

export function buildMetadata({
  title,
  description,
  path = "",
  image = "/atvs/hero-atv.png",
  type = "website",
}: {
  title: string
  description: string
  path?: string
  image?: string
  type?: "website" | "article"
}): Metadata {
  const url = `${siteUrl}${path}`
  const imageUrl = image.startsWith("http") ? image : `${siteUrl}${image}`

  return {
    title,
    description,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: url },
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
    title: "Subhan Enterprises | Pakistan's Premium ATV & Quad Bike Dealer",
    description:
      "Experience unmatched power, control, and freedom with Subhan Enterprises Pakistan's premium range of ATVs and Quad Bikes. Nationwide delivery, 1 year warranty.",
    path: "/",
  }),
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}
