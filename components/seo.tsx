import type { Metadata } from "next"

interface SEOProps {
  title?: string
  description?: string
  image?: string
  url?: string
  type?: string
  author?: string
  publishedTime?: string
  modifiedTime?: string
  tags?: string[]
  noIndex?: boolean
}

export function generateMetadata({
  title = "Muhammad Uzair - Software Engineer",
  description = "Software Engineer with 3+ years of experience developing scalable, high-performance applications. Specialized in backend engineering and data-driven feature delivery.",
  image = "/og-image.jpg",
  url = "",
  type = "website",
  author = "Muhammad Uzair",
  publishedTime,
  modifiedTime,
  tags = [],
  noIndex = false,
}: SEOProps = {}): Metadata {
  const fullTitle = title.includes("Muhammad Uzair") ? title : `${title} | Muhammad Uzair`
  const fullUrl = url.startsWith("http") ? url : `${url}`
  const fullImage = image.startsWith("http") ? image : `${image}`

  return {
    title: fullTitle,
    description,
    authors: [{ name: author, url: "" }],
    creator: author,
    publisher: author,
    keywords: tags.length > 0 ? tags : ["Software Engineer", "Backend Development", "Node.js", "Data Analytics", "MEAN Stack"],
    robots: noIndex ? "noindex,nofollow" : "index,follow",
    openGraph: {
      type: type as any,
      locale: "en_US",
      url: fullUrl,
      title: fullTitle,
      description,
      siteName: "Muhammad Uzair Portfolio",
      images: [
        {
          url: fullImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      ...(publishedTime && { publishedTime }),
      ...(modifiedTime && { modifiedTime }),
      ...(author && { authors: [author] }),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      creator: "@muzair21st",
      images: [fullImage],
    },
    alternates: {
      canonical: fullUrl,
    },
    other: {
      "msapplication-TileColor": "#000000",
      "theme-color": "#000000",
    },
  }
}

// JSON-LD structured data generators
export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Muhammad Uzair",
    jobTitle: "Software Engineer",
    url: "",
    image: "/software-engineer-headshot.png",
    email: "muzair21st@gmail.com",
    telephone: "+353-89-9741868",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Dublin",
      addressRegion: "Dublin",
      addressCountry: "IE",
    },
    sameAs: [
      "https://www.linkedin.com/in/uzair-buttar-230b91156/",
      "https://github.com/UzairButtar",
    ],
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    alumniOf: {
      "@type": "EducationalOrganization",
      name: "Dublin Business School",
    },
    knowsAbout: [
      "JavaScript",
      "TypeScript",
      "Node.js",
      "Backend Development",
      "Software Engineering",
      "Data Analytics",
      "MEAN Stack",
      "MySQL",
      "Elastic Search",
      "Python",
    ],
    hasCredential: [],
  }
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Muhammad Uzair Portfolio",
    url: "",
    description:
      "Portfolio website of Muhammad Uzair, Software Engineer specializing in backend development, data analytics, and scalable applications.",
    author: {
      "@type": "Person",
      name: "Muhammad Uzair",
    },
    potentialAction: {
      "@type": "SearchAction",
      target: "/search?q={search_term_string}",
      "query-input": "required name=search_term_string",
    },
  }
}

export function generatePortfolioSchema(projects: any[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "@id": "/#portfolio",
    name: "Muhammad Uzair's Portfolio",
    description: "A collection of software development projects and case studies",
    author: {
      "@type": "Person",
      name: "Muhammad Uzair",
      url: "",
    },
    hasPart: projects.map((project) => ({
      "@type": "CreativeWork",
      name: project.title,
      description: project.summary,
      url: `/projects/${project.slug}`,
      image: project.coverImage,
      author: {
        "@type": "Person",
        name: "Muhammad Uzair",
      },
      dateCreated: project.dateCreated || "2023",
      keywords: project.stack,
    })),
  }
}

export function generateBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}
