"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import ProjectModal from "./ProjectModal"
import { ArrowRight } from "lucide-react"

interface ProjectCardProps {
  title: string
  description: string
  image: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <motion.div
        className="overflow-hidden rounded-lg group cursor-pointer bg-emerald-50/10 shadow-sm backdrop-filter backdrop-blur-md transition-all duration-300"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        onClick={() => setIsOpen(true)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl -z-10" />
        <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-md z-10" />
        <div className="relative z-20 p-6 h-full flex flex-col">
          <div className="relative h-48 mb-4 overflow-hidden rounded-lg">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-300 group-hover:scale-110"
            />
          </div>
          <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
          <p className="text-black text-sm flex-grow">{description}</p>
          <div className="mt-4 flex items-center text-black font-medium">
            Learn More <ArrowRight className="ml-2 h-4 w-4" />
          </div>
        </div>
      </motion.div>

      <ProjectModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title={title}
        description={description}
        image={image}
      />
    </>
  )
}

export default ProjectCard

