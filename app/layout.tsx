import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "EUCLID - Blockchain Research Organization",
  description: "Pioneering ethical blockchain solutions for a secure, sustainable future.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}

