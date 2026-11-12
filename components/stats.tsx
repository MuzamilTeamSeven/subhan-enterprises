import { Clock, MapPin, ShieldCheck, Users } from "lucide-react"
import { QuadBikeIcon } from "@/components/ui/quad-bike-icon"

const stats = [
  { icon: Users, value: "10,000+", label: "Riders Across Pakistan" },
  { icon: QuadBikeIcon, value: "ATV Range", label: "Models & Rider Gear" },
  { icon: MapPin, value: "All Pakistan", label: "Nationwide Delivery" },
  { icon: ShieldCheck, value: "18+", label: "Years of Experience" },
  { icon: Clock, value: "7 Days", label: "Engine Warranty" },
]

export function Stats() {
  return (
    <section id="stats" className="px-3 py-10 sm:px-6">
      <div className="glass-card mx-auto grid max-w-7xl grid-cols-2 gap-2 rounded-2xl p-3 md:grid-cols-3 lg:grid-cols-5">
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
              <span className="text-xl font-extrabold text-foreground sm:text-2xl">{s.value}</span>
              <span className="text-xs text-muted-foreground">{s.label}</span>
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
