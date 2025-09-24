import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { ThemeProvider } from "@/lib/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import { StructuredData } from "@/components/structured-data"
import { generatePersonSchema, generateWebsiteSchema } from "@/components/seo"
import { Suspense } from "react"
import "./globals.css"
import { WhatsAppChatButton } from "@/components/whatsapp-chat-button"

export const metadata: Metadata = {
  title: {
    default: "Muhammad Uzair - Software Engineer",
    template: "%s | Muhammad Uzair",
  },
  description:
    "Software Engineer with 3+ years of experience developing scalable, high-performance applications. Specialized in backend engineering and data-driven feature delivery.",
  generator: "Next.js",
  applicationName: "Muhammad Uzair Portfolio",
  referrer: "origin-when-cross-origin",
  keywords: [
    "Software Engineer",
    "React Developer",
    "TypeScript",
    "Next.js",
    "Frontend Development",
    "Full Stack Developer",
    "Web Development",
    "JavaScript",
    "Portfolio",
    "San Francisco",
  ],
  authors: [{ name: "Muhammad Uzair", url: "https://muzair21st.github.io" }],
  creator: "Muhammad Uzair",
  publisher: "Muhammad Uzair",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://muzair21st.github.io"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://muzair21st.github.io",
    title: "Muhammad Uzair - Software Engineer",
    description:
      "Software Engineer with 3+ years of experience developing scalable, high-performance applications. Specialized in backend engineering and data-driven feature delivery.",
    siteName: "Muhammad Uzair Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Uzair - Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Uzair - Software Engineer",
    description:
      "Software Engineer with 3+ years of experience developing scalable, high-performance applications. Specialized in backend engineering and data-driven feature delivery.",
    creator: "@uzairbuttar",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#000000",
      },
    ],
  },
  manifest: "/site.webmanifest",
  other: {
    "msapplication-TileColor": "#000000",
    "msapplication-config": "/browserconfig.xml",
  },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//vercel.live" />
        <StructuredData data={[generatePersonSchema(), generateWebsiteSchema()]} />
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          <ThemeProvider defaultTheme="system" storageKey="portfolio-theme">
            <a href="#main-content" className="skip-link">
              Skip to main content
            </a>
            <div id="main-content">{children}</div>
            <Toaster />
            <WhatsAppChatButton />
          </ThemeProvider>
          <Analytics />
          <SpeedInsights />
        </Suspense>
      </body>
    </html>
  )
}
