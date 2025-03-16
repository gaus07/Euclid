"use client"

import { motion } from "framer-motion"
import { Building2, GraduationCap } from "lucide-react"
import { useState } from "react"
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { ProjectCard } from "@/components/ProjectCard"
import { cn } from "@/lib/utils"

// Project data
const currentProjects = [
  {
    id: "demonstrationofblockchainvulnerabilities",
    title: "Demonstration of Blockchain Vulnerabilities",
    shortDescription:
      "Demonstrating blockchain vulnerabilities through reentrancy and DoS attack simulations.",
    fullDescription: `The project aims to demonstrate vulnerabilities in blockchain, specifically Reentrancy Attacks and Denial-of-Service (DoS) Attacks in smart contracts deployed on the Ethereum Sepolia test network. It includes the creation of attack contracts, vulnerable contracts, and preventive contracts to showcase how these attacks occur and how they can be mitigated. The project involves designing a UI that allows users to select attack types and view execution results. The study emphasizes the importance of securing blockchain-based systems and implementing best practices to prevent such exploits.`,
    image: "/images/Training_Events/image1.jpg",
    technologies: ["Solidity", "JavaScript", "Ether.js", "EtherScan", "Remix", "MetaMask (Crypto Wallet)", "HTML/CSS"],
    team: "4",
    status: "Completed",
    timeline: "2023",
  },
]

const ongoingProjects = [
  {
    id: "carbon",
    title: "Carbon Credit Transfer",
    description: "Blockchain-based platform for carbon credit trading",
    status: "active",
  },
  {
    id: "anynft",
    title: "AnyNFT",
    description: "Blockchain solution for digital asset management",
    status: "active",
  },
  {
    id: "smartcontract",
    title: "Smart Contract Assessment",
    description: "Vulnerability detection and security analysis",
    status: "active",
  },
  {
    id: "sustainable",
    title: "Sustainable Blockchain",
    description: "Energy-efficient private blockchain network",
    status: "active",
  },
]

const industryOutcomes = [
  {
    id: "advanced-platform",
    title: "Advanced Blockchain Platform Development",
    description: "Building next-generation blockchain infrastructure with enhanced security and scalability features.",
    details: `Our research focuses on developing blockchain platforms that address the critical challenges of scalability, security, and energy efficiency. We're exploring novel consensus mechanisms that maintain decentralization while significantly reducing energy consumption.

    Key innovations include sharding techniques that allow for parallel transaction processing, zero-knowledge proof implementations for enhanced privacy, and cross-chain interoperability protocols. Our platform development emphasizes enterprise-grade performance without compromising on the core principles of decentralization and security.`,
  },
  {
    id: "security-framework",
    title: "Comprehensive Security Assessment Framework",
    description: "Developing robust security assessment methodologies for blockchain applications and smart contracts.",
    details: `Our security assessment framework provides a systematic approach to identifying vulnerabilities in blockchain applications and smart contracts. The framework combines static analysis, dynamic testing, formal verification, and manual code review to provide comprehensive coverage.

    We've developed specialized tools for detecting common vulnerability patterns in smart contracts, including reentrancy attacks, integer overflow/underflow, and front-running vulnerabilities. The framework also addresses protocol-level security concerns such as consensus vulnerabilities and network-level attacks.`,
  },
  {
    id: "security-advisories",
    title: "Publication of Security Advisories",
    description: "Regular publication of security insights and best practices for the blockchain community.",
    details: `Our security advisory program aims to elevate the security posture of the entire blockchain ecosystem through knowledge sharing and proactive vulnerability disclosure. We regularly publish detailed analyses of emerging threats, vulnerability patterns, and mitigation strategies.

    The program includes quarterly security reports, technical whitepapers on specialized topics, and practical guides for developers. We also maintain a responsible disclosure program that allows security researchers to report vulnerabilities in a structured manner.`,
  },
]

const academicOutcomes = [
  {
    id: "threat-taxonomy",
    title: "Security Threat Taxonomy for Blockchain",
    description: "Creating a comprehensive classification system for blockchain security threats and vulnerabilities.",
    details: `Our security threat taxonomy project is developing a standardized classification system for blockchain security threats and vulnerabilities. This taxonomy will serve as a common language for researchers, developers, and security professionals to discuss and address security challenges.

    The taxonomy categorizes threats based on multiple dimensions including the affected architectural layer, attack vectors, potential impact, and mitigation complexity. We're working with industry partners to ensure the taxonomy reflects real-world security challenges and can be practically applied in security assessments.`,
  },
  {
    id: "zero-day",
    title: "Zero Day Attack Vector Detection",
    description: "Research and development of advanced detection mechanisms for unknown security threats.",
    details: `Our zero-day attack vector detection research focuses on identifying previously unknown security vulnerabilities in blockchain systems. We're developing advanced anomaly detection techniques that can identify suspicious patterns that may indicate novel attack vectors.

    The research combines machine learning approaches with formal verification methods to create a hybrid system capable of detecting both known and unknown threat patterns. Our preliminary results show promising capabilities in identifying subtle anomalies that could represent new classes of attacks.`,
  },
  {
    id: "education",
    title: "Enhanced Blockchain Education Programs",
    description: "Development of cutting-edge educational content and training programs for blockchain technology.",
    details: `Our blockchain education initiative aims to address the critical skills gap in the blockchain industry by developing comprehensive, up-to-date educational resources and training programs. We're creating modular curriculum components that can be adapted for different audiences, from technical developers to business decision-makers.

    The program includes hands-on laboratories, case studies based on real-world implementations, and specialized tracks for security, development, and blockchain economics. We're partnering with educational institutions to integrate these materials into formal academic programs.`,
  },
]

