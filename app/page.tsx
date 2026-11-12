import type { Metadata } from "next"
import { Navbar } from "@/components/navbar"
import { Hero } from "@/components/hero"
import { Stats } from "@/components/stats"
import { TopModels } from "@/components/top-models"
import { WhyChoose } from "@/components/why-choose"
import { Lifestyle } from "@/components/lifestyle"
import { Testimonials } from "@/components/testimonials"
import { Brands } from "@/components/brands"
import { Blog } from "@/components/blog"
import { HomeCta } from "@/components/home-cta"
import { SiteFooter } from "@/components/site-footer"
import { buildMetadata } from "@/lib/seo"
import { getGoogleReviews } from "@/lib/google-reviews"

export const metadata: Metadata = buildMetadata({
  title: "Subhan Enterprises | ATV & Quad Bike Dealer Pakistan — Buy ATVs Online",
  description:
    "Shop ATVs and quad bikes in Pakistan with Subhan Enterprises. Serving 10,000+ riders for 18+ years, with delivery across Pakistan and a 7-day engine warranty.",
  path: "/",
})

export const revalidate = 3600

export default async function Page() {
  const googleReviews = await getGoogleReviews()

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero googleReviews={googleReviews} />
      <Stats />
      <TopModels />
      <WhyChoose />
      <Lifestyle />
      <Testimonials googleReviews={googleReviews} />
      <Brands />
      <Blog />
      <HomeCta />
      <SiteFooter />
    </main>
  )
}
