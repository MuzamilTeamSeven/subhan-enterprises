import fs from "node:fs"
import path from "node:path"

function loadEnvExample() {
  const envExamplePath = path.resolve(process.cwd(), ".env.example")
  if (!fs.existsSync(envExamplePath)) return {}
  const content = fs.readFileSync(envExamplePath, "utf-8")
  const env = {}
  for (const line of content.split("\n")) {
    const trimmed = line.trim()
    if (!trimmed || trimmed.startsWith("#")) continue
    const equalIndex = trimmed.indexOf("=")
    if (equalIndex > 0) {
      const key = trimmed.slice(0, equalIndex).trim()
      const val = trimmed.slice(equalIndex + 1).trim()
      env[key] = process.env[key] || val
    }
  }
  return env
}

const exampleEnv = loadEnvExample()

for (const [key, value] of Object.entries(exampleEnv)) {
  if (!process.env[key]) {
    process.env[key] = value
  }
}

/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    ...exampleEnv,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 85],
    deviceSizes: [640, 750, 828, 1080, 1200],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
  },
}

export default nextConfig

