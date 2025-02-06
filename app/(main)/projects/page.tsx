"use client"

import { motion } from "framer-motion"
import Accordion from "@/components/Accordion"
import { ThreeDCard } from "@/components/3DCard"
import { BookOpen, Brain, Building2, ChevronRight, GraduationCap } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import lan from "@/public/landing-page.png"

const ProjectCard = ({ title, description, image, url }: { title: string; description: string; image: any; url: string }) => {
  return (
    <ThreeDCard
      title={title}
      description={description}
      image={image}
      url={url}
    />
  );
};

export default function Projects() {
  return (
    <div className="min-h-screen">
      <div className="absolute w-full h-full bg-gradient-to-b from-secondary to-background -z-50"></div>

      {/* Current Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.h1
            className="text-4xl font-bold text-center mb-8 text-primary"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Projects
          </motion.h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
            <ProjectCard
              title="Haschain"
              description="Anti-counterfeiting blockchain for product verification."
              image={lan}
              url="#"
            />
            <ProjectCard
              title="Carbon Credit Transfer"
              description="Decentralized carbon trading platform."
              image={lan}
              url="#"
            />
            <ProjectCard
              title="AnyNFT"
              description="Artisan-friendly NFT marketplace."
              image={lan}
              url="#"
            />
          </div>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Ongoing Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <OngoingProjectCard
              title="Bitcoin Transaction Analysis"
              description="Advanced analytics for cryptocurrency transactions"
            />
            <OngoingProjectCard
              title="Carbon Credit Transfer"
              description="Blockchain-based platform for carbon credit trading"
            />
            <OngoingProjectCard title="AnyNFT" description="Blockchain solution for digital asset management" />
            <OngoingProjectCard
              title="Smart Contract Assessment"
              description="Vulnerability detection and security analysis"
            />
            <OngoingProjectCard title="Sustainable Blockchain" description="Energy-efficient private blockchain network" />
            <OngoingProjectCard title="Zero Day Attack Detection" description="Advanced security threat detection system" />
          </div>
        </div>
      </section>

      {/* Future Development */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Future Development</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <Building2 className="h-6 w-6" /> Industry Outcomes
              </h3>
              <ul className="space-y-4">
                <FutureItem>Advanced Blockchain Platform Development</FutureItem>
                <FutureItem>Comprehensive Security Assessment Framework</FutureItem>
                <FutureItem>Publication of Security Advisories</FutureItem>
              </ul>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <GraduationCap className="h-6 w-6" /> Academic Outcomes
              </h3>
              <ul className="space-y-4">
                <FutureItem>Security Threat Taxonomy for Blockchain</FutureItem>
                <FutureItem>Zero Day Attack Vector Detection</FutureItem>
                <FutureItem>Enhanced Blockchain Education Programs</FutureItem>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

// const ProjectCard = ({ title, description, image }: { title: string; description: string; image: string }) => {
//   return (
//     <Card title={title} description={description} image={image}>
//       <Button className="mt-4">Learn More</Button>
//     </Card>
//   )
// }

const OngoingProjectCard = ({ title, description }: { title: string; description: string }) => (
  <Card>
    <CardContent className="p-6">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </CardContent>
  </Card>
)

const FutureItem = ({ children }: { children: React.ReactNode }) => (
  <li className="flex items-center gap-2">
    <ChevronRight className="h-5 w-5 text-primary" />
    <span className="text-muted-foreground">{children}</span>
  </li>
)