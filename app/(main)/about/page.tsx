"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Brain, Building2, ChevronRight, GraduationCap, LineChart, Target, Users } from "lucide-react"
import Link from "next/link"
import type React from "react" // Import React
import { Timeline } from "@/components/ui/timeline"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="absolute w-full h-full bg-gradient-to-b from-secondary to-background -z-50"></div>
      {/* Hero Section */}
      <section className="relative bg-secondary/50 py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="w-full items-center text-center justify-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              About Euclid
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Our project focuses on enhancing the sustainability and security of blockchain networks through innovative
              research and development.
            </p>
            <Button size="lg">View Our Research</Button>
          </motion.div>
        </div>
      </section>

      {/* Project Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Somaiya Vidyavihar University Funded Seed Grant Project</h2>
              <p className="text-muted-foreground mb-6">
                A groundbreaking initiative backed by ₹1 Cr funding in progressive mode, dedicated to advancing
                blockchain technology while prioritizing sustainability and security.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <Card>
                  <CardContent className="p-6">
                    <LineChart className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-semibold mb-2">First Year Budget</h3>
                    <p className="text-2xl font-bold">₹25L</p>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6">
                    <Users className="h-8 w-8 text-primary mb-4" />
                    <h3 className="font-semibold mb-2">Team Members</h3>
                    <p className="text-2xl font-bold">5+</p>
                  </CardContent>
                </Card>
              </div>
            </div>
            <div>
              <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-uaSqYHhnRtQU59Z8XItV1rticYX1ye.png"
                alt="Team collaboration"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Research Objectives */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Research Objectives</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <ObjectiveCard
              icon={Brain}
              title="Mining Rig Development"
              description="Develop and benchmark performance of a coin-agnostic mining rig"
            />
            <ObjectiveCard
              icon={Target}
              title="Sustainability Assessment"
              description="Evaluate and optimize environmental impact of mining operations"
            />
            <ObjectiveCard
              icon={Building2}
              title="Data Trading Platform"
              description="Create a secure and transparent blockchain-based trading system"
            />
            <ObjectiveCard
              icon={BookOpen}
              title="Security Assessment"
              description="Comprehensive vulnerability analysis and mitigation strategies"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <TeamMemberCard
              name="Dr. Irfan Siddavatam"
              role="Principal Investigator"
              image="/placeholder.svg?height=400&width=400"
            />
            <TeamMemberCard
              name="Prof. Ashwini Dalvi"
              role="Co-Principal Investigator"
              image="/placeholder.svg?height=400&width=400"
            />
            <TeamMemberCard
              name="Prof. Sagar Korde"
              role="Co-Principal Investigator"
              image="/placeholder.svg?height=400&width=400"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <TeamMemberCard
              name="Mr. Chandan Kolvenkar"
              role="Ph.D. Scholar"
              image="/placeholder.svg?height=400&width=400"
            />
            <TeamMemberCard
              name="Mr. Abhijeet Pasi"
              role="Ph.D. Scholar"
              image="/placeholder.svg?height=400&width=400"
            />
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          {/* <h2 className="text-3xl font-bold mb-12 text-center">Our Achievements</h2> */}
          <Timeline
            data={[
              {
                title: "2022-23",
                content: (
                  <div className="space-y-4 bg-card rounded-lg p-6 shadow-lg">
                    <h4 className="text-xl font-semibold text-primary">Key Milestones</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                        </div>
                        <p className="text-muted-foreground">
                          Launched multiple projects including Haschain, dashboard, and Somaiya Coin
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                        </div>
                        <p className="text-muted-foreground">
                          Established partnerships with Union Bank, L&T Infotech, and ChainX Tech Labs
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                        </div>
                        <p className="text-muted-foreground">Secured ₹25L budget approval for development activities</p>
                      </li>
                    </ul>
                  </div>
                ),
              },
              {
                title: "2023-24",
                content: (
                  <div className="space-y-4 bg-card rounded-lg p-6 shadow-lg">
                    <h4 className="text-xl font-semibold text-primary">Major Achievements</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                        </div>
                        <p className="text-muted-foreground">Published research papers in international conferences</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                        </div>
                        <p className="text-muted-foreground">Secured ₹60L consultancy project with Aaizel Tech</p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                        </div>
                        <p className="text-muted-foreground">
                          Conducted successful training programs and expanded industry interactions
                        </p>
                      </li>
                    </ul>
                  </div>
                ),
              },
              {
                title: "2024-25",
                content: (
                  <div className="space-y-4 bg-card rounded-lg p-6 shadow-lg">
                    <h4 className="text-xl font-semibold text-primary">Future Goals</h4>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                        </div>
                        <p className="text-muted-foreground">
                          Functional Mining Rig Setup and Performance Optimization
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                        </div>
                        <p className="text-muted-foreground">
                          Complete Sustainability Assessment Setup and Implementation
                        </p>
                      </li>
                      <li className="flex items-start gap-2">
                        <div className="mt-1.5">
                          <div className="h-2 w-2 rounded-full bg-primary" />
                        </div>
                        <p className="text-muted-foreground">Comprehensive Security Assessment Framework Development</p>
                      </li>
                    </ul>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </section>
    </div>
  )
}

const ObjectiveCard = ({
  icon: Icon,
  title,
  description,
}: {
  icon: any
  title: string
  description: string
}) => (
  <Card>
    <CardContent className="p-6">
      <Icon className="h-8 w-8 text-primary mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
)

const TeamMemberCard = ({ name, role, image }: { name: string; role: string; image: string }) => (
  <Card>
    <CardContent className="p-0">
      <img src={image || "/placeholder.svg"} alt={name} className="w-full h-48 object-cover" />
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-1">{name}</h3>
        <p className="text-muted-foreground">{role}</p>
      </div>
    </CardContent>
  </Card>
)

const ProjectCard = ({ title, description }: { title: string; description: string }) => (
  <Card>
    <CardContent className="p-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
)

const AchievementItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-start gap-2">
    <div className="mt-1.5">
      <div className="h-2 w-2 rounded-full bg-primary" />
    </div>
    <p className="text-muted-foreground">{children}</p>
  </li>
)

const FutureItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-center gap-2">
    <ChevronRight className="h-5 w-5 text-primary" />
    <span className="text-muted-foreground">{children}</span>
  </li>
)

