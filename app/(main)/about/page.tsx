"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { BookOpen, Brain, Building2, ChevronRight, GraduationCap, LineChart, Target, Users } from "lucide-react"
import type React from "react"
import { Timeline } from "@/components/ui/timeline"
import { ImagePopup } from "@/components/ImagePopUp"
import Image from "next/image"
import { Facebook, Linkedin, Mail, Twitter } from "lucide-react"

const teamMembers = [
  {
    name: "Dr. Irfan Siddavatam",
    role: "Principal Investigator",
    bio: "Leading blockchain security research at Somaiya University. Former consultant at major tech firms.",
    image: "/images/About/irfan.jpg",
  },
  {
    name: "Prof. Ashwini Dalvi",
    role: "Co-Principal Investigator",
    bio: "Specializing in sustainable blockchain systems. Previously led research at top institutions.",
    image: "/images/About/ashwini.png",
  },
  {
    name: "Prof. Sagar Korde",
    role: "Co-Principal Investigator",
    bio: "Expert in blockchain architecture and security protocols. Industry veteran.",
    image: "/images/About/sagar.jpg",
  },
  {
    name: "Mr. Chandan Kolvenkar",
    role: "Ph.D. Scholar",
    bio: "Researching blockchain security vulnerabilities and mitigation strategies.",
    image: "/images/About/chandan.jpg",
  },
  {
    name: "Mr. Abhijeet Pasi",
    role: "Ph.D. Scholar",
    bio: "Focusing on sustainable mining solutions and energy optimization.",
    image: "/images/About/abhijeet.jpg",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen font-sans">
      <div className="absolute w-full h-full bg-gradient-to-b from-[var(--gradient-start)] to-background/80 opacity-90 -z-50"></div>
      {/* Hero Section */}
      <section className="relative bg-secondary/50 py-10">
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
            <p className="text-muted-foreground max-w-2xl mx-auto mb-4">
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
              <motion.div
                  className="overflow-hidden rounded-lg group cursor-pointer bg-emerald-50/10 shadow-sm backdrop-filter backdrop-blur-md transition-all duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl -z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-md z-10" />
                  <div className="relative z-20 p-6 h-full flex flex-col">
                    <LineChart className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-primary mb-2">First Year Budget</h3>
                    <p className="text-2xl font-bold text-black">₹25L</p>
                  </div>
                </motion.div>
                <motion.div
                  className="overflow-hidden rounded-lg group cursor-pointer bg-emerald-50/10 shadow-sm backdrop-filter backdrop-blur-md transition-all duration-300"
                  whileHover={{ y: -5 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl -z-10" />
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-md z-10" />
                  <div className="relative z-20 p-6 h-full flex flex-col">
                    <Users className="h-8 w-8 text-primary mb-4" />
                    <h3 className="text-xl font-semibold text-primary mb-2">Team Members</h3>
                    <p className="text-2xl font-bold text-black">5+</p>
                  </div>
                </motion.div>
              </div>
            </div>
            <div className="relative aspect-video">
              <ImagePopup src="/images/About/about_image.jpeg" alt="Team collaboration" width={800} height={600} />
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
      <section className="py-16 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative bg-card rounded-xl overflow-hidden hover:shadow-sm transition-shadow duration-300"
              >
                <div className="relative aspect-square mb-4 rounded-2xl overflow-hidden bg-muted">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover object-center group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <motion.div
                  className="p-4 bg-gradient-to-t from-background/90 to-background/50 backdrop-blur-sm relative z-10"
                  initial={{ y: 0 }}
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3 className="text-lg font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm mb-3">{member.bio}</p>
                  <div className="flex items-center gap-3">
                    <SocialLink href="#" icon={Linkedin} label="LinkedIn" />
                    <SocialLink href="#" icon={Twitter} label="Twitter" />
                    <SocialLink href="#" icon={Facebook} label="Facebook" />
                    <SocialLink href="#" icon={Mail} label="Email" />
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <Timeline
            data={[
              {
                title: "2022-23",
                content: (
                  <div className="space-y-4 p-6 overflow-hidden rounded-lg group cursor-pointer bg-emerald-50/10 shadow-sm backdrop-filter backdrop-blur-md">
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
                  <div className="space-y-4 p-6 overflow-hidden rounded-lg group cursor-pointer bg-emerald-50/10 shadow-sm backdrop-filter backdrop-blur-md">
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
                  <div className="space-y-4 p-6 overflow-hidden rounded-lg group cursor-pointer bg-emerald-50/10 shadow-sm backdrop-filter backdrop-blur-md">
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
  <motion.div
    className="overflow-hidden rounded-lg group cursor-pointer bg-emerald-50/10 shadow-sm backdrop-filter backdrop-blur-md transition-all duration-300"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl -z-10" />
    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-md z-10" />
    <div className="relative z-20 p-6 h-full flex flex-col">
      <Icon className="h-8 w-8 text-primary mb-4" />
      <h3 className="text-xl font-semibold text-primary mb-2">{title}</h3>
      <p className="text-black text-sm flex-grow">{description}</p>
    </div>
  </motion.div>
)

const SocialLink = ({ href, icon: Icon, label }: { href: string; icon: any; label: string }) => (
  <a href={href} className="text-muted-foreground hover:text-primary transition-colors duration-200" aria-label={label}>
    <Icon className="h-5 w-5" />
  </a>
)