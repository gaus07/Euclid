import type React from "react"
// This is a route group layout that ensures all admin routes use the same layout
// without inheriting from the main website layout
export default function AdminRoutesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}

