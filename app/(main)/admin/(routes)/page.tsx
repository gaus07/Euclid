// import { HeaderAnimation } from "@/components/HeaderAnimation"
import { motion } from "framer-motion"
import { AdminDashboardCard } from "@/components/layout/admin/AdminDashboardCard"
import { Bell, Users, FileText, Settings } from "lucide-react"

export default function AdminDashboard() {
  return (
    <div className="space-y-6">

      {/* <HeaderAnimation as="h1" className="text-3xl font-bold"> */}
        Admin Dashboard
      {/* </HeaderAnimation> */}

      {/* <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-4xl md:text-5xl font-bold mb-4 text-center"
                >
                  Admin Dashboard
                </motion.h1> */}

      <p className="text-black">
        Welcome to the EUCLID admin panel. Manage your website content, users, and notifications.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <AdminDashboardCard
          title="Notifications"
          description="5 new contact form submissions"
          icon={<Bell className="h-5 w-5 text-primary" />}
          href="/admin/notifications"
        />

        <AdminDashboardCard
          title="Users"
          description="Manage user accounts"
          icon={<Users className="h-5 w-5 text-primary" />}
          href="/admin/users"
        />

        <AdminDashboardCard
          title="Content"
          description="Update website content"
          icon={<FileText className="h-5 w-5 text-primary" />}
          href="/admin/content"
        />

        <AdminDashboardCard
          title="Settings"
          description="Configure site settings"
          icon={<Settings className="h-5 w-5 text-primary" />}
          href="/admin/settings"
        />
      </div>

      <div className="relative overflow-hidden rounded-lg">
        {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg -z-10" /> */}
        {/* <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-md z-10" /> */}
        <div className="relative z-20 p-6">
          <h2 className="text-xl font-semibold mb-4 text-black">Recent Activity</h2>
          <p className="text-black">No recent activity to display.</p>
        </div>
      </div>
    </div>
  )
}

