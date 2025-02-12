import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "@/components/layout/Navbar"
import Footer from "@/components/layout/Footer"
import type React from "react"

const inter = Inter()

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
    <html  lang="en" className="font-sans">
      <body className={`${inter.className} min-h-screen flex flex-col -z-50`}>
        {/* <SessionProvider> */}
        <div className="absolute w-full h-full bg-gradient-to-b from-[var(--gradient-start)] to-background/80 opacity-90 -z-50"></div>
        <Navbar />
        <main className="flex-1 pt-20">{children}</main>
        <Footer />
        {/* </SessionProvider> */}
      </body>
    </html>
  )
}

