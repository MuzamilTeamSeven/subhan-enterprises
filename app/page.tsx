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
