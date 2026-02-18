"use client"

import { motion } from "framer-motion"
import { TeamMemberCard } from "./team-member-card"
import { Separator } from "@/components/ui/separator"

const teamMembers = [
  {
    id: "1",
    name: "Ashish Patel",
    title: "Founder & Principal Architect",
    image: "/images/ashish-patel.jpg",
    bio: "With 15+ years of experience, Ashish leads Mahim with visionary architecture that blends sustainability with contemporary design. His creative leadership since 2009 has shaped the firm's philosophy of design excellence.",
    experience: "15+ Years in Architecture & Design",
    specialties: [
      "Residential Design",
      "Commercial Architecture",
      "Sustainable Design",
      "Urban Planning",
      "Interior Design",
    ],
    social: {
      linkedin: "https://linkedin.com",
      email: "mahimhr01@gmail.com",
      phone: "+91 82383 77000",
    },
    featured: true,
  },
  {
    id: "2",
    name: "Priya Sharma",
    title: "Design Director",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800&fit=crop",
    bio: "Leading creative direction across all projects, Priya ensures design excellence through innovative concepts and meticulous execution. Her expertise in contemporary design drives our creative vision.",
    experience: "12+ Years in Design Leadership",
    specialties: ["Interior Design", "Landscape Architecture", "Color Theory", "3D Visualization"],
    social: {
      linkedin: "https://linkedin.com",
      email: "priya@mahim.com",
    },
  },
  {
    id: "3",
    name: "Rajesh Kumar",
    title: "Senior Architect",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=800&fit=crop",
    bio: "With expertise in large-scale commercial projects, Rajesh brings technical precision and innovative solutions to complex architectural challenges.",
    experience: "10+ Years in Commercial Architecture",
    specialties: ["Commercial Design", "Project Management", "CAD", "BIM Modeling"],
    social: {
      linkedin: "https://linkedin.com",
      email: "rajesh@mahim.com",
    },
  },
  {
    id: "4",
    name: "Sophia Anderson",
    title: "Landscape Architect",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=800&fit=crop",
    bio: "Specializing in sustainable landscape design, Sophia creates outdoor spaces that enhance environmental quality while providing aesthetic excellence.",
    experience: "8+ Years in Landscape Design",
    specialties: ["Landscape Design", "Sustainability", "Ecological Planning", "Water Features"],
    social: {
      linkedin: "https://linkedin.com",
      email: "sophia@mahim.com",
    },
  },
  {
    id: "5",
    name: "Dev Patel",
    title: "Project Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop",
    bio: "Overseeing day-to-day operations with regular client engagement, Dev ensures quality control and timely delivery across all projects.",
    experience: "7+ Years in Project Management",
    specialties: ["Client Relations", "Quality Control", "Timeline Management", "Team Coordination"],
    social: {
      linkedin: "https://linkedin.com",
      email: "dev@mahim.com",
    },
  },
  {
    id: "6",
    name: "Maya Singh",
    title: "Interior Designer",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=800&fit=crop",
    bio: "Creative interior design specialist focused on creating spaces that balance aesthetics with functionality and client vision.",
    experience: "6+ Years in Interior Design",
    specialties: ["Interior Design", "Space Planning", "Furniture Selection", "Material Sourcing"],
    social: {
      linkedin: "https://linkedin.com",
      email: "maya@mahim.com",
    },
  },
]

export function KeyPersonGrid() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-amber-600 font-semibold tracking-widest text-sm mb-4 uppercase">Our Team</p>
          <h2 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Talented <span className="italic font-light text-neutral-600">Professionals</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            A diverse team of architects, designers, and specialists united by a passion for creating exceptional spaces
            and pushing the boundaries of design innovation.
          </p>
        </motion.div>

        <Separator className="mb-16" />

        {/* Featured Member (Ashish Patel) */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <TeamMemberCard {...teamMembers[0]} featured={true} />
          </motion.div>
        </div>

        <Separator className="mb-16" />

        {/* Team Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          {teamMembers.slice(1).map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <TeamMemberCard {...member} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}