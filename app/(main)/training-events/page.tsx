"use client"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { MapPin, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { EventModal } from "@/components/EventModal"

interface EventHost {
  name: string
  image: string
}

interface Event {
  id: number
  title: string
  description: string
  date: string
  location: string
  category: string
  type: string
  images: string[]
  website?: string
  host?: EventHost
}

// Update sample data with proper structure
const featuredEvents: Event[] = [
  {
    id: 1,
    title: "Blockchain Security Workshop",
    description:
      "Advanced security measures and best practices for blockchain development. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc venenatis ridiculus nisl cursus sodales amet eu consequat sit sodales tortor vulputate nisl adipiscing nec iaculis ullamcorper pulvinar at proin vitae lobortis egestas.",
    date: "Dec 15, 2024",
    location: "Mumbai, India",
    category: "Development",
    type: "In person",
    images: [
      "https://picsum.photos/800/400?random=1",
      "https://picsum.photos/800/400?random=2",
      "https://picsum.photos/800/400?random=3",
    ],
    website: "https://workshop.example.com",
    host: {
      name: "Graham Hills",
      image: "https://github.com/shadcn.png",
    },
  },
  {
    id: 2,
    title: "Sustainable Blockchain Summit",
    description: "Exploring eco-friendly solutions for blockchain networks",
    date: "Dec 20, 2024",
    location: "Virtual Event",
    category: "Development",
    type: "Remote",
    images: [
      "https://picsum.photos/800/400?random=4",
      "https://picsum.photos/800/400?random=5",
      "https://picsum.photos/800/400?random=6",
    ],
    website: "https://summit.example.com",
    host: {
      name: "Sarah Johnson",
      image: "https://github.com/shadcn.png",
    },
  },
  {
    id: 3,
    title: "Sustainable Blockchain Summit",
    description: "Exploring eco-friendly solutions for blockchain networks",
    date: "Dec 20, 2024",
    location: "Virtual Event",
    category: "Development",
    type: "Remote",
    images: [
      "https://picsum.photos/800/400?random=4",
      "https://picsum.photos/800/400?random=5",
      "https://picsum.photos/800/400?random=6",
    ],
    website: "https://summit.example.com",
    host: {
      name: "Sarah Johnson",
      image: "https://github.com/shadcn.png",
    },
  },
]

const pastEvents: Event[] = [
  {
    id: 1,
    title: "Smart Contract Development",
    description: "Hands-on workshop on writing secure smart contracts",
    date: "Nov 10, 2024",
    location: "Mumbai, India",
    category: "Development",
    type: "In person",
    images: [
      "https://picsum.photos/800/400?random=7",
      "https://picsum.photos/800/400?random=8",
      "https://picsum.photos/800/400?random=9",
    ],
    website: "https://smartcontract.example.com",
  },
  {
    id: 2,
    title: "Blockchain for Enterprise",
    description: "Implementation strategies for enterprise blockchain solutions",
    date: "Nov 5, 2024",
    location: "Virtual Event",
    category: "Development",
    type: "Remote",
    images: [
      "https://picsum.photos/800/400?random=10",
      "https://picsum.photos/800/400?random=11",
      "https://picsum.photos/800/400?random=12",
    ],
    website: "https://enterprise.example.com",
  },
  {
    id: 3,
    title: "Blockchain for Enterprise",
    description: "Implementation strategies for enterprise blockchain solutions",
    date: "Nov 5, 2024",
    location: "Virtual Event",
    category: "Development",
    type: "Remote",
    images: [
      "https://picsum.photos/800/400?random=10",
      "https://picsum.photos/800/400?random=11",
      "https://picsum.photos/800/400?random=12",
    ],
    website: "https://enterprise.example.com",
  },
]

export default function TrainingEvents() {
  return (
    <div className="min-h-screen">
      <div className="absolute w-full h-full bg-gradient-to-b from-[var(--gradient-start)] to-background/80 opacity-90 -z-50"></div>
      {/* Header Section */}
      <section className="py-4 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-primary font-medium mb-4 block"
            >
              EVENTS
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold mb-4"
            >
              Browse all the events
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-muted-foreground max-w-2xl mx-auto"
            >
              Discover upcoming blockchain technology events, workshops, and training sessions
            </motion.p>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured events</h2>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent>
              {featuredEvents.map((event, index) => (
                <CarouselItem key={event.id} className="sm:basis-1/2 lg:basis-1/3">
                  <FeaturedEventCard event={event} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>

      {/* Past Events */}
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Past events</h2>
          </div>
          <Carousel
            opts={{
              align: "start",
              loop: false,
            }}
            className="w-full"
          >
            <CarouselContent>
              {pastEvents.map((event) => (
                <CarouselItem key={event.id} className="sm:basis-1/2 lg:basis-1/3">
                  <EventCard event={event} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden sm:flex" />
            <CarouselNext className="hidden sm:flex" />
          </Carousel>
        </div>
      </section>
    </div>
  )
}

interface EventCardProps {
  event: Event
}

const FeaturedEventCard: React.FC<EventCardProps> = ({ event }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <motion.div
        className="overflow-hidden rounded-xl group cursor-pointer bg-card relative"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl -z-10" />
        <div className="relative aspect-[16/9] overflow-hidden">
          <motion.img
            src={event.images[0]}
            alt={event.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <div className="p-6 relative z-20">
          <div className="flex gap-2 mb-3">
            <Badge variant="secondary">{event.category}</Badge>
            <Badge variant="outline">{event.type}</Badge>
          </div>
          <h3 className="text-xl font-semibold mb-2">{event.title}</h3>
          <p className="text-muted-foreground mb-4 line-clamp-2">{event.description}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{event.location}</span>
            </div>
          </div>
          <Button>Learn More</Button>
        </div>
      </motion.div>

      <EventModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} event={event} />
    </>
  )
}

const EventCard: React.FC<EventCardProps> = ({ event }) => {
  const [isModalOpen, setIsModalOpen] = useState(false)

  return (
    <>
      <motion.div
        className="overflow-hidden rounded-xl group cursor-pointer bg-card relative"
        whileHover={{ y: -5 }}
        transition={{ duration: 0.2 }}
        onClick={() => setIsModalOpen(true)}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl -z-10" />
        <div className="relative aspect-[16/9] overflow-hidden">
          <motion.img
            src={event.images[0]}
            alt={event.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          />
        </div>
        <div className="p-6 relative z-20">
          <div className="flex gap-2 mb-3">
            <Badge variant="secondary">{event.category}</Badge>
            <Badge variant="outline">{event.type}</Badge>
          </div>
          <h3 className="text-lg font-semibold mb-2">{event.title}</h3>
          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">{event.description}</p>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{event.date}</span>
            </div>
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>{event.location}</span>
            </div>
          </div>
          <Button>Learn More</Button>
        </div>
      </motion.div>

      <EventModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} event={event} />
    </>
  )
}

interface BadgeProps {
  children: React.ReactNode
  variant?: "default" | "secondary" | "outline"
}

const Badge: React.FC<BadgeProps> = ({ children, variant = "default" }) => {
  const variants = {
    default: "bg-primary text-primary-foreground",
    secondary: "bg-secondary text-secondary-foreground",
    outline: "border border-primary text-primary",
  }

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  )
}

