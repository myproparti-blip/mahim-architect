"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ClientLogos } from "@/components/client-logos"
import { Home, Sparkles, Award, CheckCircle, ChevronLeft, ChevronRight } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

export default function WelcomePage() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  const features = [
    {
      icon: Home,
      title: "Architectural Excellence",
      description: "Delivering world-class architectural solutions that blend functionality with aesthetics, creating spaces that tell stories and inspire generations"
    },
    {
      icon: Sparkles,
      title: "Innovative Design",
      description: "Cutting-edge designs that transform spaces and elevate living experiences through sustainable materials and forward-thinking concepts"
    },
    {
      icon: Award,
      title: "Award-Winning Team",
      description: "Recognized professionals with years of expertise in architectural design, BIM technology, and comprehensive project management"
    },
    {
      icon: CheckCircle,
      title: "Quality Assured",
      description: "Every project meets our rigorous standards of craftsmanship, precision, and attention to detail from concept to completion"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <main className="min-h-screen bg-gradient-to-b from-neutral-50 via-white to-neutral-50">
      <Header />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden px-4 py-20 md:py-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(217,119,6,0.08)_0%,transparent_50%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_60%_60%,rgba(180,83,9,0.08)_0%,transparent_50%)] pointer-events-none" />
        
        <motion.div 
          className="max-w-4xl mx-auto text-center relative z-10"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block px-4 py-2 mb-6 rounded-full bg-amber-100 border border-amber-300">
            <span className="text-sm font-medium text-amber-900">Welcome to Excellence</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6 text-neutral-900">
            About Mahim Architect
          </h1>
          
          <p className="text-lg md:text-xl text-neutral-600 mb-8 max-w-2xl mx-auto leading-relaxed">
            Transforming visions into magnificent architectural realities. We craft spaces that inspire, innovate, and endure through thoughtful design and precision engineering.
          </p>
          
          <motion.div
            className="flex flex-wrap gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
          >
            <button className="px-8 py-3 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium hover:shadow-lg hover:shadow-amber-600/50 transition-all duration-300 hover:scale-105">
              Explore Our Work
            </button>
            <button className="px-8 py-3 rounded-lg border-2 border-amber-600 text-amber-600 font-medium hover:bg-amber-50 transition-all duration-300">
              Get in Touch
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Features Grid */}
      <section className="relative px-4 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Why Choose Us</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              We combine artistic vision with technical expertise to deliver exceptional architectural solutions
            </p>
          </motion.div>

          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {features.map((feature, index) => {
              const Icon = feature.icon
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  onMouseEnter={() => setHoveredCard(index)}
                  onMouseLeave={() => setHoveredCard(null)}
                  className="relative group h-full"
                >
                  <div className="absolute inset-0 bg-amber-100 rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-300" />
                  
                  <div className="relative p-8 rounded-2xl bg-white border border-neutral-200 group-hover:border-amber-400 group-hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-amber-100 border border-amber-300 transition-all duration-300 flex-shrink-0 ${hoveredCard === index ? 'scale-110' : ''}`}>
                        <Icon className="w-6 h-6 text-amber-600" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-neutral-900 mb-2">{feature.title}</h3>
                        <p className="text-neutral-600 text-sm leading-relaxed">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative px-4 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { number: "250+", label: "Projects Completed" },
              { number: "15+", label: "Years Experience" },
              { number: "98%", label: "Client Satisfaction" },
              { number: "50+", label: "Awards Won" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center p-8 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300"
              >
                <div className="text-4xl md:text-5xl font-bold text-amber-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-neutral-600 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision Section */}
      <section className="relative px-4 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Our Vision & Mission</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Shaping the future of architecture through innovation, sustainability, and excellence
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-12 rounded-3xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Our Vision</h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                To be the globally recognized leader in architectural innovation, creating timeless spaces that harmonize human needs with environmental responsibility. We envision a world where architecture transcends aesthetics to become a catalyst for positive social and environmental change.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="p-12 rounded-3xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-2xl font-bold text-neutral-900 mb-6">Our Mission</h3>
              <p className="text-neutral-700 leading-relaxed mb-4">
                To deliver comprehensive architectural and design solutions that exceed expectations through meticulous planning, innovative thinking, and unwavering commitment to quality. We partner with clients to transform their visions into reality while maintaining the highest standards of professional excellence.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="relative px-4 py-20 md:py-28 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Our Core Values</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              The principles that guide our every decision and action
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Innovation",
                description: "Embracing cutting-edge technologies and forward-thinking methodologies to create architecture that leads the industry"
              },
              {
                title: "Integrity",
                description: "Maintaining the highest ethical standards in all client relationships and project deliverables"
              },
              {
                title: "Sustainability",
                description: "Designing with environmental consciousness and creating spaces that minimize ecological impact"
              },
              {
                title: "Collaboration",
                description: "Working seamlessly with clients, teams, and stakeholders to achieve shared vision and goals"
              },
              {
                title: "Excellence",
                description: "Pursuing perfection in every detail, from initial concept through final execution"
              },
              {
                title: "Creativity",
                description: "Pushing boundaries to discover unique solutions that set new standards in architectural design"
              }
            ].map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 rounded-2xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 hover:border-amber-400 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="text-xl font-bold text-neutral-900 mb-3">{value.title}</h3>
                <p className="text-neutral-700 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Clients Section */}
     
      {/* Our Clients Section */}
      <section className="relative px-4 py-20 md:py-28">
        <div className="max-w-6xl mx-auto">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Our Clients Mean The World To Us</h2>
            <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
              Trusted by leading organizations across diverse industries
            </p>
          </motion.div>

          {/* Unified Client Grid with Rich Logos */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
              {[
                { name: "Sarya Shiksha Abhyan", category: "Education", logo: "SSA" },
                { name: "Silver Group", category: "Industrial", logo: "SG" },
                { name: "OMG - Madhav Group", category: "Manufacturing", logo: "OMG" },
                { name: "Sudarshan Group", category: "Diversified", logo: "SG" },
                { name: "Ambaliya Buildcon", category: "Real Estate", logo: "AB" },
                { name: "Income Tax Department", category: "Government", logo: "ITD" },
                { name: "Bank of Baroda", category: "Banking", logo: "BoB" },
                { name: "Bank of India", category: "Banking", logo: "BoI" },
                { name: "DHFL", category: "Finance", logo: "DHFL" },
                { name: "LIC HFL", category: "Finance", logo: "LIC" },
                { name: "Aadhar Housing Finance", category: "Finance", logo: "AHF" },
                { name: "The Muthoot Group", category: "Finance & Jewellery", logo: "TMG" },
                { name: "The Sarvodaya Sahakari Bank", category: "Co-operative Banking", logo: "TSSB" },
                { name: "The Surat District Co-op Bank", category: "Co-operative", logo: "TSDCB" },
                { name: "Goyal Gases", category: "Industrial", logo: "GG" },
                { name: "JT Group", category: "Real Estate", logo: "JTG" },
                { name: "G.B. Vaghani Hospital", category: "Healthcare", logo: "GBVH" },
                { name: "Standard Road Makers", category: "Construction", logo: "SRM" }
              ].map((client, index) => {
                const LogoComponent = ClientLogos[client.logo as keyof typeof ClientLogos]
                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: (index % 5) * 0.1 }}
                    className="group relative rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-xl transition-all duration-300 overflow-hidden min-h-32 md:min-h-36 flex flex-col items-center justify-center p-4"
                  >
                    {/* Hover gradient background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    {/* Content */}
                    <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-center gap-3">
                      {/* Rich Logo */}
                      <div className="w-16 h-16 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        {LogoComponent && <LogoComponent />}
                      </div>
                      
                      {/* Client Name */}
                      <p className="text-xs md:text-sm font-semibold text-neutral-900 group-hover:text-amber-600 transition-colors duration-300 line-clamp-2">
                        {client.name}
                      </p>
                      
                      {/* Category */}
                      <p className="text-xs text-neutral-500 group-hover:text-amber-500 transition-colors duration-300">
                        {client.category}
                      </p>
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </div>
      </section>
      {/* CTA Section */}
      <section className="relative px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative p-12 rounded-3xl bg-amber-50 border border-amber-200 text-center overflow-hidden"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.05)_0%,transparent_70%)] pointer-events-none" />
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">Ready to Transform Your Vision?</h3>
              <p className="text-neutral-700 mb-8 text-lg">Let's collaborate to create architectural excellence that stands the test of time</p>
              <motion.a
                href="https://wa.me/917046127242"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-10 py-4 rounded-lg bg-amber-600 hover:bg-amber-700 text-white font-medium hover:shadow-lg hover:shadow-amber-600/50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Project
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}

