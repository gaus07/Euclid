"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Collaborations() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900">
      {/* Industry Partners */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Collaborations
          </motion.h1>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Industry Partners</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <PartnerLogo name="Union Bank" logo="/placeholder.svg?height=100&width=200" />
            <PartnerLogo name="L&T Infotech" logo="/placeholder.svg?height=100&width=200" />
            <PartnerLogo name="ChainX Tech Labs" logo="/placeholder.svg?height=100&width=200" />
            <PartnerLogo name="Schneider Electric" logo="/placeholder.svg?height=100&width=200" />
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16 bg-white dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Case Study</h2>
          <Card>
            <CardHeader>
              <CardTitle>Cyber Peace Foundation Partnership</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-700 dark:text-gray-300">
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
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Academia Visits</h2>
          <ul className="list-disc list-inside text-gray-700 dark:text-gray-300">
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
    <div className="flex items-center justify-center">
      <img src={logo || "/placeholder.svg"} alt={name} className="max-w-full h-auto" />
    </div>
  )
}

