import { Bike, MapPin, ShieldCheck, ThumbsUp, Users } from "lucide-react"

const stats = [
  { icon: Users, value: "500+", label: "Happy Riders" },
  { icon: Bike, value: "50+", label: "Models Available" },
  { icon: MapPin, value: "5+", label: "Cities Covered" },
  { icon: ShieldCheck, value: "10+", label: "Years of Trust" },
  { icon: ThumbsUp, value: "100%", label: "Customer Satisfaction" },
]

export function Stats() {
  return (
    <section className="px-3 py-10 sm:px-6">
      <div className="glass mx-auto grid max-w-7xl grid-cols-2 gap-2 rounded-2xl p-3 sm:grid-cols-3 lg:grid-cols-5">
        {stats.map((s, i) => (
          <div
            key={s.label}
            className={`flex items-center gap-3 px-4 py-4 ${
              i !== stats.length - 1 ? "lg:border-r lg:border-border" : ""
            }`}
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
              <s.icon className="h-5 w-5" />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="text-2xl font-extrabold text-foreground">{s.value}</span>
              <span className="text-xs text-muted-foreground">{s.label}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
