"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Mail, Phone, X, CheckCircle } from "lucide-react"
import { useState } from "react"

export function KeyPersonCTA() {
  const [showContact, setShowContact] = useState(false)
  const [showSubscription, setShowSubscription] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  })
  
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-r from-neutral-900 to-neutral-800 text-white overflow-hidden">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          className="max-w-3xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-6 bg-amber-600 hover:bg-amber-700 text-white">GET IN TOUCH</Badge>

          <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight">
            Ready to Work With Us?
          </h2>

          <p className="text-xl text-gray-300 mb-10 leading-relaxed">
            Our team of experts is ready to transform your vision into reality. Contact us today to discuss your next project.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              onClick={() => setShowSubscription(true)}
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 text-lg rounded-lg group">
              Schedule Consultation
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              onClick={() => setShowContact(!showContact)}
              variant="outline"
              className="border-white text-white hover:bg-white/10 px-8 py-6 text-lg rounded-lg group"
            >
              Contact Information
            </Button>
          </div>

          {/* Contact Info */}
          {showContact && (
          <motion.div
            className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6 pt-16 border-t border-white/20"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Email - Direct Open */}
            <motion.a
              href="mailto:mahimhr01@gmail.com"
              className="flex items-center gap-4 cursor-pointer group hover:opacity-80 transition-opacity"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                <Mail className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-300 uppercase tracking-widest">Email</p>
                <p className="text-lg font-semibold group-hover:text-amber-400 transition-colors">mahimhr01@gmail.com</p>
              </div>
            </motion.a>

            {/* Phone - Direct Call */}
            <motion.a
              href="tel:+918238377000"
              className="flex items-center gap-4 cursor-pointer group hover:opacity-80 transition-opacity"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-12 h-12 rounded-full bg-amber-600 flex items-center justify-center group-hover:bg-amber-500 transition-colors">
                <Phone className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-sm text-gray-300 uppercase tracking-widest">Phone</p>
                <p className="text-lg font-semibold group-hover:text-amber-400 transition-colors">+91 82383 77000</p>
              </div>
            </motion.a>
          </motion.div>
          )}

          {/* Free Subscription Modal */}
          <AnimatePresence>
            {showSubscription && (
              <motion.div
                className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowSubscription(false)}
              >
                <motion.div
                  className="bg-gradient-to-b from-neutral-900 to-neutral-800 border border-amber-500/30 rounded-2xl p-5 w-96 shadow-2xl"
                  initial={{ opacity: 0, scale: 0.9, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 20 }}
                  transition={{ duration: 0.3 }}
                  onClick={(e) => e.stopPropagation()}
                >
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-white">Free Consultation</h3>
                    <button
                      onClick={() => setShowSubscription(false)}
                      className="text-gray-400 hover:text-white transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="mb-4">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.1, type: "spring" }}
                      className="flex justify-center mb-3"
                    >
                      <CheckCircle className="w-14 h-14 text-amber-500" />
                    </motion.div>
                    <p className="text-gray-300 text-center mb-1 font-semibold text-sm">
                      Get a Free Consultation
                    </p>
                    <p className="text-gray-400 text-center text-xs">
                      Fill in your details and our team will reach out soon
                    </p>
                  </div>

                  <form
                    onSubmit={(e) => {
                      e.preventDefault()
                      console.log("Form submitted:", formData)
                      // Reset form
                      setFormData({ name: "", email: "", subject: "", message: "" })
                      setTimeout(() => setShowSubscription(false), 500)
                    }}
                    className="space-y-4"
                  >
                    {/* Name Field */}
                    <div>
                      <label className="block text-xs text-gray-400 mb-1.5">
                        Your Name <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        required
                        className="w-full px-3 py-1.5 rounded-md bg-neutral-800 border border-amber-500/30 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    {/* Email Field */}
                    <div>
                      <label className="block text-xs text-gray-400 mb-1.5">
                        Your Email <span className="text-amber-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Enter your email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        required
                        className="w-full px-3 py-1.5 rounded-md bg-neutral-800 border border-amber-500/30 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 transition-colors"
                      />
                    </div>

                    {/* Subject Dropdown */}
                    <div>
                      <label className="block text-xs text-gray-400 mb-1.5">
                        Subject
                      </label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full px-3 py-1.5 rounded-md bg-neutral-800 border border-amber-500/30 text-sm text-white focus:outline-none focus:border-amber-500 transition-colors appearance-none"
                      >
                        <option value="">-- Please choose an option --</option>
                        <option value="architecture">Architecture Services</option>
                        <option value="design">Design Consultation</option>
                        <option value="interior">Interior Design</option>
                        <option value="bim">BIM Services</option>
                        <option value="3d-visualization">3D Visualization</option>
                        <option value="landscaping">Landscape Design</option>
                        <option value="project">Project Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    {/* Message Field */}
                    <div>
                      <label className="block text-xs text-gray-400 mb-1.5">
                        Your Message
                      </label>
                      <textarea
                        placeholder="Tell us about your project..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={3}
                        className="w-full px-3 py-1.5 rounded-md bg-neutral-800 border border-amber-500/30 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-amber-500 transition-colors resize-none"
                      />
                    </div>

                    {/* Submit Button */}
                    <Button className="w-full bg-amber-500 hover:bg-amber-600 text-black font-bold py-2 text-sm rounded-md transition-colors">
                      SEND
                    </Button>
                  </form>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  )
}