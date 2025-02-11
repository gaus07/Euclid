import Link from "next/link"
import { Button } from "@/components/ui/button"
import ColourfulText from "@/components/ui/colourful-text"
import { redirect } from "next/navigation"

const Home = async() => {
  // const session = await auth()
  // if (!session) redirect("/sign-in") 

  return (
    <div className="min-h-screen font-sans">
      {/* Hero Section */}
      <section className="py-16 md:py-24">
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
            {/* <div className="relative"> */}
              {/* <img
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-hxNe18EgbBqPP7KGTcdiz7aA7zSeCI.png"
                alt="Blockchain visualization"
                className="rounded-2xl shadow-2xl w-full"
              /> */}
              {/* <div className="absolute -z-10 top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div> */}
              {/* <div className="absolute -z-10 bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl"></div> */}
            {/* </div> */}
          {/* </div> */}
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

const FeatureCard = ({ title, description }: {title: string, description: string}) => (
  <div className="p-6 rounded-xl bg-secondary hover:shadow-lg transition-shadow">
    <h3 className="text-xl font-semibold text-primary mb-3">{title}</h3>
    <p className="text-secondary-foreground">{description}</p>
  </div>
)

const StatCard = ({ number, label }: {number: string, label: string}) => (
  <div className="text-center p-6">
    <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">{number}</div>
    <div className="text-secondary-foreground">{label}</div>
  </div>
)

