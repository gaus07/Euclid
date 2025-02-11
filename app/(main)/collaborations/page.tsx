"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Collaborations() {
  return (
    <div className="min-h-screen font-sans">
            <div className="absolute w-full h-full bg-gradient-to-b from-[var(--gradient-start)] to-background/80 opacity-90 -z-50"></div>
      {/* Industry Partners */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl font-bold text-center mb-8 text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Collaborations
          </motion.h1>
          <h2 className="text-2xl font-semibold mb-4 text-primary">Industry Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <PartnerLogo name="Union Bank" logo="/placeholder.svg?height=100&width=200" />
            <PartnerLogo name="L&T Infotech" logo="/placeholder.svg?height=100&width=200" />
            <PartnerLogo name="ChainX Tech Labs" logo="/placeholder.svg?height=100&width=200" />
            <PartnerLogo name="Schneider Electric" logo="/placeholder.svg?height=100&width=200" />
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Case Study</h2>
          <Card className="bg-card">
            <CardHeader>
              <CardTitle>Cyber Peace Foundation Partnership</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-secondary-foreground dark:text-gray-300">
                Our partnership with Cyber Peace Foundation focuses on enhancing blockchain security. Together, we're
                developing cutting-edge solutions to protect against emerging threats in the blockchain space.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Academia Visits */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4 text-primary">Academia Visits</h2>
          <ul className="list-disc list-inside text-secondary-foreground dark:text-gray-300">
            <li>SIES Graduate School (30 Oct 2024)</li>
            <li>St. John College (4 Sept 2024)</li>
          </ul>
        </div>
      </section>
    </div>
  )
}

const PartnerLogo = ({ name, logo }: { name: string; logo: string }) => {
  return (
    <div className="flex items-center justify-center bg-card">
      <img src={logo || "/placeholder.svg"} alt={name} className="max-w-full h-auto" />
    </div>
  )
}



