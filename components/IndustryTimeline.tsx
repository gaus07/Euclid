"use client"

import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Image from "next/image"

type IndustryEvent = {
  id: string
  year: string
  title: string
  status: "active" | "completed"
  logo: string
}

const industryEvents: IndustryEvent[] = [
  {
    id: "event-1",
    year: "19/10/2023",
    title: "Mr. Shishir Gupta Head - Power Schneider Electric India Pvt. Ltd.",
    status: "completed",
    logo: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "event-2",
    year: "02/11/2023",
    title: "Cyber Peace Foundation",
    status: "completed",
    logo: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "event-3",
    year: "28/11/2023",
    title: "Cyber Peace Foundation International Delegates",
    status: "completed",
    logo: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "event-4",
    year: "26/06/2024",
    title: "M A College Kerala",
    status: "completed",
    logo: "/placeholder.svg?height=200&width=200",
  },
  {
    id: "event-5",
    year: "04/09/2024",
    title: "St. Joseph's College of Engineering & Mgmt",
    status: "completed",
    logo: "/placeholder.svg?height=200&width=200",
  },
]

export default function IndustryTimeline() {
  const containerRef = useRef<HTMLDivElement>(null)
  const [hoveredCard, setHoveredCard] = useState<string | null>(null)

  // Scroll animation controls
  const { scrollXProgress } = useScroll({ container: containerRef })
  const progressScale = useTransform(scrollXProgress, [0, 1], [0, 1])

  // Scroll to next/previous
  const scrollTo = (direction: "left" | "right") => {
    if (!containerRef.current) return

    const container = containerRef.current
    const scrollAmount = container.clientWidth * 0.8

    if (direction === "left") {
      container.scrollBy({ left: -scrollAmount, behavior: "smooth" })
    } else {
      container.scrollBy({ left: scrollAmount, behavior: "smooth" })
    }
  }

  return (
    <div className="relative w-full">
      {/* Navigation buttons */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 hidden md:block">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background -ml-4"
          onClick={() => scrollTo("left")}
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>
      </div>

      <div className="absolute right-0 top-1/2 -translate-y-1/2 z-20 hidden md:block">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full bg-background/80 backdrop-blur-sm shadow-lg hover:bg-background -mr-4"
          onClick={() => scrollTo("right")}
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      {/* Timeline container */}
      <div className="relative w-full overflow-hidden px-8">
        <div
          ref={containerRef}
          className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-8 px-4"
          style={{ scrollBehavior: "smooth", msOverflowStyle: "none", scrollbarWidth: "none" }}
        >
          {/* Progress line */}
          <div className="absolute top-[140px] left-8 right-8 h-[1px] bg-gray-200">
            <motion.div
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-primary via-primary to-primary/30 rounded-full"
              style={{ scaleX: progressScale, transformOrigin: "left" }}
            />
          </div>

          {/* Timeline items */}
          <div className="flex min-w-max items-start gap-8 pt-16">
            {industryEvents.map((event, index) => (
              <motion.div
                key={event.id}
                className="relative flex flex-col w-[320px] snap-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5, delay: index * 0.1 },
                }}
                viewport={{ once: true, margin: "-100px" }}
                onHoverStart={() => setHoveredCard(event.id)}
                onHoverEnd={() => setHoveredCard(null)}
              >
                {/* Card */}
                <motion.div
                  className="overflow-hidden rounded-lg bg-card/50 cursor-pointer bg-emerald-50/10 shadow-sm backdrop-filter backdrop-blur-md"
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                    zIndex: 10,
                    transition: { duration: 0.4, ease: "easeOut" },
                  }}
                  initial={{ scale: 1, y: 0 }}
                >
                  {/* Logo section */}
                  <div className="relative h-48 w-full overflow-hidden bg-white/30 flex items-center justify-center p-6">
                    {/* Year display */}
                    <div className="absolute top-4 left-4">
                      <span className="text-lg font-bold text-primary">{event.year}</span>
                    </div>

                    <Image
                      src={event.logo || "/placeholder.svg"}
                      alt=""
                      width={120}
                      height={120}
                      className="object-contain max-h-32"
                    />

                    {/* Status badge */}
                    <div className="absolute top-4 right-4">
                      <span
                        className={`
                        px-3 py-1 rounded-full text-xs font-medium
                        ${event.status === "active" ? "bg-green-500/10 text-green-500" : "bg-green-500/10 text-green-500"}
                      `}
                      >
                        {event.status === "active" ? "Active" : "Completed"}
                      </span>
                    </div>
                  </div>
                </motion.div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold bg-primary bg-clip-text text-transparent mb-2">
                    {event.title}
                  </h3>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

