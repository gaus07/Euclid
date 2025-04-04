// import { HeaderAnimation } from "@/components/HeaderAnimation"
import { NotificationsList } from "@/components/layout/admin/NotificationsList"

export default function NotificationsPage() {
  return (
    <div className="max-w-6xl mx-auto">
      {/* <HeaderAnimation> */}
        <h1 className="text-3xl font-bold mb-6">Notifications</h1>
      {/* </HeaderAnimation> */}

      <div className="relative overflow-hidden rounded-lg">
        {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg -z-10" /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-md z-10" /> */}
        <div className="relative z-20">
          <div className="p-6 border-b border-primary/10">
            <h2 className="text-xl font-semibold text-black">Contact Form Submissions</h2>
            <p className="text-black mt-1">View and manage contact form submissions from the website</p>
          </div>

          <NotificationsList />
        </div>
      </div>
    </div>
  )
}

