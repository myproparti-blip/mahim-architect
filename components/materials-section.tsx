"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { Reveal } from "./reveal"
import { cn } from "@/lib/utils"

const materials = [
    {
        id: "pistachio",
        name: "Pistachio",
        description: "Luxurious pistachio green velvet with rich texture and depth",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop",
        backgroundImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
        tint: "bg-green-50",
    },
    {
        id: "lunar",
        name: "Lunar",
        description: "Sophisticated lunar gray with subtle metallic undertones",
        image: "https://images.unsplash.com/photo-1585399572869-10e5e97ab0c4?w=500&h=500&fit=crop",
        backgroundImage: "https://images.unsplash.com/photo-1600607687644-c173886a8553?w=1200&h=800&fit=crop",
        tint: "bg-gray-100",
    },
    {
        id: "martian",
        name: "Martian",
        description: "Bold martian red with warm terracotta influences",
        image: "https://images.unsplash.com/photo-1578500494198-246f612d03b3?w=500&h=500&fit=crop",
        backgroundImage: "https://images.unsplash.com/photo-1600573472550-8090b5e9e8de?w=1200&h=800&fit=crop",
        tint: "bg-red-50",
    },
    {
        id: "obsidian",
        name: "Obsidian",
        description: "Deep obsidian black with sleek modern aesthetic",
        image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=500&h=500&fit=crop",
        backgroundImage: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&h=800&fit=crop",
        tint: "bg-gray-900",
    },
    {
        id: "sage",
        name: "Sage",
        description: "Calming sage green with natural, organic essence",
        image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=500&h=500&fit=crop",
        backgroundImage: "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=1200&h=800&fit=crop",
        tint: "bg-emerald-50",
    },
    {
        id: "ivory",
        name: "Ivory",
        description: "Creamy ivory with timeless elegance and warmth",
        image: "https://images.unsplash.com/photo-1567521464027-f127ff144326?w=500&h=500&fit=crop",
        backgroundImage: "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&h=800&fit=crop",
        tint: "bg-amber-50",
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
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="materials">
            <div className="absolute inset-0 z-0">
                {materials.map((material) => (
                    <motion.div
                        key={material.id}
                        className="absolute inset-0"
                        initial={{ opacity: material.id === activeMaterial ? 1 : 0 }}
                        animate={{ opacity: material.id === activeMaterial ? 1 : 0 }}
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                    >
                        <Image
                            src={material.backgroundImage || "/placeholder.svg"}
                            alt={`${material.name} interior scene`}
                            fill
                            className="object-cover"
                            priority
                        />
                    </motion.div>
                ))}
                <div className="absolute inset-0 bg-black/20" />
            </div>

            <div className="absolute top-[120px] left-0 right-0 z-10">
                <div className="container-custom text-white">
                    <Reveal>
                        <div>
                            <AnimatePresence mode="wait">
                                <motion.h2
                                    key={activeMaterial}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="font-bold mb-6 text-7xl"
                                >
                                    <AnimatedText text={activeMaterialData.name} delay={0.2} />
                                </motion.h2>
                            </AnimatePresence>
                            <p className="text-lg text-white/90 leading-relaxed max-w-2xl">
                                Every piece begins with the finest materials, carefully selected for their beauty, durability, and
                                sustainable origins. Our craftspeople honor traditional techniques while embracing modern precision.
                            </p>
                        </div>
                    </Reveal>
                </div>
            </div>

            <div className="absolute bottom-8 left-8 z-10 max-w-md hidden">
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

            <div className="absolute bottom-8 left-0 right-0 z-10">
                <div className="container-custom">
                    <Reveal delay={0.1}>
                        <div className="flex flex-wrap justify-center gap-3">
                            {materials.map((material) => (
                                <motion.button
                                    key={material.id}
                                    className={cn(
                                        "px-6 py-3 rounded-full font-medium transition-all duration-300 backdrop-blur-md",
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
