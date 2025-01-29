"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
  }, [isOpen])

  return (
    <>
      <nav className="bg-white/80 backdrop-blur-md fixed w-full z-50 top-0 left-0 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold text-secondary">
                EUCLID
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-center space-x-8">
                <NavLink href="/about">About</NavLink>
                <NavLink href="/projects">Projects</NavLink>
                <NavLink href="/achievements">Achievements</NavLink>
                <NavLink href="/training-events">Training & Events</NavLink>
                <NavLink href="/collaborations">Collaborations</NavLink>
                {/* <Button variant="outline" size="sm" className="ml-4">
                  Log in
                </Button> */}
                <Button>Get Started</Button>
              </div>
            </div>
            <button className="md:hidden p-2 rounded-lg hover:bg-gray-100" onClick={() => setIsOpen(true)}>
              <Menu className="h-6 w-6 text-gray-600" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/20 backdrop-blur-sm z-50 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ y: "-100%" }}
              animate={{ y: 0 }}
              exit={{ y: "-100%" }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="fixed top-0 left-0 right-0 h-screen bg-white z-50 md:hidden overflow-y-auto"
            >
              <div className="p-6">
                <div className="flex items-center justify-between mb-8">
                  <Link href="/" className="text-xl font-bold text-secondary">
                    EUCLID
                  </Link>
                  <button className="p-2 rounded-lg hover:bg-gray-100" onClick={() => setIsOpen(false)}>
                    <X className="h-6 w-6 text-gray-600" />
                  </button>
                </div>
                <div className="flex flex-col space-y-6">
                  <MobileNavLink href="/about" onClick={() => setIsOpen(false)}>
                    About
                  </MobileNavLink>
                  <MobileNavLink href="/projects" onClick={() => setIsOpen(false)}>
                    Projects
                  </MobileNavLink>
                  <MobileNavLink href="/achievements" onClick={() => setIsOpen(false)}>
                    Achievements
                  </MobileNavLink>
                  <MobileNavLink href="/training-events" onClick={() => setIsOpen(false)}>
                    Training & Events
                  </MobileNavLink>
                  <MobileNavLink href="/collaborations" onClick={() => setIsOpen(false)}>
                    Collaborations
                  </MobileNavLink>
                  <div className="pt-6 border-t border-gray-100">
                    {/* <Button variant="outline" className="w-full mb-4">
                      Log in
                    </Button> */}
                    <Button className="w-full">Get Started</Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

const NavLink = ({ href, children }: {href: string, children: string}) => (
  <Link href={href} className="text-gray-600 hover:text-secondary font-medium transition-colors">
    {children}
  </Link>
)

const MobileNavLink = ({ href, children, onClick }: {href: string, children: string, onClick: any}) => (
  <Link
    href={href}
    onClick={onClick}
    className="text-lg font-medium text-gray-600 hover:text-secondary transition-colors"
  >
    {children}
  </Link>
)

export default Navbar

