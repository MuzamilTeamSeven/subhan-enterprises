# Subhan Enterprises — ATV & Quad Bike Website

This repository contains the web application for Subhan Enterprises, Pakistan's premium dealer for ATVs and quad bikes.

## Environment Variables & EmailJS Configuration

EmailJS is used for handling contact and inquiry form submissions across the website (`/contact` and `/support`).

The project uses `.env.example` as the single environment configuration file. It contains the public EmailJS client-side configuration keys:

- `NEXT_PUBLIC_EMAILJS_SERVICE_ID`
- `NEXT_PUBLIC_EMAILJS_TEMPLATE_ID`
- `NEXT_PUBLIC_EMAILJS_PUBLIC_KEY`

`.env.example` is committed directly to GitHub so these public client-side values are immediately available when the repository is cloned. Separate `.env.local` files are not required.
