"use client"

import { motion } from "framer-motion"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function Achievements() {
  return (
    <div className="min-h-screen bg-secondary dark:bg-gray-900">
      {/* Publications Table */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl font-bold text-center mb-8 text-gray-900 dark:text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Achievements
          </motion.h1>
          <Card>
            <CardHeader>
              <CardTitle>Publications</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader className="bg-primary/10">
                  <TableRow>
                    <TableHead>Title</TableHead>
                    <TableHead>Conference/Journal</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Download</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell>Anomaly Detection for Cryptocoin Transactions</TableCell>
                    <TableCell>IJCACI 2024</TableCell>
                    <TableCell>Accepted</TableCell>
                    <TableCell>
                      <a href="#" className="text-primary dark:text-secondary hover:underline">
                        PDF
                      </a>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell>Smart Contract Vulnerability Assessment</TableCell>
                    <TableCell>-</TableCell>
                    <TableCell>Under Review</TableCell>
                    <TableCell>
                      <a href="#" className="text-primary dark:text-secondary hover:underline">
                        PDF
                      </a>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Awards & Milestones */}
      <section className="py-16 bg-card dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 text-gray-900 dark:text-white">Awards & Milestones</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AchievementCard title="Geo-Location Land Registry App" description="Under Copyright" />
            <AchievementCard title="Consultancy with Aaizel Tech" description="₹60 Lac" />
          </div>
        </div>
      </section>
    </div>
  )
}

const AchievementCard = ({ title, description }: { title: string; description: string }) => {
  return (
    <Card>
      <CardContent className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-secondary-foreground dark:text-gray-300">{description}</p>
      </CardContent>
    </Card>
  )
}

