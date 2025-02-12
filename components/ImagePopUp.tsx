"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import type React from "react" // Added import for React

interface ImagePopupProps {
  src: string
  alt: string
  width: number
  height: number
}

export const ImagePopup: React.FC<ImagePopupProps> = ({ src, alt, width, height }) => {
  const [isExpanded, setIsExpanded] = useState(false)
  const [isNavbarVisible, setIsNavbarVisible] = useState(true)

  useEffect(() => {
    const handleEsc = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsExpanded(false)
        setIsNavbarVisible(true)
      }
    }
    window.addEventListener("keydown", handleEsc)

    if (isExpanded) {
      setIsNavbarVisible(false)
      document.body.style.overflow = "hidden"
    } else {
      setIsNavbarVisible(true)
      document.body.style.overflow = "auto"
    }

    return () => {
      window.removeEventListener("keydown", handleEsc)
      document.body.style.overflow = "auto"
    }
  }, [isExpanded])

  useEffect(() => {
    if (typeof window !== "undefined") {
      ;(window as any).__IMAGE_POPUP_STATE__ = { isNavbarVisible }
      window.dispatchEvent(new Event("image-popup-state-change"))
    }
  }, [isNavbarVisible])

  const handleClick = () => {
    setIsExpanded(!isExpanded)
    setIsNavbarVisible(isExpanded)
  }

  return (
    <>
      <motion.div
        layout
        onClick={handleClick}
        className={`cursor-pointer ${
          isExpanded ? "fixed inset-0 z-[100] flex items-center justify-center bg-black bg-opacity-90" : "relative w-full h-full"
        }`}
        initial={false}
        animate={isExpanded ? { scale: 1 } : { scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <Image
          src={src || "/placeholder.svg"}
          alt={alt}
          width={width}
          height={height}
          className={`rounded-lg shadow-lg ${
            isExpanded ? "max-h-[90vh] max-w-[90vw] w-auto h-auto object-contain" : "w-full h-full object-cover"
          }`}
          priority
        />
      </motion.div>
      <AnimatePresence>
        {isExpanded && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-black bg-opacity-75"
            onClick={handleClick}
          />
        )}
      </AnimatePresence>
    </>
  )
}

