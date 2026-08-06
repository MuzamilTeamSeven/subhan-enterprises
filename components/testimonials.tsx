import Image from "next/image"
import { Quote, Star } from "lucide-react"
import { OptimizedImage } from "@/components/ui/optimized-image"

const testimonials = [
  {
    name: "Usman Ali",
    city: "Lahore",
    avatar: "/avatars/usman.png",
    text: "The performance is beyond amazing! Best quad bike experience so far.",
  },
  {
    name: "Hamza Khan",
    city: "Islamabad",
    avatar: "/avatars/hamza.png",
    text: "Excellent build quality and powerful engine. Highly recommended!",
  },
  {
    name: "Talal Ahmed",
    city: "Faisalabad",
    avatar: "/avatars/talal.png",
    text: "Smooth buying experience and great after sales support.",
  },
]

export function Testimonials() {
  return (
    <section className="px-3 py-6 sm:px-6">
      <div className="glass-card mx-auto max-w-7xl rounded-2xl p-5 sm:p-8">
        <p className="text-center text-xs font-semibold uppercase tracking-[0.2em] text-primary">What Our Riders Say</p>
        <h2 className="mt-2 text-center text-2xl font-extrabold tracking-tight sm:text-3xl">
          Trusted By Hundreds Of Adventurers
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="glass-card feature-card-hover relative rounded-2xl p-6"
            >
              <Quote className="absolute right-5 top-5 h-8 w-8 text-primary/25" />
              <div className="flex items-center gap-3">
                <Image
                  src={t.avatar || "/placeholder.svg"}
                  alt={t.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full border border-border object-cover"
                />
                <figcaption>
                  <p className="text-sm font-bold text-foreground">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.city}</p>
                </figcaption>
              </div>
              <div className="mt-3 flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <blockquote className="mt-3 text-sm leading-relaxed text-muted-foreground">{t.text}</blockquote>
            </figure>
          ))}
        </div>

        <div className="mt-6 flex justify-center gap-2">
          <span className="h-2 w-6 rounded-full bg-primary" />
          <span className="h-2 w-2 rounded-full bg-border" />
          <span className="h-2 w-2 rounded-full bg-border" />
        </div>
      </div>
    </section>
  )
}
