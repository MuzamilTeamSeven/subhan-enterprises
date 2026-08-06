import { Navbar } from "@/components/navbar"
import { SiteFooter } from "@/components/site-footer"

export default function BlogLoading() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      <section className="px-3 py-6 sm:px-6">
        <div className="mx-auto max-w-7xl">
          <div className="glass rounded-2xl p-8">
            <div className="skeleton h-4 w-12" />
            <div className="skeleton mt-3 h-10 w-1/2" />
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="glass overflow-hidden rounded-2xl">
                <div className="skeleton h-44 w-full rounded-none" />
                <div className="p-5">
                  <div className="skeleton h-4 w-24" />
                  <div className="skeleton mt-3 h-6 w-full" />
                  <div className="skeleton mt-2 h-4 w-full" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
