# Subhan Enterprises — ATV & Quad Bike Website

This repository contains the web application for Subhan Enterprises, Pakistan's premium dealer for ATVs and quad bikes.

## Environment Variables & EmailJS Configuration

EmailJS is used for handling contact and inquiry form submissions across the website (`/contact` and `/support`).

The project uses `.env.example` for the public EmailJS client-side configuration keys:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

`.env.example` is committed directly to GitHub so these public client-side values are immediately available when the repository is cloned.

## Google Business Profile Reviews

The home page loads the verified location's official Google reviews through the Google Business Profile API. Reviews are requested newest-first and all pages are fetched (up to 50 reviews per API request); the home page is revalidated hourly.

To enable the integration:

1. Enable the Google Business Profile API and confirm the business location is verified.
2. Create OAuth credentials and authorize them with the `https://www.googleapis.com/auth/business.manage` scope. Generate a refresh token for the account that manages the location.
3. Set `GOOGLE_BUSINESS_PROFILE_CLIENT_ID`, `GOOGLE_BUSINESS_PROFILE_CLIENT_SECRET`, `GOOGLE_BUSINESS_PROFILE_REFRESH_TOKEN`, `GOOGLE_BUSINESS_PROFILE_ACCOUNT_ID`, and `GOOGLE_BUSINESS_PROFILE_LOCATION_ID` in the local `.env.local` file and in the production hosting environment. Optionally set `GOOGLE_BUSINESS_PROFILE_URL` to the exact public Google listing URL.

Keep the OAuth client secret and refresh token out of Git and chat. Google credentials are read only on the server and are excluded from Next.js client bundles. Until the required values are configured, the site shows a Google profile link instead of placeholder reviews.
