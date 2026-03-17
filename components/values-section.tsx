"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import { Leaf, Heart, Sparkles, Globe } from "lucide-react"

const values = [
  {
    icon: Leaf,
    title: "Sustainable Practices",
    description: "From organic cotton to recycled packaging, every decision reflects our commitment to the planet.",
  },
  {
    icon: Heart,
    title: "Artisan Craftsmanship",
    description: "Each garment is handcrafted by skilled artisans, preserving traditional techniques passed through generations.",
  },
  {
    icon: Sparkles,
    title: "Timeless Design",
    description: "We create pieces that transcend seasons, designed to be worn and loved for years to come.",
  },
  {
    icon: Globe,
    title: "Global Community",
    description: "A worldwide network of conscious consumers who share our vision for thoughtful fashion.",
  },
]

export function ValuesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section className="bg-background py-24 md:py-32" ref={ref}>
      <div className="px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <p className="text-xs tracking-[0.2em] text-muted-foreground">
              OUR PHILOSOPHY
            </p>
            <h2 className="mt-4 font-serif text-4xl md:text-5xl">
              Built on Values
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-muted-foreground">
              We believe that true luxury lies not in excess, but in the 
              thoughtful consideration of every detail, every material, 
              and every person involved in creating our garments.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="mt-20 grid gap-px bg-border md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group bg-background p-8 transition-colors hover:bg-card md:p-10"
              >
                <div className="flex h-14 w-14 items-center justify-center border border-border transition-colors group-hover:border-foreground group-hover:bg-foreground">
                  <value.icon 
                    className="h-6 w-6 text-foreground transition-colors group-hover:text-primary-foreground" 
                    strokeWidth={1.5} 
                  />
                </div>
                <h3 className="mt-6 text-sm tracking-[0.1em]">{value.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
