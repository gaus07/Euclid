"use client"

import { motion } from "framer-motion"
import IndustryTimeline from "./IndustryTimeline"

export default function IndustrySection() {
  return (
    <section className="py-10 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-primary/5 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-secondary/5 rounded-full blur-3xl -z-10" />

      <div className="container mx-auto px-4 max-w-7xl">
        {/* Section header */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            Industry Interaction
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Explore our ongoing collaborations and partnerships with industry leaders in blockchain technology,
            cybersecurity, and sustainable development.
          </motion.p>
        </div>

        {/* Timeline component */}
        <div className="relative mx-auto">
          <IndustryTimeline />
        </div>
      </div>
    </section>
  )
}

