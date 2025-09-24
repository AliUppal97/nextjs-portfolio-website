import type { Meta, StoryObj } from "@storybook/react"
import { ProjectCard } from "@/components/project-card"

const meta = {
  title: "Components/ProjectCard",
  component: ProjectCard,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
} satisfies Meta<typeof ProjectCard>

export default meta
type Story = StoryObj<typeof meta>

const mockProject = {
  id: "1",
  title: "E-Commerce Platform Redesign",
  slug: "ecommerce-platform-redesign",
  coverImage: "/placeholder.svg?height=400&width=600",
  role: "Senior Frontend Engineer",
  duration: "8 months",
  stack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Stripe"],
  summary:
    "Led the complete redesign and rebuild of a legacy e-commerce platform, resulting in a 40% increase in conversion rates.",
  links: {
    live: "https://example.com",
    repo: "https://github.com/example/repo",
  },
}

export const Default: Story = {
  args: {
    project: mockProject,
  },
}

export const WithoutLinks: Story = {
  args: {
    project: {
      ...mockProject,
      links: {},
    },
  },
}

export const ManyTechnologies: Story = {
  args: {
    project: {
      ...mockProject,
      stack: ["React", "TypeScript", "Next.js", "Tailwind CSS", "Stripe", "PostgreSQL", "Redis", "Docker"],
    },
  },
}

export const LongTitle: Story = {
  args: {
    project: {
      ...mockProject,
      title: "Very Long Project Title That Might Wrap to Multiple Lines in the Card",
    },
  },
}
