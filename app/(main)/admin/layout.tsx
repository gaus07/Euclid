// app/(main)/admin/layout.tsx
import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import Link from "next/link"
import Image from "next/image"
import "../../globals.css"
import { AdminSidebar } from "@/components/layout/admin/AdminSidebar"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
})

export const metadata: Metadata = {
  title: "EUCLID Admin Panel",
  description: "Admin panel for EUCLID website management",
}

export const dynamic = "force-dynamic"

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    // Remove the <html> and <body> tags here.
    <div className={`${inter.className} min-h-screen bg-gray-50`}>
      <div className="flex h-screen overflow-hidden">
        <AdminSidebar />

        <div className="flex-1 flex flex-col overflow-hidden">
          <header className="bg-emerald-50/10 shadow-sm backdrop-filter backdrop-blur-md h-16 flex items-center px-6 sticky top-0 z-10">
          {/* className="overflow-hidden rounded-lg group cursor-pointer bg-emerald-50/10 shadow-sm backdrop-filter backdrop-blur-md transition-all duration-300" */}

            <div className="flex items-center justify-between w-full">
              <Link href="/" className="flex items-center gap-2">
                <Image
                  src="/placeholder.svg?height=40&width=40"
                  alt="EUCLID Logo"
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <span className="font-bold text-xl">EUCLID Admin</span>
              </Link>
              <div className="flex items-center gap-4">
                {/* Admin quick actions could go here */}
              </div>
            </div>
          </header>

          <main className="flex-1 overflow-y-auto p-6 bg-emerald-50/10 shadow-sm backdrop-filter backdrop-blur-md">{children}</main>
        </div>
      </div>
    </div>
  )
}
