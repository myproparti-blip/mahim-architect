"use client"

import { useRef, useState, useEffect } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { Reveal } from "./reveal"
import { ArrowRight } from "lucide-react"

const collections = [
    {
        id: "residential",
        name: "RESIDENTIAL",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=480&h=600&fit=crop",
        count: "12 projects",
        description: "Modern homes & villas",
        category: "Residential",
    },
    {
        id: "commercial",
        name: "COMMERCIAL",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=480&h=600&fit=crop",
        count: "8 projects",
        description: "Office & retail spaces",
        category: "Commercial",
    },
    {
        id: "hospitality",
        name: "HOSPITALITY",
        image: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=480&h=600&fit=crop",
        count: "6 projects",
        description: "Hotels & restaurants",
        category: "Hospitality",
    },
    {
        id: "institutional",
        name: "INSTITUTIONAL",
        image: "https://images.unsplash.com/photo-1577720643272-265f434f2d2f?w=480&h=600&fit=crop",
        count: "5 projects",
        description: "Educational & cultural",
        category: "Institutional",
    },
    {
        id: "mixed-use",
        name: "MIXED-USE",
        image: "https://images.unsplash.com/photo-1486718448742-163732cd3d3d?w=480&h=600&fit=crop",
        count: "7 projects",
        description: "Multi-functional spaces",
        category: "Mixed-Use",
    },
    {
        id: "renovation",
        name: "RENOVATION",
        image: "https://images.unsplash.com/photo-1622157227541-6d27e6d0e1f7?w=480&h=600&fit=crop",
        count: "9 projects",
        description: "Heritage & restoration",
        category: "Heritage",
    },
    {
        id: "landscape",
        name: "LANDSCAPE",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=480&h=600&fit=crop",
        count: "4 projects",
        description: "Outdoor & gardens",
        category: "Landscape",
    },
    {
        id: "interior",
        name: "INTERIOR DESIGN",
        image: "https://images.unsplash.com/photo-1512828573330-fbdfe5f0b0a0?w=480&h=600&fit=crop",
        count: "10 projects",
        description: "Bespoke interiors",
        category: "Interior",
    },
    {
        id: "sustainable",
        name: "SUSTAINABLE",
        image: "https://images.unsplash.com/photo-1554224311-beee415c15cb?w=480&h=600&fit=crop",
        count: "6 projects",
        description: "Green buildings",
        category: "Sustainable",
    },
    {
        id: "urban-planning",
        name: "URBAN PLANNING",
        image: "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?w=480&h=600&fit=crop",
        count: "3 projects",
        description: "City development",
        category: "Urban",
    },
]

export function CollectionStrip() {
    const containerRef = useRef<HTMLDivElement>(null)
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [scrollPosition, setScrollPosition] = useState(0)
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    })

    const x = useTransform(scrollYProgress, [0, 1], [0, -100])

    const itemWidth = 320 // w-80 + gap
    const itemGap = 32 // gap-8
    const totalItemWidth = itemWidth + itemGap
    const visibleCards = 4 // Show 4 cards initially
    const visibleWidth = visibleCards * itemWidth + (visibleCards - 1) * itemGap // Width of 4 cards + gaps
    const totalScrollableWidth = collections.length * itemWidth + (collections.length - 1) * itemGap
    const maxDrag = Math.max(0, totalScrollableWidth - visibleWidth)
    const sidePadding = 80 // Padding on both sides

    // Auto scroll effect - only within the visible cards
    useEffect(() => {
        const interval = setInterval(() => {
            setScrollPosition((prev) => {
                const nextPosition = prev + totalItemWidth
                // Loop back to start when reaching end
                if (nextPosition >= maxDrag) {
                    return 0
                }
                return nextPosition
            })
        }, 3000)

        return () => clearInterval(interval)
    }, [maxDrag, totalItemWidth])

    return (
        <section ref={containerRef} className="py-24 lg:py-40 overflow-hidden bg-gradient-to-b from-white to-neutral-50">
            <div className="mb-20">
                <Reveal>
                    <div className="container mx-auto px-6 lg:px-12">
                        <div className="max-w-3xl">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6 }}
                                viewport={{ once: true }}
                            >
                                <p className="text-amber-600 font-semibold tracking-widest text-sm mb-4 uppercase">Our Expertise</p>
                                <h2 className="text-5xl lg:text-6xl text-neutral-900 mb-6 font-bold">Project Categories</h2>
                                <p className="text-lg text-neutral-600 leading-relaxed">
                                    Explore our diverse range of architectural services, each representing our commitment to design excellence and
                                    client satisfaction across various project types.
                                </p>
                            </motion.div>
                        </div>
                    </div>
                </Reveal>
            </div>

            <div className="relative overflow-hidden">
                <motion.div
                    ref={scrollContainerRef}
                    className="flex gap-8"
                    animate={{ x: -scrollPosition }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                >
                    {/* Left empty space */}
                    <div className="flex-shrink-0 w-20 lg:w-32" />

                    {collections.map((collection, index) => (
                        <motion.div
                            key={collection.id}
                            className="flex-shrink-0 w-80 group cursor-pointer"
                            whileHover={{ y: -10 }}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.05, duration: 0.5 }}
                        >
                            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden mb-5 shadow-lg group-hover:shadow-2xl transition-all duration-500">
                                <motion.div
                                    className="relative w-full h-full"
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.5 }}
                                >
                                    <Image
                                        src={collection.image}
                                        alt={collection.name}
                                        fill
                                        className="object-cover"
                                        sizes="340px"
                                        priority={index < 3}
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-400" />
                                </motion.div>

                                <div className="absolute inset-0 flex flex-col items-center justify-center">
                                    <motion.div
                                        className="text-center text-white"
                                        initial={{ opacity: 0.8, scale: 1 }}
                                        whileHover={{ opacity: 1, scale: 1.05 }}
                                        transition={{ duration: 0.3 }}
                                    >
                                        <h3 className="text-2xl lg:text-3xl font-bold tracking-wide mb-2 drop-shadow-lg">{collection.name}</h3>
                                        <p className="text-xs lg:text-sm font-medium opacity-90 drop-shadow-md">{collection.count}</p>
                                    </motion.div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <p className="text-neutral-600 text-sm font-medium">{collection.description}</p>
                                <Link href={`/portfolio?category=${encodeURIComponent(collection.name)}`}>
                                    <motion.button
                                        className="w-full py-2.5 bg-neutral-900 hover:bg-amber-600 text-white font-semibold text-sm rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group/btn"
                                        whileHover={{ scale: 1.02 }}
                                        whileTap={{ scale: 0.98 }}
                                    >
                                        Explore
                                        <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-300" />
                                    </motion.button>
                                </Link>
                            </div>
                        </motion.div>
                    ))}

                    {/* Right empty space */}
                    <div className="flex-shrink-0 w-20 lg:w-32" />
                </motion.div>
            </div>
        </section>
    )
}
