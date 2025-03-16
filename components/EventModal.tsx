"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Calendar, MapPin, Globe, X, ImageIcon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import { useEffect, useState } from "react"
import Autoplay from "embla-carousel-autoplay"
import { createPortal } from "react-dom"

interface EventModalProps {
  isOpen: boolean
  onClose: () => void
  event: {
    title: string
    description: string
    date: string
    location: string
    category: string
    type: string
    website?: string
    host?: {
      name: string
      image: string
    }
    images: string[]
  }
}

export function EventModal({ isOpen, onClose, event }: EventModalProps) {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    if (isOpen) {
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  if (!mounted) return null

  return createPortal(
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[100] flex items-start md:items-center justify-center bg-black/60 backdrop-blur-sm p-4 overflow-y-auto"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-6xl bg-background rounded-xl overflow-hidden shadow-2xl my-4 md:my-8"
          >
            <button
              onClick={onClose}
              className="fixed md:absolute right-6 top-6 z-50 rounded-full bg-black/50 p-2 text-white backdrop-blur-sm transition-colors hover:bg-black/70"
            >
              <X className="h-6 w-6" />
            </button>

            {/* Image Gallery */}
            <div className="relative h-[300px] md:h-[400px] w-full overflow-hidden">
              <Carousel
                opts={{
                  align: "start",
                  loop: true,
                }}
                plugins={[
                  Autoplay({
                    delay: 4000,
                  }),
                ]}
                className="h-full w-full"
              >
                <CarouselContent>
                  {event.images.map((image, index) => (
                    <CarouselItem key={index} className="h-full w-full">
                      <div className="relative h-[300px] md:h-[400px] w-full">
                        <img
                          src={image || "/placeholder.svg"}
                          alt={`${event.title} - Image ${index + 1}`}
                          className="absolute inset-0 h-full w-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
              </Carousel>
            </div>

            <div className="grid grid-cols-1 gap-6 p-4 md:gap-8 md:p-8 lg:grid-cols-3">
              <div className="lg:col-span-2">
                <div className="mb-6 flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                    {event.category}
                  </span>
                  <span className="rounded-full border border-primary/20 px-3 py-1 text-sm font-medium text-primary">
                    {event.type}
                  </span>
                </div>

                <h1 className="mb-4 text-2xl font-bold md:text-4xl">{event.title}</h1>
                <p className="mb-4 text-muted-foreground">{event.description}</p>
              </div>

              <div className="space-y-6">
                <div className="rounded-xl bg-card p-4 md:p-6">
                  <div className="mb-6 space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <Calendar className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Event date</p>
                        <p className="font-medium">{event.date}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground">Location</p>
                        <p className="font-medium">{event.location}</p>
                      </div>
                    </div>

                    {event.website && (
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 text-primary">
                          <Globe className="h-5 w-5" />
                        </div>
                        <div>
                          <p className="text-sm text-muted-foreground">Website</p>
                          <a
                            href={event.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="font-medium text-primary hover:underline"
                          >
                            {event.website}
                          </a>
                        </div>
                      </div>
                    )}
                  </div>

                  {event.host && (
                    <div className="mb-6 flex items-center gap-3">
                      <Avatar>
                        <AvatarImage src={event.host.image} />
                        <AvatarFallback>{event.host.name[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm text-muted-foreground">Event hosted by</p>
                        <p className="font-medium">{event.host.name}</p>
                      </div>
                    </div>
                  )}

                  <Button className="w-full" size="lg">
                    Register to event
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>,
    document.body,
  )
}

