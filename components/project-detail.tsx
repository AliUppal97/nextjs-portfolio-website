"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Github, Calendar, Users, Clock } from "lucide-react"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card"
import { Separator } from "./ui/separator"
import { Image } from "./ui/image"

interface ProjectDetailProps {
  project: {
    id: string
    title: string
    slug: string
    coverImage: string
    role: string
    duration: string
    teamSize: number
    stack: string[]
    summary: string
    challenge: string
    approach: string
    solution: string
    results: Record<string, { label: string; value: string; description: string }>
    links: {
      live?: string
      repo?: string
    }
    testimonials: Array<{
      name: string
      quote: string
    }>
    media: Array<{
      type: string
      src: string
      caption: string
    }>
  }
}

export function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <div className="bg-background">
      {/* Header */}
      <div className="bg-muted/30">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Button variant="ghost" asChild className="mb-8">
              <Link href="/projects">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Projects
              </Link>
            </Button>
            <div className="mx-auto max-w-4xl">
              <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl text-balance">
                {project.title}
              </h1>
              <p className="mt-6 text-xl leading-8 text-muted-foreground text-pretty">{project.summary}</p>
              <div className="mt-8 flex flex-wrap items-center gap-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4" />
                  <span>{project.role}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>{project.teamSize} team members</span>
                </div>
              </div>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.stack.map((tech) => (
                  <Badge key={tech} variant="secondary">
                    {tech}
                  </Badge>
                ))}
              </div>
              <div className="mt-8 flex items-center gap-4">
                {project.links.live && (
                  <Button asChild>
                    <Link href={project.links.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      View Live
                    </Link>
                  </Button>
                )}
                {project.links.repo && (
                  <Button variant="outline" asChild>
                    <Link href={project.links.repo} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      View Code
                    </Link>
                  </Button>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Cover Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mx-auto max-w-7xl px-6 lg:px-8"
      >
        <div className="mx-auto max-w-4xl">
          <Image
            src={project.coverImage || "/placeholder.svg"}
            alt={project.title}
            width={1200}
            height={600}
            className="aspect-video w-full rounded-xl bg-muted object-cover shadow-2xl"
          />
        </div>
      </motion.div>

      {/* Content */}
      <div className="mx-auto max-w-7xl px-6 py-24 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="grid gap-16 lg:grid-cols-3">
            <div className="lg:col-span-2 space-y-16">
              {/* Challenge */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">The Challenge</h2>
                <p className="text-lg leading-8 text-muted-foreground">{project.challenge}</p>
              </motion.section>

              {/* Approach */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">My Approach</h2>
                <p className="text-lg leading-8 text-muted-foreground">{project.approach}</p>
              </motion.section>

              {/* Solution */}
              <motion.section
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
              >
                <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">The Solution</h2>
                <p className="text-lg leading-8 text-muted-foreground">{project.solution}</p>
              </motion.section>

              {/* Media Gallery */}
              {project.media && project.media.length > 0 && (
                <motion.section
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                >
                  <h2 className="text-3xl font-bold tracking-tight text-foreground mb-6">Project Gallery</h2>
                  <div className="grid gap-8">
                    {project.media.map((item, index) => (
                      <div key={index} className="space-y-4">
                        <Image
                          src={item.src || "/placeholder.svg"}
                          alt={item.caption}
                          width={800}
                          height={600}
                          className="w-full rounded-lg bg-muted object-cover"
                        />
                        <p className="text-sm text-muted-foreground text-center">{item.caption}</p>
                      </div>
                    ))}
                  </div>
                </motion.section>
              )}
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Results */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
              >
                <Card>
                  <CardHeader>
                    <CardTitle>Key Results</CardTitle>
                    <CardDescription>Measurable impact and outcomes</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    {Object.entries(project.results).map(([key, result]) => (
                      <div key={key}>
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium text-muted-foreground">{result.label}</span>
                          <span className="text-2xl font-bold text-primary">{result.value}</span>
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">{result.description}</p>
                        {key !== Object.keys(project.results)[Object.keys(project.results).length - 1] && (
                          <Separator className="mt-4" />
                        )}
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </motion.div>

              {/* Testimonials */}
              {project.testimonials && project.testimonials.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle>Testimonials</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      {project.testimonials.map((testimonial, index) => (
                        <div key={index}>
                          <blockquote className="text-sm italic text-muted-foreground">
                            "{testimonial.quote}"
                          </blockquote>
                          <cite className="text-xs font-medium text-foreground mt-2 block">— {testimonial.name}</cite>
                          {index !== project.testimonials.length - 1 && <Separator className="mt-4" />}
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
