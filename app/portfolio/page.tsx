"use client"

import { useState } from "react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import Image from "next/image"
import { ChevronLeft, ChevronRight, X } from "lucide-react"

interface Property {
  id: number
  name: string
  category: string
  location: string
  surfaceArea: string
  client?: string
  thumbnail: string
  images: string[]
  description: string
}

const DEMO_PROPERTIES: Property[] = [
  {
    id: 1,
    name: "Surat Diamond Bourse",
    category: "Commercial, High rise commercial",
    location: "SURAT, GUJARAT",
    surfaceArea: "",
    thumbnail: "/images/portfolio/property-1-4.jpg",
    images: [
      
      "/images/portfolio/property-1-3.jpg",
      "/images/portfolio/property-1-4.jpg",
    ],
    description: "Surat Diamond Bourse Office Interior Design As a leading role of Best Interior Designer, we design Diamond Office in Surat Diamond Bourse (SDB) the largest office building in this world located at Surat, Gujarat, India. With our knowledge and expertise team at Mahim Architect, we create a unique Diamond office interior design that is reflect every aspect of diamond business.",
  },
  {
    id: 2,
    name: "ANTILIA SKY",
    category: "Residential",
    location: "VARIAV, SURAT, GUJARAT.",
    surfaceArea: "",
    thumbnail: "/images/portfolio/RIVERFRONT-min.jpg",
    images: [
      "/images/portfolio/RIVERFRONT_COMP.jpg",
      "/images/portfolio/RIVERFRONT-min.jpg",
    ],
    description: "Modern high-rise apartment complex featuring spacious units, contemporary design, and community spaces.",
  },
  {
    id: 3,
    name: "Crystal Luxuria",
    category: "Highrise Residential Project",
    location: "Surat, Gujarat",
    surfaceArea: "3,77,900 SQ.FT.",
    thumbnail: "/images/portfolio/013_GATE_FRONT_TOP.jpg",
    images: [
      "/images/portfolio/013_GATE_FRONT_TOP.jpg",
      
    ],
    description: "Elegant residential development with sophisticated architecture and premium living spaces.",
  },
  {
    id: 4,
    name: "PRAGATI THE WORLD",
    category: "Commercial",
    location: "Surat, Gujarat",
    surfaceArea: "",
    thumbnail: "/images/portfolio/Cam-01-New-16-10-2022-02.jpg",
    images: [
      "/images/portfolio/Cam-01-New-16-10-2022-02.jpg",
      
    ],
    description: "Modern commercial complex with architectural excellence and green spaces.",
  },
  {
    id: 5,
    name: "IT PARK 2",
    category: "Commercial",
    location: "YOGI CHOWK, NANA VARACCHA, SURAT, GUJARAT.",
    surfaceArea: "",
    thumbnail: "/images/portfolio/IT-PARK-2-1.jpeg",
    images: [
      "/images/portfolio/IT-PARK-2-1.jpeg",
         ],
    description: "Modern commercial complex with office spaces and retail outlets.",
  },
  {
    id: 6,
    name: "Vesu Bunglow",
    category: "BUNGLOW",
    location: "VESU, SURAT",
    client: "RAJESH MODI",
    surfaceArea: "",
    thumbnail: "/images/portfolio/RESIZE.jpg",
    images: [
      "/images/portfolio/RESIZE.jpg",
    ],
    description: "Spacious bungalow with modern design, landscaped gardens, and luxurious amenities.",
  },
  {
    id: 7,
    name: "Emerald Gardens",
    category: "BUNGLOW",
    location: "UTTRAN, SURAT",
    client: "MANUBHAI",
    surfaceArea: "",
    thumbnail: "/images/portfolio/FINAL.jpg",
    images: [
      "/images/portfolio/FINAL.jpg",
      "/images/portfolio/FINAL-870x434.jpg",
      
    ],
    description: "Luxurious bungalow with lush gardens, elegant interiors, and premium amenities for a serene living experience.",
  },
  {
    id: 8,
    name: "Hari Om Bungalow",
    category: "BUNGLOW, Residential",
    location: "Piplod, Surat, Gujarat",
    surfaceArea: "",
    thumbnail: "/images/portfolio/FINAL-ELEVATION-3D.jpg",
    images: [
      "/images/portfolio/FINAL-ELEVATION-3D.jpg",
      
    ],
    description: "Elegant bungalow with modern design, spacious interiors, and landscaped gardens for a luxurious lifestyle.",
  },
  {
    id: 9,
    name: "SAJAN BUNGLOW",
    category: "BUNGLOW",
    location: "SURAT, GUJARAT",
    client: "NITINBHAI",
    surfaceArea: "",
    thumbnail: "/images/portfolio/NITINBHAI-01.png",
    images: [
      "/images/portfolio/NITINBHAI-01.png",
      
    ],
    description: "Spacious bungalow with contemporary design, landscaped gardens, and premium amenities for a luxurious living experience.",
  },
  {
    id: 10,
    name: "AALEKH BUNGLOWS HOUSE, PLAYGROUND, GARDEN, GATE.",
    category: "Residential",
    location: "UTRAN, SURAT, GUJARAT,",
    surfaceArea: "",
    thumbnail: "/images/portfolio/HOUSE-1.jpeg",
    images: [
      "/images/portfolio/HOUSE-1.jpeg",
      "/images/portfolio/PLAYGROUND-1.jpeg",
      "/images/portfolio/GARGEN-1.jpeg",
      "/images/portfolio/GATE.jpg",
    ],
    description: "Spacious residential property with a house, playground, garden, and gate, designed for comfortable living and outdoor enjoyment.",
  },
  {
    id: 11,
    name: "MOGAL HOUSE DIAMOND MERCHANT OFFICE",
    category: "Commercial, CORPORATE HOUSE",
    location: "MINI BAZAR, VARACCHA, SURAT, GUJARAT.",
    surfaceArea: "",
    thumbnail: "/images/portfolio/MOGAL-HOUSE-MINI-BAZAR.jpeg",
    images: [
      "/images/portfolio/MOGAL-HOUSE-MINI-BAZAR.jpeg",
      
    ],
    description: "Modern commercial office space designed for a diamond merchant, featuring contemporary architecture and functional interiors.",
  },
  {
    id: 12,
    name: "PRAGATI HOMES PRAGATI HOMES GATE",
    category: "Residential",
    location: "SURAT, GUJARAT",
    surfaceArea: "",
    thumbnail: "/images/portfolio/9-scaled.jpg",
    images: [
      "/images/portfolio/9-scaled.jpg",
    ],
    description: "State-of-the-art commercial spaces with advanced infrastructure and modern design aesthetics.",
  },
  {
    id: 13,
    name: "SAHJANAND VIHA LIVING-DINING ROOM, LIVING-SITING ROOM, MASTER ROOM, PARENT ROOM",
    category: "Residential",
    location: "MOTA VARACCHA, SURAT, GUJARAT.",
    surfaceArea: "",
    thumbnail: "/images/portfolio/LIVING-DINING-ROOM-scaled.jpg",
    images: [
      "/images/portfolio/LIVING-DINING-ROOM-scaled.jpg",
      "/images/portfolio/LIVING-SITING-ROOM-scaled.jpg",
      "/images/portfolio/MASTER-ROOM-scaled.jpg",
      "/images/portfolio/PARENT-ROOM.jpg",
    ],
    description: "Spacious residential property featuring a living-dining room, living-sitting room, master bedroom, and parent room, designed for comfortable family living with modern amenities.",
  },
  {
    id: 14,
    name: "BELA GAAM SCHOOL MAIN GATE AND VILLAGE GATE",
    category: "SCHOOL",
    location: "BELA GAAM, SAURASHTRA, GUJARAT",
    surfaceArea: "",
    thumbnail: "/images/portfolio/BELA-GAAM-SCHOOL-MAIN-GATE-1.jpeg",
    images: [
      "/images/portfolio/BELA-GAAM-SCHOOL-MAIN-GATE-1.jpeg",
      
    ],
    description: "School main gate and village gate with traditional design and secure access.",
  },
  {
    id: 15,
    name: "OUR INTERIOR OFFICE IN SDB SURAT DIAMOND BOURSE",
    category: "Commercial",
    location: "KHAJOD, SURAT, GUJARAT.",
    surfaceArea: "",
    thumbnail: "/images/portfolio/SDB-INTERIOR-OFFICE.jpeg",
    images: [
      "/images/portfolio/SDB-INTERIOR-OFFICE.jpeg",
     
    ],
    description: "Modern office interior design located in Surat Diamond Bourse, featuring contemporary aesthetics and functional workspaces.",
  },
  {
    id: 16,
    name: "The Marina (Residential Skyscraper)",
    category: "Residential",
    location: "SURAT, GUJARAT",
    surfaceArea: "5,50,000 SQ.FT.",
    thumbnail: "/images/portfolio/abc.jpg",
    images: [
      "/images/portfolio/abc.jpg",
      
    ],
    description: "Luxurious residential skyscraper with panoramic views and sustainable living features.",
  },
  {
    id: 17,
    name: "Proposed Gujarat Housing Board",
    category: "Commercial",
    location: "AHMADABAD, GUJARAT",
    surfaceArea: "10,00,000 SQ.FT.",
    thumbnail: "/images/portfolio/Night-Cam-02.jpg",
    images: [
      "/images/portfolio/Night-Cam-02.jpg",
      "/images/portfolio/View_01-1.jpg",
      "/images/portfolio/Arial-View_01.jpg",
      "/images/portfolio/COVER-PAGE.jpg",
    ],
    description: "Proposed commercial development for Gujarat Housing Board, featuring modern architecture and sustainable design principles.",
  },
  {
    id: 18,
    name: "Proposed Varaccha Bank",
    category: "CORPORATE HOUSE",
    location: "SURAT, GUJARAT",
    surfaceArea: "30,000 SQ.FT.",
    thumbnail: "/images/portfolio/02.jpg",
    images: [
      "/images/portfolio/02.jpg",
      
    ],
    description: "Proposed corporate office building for Varaccha Bank, designed with contemporary architecture and functional workspaces.",
  },
  {
    id: 19,
    name: "Silver Luxuria",
    category: "Residential",
    location: "Surface Area",
    surfaceArea: "",
    thumbnail: "/images/portfolio/Cam_013_Night.jpg",
    images: [
      "/images/portfolio/Cam_013_Night.jpg",
     
    ],
    description: "Modern residential towers located along a riverfront, offering scenic views and luxurious amenities.",
  },
  {
    id: 20,
    name: "Ayodhya nagri",
    category: "Residential",
    location: "SURAT, GUJARAT",
    surfaceArea: "5,70,000 SQ.FT.",
    thumbnail: "/images/portfolio/Cam-25-Night-001.jpg",
    images: [
      "/images/portfolio/Cam-27-Garden.jpg",
      "/images/portfolio/Cam-06-Gate-Entry-01-600x600.jpg",
      "/images/portfolio/Cam-32.jpg",
      "/images/portfolio/Cam-23-Top.jpg",
    ],
    description: "Large-scale residential development with a mix of housing types, community amenities, and green spaces for a vibrant neighborhood.",
  },
  {
    id: 21,
    name: "Silver Status",
    category: "Highrise Residential Project",
    location: "SURAT, GUJARAT",
    surfaceArea: "2,47,800 SQ.FT.",
    thumbnail: "/images/portfolio/cam-001.jpg",
    images: [
      "/images/portfolio/cam-001.jpg",
    ],
    description: "Contemporary high-rise residential project with modern design, spacious units, and premium amenities for urban living.",
  },
  {
    id: 22,
    name: "JK ENCLAVE",
    category: "RESIDENTIAL LOW RISE BUILDING",
    location: "VAPI, GUJARAT",
    surfaceArea: "1,27,300 SQ.FT.",
    thumbnail: "/images/portfolio/Cam-02-03-02-19.jpg",
    images: [
      "/images/portfolio/Cam-02-03-02-19.jpg",
      
    ],
    description: "Bustling commercial hub with retail shops, offices, and entertainment venues.",
  },
  {
    id: 23,
    name: "Mahim Architect",
    category: "Commercial",
    location: "surat, gujarat",
    surfaceArea: "",
    thumbnail: "/images/portfolio/SHELL-ART.jpg",
    images: [
      "/images/portfolio/SHELL-ART.jpg",
    ],
    description: "Modern commercial office space designed for Mahim Architect, featuring contemporary architecture and functional workspaces.",
  },
  {
    id: 24,
    name: "Silent Zone",
    category: "Residential",
    location: "SURAT, GUJARAT",
    surfaceArea: "25,000 SQ.FT.",
    thumbnail: "/images/portfolio/corner_._compressed.jpg",
    images: [
      "/images/portfolio/corner_._compressed.jpg",
    ],
    description: "Tranquil residential community designed for peaceful living, featuring serene landscapes and quiet surroundings.",
  },
  {
    id: 25,
    name: "Shiv Villa",
    category: "Private Residences",
    location: "VAPI, GUJARAT",
    surfaceArea: "38,700 SQ.FT.",
    thumbnail: "/images/portfolio/aadi.jpg",
    images: [
      "/images/portfolio/aadi.jpg",
    ],
    description: "Ultra-luxury residential property with exclusive amenities and premium finishes.",
  },
  {
    id: 26,
    name: "PravinBhai Sahjanand",
    category: "BUNGLOW",
    location: "SURAT, GUJARAT",
    surfaceArea: "9000 SQ.FT.",
    thumbnail: "/images/portfolio/Sahjanad-Relish-3.jpg",
    images: [
      "/images/portfolio/Sahjanad-Relish-3.jpg",
    ],
    description: "Spacious bungalow with modern design, landscaped gardens, and luxurious amenities for a serene living experience.",
  },
  {
    id: 27,
    name: "Metal Art",
    category: "Art Installation",
    location: "India",
    surfaceArea: "",
    thumbnail: "/images/portfolio/METAL-ART.jpg",
    images: [
      "/images/portfolio/METAL-ART.jpg",
    ],
    description: "Large-scale metal art installation showcasing intricate craftsmanship and contemporary design, located in a public space for cultural enrichment.",
  },
  {
    id: 28,
    name: "Green Sanctuary",
    category: "URBAN DESIGN",
    location: "AHMEDABAD, GUJARAT",
    surfaceArea: "126 ACRES",
    thumbnail: "/images/portfolio/design2222.jpg",
    images: [
      "/images/portfolio/design2222.jpg",
    ],
    description: "Sustainable urban design project featuring green spaces, pedestrian-friendly pathways, and eco-friendly infrastructure for a vibrant community.",
  },
  {
    id: 29,
    name: "Rajkumar Umiyadham",
    category: "BUNGLOW",
    location: "SURAT, GUJARAT",
    surfaceArea: "8500 SQ.FT.",
    thumbnail: "/images/portfolio/RAJKUMAR-7.jpg",
    images: [
      "/images/portfolio/RAJKUMAR-34.jpg",
      "/images/portfolio/RAJKUMAR-33.jpg",
      "/images/portfolio/RAJKUMAR-30.jpg",
      "/images/portfolio/RAJKUMAR-29.jpg",
            "/images/portfolio/RAJKUMAR-27.jpg",
      "/images/portfolio/RAJKUMAR-26.jpg",

    ],
    description: "Spacious bungalow with contemporary design, landscaped gardens, and premium amenities for a luxurious living experience.",
  },
  {
    id: 30,
    name: "SCAN TO BIM FOR COMMERCIAL BUILDING",
    category: "Revit Bim",
    location: "MUMBAI, MAHARASTRA",
    surfaceArea: "8,000 sq ft",
    thumbnail: "/images/portfolio/MILLENIUM-SQUARE.jpg",
    images: [
      "/images/portfolio/MILLENIUM-SQUARE.jpg",
    ],
    description: "Grand cultural center showcasing traditional architecture and modern exhibition spaces.",
  },
  {
    id: 31,
    name: "Silver Maxima",
    category: "Interiors",
    location: "Surat, Gujarat",
    surfaceArea: "2500 SQ.FT.",
    thumbnail: "/images/portfolio/Silver-Maxima-4.jpg",
    images: [
      "/images/portfolio/Silver-Maxima-6.jpg",
      "/images/portfolio/Silver-Maxima-19.jpg",
      "/images/portfolio/Silver-Maxima-18.jpg",
      "/images/portfolio/Silver-Maxima-14.jpg",
      "/images/portfolio/Silver-Maxima-4.jpg",
      "/images/portfolio/Silver-Maxima-2.jpg",
      "/images/portfolio/Silver-Maxima-8.jpg",
      "/images/portfolio/Silver-Maxima-9.jpg",
      "/images/portfolio/Silver-Maxima-5.jpg",
      "/images/portfolio/Silver-Maxima-1.jpg",
    ],
    description: "Elegant interior design with premium finishes and contemporary aesthetics.",
  },
  {
    id: 32,
    name: "JK Avenue",
    category: "RESIDENTIAL LOW RISE BUILDING",
    location: "VAPI, GUJARAT",
    surfaceArea: "2,13,500 SQ.FT.",
    thumbnail: "/images/portfolio/Cam-0222.jpg",
    images: [
      "/images/portfolio/Cam-0222.jpg",
    ],
    description: "Well-designed space with excellent functionality and elegant architectural elements.",
  },
  {
    id: 33,
    name: "Spacific Homes",
    category: "Residential",
    location: "Surat, Gujarat",
    surfaceArea: "",
    thumbnail: "/images/portfolio/corranar_F.jpg",
    images: [
      "/images/portfolio/corranar_F.jpg",
    ],
    description: "Contemporary residential development with modern design, spacious units, and premium amenities for urban living.",
  },
  {
    id: 34,
    name: "CO ORDINATION FOR SHOPPING CENTER",
    category: "Revit Bim",
    location: "AHMEDABAD, GUJARAT",
    surfaceArea: "1,50,000 SQ.FT.",
    thumbnail: "/images/portfolio/METRO-MALL.jpg",
    images: [
      "/images/portfolio/METRO-MALL.jpg",
    ],
    description: "Comprehensive coordination for a modern shopping center with integrated BIM modeling and design.",
  },
  {
    id: 35,
    name: "Bamiyan Cultural Center",
    category: "Master Planning",
    location: "Afghanistan",
    surfaceArea: "",
    thumbnail: "/images/portfolio/Bamiyan-Cultural-Center-Afghanistan-2.jpg",
    images: [
      "/images/portfolio/Bamiyan-Cultural-Center-Afghanistan-2.jpg",
      "/images/portfolio/01-RECEPTION-INTERIOR.jpg",
      "/images/portfolio/001-SHEET-1.jpg",
      "/images/portfolio/02-LIBRARY-INTERIOR.jpg",
       "/images/portfolio/002-SHHET-2.jpg",
        "/images/portfolio/03-CLASSROOM-INTERIOR.jpg",
         "/images/portfolio/04-EXHIBITION-SPACE-INTERIOR1.jpg",
    ],
    description: "Cultural center designed to preserve and promote the heritage of Bamiyan, featuring exhibition spaces, a library, and classrooms for educational programs.",
  },
  {
    id: 36,
    name: "Dream Haritage",
    category: "Highrise Residential Project",
    location: "Surat, Gujarat",
    surfaceArea: "1,40,000 SQ.FT.",
    thumbnail: "/images/portfolio/Cam_03.jpg",
    images: [
      "/images/portfolio/Cam_03.jpg",
    ],
    description: "Elegant high-rise residential project with modern amenities and premium finishes.",
  },
  {
    id: 37,
    name: "PrafulBhai GokulDham",
    category: "Residential",
    location: "Surat, Gujarat",
    surfaceArea: "12,000 SQ.FT.",
    thumbnail: "/images/portfolio/Corner-View_01.jpg",
    images: [
      "/images/portfolio/Corner-View_01.jpg",
    ],
    description: "Well-designed residential project with premium finishes and modern amenities.",
  },
  {
    id: 38,
    name: "SHREE NIVAS FLATS",
    category: "Revit Bim",
    location: "Surat, Gujarat",
    client: "PrafulBhai GokulDham",
    surfaceArea: "5,500 SQ.FT.",
    thumbnail: "/images/portfolio/SHREE-NIVAS-FLATS.jpg",
    images: [
      "/images/portfolio/SHREE-NIVAS-FLATS.jpg",
      
    ],
    description: "Modern residential flats designed with BIM technology, featuring contemporary architecture and functional living spaces.",
  },
  {
    id: 39,
    name: "Urmila Garden-Kasganj",
    category: "Commercial",
    location: "ALIGARH, DELHI",
    surfaceArea: "2,00,000 SQ.FT.",
    thumbnail: "/images/portfolio/231-870x434.jpg",
    images: [
      "/images/portfolio/231-870x434.jpg",
      "/images/portfolio/232-870x434.jpg",
      "/images/portfolio/233-870x434.jpg",
      
    ],
    description: "Large-scale commercial development featuring retail spaces, offices, and landscaped gardens for a vibrant business environment.",
  },
  {
    id: 40,
    name: "Marvel Homes",
    category: "Residential",
    location: "Surat, Gujarat",
    surfaceArea: "1,50,000 SQ.FT.",
    thumbnail: "/images/portfolio/PU01_night.jpg",
    images: [
      "/images/portfolio/PU01_night.jpg",
    ],
    description: "Luxury residential project with modern amenities and premium finishes.",
  },
  {
    id: 41,
    name: "PUNITBHAI GOKULDHAM",
    category: "Residential",
    location: "Surat, Gujarat",
    surfaceArea: "",
    thumbnail: "/images/portfolio/PUNITBHAI-GOKULDHAM.jpg",
    images: [
      "/images/portfolio/PUNITBHAI-GOKULDHAM.jpg",
      
    ],
    description: "Well-designed residential project with premium finishes and modern amenities for comfortable living.",
  },
  {
    id: 42,
    name: "Golden Square",
    category: "STRUCTURAL BIM FOR 23 STORIED BUILDING,Revit Bim",
    location: "AHMEDABAD, GUJARAT",
    surfaceArea: "1,00,000 SQ.FT.",
    thumbnail: "/images/portfolio/GOLDEN-SQUARE.jpg",
    images: [
      "/images/portfolio/GOLDEN-SQUARE.jpg",
    ],
    description: "Contemporary space featuring smart design elements and premium finishes.",
  },
  {
    id: 43,
    name: "Graphic",
    category: "GRAPHICS",
    location: "",
    surfaceArea: "",
    thumbnail: "/images/portfolio/3-2-870x434.jpg",
    images: [
      "/images/portfolio/1-2-870x434.jpg",
      "/images/portfolio/3-2-870x434.jpg",
      "/images/portfolio/4-2-870x434.jpg",
      "/images/portfolio/2-2-870x434.jpg",
    ],
    description: "Collection of graphic designs showcasing architectural concepts, project presentations, and visual storytelling for various real estate developments.",
  },
  {
    id: 44,
    name: "White Palace",
    category: "Residential",
    location: "Surat, Gujarat",
    surfaceArea: "2,70,000 SQ.FT.",
    thumbnail: "/images/portfolio/Cam05.jpg",
    images: [
      "/images/portfolio/Cam05.jpg",
    ],
    description: "Elegant residential development with modern design, spacious units, and premium amenities for urban living.",
  },
  {
    id: 45,
    name: "BhaveshBhai Aditya ",
    category: "Private Residences",
    location: "Surat, Gujarat",
    surfaceArea: "8,000 SQ.FT.",
    thumbnail: "/images/portfolio/evening.jpg",
    images: [
      "/images/portfolio/evening.jpg",
    ],
    description: "Luxurious residential property with exclusive amenities and premium finishes for a comfortable living experience.",
  },
  {
    id: 46,
    name: "White House",
    category: "3D MODELLING FOR RESIDENTIAL BUNGLOW,Revit Bim",
    location: "Surat, Gujarat",
    surfaceArea: "5,500 SQ.FT.",
    thumbnail: "/images/portfolio/WHITE-HOUSE.jpg",
    images: [
      "/images/portfolio/WHITE-HOUSE.jpg",
    ],
    description: "Modern residential bungalow designed with BIM technology, featuring contemporary architecture and functional living spaces for a luxurious lifestyle.",
  },
  {
    id: 47,
    name: "Furniture",
    category: "",
    location: "",
    surfaceArea: "",
    thumbnail: "/images/portfolio/d3 - Copy.jpg",
    images: [
      "/images/portfolio/aeb4d7adce88867735443f5c58437502 - Copy.jpg",
      "/images/portfolio/aee9e672cfa18134d14b1ad34a0b8b5b - Copy.jpg",
      "/images/portfolio/ea1ff4229b29cd66996cb375baf04a08.jpg",
      "/images/portfolio/Sri-Stool-Brown-Web-image - Copy.jpg",
      "/images/portfolio/d3 - Copy.jpg",
      "/images/portfolio/ac - Copy.jpg",
      "/images/portfolio/ab - Copy.jpg",
      "/images/portfolio/9f7ec2258a29755aff80f7f3dd287a5f.jpg",
      "/images/portfolio/01.jpg",
    ],
    description: "Collection of furniture designs showcasing contemporary aesthetics, functional elements, and premium finishes for residential and commercial spaces.",
  },
  {
    id: 48,
    name: "Alok Residency",
    category: "Residential",
    location: "Surat, Gujarat",
    surfaceArea: "1,20,000 SQ.FT.",
    thumbnail: "/images/portfolio/ALOK3.jpg",
    images: [
      "/images/portfolio/ALOK3.jpg",
    ],
    description: "Modern residential development with contemporary design, spacious units, and premium amenities for comfortable urban living.",
  },
  {
    id: 49,
    name: "BipinBhai GokulDham",
    category: "Residential",
    location: "Surat, Gujarat",
    surfaceArea: "10,000 SQ.FT.",
    thumbnail: "/images/portfolio/Gokuldham-8.jpg",
    images: [
      "/images/portfolio/Gokuldham-1-1.jpg",
      "/images/portfolio/Gokuldham-2-1.jpg",
      "/images/portfolio/Gokuldham-3-1.jpg",
      "/images/portfolio/Gokuldham-4-1.jpg",
      "/images/portfolio/Gokuldham-5-1.jpg",
      "/images/portfolio/Gokuldham-6-2.jpg",
      "/images/portfolio/Gokuldham-7-1.jpg",
      "/images/portfolio/Gokuldham-8-1.jpg",
      "/images/portfolio/Gokuldham-9-2.jpg",
      "/images/portfolio/Gokuldham-10-1.jpg",
      "/images/portfolio/Gokuldham-11-1.jpg",
      "/images/portfolio/Gokuldham-12-1.jpg",
      "/images/portfolio/Gokuldham-13-1.jpg",
      "/images/portfolio/Gokuldham-14-1.jpg",
      "/images/portfolio/Gokuldham-15-1.jpg",
      "/images/portfolio/Gokuldham-16-1.jpg",
      "/images/portfolio/Gokuldham-17-1.jpg",
      "/images/portfolio/Gokuldham-18-1.jpg",
      "/images/portfolio/Gokuldham-19-1.jpg",
      "/images/portfolio/Gokuldham-20-1.jpg",
      "/images/portfolio/Gokuldham-21-1.jpg",
      "/images/portfolio/Gokuldham-22-1.jpg",
      "/images/portfolio/Gokuldham-23-1.jpg",
      "/images/portfolio/Gokuldham-24-1.jpg",
    ],
    description: "Spacious residential property with modern design, landscaped gardens, and luxurious amenities for a serene living experience.",
  },
  {
    id: 50,
    name: "Sai Astha Residency",
    category: "ARCHITECTURAL BIM MODELLING FOR HIGHRISE BUILDING,Revit Bim",
    location: "Surat, Gujarat",
    surfaceArea: "10,000 SQ.FT.",
    thumbnail: "/images/portfolio/SAI-ASTHA-RESIDENCY.jpg",
    images: [
      "/images/portfolio/SAI-ASTHA-RESIDENCY.jpg",
    ],
    description: "Modern high-rise residential building designed with BIM technology, featuring contemporary architecture and functional living spaces for a luxurious lifestyle.",
  },
  {
    id: 51,
    name: "Lighting Design Project",
    category: "LIGHTING",
    location: "Surat, Gujarat",
    surfaceArea: "",
    thumbnail: "/images/portfolio/light_product.jpg",
    images: [
      "/images/portfolio/1-1-870x434.jpg",
      "/images/portfolio/2-1-870x434.jpg",
      "/images/portfolio/3-1-870x434.jpg",
      "/images/portfolio/4-1-870x434.jpg",
      "/images/portfolio/5-1-870x434.jpg",
      "/images/portfolio/6-1-870x434.jpg",
      "/images/portfolio/7-1-870x434.jpg",

    ],
    description: "Innovative space combining functionality with elegant architectural design.",
  },
  {
    id: 52,
    name: "AAVKAR Residency",
    category: "Residential",
    location: "Surat, Gujarat",
    surfaceArea: "1,50,000 SQ.FT.",
    thumbnail: "/images/portfolio/Cam_17.jpg",
    images: [
      "/images/portfolio/Cam_17.jpg",
    ],
    description: "Premium development offering excellent design quality and modern amenities.",
  },
]

