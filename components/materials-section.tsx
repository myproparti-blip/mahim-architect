"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Reveal } from "./reveal"
import { cn } from "@/lib/utils"

const materials = [
    {
        id: "pistachio",
        name: "Pistachio",
        description: "Luxurious pistachio green velvet with rich texture and depth",
        fullDescription: "This stunning pistachio finish combines natural inspiration with modern sophistication. Perfect for creating warm, inviting spaces with a contemporary edge.",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop",
        backgroundImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
        tint: "bg-green-50",
        colorCode: "#9DC183",
    },
    {
        id: "lunar",
        name: "Lunar",
        description: "Sophisticated lunar gray with subtle metallic undertones",
        fullDescription: "A refined gray tone inspired by moonlit elegance. This versatile finish brings sophistication to any architectural project with its understated metallic shimmer.",
        image: "https://images.unsplash.com/photo-1585399572869-10e5e97ab0c4?w=500&h=500&fit=crop",
        backgroundImage: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop",
        tint: "bg-gray-100",
        colorCode: "#A9A9A9",
    },
    {
        id: "martian",
        name: "Martian",
        description: "Bold martian red with warm terracotta influences",
        fullDescription: "Inspired by Martian landscapes, this bold red brings warmth and energy to any space. Combines earthy terracotta tones with modern design sensibilities.",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop",
        backgroundImage: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=800&fit=crop",
        tint: "bg-red-50",
        colorCode: "#C41E3A",
    },
    {
        id: "obsidian",
        name: "Obsidian",
        description: "Deep obsidian black with sleek modern aesthetic",
        fullDescription: "Pure, elegant darkness with a polished finish. Obsidian black creates dramatic contrast and timeless sophistication in contemporary architecture.",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop",
        backgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
        tint: "bg-gray-900",
        colorCode: "#0B0E11",
    },
    {
        id: "sage",
        name: "Sage",
        description: "Calming sage green with natural, organic essence",
        fullDescription: "Inspired by natural herb gardens, sage green brings calm and harmony to spaces. A perfect blend of nature and modern design.",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=500&fit=crop",
        backgroundImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
        tint: "bg-emerald-50",
        colorCode: "#6B8E23",
    },
    {
        id: "ivory",
        name: "Ivory",
        description: "Creamy ivory with timeless elegance and warmth",
        fullDescription: "A timeless classic that never goes out of style. Ivory brings light and spaciousness while maintaining sophisticated warmth.",
        image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=500&h=500&fit=crop",
        backgroundImage: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&h=800&fit=crop",
        tint: "bg-amber-50",
        colorCode: "#FFFFF0",
    },
]

export function MaterialsSection() {
    const [activeMaterial, setActiveMaterial] = useState("pistachio")

    const activeMaterialData = materials.find((m) => m.id === activeMaterial) || materials[0]

    const AnimatedText = ({ text, delay = 0 }: { text: string; delay?: number }) => {
        return (
            <span>
                {text.split("").map((char, index) => (
                    <motion.span
                        key={index}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 0.5,
                            delay: delay + index * 0.03,
                            ease: [0.21, 0.47, 0.32, 0.98],
                        }}
                        style={{ display: char === " " ? "inline" : "inline-block" }}
                    >
                        {char === " " ? "\u00A0" : char}
                    </motion.span>
                ))}
            </span>
        )
    }

    return (
        <section className="relative min-h-screen md:min-h-screen flex items-center justify-center overflow-hidden" id="materials">
            {/* Background Images */}
            <div className="absolute inset-0 z-0">
                {materials.map((material) => (
                    <motion.div
                        key={material.id}
                        className="absolute inset-0 w-full h-full"
                        initial={{ opacity: material.id === activeMaterial ? 1 : 0 }}
                        animate={{ opacity: material.id === activeMaterial ? 1 : 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <img
                            src={material.backgroundImage || "/placeholder.svg"}
                            alt={`${material.name} interior scene`}
                            className="w-full h-full object-cover"
                            loading="eager"
                        />
                    </motion.div>
                ))}
                {/* Overlay - darker on mobile for better text contrast */}
                <div className="absolute inset-0 bg-black/30 sm:bg-black/20" />
            </div>

            <div className="absolute top-[120px] left-0 right-0 z-10 px-4 sm:px-0">
                <div className="container-custom text-white">
                    <Reveal>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                            <div className="lg:col-span-2">
                                <AnimatePresence mode="wait">
                                    <motion.h2
                                        key={activeMaterial}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -20 }}
                                        transition={{ duration: 0.3, ease: "easeInOut" }}
                                        className="font-bold mb-6 text-4xl sm:text-5xl lg:text-7xl"
                                    >
                                        <AnimatedText text={activeMaterialData.name} delay={0.2} />
                                    </motion.h2>
                                </AnimatePresence>
                                <AnimatePresence mode="wait">
                                    <motion.p
                                        key={`desc-${activeMaterial}`}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.3 }}
                                        className="text-base sm:text-lg text-white/90 leading-relaxed max-w-2xl"
                                    >
                                        {activeMaterialData.description}
                                    </motion.p>
                                </AnimatePresence>
                            </div>

                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={`card-${activeMaterial}`}
                                    initial={{ opacity: 0, x: 20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -20 }}
                                    transition={{ duration: 0.3 }}
                                    className="lg:col-span-1 bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 h-fit"
                                >
                                    <h3 className="text-sm font-semibold text-white/70 uppercase tracking-wider mb-4">Material Details</h3>
                                    <p className="text-sm text-white/80 leading-relaxed">
                                        {activeMaterialData.fullDescription}
                                    </p>
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </Reveal>
                </div>
            </div>

            <div className="absolute bottom-24 sm:bottom-8 left-4 sm:left-8 z-10 max-w-md hidden">
                <Reveal delay={0.3}>
                    <blockquote className="pl-0 py-4">
                        <p className="text-xl text-white leading-relaxed italic lg:text-base font-medium">
                            "We believe in creating furniture that transcends trends—pieces that become more beautiful with age,
                            carrying stories and memories through generations."
                        </p>
                        <footer className="mt-4 text-sm text-white/70">— KATACHI Studio</footer>
                    </blockquote>
                </Reveal>
            </div>

            <div className="absolute bottom-8 left-0 right-0 z-10 px-4">
                <div className="container-custom">
                    <Reveal delay={0.1}>
                        <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
                            {materials.map((material) => (
                                <motion.button
                                    key={material.id}
                                    className={cn(
                                        "px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base rounded-full font-medium transition-all duration-300 backdrop-blur-md",
                                        activeMaterial === material.id
                                            ? "bg-white text-neutral-900"
                                            : "bg-white/20 text-white hover:bg-white/30",
                                    )}
                                    onClick={() => setActiveMaterial(material.id)}
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    {material.name}
                                </motion.button>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    )
}
