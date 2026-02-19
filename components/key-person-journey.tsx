"use client"

import { motion } from "framer-motion"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"

const journeySteps = [
  {
    year: "2009",
    period: "Foundation",
    title: "The Beginning",
    description: "Ashish Patel founded Mahim Architects with a bold vision to revolutionize architectural design in India.",
    metrics: "1 Person, 1 Office",
    icon: "🌱",
    color: "emerald",
  },
  {
    year: "2012",
    period: "Recognition",
    title: "First Achievement",
    description: "Received national recognition for innovative design and sustainable architectural practices.",
    metrics: "5 Professionals",
    icon: "🎖️",
    color: "blue",
  },
  {
    year: "2015",
    period: "Growth",
    title: "Team Expansion",
    description: "Expanded to a diverse team of 20+ architects, designers, and specialized engineers.",
    metrics: "20+ Team Members",
    icon: "📈",
    color: "purple",
  },
  {
    year: "2018",
    period: "Excellence",
    title: "Global Recognition",
    description: "Won multiple international awards for groundbreaking residential and commercial projects.",
    metrics: "Multiple Awards",
    icon: "🏅",
    color: "amber",
  },
  {
    year: "2021",
    period: "Milestone",
    title: "500 Projects",
    description: "Completed over 500 projects across residential, commercial, and public infrastructure.",
    metrics: "500+ Projects",
    icon: "🎯",
    color: "rose",
  },
  {
    year: "2024",
    period: "Global",
    title: "World Class",
    description: "Expanded internationally with offices in multiple countries maintaining design excellence.",
    metrics: "Global Presence",
    icon: "🚀",
    color: "cyan",
  },
]

const colorClasses = {
  emerald: "from-emerald-500 to-emerald-600",
  blue: "from-blue-500 to-blue-600",
  purple: "from-purple-500 to-purple-600",
  amber: "from-amber-500 to-amber-600",
  rose: "from-rose-500 to-rose-600",
  cyan: "from-cyan-500 to-cyan-600",
}

const bgColors = {
  emerald: "bg-emerald-50",
  blue: "bg-blue-50",
  purple: "bg-purple-50",
  amber: "bg-amber-50",
  rose: "bg-rose-50",
  cyan: "bg-cyan-50",
}

export function KeyPersonJourney() {
  return (
    <section className="py-24 lg:py-32 bg-gradient-to-b from-neutral-50 via-white to-neutral-50">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Badge className="mb-4 bg-amber-600/20 text-amber-600 hover:bg-amber-600/30 border-amber-600/30">
            JOURNEY
          </Badge>
          <h2 className="text-5xl lg:text-6xl font-bold text-neutral-900 mb-6">
            Our <span className="italic font-light text-neutral-600">Growth Story</span>
          </h2>
          <p className="text-lg text-neutral-600 max-w-3xl mx-auto leading-relaxed">
            From a single visionary to an international design powerhouse, witness our remarkable journey of innovation and excellence.
          </p>
        </motion.div>

        {/* Vertical Step Timeline */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Animated Background Line */}
            <motion.div
              className="absolute right-4 md:left-1/2 md:right-auto md:transform md:-translate-x-1/2 w-1 bg-gradient-to-b from-emerald-500 via-amber-500 to-cyan-500"
              initial={{ height: 0 }}
              whileInView={{ height: "100%" }}
              transition={{ duration: 1.5 }}
              viewport={{ once: true }}
            />

            {/* Steps */}
            <div className="space-y-12">
              {journeySteps.map((step, index) => (
                <motion.div
                  key={step.year}
                  className={`flex gap-4 md:gap-8 items-start ${index % 2 === 0 ? "flex-row md:flex-row" : "md:flex-row-reverse flex-row"}`}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  {/* Content Card */}
                  <div className="flex-1 md:flex-1">
                    <Card className={`border-2 border-transparent hover:border-amber-600 transition-all duration-300 group overflow-hidden`}>
                      {/* Top Gradient Bar */}
                      <div className={`h-2 bg-gradient-to-r ${colorClasses[step.color as keyof typeof colorClasses]}`} />

                      <CardContent className="p-6 md:p-8">
                        {/* Year & Period */}
                        <div className="flex items-center gap-3 mb-3">
                          <Badge className={`bg-gradient-to-r ${colorClasses[step.color as keyof typeof colorClasses]} text-white text-xs md:text-sm`}>
                            {step.year}
                          </Badge>
                          <span className="text-xs font-bold text-neutral-500 uppercase tracking-widest hidden md:inline-block">
                            {step.period}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-bold text-neutral-900 mb-3 group-hover:text-amber-600 transition-colors">
                          {step.title}
                        </h3>

                        {/* Description */}
                        <p className="text-sm md:text-base text-neutral-600 leading-relaxed mb-4">
                          {step.description}
                        </p>

                        {/* Metrics Badge */}
                        <div className={`inline-block px-3 md:px-4 py-2 rounded-lg ${bgColors[step.color as keyof typeof bgColors]} text-xs md:text-sm font-semibold text-neutral-700`}>
                          {step.metrics}
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  {/* Center Circle with Icon */}
                  <motion.div
                    className={`relative z-10 w-12 h-12 md:w-16 md:h-16 rounded-full bg-gradient-to-br ${colorClasses[step.color as keyof typeof colorClasses]} flex items-center justify-center text-xl md:text-3xl border-4 border-white shadow-xl flex-shrink-0 group-hover:scale-110 transition-transform mt-1`}
                    whileHover={{ scale: 1.15 }}
                  >
                    {step.icon}
                  </motion.div>

                  {/* Spacer */}
                  <div className="hidden md:block flex-1" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievement Highlights */}
        <motion.div
          className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          {[
            {
              icon: "⭐",
              stat: "25+",
              label: "International Awards",
            },
            {
              icon: "🏗️",
              stat: "500+",
              label: "Projects Completed",
            },
            {
              icon: "👥",
              stat: "50+",
              label: "Team Members",
            },
            {
              icon: "🌍",
              stat: "10+",
              label: "Countries",
            },
          ].map((achievement, i) => (
            <motion.div
              key={achievement.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              viewport={{ once: true }}
            >
              <motion.div
                className="text-4xl mb-3"
                whileHover={{ scale: 1.2, rotate: 10 }}
              >
                {achievement.icon}
              </motion.div>
              <div className="text-3xl font-bold text-amber-600 mb-2">
                {achievement.stat}
              </div>
              <p className="text-sm font-semibold text-neutral-700 uppercase tracking-widest">
                {achievement.label}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Vision Statement */}
        <motion.div
          className="mt-20 max-w-2xl mx-auto text-center p-8 rounded-lg bg-gradient-to-br from-amber-50 via-white to-amber-50 border border-amber-200"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <p className="text-lg font-semibold text-neutral-900 mb-2 italic">
            "Our journey is a testament to the power of vision, passion, and unwavering commitment to excellence."
          </p>
          <p className="text-neutral-600">
            Every project we undertake, every team member we nurture, and every award we win is a milestone in our quest to redefine
            architecture and design globally.
          </p>
        </motion.div>
      </div>
    </section>
  )
}
