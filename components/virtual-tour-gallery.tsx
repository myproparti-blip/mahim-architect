"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { VirtualTourCard } from "./virtual-tour-card"
import { VirtualTourModal } from "./virtual-tour-modal"
import { Separator } from "@/components/ui/separator"
import { FloorSectionModal } from "./floor-section-modal"

const tourProjects = [
  {
    id: "1",
    title: "PUNITBHAI LUXURIOUS BUNGLOW",
    category: "Luxury",
    image: "/images/Virtual Tour/PARFUL-GF-FF.jpg",
    panoramaImage: "/images/Virtual Tour/thumbnail.jpg",
    badge: "Featured" as const,
    location: "Ahmedabad",
    year: "2024",
    images360: [
      "/images/Virtual Tour/PARFUL-GF-FF.jpg",
      "https://images.unsplash.com/photo-1600566753086-00f18a0cc482?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600573472550-8090b5e9e8de?w=800&h=600&fit=crop",
      
    ],
    floorSections: [
      {
        title: "GROUND-FIRST FLOOR",
        image: "/images/Virtual Tour/PARFUL-GF-FF.jpg",
      },
      {
        title: "SECOND-THIRD FLOOR",
        image: "/images/Virtual Tour/Screenshot_7.jpg",
      },
    ],
   
  },
  {
    id: "3",
    title: "PLESENT INTERIOR WORK ",
    category: "Modern",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    panoramaImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=600&fit=crop",
    badge: "Featured" as const,
    images360: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18a0cc482?w=800&h=600&fit=crop",
    ],
    floorSections: [
      {
        title: "Interior Design",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      },
     
    ],
    
    },
    {
      id: "4",
      title: "LUXURIOUS BUNGALOW ",
      category: "Luxury",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      panoramaImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=600&fit=crop",
      images360: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600566753086-00f18a0cc482?w=800&h=600&fit=crop",
      ],
     
      floorSections: [
        {
            parentTitle: "PUNITBHAI LUXURIOUS BUNGLOW",
          title: "PunitBhai Interior GF-FF",
          image: "/images/Virtual Tour/pu.jpg",
        },
        {
          
            parentTitle: "PUNITBHAI LUXURIOUS BUNGLOW",
          title: "PunitBhai Interior SF-TF",
          image: "/images/Virtual Tour/PARFUL-GF-FF.jpg",
        },
      ],
     
    },
  {
    id: "5",
    title: "CLASSIC HOME DESIGN ",
    category: "Classic",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    panoramaImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=600&fit=crop",
    images360: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18a0cc482?w=800&h=600&fit=crop",
    ],
    floorSections: [
      {
        title: "Living Room",
        image: "/images/Virtual Tour/PARFUL-GF-FF.jpg",
      },
      {
        title: "Master Bedroom 1",
        image: "/images/Virtual Tour/PARFUL-GF-FF.jpg",
      },
      {
        title: "Master Bedroom 2",
        image: "/images/Virtual Tour/PARFUL-GF-FF.jpg",
      },
      {
        title: "Kitchen",
        image: "/images/Virtual Tour/PARFUL-GF-FF.jpg",
      },
      {
        title: "Bedroom 1",
        image: "/images/Virtual Tour/PARFUL-GF-FF.jpg",
      },
      {
        title: "Bedroom 2",
        image: "/images/Virtual Tour/PARFUL-GF-FF.jpg",
      },
    ],
    
    },
    {
      id: "6",
      title: "MODERN INTERIOR - THE CANDLEWOOD ",
      category: "Modern",
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      panoramaImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=600&fit=crop",
      badge: "Featured" as const,
      images360: [
        "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
        "https://images.unsplash.com/photo-1600566753086-00f18a0cc482?w=800&h=600&fit=crop",
      ],
      floorSections: [
        {
          title: "Bedroom Interior",
          image: "/images/Virtual Tour/PARFUL-GF-FF.jpg",
        },
        {
          title: "Bedroom-2 Interior",
          image: "/images/Virtual Tour/PARFUL-GF-FF.jpg",
        },
        {
          title: "Bedroom-3 Interior",
          image: "/images/Virtual Tour/PARFUL-GF-FF.jpg",
        },
        {
          title: "Living Sitting",
          image: "/images/Virtual Tour/PARFUL-GF-FF.jpg",
        },
        {
          title: "Kitchen Dining",
          image: "/images/Virtual Tour/PARFUL-GF-FF.jpg",
        },
      ],
      
    },
  {
    id: "7",
    title: "CONTEMPORY HOUSE ",
    category: "Contemporary",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    panoramaImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=600&fit=crop",
    images360: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18a0cc482?w=800&h=600&fit=crop",
    ],
    floorSections: [
      {
        title: "Ground–First Floor Bedroom",
        image: "/images/Virtual Tour/thumbnail01.jpg",
      },
      {
        title: "Living Room Interior",
        image: "/images/Virtual Tour/thumbnail-1.jpg",
      },
      {
        title: "Children Room",
        image: "/images/Virtual Tour/thumbnail-2.jpg",
      },
      {
        title: "Bedroom One",
        image: "/images/Virtual Tour/thumbnail-3.jpg",
      },
      {
        title: "Kitchen Interior",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      },
    ],
  },
  {
    id: "8",
    title: "NEW INTERIOR WORK ",
    category: "Modern",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    panoramaImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=600&fit=crop",
    images360: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18a0cc482?w=800&h=600&fit=crop",
    ],
    floorSections: [
      {
        title: "Ground Floor Bedroom",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      },
      {
        title: "Living Room Interior",
        image: "/images/Virtual Tour/PARFUL-GF-FF.jpg",
      },
      {
        title: "Bedroom Two",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      },
      {
        title: "Bedroom One",
        image: "/images/Virtual Tour/PARFUL-GF-FF.jpg",
      },
      {
        title: "Kitchen Interior",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      },
      {
        title: "Bedroom Three",
        image: "/images/Virtual Tour/PARFUL-GF-FF.jpg",
      },
    ],
  },
  {
    id: "9",
    title: "LUXURIOUS FLAT ",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    panoramaImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=600&fit=crop",
    images360: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18a0cc482?w=800&h=600&fit=crop",
    ],
    floorSections: [
      {
        title: "Jivraj Bhai Interiordata",
        image: "/images/Virtual Tour/PARFUL-GF-FF.jpg",
      },
    ],
  },
  {
    id: "10",
    title: "TOP LUXURIOUS PENT HOUSE ",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    panoramaImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=600&fit=crop",
    badge: "Featured" as const,
    images360: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18a0cc482?w=800&h=600&fit=crop",
    ],
    floorSections: [
      {
        title: "Modern Bedroom Interior",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      },
      {
        title: "Luxurious Bedroom Interior",
        image: "/images/Virtual Tour/PARFUL-GF-FF.jpg",
      },
      {
        title: "Modern Kitchen Dining Design",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      },
      {
        title: "Living Room",
        image: "/images/Virtual Tour/PARFUL-GF-FF.jpg",
      },
    ],
  },
  {
    id: "11",
    title: "DREAM HOUSE ",
    category: "Modern",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    panoramaImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=600&fit=crop",
    images360: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18a0cc482?w=800&h=600&fit=crop",
    ],
    floorSections: [
      {
        title: "Kitchen Interior",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      },
      {
        title: "Living Room Interior",
        image: "/images/Virtual Tour/PARFUL-GF-FF.jpg",
      },
    ],
  },
  {
    id: "12",
    title: "PACIFIC HOMES ",
    category: "Modern",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    panoramaImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=600&fit=crop",
    images360: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18a0cc482?w=800&h=600&fit=crop",
    ],
    floorSections: [
      {
        title: "Big Unit",
        image: "/images/Virtual Tour/thumbnail-311.jpg",
      },
      {
        title: "Small Unit",
        image: "/images/Virtual Tour/PARFUL-GF-FF.jpg",
      },
    ],
  },
  {
    id: "13",
    title: "LATEST INTERIOR DESIGN",
    category: "Modern",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    panoramaImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=600&fit=crop",
    badge: "Featured" as const,
    images360: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18a0cc482?w=800&h=600&fit=crop",
    ],
    floorSections: [
      {
        title: "Kitchen Interior",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      },
      {
        title: "Living Room Interior",
        image: "/images/Virtual Tour/PARFUL-GF-FF.jpg",
      },
    ],
  },
  {
    id: "14",
    title: "ANKITBHAI BUNGLOW UMRA",
    category: "Luxury",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
    panoramaImage: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1600&h=600&fit=crop",
    images360: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1600566753086-00f18a0cc482?w=800&h=600&fit=crop",
    ],
    floorSections: [
      {
        title: "BEDROOM1",
        image: "/images/Virtual Tour/BEDROOM1.jpg",
      },
      {
        title: "BEDROOM2",
        image: "/images/Virtual Tour/PARFUL-GF-FF.jpg",
      },
      {
        title: "BEDROOM3",
        image: "/images/Virtual Tour/BEDROOM3.jpg",
      },
      {
        title: "BEDROOM4",
        image: "/images/Virtual Tour/thumbnail-2-1.jpg",
      },
      {
        title: "DINNING",
        image: "/images/Virtual Tour/dinning.jpg",
      },
      {
        title: "LIVINGROOM",
        image: "/images/Virtual Tour/livingroom.jpg",
      },
      {
        title: "KITCHEN",
        image: "/images/Virtual Tour/kitchen.jpg",
      },
    ],
  },
]

