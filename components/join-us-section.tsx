"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Check, Loader2, X, CheckCircle, User, Mail, FileText, MessageSquare, Briefcase, BookOpen } from "lucide-react"
import { Reveal } from "./reveal"
import { BlurPanel } from "./blur-panel"
import { AnimatedText } from "./animated-text"
import emailjs from "@emailjs/browser"
import { toast } from "sonner"

export function JoinUsSection() {
    const [showForm, setShowForm] = useState(false)
    const [showSuccess, setShowSuccess] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        internship: "",
        training: "",
        interests: ""
    })

    // Initialize EmailJS on component mount
    useEffect(() => {
        emailjs.init("GDoVlmdwCiHEmV0re")
    }, [])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const validateForm = () => {
        const required = ["name", "email", "subject"]
        return required.every(field => formData[field as keyof typeof formData]?.trim())
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!validateForm()) {
            toast.error("Please fill in all required fields")
            return
        }

        setIsLoading(true)

        try {
            const messageContent = `
Name: ${formData.name}
Email: ${formData.email}
Subject: ${formData.subject}

Message:
${formData.message}

Internship Interest: ${formData.internship || "Not specified"}
Training Interest: ${formData.training || "Not specified"}
Other Interests: ${formData.interests || "Not specified"}
            `

            await emailjs.send(
                "service_edhxzp8",
                "template_2v7qolz",
                {
                    email: formData.email,
                    name: formData.name,
                    subject: formData.subject,
                    message: messageContent
                }
            )

            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
                internship: "",
                training: "",
                interests: ""
            })
            setShowForm(false)
            setShowSuccess(true)

            setTimeout(() => setShowSuccess(false), 5000)
        } catch (error) {
            console.error("Email send error:", error)
            toast.error("Failed to send your request. Please try again.")
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <section className="py-16 sm:py-24 lg:py-40 bg-gradient-to-b from-white to-neutral-50 overflow-hidden">
            <div className="container-custom">
                <Reveal>
                    <div className="max-w-5xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8">
                        {/* Header */}
                        <div className="text-center mb-12 sm:mb-16 lg:mb-20 px-2 sm:px-0">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-neutral-900 mb-4 sm:mb-6 leading-tight">
                                <AnimatedText text="Join Our " delay={0.2} />
                                <span className="italic font-light text-transparent bg-clip-text bg-gradient-to-r from-amber-600 to-amber-500">
                                    <AnimatedText text="Growing Team." delay={0.5} />
                                </span>
                            </h2>
                            <p className="text-base sm:text-lg md:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto px-2 sm:px-0">
                                Whether you're looking for an internship, training opportunity, or collaboration, we'd love to hear from you. Let's build something amazing together.
                            </p>
                        </div>

                        {/* Main CTA Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
                            {/* Internship Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white border border-neutral-200 hover:border-amber-500 hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col"
                                onClick={() => {
                                    setFormData(prev => ({ ...prev, subject: "internship" }))
                                    setShowForm(true)
                                }}
                            >
                                <div className="w-12 sm:w-14 h-12 sm:h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4 sm:mb-5 flex-shrink-0">
                                    <Briefcase className="w-6 sm:w-7 h-6 sm:h-7 text-amber-600" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3">Internship Programs</h3>
                                <p className="text-sm sm:text-base text-neutral-600 mb-6 flex-grow">
                                    Gain real-world experience in architecture, design, and technology with mentorship from industry experts.
                                </p>
                                <div className="flex items-center text-amber-600 font-semibold group text-sm sm:text-base">
                                    Apply Now
                                    <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                                </div>
                            </motion.div>

                            {/* Training Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white border border-neutral-200 hover:border-amber-500 hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col"
                                onClick={() => {
                                    setFormData(prev => ({ ...prev, subject: "training" }))
                                    setShowForm(true)
                                }}
                            >
                                <div className="w-12 sm:w-14 h-12 sm:h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4 sm:mb-5 flex-shrink-0">
                                    <BookOpen className="w-6 sm:w-7 h-6 sm:h-7 text-amber-600" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3">Training Courses</h3>
                                <p className="text-sm sm:text-base text-neutral-600 mb-6 flex-grow">
                                    Upskill with our comprehensive training programs in BIM, 3D visualization, and architectural design.
                                </p>
                                <div className="flex items-center text-amber-600 font-semibold group text-sm sm:text-base">
                                    Explore Courses
                                    <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                                </div>
                            </motion.div>

                            {/* Collaboration Card */}
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: 0.3 }}
                                viewport={{ once: true }}
                                className="p-6 sm:p-8 rounded-xl sm:rounded-2xl bg-white border border-neutral-200 hover:border-amber-500 hover:shadow-lg transition-all duration-300 cursor-pointer h-full flex flex-col"
                                onClick={() => {
                                    setFormData(prev => ({ ...prev, subject: "collaboration" }))
                                    setShowForm(true)
                                }}
                            >
                                <div className="w-12 sm:w-14 h-12 sm:h-14 bg-amber-100 rounded-full flex items-center justify-center mb-4 sm:mb-5 flex-shrink-0">
                                    <Mail className="w-6 sm:w-7 h-6 sm:h-7 text-amber-600" />
                                </div>
                                <h3 className="text-xl sm:text-2xl font-bold text-neutral-900 mb-3">Collaboration</h3>
                                <p className="text-sm sm:text-base text-neutral-600 mb-6 flex-grow">
                                    Partner with us on exciting projects and bring your vision to life through strategic collaboration.
                                </p>
                                <div className="flex items-center text-amber-600 font-semibold group text-sm sm:text-base">
                                    Get in Touch
                                    <span className="ml-2 group-hover:translate-x-2 transition-transform">→</span>
                                </div>
                            </motion.div>
                        </div>

                        {/* CTA Button */}
                        {!showForm && !showSuccess && (
                            <motion.div
                                className="text-center px-2"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: 0.5 }}
                            >
                                <motion.button
                                    onClick={() => setShowForm(true)}
                                    className="px-6 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-amber-600 to-amber-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-200 text-sm sm:text-lg w-full sm:w-auto"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                >
                                    Start Your Journey With Us
                                </motion.button>
                            </motion.div>
                        )}
                    </div>
                </Reveal>
            </div>

            {/* Form Modal */}
            <AnimatePresence>
                {showForm && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowForm(false)}
                    >
                        <motion.div
                            className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 w-full max-w-3xl shadow-2xl my-4 sm:my-auto max-h-[90vh] overflow-y-auto"
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* Close Button */}
                            <button
                                onClick={() => setShowForm(false)}
                                className="absolute top-3 sm:top-4 right-3 sm:right-4 text-neutral-400 hover:text-neutral-900 transition-colors"
                            >
                                <X size={24} className="sm:w-7 sm:h-7" />
                            </button>

                            {/* Form Header */}
                            <div className="mb-6 pr-8">
                                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-neutral-900 mb-1">Tell Us About Yourself</h3>
                                <p className="text-xs sm:text-sm lg:text-base text-neutral-600">
                                    We're excited to learn more about you and how we can work together.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-4">
                                {/* Name & Email Row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    {/* Name Field */}
                                    <div>
                                        <label className="block text-xs lg:text-sm font-semibold text-neutral-900 mb-1.5">
                                            <div className="flex items-center gap-2">
                                                <User size={14} className="text-amber-600" />
                                                Full Name <span className="text-red-500">*</span>
                                            </div>
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder="John Doe"
                                            value={formData.name}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 rounded-lg bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all"
                                        />
                                    </div>

                                    {/* Email Field */}
                                    <div>
                                        <label className="block text-xs lg:text-sm font-semibold text-neutral-900 mb-1.5">
                                            <div className="flex items-center gap-2">
                                                <Mail size={14} className="text-amber-600" />
                                                Email <span className="text-red-500">*</span>
                                            </div>
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            placeholder="john@example.com"
                                            value={formData.email}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 rounded-lg bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all"
                                        />
                                    </div>
                                </div>

                                {/* Subject & Internship Row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    {/* Subject Field */}
                                    <div>
                                        <label className="block text-xs lg:text-sm font-semibold text-neutral-900 mb-1.5">
                                            <div className="flex items-center gap-2">
                                                <FileText size={14} className="text-amber-600" />
                                                What brings you? <span className="text-red-500">*</span>
                                            </div>
                                        </label>
                                        <select
                                            name="subject"
                                            value={formData.subject}
                                            onChange={handleChange}
                                            required
                                            className="w-full px-3 py-2 rounded-lg bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all appearance-none"
                                        >
                                            <option value="">Select...</option>
                                            <option value="internship">Internship Program</option>
                                            <option value="training">Training Course</option>
                                            <option value="collaboration">Collaboration</option>
                                            <option value="project">Project Inquiry</option>
                                            <option value="recruitment">Job Opportunity</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    {/* Internship Interest */}
                                    <div>
                                        <label className="block text-xs lg:text-sm font-semibold text-neutral-900 mb-1.5">
                                            <div className="flex items-center gap-2">
                                                <Briefcase size={14} className="text-amber-600" />
                                                Internship Interest
                                            </div>
                                        </label>
                                        <select
                                            name="internship"
                                            value={formData.internship}
                                            onChange={handleChange}
                                            className="w-full px-3 py-2 rounded-lg bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all appearance-none"
                                        >
                                            <option value="">Select...</option>
                                            <option value="yes-full-time">Full-time</option>
                                            <option value="yes-part-time">Part-time</option>
                                            <option value="yes-remote">Remote</option>
                                            <option value="no">Not Interested</option>
                                            <option value="maybe">Maybe Later</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Training Interest */}
                                <div>
                                    <label className="block text-xs lg:text-sm font-semibold text-neutral-900 mb-1.5">
                                        <div className="flex items-center gap-2">
                                            <BookOpen size={14} className="text-amber-600" />
                                            Training Program Interest
                                        </div>
                                    </label>
                                    <select
                                        name="training"
                                        value={formData.training}
                                        onChange={handleChange}
                                        className="w-full px-3 py-2 rounded-lg bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all appearance-none"
                                    >
                                        <option value="">Select a program...</option>
                                        <option value="bim">BIM (Building Information Modeling)</option>
                                        <option value="3d-visualization">3D Visualization & Rendering</option>
                                        <option value="autocad">Advanced AutoCAD</option>
                                        <option value="revit">Revit Architecture</option>
                                        <option value="landscape">Landscape Design</option>
                                        <option value="interior">Interior Design</option>
                                        <option value="sustainability">Sustainable Architecture</option>
                                        <option value="multiple">Multiple Programs</option>
                                    </select>
                                </div>

                                {/* Message & Interests Row */}
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                                    {/* Additional Interests */}
                                    <div>
                                        <label className="block text-xs lg:text-sm font-semibold text-neutral-900 mb-1.5">
                                            <div className="flex items-center gap-2">
                                                <CheckCircle size={14} className="text-amber-600" />
                                                Skills & Interests
                                            </div>
                                        </label>
                                        <textarea
                                            name="interests"
                                            placeholder="Your skills, interests, focus areas..."
                                            value={formData.interests}
                                            onChange={handleChange}
                                            rows={3}
                                            className="w-full px-3 py-2 rounded-lg bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all resize-none"
                                        />
                                    </div>

                                    {/* Message Field */}
                                    <div>
                                        <label className="block text-xs lg:text-sm font-semibold text-neutral-900 mb-1.5">
                                            <div className="flex items-center gap-2">
                                                <MessageSquare size={14} className="text-amber-600" />
                                                About You
                                            </div>
                                        </label>
                                        <textarea
                                            name="message"
                                            placeholder="Background, experience, goals..."
                                            value={formData.message}
                                            onChange={handleChange}
                                            rows={3}
                                            className="w-full px-3 py-2 rounded-lg bg-neutral-50 border border-neutral-200 text-sm text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-amber-500 focus:ring-2 focus:ring-amber-100 transition-all resize-none"
                                        />
                                    </div>
                                </div>

                                {/* Submit Button */}
                                <motion.button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold py-2 sm:py-2.5 px-4 sm:px-6 rounded-lg transition-all duration-200 flex items-center justify-center gap-2 text-xs sm:text-sm lg:text-base mt-2"
                                    whileHover={{ scale: !isLoading ? 1.02 : 1 }}
                                    whileTap={{ scale: !isLoading ? 0.98 : 1 }}
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 size={14} className="sm:w-4 sm:h-4 animate-spin" />
                                            Sending...
                                        </>
                                    ) : (
                                        <>
                                            <Check size={14} className="sm:w-4 sm:h-4" />
                                            Submit Application
                                        </>
                                    )}
                                </motion.button>

                                <p className="text-xs text-neutral-500 text-center mt-2">
                                    We respect your privacy and will only contact you about your application.
                                </p>
                            </form>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Success Modal */}
            <AnimatePresence>
                {showSuccess && (
                    <motion.div
                        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-3 sm:p-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setShowSuccess(false)}
                    >
                        <motion.div
                            className="bg-white rounded-xl sm:rounded-2xl p-6 sm:p-8 w-full max-w-md shadow-2xl text-center"
                            initial={{ opacity: 0, scale: 0.9, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.9, y: 20 }}
                            transition={{ duration: 0.3 }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
                                className="flex justify-center mb-4 sm:mb-6"
                            >
                                <div className="w-16 sm:w-20 h-16 sm:h-20 bg-gradient-to-br from-amber-500 to-amber-600 rounded-full flex items-center justify-center flex-shrink-0">
                                    <Check className="w-8 sm:w-10 h-8 sm:h-10 text-white" />
                                </div>
                            </motion.div>

                            <h3 className="text-2xl sm:text-3xl font-bold text-neutral-900 mb-2 sm:mb-3">Application Received!</h3>
                            <p className="text-neutral-600 text-base sm:text-lg mb-2">
                                Thank you for your interest in joining Mahim Architect.
                            </p>
                            <p className="text-neutral-500 text-sm sm:text-base mb-6 sm:mb-8">
                                Our team will review your application and get back to you soon at the email address provided.
                            </p>

                            <motion.button
                                onClick={() => setShowSuccess(false)}
                                className="w-full bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-bold py-2.5 sm:py-3 px-4 sm:px-6 rounded-lg transition-all duration-200 text-sm sm:text-base"
                                whileHover={{ scale: 1.02 }}
                                whileTap={{ scale: 0.98 }}
                            >
                                Close
                            </motion.button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}