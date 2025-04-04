import type React from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

interface AdminDashboardCardProps {
  title: string
  description: string
  icon: React.ReactNode
  href: string
}

export function AdminDashboardCard({ title, description, icon, href }: AdminDashboardCardProps) {
  return (
    <div className="relative overflow-hidden rounded-lg">
      {/* Background layers to match OngoingProjectCard */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg -z-10" /> */}
      {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-md z-10" /> */}

      {/* Card content */}
      <div className="relative z-20 p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-black">{title}</h3>
          {icon}
        </div>
        <p className="text-sm text-black mb-4">{description}</p>
        <Button asChild variant="outline" className="w-full bg-white/50 hover:bg-white/70">
          <Link href={href}>View</Link>
        </Button>
      </div>
    </div>
  )
}

