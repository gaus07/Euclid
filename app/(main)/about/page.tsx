"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import Timeline from "@/components/Timeline"

export default function About() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Mission Statement Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About EUCLID
          </motion.h1>
          <motion.p
            className="text-xl text-center mb-8 text-gray-700 dark:text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Funded by Somaiya Vidyavihar University (1 Cr. Seed Grant)
          </motion.p>
          <div className="aspect-w-16 aspect-h-9 mb-8">
            <iframe
              src="https://www.youtube.com/embed/dQw4w9WgXcQ"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <TeamMember
              name="Dr. Irfan Siddavatam"
              role="Principal Investigator"
              image="/placeholder.svg?height=300&width=300"
            />
            <TeamMember
              name="Prof. Ashwini Dalvi"
              role="Co-Principal Investigator"
              image="/placeholder.svg?height=300&width=300"
            />
            <TeamMember
              name="Prof. Sagar Korde"
              role="Co-Principal Investigator"
              image="/placeholder.svg?height=300&width=300"
            />
            <TeamMember name="Chandan Kolvenkar" role="Ph.D. Scholar" image="/placeholder.svg?height=300&width=300" />
            <TeamMember name="Abhijeet Pasi" role="Ph.D. Scholar" image="/placeholder.svg?height=300&width=300" />
          </div>
        </div>
      </section>

      {/* Interactive Timeline */}
      <section className="py-16 dark:bg-gry-900">
        <Timeline />
      </section>
    </div>
  )
}

const TeamMember = ({ name, role, image }: { name: string; role: string; image: string }) => {
  return (
    <Card>
      <CardContent className="p-4">
        <img src={image || "/placeholder.svg"} alt={name} className="w-full h-48 object-cover mb-4 rounded-lg" />
        <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{name}</h3>
        <p className="text-gray-600 dark:text-gray-400">{role}</p>
      </CardContent>
    </Card>
  )
}