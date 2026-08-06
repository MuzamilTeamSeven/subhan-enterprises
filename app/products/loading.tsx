import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"

function ProductCardSkeleton() {
  return (
    <div className="glass rounded-2xl p-4">
      <div className="skeleton h-44 w-full" />
      <div className="skeleton mt-4 h-3 w-20" />
      <div className="skeleton mt-2 h-5 w-3/4" />
      <div className="skeleton mt-2 h-4 w-1/3" />
      <div className="skeleton mt-4 h-6 w-1/2" />
      <div className="skeleton mt-4 h-10 w-full rounded-xl" />
    </div>
  )
}

export default function ProductsLoading() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="px-3 py-6 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="glass rounded-2xl p-8">
            <div className="skeleton h-4 w-16" />
            <div className="skeleton mt-3 h-10 w-2/3" />
            <div className="skeleton mt-3 h-4 w-full max-w-xl" />
          </div>
          <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <ProductCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
