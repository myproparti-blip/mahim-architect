"use client"

import { motion } from "framer-motion"
import { CountUp } from "./count-up"

const stats = [
  {
    value: 150,
    label: "Virtual Tours",
    suffix: "+",
  },
  {
    value: 50000,
    label: "Panoramic Images",
    suffix: "+",
  },
  {
    value: 25,
    label: "Countries",
    suffix: "",
  },
  {
    value: 1000000,
    label: "Total Views",
    suffix: "+",
  },
]

export function VirtualTourStats() {
  return (
    <section className="py-20 bg-white border-t border-neutral-200">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-4xl lg:text-5xl font-bold text-amber-600 mb-2">
                <CountUp end={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-neutral-600 font-semibold text-sm lg:text-base uppercase tracking-widest">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
