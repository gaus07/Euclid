"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { CalendarIcon, Blocks, Building2, Users } from "lucide-react"

interface Project {
  id: string
  title: string
  shortDescription: string
  fullDescription: string
  image: string
  technologies: string[]
  team: string
  status: string
  timeline: string
}

interface ProjectCardProps {
  project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.div
        className="h-full overflow-hidden rounded-lg group cursor-pointer bg-emerald-50/10 shadow-sm"
        whileHover={{
          y: -5,
          transition: { duration: 0.2 },
        }}
        onClick={() => setIsOpen(true)}
      >
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={project.image || "/placeholder.svg"}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute top-4 right-4">
            <Badge variant="default" className="bg-primary">
              {project.status}
            </Badge>
          </div>
        </div>
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2 text-primary">{project.title}</h3>
          <p className="text-muted-foreground text-sm line-clamp-3 mb-4">{project.shortDescription}</p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {project.technologies.slice(0, 3).map((tech, index) => (
              <Badge key={index} variant="outline" className="bg-primary/5">
                {tech}
              </Badge>
            ))}
            {project.technologies.length > 3 && (
              <Badge variant="outline" className="bg-primary/5">
                +{project.technologies.length - 3}
              </Badge>
            )}
          </div>
        </div>
      </motion.div>

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent className="sm:max-w-[700px] max-h-[90vh] p-0 overflow-hidden bg-card">
          <div className="relative h-64 w-full">
            <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
              <div className="p-6">
                <h2 className="text-2xl md:text-3xl font-bold text-white mb-2">{project.title}</h2>
                <Badge variant="default" className="bg-primary">
                  {project.status}
                </Badge>
              </div>
            </div>
          </div>

          <div className="p-6 overflow-y-auto max-h-[calc(90vh-16rem)]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <ProjectInfoItem
                icon={<CalendarIcon className="h-5 w-5 text-primary" />}
                label="Timeline"
                value={project.timeline}
              />
              <ProjectInfoItem
                icon={<Users className="h-5 w-5 text-primary" />}
                label="Team Size"
                value={`${project.team} Members`}
              />
              <ProjectInfoItem
                icon={<Building2 className="h-5 w-5 text-primary" />}
                label="Status"
                value={project.status}
              />
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
                <Blocks className="h-5 w-5 text-primary" />
                Technologies
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <Badge key={index} variant="outline" className="bg-primary/5">
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold mb-3">Project Description</h3>
              <div className="prose prose-sm dark:prose-invert">
                {project.fullDescription.split("\n\n").map((paragraph, i) => (
                  <p key={i} className="mb-4 text-muted-foreground">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}

function ProjectInfoItem({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="flex flex-col">
      <div className="flex items-center gap-2 mb-1">
        {icon}
        <span className="text-sm text-muted-foreground">{label}</span>
      </div>
      <span className="text-sm font-medium">{value}</span>
    </div>
  )
}

