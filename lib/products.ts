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
    name: "125cc Sports Raptor",
    category: "atv",
    image: "/atvs/sports-raptor/Electric Blue ATV Front View.png",
    images: [
      "/atvs/sports-raptor/Electric Blue ATV Front View.png",
      "/atvs/sports-raptor/Glossy Blue Off-Road ATV Studio Shot.png",
      "/atvs/sports-raptor/Blue 150cc ATV Studio Showcase.png",
    ],
    price: 225000,
    specs: ["125CC", "Raptor"],
    tag: "New Arrival",
    inStock: true,
    description:
      "The 125cc Sports Raptor quad bike delivers agile off-road performance with aggressive racing ergonomics. Engineered with a responsive 125cc 4-stroke engine, electric start, automatic transmission, front and rear disc braking, and knobby all-terrain tires built for sand, mud, and Pakistani trails.",
  },
  {
    id: "124cc-mini-raptor",
    slug: "124cc-mini-raptor",
    name: "124cc Sports Mini Raptor ATV",
    category: "atv",
    image: "/atvs/subhan-124cc-mini-raptor.avif",
    price: 195000,
    specs: ["124cc", "Mini Raptor"],
    inStock: true,
    description:
      "The 124cc Mini Raptor ATV is built for young riders and beginners, featuring safe throttle control, dependable 4-stroke power, electric start, and responsive brakes for off-road recreational fun.",
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
    specs: ["250cc", "Heavy Duty"],
    inStock: true,
    description:
      "The 250cc Monster ATV delivers superior torque and heavy-duty off-road capability across Pakistani terrain. Featuring a high-output 250cc 4-stroke engine, aggressive deep-lug tires, heavy-duty suspension, front and rear utility racks, and hydraulic disc braking.",
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
    inStock: true,
    description:
      "The 2026 150cc Audi-Style ATV blends sleek aerodynamic sports styling with dependable 150cc 4-stroke power. Equipped with dual headlights, digital display, hydraulic disc brakes, and rugged off-road performance for enthusiasts across Pakistan.",
  },
  {
    id: "125cc-sports-hummer-jeep",
    slug: "125cc-sports-hummer-jeep",
    name: "125cc Sports Hummer Jeep",
    category: "atv",
    image: "/atvs/Front-Facing Red ATV Studio Render.png",
    price: 180000,
    specs: ["125cc", "Hummer Style"],
    tag: "Best Seller",
    inStock: true,
    description:
      "The 125cc Sports Hummer Jeep quad bike combines rugged military-inspired styling with dependable 4-stroke power. Equipped with heavy-duty front bull bars, rear utility rack, electric push-button start, automatic transmission, and high-traction off-road tires built for rough Pakistani trails and farm use.",
  },
  {
    id: "125cc-spiderweb-sports-hummer-jeep",
    slug: "125cc-spiderweb-sports-hummer-jeep",
    name: "125cc Spiderweb Sports Hummer Jeep",
    category: "atv",
    image: "/atvs/sports-hummer-jeep/Black Spiderweb ATV Studio Showcase.png",
    images: [
      "/atvs/sports-hummer-jeep/Black Spiderweb ATV Studio Showcase.png",
      "/atvs/sports-hummer-jeep/Dramatic Red-Black ATV Showcase.png",
      "/atvs/sports-hummer-jeep/Symmetrical Spiderweb ATV Studio Shot.png",
    ],
    price: 250000,
    specs: ["125cc", "Spiderweb Design"],
    tag: "New Arrival",
    inStock: true,
    description:
      "The 125cc Spiderweb Sports Hummer Jeep quad bike features aggressive custom spiderweb graphics, a reinforced chassis, automatic transmission, and an energetic 125cc 4-stroke engine engineered for durability and off-road excitement across Pakistan.",
  },
  {
    id: "124cc-six-plus-sports-jeep",
    slug: "124cc-six-plus-sports-jeep",
    name: "124cc Six Plus Sports Jeep",
    category: "atv",
    image: "/atvs/Rugged Camo ATV in Dramatic Studio Light.png",
    price: 1780000,
    specs: ["124cc", "Six Plus"],
    tag: "New Arrival",
    inStock: true,
    description:
      "The 124cc Six Plus Sports Jeep quad bike offers an optimal balance of power, maneuverability, and durability. Built with a 124cc engine, dual front shocks, mono-shock rear suspension, and heavy-duty off-road tires.",
  },
  {
    id: "125cc-shikari-jeep",
    slug: "125cc-shikari-jeep",
    name: "125cc Shikari Jeep",
    category: "atv",
    image: "/atvs/Rugged LED ATV in Red Glow.png",
    price: 2650000,
    specs: ["125cc", "Shikari Edition"],
    inStock: true,
    description:
      "The 125cc Shikari Jeep quad bike is tailored for outdoor expeditions and rough trails, featuring high ground clearance, auxiliary lighting, front and rear gear racks, and a robust 125cc 4-stroke engine.",
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
    specs: ["70cc", "Kids Edition"],
    inStock: true,
    description:
      "The 70cc Mini Kids ATV is the ideal starter quad bike for children, engineered with safety in mind. Features a smooth 70cc 4-stroke engine, speed governor, remote engine shutoff, and easy electric start.",
  },
  {
    id: "neon-green-dirt-bike",
    slug: "neon-green-dirt-bike",
    name: "124cc Special Edition Mini Mountain Dirt Bike",
    category: "dirt_bike",
    image: "/atvs/dirt-bikes/yellow-bike.png",
    images: [
      "/atvs/dirt-bikes/yellow-bike.png",
      "/atvs/dirt-bikes/Red-bike.png",
      "/atvs/dirt-bikes/Blue-bike.png",
    ],
    price: 200000,
    specs: ["124cc", "Special Edition"],
    inStock: true,
    description:
      "The 124cc Special Edition Mini Mountain Dirt Bike offers nimble off-road agility with high-travel suspension, durable spoke wheels, knobby dirt tires, and an efficient 124cc 4-stroke engine for aspiring motocross riders.",
  },
  {
    id: "124cc-sports-mini-dirt-bike",
    slug: "124cc-sports-mini-dirt-bike",
    name: "124cc Sports Mini Dirt Bike",
    category: "dirt_bike",
    image: "/atvs/dirt-bikes/simple-bike.png",
    images: [
      "/atvs/dirt-bikes/simple-bike.png",
      "/atvs/dirt-bikes/simple-bike-1.png",
      "/atvs/dirt-bikes/simple-bike-2.png",
    ],
    price: 180000,
    specs: ["124cc", "Latest 2026 Model"],
    inStock: true,
    description:
      "The 124cc Sports Mini Dirt Bike 2026 Model delivers punchy acceleration, lightweight handling, and a reinforced frame built for trails, tracks, and off-road motocross training.",
  },
  {
    id: "70cc-gorilla-mini-dirt-bike",
    slug: "70cc-gorilla-mini-dirt-bike",
    name: "70cc Gorilla Mini Dirt Bike 2026 Model",
    category: "dirt_bike",
    image: "/atvs/dirt-bikes/gorilla/front.png",
    images: [
      "/atvs/dirt-bikes/gorilla/front.png",
      "/atvs/dirt-bikes/gorilla/side.png",
      "/atvs/dirt-bikes/gorilla/back.png",
    ],
    price: 250000,
    specs: ["70cc", "Latest 2026 Model"],
    inStock: true,
    description:
      "The 70cc Gorilla Mini Dirt Bike 2026 Model features a rider-friendly low seat height, smooth automatic transmission, electric start, and rugged build quality for young off-road riders in Pakistan.",
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
  "waypark-dirt-bike": "neon-green-dirt-bike",
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
  const specificationSummary = specs ? `Specifications: ${specs}. ` : ""
  if (product.category === "atv") {
    return `Buy the ${product.name} quad bike in Pakistan from Subhan Enterprises. ${specs}. Price: ${price}. High performance, nationwide delivery across Pakistan, and guaranteed after-sales support.`
  }
  if (product.category === "dirt_bike") {
    return `Explore the ${product.name} dirt bike in Pakistan from Subhan Enterprises. ${specificationSummary}Price: ${price}. Ready to ride with nationwide delivery.`
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
    return `The ${product.name} quad bike is engineered for high performance and durability across Pakistani off-road trails. Featuring ${specs}, robust frame construction, and dependable all-terrain capability.`
  }
  if (product.category === "dirt_bike") {
    return `The ${product.name} dirt bike is designed for adventurous off-road performance in Pakistan. Featuring ${specs}, responsive suspension, and dependable traction for trail riding.`
  }
  if (product.category === "accessories") {
    return `The ${product.name} from ${product.brand} is a rider essential engineered for safety and comfort on every ride. Featuring ${specs}, it is designed to keep you protected and confident whether you are on the trail or the track.`
  }
  return `The ${product.name} by ${product.brand} is a genuine replacement part built to keep your quad bike running at peak performance. Specifications include ${specs}, ensuring reliable fitment and long-lasting durability.`
}
