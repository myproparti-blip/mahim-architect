"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Zap } from "lucide-react"
import { BlurPanel } from "./blur-panel"

interface QuickLookModalProps {
  product: any
  isOpen: boolean
  onClose: () => void
}

export function QuickLookModal({ product, isOpen, onClose }: QuickLookModalProps) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [selectedSwatch, setSelectedSwatch] = useState(0)

  if (!product) return null

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % product.quickLookImages.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + product.quickLookImages.length) % product.quickLookImages.length)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

          {/* Modal */}
          <motion.div
            className="relative w-full max-w-4xl max-h-[90vh] overflow-hidden"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          >
            <BlurPanel className="bg-white backdrop-blur-md border border-neutral-200/40 shadow-2xl">
              <div className="grid grid-cols-1 lg:grid-cols-5 gap-0">
                {/* Image Gallery - Left Side (3 columns) */}
                <div className="lg:col-span-2 p-8 border-r border-neutral-100">
                  <div className="relative aspect-square rounded-2xl overflow-hidden mb-6 bg-neutral-100">
                    <Image
                      src={product.quickLookImages[currentImageIndex] || "https://images.unsplash.com/photo-1600581573870-d178a90f170e?w=600&h=800&fit=crop"}
                      alt={`${product.name} - Image ${currentImageIndex + 1}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      priority={currentImageIndex === 0}
                      unoptimized={false}
                    />

                    {/* Navigation Arrows */}
                    {product.quickLookImages.length > 1 && (
                      <>
                        <button
                          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-200"
                          onClick={prevImage}
                        >
                          <ChevronLeft size={20} />
                        </button>
                        <button
                          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm p-2 rounded-full hover:bg-white transition-all duration-200"
                          onClick={nextImage}
                        >
                          <ChevronRight size={20} />
                        </button>
                      </>
                    )}
                  </div>

                  {/* Image Thumbnails */}
                  <div className="flex gap-2">
                    {product.quickLookImages.map((image: string, index: number) => (
                      <button
                        key={index}
                        className={`relative w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-200 ${
                          currentImageIndex === index ? "border-neutral-900" : "border-neutral-200"
                        }`}
                        onClick={() => setCurrentImageIndex(index)}
                      >
                        <Image
                           src={image || "https://images.unsplash.com/photo-1600581573870-d178a90f170e?w=600&h=800&fit=crop"}
                           alt={`${product.name} thumbnail ${index + 1}`}
                           fill
                           className="object-cover"
                           sizes="64px"
                           unoptimized={false}
                         />
                      </button>
                    ))}
                  </div>
                </div>

                {/* Product Details - Right Side (3 columns) */}
                <div className="lg:col-span-3 p-6 lg:p-8 flex flex-col">
                  {/* Header with Close Button */}
                  <div className="flex items-start justify-between mb-6">
                    <div className="flex-1">
                      <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4">{product.name}</h2>
                      <div className="flex flex-wrap gap-2 mb-0">
                        {product.materials.map((material: string, idx: number) => (
                          <span key={idx} className="px-3 py-1.5 bg-amber-100 text-amber-900 text-xs font-bold rounded-lg">
                            {material}
                          </span>
                        ))}
                      </div>
                    </div>
                    <motion.button
                      className="p-2 hover:bg-neutral-100 rounded-full transition-colors duration-200 flex-shrink-0 ml-4"
                      onClick={onClose}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <X size={24} className="text-neutral-900" />
                    </motion.button>
                  </div>

                  <div className="space-y-4 flex-1">
                    {/* Status Badge and Price */}
                    <div className="p-4 rounded-xl bg-gradient-to-r from-amber-50 via-orange-50 to-amber-50 border border-amber-200">
                      <p className="text-xs font-bold text-amber-900 uppercase tracking-wide mb-2">PROJECT STATUS</p>
                      <div className="flex items-center justify-between">
                        <p className="text-xl font-bold text-neutral-900">{product.price}</p>
                        <span className="px-3 py-1 bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold rounded-lg transition-colors">
                          FEATURED
                        </span>
                      </div>
                    </div>

                    {/* Dimensions with Icon */}
                    <div className="p-4 rounded-xl bg-gradient-to-br from-neutral-50 to-slate-50 border border-neutral-200">
                      <div className="flex items-center gap-2 mb-2">
                        <div className="p-1.5 bg-amber-100 rounded-lg">
                          <Zap size={14} className="text-amber-600" />
                        </div>
                        <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wide">PROJECT SCALE</h4>
                      </div>
                      <p className="text-base font-bold text-neutral-900 ml-8">{product.dimensions}</p>
                    </div>

                    {/* Material Swatches */}
                    <div className="p-4 rounded-xl bg-gradient-to-br from-neutral-50 to-slate-50 border border-neutral-200">
                      <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wide mb-3">COLOR PALETTE</h4>
                      <div className="flex gap-2">
                        {product.swatches.map((swatch: any, index: number) => (
                          <motion.button
                            key={index}
                            className={`w-12 h-12 rounded-xl border-2 transition-all duration-200 relative group shadow-md ${
                              selectedSwatch === index ? "border-amber-600 scale-105" : "border-neutral-300 hover:border-amber-400"
                            }`}
                            style={{ backgroundColor: swatch.color }}
                            onClick={() => setSelectedSwatch(index)}
                            whileHover={{ scale: 1.05 }}
                          >
                            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 bg-neutral-900 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap pointer-events-none font-semibold">
                              {swatch.name}
                            </div>
                          </motion.button>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div className="p-4 rounded-xl bg-gradient-to-br from-blue-50 to-cyan-50 border border-blue-200">
                      <h4 className="text-xs font-bold text-neutral-900 uppercase tracking-wide mb-3 flex items-center gap-2">
                        <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                        PROJECT HIGHLIGHTS
                      </h4>
                      <ul className="space-y-1.5 text-xs">
                        <li className="flex items-start gap-2 text-neutral-700">
                          <span className="text-blue-600 font-bold flex-shrink-0 mt-0.5">•</span>
                          <span>Sustainably sourced materials</span>
                        </li>
                        <li className="flex items-start gap-2 text-neutral-700">
                          <span className="text-blue-600 font-bold flex-shrink-0 mt-0.5">•</span>
                          <span>Hand-finished precision</span>
                        </li>
                        <li className="flex items-start gap-2 text-neutral-700">
                          <span className="text-blue-600 font-bold flex-shrink-0 mt-0.5">•</span>
                          <span>Expert engineering</span>
                        </li>
                        <li className="flex items-start gap-2 text-neutral-700">
                          <span className="text-blue-600 font-bold flex-shrink-0 mt-0.5">•</span>
                          <span>Quality assured</span>
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* View Portfolio CTA */}
                  <Link href="/portfolio" onClick={onClose}>
                    <motion.button
                      className="w-full bg-gradient-to-r from-amber-600 to-amber-700 text-white py-3 rounded-xl font-bold text-sm hover:shadow-xl transition-all duration-300 mt-4"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Explore Full Portfolio
                    </motion.button>
                  </Link>
                </div>
              </div>
            </BlurPanel>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
