"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useEffect, useState } from "react";

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
    logo: "/images/Collaborations/chainxtachlabs.jpg", 
  },
  {
    name: "Schneider Electric",
    logo: "/images/Collaborations/schneider_electric.png",
  },
]

export default function Marquee() {
  const [duplicatedcompanies, setDuplicatedcompanies] = useState<typeof companies>([])

  useEffect(() => {
    setDuplicatedcompanies([...companies, ...companies])
  }, [])

  return (
    <div className="relative m-auto w-full overflow-hidden bg-white py-10">
      <div className="relative flex w-full flex-nowrap gap-4">
        <motion.div
          className="flex gap-4 pr-4"
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Number.POSITIVE_INFINITY,
          }}
        >
          {duplicatedcompanies.map((logo, idx) => (
            <div key={idx} className="flex w-[200px] items-center gap-6">
            <img
              src={logo.logo || "/placeholder.svg"}
              alt={`${logo.name} logo`}
              className="h-14 w-14 object-contain"
            />
            <p className="text-base font-semibold text-neutral-700">{logo.name}</p>
          </div>
          ))}
        </motion.div>
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-white to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-gradient-to-l from-white to-transparent" />
    </div>
  )
}

