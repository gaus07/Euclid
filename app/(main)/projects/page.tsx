"use client"

import { motion } from "framer-motion"
import  Card  from "@/components/Card"
import Accordion from "@/components/Accordion"
import { Button } from "@/components/ui/button"

export default function Projects() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Current Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Projects
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ProjectCard
              title="Haschain"
              description="Anti-counterfeiting blockchain for product verification."
              image="/placeholder.svg?height=200&width=300"
            />
            <ProjectCard
              title="Carbon Credit Transfer"
              description="Decentralized carbon trading platform."
              image="/placeholder.svg?height=200&width=300"
            />
            <ProjectCard
              title="AnyNFT"
              description="Artisan-friendly NFT marketplace."
              image="/placeholder.svg?height=200&width=300"
            />
          </div>
        </div>
      </section>

      {/* Ongoing Projects Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Ongoing Projects</h2>
          <Accordion title="Optimize energy use in mining rigs">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Our team is working on innovative solutions to reduce energy consumption in blockchain mining operations.
            </p>
            <div className="bg-gray-200 dark:bg-gray-700 h-4 rounded-full overflow-hidden">
              <div className="bg-primary dark:bg-secondary h-full rounded-full" style={{ width: "70%" }}></div>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-2">Energy savings: 70%</p>
          </Accordion>
          <Accordion title="Zero-day attack detection">
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Developing advanced algorithms to detect and prevent zero-day attacks on blockchain networks.
            </p>
            <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
              <li>Implement machine learning models for anomaly detection</li>
              <li>Create a decentralized alert system for rapid response</li>
              <li>Collaborate with security researchers for continuous improvement</li>
            </ul>
          </Accordion>
        </div>
      </section>
    </div>
  )
}

const ProjectCard = ({ title, description, image }: { title: string; description: string; image: string }) => {
  return (
    <Card title={title} description={description} image={image}>
      <Button className="mt-4">Learn More</Button>
    </Card>
  )
}

