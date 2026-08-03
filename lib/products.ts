export type ProductCategory = "atv" | "accessories" | "parts"

export type Product = {
  id: string
  name: string
  brand: string
  category: ProductCategory
  image: string
  price: number
  tag?: "Best Seller" | "New Arrival" | "Sale"
  inStock: boolean
  specs: string[]
}

export const categoryLabels: Record<ProductCategory, string> = {
  atv: "Quad Bikes / ATVs",
  accessories: "Accessories",
  parts: "Parts & Gear",
}

export const products: Product[] = [
  // ---------- ATVs ----------
  {
    id: "raptor-700r",
    name: "Raptor 700R",
    brand: "Yamaha",
    category: "atv",
    image: "/atvs/raptor-700r.png",
    price: 2850000,
    tag: "Best Seller",
    inStock: true,
    specs: ["700cc", "4x4", "4 Stroke"],
  },
  {
    id: "cfmoto-520l",
    name: "CFMOTO 520L",
    brand: "CFMOTO",
    category: "atv",
    image: "/atvs/cfmoto-520l.png",
    price: 1950000,
    tag: "New Arrival",
    inStock: true,
    specs: ["520cc", "4x4", "4 Stroke"],
  },
  {
    id: "can-am-outlander",
    name: "Can-Am Outlander",
    brand: "Can-Am",
    category: "atv",
    image: "/atvs/can-am-outlander.png",
    price: 2450000,
    inStock: true,
    specs: ["650cc", "4x4", "4 Stroke"],
  },
  {
    id: "linhai-lh400",
    name: "Linhai LH 400",
    brand: "Linhai",
    category: "atv",
    image: "/atvs/linhai-lh400.png",
    price: 1350000,
    inStock: true,
    specs: ["400cc", "4x4", "4 Stroke"],
  },

  // ---------- Accessories ----------
  {
    id: "off-road-helmet",
    name: "Off-Road Riding Helmet",
    brand: "Subhan Gear",
    category: "accessories",
    image: "/products/helmet.png",
    price: 24500,
    tag: "Best Seller",
    inStock: true,
    specs: ["DOT Certified", "Adjustable Visor", "Vented"],
  },
  {
    id: "riding-gloves",
    name: "Pro Riding Gloves",
    brand: "Subhan Gear",
    category: "accessories",
    image: "/products/gloves.png",
    price: 4800,
    inStock: true,
    specs: ["Knuckle Guard", "Touch Grip", "Breathable"],
  },
  {
    id: "riding-goggles",
    name: "Anti-Fog Riding Goggles",
    brand: "Subhan Gear",
    category: "accessories",
    image: "/products/goggles.png",
    price: 3600,
    inStock: true,
    specs: ["Anti-Fog", "UV Protect", "Mirrored"],
  },
  {
    id: "chest-protector",
    name: "Body Armor Chest Protector",
    brand: "Subhan Gear",
    category: "accessories",
    image: "/products/chestprotector.png",
    price: 12900,
    tag: "New Arrival",
    inStock: true,
    specs: ["Impact Foam", "Adjustable", "Shoulder Guard"],
  },
  {
    id: "led-light-bar",
    name: "LED Light Bar 20 inch",
    brand: "Subhan Gear",
    category: "accessories",
    image: "/products/lightbar.png",
    price: 15500,
    inStock: true,
    specs: ["10000 Lumen", "Waterproof", "12V"],
  },
  {
    id: "electric-winch",
    name: "Heavy Duty Electric Winch",
    brand: "Subhan Gear",
    category: "accessories",
    image: "/products/winch.png",
    price: 34000,
    tag: "Sale",
    inStock: false,
    specs: ["3500 lbs", "Steel Cable", "Remote"],
  },

  // ---------- Parts ----------
  {
    id: "off-road-tire",
    name: "Knobby Off-Road Tire",
    brand: "Subhan Parts",
    category: "parts",
    image: "/products/tire.png",
    price: 9800,
    tag: "Best Seller",
    inStock: true,
    specs: ["Deep Tread", "25 inch", "Tubeless"],
  },
  {
    id: "powersports-battery",
    name: "12V Powersports Battery",
    brand: "Subhan Parts",
    category: "parts",
    image: "/products/battery.png",
    price: 8500,
    inStock: true,
    specs: ["12V", "Maintenance Free", "High CCA"],
  },
  {
    id: "engine-oil",
    name: "4-Stroke Engine Oil 1L",
    brand: "Subhan Parts",
    category: "parts",
    image: "/products/oil.png",
    price: 2200,
    inStock: true,
    specs: ["Fully Synthetic", "10W-40", "1 Litre"],
  },
  {
    id: "brake-pads",
    name: "Sintered Brake Pads",
    brand: "Subhan Parts",
    category: "parts",
    image: "/products/brakepads.png",
    price: 3400,
    inStock: true,
    specs: ["Sintered", "Low Dust", "All Weather"],
  },
  {
    id: "air-filter",
    name: "Performance Air Filter",
    brand: "Subhan Parts",
    category: "parts",
    image: "/products/airfilter.png",
    price: 2900,
    tag: "New Arrival",
    inStock: true,
    specs: ["High Flow", "Washable", "Reusable"],
  },
]

export function formatPrice(value: number) {
  return "PKR " + value.toLocaleString("en-PK")
}

export function getProductById(id: string): Product | undefined {
  return products.find((p) => p.id === id)
}

export function getRelatedProducts(product: Product, limit = 4): Product[] {
  return products.filter((p) => p.category === product.category && p.id !== product.id).slice(0, limit)
}

export function getProductDescription(product: Product): string {
  const specs = product.specs.join(", ")
  if (product.category === "atv") {
    return `The ${product.name} by ${product.brand} is built for Pakistan's toughest terrain. Delivering ${specs} performance, it combines raw power with confident control for both trail riders and serious off-road adventurers. Every unit is 100% original, directly imported, and backed by full after-sales support from Subhan Enterprises.`
  }
  if (product.category === "accessories") {
    return `The ${product.name} from ${product.brand} is a rider essential engineered for safety and comfort on every ride. Featuring ${specs}, it is designed to keep you protected and confident whether you are on the trail or the track.`
  }
  return `The ${product.name} by ${product.brand} is a genuine replacement part built to keep your quad bike running at peak performance. Specifications include ${specs}, ensuring reliable fitment and long-lasting durability.`
}
