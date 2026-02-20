"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"
import { ChevronDown, BookOpen, Users, Handshake, Award, Briefcase, PenTool, Zap, Home, Mail, MessageCircle, Instagram } from "lucide-react"

export function Header() {
    const pathname = usePathname()
    const [isScrolled, setIsScrolled] = useState(false)
    const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false)
    const [connectDropdownOpen, setConnectDropdownOpen] = useState(false)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20)
        }

        window.addEventListener("scroll", handleScroll)
        return () => window.removeEventListener("scroll", handleScroll)
    }, [])

    const navItems = [
        { label: "VIRTUAL TOUR", href: "/virtual-tour", icon: Zap },
        { label: "PORTFOLIO", href: "/portfolio", icon: Briefcase },
        { label: "KEY PERSON", href: "/key-person", icon: Users },
    ]

    const servicesMenuItems = [
        { label: "Architecture", href: "#architecture", icon: Home },
        { label: "Revit BIM Service", href: "#revit-bim", icon: Zap },
        { label: "Outsourcing", href: "#outsourcing", icon: Briefcase },
        { label: "Furniture", href: "#furniture", icon: Briefcase },
        { label: "Engineering", href: "#engineering", icon: PenTool },
        { label: "BIM Drafting", href: "#bim-drafting", icon: PenTool },
        { label: "PMC", href: "#pmc", icon: Briefcase },
        { label: "Lighting", href: "#lighting", icon: Zap },
        { label: "Construction", href: "#construction", icon: Home },
        { label: "BIM Modelling", href: "#bim-modelling", icon: PenTool },
        { label: "Valuation", href: "#valuation", icon: Briefcase },
        { label: "Graphics", href: "#graphics", icon: PenTool },
        { label: "Structure Design", href: "#structure-design", icon: Home },
        { label: "Architectural BIM", href: "#arch-bim", icon: PenTool },
        { label: "Consultancy", href: "#consultancy", icon: Briefcase },
        { label: "Product Design", href: "#product", icon: Briefcase },
        { label: "Master Planning", href: "#master-planning", icon: Home },
        { label: "Structural BIM", href: "#structural-bim", icon: PenTool },
        { label: "Virtual Tour", href: "#virtual-tour", icon: Zap },
        { label: "Packaging", href: "#packaging", icon: Briefcase },
        { label: "Urban Design", href: "#urban-design", icon: Home },
        { label: "Revit Family Creation", href: "#revit-family", icon: PenTool },
        { label: "3D Visualization", href: "#3d-viz", icon: Zap },
        { label: "Fashion Design", href: "#fashion", icon: Briefcase },
        { label: "Landscape Design", href: "#landscape", icon: Home },
        { label: "MEP Services", href: "#mep", icon: Zap },
        { label: "Interior Design", href: "#interior", icon: Home },
        { label: "Exhibition Design", href: "#exhibition", icon: Briefcase },
    ]

    const connectMenuItems = [
        { label: "WhatsApp", href: "https://wa.me/917046127242", description: "Chat with us on WhatsApp", icon: MessageCircle },
        { label: "Email", href: "mailto:mahimhr01@gmail.com", description: "Send us an email", icon: Mail },
        { label: "Instagram", href: "https://instagram.com/", description: "Follow us on Instagram", icon: Instagram },
    ]

    return (
        <motion.header
            className={cn(
                "fixed top-4 left-4 right-4 z-50 transition-all duration-500",
                isScrolled
                    ? "bg-black/85 backdrop-blur-2xl border border-amber-500/40 shadow-2xl"
                    : "bg-black/70 backdrop-blur-xl border border-amber-500/20 shadow-xl",
            )}
            style={{ borderRadius: "24px" }}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: [0.21, 0.47, 0.32, 0.98] }}
        >
            <div className="flex items-center justify-between px-6 lg:px-8 py-4 gap-6">
                {/* Left: Logo - Compact */}
                <Link href="/" className="flex-shrink-0 hidden sm:flex items-center gap-1">
                    <motion.div
                        className="flex items-center gap-1"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Two vertical bars */}
                        <div className="flex gap-0.5">
                            <div className="w-1 h-3 bg-amber-400 rounded-sm" />
                            <div className="w-1 h-4 bg-amber-400 rounded-sm" />
                        </div>

                        {/* Text */}
                        <div className="flex flex-col leading-none">
                            <div className="font-serif font-bold text-amber-400 text-xs leading-tight">MAHIM</div>
                            <div className="h-0.5 bg-amber-400 w-full" />
                            <div className="font-serif text-amber-400 text-xs leading-tight">Architect</div>
                        </div>
                    </motion.div>
                </Link>

                {/* Center: Navigation - expanded to fill space */}
                <nav className="hidden md:flex items-center gap-6 lg:gap-8 flex-1 justify-center">
                    {/* Home Link */}
                    <Link href="/">
                        <motion.div
                            className={cn(
                                "text-xs lg:text-sm font-semibold transition-colors duration-300 relative group whitespace-nowrap cursor-pointer",
                                pathname === "/" ? "text-amber-400" : "text-gray-300 hover:text-amber-400"
                            )}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0, duration: 0.4 }}
                            whileHover={{ y: -1 }}
                        >
                            HOME

                            {/* Underline on active or hover */}
                            <motion.div
                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400/0 via-amber-400 to-amber-400/0"
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={pathname === "/" ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                                whileHover={{ opacity: 1, scaleX: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    </Link>

                    {/* About Us Link */}
                    <Link href="/welcome">
                        <motion.div
                            className={cn(
                                "text-xs lg:text-sm font-semibold transition-colors duration-300 relative group whitespace-nowrap cursor-pointer",
                                pathname === "/welcome" ? "text-amber-400" : "text-gray-300 hover:text-amber-400"
                            )}
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0, duration: 0.4 }}
                            whileHover={{ y: -1 }}
                        >
                            ABOUT US

                            {/* Underline on active or hover */}
                            <motion.div
                                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400/0 via-amber-400 to-amber-400/0"
                                initial={{ opacity: 0, scaleX: 0 }}
                                animate={pathname === "/welcome" ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                                whileHover={{ opacity: 1, scaleX: 1 }}
                                transition={{ duration: 0.3 }}
                            />
                        </motion.div>
                    </Link>



                    {/* Regular Nav Items */}
                    {navItems.map((item, index) => (
                        <Link key={item.label} href={item.href}>
                            <motion.div
                                className={cn(
                                    "text-xs lg:text-sm font-semibold transition-colors duration-300 relative group whitespace-nowrap cursor-pointer",
                                    pathname === item.href ? "text-amber-400" : "text-gray-300 hover:text-amber-400"
                                )}
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: (index + 2) * 0.06, duration: 0.4 }}
                                whileHover={{ y: -1 }}
                            >
                                {item.label}

                                {/* Underline on active or hover */}
                                <motion.div
                                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-amber-400/0 via-amber-400 to-amber-400/0"
                                    initial={{ opacity: 0, scaleX: 0 }}
                                    animate={pathname === item.href ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
                                    whileHover={{ opacity: 1, scaleX: 1 }}
                                    transition={{ duration: 0.3 }}
                                />
                            </motion.div>
                        </Link>
                    ))}
                </nav>

                {/* Right: Connect with Us Button */}
                <div className="relative hidden sm:flex">
                    <motion.button
                        onClick={() => setConnectDropdownOpen(!connectDropdownOpen)}
                        className="px-4 py-2 rounded-full border border-amber-500/60 text-amber-400 text-sm font-semibold hover:bg-amber-500/15 transition-all duration-300 relative group flex items-center gap-2"
                        whileHover={{ scale: 1.06 }}
                        whileTap={{ scale: 0.95 }}
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3, duration: 0.5 }}
                    >
                        <MessageCircle size={16} />
                        <span>Connect</span>
                    </motion.button>

                    {/* Connect Dropdown Menu */}
                    <AnimatePresence>
                        {connectDropdownOpen && (
                            <motion.div
                                className="absolute top-full right-0 mt-4 w-56 bg-black/95 backdrop-blur-xl border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden"
                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                            >
                                {connectMenuItems.map((item, index) => {
                                    const IconComponent = item.icon
                                    return (
                                        <motion.a
                                            key={item.label}
                                            href={item.href}
                                            target={item.label !== "Email" ? "_blank" : undefined}
                                            rel={item.label !== "Email" ? "noopener noreferrer" : undefined}
                                            onClick={() => setConnectDropdownOpen(false)}
                                            className="flex items-start gap-4 px-6 py-3.5 text-sm text-gray-300 hover:bg-amber-500/15 transition-all duration-200 border-b border-amber-500/10 last:border-b-0 group"
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.05, duration: 0.3 }}
                                            whileHover={{ x: 2 }}
                                        >
                                            <motion.div
                                                className="text-amber-400 flex-shrink-0 mt-0.5"
                                                whileHover={{ scale: 1.2, rotate: 5 }}
                                                transition={{ duration: 0.3 }}
                                            >
                                                <IconComponent size={20} />
                                            </motion.div>
                                            <div className="flex-1 min-w-0">
                                                <div className="font-semibold text-gray-200 group-hover:text-amber-400 transition-colors">
                                                    {item.label}
                                                </div>
                                                <div className="text-xs text-gray-500 group-hover:text-gray-400 transition-colors">
                                                    {item.description}
                                                </div>
                                            </div>
                                        </motion.a>
                                    )
                                })}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>

                {/* Mobile Branding Text */}
                <div className="md:hidden flex items-center gap-2">
                    <motion.div
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        {/* Two vertical bars */}
                        <div className="flex gap-0.5">
                            <div className="w-0.5 h-2 bg-amber-400 rounded-sm" />
                            <div className="w-0.5 h-3 bg-amber-400 rounded-sm" />
                        </div>
                        {/* Text */}
                        <span className="text-amber-400 font-serif font-bold text-xs">
                            Mahim Architect
                        </span>
                    </motion.div>
                </div>

                {/* Mobile menu button */}
                <motion.button
                    className="md:hidden flex flex-col gap-1 w-6 h-6 justify-center"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    <motion.div
                        className="w-5 h-0.5 bg-amber-400 rounded-full transition-all"
                        animate={mobileMenuOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                    />
                    <motion.div
                        className="w-4 h-0.5 bg-gray-400 rounded-full transition-all"
                        animate={mobileMenuOpen ? { opacity: 0 } : { opacity: 1 }}
                    />
                    <motion.div
                        className="w-5 h-0.5 bg-amber-400 rounded-full transition-all"
                        animate={mobileMenuOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                    />
                </motion.button>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {mobileMenuOpen && (
                        <motion.div
                            className="absolute top-full left-4 right-4 mt-4 bg-black/95 backdrop-blur-xl border border-amber-500/30 rounded-2xl shadow-2xl overflow-hidden md:hidden"
                            initial={{ opacity: 0, y: -10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            transition={{ duration: 0.2 }}
                        >
                            <div className="p-4 max-h-96 overflow-y-auto">
                                <Link href="/" onClick={() => setMobileMenuOpen(false)}>
                                    <motion.div className={cn(
                                        "px-4 py-3 text-sm font-semibold rounded-lg transition-colors",
                                        pathname === "/" 
                                            ? "text-amber-400 bg-amber-500/15" 
                                            : "text-gray-300 hover:text-amber-400 hover:bg-amber-500/15"
                                    )}>
                                        HOME
                                    </motion.div>
                                </Link>
                                <Link href="/welcome" onClick={() => setMobileMenuOpen(false)}>
                                    <motion.div className={cn(
                                        "px-4 py-3 text-sm font-semibold rounded-lg transition-colors",
                                        pathname === "/welcome" 
                                            ? "text-amber-400 bg-amber-500/15" 
                                            : "text-gray-300 hover:text-amber-400 hover:bg-amber-500/15"
                                    )}>
                                        ABOUT US
                                    </motion.div>
                                </Link>
                                {navItems.map((item) => (
                                    <Link key={item.label} href={item.href} onClick={() => setMobileMenuOpen(false)}>
                                        <motion.div className={cn(
                                            "px-4 py-3 text-sm font-semibold rounded-lg transition-colors",
                                            pathname === item.href 
                                                ? "text-amber-400 bg-amber-500/15" 
                                                : "text-gray-300 hover:text-amber-400 hover:bg-amber-500/15"
                                        )}>
                                            {item.label}
                                        </motion.div>
                                    </Link>
                                ))}
                                <div className="border-t border-amber-500/20 my-2" />
                                {connectMenuItems.map((item) => (
                                    <a
                                        key={item.label}
                                        href={item.href}
                                        target={item.label !== "Email" ? "_blank" : undefined}
                                        rel={item.label !== "Email" ? "noopener noreferrer" : undefined}
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="block"
                                    >
                                        <motion.div className="px-4 py-3 text-sm font-semibold text-gray-300 hover:text-amber-400 hover:bg-amber-500/15 rounded-lg transition-colors">
                                            {item.label}
                                        </motion.div>
                                    </a>
                                ))}
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.header>
    )
}