export default function PortfolioPage() {
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const handlePrevImage = () => {
    if (selectedProperty) {
      setCurrentImageIndex((prev) =>
        prev === 0 ? selectedProperty.images.length - 1 : prev - 1
      )
    }
  }

  const handleNextImage = () => {
    if (selectedProperty) {
      setCurrentImageIndex((prev) =>
        prev === selectedProperty.images.length - 1 ? 0 : prev + 1
      )
    }
  }

  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      <section className="pt-32 pb-20 px-4 max-w-7xl mx-auto">
        <h1 className="text-5xl font-bold mb-2">Portfolio</h1>
        <p className="text-gray-600 mb-12">Explore our exceptional real estate projects</p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {DEMO_PROPERTIES.map((property) => (
            <div
              key={property.id}
              onClick={() => {
                setSelectedProperty(property)
                setCurrentImageIndex(0)
              }}
              className="cursor-pointer group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-48 w-full overflow-hidden bg-gray-200">
                <Image
                  src={property.thumbnail}
                  alt={property.name}
                  fill
                  priority={false}
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-3 bg-white">
                <h3 className="font-semibold text-sm truncate">{property.name}</h3>
                <p className="text-xs text-gray-500">{property.category}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Modal Detail View */}
      {selectedProperty && (
        <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg max-w-5xl w-full max-h-[90vh] overflow-y-auto">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProperty(null)}
              className="absolute top-4 right-4 p-2 bg-white rounded-full hover:bg-gray-100 z-10"
            >
              <X size={24} />
            </button>

            <div className="flex flex-col lg:flex-row gap-6 p-6">
              {/* Main Image */}
              <div className="flex-1 min-w-0">
                <div className="relative h-96 w-full bg-gray-200 rounded-lg overflow-hidden mb-4">
                  <Image
                    src={selectedProperty.images[currentImageIndex]}
                    alt={`${selectedProperty.name} - Image ${currentImageIndex + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>

                {/* Image Navigation */}
                <div className="flex gap-2 items-center justify-between">
                  <button
                    onClick={handlePrevImage}
                    className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition"
                  >
                    <ChevronLeft size={20} />
                  </button>
                  
                  <div className="flex gap-2 overflow-x-auto">
                    {selectedProperty.images.map((image, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`flex-shrink-0 h-16 w-16 rounded-lg overflow-hidden border-2 transition ${
                          index === currentImageIndex ? "border-black" : "border-gray-300"
                        }`}
                      >
                        <Image
                          src={image}
                          alt={`Thumbnail ${index + 1}`}
                          width={64}
                          height={64}
                          className="w-full h-full object-cover"
                        />
                      </button>
                    ))}
                  </div>

                  <button
                    onClick={handleNextImage}
                    className="p-2 bg-gray-200 hover:bg-gray-300 rounded-full transition"
                  >
                    <ChevronRight size={20} />
                  </button>
                </div>
              </div>

              {/* Project Details */}
              <div className="flex-1 min-w-0">
                <h2 className="text-3xl font-bold mb-2">{selectedProperty.name}</h2>
                
                <div className="border-t border-b border-gray-200 py-4 mb-6">
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-4">Project Info:</h3>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <p className="font-semibold">Category</p>
                      <p className="text-gray-600">{selectedProperty.category}</p>
                    </div>
                    
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-gray-600">{selectedProperty.location}</p>
                    </div>

                    {selectedProperty.client && (
                      <div>
                        <p className="font-semibold">Client</p>
                        <p className="text-gray-600">{selectedProperty.client}</p>
                      </div>
                    )}
                    
                    {selectedProperty.surfaceArea && (
                      <div>
                        <p className="font-semibold">Surface Area</p>
                        <p className="text-gray-600">{selectedProperty.surfaceArea}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-semibold text-gray-500 uppercase mb-3">Description</h3>
                  <p className="text-gray-700 leading-relaxed">{selectedProperty.description}</p>
                </div>

                <button
                  onClick={() => setSelectedProperty(null)}
                  className="mt-6 w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition font-semibold"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  )
}