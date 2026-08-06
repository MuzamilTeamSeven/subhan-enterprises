export type ProductCategory = "atv" | "accessories" | "parts"

export type Product = {
  id: string
  slug: string
  name: string
  brand: string
  category: ProductCategory
  image: string
  price: number
  oldPrice?: number
  rating?: number
  tag?: "Best Seller" | "New Arrival" | "Sale"
  inStock: boolean
  specs: string[]
  description: string
}

export const categoryLabels: Record<ProductCategory, string> = {
  atv: "Quad Bikes / ATVs",
  accessories: "Accessories",
  parts: "Parts & Gear",
}

export const products: Product[] = [
  {
    id: "raptor-700r",
    slug: "raptor-700r",
    name: "Raptor 700R",
    brand: "Yamaha",
    category: "atv",
    image: "/atvs/raptor-700r.png",
    price: 2850000,
    oldPrice: 3100000,
    rating: 4.9,
    tag: "Best Seller",
    inStock: true,
    specs: ["700cc", "4x4", "4 Stroke"],
    description:
      "The Yamaha Raptor 700R is Pakistan's most sought-after sport ATV, delivering explosive 700cc power with precision handling for dunes, trails, and open terrain.",
  },
  {
    id: "cfmoto-520l",
    slug: "cfmoto-520l",
    name: "CFMOTO 520L",
    brand: "CFMOTO",
    category: "atv",
    image: "/atvs/cfmoto-520l.png",
    price: 1950000,
    rating: 4.8,
    tag: "New Arrival",
    inStock: true,
    specs: ["520cc", "4x4", "4 Stroke"],
    description:
      "The CFMOTO 520L combines value and capability with a reliable 520cc engine, full 4x4 drive, and rugged build quality ideal for Pakistani off-road conditions.",
  },
  {
    id: "can-am-outlander",
    slug: "can-am-outlander",
    name: "Can-Am Outlander",
    brand: "Can-Am",
    category: "atv",
    image: "/atvs/can-am-outlander.png",
    price: 2450000,
    rating: 4.7,
    inStock: true,
    specs: ["650cc", "4x4", "4 Stroke"],
    description:
      "Can-Am Outlander sets the standard for utility ATVs with premium suspension, intelligent throttle control, and unmatched comfort on long rides.",
  },
  {
    id: "linhai-lh400",
    slug: "linhai-lh400",
    name: "Linhai LH 400",
    brand: "Linhai",
    category: "atv",
    image: "/atvs/linhai-lh400.png",
    price: 1350000,
    rating: 4.6,
    inStock: true,
    specs: ["400cc", "4x4", "4 Stroke"],
    description:
      "The Linhai LH 400 is the perfect entry-level quad for new riders and farm use, offering dependable 400cc performance at an accessible price point.",
  },
  {
    id: "polaris-sportsman-570",
    slug: "polaris-sportsman-570",
    name: "Polaris Sportsman 570",
    brand: "Polaris",
    category: "atv",
    image: "/atvs/hero-atv.png",
    price: 2250000,
    oldPrice: 2400000,
    rating: 4.8,
    tag: "Sale",
    inStock: true,
    specs: ["570cc", "4x4", "Automatic"],
    description:
      "Polaris Sportsman 570 delivers proven utility performance with smooth automatic transmission, heavy-duty towing capacity, and legendary Polaris reliability.",
  },
  {
    id: "honda-trx420",
    slug: "honda-trx420",
    name: "Honda TRX420 Rancher",
    brand: "Honda",
    category: "atv",
    image: "/atvs/lifestyle-rider.png",
    price: 1780000,
    rating: 4.7,
    inStock: true,
    specs: ["420cc", "4x4", "4 Stroke"],
    description:
      "Honda TRX420 Rancher is built for work and play with legendary Honda reliability, efficient fuel economy, and comfortable ergonomics for all-day riding.",
  },
  {
    id: "kawasaki-brute-force",
    slug: "kawasaki-brute-force",
    name: "Kawasaki Brute Force 750",
    brand: "Kawasaki",
    category: "atv",
    image: "/atvs/blog-offroad.png",
    price: 2650000,
    rating: 4.9,
    tag: "Best Seller",
    inStock: true,
    specs: ["750cc", "4x4", "4 Stroke"],
    description:
      "Kawasaki Brute Force 750 packs serious V-twin power for the toughest terrain, with advanced chassis design and premium build quality.",
  },
  {
    id: "arctic-cat-alterra",
    slug: "arctic-cat-alterra",
    name: "Arctic Cat Alterra 700",
    brand: "Arctic Cat",
    category: "atv",
    image: "/atvs/blog-maintenance.png",
    price: 2100000,
    rating: 4.6,
    tag: "New Arrival",
    inStock: true,
    specs: ["700cc", "4x4", "4 Stroke"],
    description:
      "Arctic Cat Alterra 700 offers mid-range power with excellent ground clearance, making it ideal for rocky trails and agricultural applications across Pakistan.",
  },
  {
    id: "suzuki-kingquad",
    slug: "suzuki-kingquad",
    name: "Suzuki KingQuad 500",
    brand: "Suzuki",
    category: "atv",
    image: "/atvs/blog-safety.png",
    price: 1890000,
    rating: 4.5,
    inStock: true,
    specs: ["500cc", "4x4", "4 Stroke"],
    description:
      "Suzuki KingQuad 500 is a versatile all-rounder with smooth power delivery, durable construction, and excellent value for recreational and utility riders.",
  },
  {
    id: "cfmoto-cforce-625",
    slug: "cfmoto-cforce-625",
    name: "CFMOTO CForce 625",
    brand: "CFMOTO",
    category: "atv",
    image: "/atvs/cfmoto-520l.png",
    price: 2150000,
    rating: 4.7,
    inStock: true,
    specs: ["625cc", "4x4", "4 Stroke"],
    description:
      "CFMOTO CForce 625 bridges sport and utility with a responsive 625cc engine, premium features, and competitive pricing for the Pakistani market.",
  },
  {
    id: "off-road-helmet",
    slug: "off-road-helmet",
    name: "Off-Road Riding Helmet",
    brand: "Subhan Gear",
    category: "accessories",
    image: "/products/helmet.png",
    price: 24500,
    oldPrice: 28000,
    rating: 4.8,
    tag: "Best Seller",
    inStock: true,
    specs: ["DOT Certified", "Adjustable Visor", "Vented"],
    description:
      "Premium off-road helmet with DOT certification, advanced ventilation, and adjustable visor for maximum protection and comfort on every ride.",
  },
  {
    id: "riding-gloves",
    slug: "riding-gloves",
    name: "Pro Riding Gloves",
    brand: "Subhan Gear",
    category: "accessories",
    image: "/products/gloves.png",
    price: 4800,
    rating: 4.6,
    inStock: true,
    specs: ["Knuckle Guard", "Touch Grip", "Breathable"],
    description:
      "Professional riding gloves with reinforced knuckle protection, touchscreen-compatible fingertips, and breathable mesh for hot Pakistani summers.",
  },
  {
    id: "riding-goggles",
    slug: "riding-goggles",
    name: "Anti-Fog Riding Goggles",
    brand: "Subhan Gear",
    category: "accessories",
    image: "/products/goggles.png",
    price: 3600,
    rating: 4.5,
    inStock: true,
    specs: ["Anti-Fog", "UV Protect", "Mirrored"],
    description:
      "Anti-fog riding goggles with UV protection and mirrored lens options, essential for dusty trails and bright sunlight conditions.",
  },
  {
    id: "chest-protector",
    slug: "chest-protector",
    name: "Body Armor Chest Protector",
    brand: "Subhan Gear",
    category: "accessories",
    image: "/products/chestprotector.png",
    price: 12900,
    rating: 4.7,
    tag: "New Arrival",
    inStock: true,
    specs: ["Impact Foam", "Adjustable", "Shoulder Guard"],
    description:
      "Full body armor chest protector with impact-absorbing foam, adjustable straps, and integrated shoulder guards for aggressive trail riding.",
  },
  {
    id: "led-light-bar",
    slug: "led-light-bar",
    name: "LED Light Bar 20 inch",
    brand: "Subhan Gear",
    category: "accessories",
    image: "/products/lightbar.png",
    price: 15500,
    rating: 4.6,
    inStock: true,
    specs: ["10000 Lumen", "Waterproof", "12V"],
    description:
      "20-inch LED light bar delivering 10,000 lumens of bright, focused light for night riding and early morning trail sessions.",
  },
  {
    id: "electric-winch",
    slug: "electric-winch",
    name: "Heavy Duty Electric Winch",
    brand: "Subhan Gear",
    category: "accessories",
    image: "/products/winch.png",
    price: 34000,
    oldPrice: 38000,
    rating: 4.4,
    tag: "Sale",
    inStock: false,
    specs: ["3500 lbs", "Steel Cable", "Remote"],
    description:
      "3500 lb electric winch with steel cable and wireless remote — essential recovery gear for deep mud, sand, and challenging off-road situations.",
  },
  {
    id: "riding-boots",
    slug: "riding-boots",
    name: "MX Riding Boots",
    brand: "Subhan Gear",
    category: "accessories",
    image: "/products/tire.png",
    price: 18500,
    rating: 4.5,
    tag: "New Arrival",
    inStock: true,
    specs: ["Ankle Support", "Steel Toe", "Water Resistant"],
    description:
      "Motocross-style riding boots with steel toe protection, ankle support, and water-resistant construction for serious off-road riders.",
  },
  {
    id: "knee-guards",
    slug: "knee-guards",
    name: "Pro Knee & Shin Guards",
    brand: "Subhan Gear",
    category: "accessories",
    image: "/products/chestprotector.png",
    price: 8900,
    rating: 4.5,
    inStock: true,
    specs: ["Hard Shell", "Adjustable Straps", "Ventilated"],
    description:
      "Professional knee and shin guards with hard-shell protection and ventilated design for comfort during long rides in hot weather.",
  },
  {
    id: "handlebar-grips",
    slug: "handlebar-grips",
    name: "Premium Handlebar Grips",
    brand: "Subhan Gear",
    category: "accessories",
    image: "/products/gloves.png",
    price: 2200,
    rating: 4.3,
    inStock: true,
    specs: ["Non-Slip", "Vibration Dampening", "Universal Fit"],
    description:
      "Premium handlebar grips with vibration dampening and non-slip texture for improved control and reduced hand fatigue on rough terrain.",
  },
  {
    id: "cargo-rack",
    slug: "cargo-rack",
    name: "Heavy Duty Cargo Rack",
    brand: "Subhan Gear",
    category: "accessories",
    image: "/products/lightbar.png",
    price: 12500,
    rating: 4.4,
    inStock: true,
    specs: ["150 kg Capacity", "Powder Coated", "Universal Mount"],
    description:
      "Heavy-duty rear cargo rack with 150 kg load capacity, powder-coated finish, and universal mounting for most ATV models.",
  },
  {
    id: "off-road-tire",
    slug: "off-road-tire",
    name: "Knobby Off-Road Tire",
    brand: "Subhan Parts",
    category: "parts",
    image: "/products/tire.png",
    price: 9800,
    rating: 4.7,
    tag: "Best Seller",
    inStock: true,
    specs: ["Deep Tread", "25 inch", "Tubeless"],
    description:
      "Knobby off-road tire with deep tread pattern for maximum traction in mud, sand, and loose terrain. 25-inch tubeless design.",
  },
  {
    id: "powersports-battery",
    slug: "powersports-battery",
    name: "12V Powersports Battery",
    brand: "Subhan Parts",
    category: "parts",
    image: "/products/battery.png",
    price: 8500,
    rating: 4.6,
    inStock: true,
    specs: ["12V", "Maintenance Free", "High CCA"],
    description:
      "Maintenance-free 12V powersports battery with high cold cranking amps for reliable starts in all weather conditions.",
  },
  {
    id: "engine-oil",
    slug: "engine-oil",
    name: "4-Stroke Engine Oil 1L",
    brand: "Subhan Parts",
    category: "parts",
    image: "/products/oil.png",
    price: 2200,
    rating: 4.8,
    inStock: true,
    specs: ["Fully Synthetic", "10W-40", "1 Litre"],
    description:
      "Fully synthetic 10W-40 engine oil formulated for 4-stroke ATV engines, providing superior protection and performance in extreme temperatures.",
  },
  {
    id: "brake-pads",
    slug: "brake-pads",
    name: "Sintered Brake Pads",
    brand: "Subhan Parts",
    category: "parts",
    image: "/products/brakepads.png",
    price: 3400,
    rating: 4.5,
    inStock: true,
    specs: ["Sintered", "Low Dust", "All Weather"],
    description:
      "Sintered brake pads offering consistent stopping power, low dust output, and reliable performance in wet and dry conditions.",
  },
  {
    id: "air-filter",
    slug: "air-filter",
    name: "Performance Air Filter",
    brand: "Subhan Parts",
    category: "parts",
    image: "/products/airfilter.png",
    price: 2900,
    rating: 4.6,
    tag: "New Arrival",
    inStock: true,
    specs: ["High Flow", "Washable", "Reusable"],
    description:
      "High-flow washable air filter that improves engine breathing and can be cleaned and reused, saving money over disposable filters.",
  },
  {
    id: "spark-plugs-set",
    slug: "spark-plugs-set",
    name: "Iridium Spark Plugs (Set of 2)",
    brand: "Subhan Parts",
    category: "parts",
    image: "/products/airfilter.png",
    price: 4500,
    rating: 4.4,
    inStock: true,
    specs: ["Iridium Tip", "Long Life", "Better Ignition"],
    description:
      "Iridium-tipped spark plugs delivering stronger ignition, improved fuel efficiency, and extended service life for 4-stroke ATV engines.",
  },
  {
    id: "drive-chain-kit",
    slug: "drive-chain-kit",
    name: "Drive Chain & Sprocket Kit",
    brand: "Subhan Parts",
    category: "parts",
    image: "/products/brakepads.png",
    price: 11200,
    rating: 4.5,
    inStock: true,
    specs: ["O-Ring Chain", "Hardened Sprockets", "Complete Kit"],
    description:
      "Complete drive chain and sprocket kit with O-ring chain and hardened steel sprockets for smooth power transfer and extended durability.",
  },
  {
    id: "coolant-premium",
    slug: "coolant-premium",
    name: "Premium ATV Coolant 1L",
    brand: "Subhan Parts",
    category: "parts",
    image: "/products/oil.png",
    price: 1800,
    rating: 4.3,
    inStock: true,
    specs: ["Anti-Freeze", "Corrosion Guard", "1 Litre"],
    description:
      "Premium ATV coolant with anti-freeze protection and corrosion inhibitors, keeping your engine at optimal temperature year-round.",
  },
]

export function formatPrice(value: number) {
  return "PKR " + value.toLocaleString("en-PK")
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug || p.id === slug)
}

/** @deprecated Use getProductBySlug */
export function getProductById(id: string): Product | undefined {
  return getProductBySlug(id)
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, limit)
}

export function getProductDescription(product: Product): string {
  if (product.description) return product.description
  const specs = product.specs.join(", ")
  if (product.category === "atv") {
    return `The ${product.name} by ${product.brand} is built for Pakistan's toughest terrain. Delivering ${specs} performance, it combines raw power with confident control for both trail riders and serious off-road adventurers. Every unit is 100% original, directly imported, and backed by full after-sales support from Subhan Enterprises.`
  }
  if (product.category === "accessories") {
    return `The ${product.name} from ${product.brand} is a rider essential engineered for safety and comfort on every ride. Featuring ${specs}, it is designed to keep you protected and confident whether you are on the trail or the track.`
  }
  return `The ${product.name} by ${product.brand} is a genuine replacement part built to keep your quad bike running at peak performance. Specifications include ${specs}, ensuring reliable fitment and long-lasting durability.`
}
