"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowRight, ExternalLink, Github } from "lucide-react"
import { Button } from "./ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card"
import { Badge } from "./ui/badge"
import { Image } from "./ui/image"

interface ProjectCardProps {
  project: {
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
  index?: number
}

export function ProjectCard({ project, index = 0 }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
    >
      <Card className="group overflow-hidden border-0 bg-card shadow-lg hover:shadow-xl transition-all duration-300">
        <div className="aspect-video overflow-hidden">
          <Image
            src={project.coverImage || "/placeholder.svg"}
            alt={project.title}
            width={600}
            height={400}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <CardHeader>
          <div className="flex items-start justify-between">
            <div className="space-y-1">
              <CardTitle className="text-xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
              <CardDescription className="text-sm">
                {project.role} • {project.duration}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground text-sm leading-relaxed mb-4">{project.summary}</p>
          <div className="flex flex-wrap gap-2">
            {project.stack.slice(0, 4).map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs">
                {tech}
              </Badge>
            ))}
            {project.stack.length > 4 && (
              <Badge variant="outline" className="text-xs">
                +{project.stack.length - 4} more
              </Badge>
            )}
          </div>
        </CardContent>
        <CardFooter className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            {project.links.live && (
              <Button variant="ghost" size="sm" asChild>
                <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-4 w-4" />
                </Link>
              </Button>
            )}
            {project.links.repo && (
              <Button variant="ghost" size="sm" asChild>
                <Link href={project.links.repo} target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                </Link>
              </Button>
            )}
          </div>
          <Button variant="ghost" size="sm" asChild>
            <Link href={`/projects/${project.slug}`}>
              Case Study
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </CardFooter>
      </Card>
    </motion.div>
  )
}
