"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { Eye, Share2 } from "lucide-react"

interface ProjectCardProps {
    project: {
        id: string
        name: string
        price: string
        image: string
        badge?: "New" | "Back in stock" | "Limited"
        materials: string[]
        swatches: { name: string; color: string }[]
        quickLookImages: string[]
        dimensions: string
    }
    onQuickLook: (project: any) => void
}

export function ProjectCard({ project, onQuickLook }: ProjectCardProps) {
    return (
        <div className="group relative bg-white overflow-hidden rounded-lg border border-neutral-200/80 hover:border-neutral-300 transition-all duration-500 hover:shadow-2xl">
            {/* Badge */}
            {project.badge && (
                <div className="absolute top-3 left-3 z-20">
                    <span
                        className={cn(
                            "px-2.5 py-1 text-xs font-semibold rounded-full backdrop-blur-sm inline-block",
                            project.badge === "New" && "bg-emerald-500/95 text-white",
                            project.badge === "Back in stock" && "bg-blue-500/95 text-white",
                            project.badge === "Limited" && "bg-amber-500/95 text-white",
                        )}
                    >
                        {project.badge}
                    </span>
                </div>
            )}

            {/* Project Image Container */}
            <div className="relative overflow-hidden bg-neutral-100" style={{ aspectRatio: "8/7" }}>
                <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover group-hover:scale-103 transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    priority
                />

                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-black/45 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center gap-4">
                    <button
                        className="p-2.5 bg-white rounded-full text-neutral-900 hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
                        onClick={() => onQuickLook(project)}
                        aria-label="Quick look"
                    >
                        <Eye size={18} />
                    </button>
                    <button
                        className="p-2.5 bg-white rounded-full text-neutral-900 hover:bg-amber-500 hover:text-white transition-all duration-300 transform hover:scale-110 shadow-lg"
                        aria-label="Share"
                    >
                        <Share2 size={18} />
                    </button>
                </div>
            </div>

            {/* Project Info */}
            <div className="p-3.5 bg-white space-y-2.5">
                <div className="space-y-1">
                    <h3 className="text-sm font-semibold text-neutral-900 group-hover:text-amber-600 transition-colors duration-300 line-clamp-1">
                        {project.name}
                    </h3>
                    <p className="text-xs text-neutral-500 font-normal line-clamp-1">{project.materials.join(" • ")}</p>
                </div>

                <div className="flex items-center justify-between">
                    {/* Status */}
                    <div className="flex items-center gap-1.5">
                        <div className="w-1 h-1 rounded-full bg-amber-500"></div>
                        <span className="text-xs font-medium text-neutral-700">{project.price}</span>
                    </div>

                    {/* Color Swatches */}
                    <div className="flex gap-1.5">
                        {project.swatches.slice(0, 2).map((swatch) => (
                            <div
                                key={swatch.name}
                                className="w-3.5 h-3.5 rounded-full border border-neutral-300 cursor-pointer hover:border-neutral-500 transition-all hover:scale-110"
                                style={{ backgroundColor: swatch.color }}
                                title={swatch.name}
                            />
                        ))}
                    </div>
                </div>

                {/* CTA Button */}
                <button
                    className="w-full py-2 bg-neutral-900 hover:bg-amber-600 text-white font-semibold text-xs rounded-md transition-all duration-300 hover:shadow-md active:scale-95"
                    onClick={() => onQuickLook(project)}
                >
                    View Details
                </button>
            </div>
        </div>
    )
}
