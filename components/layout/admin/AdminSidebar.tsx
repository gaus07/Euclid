"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
import { LayoutDashboard, Users, FileText, Settings, Bell, ChevronLeft, ChevronRight, LogOut } from "lucide-react"
import { cn } from "@/lib/utils"
import { SessionData } from "@/lib/sessionOptions";
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

type View = "admin" | "contact" | "profile";

export function AdminSidebar() {
  const pathname = usePathname()
  const [collapsed, setCollapsed] = useState(false)
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  const [currentView, setCurrentView] = useState<View>("contact");
  const [session, setSession] = useState<SessionData | undefined>();

  const handleLogout = async () => {
    const isLogout = await fetch("/api/logout", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (isLogout.ok) {
      setIsOpen(false);
      setSession(undefined);
      setCurrentView("admin");
      router.replace("/");
    }
  };

  return (
    <div
      className={cn(
        "bg-emerald-50/10 shadow-sm backdrop-filter backdrop-blur-md border-r border-primary/20 h-screen flex flex-col transition-all duration-300",
        collapsed ? "w-20" : "w-64",
      )}
    >
          {/* className="overflow-hidden rounded-lg group cursor-pointer bg-emerald-50/10 shadow-sm backdrop-filter backdrop-blur-md transition-all duration-300" */}

      <div className="p-4 flex justify-end">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setCollapsed(!collapsed)}
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          {collapsed ? <ChevronRight className="h-5 w-5" /> : <ChevronLeft className="h-5 w-5" />}
        </Button>
      </div>

      <nav className="flex-1 px-4 py-2">
        <ul className="space-y-2">
          <NavItem
            href="/admin"
            icon={<LayoutDashboard className="h-5 w-5" />}
            label="Dashboard"
            isActive={pathname === "/admin"}
            collapsed={collapsed}
          />

          <NavItem
            href="/admin/users"
            icon={<Users className="h-5 w-5" />}
            label="Users"
            isActive={pathname?.startsWith("/admin/users")}
            collapsed={collapsed}
          />

          <NavItem
            href="/admin/content"
            icon={<FileText className="h-5 w-5" />}
            label="Content"
            isActive={pathname?.startsWith("/admin/content")}
            collapsed={collapsed}
          />

          <NavItem
            href="/admin/notifications"
            icon={<Bell className="h-5 w-5" />}
            label="Notifications"
            isActive={pathname?.startsWith("/admin/notifications")}
            collapsed={collapsed}
            badge={5} // Example notification count
          />

          <NavItem
            href="/admin/settings"
            icon={<Settings className="h-5 w-5" />}
            label="Settings"
            isActive={pathname?.startsWith("/admin/settings")}
            collapsed={collapsed}
          />
        </ul>
      </nav>

      <div className="p-4 border-t border-primary/20">
        <Button
          variant="ghost"
          className={cn("w-full flex items-center gap-2", collapsed && "justify-center px-0")}
          onClick={handleLogout}
        >
          <LogOut className="h-5 w-5" />
          {!collapsed && <span>Log out</span>}
        </Button>
      </div>
    </div>
  )
}

interface NavItemProps {
  href: string
  icon: React.ReactNode
  label: string
  isActive: boolean
  collapsed: boolean
  badge?: number
}

function NavItem({ href, icon, label, isActive, collapsed, badge }: NavItemProps) {
  return (
    <li>
      <Link
        href={href}
        className={cn(
          "flex items-center gap-3 p-3 rounded-lg transition-colors",
          collapsed ? "justify-center" : "",
          isActive ? "bg-primary text-primary-foreground" : "hover:bg-primary/10 text-secondary-foreground",
        )}
      >
        {icon}
        {!collapsed && <span className="flex-1">{label}</span>}
        {!collapsed && badge !== undefined && (
          <Badge variant="secondary" className="ml-auto">
            {badge}
          </Badge>
        )}
        {collapsed && badge !== undefined && (
          <Badge variant="secondary" className="absolute top-0 right-0 translate-x-1/3 -translate-y-1/3">
            {badge}
          </Badge>
        )}
      </Link>
    </li>
  )
}

