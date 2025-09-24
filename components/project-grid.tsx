import { ProjectCard } from "./project-card"

interface Project {
  id: string
  title: string
  slug: string
  coverImage: string
  role: string
  duration: string
  stack: string[]
  summary: string
  links: {
    live?: string
    repo?: string
  }
}

interface ProjectGridProps {
  projects: Project[]
  title?: string
  description?: string
  showAll?: boolean
}

export function ProjectGrid({ projects, title, description, showAll = false }: ProjectGridProps) {
  const displayProjects = showAll ? projects : projects.slice(0, 6)

  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {(title || description) && (
          <div className="mx-auto max-w-2xl text-center">
            {title && (
              <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl text-balance">{title}</h2>
            )}
            {description && <p className="mt-6 text-lg leading-8 text-muted-foreground text-pretty">{description}</p>}
          </div>
        )}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 xl:grid-cols-3">
          {displayProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}
