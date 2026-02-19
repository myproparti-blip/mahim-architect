"use client"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ClientLogos } from "@/components/client-logos"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Target, Lightbulb, Award, Shield, Zap, Building2, Home, BarChart3, Leaf, Users, Heart, Sparkles, ArrowRight, Briefcase, CheckCircle, Globe, Layers, Palette } from "lucide-react"
import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import { KeyPersonCTA } from "@/components/key-person-cta"

export default function WelcomePage() {
    const [hoveredCard, setHoveredCard] = useState<number | null>(null)

    const features = [
        {
            icon: Target,
            title: "Strategic Excellence",
            description: "Delivering comprehensive architectural solutions that align with your vision, market demands, and long-term objectives"
        },
        {
            icon: Lightbulb,
            title: "Innovative Design",
            description: "Cutting-edge designs that leverage sustainable materials, advanced BIM technology, and forward-thinking concepts"
        },
        {
            icon: Award,
            title: "Award-Winning Expertise",
            description: "Award-recognized professionals with 15+ years of experience in architectural design, BIM technology, and project management"
        },
        {
            icon: Shield,
            title: "Quality Assurance",
            description: "Every project meets rigorous standards of craftsmanship, precision, and attention to detail from concept through completion"
        }
    ]

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.2
            }
        }
    }

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    }

    return (
        <main className="min-h-screen bg-white">
            <Header />

            {/* Hero Section */}
            <section className="relative overflow-hidden px-4 py-20 md:py-32 bg-gradient-to-b from-orange-50 to-white">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(234,88,12,0.05)_0%,transparent_50%)] pointer-events-none" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <motion.div
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.6 }}
                                className="inline-flex items-center gap-3 px-4 py-2 mb-6 rounded-full bg-orange-100 border border-orange-200"
                            >
                                <span className="inline-block w-2 h-2 bg-orange-600 rounded-full"></span>
                                <span className="text-sm font-semibold text-orange-700">About Mahim Architect</span>
                            </motion.div>

                            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-slate-900 leading-tight">
                                Transforming Visions Into Reality
                            </h1>

                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                A premier architectural firm delivering innovative design solutions, comprehensive project management, and cutting-edge BIM technology services globally. We transform visions into architectural reality through strategic planning, creative excellence, and unwavering commitment to quality.
                            </p>
                        </motion.div>

                        {/* Right Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=800&h=600&fit=crop"
                                alt="Modern Architecture Design"
                                fill
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Features Grid */}
            <section className="relative px-4 py-20 md:py-28 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Why Partner With Us</h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            Strategic expertise, innovative design, and proven excellence across 250+ projects
                        </p>
                    </motion.div>

                    <motion.div
                        className="grid md:grid-cols-2 gap-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                    >
                        {features.map((feature, index) => {
                            const Icon = feature.icon
                            return (
                                <motion.div
                                    key={index}
                                    variants={itemVariants}
                                    onMouseEnter={() => setHoveredCard(index)}
                                    onMouseLeave={() => setHoveredCard(null)}
                                    className="group relative"
                                >
                                    <Card className="relative p-8 rounded-2xl bg-white border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 h-full flex flex-col">
                                        <div className="relative z-10 flex items-start gap-4">
                                            <motion.div
                                                className="p-3 rounded-xl bg-orange-100 transition-all duration-300 flex-shrink-0"
                                                animate={hoveredCard === index ? { scale: 1.1, rotate: 5 } : { scale: 1, rotate: 0 }}
                                            >
                                                <Icon className="w-6 h-6 text-orange-600" />
                                            </motion.div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-slate-900 mb-2">{feature.title}</h3>
                                                <p className="text-slate-600 text-sm leading-relaxed">{feature.description}</p>
                                            </div>
                                        </div>
                                    </Card>
                                </motion.div>
                            )
                        })}
                    </motion.div>
                </div>
            </section>

            {/* Services Showcase Section - Image Left */}
            <section className="relative px-4 py-20 md:py-28 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-96 md:h-[450px] rounded-2xl overflow-hidden order-2 md:order-1 shadow-2xl"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop"
                                alt="Advanced Design Services"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </motion.div>

                        {/* Right Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1 md:order-2"
                        >
                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Services & Expertise</h2>
                            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
                                Comprehensive architectural solutions tailored to your needs. From modern design to sustainable practices, we deliver excellence across every project.
                            </p>

                            <div className="space-y-4">
                                {[
                                    { icon: Building2, title: "Modern Architecture", desc: "Contemporary designs with cutting-edge materials" },
                                    { icon: Home, title: "Commercial Design", desc: "Professional environments that inspire" },
                                    { icon: Leaf, title: "Eco-Friendly Design", desc: "Sustainable architecture for tomorrow" }
                                ].map((service, idx) => {
                                    const Icon = service.icon
                                    return (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: 20 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1 }}
                                            className="flex gap-4 items-start"
                                        >
                                            <div className="p-2 rounded-lg bg-orange-100 flex-shrink-0">
                                                <Icon className="w-6 h-6 text-orange-600" />
                                            </div>
                                            <div>
                                                <h3 className="font-bold text-slate-900">{service.title}</h3>
                                                <p className="text-slate-600 text-sm">{service.desc}</p>
                                            </div>
                                        </motion.div>
                                    )
                                })}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="relative px-4 py-20 md:py-28 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Impact</h2>
                        <p className="text-slate-600 text-lg">Proven track record of excellence and client satisfaction</p>
                    </motion.div>

                    <div className="grid md:grid-cols-4 gap-6">
                        {[
                            { number: "250+", label: "Projects Completed", desc: "Successful deliveries" },
                            { number: "15+", label: "Years Experience", desc: "Industry expertise" },
                            { number: "98%", label: "Client Satisfaction", desc: "Happiness rate" },
                            { number: "50+", label: "Awards Won", desc: "Industry recognition" }
                        ].map((stat, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                whileHover={{ y: -8 }}
                            >
                                <Card className="relative p-8 rounded-2xl bg-gradient-to-br from-orange-50 to-slate-50 border border-slate-200 hover:border-orange-300 text-center hover:shadow-lg transition-all duration-300">
                                    <div className="relative z-10">
                                        <motion.div
                                            className="text-5xl font-bold text-orange-600 mb-2"
                                            initial={{ scale: 0.5 }}
                                            whileInView={{ scale: 1 }}
                                            viewport={{ once: true }}
                                        >
                                            {stat.number}
                                        </motion.div>
                                        <div className="text-slate-900 font-semibold mb-1">{stat.label}</div>
                                        <p className="text-slate-600 text-sm">{stat.desc}</p>
                                    </div>
                                </Card>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Vision Section - Image Right */}
            <section className="relative px-4 py-20 md:py-28 bg-slate-50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                        >
                            <div className="inline-flex items-center gap-3 px-4 py-2 mb-6 rounded-full bg-blue-100 border border-blue-200">
                                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
                                <span className="text-sm font-semibold text-blue-700">Our Vision</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Global Leadership in Architecture</h2>

                            <p className="text-slate-700 leading-relaxed text-lg mb-8">
                                To be a globally recognized leader in architectural innovation, creating timeless spaces that harmonize human needs, environmental responsibility, and economic viability. We envision architecture that transcends aesthetics to become a catalyst for positive change in communities worldwide.
                            </p>

                            <div className="space-y-4">
                                {["Innovation", "Sustainability", "Excellence"].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                        <span className="font-semibold text-slate-900">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        {/* Right Image */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-96 md:h-[450px] rounded-2xl overflow-hidden shadow-2xl"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1454496522488-7a8e488e8606?w=800&h=600&fit=crop"
                                alt="Strategic Vision and Planning"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Mission Section - Image Left */}
            <section className="relative px-4 py-20 md:py-28 bg-white">
                <div className="max-w-7xl mx-auto">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        {/* Left Image */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="relative h-96 md:h-[450px] rounded-2xl overflow-hidden order-2 md:order-1 shadow-2xl"
                        >
                            <Image
                                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=800&h=600&fit=crop"
                                alt="Mission and Team Collaboration"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                        </motion.div>

                        {/* Right Content */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="order-1 md:order-2"
                        >
                            <div className="inline-flex items-center gap-3 px-4 py-2 mb-6 rounded-full bg-blue-100 border border-blue-200">
                                <span className="inline-block w-2 h-2 bg-blue-600 rounded-full"></span>
                                <span className="text-sm font-semibold text-blue-700">Our Mission</span>
                            </div>

                            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Delivering Excellence Worldwide</h2>

                            <p className="text-slate-700 leading-relaxed text-lg mb-8">
                                To deliver comprehensive architectural and design solutions that exceed expectations through strategic planning, innovative solutions, and unwavering commitment to quality. We partner with clients globally to transform visions into reality while maintaining the highest standards of professional excellence and sustainable practice.
                            </p>

                            <div className="space-y-4">
                                {["Quality", "Innovation", "Sustainability"].map((item, idx) => (
                                    <motion.div
                                        key={idx}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: idx * 0.1 }}
                                        className="flex items-center gap-3"
                                    >
                                        <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                                        <span className="font-semibold text-slate-900">{item}</span>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

           
            {/* Core Values Section */}
            <section className="relative px-4 py-20 md:py-28 bg-slate-50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Core Values</h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            The principles that guide our every decision and action
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-6">
                        {[
                            { title: "Innovation", desc: "Embracing advanced BIM technology and forward-thinking methodologies", icon: Lightbulb },
                            { title: "Integrity", desc: "Maintaining highest ethical standards in all relationships", icon: Shield },
                            { title: "Sustainability", desc: "Designing with environmental consciousness and responsibility", icon: Leaf },
                            { title: "Collaboration", desc: "Working seamlessly with clients and stakeholders", icon: Users },
                            { title: "Excellence", desc: "Pursuing perfection in every detail and execution", icon: Award },
                            { title: "Creativity", desc: "Discovering unique solutions that set new standards", icon: Sparkles }
                        ].map((value, index) => {
                            const Icon = value.icon
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    whileHover={{ y: -8 }}
                                >
                                    <Card className="relative p-8 rounded-2xl bg-white border border-slate-200 hover:border-orange-300 hover:shadow-lg transition-all duration-300 h-full">
                                        <div className="flex items-start gap-4 mb-4">
                                            <motion.div
                                                className="p-3 rounded-xl bg-orange-100 flex-shrink-0"
                                                whileHover={{ scale: 1.1, rotate: 5 }}
                                            >
                                                <Icon className="w-6 h-6 text-orange-600" />
                                            </motion.div>
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{value.title}</h3>
                                        <p className="text-slate-600 text-sm leading-relaxed">{value.desc}</p>
                                    </Card>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* Process & Methodology Section */}
            <section className="relative px-4 py-20 md:py-28 bg-gradient-to-b from-white to-slate-50">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Our Proven Process</h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            A systematic approach to turning your vision into exceptional architecture
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-5 gap-6 mb-12">
                        {[
                            { num: "01", title: "Discovery", desc: "Understanding your vision, goals, and requirements", icon: Target },
                            { num: "02", title: "Strategy", desc: "Developing comprehensive project strategy", icon: Lightbulb },
                            { num: "03", title: "Design", desc: "Creating innovative design solutions", icon: Palette },
                            { num: "04", title: "Documentation", desc: "Detailed BIM modeling and documentation", icon: Layers },
                            { num: "05", title: "Delivery", desc: "Seamless project execution and support", icon: CheckCircle }
                        ].map((step, index) => {
                            const Icon = step.icon
                            return (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, delay: index * 0.1 }}
                                    className="relative"
                                >
                                    {index < 4 && (
                                        <div className="hidden md:block absolute top-12 left-[60%] right-0 h-0.5 bg-gradient-to-r from-orange-300 to-transparent"></div>
                                    )}
                                    <Card className="relative p-6 rounded-2xl bg-white border border-slate-200 hover:border-orange-400 hover:shadow-lg transition-all duration-300 h-full flex flex-col group">
                                        <div className="flex items-start justify-between mb-4">
                                            <span className="text-3xl font-bold text-orange-600 group-hover:text-orange-700">{step.num}</span>
                                            <div className="p-2 rounded-lg bg-orange-100 group-hover:bg-orange-200 transition-colors">
                                                <Icon className="w-5 h-5 text-orange-600" />
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{step.title}</h3>
                                        <p className="text-slate-600 text-sm flex-1">{step.desc}</p>
                                    </Card>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>
           


            {/* Clients Section */}
            <section className="relative px-4 py-20 md:py-28 bg-white">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        className="text-center mb-16"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-4">Trusted by Leading Organizations</h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
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
                                        <Card className="group relative rounded-2xl bg-white border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 overflow-hidden min-h-32 md:min-h-40 flex flex-col items-center justify-center p-4">
                                            <div className="relative z-10 flex flex-col items-center justify-center h-full w-full text-center gap-3">
                                                <div className="relative w-16 h-16 group-hover:scale-110 transition-transform duration-300 flex-shrink-0 flex items-center justify-center">
                                                    {LogoComponent && <LogoComponent />}
                                                </div>
                                                <p className="text-xs md:text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                                                    {client.name}
                                                </p>
                                                <Badge variant="outline" className="text-xs bg-white text-slate-700 border-slate-300">
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

           <KeyPersonCTA/>
            <Footer />
        </main>
    )
}