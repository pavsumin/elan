"use client"

import { useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { motion, useInView, useScroll, useTransform } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

const timeline = [
  {
    year: "2001",
    title: "The Beginning",
    description: "Founded in a small Parisian atelier with a vision of creating timeless, sustainable fashion.",
  },
  {
    year: "2008",
    title: "Global Expansion",
    description: "Opened our first international boutiques in London, New York, and Tokyo.",
  },
  {
    year: "2015",
    title: "Sustainable Commitment",
    description: "Achieved 100% sustainable materials sourcing and carbon-neutral production.",
  },
  {
    year: "2020",
    title: "Digital Innovation",
    description: "Launched our digital-first approach, bringing the boutique experience online.",
  },
  {
    year: "2026",
    title: "25 Years of Craft",
    description: "Celebrating a quarter century of timeless elegance and sustainable luxury.",
  },
]

const values = [
  {
    number: "01",
    title: "Intentional Design",
    description: "Every piece is designed to transcend seasons, becoming a lasting part of your wardrobe.",
  },
  {
    number: "02",
    title: "Ethical Production",
    description: "We partner with artisans who share our commitment to fair wages and safe working conditions.",
  },
  {
    number: "03",
    title: "Natural Materials",
    description: "Only the finest organic and sustainably sourced fabrics meet our exacting standards.",
  },
  {
    number: "04",
    title: "Enduring Quality",
    description: "Crafted to be worn, loved, and passed down through generations.",
  },
]

export default function AboutPage() {
  const heroRef = useRef(null)
  const timelineRef = useRef(null)
  const valuesRef = useRef(null)
  const isTimelineInView = useInView(timelineRef, { once: true, margin: "-100px" })
  const isValuesInView = useInView(valuesRef, { once: true, margin: "-100px" })
  
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  })
  
  const heroY = useTransform(scrollYProgress, [0, 1], [0, 200])
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">
        {/* Hero Section */}
        <section ref={heroRef} className="relative min-h-[70vh] overflow-hidden">
          <motion.div style={{ y: heroY }} className="absolute inset-0">
            <Image
              src="/images/about-atelier.jpg"
              alt="ÉLAN atelier"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-foreground/50" />
          </motion.div>

          <motion.div 
            style={{ opacity: heroOpacity }}
            className="relative flex min-h-[70vh] items-center px-6 md:px-12 lg:px-20"
          >
            <div className="mx-auto max-w-7xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-2xl"
              >
                <p className="text-xs tracking-[0.2em] text-primary-foreground/70">
                  OUR STORY
                </p>
                <h1 className="mt-4 font-serif text-5xl text-primary-foreground md:text-6xl lg:text-7xl">
                  <span className="block text-balance">Crafting Beauty</span>
                  <span className="block text-balance italic">Since 2001</span>
                </h1>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Introduction */}
        <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="font-serif text-4xl leading-tight md:text-5xl">
                  We believe in the power of thoughtful design
                </h2>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <p className="text-sm leading-relaxed text-muted-foreground">
                  In a world of fast fashion and fleeting trends, ÉLAN stands as a beacon 
                  of intentional design and sustainable luxury. Founded by Marie Laurent 
                  in 2001, our maison has dedicated over two decades to crafting pieces 
                  that transcend seasons and speak to the timeless in all of us.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Every garment that bears our name begins with a simple question: will 
                  this piece be loved and worn for years to come? This guiding principle 
                  informs every decision we make, from the materials we source to the 
                  artisans we partner with.
                </p>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Our commitment to sustainability is not a marketing strategy—it is the 
                  foundation upon which our entire philosophy rests. True luxury, we 
                  believe, lies not in excess but in the thoughtful consideration of 
                  every detail.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="bg-card px-6 py-24 md:px-12 md:py-32 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="relative aspect-[4/5] overflow-hidden"
              >
                <Image
                  src="/images/founder.jpg"
                  alt="Marie Laurent, Founder & Creative Director"
                  fill
                  className="object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex flex-col justify-center"
              >
                <p className="text-xs tracking-[0.2em] text-muted-foreground">
                  THE VISIONARY
                </p>
                <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                  Marie Laurent
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  Founder & Creative Director
                </p>
                <blockquote className="mt-8 border-l-2 border-border pl-6">
                  <p className="font-serif text-xl italic leading-relaxed">
                    "Fashion should not be about following trends, but about 
                    understanding yourself. The most elegant choice is always 
                    the most considered one."
                  </p>
                </blockquote>
                <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                  With over 30 years in the fashion industry, Marie brings a unique 
                  perspective that balances artistry with responsibility. Her vision 
                  continues to guide ÉLAN toward a future where luxury and 
                  sustainability are inseparable.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Timeline */}
        <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20" ref={timelineRef}>
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <p className="text-xs tracking-[0.2em] text-muted-foreground">
                OUR JOURNEY
              </p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                25 Years of Excellence
              </h2>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 top-0 hidden h-full w-px bg-border md:left-1/2 md:block" />

              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isTimelineInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`relative mb-12 md:mb-16 ${
                    index % 2 === 0 ? "md:pr-[55%]" : "md:pl-[55%]"
                  }`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-2 hidden h-3 w-3 -translate-x-1/2 bg-foreground md:left-1/2 md:block" />
                  
                  <div className={`${index % 2 === 0 ? "md:text-right" : ""}`}>
                    <span className="font-serif text-4xl text-muted-foreground/30">
                      {item.year}
                    </span>
                    <h3 className="mt-2 text-lg">{item.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-foreground px-6 py-24 text-primary-foreground md:px-12 md:py-32 lg:px-20" ref={valuesRef}>
          <div className="mx-auto max-w-7xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="mb-16"
            >
              <p className="text-xs tracking-[0.2em] text-primary-foreground/60">
                OUR PRINCIPLES
              </p>
              <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                What Guides Us
              </h2>
            </motion.div>

            <div className="grid gap-px bg-primary-foreground/20 md:grid-cols-2">
              {values.map((value, index) => (
                <motion.div
                  key={value.number}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isValuesInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-foreground p-8 md:p-12"
                >
                  <span className="font-serif text-4xl text-primary-foreground/30">
                    {value.number}
                  </span>
                  <h3 className="mt-4 text-lg">{value.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-primary-foreground/70">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Craft Section */}
        <section className="px-6 py-24 md:px-12 md:py-32 lg:px-20">
          <div className="mx-auto max-w-7xl">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="flex flex-col justify-center"
              >
                <p className="text-xs tracking-[0.2em] text-muted-foreground">
                  THE CRAFT
                </p>
                <h2 className="mt-4 font-serif text-4xl md:text-5xl">
                  Artisan Excellence
                </h2>
                <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
                  Our atelier brings together master craftspeople from across Europe, 
                  each bringing generations of expertise to their work. From pattern 
                  cutting to final finishing, every step is performed by hand with 
                  meticulous attention to detail.
                </p>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                  We believe in preserving traditional techniques while embracing 
                  innovation that serves our commitment to sustainability. The result 
                  is garments that embody the best of both worlds—timeless 
                  craftsmanship with a conscience.
                </p>
                <Link
                  href="/collections"
                  className="group mt-10 inline-flex w-fit items-center gap-3 bg-foreground px-8 py-4 text-xs tracking-[0.15em] text-primary-foreground transition-all hover:gap-5"
                >
                  EXPLORE COLLECTIONS
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                </Link>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative aspect-[4/5] overflow-hidden"
              >
                <Image
                  src="/images/team-craft.jpg"
                  alt="Artisan craftsmanship at ÉLAN"
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}