interface ClientCarouselGroupProps {
  title: string
  clients: Array<{ name: string; category: string }>
  delay: number
}

function ClientCarouselGroup({ title, clients, delay }: ClientCarouselGroupProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const itemsPerPage = 5
  const maxIndex = Math.max(0, clients.length - itemsPerPage)

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className="relative"
    >
      {/* Section Title */}
      <div className="mb-10 flex items-center justify-between">
        <h3 className="text-2xl md:text-3xl font-bold text-neutral-900">{title}</h3>
        <div className="flex gap-2">
          <button
            onClick={prevSlide}
            className="p-2.5 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-600 transition-colors duration-300 border border-amber-300 hover:border-amber-400"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2.5 rounded-full bg-amber-100 hover:bg-amber-200 text-amber-600 transition-colors duration-300 border border-amber-300 hover:border-amber-400"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Carousel Container */}
      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-6"
          initial={false}
          animate={{ x: -currentIndex * (100 / itemsPerPage) + "%" }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
        >
          {clients.map((client, index) => (
            <motion.div
              key={index}
              className="flex-shrink-0 w-full md:w-1/5"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="group relative h-40 md:h-48 rounded-2xl bg-gradient-to-br from-white to-neutral-50 border-2 border-neutral-200 hover:border-amber-400 overflow-hidden transition-all duration-300 cursor-pointer flex flex-col items-center justify-center p-6"
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 40px rgba(217, 119, 6, 0.15)"
                }}
              >
                {/* Gradient Background on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-amber-400/5 to-orange-400/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Decorative Element */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-amber-200/20 to-orange-200/20 rounded-full blur-2xl -mr-8 -mt-8" />

                {/* Content */}
                <div className="relative z-10 text-center flex flex-col items-center justify-center h-full">
                  {/* Logo Placeholder */}
                  <div className="mb-4 w-16 h-16 rounded-lg bg-gradient-to-br from-amber-100 to-orange-100 flex items-center justify-center border border-amber-300 group-hover:scale-110 transition-transform duration-300">
                    <div className="text-2xl font-bold text-amber-700">
                      {client.name.charAt(0)}
                    </div>
                  </div>

                  {/* Client Name */}
                  <h4 className="font-bold text-neutral-900 text-sm md:text-base group-hover:text-amber-600 transition-colors duration-300 line-clamp-2">
                    {client.name}
                  </h4>

                  {/* Category */}
                  <p className="text-xs md:text-sm text-neutral-500 mt-2 group-hover:text-amber-500 transition-colors duration-300">
                    {client.category}
                  </p>
                </div>

                {/* Hover Border Effect */}
                <div className="absolute inset-0 rounded-2xl border-2 border-amber-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-8">
        {Array.from({ length: maxIndex + 1 }).map((_, index) => (
          <motion.button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`transition-all duration-300 rounded-full ${
              index === currentIndex
                ? "bg-amber-600 w-3 h-3"
                : "bg-neutral-300 hover:bg-neutral-400 w-2 h-2"
            }`}
            whileHover={{ scale: 1.2 }}
          />
        ))}
      </div>
    </motion.div>
  )
}
