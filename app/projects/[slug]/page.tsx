import { notFound } from "next/navigation"
import { AppLayout } from "@/components/app-layout"
import { ProjectDetail } from "@/components/project-detail"
import projectsData from "@/data/projects.json"
import type { Metadata } from "next"

interface ProjectPageProps {
  params: Promise<{
    slug: string
  }>
}

export async function generateStaticParams() {
  return projectsData.projects.map((project) => ({
    slug: project.slug,
  }))
}

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params
  const project = projectsData.projects.find((p) => p.slug === slug)

  if (!project) {
    return {
      title: "Project Not Found",
    }
  }

  return {
    title: `${project.title} | Muhammad Uzair`,
    description: project.summary,
    openGraph: {
      title: `${project.title} | Muhammad Uzair`,
      description: project.summary,
      images: [project.coverImage],
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Muhammad Uzair`,
      description: project.summary,
      images: [project.coverImage],
    },
  }
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params
  const project = projectsData.projects.find((p) => p.slug === slug)

  if (!project) {
    notFound()
  }

  return (
    <AppLayout>
      <ProjectDetail project={project as any} />
    </AppLayout>
  )
}
