import { render, screen } from "@testing-library/react"
import { ProjectCard } from "@/components/project-card"

const mockProject = {
  id: "1",
  title: "Test Project",
  slug: "test-project",
  coverImage: "/test-image.jpg",
  role: "Frontend Developer",
  duration: "6 months",
  stack: ["React", "TypeScript", "Next.js"],
  summary: "This is a test project summary",
  links: {
    live: "https://example.com",
    repo: "https://github.com/test/repo",
  },
}

describe("ProjectCard", () => {
  it("renders project information correctly", () => {
    render(<ProjectCard project={mockProject} />)

    expect(screen.getByText("Test Project")).toBeInTheDocument()
    expect(screen.getByText("Frontend Developer • 6 months")).toBeInTheDocument()
    expect(screen.getByText("This is a test project summary")).toBeInTheDocument()
  })

  it("renders technology stack badges", () => {
    render(<ProjectCard project={mockProject} />)

    expect(screen.getByText("React")).toBeInTheDocument()
    expect(screen.getByText("TypeScript")).toBeInTheDocument()
    expect(screen.getByText("Next.js")).toBeInTheDocument()
  })

  it("renders project links when available", () => {
    render(<ProjectCard project={mockProject} />)

    const liveLink = screen.getByRole("link", { name: "" })
    const repoLink = screen.getAllByRole("link")[1]

    expect(liveLink).toHaveAttribute("href", "https://example.com")
    expect(repoLink).toHaveAttribute("href", "https://github.com/test/repo")
  })

  it("renders case study link", () => {
    render(<ProjectCard project={mockProject} />)

    const caseStudyLink = screen.getByRole("link", { name: /case study/i })
    expect(caseStudyLink).toHaveAttribute("href", "/projects/test-project")
  })

  it("limits displayed stack items to 4", () => {
    const projectWithManyTechs = {
      ...mockProject,
      stack: ["React", "TypeScript", "Next.js", "Tailwind", "Node.js", "PostgreSQL"],
    }

    render(<ProjectCard project={projectWithManyTechs} />)

    expect(screen.getByText("React")).toBeInTheDocument()
    expect(screen.getByText("TypeScript")).toBeInTheDocument()
    expect(screen.getByText("Next.js")).toBeInTheDocument()
    expect(screen.getByText("Tailwind")).toBeInTheDocument()
    expect(screen.getByText("+2 more")).toBeInTheDocument()
  })
})
