export type GoogleReview = {
  id: string
  author: string
  rating: number
  comment: string
  date: string
}

export type GoogleReviewsData = {
  status: "ready" | "unconfigured" | "error"
  averageRating: number | null
  totalReviewCount: number
  reviews: GoogleReview[]
  profileUrl: string
}

type GoogleBusinessReview = {
  name?: string
  reviewId?: string
  reviewer?: {
    displayName?: string
    isAnonymous?: boolean
  }
  starRating?: string
  comment?: string
  createTime?: string
  updateTime?: string
}

type GoogleReviewsPage = {
  reviews?: GoogleBusinessReview[]
  averageRating?: number
  totalReviewCount?: number
  nextPageToken?: string
}

const GOOGLE_PROFILE_SEARCH_URL =
  "https://www.google.com/maps/search/?api=1&query=Subhan+Enterprises+Lahore"

function getRating(starRating?: string) {
  switch (starRating) {
    case "ONE":
      return 1
    case "TWO":
      return 2
    case "THREE":
      return 3
    case "FOUR":
      return 4
    case "FIVE":
      return 5
    default:
      return 0
  }
}

async function getAccessToken(clientId: string, clientSecret: string, refreshToken: string) {
  const response = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      client_id: clientId,
      client_secret: clientSecret,
      refresh_token: refreshToken,
      grant_type: "refresh_token",
    }),
    cache: "no-store",
  })

  if (!response.ok) {
    throw new Error(`Google OAuth token request failed (${response.status}).`)
  }

  const data = (await response.json()) as { access_token?: string }
  if (!data.access_token) {
    throw new Error("Google OAuth response did not contain an access token.")
  }

  return data.access_token
}

export async function getGoogleReviews(): Promise<GoogleReviewsData> {
  const profileUrl = process.env.GOOGLE_BUSINESS_PROFILE_URL || GOOGLE_PROFILE_SEARCH_URL
  const clientId = process.env.GOOGLE_BUSINESS_PROFILE_CLIENT_ID
  const clientSecret = process.env.GOOGLE_BUSINESS_PROFILE_CLIENT_SECRET
  const refreshToken = process.env.GOOGLE_BUSINESS_PROFILE_REFRESH_TOKEN
  const accountId = process.env.GOOGLE_BUSINESS_PROFILE_ACCOUNT_ID
  const locationId = process.env.GOOGLE_BUSINESS_PROFILE_LOCATION_ID

  if (!clientId || !clientSecret || !refreshToken || !accountId || !locationId) {
    return {
      status: "unconfigured",
      averageRating: null,
      totalReviewCount: 0,
      reviews: [],
      profileUrl,
    }
  }

  try {
    const accessToken = await getAccessToken(clientId, clientSecret, refreshToken)
    const reviews: GoogleReview[] = []
    const seenPageTokens = new Set<string>()
    let averageRating: number | null = null
    let totalReviewCount = 0
    let pageToken: string | undefined

    do {
      if (pageToken && seenPageTokens.has(pageToken)) {
        throw new Error("Google Business Profile returned a repeated reviews page token.")
      }
      if (pageToken) seenPageTokens.add(pageToken)

      const url = new URL(
        `https://mybusiness.googleapis.com/v4/accounts/${encodeURIComponent(accountId)}/locations/${encodeURIComponent(locationId)}/reviews`,
      )
      url.searchParams.set("pageSize", "50")
      url.searchParams.set("orderBy", "updateTime desc")
      if (pageToken) url.searchParams.set("pageToken", pageToken)

      const response = await fetch(url, {
        headers: { Authorization: `Bearer ${accessToken}` },
        cache: "no-store",
      })

      if (!response.ok) {
        throw new Error(`Google Business Profile reviews request failed (${response.status}).`)
      }

      const page = (await response.json()) as GoogleReviewsPage
      averageRating = page.averageRating ?? averageRating
      totalReviewCount = page.totalReviewCount ?? totalReviewCount
      for (const [index, review] of (page.reviews ?? []).entries()) {
        const date = review.updateTime || review.createTime || ""
        reviews.push({
          id: review.name || review.reviewId || `${date || "review"}-${reviews.length + index}`,
          author: review.reviewer?.isAnonymous
            ? "Google user"
            : review.reviewer?.displayName || "Google user",
          rating: getRating(review.starRating),
          comment: review.comment || "",
          date,
        })
      }

      pageToken = page.nextPageToken
    } while (pageToken)

    return { status: "ready", averageRating, totalReviewCount, reviews, profileUrl }
  } catch (error) {
    console.error("Unable to load Google Business Profile reviews.", error)
    return {
      status: "error",
      averageRating: null,
      totalReviewCount: 0,
      reviews: [],
      profileUrl,
    }
  }
}
