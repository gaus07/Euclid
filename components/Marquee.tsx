"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const companies = [
  {
    name: "Union Bank",
    logo: "/images/Collaborations/unionbank.png",
  },
  {
    name: "L&T Infotech",
    logo: "/images/Collaborations/l&t.png",
  },
  {
    name: "ChainX Tech Labs",
    logo: "/placeholder.svg?height=40&width=40", // Using placeholder since ChainX is fictional
  },
  {
    name: "Schneider Electric",
    logo: "/images/Collaborations/schneider_electric.png",
  },
]

export default function Marquee() {
  return (
    <div className="relative w-full overflow-hidden bg-background py-16">
      <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background z-10" />
      <motion.div
        className="flex whitespace-nowrap"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ repeat: Number.POSITIVE_INFINITY, ease: "linear", duration: 20 }}
      >
        {[...Array(4)].map((_, index) => (
          <div key={index} className="flex items-center mx-4">
            <span className="text-7xl sm:text-8xl md:text-7xl font-bold text-primary px-4 flex items-center gap-8">
              {companies.map((company, idx) => (
                <span key={idx} className="flex items-center gap-4">
                  <Image
                    src={company.logo || "/placeholder.svg"}
                    alt={`${company.name} logo`}
                    width={40}
                    height={40}
                    className="inline-block"
                  />
                  {company.name}
                </span>
              ))}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}