export default function Projects() {
  const [activeTab, setActiveTab] = useState<"industry" | "academic">("industry")

  return (
    <div className="min-h-screen font-sans">
      <div className="absolute w-full h-full bg-gradient-to-b from-[var(--gradient-start)] to-background/80 opacity-90 -z-50"></div>

      {/* Current Projects Carousel */}
      <section className="py-10">
        <div className="container mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold mb-4 text-center"
          >
            Our Projects
          </motion.h1>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent>
              {currentProjects.map((project) => (
                <CarouselItem key={project.id} className="md:basis-1/2 lg:basis-1/3 pl-4">
                  <ProjectCard project={project} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <div className="flex justify-center mt-8">
              <CarouselPrevious className="mr-2" />
              <CarouselNext className="ml-2" />
            </div>
          </Carousel>
        </div>
      </section>

      {/* Ongoing Projects */}
      <section className="py-10 bg-secondary/5">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Ongoing Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ongoingProjects.map((project) => (
              <OngoingProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                status={project.status}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Future Development */}
      <section className="py-16 bg-gradient-to-b from-secondary/30 to-background">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">Future Development</h2>

          {/* Tabs */}
          <div className="flex justify-center mb-12">
            <div className="inline-flex rounded-lg p-1 bg-secondary/20 backdrop-blur-sm">
              <button
                onClick={() => setActiveTab("industry")}
                className={cn(
                  "px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                  activeTab === "industry" ? "bg-primary text-white shadow-lg" : "hover:bg-primary/10",
                )}
              >
                <span className="flex items-center gap-2">
                  <Building2 className="h-4 w-4" />
                  Industry Outcomes
                </span>
              </button>
              <button
                onClick={() => setActiveTab("academic")}
                className={cn(
                  "px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200",
                  activeTab === "academic" ? "bg-primary text-white shadow-lg" : "hover:bg-primary/10",
                )}
              >
                <span className="flex items-center gap-2">
                  <GraduationCap className="h-4 w-4" />
                  Academic Outcomes
                </span>
              </button>
            </div>
          </div>

          {/* Content */}
          <div className="max-w-3xl mx-auto">
            {activeTab === "industry" ? (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                {industryOutcomes.map((outcome, index) => (
                  <OutcomeAccordion
                    key={outcome.id}
                    title={outcome.title}
                    description={outcome.description}
                    details={outcome.details}
                    index={index}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="space-y-4"
              >
                {academicOutcomes.map((outcome, index) => (
                  <OutcomeAccordion
                    key={outcome.id}
                    title={outcome.title}
                    description={outcome.description}
                    details={outcome.details}
                    index={index}
                  />
                ))}
              </motion.div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

const OngoingProjectCard = ({
  title,
  description,
  status,
}: {
  title: string
  description: string
  status: string
}) => (
  <motion.div
  className="overflow-hidden rounded-lg group cursor-pointer bg-emerald-50/10 shadow-sm backdrop-filter backdrop-blur-md transition-all duration-300"
  whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg -z-10" />
    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-md z-10" />
    <div className="relative z-20 p-6 h-full flex flex-col">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-xl font-semibold text-primary">{title}</h3>
        <span className="px-2 py-1 text-xs font-medium rounded-full bg-green-500/10 text-green-500">
          {status === "active" ? "Active" : "Planned"}
        </span>
      </div>
      <p className="text-black text-sm flex-grow">{description}</p>
    </div>
  </motion.div>
)

const OutcomeAccordion = ({
  title,
  description,
  details,
  index,
}: {
  title: string
  description: string
  details: string
  index: number
}) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Accordion
      type="single"
      collapsible
      className="overflow-hidden rounded-lg group cursor-pointer bg-emerald-50/10 shadow-sm backdrop-filter backdrop-blur-md transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl -z-10" />
      <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-md z-10" />
      <AccordionItem value={`item-${index}`} className="border-b-0 relative z-20">
        <AccordionTrigger className="px-6 py-4 hover:no-underline group">
          <div className="flex flex-col items-start text-left">
            <h3 className="text-lg font-semibold text-primary group-hover:text-primary/80">{title}</h3>
            <p className="text-black text-sm">{description}</p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-4">
          <div className="prose prose-sm dark:prose-invert">
            {details.split("\n\n").map((paragraph, i) => (
              <p key={i} className="mb-4 text-black">
                {paragraph}
              </p>
            ))}
          </div>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  </motion.div>
)