export function VirtualTourGallery() {
  const [selectedTour, setSelectedTour] = useState<(typeof tourProjects)[0] | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isFloorModalOpen, setIsFloorModalOpen] = useState(false)

  const handleViewTour = (project: (typeof tourProjects)[0]) => {
     // Check if project has floor sections
     if ("floorSections" in project && project.floorSections) {
       setSelectedTour(project)
       setIsFloorModalOpen(true)
     } else {
       setSelectedTour(project)
       setIsModalOpen(true)
     }
   }

  return (
    <section className="py-20 bg-gradient-to-b from-white to-neutral-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <p className="text-amber-600 font-semibold tracking-widest text-sm mb-4 uppercase">Explore Our Works</p>
          <h2 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            360° <span className="italic font-light text-neutral-600">Virtual Tours</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            Immerse yourself in our most spectacular architectural projects. Navigate through every room and explore the
            intricate details in stunning 360° panoramic views.
          </p>
        </motion.div>

        <Separator className="mb-12" />

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {tourProjects.map((project, index) => (
            <VirtualTourCard
              key={project.id}
              {...project}
              onViewTour={() => handleViewTour(project)}
            />
          ))}
        </div>


      </div>

      {/* Modal */}
      <VirtualTourModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        tour={selectedTour ? {
          ...selectedTour,
          description: "Experience this architectural masterpiece in full 360° panoramic view.",
        } : null}
      />

      {/* Floor Section Modal */}
      <FloorSectionModal
        isOpen={isFloorModalOpen}
        onClose={() => setIsFloorModalOpen(false)}
        project={selectedTour && "floorSections" in selectedTour ? (selectedTour as any) : null}
      />
    </section>
  )
}