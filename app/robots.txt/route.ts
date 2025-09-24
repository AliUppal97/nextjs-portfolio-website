import { NextResponse } from "next/server"

export async function GET() {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://muzair21st.github.io"

  const robots = `User-agent: *
Allow: /

# Sitemaps
Sitemap: ${baseUrl}/sitemap.xml

# Crawl-delay
Crawl-delay: 1

# Disallow admin or private areas (if any)
# Disallow: /admin/
# Disallow: /private/
`

  return new NextResponse(robots, {
    headers: {
      "Content-Type": "text/plain",
    },
  })
}
