import { AppLayout } from "@/components/app-layout"
import { ProjectGrid } from "@/components/project-grid"
import projectsData from "@/data/projects.json"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projects | Muhammad Uzair",
  description: "Explore my portfolio of web development projects, case studies, and technical achievements.",
  openGraph: {
    title: "Projects | Muhammad Uzair",
    description: "Explore my portfolio of web development projects, case studies, and technical achievements.",
    type: "website",
  },
}

export default function ProjectsPage() {
  return (
    <AppLayout>
      <div className="bg-background py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">My Projects</h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">
              A comprehensive look at the projects I've built, the challenges I've solved, and the impact I've created
              through code.
            </p>
          </div>
        </div>
      </div>
      <ProjectGrid projects={projectsData.projects} showAll />
    </AppLayout>
  )
}
