"use client"

import type React from "react"

import "./globals.css"
import { Inter } from "next/font/google"
import { usePathname } from "next/navigation"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import Fab from "@/components/Fab"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  const isLoginPage = pathname === "/login"

  return (
    <html lang="en" className="scroll-smooth font-sans">
      <body className={`${inter.className} min-h-screen flex flex-col -z-50`}>
        <div className="absolute w-full h-full bg-gradient-to-b from-[var(--gradient-start)] to-background/80 opacity-90 -z-50"></div>
        <Navbar />
        <Fab />
        <main className="flex-1 pt-20">{children}</main>
        {!isLoginPage && <Footer />}
      </body>
    </html>
  )
}



