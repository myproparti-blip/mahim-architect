"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ClientLogos } from "@/components/client-logos"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import Image from "next/image"
import {
    Building2,
    Home,
    TrendingUp,
    FileText,
    DollarSign,
    CheckCircle,
    Map,
    Users,
    Award,
    Clock,
    Shield,
    Target
} from "lucide-react"
import { motion } from "framer-motion"
import { useState, useMemo, useCallback } from "react"
import dynamic from "next/dynamic"

const VirtualTourCTA = dynamic(() => import("@/components/virtual-tour-cta").then(mod => ({ default: mod.VirtualTourCTA })))
const KeyPersonCTA = dynamic(() => import("@/components/key-person-cta").then(mod => ({ default: mod.KeyPersonCTA })))

export default function ValuationServicesPage() {
    const [hoveredService, setHoveredService] = useState<number | null>(null)
    const [hoveredCommitment, setHoveredCommitment] = useState<number | null>(null)
    
    const setHoveredServiceCallback = useCallback((value: number | null) => {
        setHoveredService(value)
    }, [])
    
    const setHoveredCommitmentCallback = useCallback((value: number | null) => {
        setHoveredCommitment(value)
    }, [])

    const valuationAdvisoryServices = useMemo(() => [
        { title: "Market Valuation for Land / Building", icon: Building2 },
        { title: "Mortgage / Refinancing Valuations", icon: Home },
        { title: "Before You Buy & Before You Sell Valuation", icon: TrendingUp },
        { title: "Valuation for Taxation - Income Tax, Capital Gains Etc.", icon: DollarSign },
        { title: "Land Acquisitions Matters", icon: Map },
        { title: "Partnership Dissolution", icon: Users },
        { title: "Rental Assessment", icon: FileText },
        { title: "Stamp Duty Valuation", icon: Award }
    ], [])

    const realEstateServices = useMemo(() => [
        { title: "Development Strategies", icon: TrendingUp },
        { title: "Market Research", icon: FileText },
        { title: "Technical Assurance", icon: Shield },
        { title: "Project Feasibility", icon: CheckCircle },
        { title: "Investment Analysis", icon: DollarSign },
        { title: "Risk Assessment", icon: Award },
        { title: "Site Evaluation", icon: Map },
        { title: "Compliance Review", icon: Target }
    ], [])

    const propertyTypes = useMemo(() => [
        "Residential",
        "Commercial",
        "Retail",
        "Industrial",
        "Specialized Properties"
    ], [])

    const geographicAreas = useMemo(() => [
        { category: "North India", areas: ["Gurugram", "Noida", "Ghaziabad", "Amritsar", "Chandigarh", "Himachal Pradesh"] },
        { category: "East India", areas: ["Kolkata", "Bhubaneswar", "Darjeeling", "Assam", "Meghalaya", "Jharkhand"] },
        { category: "South India", areas: ["Bangalore", "Chennai", "Hyderabad", "Coimbatore", "Kerala", "Andhra Pradesh"] },
        { category: "West India", areas: ["Mumbai", "Pune", "Ahmedabad", "Jaipur", "Rajasthan", "Gujarat"] }
    ], [])

    const commitments = useMemo(() => [
        {
            icon: Award,
            title: "Certified Valuers",
            description: "Qualified and experienced professionals with recognized certifications in real estate valuation"
        },
        {
            icon: Shield,
            title: "Unbiased Assessment",
            description: "Impartial valuation based on market data, comparable properties, and recognized methodologies"
        },
        {
            icon: Clock,
            title: "Timely Delivery",
            description: "Quick turnaround without compromising on accuracy and quality of valuation reports"
        },
        {
            icon: Target,
            title: "Precision & Accuracy",
            description: "Detailed analysis using advanced techniques and comprehensive market research"
        },
        {
            icon: FileText,
            title: "Professional Reports",
            description: "Comprehensive, well-documented valuation reports accepted by banks, courts, and authorities"
        },
        {
            icon: CheckCircle,
            title: "Quality Assured",
            description: "Rigorous verification process ensuring reliability and credibility of every valuation"
        }
    ], [])

    const containerVariants = useMemo(() => ({
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }), [])

    const itemVariants = useMemo(() => ({
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    }), [])

    return (
        <main className="min-h-screen bg-gradient-to-b from-neutral-50 via-white to-neutral-50">
            <Header />

            {/* Hero Section */}
            <section className="relative w-full h-[500px] overflow-hidden bg-gradient-to-br from-neutral-900 to-neutral-800 pt-32">
                {/* Background Images */}
                <div className="absolute inset-0 flex gap-2">
                    <div className="flex-1 relative overflow-hidden">
                        <Image
                            src="/images/portfolio/RIVERFRONT_COMP.jpg"
                            alt="Property Valuation Services"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 25vw"
                            priority
                        />
                    </div>
                    <div className="flex-1 relative overflow-hidden">
                        <Image
                            src="/images/portfolio/Cam-01-New-16-10-2022-02.jpg"
                            alt="Professional Property Valuation"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 50vw, 25vw"
                            priority
                        />
                    </div>
                </div>

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/50" />

                {/* Content */}
                <motion.div
                    className="relative h-full flex flex-col items-center justify-center text-center text-white z-10 px-6"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="inline-block px-4 py-2 mb-6 rounded-full bg-amber-600 hover:bg-amber-700 text-white font-medium text-sm">
                        Professional Valuation Services
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                        Valuation Services
                    </h1>

                    <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto leading-relaxed">
                        We carry out Valuation of all types of Residential, Commercial, Retail, Industrial & Specialized Properties. Expert assessment backed by market research and certified professionals.
                    </p>
                </motion.div>
            </section>



            {/* Nature of Services Section */}
            <section className="relative px-4 py-20 md:py-28 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">Nature of Services</h2>
                        <p className="text-neutral-600 text-lg max-w-2xl mx-auto mb-8">
                            Comprehensive valuation solutions across diverse property types and assessment requirements
                        </p>

                        {/* Property Types */}
                        <div className="flex flex-wrap justify-center gap-3 mb-12">
                            {propertyTypes.map((type, index) => (
                                <motion.span
                                    key={index}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    className="px-6 py-2 rounded-full bg-amber-50 border border-amber-300 text-amber-900 font-medium"
                                >
                                    {type}
                                </motion.span>
                            ))}
                        </div>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-stretch">
                        {/* Valuation Advisory Services */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="p-8 rounded-2xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 flex flex-col"
                        >
                            <h3 className="text-2xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-amber-100">
                                    <DollarSign className="w-6 h-6 text-amber-600" />
                                </div>
                                Valuation Advisory Services
                            </h3>

                            <motion.ul
                                className="space-y-4"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {valuationAdvisoryServices.map((service, index) => {
                                    const Icon = service.icon
                                    return (
                                        <motion.li
                                            key={index}
                                            variants={itemVariants}
                                            className="flex items-start gap-3 group"
                                        >
                                            <div className="p-2 rounded-lg bg-amber-100 group-hover:bg-amber-200 transition-colors duration-300 mt-1 flex-shrink-0">
                                                <Icon className="w-4 h-4 text-amber-600" />
                                            </div>
                                            <span className="text-neutral-700 group-hover:text-neutral-900 transition-colors duration-300">
                                                {service.title}
                                            </span>
                                        </motion.li>
                                    )
                                })}
                            </motion.ul>
                        </motion.div>

                        {/* Real Estate Services */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="p-8 rounded-2xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200 flex flex-col"
                        >
                            <h3 className="text-2xl font-bold text-neutral-900 mb-8 flex items-center gap-3">
                                <div className="p-2 rounded-lg bg-amber-100">
                                    <Building2 className="w-6 h-6 text-amber-600" />
                                </div>
                                Real Estate Services
                            </h3>

                            <motion.ul
                                className="space-y-4"
                                variants={containerVariants}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                            >
                                {realEstateServices.map((service, index) => {
                                    const Icon = service.icon
                                    return (
                                        <motion.li
                                            key={index}
                                            variants={itemVariants}
                                            className="flex items-start gap-3 group"
                                        >
                                            <div className="p-2 rounded-lg bg-amber-100 group-hover:bg-amber-200 transition-colors duration-300 mt-1 flex-shrink-0">
                                                <Icon className="w-4 h-4 text-amber-600" />
                                            </div>
                                            <span className="text-neutral-700 group-hover:text-neutral-900 transition-colors duration-300">
                                                {service.title}
                                            </span>
                                        </motion.li>
                                    )
                                })}
                            </motion.ul>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Our Commitment Section */}
            <section className="relative px-4 py-20 md:py-28">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Our Commitment</h2>
                        <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
                            Delivering accurate, reliable, and professional valuation services with unmatched expertise
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-3 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {commitments.map((commitment, index) => {
                            const Icon = commitment.icon
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    onMouseEnter={() => setHoveredCommitment(index)}
                                    onMouseLeave={() => setHoveredCommitment(null)}
                                    className="group relative"
                                >
                                    <div className="absolute inset-0 bg-amber-100 rounded-2xl opacity-0 group-hover:opacity-50 blur-xl transition-all duration-300" />

                                    <div className="relative p-8 rounded-2xl bg-white border border-neutral-200 group-hover:border-amber-400 group-hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                                        <div className="p-3 rounded-lg bg-amber-100 w-fit mb-4 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-6 h-6 text-amber-600" />
                                        </div>

                                        <h3 className="text-lg font-bold text-neutral-900 mb-3">{commitment.title}</h3>
                                        <p className="text-neutral-600 text-sm leading-relaxed flex-1">{commitment.description}</p>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Valuation Process Image Section */}
            <section className="relative px-4 py-20 md:py-28">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Our Valuation Process</h2>
                        <p className="text-neutral-600 text-lg max-w-3xl mx-auto leading-relaxed">
                            Our comprehensive three-step valuation methodology ensures accurate, reliable, and professional property assessments backed by market research and certified expertise.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-12 items-start">
                        {/* Left: Content Cards */}
                        <motion.div
                            className="space-y-5"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            variants={{
                                hidden: { opacity: 0 },
                                visible: {
                                    opacity: 1,
                                    transition: {
                                        staggerChildren: 0.15,
                                        delayChildren: 0.2
                                    }
                                }
                            }}
                        >
                            {[
                                {
                                    step: "01",
                                    title: "Site Inspection",
                                    description: "Thorough on-site evaluation including property dimensions, condition, layout, structural integrity, and physical attributes.",
                                    tags: ["On-site Assessment", "Physical Inspection", "Measurements"],
                                    icon: Building2,
                                    color: "from-blue-50 to-blue-100",
                                    borderColor: "border-blue-300",
                                    numberBg: "bg-blue-600"
                                },
                                {
                                    step: "02",
                                    title: "Market Analysis",
                                    description: "Comprehensive research of comparable properties, recent transactions, and current market trends affecting property values.",
                                    tags: ["Comparable Analysis", "Market Trends", "Data Research"],
                                    icon: TrendingUp,
                                    color: "from-green-50 to-green-100",
                                    borderColor: "border-green-300",
                                    numberBg: "bg-green-600"
                                },
                                {
                                    step: "03",
                                    title: "Valuation Report",
                                    description: "Detailed professional report with complete methodology, analysis, supporting data, and final valuation conclusion.",
                                    tags: ["Professional Report", "Bank Approved", "Court Valid"],
                                    icon: FileText,
                                    color: "from-amber-50 to-amber-100",
                                    borderColor: "border-amber-300",
                                    numberBg: "bg-amber-600"
                                }
                            ].map((item, index) => {
                                const Icon = item.icon
                                return (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: index * 0.1 }}
                                        className={`group relative overflow-hidden rounded-2xl border-2 ${item.borderColor} hover:shadow-xl transition-all duration-300 p-6 bg-gradient-to-br ${item.color}`}
                                    >
                                        <div className="absolute inset-0 bg-white/40 group-hover:bg-white/20 transition-all duration-300" />
                                        <div className="relative z-10">
                                            <div className="flex items-start gap-4 mb-3">
                                                <div className={`flex-shrink-0 flex items-center justify-center w-14 h-14 rounded-full ${item.numberBg} text-white font-bold text-lg group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                                    {item.step}
                                                </div>
                                                <Icon className="w-6 h-6 text-neutral-700 mt-1 opacity-60" />
                                            </div>
                                            <h3 className="text-xl font-bold text-neutral-900 mb-2">{item.title}</h3>
                                            <p className="text-neutral-700 text-sm leading-relaxed mb-4">{item.description}</p>
                                            <div className="flex flex-wrap gap-2">
                                                {item.tags.map((tag, idx) => (
                                                    <motion.span
                                                        key={idx}
                                                        initial={{ opacity: 0, scale: 0.8 }}
                                                        whileInView={{ opacity: 1, scale: 1 }}
                                                        viewport={{ once: true }}
                                                        transition={{ delay: idx * 0.05 }}
                                                        className="px-3 py-1 rounded-full bg-white/70 backdrop-blur-sm border border-current border-opacity-30 text-neutral-700 text-xs font-semibold hover:bg-white transition-colors duration-200 shadow-sm"
                                                    >
                                                        {tag}
                                                    </motion.span>
                                                ))}
                                            </div>
                                        </div>
                                    </motion.div>
                                )
                            })}
                        </motion.div>

                        {/* Right: Image + Stats */}
                        <motion.div
                            className="space-y-6"
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            {/* Main Image */}
                            <div className="relative rounded-3xl overflow-hidden shadow-2xl h-96 md:h-[420px]">
                                <Image
                                    src="/images/portfolio/013_GATE_FRONT_TOP.jpg"
                                    alt="Professional Valuation Process - Property Assessment and Documentation"
                                    fill
                                    className="object-cover"
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                />
                                <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-transparent to-transparent" />
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
                            </div>

                            {/* Stats Cards */}
                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { number: "500+", label: "Properties Valued", icon: "🏢" },
                                    { number: "15+", label: "Years Experience", icon: "⭐" },
                                    { number: "100%", label: "Accuracy Rate", icon: "✓" },
                                    { number: "24hrs", label: "Quick Delivery", icon: "⚡" }
                                ].map((stat, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        whileInView={{ opacity: 1, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="relative rounded-xl bg-gradient-to-br from-white to-neutral-50 border-2 border-amber-200 p-4 hover:shadow-lg hover:border-amber-400 transition-all duration-300 group"
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-br from-amber-50 to-transparent opacity-0 group-hover:opacity-100 rounded-xl transition-all duration-300" />
                                        <div className="relative z-10 text-center">
                                            <div className="text-2xl mb-1">{stat.icon}</div>
                                            <p className="text-2xl font-bold text-amber-600">{stat.number}</p>
                                            <p className="text-xs text-neutral-700 leading-tight">{stat.label}</p>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Geographic Areas Section */}
            <section className="relative px-4 py-20 md:py-28 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Geographic Areas of Service</h2>
                        <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
                            Pan-India presence with expertise across major markets and regions
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {geographicAreas.map((region, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="p-6 rounded-2xl bg-gradient-to-br from-amber-50 to-white border border-amber-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300"
                            >
                                <h3 className="text-lg font-bold text-amber-900 mb-4 flex items-center gap-2">
                                    <Map className="w-5 h-5" />
                                    {region.category}
                                </h3>
                                <ul className="space-y-2">
                                    {region.areas.map((area, idx) => (
                                        <li key={idx} className="flex items-center gap-2 text-neutral-700">
                                            <span className="w-1.5 h-1.5 rounded-full bg-amber-600" />
                                            {area}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Services Showcase Section */}
            <section className="relative px-4 py-20 md:py-28">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="grid md:grid-cols-2 gap-12 items-stretch"
                    >
                        {/* Content */}
                        <motion.div
                            className="space-y-8 flex flex-col justify-center"
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <div>
                                <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-6">Specialized Valuation Expertise</h2>
                                <p className="text-neutral-600 text-lg leading-relaxed mb-8">
                                    Our team specializes in comprehensive property valuations across diverse sectors. Whether you need valuations for mortgage purposes, taxation, legal matters, or investment decisions, we provide detailed, accurate assessments backed by extensive market knowledge.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {[
                                    { label: "Property Types", value: "Residential & Commercial" },
                                    { label: "Valuation Methods", value: "Market & Cost Approach" },
                                    { label: "Expertise Areas", value: "Pan-India Coverage" },
                                    { label: "Report Quality", value: "Bank & Court Approved" }
                                ].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 10 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: index * 0.1, duration: 0.5 }}
                                        className="p-4 rounded-lg bg-amber-50 border border-amber-200"
                                    >
                                        <p className="text-sm text-amber-900 font-semibold mb-1">{item.label}</p>
                                        <p className="text-neutral-700 font-medium">{item.value}</p>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="relative rounded-2xl overflow-hidden shadow-2xl h-96 md:h-[500px]"
                        >
                            <Image
                                src="/images/portfolio/Cam-01-New-16-10-2022-02.jpg"
                                alt="Specialized Valuation Services - Commercial Property Assessment"
                                fill
                                className="object-cover"
                                sizes="(max-width: 768px) 100vw, 50vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-l from-black/30 via-transparent to-transparent" />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Why Choose Us Section */}
            <section className="relative px-4 py-20 md:py-28">
                <div className="max-w-5xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Why Choose Us</h2>
                        <p className="text-neutral-600 text-lg">
                            Decades of expertise combined with modern valuation methodologies
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            {
                                title: "Expert Valuers",
                                description: "Certified professionals with extensive experience in property valuation across diverse sectors and regions",
                                icon: Award
                            },
                            {
                                title: "Market Research",
                                description: "Comprehensive market analysis and comparative study ensuring accurate and fair property valuations",
                                icon: TrendingUp
                            },
                            {
                                title: "Legal Compliance",
                                description: "All valuations comply with regulatory requirements and are accepted by banks, courts, and government authorities",
                                icon: Shield
                            },
                            {
                                title: "Quick Turnaround",
                                description: "Efficient process delivery without compromising on quality and accuracy of valuation reports",
                                icon: Clock
                            }
                        ].map((benefit, index) => {
                            const Icon = benefit.icon
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="p-8 rounded-2xl bg-white border border-neutral-200 hover:border-amber-400 hover:shadow-lg transition-all duration-300 group"
                                >
                                    <div className="flex items-start gap-4">
                                        <div className="p-3 rounded-lg bg-amber-100 border border-amber-300">
                                            <Icon className="w-6 h-6 text-amber-600" />
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-neutral-900 mb-2 group-hover:text-amber-600 transition-colors duration-300">
                                                {benefit.title}
                                            </h3>
                                            <p className="text-neutral-600 leading-relaxed">{benefit.description}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Trusted by Section */}
            <section className="relative px-4 py-20 md:py-28 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4">Trusted by Leading Organizations</h2>
                        <p className="text-neutral-600 text-lg max-w-2xl mx-auto">
                            200+ clients across banking, finance, real estate, healthcare, education, and government sectors
                        </p>
                    </motion.div>

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
                                { name: "Sudarshan Group", category: "Diversified", logo: "SUDARSHAN" },
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
                                        whileHover={{ y: -4 }}
                                    >
                                        <Card className="group relative rounded-2xl bg-white border border-neutral-200 hover:border-amber-300 hover:shadow-lg transition-all duration-300 overflow-hidden min-h-32 md:min-h-40 flex flex-col items-center justify-center p-4">
                                            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-center gap-3">
                                                <div className="relative w-16 h-16 group-hover:scale-110 transition-transform duration-300 flex-shrink-0 flex items-center justify-center">
                                                    {LogoComponent && <LogoComponent />}
                                                </div>
                                                <p className="text-xs md:text-sm font-semibold text-neutral-900 group-hover:text-amber-600 transition-colors duration-300 line-clamp-2">
                                                    {client.name}
                                                </p>
                                                <Badge variant="outline" className="text-xs bg-white text-neutral-700 border-neutral-300">
                                                    {client.category}
                                                </Badge>
                                            </div>
                                        </Card>
                                    </motion.div>
                                )
                            })}
                        </div>
                    </motion.div>
                </div>
            </section>

            <KeyPersonCTA />

            <Footer />
        </main>
    )
}
