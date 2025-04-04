"use client"

import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Archive, Mail } from "lucide-react"
import { useEffect } from "react"
import { MailStatus, Service } from "@prisma/client"


interface NotificationDetailsProps {
  notification: Service
  onClose: () => void
  onMarkAsRead: () => void
  onArchive: () => void
}

export function NotificationDetails({ notification, onClose, onMarkAsRead, onArchive }: NotificationDetailsProps) {
  // Ensure cleanup when component unmounts
  useEffect(() => {
    return () => {
      // This ensures any lingering event handlers are cleaned up
      document.body.style.pointerEvents = "auto"
    }
  }, [])

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return new Intl.DateTimeFormat("en-US", {
      weekday: "long",
      month: "long",
      day: "numeric",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }).format(date)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "new":
        return <Badge className="bg-blue-500">New</Badge>
      case "read":
        return <Badge variant="outline">Read</Badge>
      case "archived":
        return <Badge variant="secondary">Archived</Badge>
      default:
        return null
    }
  }

  const handleClose = () => {
    // Ensure we reset any state before closing
    setTimeout(() => {
      onClose()
    }, 0)
  }

  return (
    <Dialog open={true} onOpenChange={handleClose}>
      <DialogContent
        className="max-w-2xl relative overflow-hidden"
        // Ensure the dialog is centered on the screen
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          margin: 0,
          zIndex: 100,
        }}
      >
        {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg -z-10" /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-md z-10" /> */}
        <div className="relative z-20">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2 text-black">
              Message from {notification.name} {getStatusBadge(notification.status)}
            </DialogTitle>
          </DialogHeader>

          <div className="space-y-4 my-4">
            <div className="grid grid-cols-[100px_1fr] gap-2">
              <div className="text-black/70">From:</div>
              <div className="text-black">
                {notification.name} &lt;{notification.email}&gt;
              </div>

              <div className="text-black/70">Received:</div>
              <div className="text-black">{formatDate(notification.createdAt)}</div>
            </div>

            <div className="border-t border-primary/10 pt-4">
              <div className="text-black/70 mb-2">Message:</div>
              <div className="bg-white/30 p-4 rounded-lg whitespace-pre-wrap text-black">{notification.message}</div>
            </div>
          </div>

          <DialogFooter className="flex justify-between sm:justify-between">
            <div className="flex gap-2">
              {notification.status === MailStatus.NEW && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    onMarkAsRead()
                    // Don't close the dialog here, let the user close it manually
                  }}
                >
                  <CheckCircle className="mr-2 h-4 w-4" />
                  Mark as read
                </Button>
              )}
              {notification.status !== MailStatus.ARCHIVED && (
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    onArchive()
                    // Don't close the dialog here, let the user close it manually
                  }}
                >
                  <Archive className="mr-2 h-4 w-4" />
                  Archive
                </Button>
              )}
            </div>

            <Button onClick={() => window.open(`mailto:${notification.email}`)}>
              <Mail className="mr-2 h-4 w-4" />
              Reply via Email
            </Button>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  )
}

