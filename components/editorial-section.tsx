"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"

export function EditorialSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"]
  })
  
  const y = useTransform(scrollYProgress, [0, 1], [100, -100])

  return (
    <section className="bg-card py-24 md:py-32" ref={ref}>
      <div className="px-6 md:px-12 lg:px-20">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Image Column */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative aspect-[4/5] overflow-hidden">
                <motion.div style={{ y }} className="absolute inset-0">
                  <Image
                    src="/images/lookbook-1.jpg"
                    alt="Spring collection lookbook"
                    fill
                    className="object-cover"
                  />
                </motion.div>
              </div>
              {/* Floating Tag */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="absolute -bottom-6 -right-6 bg-foreground px-8 py-6 text-primary-foreground md:-right-12"
              >
                <p className="text-xs tracking-[0.15em]">LOOKBOOK</p>
                <p className="mt-1 font-serif text-xl">SS 2026</p>
              </motion.div>
            </motion.div>

            {/* Content Column */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-col justify-center lg:pl-8"
            >
              <p className="text-xs tracking-[0.2em] text-muted-foreground">
                THE JOURNAL
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight md:text-5xl lg:text-6xl">
                <span className="block text-balance">The Art of</span>
                <span className="block text-balance italic">Mindful Dressing</span>
              </h2>
              <p className="mt-8 max-w-md text-sm leading-relaxed text-muted-foreground">
                In a world of fleeting trends, we believe in the enduring power 
                of thoughtfully designed pieces. Our Spring collection celebrates 
                the beauty of simplicity and the luxury of well-made garments 
                that transcend seasons.
              </p>
              <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
                Each piece is crafted with intention, using natural materials 
                sourced from the finest mills in Italy and Portugal, ensuring 
                both exceptional quality and environmental responsibility.
              </p>

              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href="/journal"
                  className="group inline-flex items-center gap-3 bg-foreground px-8 py-4 text-xs tracking-[0.15em] text-primary-foreground transition-all hover:gap-5"
                >
                  READ THE STORY
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                </Link>
                <Link
                  href="/collections"
                  className="inline-flex items-center justify-center px-8 py-4 text-xs tracking-[0.15em] text-foreground underline underline-offset-4 transition-colors hover:text-muted-foreground"
                >
                  SHOP THE LOOK
                </Link>
              </div>

              {/* Quote */}
              <blockquote className="mt-16 border-l-2 border-border pl-6">
                <p className="font-serif text-lg italic text-foreground">
                  "True style is not about following trends, but about 
                  understanding yourself."
                </p>
                <cite className="mt-4 block text-xs tracking-[0.1em] text-muted-foreground not-italic">
                  — MARIE LAURENT, CREATIVE DIRECTOR
                </cite>
              </blockquote>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  )
}
