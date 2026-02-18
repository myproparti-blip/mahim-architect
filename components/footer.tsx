"use client"
import { motion } from "framer-motion"
import { Instagram, Mail, MessageCircle, ArrowUpRight } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  const footerLinks = {
    Services: [
      { name: "Architecture", href: "/services" },
      { name: "BIM Services", href: "/services" },
      { name: "Interior Design", href: "/services" },
      { name: "Engineering", href: "/services" },
      { name: "3D Visualization", href: "/services" },
    ],
    Company: [
      { name: "About Us", href: "/welcome" },
      { name: "Design Strategy", href: "/design-strategy" },
      { name: "Portfolio", href: "/portfolio" },
      { name: "Key Person", href: "/key-person" },
      { name: "Contact", href: "https://wa.me/917046127242", target: "_blank" },
    ],
    Support: [
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Cookie Policy", href: "/cookie-policy" },
      { name: "FAQs", href: "/faqs" },
      { name: "Support", href: "/support" },
    ],
  }

  const socialLinks = [
    { name: "WhatsApp", icon: MessageCircle, href: "https://wa.me/917046127242", target: "_blank" },
    { name: "Email", icon: Mail, href: "mailto:mahimhr01@gmail.com" },
        { name: "Instagram", icon: Instagram, href: "https://instagram.com/", target: "_blank" },

  ]

  return (
    <footer className="bg-white/[0.02] border-t border-white/[0.02]">
      <div className="container-custom py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-neutral-900 mb-4">Mahim Architect</h3>
              <p className="text-neutral-600 mb-6 leading-relaxed">
                Transforming visions into magnificent architectural realities. We craft spaces that inspire, innovate, and endure through thoughtful design and precision engineering.
              </p>
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target={social.target}
                    rel={social.target === "_blank" ? "noopener noreferrer" : undefined}
                    className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-neutral-600 hover:text-white hover:bg-amber-600 transition-all duration-200 group shadow-md hover:shadow-lg"
                    whileHover={{ scale: 1.15, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <social.icon size={18} className="group-hover:scale-125 transition-transform" />
                    <span className="sr-only">{social.name}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links Sections */}
          <div className="lg:col-span-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
              {Object.entries(footerLinks).map(([category, links], index) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <h4 className="font-semibold text-neutral-900 mb-4">{category}</h4>
                  <ul className="space-y-3">
                    {links.map((link: any) => (
                       <li key={link.name}>
                         <a
                           href={link.href}
                           target={link.target}
                           rel={link.target === "_blank" ? "noopener noreferrer" : undefined}
                           className="text-neutral-600 hover:text-neutral-900 transition-colors duration-200 group flex items-center"
                         >
                           {link.name}
                           <ArrowUpRight
                             size={14}
                             className="ml-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                           />
                         </a>
                       </li>
                     ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="pt-8 pb-4 border-t border-neutral-200 flex justify-center items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-neutral-500 text-center">
            <p>&copy; {currentYear} Mahim Architect. All rights reserved.</p>
            <div className="flex space-x-6">
              <a href="/privacy-policy" className="hover:text-neutral-700 transition-colors">
                Privacy Policy
              </a>
              <a href="/terms-of-service" className="hover:text-neutral-700 transition-colors">
                Terms of Service
              </a>
              <a href="/cookie-policy" className="hover:text-neutral-700 transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  )
}
