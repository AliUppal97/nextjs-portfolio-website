// Performance monitoring utilities

export function measureWebVitals() {
  if (typeof window === "undefined") return

  // Core Web Vitals measurement - temporarily disabled due to API changes
  // import("web-vitals").then(({ onCLS, onINP, onFCP, onLCP, onTTFB }) => {
  //   onCLS(console.log)
  //   onINP(console.log)
  //   onFCP(console.log)
  //   onLCP(console.log)
  //   onTTFB(console.log)
  // })
}

// Image loading optimization
export function preloadCriticalImages() {
  if (typeof window === "undefined") return

  const criticalImages = ["/software-engineer-headshot.png", "/og-image.jpg"]

  criticalImages.forEach((src) => {
    const link = document.createElement("link")
    link.rel = "preload"
    link.as = "image"
    link.href = src
    document.head.appendChild(link)
  })
}

// Font loading optimization
export function preloadFonts() {
  if (typeof window === "undefined") return

  const fonts = [
    { href: "/fonts/geist-sans.woff2", type: "font/woff2" },
    { href: "/fonts/geist-mono.woff2", type: "font/woff2" },
  ]

  fonts.forEach(({ href, type }) => {
    const link = document.createElement("link")
    link.rel = "preload"
    link.as = "font"
    link.type = type
    link.href = href
    link.crossOrigin = "anonymous"
    document.head.appendChild(link)
  })
}

// Resource hints
export function addResourceHints() {
  if (typeof window === "undefined") return

  const hints = [
    { rel: "dns-prefetch", href: "//fonts.googleapis.com" },
    { rel: "dns-prefetch", href: "//fonts.gstatic.com" },
    { rel: "dns-prefetch", href: "//vercel.live" },
    { rel: "preconnect", href: "https://fonts.googleapis.com" },
    { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
  ]

  hints.forEach(({ rel, href, crossOrigin }) => {
    const link = document.createElement("link")
    link.rel = rel
    link.href = href
    if (crossOrigin) link.crossOrigin = crossOrigin
    document.head.appendChild(link)
  })
}

// Performance budget checker
export function checkPerformanceBudget() {
  if (typeof window === "undefined" || !("performance" in window)) return

  const navigation = performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming

  const metrics = {
    FCP: 0, // Will be set by web-vitals
    LCP: 0, // Will be set by web-vitals
    INP: 0, // Will be set by web-vitals
    CLS: 0, // Will be set by web-vitals
    TTFB: navigation.responseStart - navigation.requestStart,
    domContentLoaded: navigation.domContentLoadedEventEnd - navigation.domContentLoadedEventStart,
    loadComplete: navigation.loadEventEnd - navigation.loadEventStart,
  }

  const budgets = {
    TTFB: 600, // 600ms
    domContentLoaded: 1000, // 1s
    loadComplete: 2000, // 2s
  }

  Object.entries(budgets).forEach(([metric, budget]) => {
    const value = metrics[metric as keyof typeof metrics]
    if (value > budget) {
      console.warn(`Performance budget exceeded for ${metric}: ${value}ms > ${budget}ms`)
    }
  })
}
