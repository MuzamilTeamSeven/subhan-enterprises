import React from "react"

export function QuadBikeIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      {/* Handlebars with handguards */}
      <path d="M3 6.5h3.5L9 8h6l2.5-1.5H21" />
      <path d="M5.5 6.5l.5-1.5" />
      <path d="M18.5 6.5l-.5-1.5" />
      
      {/* Steering stem */}
      <path d="M12 8v3.5" />
      
      {/* Sporty front body / fenders */}
      <path d="M6 10l2 1.5h8l2-1.5" />
      <path d="M5 11.5l3.5 3h7l3.5-3" />
      
      {/* Aggressive Angled Headlights */}
      <path d="M8 12.5l2 .5" />
      <path d="M16 12.5l-2 .5" />
      <path d="M8.5 13.5l1.5-1" />
      <path d="M15.5 13.5l-1.5-1" />
      
      {/* Front Bumper / Radiator Grill */}
      <path d="M10 14.5h4v3h-4z" />
      <path d="M11 16h2" />
      <path d="M11 17.2h2" />
      
      {/* Suspension A-Arms (wishbones) */}
      <path d="M10 15l-4 1" />
      <path d="M14 15l4 1" />
      <path d="M10 17.5l-4.5.5" />
      <path d="M14 17.5l4.5.5" />
      
      {/* Suspension shocks */}
      <path d="M8.5 15l-1.5 2.5" />
      <path d="M15.5 15l1.5 2.5" />
      
      {/* Big Knobby Offroad Tires */}
      {/* Left Tire */}
      <rect x="2.5" y="14" width="3.5" height="6.5" rx="1" />
      <path d="M2.5 15.5h1" />
      <path d="M2.5 17.2h1" />
      <path d="M2.5 18.8h1" />
      
      {/* Right Tire */}
      <rect x="18" y="14" width="3.5" height="6.5" rx="1" />
      <path d="M21.5 15.5h-1" />
      <path d="M21.5 17.2h-1" />
      <path d="M21.5 18.8h-1" />
    </svg>
  )
}
