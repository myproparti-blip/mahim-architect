"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { ProjectCard } from "./project-card"
import { QuickLookModal } from "./quick-look-modal"
import { Reveal } from "./reveal"
import { ArrowRight } from "lucide-react"

const featuredProjects = [
    {
        id: "1",
        name: "Contemporary Residence",
        price: "Completed 2024",
        image:  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=800&fit=crop",
        badge: "New" as const,
        materials: ["Modern Design", "Sustainable Materials"],
        swatches: [
            { name: "Steel Grey", color: "#4A5568" },
            { name: "Natural Oak", color: "#8B6F47" },
            { name: "Glass", color: "#E8F4F8" },
        ],
        quickLookImages: [
            "https://images.unsplash.com/photo-1512917774080-9264f475eabf?w=600&h=800&fit=crop",
            "https://images.unsplash.com/photo-1600566753086-00f18a0cc482?w=600&h=800&fit=crop",
            "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=800&fit=crop",
        ],
        dimensions: "3,500 sq meters",
        highlights: [
            "Energy-efficient climate control",
            "Natural lighting integration",
            "Open-plan living spaces",
            "Eco-friendly materials",
        ],
    },
    {
        id: "2",
        name: "Urban Office Complex",
        price: "In Progress",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=800&fit=crop",
        badge: "New" as const,
        materials: ["Minimalist Design", "Green Building"],
        swatches: [
            { name: "Concrete", color: "#7A8186" },
            { name: "Glass Blue", color: "#4A90E2" },
            { name: "White", color: "#F5F5F5" },
        ],
        quickLookImages: [
            "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&h=800&fit=crop",
            "https://images.unsplash.com/photo-1442880405537-666d75641c1d?w=600&h=800&fit=crop",
            "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=600&h=800&fit=crop",
        ],
        dimensions: "15,000 sq meters",
        highlights: [
            "Smart building automation",
            "Collaborative workspaces",
            "Sustainable urban design",
            "Advanced ventilation systems",
        ],
    },
    {
        id: "3",
        name: "Luxury Villa Design",
        price: "Planning Phase",
        image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=800&fit=crop",
        badge: "Limited" as const,
        materials: ["Contemporary Style", "Premium Finishes"],
        swatches: [
            { name: "Marble White", color: "#F8F6F1" },
            { name: "Bronze", color: "#8B4513" },
            { name: "Charcoal", color: "#36454F" },
        ],
        quickLookImages: [
            "https://images.unsplash.com/photo-1499696010180-025ef6d5a621?w=600&h=800&fit=crop",
            "https://images.unsplash.com/photo-1600566753086-00f18a0cc482?w=600&h=800&fit=crop",
            "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=800&fit=crop",
        ],
        dimensions: "2,800 sq meters",
        highlights: [
            "Luxury spa and wellness area",
            "Private infinity pool",
            "Home automation system",
            "Premium marble finishes",
        ],
    },
]

export function FeaturedProducts() {
    const [selectedProduct, setSelectedProduct] = useState<any>(null)
    const [isModalOpen, setIsModalOpen] = useState(false)

    const handleQuickLook = (project: any) => {
        setSelectedProduct(project)
        setIsModalOpen(true)
    }

    const closeModal = () => {
        setIsModalOpen(false)
        setSelectedProduct(null)
    }

    return (
        <section className="py-24 lg:py-40 bg-white" id="featured-products">
            <div className="container mx-auto px-4 lg:px-8">
                <div className="mb-20">
                    <Reveal>
                        <div className="flex items-end justify-between mb-6">
                            <div>
                                <motion.div
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6 }}
                                    viewport={{ once: true }}
                                >
                                    <p className="text-amber-600 font-semibold tracking-widest text-sm mb-4 uppercase">Our Portfolio</p>
                                    <h2 className="text-5xl lg:text-6xl text-neutral-900 font-bold">
                                        Featured <span className="text-neutral-400">Projects</span>
                                    </h2>
                                </motion.div>
                            </div>
                            <motion.div
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <Link href="/portfolio">
                                    <motion.button
                                        className="hidden lg:flex items-center gap-2 px-8 py-3 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.95 }}
                                    >
                                        View All <ArrowRight size={18} />
                                    </motion.button>
                                </Link>
                            </motion.div>
                        </div>
                        <motion.p
                            className="text-lg text-neutral-600 max-w-2xl leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.1 }}
                            viewport={{ once: true }}
                        >
                            Discover our most celebrated architectural projects, each meticulously crafted with exceptional attention to
                            detail and innovative design excellence.
                        </motion.p>
                    </Reveal>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12">
                    {featuredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.8,
                                delay: index * 0.15,
                                ease: [0.21, 0.47, 0.32, 0.98],
                            }}
                            viewport={{ once: true, margin: "-100px" }}
                            className="h-full"
                        >
                            <ProjectCard project={project} onQuickLook={handleQuickLook} />
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    className="flex justify-center mt-16 lg:hidden"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Link href="/portfolio" className="w-full sm:w-auto">
                        <motion.button
                            className="w-full sm:w-auto px-10 py-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-lg transition-all duration-300 hover:shadow-lg flex items-center justify-center gap-2"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            View All Projects <ArrowRight size={18} />
                        </motion.button>
                    </Link>
                </motion.div>
            </div>

            <QuickLookModal product={selectedProduct} isOpen={isModalOpen} onClose={closeModal} />
        </section>
    )
}
