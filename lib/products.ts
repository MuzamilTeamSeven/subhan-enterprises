export type ProductCategory = "atv" | "dirt_bike" | "accessories" | "parts"

export type Product = {
  id: string
  slug: string
  name: string
  brand?: string
  category: ProductCategory
  image: string
  images?: string[]
  price: number
  oldPrice?: number
  rating?: number
  tag?: "Best Seller" | "New Arrival" | "Sale"
  inStock?: boolean
  specs: string[]
  description: string
  sourceUrl?: string
  isCatalogVisible?: boolean
}

export const categoryLabels: Record<ProductCategory, string> = {
  atv: "Quad Bikes / ATVs",
  dirt_bike: "Dirt Bikes",
  accessories: "Accessories",
  parts: "Parts & Gear",
}

export const products: Product[] = [
  {
    id: "125cc-sports-raptor",
    slug: "125cc-sports-raptor",
    name: "125cc Sports Raptor ATV",
    category: "atv",
    image: "/atvs/Aggressive Red-Black Camo ATV.png",
    images: ["/atvs/Aggressive Red-Black Camo ATV.png", "/atvs/atv_side_view_separate.png"],
    price: 2850000,
    specs: ["125cc"],
    description:
      "A 125cc sports Raptor quad bike featured on Subhan Enterprises' official TikTok. Contact us to confirm the current price, availability, and specifications.",
    sourceUrl: "https://www.tiktok.com/@subhan_enterprises/video/7705115028294257938",
  },
  {
    id: "124cc-mini-raptor",
    slug: "124cc-mini-raptor",
    name: "124cc Sports Mini Raptor ATV",
    category: "atv",
    image: "/atvs/subhan-124cc-mini-raptor.avif",
    price: 1950000,
    specs: ["124cc"],
    description:
      "A 124cc mini Raptor quad bike for kids featured on Subhan Enterprises' official TikTok. Contact us to confirm the current price, availability, and specifications.",
    sourceUrl: "https://www.tiktok.com/@subhan_enterprises/video/7704709234885168392",
    isCatalogVisible: false,
  },
  {
    id: "250cc-monster-atv",
    slug: "250cc-monster-atv",
    name: "250cc Monster ATV",
    category: "atv",
    image: "/atvs/Camouflaged ATV Under Red Studio Glow.png",
    images: [
      "/atvs/Camouflaged ATV Under Red Studio Glow.png",
      "/atvs/Camouflaged ATV Side Profile Showcase.png",
    ],
    price: 2450000,
    specs: ["250cc"],
    description:
      "A 250cc monster ATV featured on Subhan Enterprises' official TikTok. Contact us to confirm the current price, availability, and specifications.",
    sourceUrl: "https://www.tiktok.com/@subhan_enterprises/video/7703968899854814471",
  },
  {
    id: "150cc-audi-style-atv",
    slug: "150cc-audi-style-atv",
    name: "2026 150cc Audi-Style ATV",
    category: "atv",
    image: "/atvs/audi-style/Green-Quad.png",
    images: [
      "/atvs/audi-style/Green-Quad.png",
      "/atvs/audi-style/Red-Quad.png",
      "/atvs/audi-style/Side-View.png",
    ],
    price: 285000,
    specs: ["150cc", "2026 Model"],
    tag: "New Arrival",
    description:
      "A 2026 model 150cc Audi-style ATV listed by Subhan Enterprises. Audi-style describes the design; this is not an Audi-manufactured vehicle. Contact us to confirm availability and specifications.",
    sourceUrl: "https://www.tiktok.com/@subhan_enterprises/video/7701000678344346888",
  },
  {
    id: "125cc-sports-hummer-jeep",
    slug: "125cc-sports-hummer-jeep",
    name: "125cc Sports Hummer Jeep",
    category: "atv",
    image: "/atvs/Front-Facing Red ATV Studio Render.png",
    price: 2250000,
    specs: ["125cc"],
    description:
      "A 125cc Sports Hummer Jeep featured on Subhan Enterprises' official TikTok. Contact us to confirm the current price, availability, and specifications.",
    sourceUrl: "https://www.tiktok.com/@subhan_enterprises/video/7686899707087539463",
  },
  {
    id: "124cc-six-plus-sports-jeep",
    slug: "124cc-six-plus-sports-jeep",
    name: "124cc Six Plus Sports Jeep",
    category: "atv",
    image: "/atvs/Rugged Camo ATV in Dramatic Studio Light.png",
    price: 1780000,
    specs: ["124cc"],
    tag: "New Arrival",
    description:
      "A 124cc Six Plus Sports Jeep featured on Subhan Enterprises' official TikTok. Contact us to confirm the current price, availability, and specifications.",
    sourceUrl: "https://www.tiktok.com/@subhan_enterprises/video/7699885257444674834",
  },
  {
    id: "125cc-shikari-jeep",
    slug: "125cc-shikari-jeep",
    name: "125cc Shikari Jeep",
    category: "atv",
    image: "/atvs/Rugged LED ATV in Red Glow.png",
    price: 2650000,
    specs: ["125cc"],
    description:
      "A 125cc Shikari Jeep featured on Subhan Enterprises' official TikTok. Contact us to confirm the current price, availability, and specifications.",
    sourceUrl: "https://www.tiktok.com/@subhan_enterprises/video/7688012611526397191",
  },
  {
    id: "70cc-mini-kids-atv",
    slug: "70cc-mini-kids-atv",
    name: "70cc Mini Kids ATV",
    category: "atv",
    image: "/atvs/70-cc/front-view.png",
    images: [
      "/atvs/70-cc/front-view.png",
      "/atvs/70-cc/side-view.png",
      "/atvs/70-cc/straight-view.png",
    ],
    price: 180000,
    specs: ["70cc"],
    description:
      "A 70cc mini kids quad bike listed by Subhan Enterprises for PKR 180,000. Contact us to confirm availability and specifications.",
    sourceUrl: "https://www.tiktok.com/@subhan_enterprises/video/7701366254572981512",
  },
  {
    id: "neon-green-dirt-bike",
    slug: "neon-green-dirt-bike",
    name: "Neon Green Dirt Bike",
    category: "dirt_bike",
    image: "/atvs/Premium Neon-Green Dirt Bike 52.png",
    price: 190000,
    specs: [],
    description:
      "Explore the Neon Green Dirt Bike at Subhan Enterprises in Pakistan. Contact us to confirm specifications, current availability, and price.",
  },
  {
    id: "waypark-dirt-bike",
    slug: "waypark-dirt-bike",
    name: "Waypark Dirt Bike",
    brand: "Waypark",
    category: "dirt_bike",
    image: "/atvs/Yellow Waypark Dirt Bike Studio Render.png",
    price: 220000,
    specs: [],
    description:
      "Explore the Waypark Dirt Bike at Subhan Enterprises in Pakistan. Contact us to confirm specifications, current availability, and price.",
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

const legacyProductSlugs: Record<string, string> = {
  "raptor-700r": "125cc-sports-raptor",
  "cfmoto-520l": "124cc-mini-raptor",
  "can-am-outlander": "250cc-monster-atv",
  "linhai-lh400": "150cc-audi-style-atv",
  "polaris-sportsman-570": "125cc-sports-hummer-jeep",
  "honda-trx420": "124cc-six-plus-sports-jeep",
  "kawasaki-brute-force": "125cc-shikari-jeep",
  "arctic-cat-alterra": "70cc-mini-kids-atv",
  "suzuki-kingquad": "70cc-mini-kids-atv",
  "cfmoto-cforce-625": "250cc-monster-atv",
}

/**
 * Returns a keyword-rich, unique SEO title for a product page.
 * Pattern: "[Name] [Category keyword] Price in Pakistan | Subhan Enterprises"
 */
export function getProductSeoTitle(product: Product): string {
  if (product.category === "atv") {
    return `${product.name} ATV Quad Bike Price in Pakistan | Subhan Enterprises`
  }
  if (product.category === "dirt_bike") {
    return `${product.name} Price in Pakistan | Subhan Enterprises`
  }
  if (product.category === "accessories") {
    return `${product.name} — ATV Riding Gear Pakistan | Subhan Enterprises`
  }
  return `${product.name} — Genuine ATV Parts Pakistan | Subhan Enterprises`
}

/**
 * Returns an intent-matched, unique SEO meta description for a product page.
 */
export function getProductSeoDescription(product: Product): string {
  const specs = product.specs.join(", ")
  const price = formatPrice(product.price)
  if (product.category === "atv") {
    return `Buy the ${product.name} quad bike in Pakistan from Subhan Enterprises. ${specs}. Price: ${price}. Nationwide delivery and a 7-day engine warranty. Contact us to confirm the current price and availability.`
  }
  if (product.category === "dirt_bike") {
    return `Explore the ${product.name} dirt bike in Pakistan from Subhan Enterprises. Price: ${price}. Contact us to confirm specifications and availability.`
  }
  if (product.category === "accessories") {
    return `${product.name} by ${product.brand} — ${specs}. Premium ATV riding gear available in Pakistan at ${price}. Fast delivery from Subhan Enterprises.`
  }
  return `${product.name} by ${product.brand} — Genuine ATV part. Specs: ${specs}. Price: ${price}. Original parts for quad bikes in Pakistan, available from Subhan Enterprises.`
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug || p.id === slug)
}

export function getReplacementProductSlug(slug: string): string | undefined {
  return legacyProductSlugs[slug]
}

/** @deprecated Use getProductBySlug */
export function getProductById(id: string): Product | undefined {
  return getProductBySlug(id)
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products
    .filter((p) => p.isCatalogVisible !== false && p.category === product.category && p.id !== product.id)
    .slice(0, limit)
}

export function getProductDescription(product: Product): string {
  if (product.description) return product.description
  const specs = product.specs.join(", ")
  if (product.category === "atv") {
    return `${product.name} is available from Subhan Enterprises in Pakistan. Listed specifications: ${specs}. Contact us to confirm current availability, price, and details.`
  }
  if (product.category === "accessories") {
    return `The ${product.name} from ${product.brand} is a rider essential engineered for safety and comfort on every ride. Featuring ${specs}, it is designed to keep you protected and confident whether you are on the trail or the track.`
  }
  return `The ${product.name} by ${product.brand} is a genuine replacement part built to keep your quad bike running at peak performance. Specifications include ${specs}, ensuring reliable fitment and long-lasting durability.`
}
