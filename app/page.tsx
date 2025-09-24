import { AppLayout } from "@/components/app-layout"
import { Hero } from "@/components/hero"
import { ProjectGrid } from "@/components/project-grid"
import { StructuredData } from "@/components/structured-data"
import { generatePortfolioSchema } from "@/components/seo"
import projectsData from "@/data/projects.json"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Muhammad Uzair - Software Engineer",
  description:
    "Software Engineer with 3+ years of experience developing scalable, high-performance applications. View my portfolio of backend engineering and data analytics projects.",
  openGraph: {
    title: "Muhammad Uzair - Software Engineer",
    description:
      "Software Engineer with 3+ years of experience developing scalable, high-performance applications.",
    url: "",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Muhammad Uzair Portfolio Homepage",
      },
    ],
  },
}

export default function HomePage() {
  const featuredProjects = projectsData.projects.slice(0, 3)

  return (
    <>
      <StructuredData data={generatePortfolioSchema(projectsData.projects)} />
      <AppLayout>
        <Hero />
        <ProjectGrid
          projects={featuredProjects}
          title="Featured Projects"
          description="A selection of my recent work showcasing expertise in modern web development, user experience design, and technical leadership."
        />
      </AppLayout>
    </>
  )
}
