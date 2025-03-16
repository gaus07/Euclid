"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import ColourfulText from "@/components/ui/colourful-text"
import { redirect } from "next/navigation"
import { AcceptRequest } from "@/lib/adminQuery"
import { getIronSession } from "iron-session"
import { sessionOptions } from "@/lib/sessionOptions"

import {motion} from "framer-motion"

const Home = () => {
  // const session = await auth()
  // if (!session) redirect("/sign-in") 

  // const run = await AcceptRequest("gausnoori07@gmail.com")
  // console.log(run);

  // const cookiesData = await cookies();
  // const session = await getIronSession(cookiesData, sessionOptions);

  // console.log(session); // Should now contain user data

  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <section className="py-16 md:py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          {/* <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"> */}
            <div className="space-y-8 flex flex-col items-center">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-black leading-tight text-center">
              C<ColourfulText text="E" />NTER OF S<ColourfulText text="U" />STAINABLE AND SE<ColourfulText text="C" />URE <br /> B<ColourfulText text="L" />OCKCHAIN <ColourfulText text="D" />EVELOPMENT
              </h1>
              <p className="text-lg sm:text-xl text-secondary-foreground ">
                Pioneering ethical blockchain solutions for a secure, sustainable future at Somaiya Vidyavihar
                University.
              </p>
              <Button size="lg" asChild>
                <Link href="/projects">Get the best solutions</Link>
              </Button>
            </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <h2 className="text-2xl sm:text-3xl font-bold text-center text-primary mb-12">
            Get the right protection to keep moving forward
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              title="Blockchain Security"
              description="Advanced security measures to protect your blockchain assets and transactions."
            />
            <FeatureCard
              title="Sustainable Solutions"
              description="Eco-friendly blockchain implementations that minimize environmental impact."
            />
            <FeatureCard
              title="Research Excellence"
              description="Cutting-edge research in blockchain technology and its applications."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-24 ">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <StatCard number="₹1 Cr" label="Seed Grant Funding" />
            <StatCard number="5+" label="Active Projects" />
            <StatCard number="2" label="Publications Accepted" />
            <StatCard number="67+" label="Trained Participants" />
          </div>
        </div>
      </section>
    </div>
  )
}
export default Home;

export const FeatureCard = ({ title, description }: {title: string, description: string}) => (
  <motion.div
    className="overflow-hidden rounded-lg group cursor-pointer bg-emerald-50/10 shadow-sm backdrop-filter backdrop-blur-md transition-all duration-300"
    whileHover={{ y: -5 }}
    transition={{ duration: 0.2 }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-2xl -z-10" />
    <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 backdrop-blur-md z-10" />
    <div className="relative z-20 p-6 h-full flex flex-col">
      <h3 className="text-xl font-semibold text-primary mb-3">{title}</h3>
      <p className="text-secondary-foreground">{description}</p>
    </div>
  </motion.div>
)

export const StatCard = ({ number, label }: {number: string, label: string}) => (
  <div className="text-center p-6">
    <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{number}</div>
    <div className="text-secondary-foreground">{label}</div>
  </div>
)

