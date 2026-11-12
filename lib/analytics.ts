import type { ProductCategory } from "@/lib/products"

type AnalyticsEventMap = {
  page_view: {
    page_location: string
    page_path: string
    page_title: string
    page_referrer?: string
  }
  scroll: {
    percent_scrolled: 25 | 50 | 75 | 90
    page_path: string
  }
  section_view: {
    section_id: string
    section_name: string
    page_path: string
  }
  click: {
    link_domain: string
    link_url?: string
    link_text: string
    page_path: string
    link_placement: string
  }
  whatsapp_click: {
    page_path: string
    link_placement: string
    link_text: string
    contact_method: "whatsapp"
  }
  phone_click: {
    page_path: string
    link_placement: string
    contact_method: "phone"
  }
  email_click: {
    page_path: string
    link_placement: string
    contact_method: "email"
  }
  product_view: {
    product_id: string
    product_name: string
    product_category: ProductCategory
    product_url: string
    page_path: string
  }
  product_select: {
    product_id: string
    product_name: string
    product_category: ProductCategory
    list_context: string
    destination_path: string
  }
  product_enquiry_click: {
    product_id: string
    product_name: string
    product_category: ProductCategory
    product_url: string
    page_path: string
    link_placement: string
  }
  generate_lead: {
    form_source: string
    form_type: string
    page_path: string
  }
  product_filter: {
    filter_type: "category" | "brand" | "stock" | "sort" | "search"
    filter_value: string
    filter_action?: "applied" | "removed" | "cleared"
    sort_order: string
    result_count: number
  }
}

type AnalyticsEvent = {
  [EventName in keyof AnalyticsEventMap]: { event: EventName } & AnalyticsEventMap[EventName]
}[keyof AnalyticsEventMap]

declare global {
  interface Window {
    dataLayer?: AnalyticsEvent[]
  }
}

const validCategories: ProductCategory[] = ["atv", "dirt_bike", "accessories", "parts"]

function redactPersonalData(value: string) {
  return value
    .replace(/\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/gi, "[redacted]")
    .replace(/(?:\+?\d[\d\s().-]{6,}\d)/g, "[redacted]")
}

export function getAnalyticsPagePath(pathname: string, search = "") {
  const category = new URLSearchParams(search).get("category")
  const safePath = redactPersonalData(pathname) || "/"
  return category && validCategories.some((validCategory) => validCategory === category)
    ? `${safePath}?category=${category}`
    : safePath
}

function sanitizeEventParameters(parameters: Record<string, unknown>) {
  return Object.fromEntries(
    Object.entries(parameters).map(([key, value]) => [
      key,
      typeof value === "string" && key === "link_text" ? redactPersonalData(value) : value,
    ]),
  )
}

export function pushAnalyticsEvent<EventName extends keyof AnalyticsEventMap>(
  eventName: EventName,
  parameters: AnalyticsEventMap[EventName],
) {
  if (typeof window === "undefined") return

  const dataLayer = Array.isArray(window.dataLayer) ? window.dataLayer : (window.dataLayer = [])
  dataLayer.push(
    {
      event: eventName,
      ...sanitizeEventParameters(parameters),
    } as AnalyticsEvent,
  )
}
