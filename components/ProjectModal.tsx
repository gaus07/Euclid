"use client"

import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import type React from "react"
import { Dialog } from "@/components/ui/dialog"

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  title: string
  description: string
  image: string
}

const ProjectModal: React.FC<ProjectModalProps> = ({ isOpen, onClose, title, description, image }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <Dialog open={isOpen} onOpenChange={onClose}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ type: "spring", damping: 20, stiffness: 300 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-background rounded-lg shadow-lg max-w-lg w-full p-6 relative">
              <button className="absolute top-4 right-4 text-gray-500 hover:text-gray-700" onClick={onClose}>
                ✕
              </button>
              <h2 className="text-2xl font-bold mb-4">{title}</h2>
              <Image
                src={image || "/placeholder.svg"}
                alt={title}
                width={400}
                height={300}
                className="w-full rounded-lg mb-4 object-cover"
              />
              <p className="text-lg text-muted-foreground">{description}</p>
            </div>
          </motion.div>
        </Dialog>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal

