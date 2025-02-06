"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function TrainingEvents() {
  return (
    <div className="min-h-screen">
            <div className="absolute w-full h-full bg-gradient-to-b from-secondary to-background -z-50"></div>
      {/* Upcoming Events Calendar */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl font-bold text-center mb-8 text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Training & Events
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <EventCard title="5-Day STTP on Blockchain Security" date="1–5 July 2024" venue="EUCLID Training Center" />
            <EventCard title="3-Day Decentralized Apps Workshop" date="4–7 June 2024" venue="Virtual Event" />
          </div>
        </div>
      </section>

      {/* Past Events Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Past Events Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <GalleryItem
              image="/placeholder.svg?height=300&width=400"
              caption="33 AIML students from St. John College visited EUCLID (4 Sept 2024)"
            />
            {/* Add more gallery items here */}
          </div>
        </div>
      </section>
    </div>
  )
}

const EventCard = ({ title, date, venue }: { title: string; date: string; venue: string }) => {
  return (
    <Card className="bg-card">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-secondary-foreground mb-2">Date: {date}</p>
        <p className="text-secondary-foreground mb-4">Venue: {venue}</p>
        <Button>Register Now</Button>
      </CardContent>
    </Card>
  )
}

const GalleryItem = ({ image, caption }: { image: string; caption: string }) => {
  return (
    <div className="relative">
      <img src={image || "/placeholder.svg"} alt={caption} className="w-full h-64 object-cover rounded-lg" />
      <p className="absolute bottom-0 left-0 right-0 bg-primary/80 text-primary p-2 rounded-b-lg text-sm">{caption}</p>
    </div>
  )
}


