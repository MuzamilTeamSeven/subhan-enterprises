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

export const metadata: Metadata = buildMetadata({
  title: "Subhan Enterprises | ATV & Quad Bike Dealer Pakistan — Buy ATVs Online",
  description:
    "Buy ATVs, quad bikes and trail bikes in Pakistan from Subhan Enterprises — Lahore's trusted ATV dealer. 10+ premium brands, nationwide delivery, 1-year warranty and expert after-sales support.",
  path: "/",
})

export default function Page() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <TopModels />
      <WhyChoose />
      <Lifestyle />
      <Testimonials />
      <Brands />
      <Blog />
      <HomeCta />
      <SiteFooter />
    </main>
  )
}
