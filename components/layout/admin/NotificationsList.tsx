"use client"

import { useState, useEffect } from "react"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MoreHorizontal, Eye, CheckCircle, Archive } from "lucide-react"
import { NotificationDetails } from "./NotificationDetails"
import { MailStatus, Service } from "@prisma/client"


export function NotificationsList() {
  const [notifications, setNotifications] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [selectedNotification, setSelectedNotification] = useState<Service | null>(null)
  const [dropdownOpen, setDropdownOpen] = useState<number | false>(false)

  

  // Fetch notifications (mock data for now)
  useEffect(() => {
    // Simulate API call
    async function fetchNotifications() {
      const emails = await fetch("/api/emails", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        }
      })

      if(emails.ok) {
        const mail = await emails.json() 
        setNotifications(mail.emails)
        setLoading(false)
      }
    }
    fetchNotifications();
  }, [])

  const markAsRead = async (id: number) => {
    await fetch("/api/update_status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, status: MailStatus.READ }),
    })
    setNotifications(
      notifications.map((notification: Service) =>
        notification.id === id ? { ...notification, status: MailStatus.READ } : notification,
      ),
    )
    setDropdownOpen(false)
  }

  const archiveNotification = async (id: number) => {
    await fetch("/api/update_status", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id, status: MailStatus.ARCHIVED }),
    })
    setNotifications(
      notifications.map((notification) =>
        notification.id === id ? { ...notification, status: MailStatus.ARCHIVED } : notification,
      ),
    )
    setDropdownOpen(false)
  }

  const handleViewDetails = (notification: Service) => {
    setSelectedNotification(notification)
    setDropdownOpen(false)
  }

  const handleCloseDetails = () => {
    setSelectedNotification(null)
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case MailStatus.NEW:
        return <Badge className="bg-blue-500">New</Badge>
      case MailStatus.READ:
        return <Badge variant="outline">Read</Badge>
      case MailStatus.ARCHIVED:
        return <Badge variant="secondary">Archived</Badge>
      default:
        return null
    }
  }

  if (loading) {
    return (
      <div className="p-8 flex justify-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
      </div>
    )
  }

  return (
    <>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader className="bg-primary/5">
            <TableRow className="hover:bg-primary/10">
              <TableHead className="text-black">Status</TableHead>
              <TableHead className="text-black">Name</TableHead>
              <TableHead className="text-black">Email</TableHead>
              <TableHead className="text-black">Message</TableHead>
              <TableHead className="text-black">Date</TableHead>
              <TableHead className="w-[80px] text-black">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {notifications.map((notification: Service) => ( 
              <TableRow
                key={notification.id}
                className={notification.status === MailStatus.NEW ? "bg-blue-50/50" : "hover:bg-primary/5"}
              >
                <TableCell>{getStatusBadge(notification.status )}</TableCell>
                <TableCell className="font-medium text-black">{notification.name}</TableCell>
                <TableCell className="text-black">{notification.email}</TableCell>
                <TableCell className="max-w-xs truncate text-black">{notification.message}</TableCell>
                <TableCell className="text-black">{formatDate(notification.createdAt)}</TableCell>
                <TableCell>
                  <DropdownMenu
                    open={dropdownOpen === notification.id}
                    onOpenChange={(open) => {
                      if (open) {
                        setDropdownOpen(notification.id)
                      } else {
                        setDropdownOpen(false)
                      }
                    }}
                  >
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <MoreHorizontal className="h-4 w-4" />
                        <span className="sr-only">Open menu</span>
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem onClick={() => handleViewDetails(notification)}>
                        <Eye className="mr-2 h-4 w-4" />
                        <span>View details</span>
                      </DropdownMenuItem>
                      {notification.status === MailStatus.NEW && (
                        <DropdownMenuItem onClick={() => markAsRead(notification.id)}>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          <span>Mark as read</span>
                        </DropdownMenuItem>
                      )}
                      {notification.status !== MailStatus.ARCHIVED && (
                        <DropdownMenuItem onClick={() => archiveNotification(notification.id)}>
                          <Archive className="mr-2 h-4 w-4" />
                          <span>Archive</span>
                        </DropdownMenuItem>
                      )}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>

      {/* Notification details modal */}
      {selectedNotification && (
        <NotificationDetails
          notification={selectedNotification}
          onClose={handleCloseDetails}
          onMarkAsRead={() => {
            markAsRead(selectedNotification.id)
            setSelectedNotification({ ...selectedNotification, status: MailStatus.READ })
          }}
          onArchive={() => {
            archiveNotification(selectedNotification.id)
            setSelectedNotification({ ...selectedNotification, status: MailStatus.ARCHIVED })
          }}
        />
      )}
    </>
  )
}

