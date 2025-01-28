"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { useInView } from "react-intersection-observer"
import { useEffect, useState } from "react"

const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      <HeroSection />
      <DynamicStats />
      <KeyProjects />
      <Testimonials />
    </div>
  )
}

const HeroSection = () => {
  return (
    <section className="relative h-screen flex items-center justify-center bg-gradient-to-br from-primary to-secondary overflow-hidden">
      <div className="absolute inset-0">
        {/* Animated blockchain node SVG placeholder */}
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 1000">
          {/* Add your blockchain node SVG here */}
        </svg>
      </div>
      <div className="relative z-10 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-bold text-white mb-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Sustainability and Security of Blockchain Network
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl text-white mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Pioneering ethical blockchain solutions for a secure, sustainable future.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link
            href="/projects"
            className="bg-white text-primary font-bold py-2 px-4 rounded hover:bg-gray-200 transition duration-300"
          >
            Explore Our Work
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

const DynamicStats = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section ref={ref} className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <StatCounter label="Seed Grant Funding" end={1} suffix=" Crore" prefix="₹" />
          <StatCounter label="Active Projects" end={5} suffix="+" />
          <StatCounter label="Publications" end={2} suffix=" Accepted" />
          <StatCounter label="Trained Participants" end={67} suffix="+" />
        </div>
      </div>
    </section>
  )
}

const StatCounter = ({ label, end, suffix = "", prefix = "" }: { label: string; end: number; suffix?: string; prefix?: string }) => {
  const [count, setCount] = useState(0)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  useEffect(() => {
    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / 2000, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    if (inView) {
      window.requestAnimationFrame(step)
    }
  }, [inView, end])

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl font-bold text-primary dark:text-secondary mb-2">
        {prefix}
        {count}
        {suffix}
      </div>
      <div className="text-gray-600 dark:text-gray-400">{label}</div>
    </div>
  )
}

const KeyProjects = () => {
  const projects = [
    { title: "Haschain", description: "Blockchain anti-counterfeiting solution." },
    { title: "Carbon Credit Platform", description: "Transparent carbon trading." },
    { title: "Somaiya Coin", description: "Proof-of-concept indigenous cryptocoin." },
    { title: "Geo-Location Land Registry", description: "Copyright-pending app." },
  ]

  return (
    <section className="py-16 bg-gray-100 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Key Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <img
                src={`https://source.unsplash.com/400x300/?blockchain,technology&sig=${index}`}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const Testimonials = () => {
  return (
    <section className="py-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <blockquote className="text-2xl font-semibold text-center text-gray-900 dark:text-white">
          "EUCLID's solutions redefine blockchain sustainability."
          <footer className="mt-4 text-lg text-gray-600 dark:text-gray-400">– Shishir Gupta, Schneider Electric</footer>
        </blockquote>
      </div>
    </section>
  )
}

export default HomePage

