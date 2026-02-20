"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Check, Mail, Loader2 } from "lucide-react"
import { Reveal } from "./reveal"
import { BlurPanel } from "./blur-panel"
import { AnimatedText } from "./animated-text"
import emailjs from "@emailjs/browser"

export function NewsletterSection() {
    const [email, setEmail] = useState("")
    const [isSubmitted, setIsSubmitted] = useState(false)
    const [isValid, setIsValid] = useState(true)
    const [isLoading, setIsLoading] = useState(false)

    // Initialize EmailJS on component mount
    useEffect(() => {
        emailjs.init("GDoVlmdwCiHEmV0re")
    }, [])

    const validateEmail = (email: string) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        return re.test(email)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (validateEmail(email)) {
            setIsLoading(true)
            try {
                await emailjs.send(
                    "service_edhxzp8",
                    "template_2v7qolz",
                    {
                        email: email,
                        name: "Newsletter Subscriber",
                        subject: "Newsletter Subscription",
                        message: `New newsletter subscription from: ${email}`
                    }
                )
                setIsSubmitted(true)
                setIsValid(true)
            } catch (error) {
                console.error("Email send error:", error)
                setIsValid(false)
            } finally {
                setIsLoading(false)
            }
        } else {
            setIsValid(false)
        }
    }

    return (
        <section className="py-24 lg:py-40 bg-white">
            <div className="container-custom">
                <Reveal>
                    <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-12 lg:mb-16">
                            <h2 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6 leading-tight">
                                <AnimatedText text="Get " delay={0.2} />
                                <span className="italic font-light">
                                    <AnimatedText text="updates regularly." delay={0.5} />
                                </span>
                            </h2>
                            <p className="text-lg lg:text-xl text-neutral-600 leading-relaxed max-w-2xl mx-auto">
                                Subscribe to receive news about our latest projects, design tips, and upcoming features.
                            </p>
                        </div>

                        {!isSubmitted ? (
                            <form onSubmit={handleSubmit} className="space-y-5 max-w-lg mx-auto">
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                        <Mail size={18} className="text-neutral-400" />
                                    </div>
                                    <input
                                        type="email"
                                        value={email}
                                        onChange={(e) => {
                                            setEmail(e.target.value)
                                            setIsValid(true)
                                        }}
                                        placeholder="Enter your email address"
                                        className={`w-full pl-14 pr-6 py-3.5 bg-white border text-neutral-900 placeholder-neutral-400 focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all duration-200 text-base rounded-full ${!isValid ? "border-red-300 focus:ring-red-500" : "border-neutral-200 focus:ring-neutral-900"
                                            }`}
                                    />
                                </div>

                                {!isValid && (
                                    <motion.p
                                        className="text-sm text-red-600 text-center"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        Please enter a valid email address
                                    </motion.p>
                                )}

                                <motion.button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full bg-neutral-900 text-white py-3.5 rounded-full font-semibold hover:bg-neutral-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 flex items-center justify-center gap-2 text-base"
                                    whileHover={{ scale: !isLoading ? 1.01 : 1 }}
                                    whileTap={{ scale: !isLoading ? 0.99 : 1 }}
                                >
                                    {isLoading ? (
                                        <>
                                            <Loader2 size={18} className="animate-spin" />
                                            Subscribing...
                                        </>
                                    ) : (
                                        "Subscribe to Newsletter"
                                    )}
                                </motion.button>
                            </form>
                        ) : (
                            <motion.div
                                className="text-center py-8"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Check size={24} className="text-green-600" />
                                </div>
                                <h3 className="text-xl font-semibold text-neutral-900 mb-2">Welcome to Mahim Architect</h3>
                                <p className="text-neutral-600">
                                    Thank you for subscribing. You'll receive our next newsletter with exclusive architectural insights, project highlights, and service announcements.
                                </p>
                            </motion.div>
                        )}

                        <p className="text-sm text-neutral-500 text-center mt-8">
                            We respect your privacy. Unsubscribe at any time. Read our{" "}
                            <a href="/privacy-policy" className="underline hover:text-neutral-700 transition-colors">
                                Privacy Policy
                            </a>
                            .
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    )
}
