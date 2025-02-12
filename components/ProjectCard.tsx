"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import ProjectModal from "./ProjectModal"
import type React from "react" // Added import for React

interface ProjectCardProps {
  title: string
  description: string
  image: string
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image }) => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false)
      }
    }
    window.addEventListener("keydown", handleEsc)

    return () => {
      window.removeEventListener("keydown", handleEsc)
    }
  }, [])

  return (
    <>
      <Card>
        <CardContent>
          <motion.div
            className="relative p-6 rounded-2xl cursor-pointer"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
            onClick={() => setIsOpen(true)}
          >
            {/* Floating Image Container */}
            <motion.div className="absolute -top-9 left-1/2 -translate-x-1/2 -translate-y-9 flex justify-center items-center w-full ">
              <div className="absolute inset-0 blur-3xl rounded-full bg-gradient-to-b from-secondary to-background" />
              <div className="relative h-36 w-60 flex items-center justify-center bg-gray-800/50 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
                <Image
                  src={image || "/placeholder.svg"}
                  alt={title}
                  width={48}
                  height={48}
                  className="w-12 h-12 object-cover"
                />
              </div>
            </motion.div>

            {/* Content */}
            <h3 className="text-xl font-semibold text-primary mt-16">{title}</h3>
            <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>

            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-secondary/5 rounded-full blur-3xl" />
          </motion.div>
        </CardContent>
      </Card>

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

